import http from 'node:http';
import {readFile,mkdir,readdir,writeFile,rename} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname,join,resolve} from 'node:path';
import {generateBank,AppError} from './ai.mjs';
import {registerCustomBank} from '../public/engine.js';
const project=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const files=new Map([
  ['/',['index.html','text/html; charset=utf-8']],['/index.html',['index.html','text/html; charset=utf-8']],
  ['/styles.css',['styles.css','text/css; charset=utf-8']],['/app.js',['app.js','text/javascript; charset=utf-8']],
  ['/engine.js',['engine.js','text/javascript; charset=utf-8']],['/math.js',['math.js','text/javascript; charset=utf-8']],
  ['/scene.js',['scene.js','text/javascript; charset=utf-8']],['/favicon.svg',['favicon.svg','image/svg+xml']]
]);
const headers={
  'X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer',
  'Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'",
  'Cache-Control':'no-store'
};
function json(response,status,data){response.writeHead(status,{...headers,'Content-Type':'application/json; charset=utf-8'});response.end(JSON.stringify(data));}
async function bodyJSON(request,limit){
  if(!/^application\/json(?:;|$)/i.test(request.headers['content-type']||''))throw new AppError(415,'JSON wird erwartet.');
  let bytes=0;const chunks=[];
  for await(const chunk of request){bytes+=chunk.length;if(bytes>limit)throw new AppError(413,'Die Anfrage ist zu groß.');chunks.push(chunk);}
  try{return JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch(_){throw new AppError(400,'Die Anfrage ist nicht lesbar.');}
}
export function createApp({apiKey=process.env.OPENAI_API_KEY||'',model=process.env.OPENAI_MODEL||'gpt-6.2-astra',
  fetchImpl=globalThis.fetch,dataDirectory=join(project,'data','banks')}={}){
  let generating=false;const attempts=[];
  const server=http.createServer(async(request,response)=>{
    try{
      const port=server.address()?.port;
      const allowedHosts=['localhost:'+port,'127.0.0.1:'+port];
      if(!allowedHosts.includes(request.headers.host))throw new AppError(403,'Dieser Server ist nur lokal erreichbar.');
      const origin=request.headers.origin;
      if(origin&&!allowedHosts.some(host=>origin==='http://'+host))throw new AppError(403,'Diese Herkunft ist nicht erlaubt.');
      const url=new URL(request.url,'http://'+request.headers.host);
      if(request.method==='GET'&&url.pathname==='/api/status')return json(response,200,{app:'av-rettungseinsatz',ready:true,aiConfigured:Boolean(apiKey.trim())});
      if(request.method==='GET'&&url.pathname==='/api/banks'){
        let names;try{names=await readdir(dataDirectory);}catch(error){if(error.code!=='ENOENT')throw error;names=[];}
        const banks=[];
        for(const name of names.filter(n=>/^ai-[a-f0-9-]{36}\.json$/.test(n))){
          try{const bank=JSON.parse(await readFile(join(dataDirectory,name),'utf8'));registerCustomBank(bank);banks.push(bank);}catch(_){/* Keep a damaged saved set out of the topic picker. */}
        }
        return json(response,200,{banks});
      }
      if(request.method==='POST'&&url.pathname==='/api/generate'){
        if(generating)throw new AppError(429,'Es werden bereits Aufgaben erstellt. Bitte kurz warten.');
        const now=Date.now();while(attempts.length&&attempts[0]<now-600000)attempts.shift();
        if(attempts.length>=10)throw new AppError(429,'Bitte warte etwas, bevor du weitere KI-Aufgaben erstellst.');
        const data=await bodyJSON(request,25000);
        if(generating)throw new AppError(429,'Es werden bereits Aufgaben erstellt. Bitte kurz warten.');
        generating=true;
        if(apiKey.trim())attempts.push(now);
        try{const bank=await generateBank(data,{apiKey,model,fetchImpl});return json(response,200,{bank});}
        finally{generating=false;}
      }
      if(request.method==='POST'&&url.pathname==='/api/banks'){
        const bank=await bodyJSON(request,600000);
        try{registerCustomBank(bank);}catch(_){throw new AppError(400,'Dieser Aufgabensatz ist ungültig.');}
        const saved={id:bank.id,label:bank.label,notes:String(bank.notes||'').slice(0,600),levels:bank.levels,
          questions:bank.questions,createdAt:typeof bank.createdAt==='string'?bank.createdAt:new Date().toISOString(),approvedAt:new Date().toISOString()};
        await mkdir(dataDirectory,{recursive:true});
        const target=join(dataDirectory,bank.id+'.json'),temporary=target+'.tmp';
        await writeFile(temporary,JSON.stringify(saved,null,2),'utf8');await rename(temporary,target);
        return json(response,200,{bank:saved});
      }
      if((request.method==='GET'||request.method==='HEAD')&&files.has(url.pathname)){
        const [file,type]=files.get(url.pathname),content=await readFile(join(project,'public',file));
        response.writeHead(200,{...headers,'Content-Type':type});return response.end(request.method==='HEAD'?undefined:content);
      }
      throw new AppError(404,'Diese Seite wurde nicht gefunden.');
    }catch(error){
      if(!response.headersSent)json(response,error.status||500,{error:error.status?error.message:'Ein unerwarteter Fehler ist aufgetreten.'});
      else response.end();
    }
  });
  server.requestTimeout=200000;
  return server;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  try{process.loadEnvFile(join(project,'.env'));}catch(error){if(error.code!=='ENOENT')throw error;}
  const port=Number(process.env.PORT||3456);
  if(!Number.isInteger(port)||port<1024||port>65535)throw new Error('PORT muss zwischen 1024 und 65535 liegen.');
  const server=createApp();
  server.on('error',error=>{console.error(error.code==='EADDRINUSE'?'Der Port ist bereits belegt. Schließe einen laufenden Rettungseinsatz oder ändere PORT in .env.':error.message);process.exitCode=1;});
  server.listen(port,'127.0.0.1',()=>console.log('Rettungseinsatz läuft: http://localhost:'+port));
}
