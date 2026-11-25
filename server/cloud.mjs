import {createHash,createHmac,randomBytes,timingSafeEqual} from 'node:crypto';
import {generateBank,AppError} from './ai.mjs';
import {registerCustomBank} from '../public/engine.js';

const cookieName='__Host-av-teacher';
const sessionLength=10*60*60*1000;
const securityHeaders={
  'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff', 'Referrer-Policy':'no-referrer'
};
const digest=value=>createHash('sha256').update(value).digest();
const same=(a,b)=>timingSafeEqual(digest(a),digest(b));
function reply(status,data,extra={}){return new Response(JSON.stringify(data),{status,headers:{...securityHeaders,'Content-Type':'application/json; charset=utf-8',...extra}});}
async function readJSON(request,limit){
  if(!/^application\/json(?:;|$)/i.test(request.headers.get('content-type')||''))throw new AppError(415,'JSON wird erwartet.');
  const reader=request.body?.getReader();if(!reader)throw new AppError(400,'Die Anfrage ist leer.');
  let bytes=0;const chunks=[];
  try{
    while(true){const {done,value}=await reader.read();if(done)break;bytes+=value.byteLength;if(bytes>limit){await reader.cancel();throw new AppError(413,'Die Anfrage ist zu groß.');}chunks.push(value);}
  }finally{reader.releaseLock();}
  try{return JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch(_){throw new AppError(400,'Die Anfrage ist nicht lesbar.');}
}
export function createCloudHandler({apiKey=process.env.OPENAI_API_KEY||'',model=process.env.OPENAI_MODEL||'gpt-6-luna',
  password=process.env.APP_PASSWORD||'',sessionSecret=process.env.APP_SESSION_SECRET||'',fetchImpl=globalThis.fetch}={}){
  const configured=password.length>=8;
  const signingKey=createHmac('sha256',sessionSecret||apiKey||password).update('av-teacher-session-v1').update(password).digest();
  const signature=payload=>createHmac('sha256',signingKey).update(payload).digest('base64url');
  function authenticated(request){
    if(!configured)return false;
    const token=(request.headers.get('cookie')||'').split(';').map(v=>v.trim()).find(v=>v.startsWith(cookieName+'='))?.slice(cookieName.length+1);
    if(!token||token.length>200)return false;
    const [expires,nonce,sig,...extra]=token.split('.');
    if(extra.length||!/^\d+$/.test(expires)||!nonce||!sig||Number(expires)<Date.now()||Number(expires)>Date.now()+sessionLength)return false;
    return same(sig,signature(expires+'.'+nonce));
  }
  let generating=false;const attempts=[],loginFailures=[];
  return async function handle(request,endpoint){
    try{
      const url=new URL(request.url),origin=request.headers.get('origin');
      if(origin&&origin!==url.origin)throw new AppError(403,'Diese Herkunft ist nicht erlaubt.');
      if(request.headers.get('sec-fetch-site')==='cross-site')throw new AppError(403,'Diese Herkunft ist nicht erlaubt.');
      const loggedIn=authenticated(request);
      if(endpoint==='status'&&request.method==='GET')return reply(200,{app:'av-rettungseinsatz',ready:true,
        aiConfigured:Boolean(apiKey.trim()),storageMode:'browser',authRequired:true,authenticated:loggedIn,accessConfigured:configured});
      if(endpoint==='session'&&request.method==='DELETE')return reply(200,{authenticated:false},{'Set-Cookie':cookieName+'=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0'});
      if(endpoint==='session'&&request.method==='POST'){
        if(!configured)throw new AppError(503,'Der KI-Zugang ist noch nicht eingerichtet. Hinterlege APP_PASSWORD mit mindestens 8 Zeichen in Vercel.');
        const now=Date.now();while(loginFailures.length&&loginFailures[0]<now-600000)loginFailures.shift();
        if(loginFailures.length>=10)throw new AppError(429,'Zu viele Anmeldeversuche. Bitte warte etwas.');
        const input=await readJSON(request,2048);
        if(typeof input.password!=='string'||input.password.length>500||!same(input.password,password)){
          loginFailures.push(now);throw new AppError(401,'Der Zugangscode stimmt nicht.');
        }
        const payload=String(now+sessionLength)+'.'+randomBytes(16).toString('base64url');
        return reply(200,{authenticated:true},{'Set-Cookie':cookieName+'='+payload+'.'+signature(payload)+'; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=36000'});
      }
      if(endpoint==='banks'&&request.method==='GET')return reply(200,{banks:[],storageMode:'browser'});
      if(endpoint==='banks'&&request.method==='POST'){
        const bank=await readJSON(request,600000);
        try{registerCustomBank(bank);}catch(_){throw new AppError(400,'Dieser Aufgabensatz ist ungültig.');}
        return reply(200,{bank:{id:bank.id,label:bank.label,notes:String(bank.notes||'').slice(0,600),levels:bank.levels,
          questions:bank.questions,approvedAt:new Date().toISOString()},storageMode:'browser'});
      }
      if(endpoint==='generate'&&request.method==='POST'){
        if(!configured)throw new AppError(503,'Der KI-Zugang ist noch nicht eingerichtet. Hinterlege APP_PASSWORD in Vercel.');
        if(!loggedIn)throw new AppError(401,'Schalte die KI zuerst mit deinem Zugangscode im Themenbereich frei.');
        if(generating)throw new AppError(429,'Es werden bereits Aufgaben erstellt. Bitte kurz warten.');
        const now=Date.now();while(attempts.length&&attempts[0]<now-600000)attempts.shift();
        if(attempts.length>=10)throw new AppError(429,'Bitte warte etwas, bevor du weitere KI-Aufgaben erstellst.');
        const input=await readJSON(request,25000);
        if(generating)throw new AppError(429,'Es werden bereits Aufgaben erstellt. Bitte kurz warten.');
        generating=true;attempts.push(now);
        try{
          const bank=await generateBank(input,{apiKey,model,fetchImpl});return reply(200,{bank});
        }finally{generating=false;}
      }
      throw new AppError(405,'Diese Anfrage wird nicht unterstützt.');
    }catch(error){return reply(error.status||500,{error:error.status?error.message:'Ein unerwarteter Fehler ist aufgetreten.'});}
  };
}
export const handleCloud=createCloudHandler();
