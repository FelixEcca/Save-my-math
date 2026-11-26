import test from 'node:test';
import assert from 'node:assert/strict';
import {topics,generateTopicQuestion,validateQuestion,withAnswerCount} from '../public/engine.js';
import {languageBanks} from '../public/language-pools.js';
import {generateBank,validateRequest} from '../server/ai.mjs';
import {generateExtraMath} from '../public/more-math.js';

test('Three subjects each contain at least thirty built-in topics',()=>{
 for(const subject of ['math','german','english']){
  const list=Object.values(topics).filter(t=>t.builtin&&t.subject===subject);
  assert.ok(list.length>=30,subject);assert.equal(new Set(list.map(t=>t.label)).size,list.length);
 }
});
test('All sixty language pools contain fifteen distinct and balanced questions on A, B and C',()=>{
 assert.equal(languageBanks.length,60);
 let total=0;
 for(const bank of languageBanks){
  const all=new Set();
  for(const level of [1,3,5]){
   const pool=bank.questions.filter(q=>q.level===level);assert.equal(pool.length,15);
   const seen=[];const positions=[0,0,0];
   for(let i=0;i<15;i++){
    const q=generateTopicQuestion(bank.id,level,seen);validateQuestion(q);
    assert.ok(!seen.includes(q.term),bank.id);seen.push(q.term);all.add(q.term);positions[q.correct]++;
    const two=withAnswerCount(q,2);validateQuestion(two);assert.equal(two.answers[two.correct],q.answers[q.correct]);
    assert.ok(q.answers.every(a=>a.length<=300));assert.ok(q.why.trim());
   }
   assert.deepEqual(positions,[5,5,5]);total+=pool.length;
  }
  assert.equal(all.size,45,bank.id);
 }
 assert.equal(total,2700);
});
test('Every mathematics topic supplies at least fifteen different valid tasks per core level',()=>{
 let seed=72631;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(const [id,topic] of Object.entries(topics).filter(([,t])=>t.builtin&&t.subject==='math')){
  for(const level of [1,3,5]){
   const seen=[];
   for(let i=0;i<15;i++){
    const q=generateTopicQuestion(id,level,seen,random);validateQuestion(q);
    assert.ok(!seen.includes(q.term),id+' '+level);seen.push(q.term);
    validateQuestion(withAnswerCount(q,2,random));
   }
  }
 }
});
test('Language subjects automatically request text and keep explicit math settings intact',()=>{
 for(const subject of ['german','english']){
  const request=validateRequest({subject,topic:'Test',count:1,level:1,answerFormat:'numeric'});
  assert.equal(request.answerFormat,'text');assert.equal(request.answerCount,2);
 }
 assert.equal(validateRequest({topic:'Deutsch: das oder dass',count:1,level:1}).answerFormat,'text');
 assert.equal(validateRequest({subject:'math',topic:'Flächen',count:1,level:1}).answerFormat,'numeric');
 assert.throws(()=>validateRequest({subject:'unknown',topic:'Test',count:1,level:1}));
});
test('Independently worked examples cover the result and unit of every new math generator',()=>{
 const expected={rounding:[80,0,.22],compareNumbers:[22,.2,.4],integers:[0,0,-2],decimalMultiply:[.4,.004,.24],
  division:[2,2,4],orderOperations:[6,8,6],powers:[9,27,37],equations:[3,3,3],ratios:[16,16,16],interest:[36,36,9],
  timeUnits:[182,182,180],massUnits:[2000,2200,2200],volumeUnits:[2000,2200,2200],volumeSolids:[64,64,56],
  surfaceSolids:[96,96,80],triangleArea:[8,8,4],circleArea:[50.24,25.12,12.56],cylinders:[28,200.96,100.48],
  scale:[120,120,4],mean:[2,2,10],dataRead:[4,6,33.33]};
 for(const [id,answers] of Object.entries(expected))for(const [i,level] of [1,3,5].entries()){
  const question=generateExtraMath(id,level,[],()=>0);
  assert.ok(Math.abs(question.values[question.correct]-answers[i])<1e-9,id+' '+level);
  validateQuestion(question);
 }
});
const response=value=>new Response(JSON.stringify({status:'completed',output:[{content:[{type:'output_text',text:JSON.stringify(value)}]}]}));
const q=(prompt)=>({prompt,instruction:'Wähle das passende Wort.',answers:['das','dass'],correct:1,explanation:'„Dass“ leitet hier einen Nebensatz ein.'});
test('Only a rejected question is regenerated; confirmed neighbours retain their ids and content',async()=>{
 const calls=[];let reviews=0,confirmed;
 const fetchImpl=async(_url,options)=>{
  const body=JSON.parse(options.body),data=JSON.parse(body.input);calls.push({body,data});
  if(body.text.format.name==='av_questions')return response({questions:data.count===2?
   [q('Ich hoffe, ___ du kommst.'),q('Ich weiß, ___ sie arbeitet.')]:[q('Es ist wichtig, ___ du zuhörst.')]});
  reviews++;
  if(reviews===1){confirmed=structuredClone(data.questions[0]);return response({results:[{index:1,valid:true,reason:'Die Aussage ist eindeutig.'},{index:2,valid:false,reason:'Frage 2 braucht einen eindeutigeren Kontext.'}]});}
  return response({results:[{index:1,valid:true,reason:''}]});
 };
 const bank=await generateBank({subject:'german',topic:'das/dass',level:1,count:2,answerCount:2},{apiKey:'test-only',model:'example',fetchImpl});
 assert.equal(bank.questions.length,2);assert.equal(calls.length,4);
 assert.equal(calls[2].data.count,1);assert.ok(calls[2].data.exclude.includes(confirmed.term));
 assert.equal(bank.questions[0].id,confirmed.id);assert.equal(bank.questions[0].term,confirmed.term);
 assert.equal(bank.quality.corrected,1);assert.equal(bank.reviewed,true);
});
test('Large requests use small batches, and incomplete reviews never release unchecked questions',async()=>{
 let number=0;const sizes=[];
 const fetchImpl=async(_url,options)=>{
  const body=JSON.parse(options.body),data=JSON.parse(body.input);
  if(body.text.format.name==='av_questions'){sizes.push(data.count);return response({questions:Array.from({length:data.count},()=>q('Ich hoffe bei Termin '+(++number)+', ___ du kommst.'))});}
  return response({results:data.questions.map((_,i)=>({index:i+1,valid:true,reason:''}))});
 };
 const bank=await generateBank({subject:'german',topic:'das/dass',level:1,count:17,answerCount:2},{apiKey:'test-only',model:'example',fetchImpl});
 assert.equal(bank.questions.length,17);assert.deepEqual(sizes,[8,8,1]);
 const invalid=async(_url,options)=>response(JSON.parse(options.body).text.format.name==='av_questions'?{questions:[q('Ich hoffe, ___ du kommst.')]}:{results:[]});
 await assert.rejects(()=>generateBank({subject:'german',topic:'das/dass',level:1,count:1,answerCount:2},{apiKey:'test-only',model:'example',fetchImpl:invalid}),/keine vollständige Rückmeldung/);
});
