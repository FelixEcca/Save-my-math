import {reviewBody} from './ai-fixtures.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,readdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createCloudHandler} from '../server/cloud.mjs';
import {build,publicFiles} from '../scripts/build.mjs';
import {loadBrowserBanks,saveBrowserBank} from '../public/storage.js';
import {materializeQuestion} from '../public/math.js';

const password='test-code';
const input={topic:'Flächen',notes:'',level:1,count:1};
const req=(endpoint,method='GET',body,headers={})=>new Request('https://math.example/api/'+endpoint,{method,
 headers:{...(body?{'Content-Type':'application/json'}:{}),...headers},...(body?{body:JSON.stringify(body)}:{})});
const apiResponse=body=>new Response(JSON.stringify({status:'completed',output:[{content:[{type:'output_text',text:JSON.stringify(body)}]}]}));
test('Vercel build contains the entry page and only explicitly public files',async()=>{
 const directory=await mkdtemp(join(tmpdir(),'av-build-'));
 try{
  await build(directory);
  assert.deepEqual((await readdir(directory)).sort(),[...publicFiles].sort());
  const html=await readFile(join(directory,'index.html'),'utf8');assert.match(html,/src="\/app.js"/);
  assert.ok(!html.includes('OPENAI_API_KEY='));
 }finally{await rm(directory,{recursive:true,force:true});}
});
test('Online generation fails closed until access is configured and unlocked',async()=>{
 let calls=0;
 const fetchImpl=async()=>{calls++;throw new Error('Must not run');};
 const unconfigured=createCloudHandler({apiKey:'test-only',password:'',fetchImpl});
 assert.equal((await unconfigured(req('generate','POST',input),'generate')).status,503);
 const tooShort=createCloudHandler({apiKey:'test-only',password:'short',fetchImpl});
 assert.equal((await tooShort(req('session','POST',{password:'short'}),'session')).status,503);
 const configured=createCloudHandler({apiKey:'test-only',password,fetchImpl});
 assert.equal((await configured(req('generate','POST',input),'generate')).status,401);
 assert.equal(calls,0);
 assert.equal((await configured(req('session','POST',{password:'wrong'}),'session')).status,401);
 const foreign=req('session','POST',{password},{Origin:'https://other.example'});
 assert.equal((await configured(foreign,'session')).status,403);
});
test('Teacher sessions unlock generation, use secure cookies and reveal no credentials',async()=>{
 let calls=0;
 const fetchImpl=async(_url,options)=>{
  calls++;return apiResponse(JSON.parse(options.body).text.format.name==='av_questions'?{questions:[
   {prompt:'Ein Rechteck ist 6 cm lang und 4 cm breit. Wie groß ist seine Fläche?',instruction:'Berechne die Fläche.',calculation:'6*4',decimals:0,unit:'cm²',distractors:[20,10]}
  ]}:reviewBody(JSON.parse(options.body)));
 };
 const handler=createCloudHandler({apiKey:'test-only-secret',password,fetchImpl});
 const login=await handler(req('session','POST',{password}),'session');
 assert.equal(login.status,200);
 const cookie=login.headers.get('set-cookie');assert.match(cookie,/HttpOnly; Secure; SameSite=Strict/);
 const cookieHeader=cookie.split(';')[0];
 const status=await handler(req('status','GET',undefined,{Cookie:cookieHeader}),'status');
 const statusText=await status.text();assert.ok(!statusText.includes(password));assert.ok(!statusText.includes('test-only-secret'));
 assert.equal(JSON.parse(statusText).authenticated,true);
 const generated=await handler(req('generate','POST',input,{Cookie:cookieHeader}),'generate');
 assert.equal(generated.status,200);assert.equal(calls,2);
 const tampered=cookieHeader.replace(/.$/,'!');
 assert.equal((await handler(req('generate','POST',input,{Cookie:tampered}),'generate')).status,401);
 const rotated=createCloudHandler({apiKey:'test-only-secret',password:password+'new',fetchImpl});
 assert.equal((await rotated(req('status','GET',undefined,{Cookie:cookieHeader}),'status')).status,200);
 assert.equal((await(await rotated(req('status','GET',undefined,{Cookie:cookieHeader}),'status')).json()).authenticated,false);
 assert.match((await handler(req('session','DELETE'),'session')).headers.get('set-cookie'),/Max-Age=0/);
});
test('Approved online banks need no writable server filesystem and survive browser reloads',async()=>{
 const q=materializeQuestion({prompt:'Was ist 3 · 4?',instruction:'Berechne.',calculation:'3*4',unit:'',decimals:0,distractors:[7,16]},1,'q');
 const bank={id:'ai-aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',label:'Testthema',levels:['1','2','3','4','5'],questions:[q]};
 const handler=createCloudHandler({apiKey:'',password});
 const approved=await handler(req('banks','POST',bank),'banks');assert.equal(approved.status,200);
 const saved=(await approved.json()).bank;
 const values=new Map();const storage={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)};
 saveBrowserBank(saved,storage);assert.equal(loadBrowserBanks(storage)[0].id,bank.id);
 saveBrowserBank({...saved,label:'Updated'},storage);assert.equal(loadBrowserBanks(storage).length,1);
 assert.equal(loadBrowserBanks(storage)[0].label,'Updated');
 assert.deepEqual((await(await handler(req('banks'),'banks')).json()).banks,[]);
 assert.throws(()=>saveBrowserBank(saved,{getItem:()=>null,setItem:()=>{throw new Error('Quota');}}),/Browser/);
});
