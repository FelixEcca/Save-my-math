import {reviewBody} from './ai-fixtures.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createApp} from '../server/index.mjs';
import {generateBank,validateRequest} from '../server/ai.mjs';

const request={topic:'Volumen von Quadern',notes:'Ganze Zahlen, keine Zylinder.',level:1,count:2};
const raw=Array.from({length:2},(_,i)=>({prompt:'Ein Quader ist '+(3+i)+' cm lang, 4 cm breit und 5 cm hoch. Wie groß ist das Volumen?',
 instruction:'Berechne das Volumen.',calculation:(3+i)+'*4*5',unit:'cm³',decimals:0,distractors:[12+i,20+i]}));
const response=body=>new Response(JSON.stringify({status:'completed',output:[{type:'message',content:[{type:'output_text',text:JSON.stringify(body)}]}]}),{status:200});
function fakeAI(review={valid:true,issues:[]}){
 const calls=[];
 const fetchImpl=async(url,init)=>{
  const body=JSON.parse(init.body);calls.push({url,body,headers:init.headers});
  return response(body.text.format.name==='av_questions'?{questions:raw.slice(0,JSON.parse(body.input).count)}:reviewBody(body,review.valid,review.issues));
 };
 return {fetchImpl,calls};
}
async function withServer(config,callback){
 const directory=await mkdtemp(join(tmpdir(),'rescue-test-'));
 const server=createApp({...config,dataDirectory:directory});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const url='http://127.0.0.1:'+server.address().port;
 try{await callback(url,server);}finally{await new Promise(resolve=>server.close(resolve));await rm(directory,{recursive:true,force:true});}
}
test('Input limits and API failures leave no accepted bank',async()=>{
 for(const change of [{count:31},{level:0},{topic:''},{notes:'x'.repeat(601)},{exclude:[12]}])assert.throws(()=>validateRequest({...request,...change}));
 await assert.rejects(()=>generateBank(request,{apiKey:'',model:'example',fetchImpl:fetch}),/API-Schlüssel/);
 const fake=fakeAI({valid:false,issues:['Die Angabe ist nicht eindeutig.']});
 await assert.rejects(()=>generateBank(request,{...fake,apiKey:'test-only',model:'example'}),/Gegenprüfung/);
 await assert.rejects(()=>generateBank(request,{apiKey:'test-only',model:'example',fetchImpl:async()=>new Response('',{status:401})}),/nicht akzeptiert/);
 await assert.rejects(()=>generateBank(request,{apiKey:'test-only',model:'example',fetchImpl:async()=>new Response(JSON.stringify({status:'incomplete',output:[]}),{status:200})}),/unvollständig/);
});
test('Responses requests use schema, server-only credentials and independent review',async()=>{
 const fake=fakeAI();const bank=await generateBank(request,{...fake,apiKey:'test-only-secret',model:'example'});
 assert.equal(bank.questions.length,2);assert.equal(fake.calls.length,2);
 assert.equal(bank.questions[0].values[bank.questions[0].correct],60);
 for(const call of fake.calls){assert.equal(call.url,'https://api.openai.com/v1/responses');assert.equal(call.body.store,false);assert.equal(call.body.text.format.strict,true);assert.equal(call.headers.Authorization,'Bearer test-only-secret');}
 assert.equal(fake.calls[1].body.text.format.name,'av_question_review');
 assert.ok(!JSON.stringify(bank).includes('test-only-secret'));
});
test('Permanent API configuration errors are explained without leaking upstream details',async()=>{
 const secret='test-only-secret';
 const cases=[
  {status:404,code:'model_not_found',message:/KI-Modell ist nicht verfügbar/},
  {status:403,code:'permission_denied',message:/Berechtigung/},
  {status:429,code:'insufficient_quota',message:/API-Guthaben/},
  {status:429,code:'rate_limit_exceeded',message:/zu viele Anfragen/},
  {status:400,code:'invalid_json_schema',message:/Anfrageformat/}
 ];
 for(const item of cases){
  const fetchImpl=async()=>new Response(JSON.stringify({error:{code:item.code,message:'Sensitive diagnostic: '+secret}}),{status:item.status});
  await assert.rejects(()=>generateBank(request,{apiKey:secret,model:'unavailable',fetchImpl}),error=>{
   assert.match(error.message,item.message);assert.ok(!error.message.includes(secret));return true;
  });
 }
 await assert.rejects(()=>generateBank(request,{apiKey:'   ',model:'example',fetchImpl:fetch}),/API-Schlüssel/);
});
test('A mathematically invalid batch is corrected once and independently reviewed',async()=>{
 const calls=[];
 const fetchImpl=async(_url,options)=>{
  const body=JSON.parse(options.body);calls.push(body);
  if(body.text.format.name==='av_question_review')return response(reviewBody(body));
  const questions=structuredClone(raw).slice(0,JSON.parse(body.input).count);
  if(calls.length===1)questions[0].distractors[0]=60;
  return response({questions});
 };
 const bank=await generateBank(request,{apiKey:'test-only',model:'example',fetchImpl});
 assert.equal(bank.questions.length,2);assert.equal(calls.length,4);
 assert.match(JSON.parse(calls[2].input).validationFeedback,/eindeutig/);
 assert.equal(calls[3].text.format.name,'av_question_review');
 let attempts=0;
 const alwaysInvalid=async()=>{attempts++;return response({questions:raw.map(q=>({...q,calculation:'1/0'}))});};
 await assert.rejects(()=>generateBank(request,{apiKey:'test-only',model:'example',fetchImpl:alwaysInvalid}),/gezielter Korrektur/);
 assert.equal(attempts,3);
});
test('Review findings guide one correction and remain visible if unresolved',async()=>{
 const calls=[];let reviews=0;
 const fetchImpl=async(_url,options)=>{
  const body=JSON.parse(options.body);calls.push(body);
  if(body.text.format.name==='av_questions')return response({questions:raw});
  reviews++;
  return response(reviews===1?reviewBody(body,false,['Frage 1: Die angegebene Länge passt nicht zur Rechnung.']):reviewBody(body));
 };
 const bank=await generateBank(request,{apiKey:'test-only',model:'example',fetchImpl});
 assert.equal(bank.questions.length,2);assert.equal(calls.length,4);assert.equal(reviews,2);
 assert.match(JSON.parse(calls[2].input).validationFeedback,/Frage 1/);
 const secret='test-only-secret';
 const invalidReview=async(_url,options)=>response(JSON.parse(options.body).text.format.name==='av_questions'?{questions:raw}:
  reviewBody(JSON.parse(options.body),false,['Frage 2: Die Einheit passt nicht. '+secret]));
 await assert.rejects(()=>generateBank(request,{apiKey:secret,model:'example',fetchImpl:invalidReview}),error=>{
  assert.match(error.message,/Gegenprüfung/);assert.match(error.message,/Frage 2: Die Einheit passt nicht/);
  assert.ok(!error.message.includes(secret));return true;
 });
});
test('Local HTTP server protects credentials, rejects foreign origins and reports missing configuration',async()=>{
 await withServer({apiKey:''},async url=>{
  const status=await (await fetch(url+'/api/status')).json();assert.equal(status.aiConfigured,false);
  const home=await fetch(url);assert.equal(home.status,200);assert.match(await home.text(),/Rettungseinsatz/);
  assert.match(home.headers.get('content-security-policy'),/script-src 'self'/);
  for(const path of ['/.env','/server/index.mjs','/package.json','/../.env'])assert.equal((await fetch(url+path)).status,404);
  const foreign=await fetch(url+'/api/generate',{method:'POST',headers:{Origin:'https://example.com','Content-Type':'application/json'},body:JSON.stringify(request)});assert.equal(foreign.status,403);
  const missing=await fetch(url+'/api/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(request)});assert.equal(missing.status,503);
  assert.match((await missing.json()).error,/API-Schlüssel/);
  assert.deepEqual((await(await fetch(url+'/api/banks')).json()).banks,[]);
 });
});
test('Only an explicitly approved and valid generated bank is persisted',async()=>{
 const fake=fakeAI();
 await withServer({apiKey:'test-only',fetchImpl:fake.fetchImpl},async url=>{
  const post=(path,body)=>fetch(url+path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  const created=await post('/api/generate',request);assert.equal(created.status,200);
  const {bank}=await created.json();assert.deepEqual((await(await fetch(url+'/api/banks')).json()).banks,[]);
  const approved=await post('/api/banks',bank);assert.equal(approved.status,200);
  const list=(await(await fetch(url+'/api/banks')).json()).banks;assert.equal(list.length,1);assert.equal(list[0].id,bank.id);
  const malformed=structuredClone(bank);malformed.questions[0].correct=(malformed.questions[0].correct+1)%3;
  assert.equal((await post('/api/banks',malformed)).status,400);
  assert.ok(!(await(await fetch(url+'/api/banks')).text()).includes('test-only'));
 });
});
