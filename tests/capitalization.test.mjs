import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {materializeTextQuestion,validateTextQuestion} from '../public/math.js';
import {generateBank} from '../server/ai.mjs';
import {registerCustomBank,generateTopicQuestion,validateQuestion} from '../public/engine.js';
import {languageData} from '../public/language-data.js';
const response=value=>new Response(JSON.stringify({status:'completed',output:[{content:[{type:'output_text',text:JSON.stringify(value)}]}]}));
const example={prompt:'Das ___ fällt mir leicht.',instruction:'',answers:['lesen','Lesen'],correct:1,explanation:'Nach dem Artikel wird das als Nomen gebrauchte Verb großgeschrieben.'};
test('Case distinctions survive shuffling, validation and browser-bank round trips',()=>{
 for(const answers of [['lesen','Lesen'],['bus','Bus'],['us','US'],['weiß','Weiß']]){
  const q=materializeTextQuestion({...example,answers},3,randomUUID(),()=>0);
  assert.equal(q.answers[q.correct],answers[1]);validateTextQuestion(JSON.parse(JSON.stringify(q)));
  const bank={id:'ai-'+randomUUID(),label:'Groß- und Kleinschreibung',subject:'german',levels:['A','A','B','B','C'],questions:[q]};
  registerCustomBank(JSON.parse(JSON.stringify(bank)));validateQuestion(generateTopicQuestion(bank.id,3,[],()=>0,2));
 }
 for(const answers of [['Lesen',' Lesen '],['am Tisch','am\u00a0Tisch'],['für','fu\u0308r']])
  assert.throws(()=>materializeTextQuestion({...example,answers},3,randomUUID()),/wortgleich/);
 assert.throws(()=>materializeTextQuestion({...example,prompt:''},3,randomUUID()),/Fragetext fehlt/);
 assert.throws(()=>materializeTextQuestion({...example,explanation:''},3,randomUUID()),/Lösungsbegründung fehlt/);
});
test('An entire capitalization request including three reserves reaches independent review without false duplicate repairs',async()=>{
 const rows=languageData.find(b=>b.id==='de-gross-klein').rows;let created=0,reviewed=0;const calls=[];
 const fetchImpl=async(_,options)=>{
  const body=JSON.parse(options.body),data=JSON.parse(body.input);calls.push(body.text.format.name);
  if(body.text.format.name==='av_questions')return response({questions:Array.from({length:data.count},()=>{const row=rows[created++];return {prompt:row.prompt,instruction:'',answers:row.answers,correct:0,explanation:row.why};})});
  return response({results:data.questions.map((q,i)=>{reviewed++;assert.equal(q.answers[0].toLowerCase(),q.answers[1].toLowerCase());assert.notEqual(q.answers[0],q.answers[1]);return {index:i+1,valid:true,reason:''};})});
 };
 const bank=await generateBank({subject:'german',topic:'Groß- und Kleinschreibung',level:3,count:8,reserve:true,answerCount:2},{apiKey:'test-only',model:'example',fetchImpl});
 assert.equal(bank.questions.length,11);assert.equal(reviewed,11);assert.equal(bank.quality.corrected,0);assert.equal(calls.length,4);
});
test('Repairs receive the rejected sentence, options and precise format error',async()=>{
 let generation=0;const fetchImpl=async(_,options)=>{
  const body=JSON.parse(options.body),data=JSON.parse(body.input);
  if(body.text.format.name==='av_questions'){
   generation++;
   if(generation===1)return response({questions:[{...example,answers:['Lesen',' Lesen ']}]});
   assert.equal(data.rejectedQuestions[0].prompt,example.prompt);assert.deepEqual(data.rejectedQuestions[0].answers,['Lesen','Lesen']);assert.match(data.rejectedQuestions[0].reason,/wortgleich/);
   return response({questions:[example]});
  }
  return response({results:[{index:1,valid:true,reason:''}]});
 };
 const bank=await generateBank({subject:'german',topic:'Groß- und Kleinschreibung',level:3,count:1,answerCount:2},{apiKey:'test-only',model:'example',fetchImpl});assert.equal(bank.questions.length,1);assert.equal(generation,2);
});
test('Repeated actual duplicates stop after the bounded repairs and report a format failure',async()=>{
 let calls=0;const fetchImpl=async()=>{calls++;return response({questions:[{...example,answers:['Lesen','Lesen']}]});};
 await assert.rejects(()=>generateBank({subject:'german',topic:'Groß- und Kleinschreibung',level:3,count:1,answerCount:2},{apiKey:'test-only',model:'example',fetchImpl}),error=>{assert.match(error.message,/Formatprüfung/);assert.match(error.message,/wortgleich/);assert.doesNotMatch(error.message,/fachliche Gegenprüfung/);return true;});assert.equal(calls,3);
});
