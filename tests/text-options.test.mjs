import {reviewBody} from './ai-fixtures.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {materializeTextQuestion,materializeQuestion,validateGeneratedQuestion} from '../public/math.js';
import {generateTopicQuestion,withAnswerCount,validateQuestion,registerCustomBank} from '../public/engine.js';
import {generateBank,validateRequest} from '../server/ai.mjs';

const raw={prompt:'Ich hoffe, ___ du morgen kommst.',instruction:'Wähle das passende Wort.',answers:['das','dass'],correct:1,
 explanation:'„Dass“ leitet hier einen Nebensatz ein. Es lässt sich nicht durch „dieses“, „jenes“ oder „welches“ ersetzen.'};
const response=value=>new Response(JSON.stringify({status:'completed',output:[{content:[{type:'output_text',text:JSON.stringify(value)}]}]}));

test('Text answers and punctuation survive validation, shuffling and bank reload',()=>{
 const q=materializeTextQuestion(raw,1,randomUUID(),()=>0);
 assert.equal(q.answers[q.correct],'dass');validateGeneratedQuestion(q);validateQuestion(q);
 assert.throws(()=>materializeTextQuestion({...raw,answers:['dass',' DASS ']},1,randomUUID()));
 const sentence=materializeTextQuestion({...raw,answers:['Ich hoffe, dass du kommst.','Ich hoffe, das du kommst.'],correct:0},1,randomUUID());
 assert.match(sentence.answers[sentence.correct],/dass/);
 const bank={id:'ai-'+randomUUID(),label:'das und dass',levels:['A','A','B','B','C'],questions:[q]};
 registerCustomBank(JSON.parse(JSON.stringify(bank)));
 const restored=generateTopicQuestion(bank.id,1,[],Math.random,2);validateQuestion(restored);
 assert.equal(restored.answers[restored.correct],'dass');
});

test('Two-option subsets retain the right answer across arithmetic, algebra and text',()=>{
 for(const topic of ['brackets','mental','terms','areas']){
  for(let i=0;i<40;i++){
   const full=generateTopicQuestion(topic,1+i%5),q=withAnswerCount(full,2);
   assert.equal(q.answers.length,2);assert.equal(q.answers[q.correct],full.answers[full.correct]);
   validateQuestion(JSON.parse(JSON.stringify(q)));
   assert.deepEqual(withAnswerCount(q,3),full);
   assert.throws(()=>validateQuestion({...q,correct:1-q.correct}));
  }
 }
 const full=materializeTextQuestion({...raw,answers:['das','dass','denn']},1,randomUUID());
 assert.equal(withAnswerCount(full,2).answers.length,2);
 const numeric=materializeQuestion({prompt:'Was ist 2 + 3?',instruction:'Berechne.',calculation:'2+3',unit:'',decimals:0,distractors:[4]},1,randomUUID());
 assert.equal(numeric.answers.length,2);validateQuestion(numeric);
});

test('Language generation uses text schemas and independent subject review for two and three answers',async()=>{
 for(const answerCount of [2,3]){
  const calls=[];
  const fetchImpl=async(_url,options)=>{
   const body=JSON.parse(options.body);calls.push(body);
   if(body.text.format.name==='av_question_review')return response(reviewBody(body));
   return response({questions:[{...raw,answers:answerCount===2?raw.answers:['das','dass','denn']}]});
  };
  const bank=await generateBank({topic:'Deutsch: das oder dass',level:1,count:1,answerFormat:'text',answerCount},
   {apiKey:'test-only',model:'example',fetchImpl});
  assert.equal(bank.questions[0].answers.length,answerCount);
  assert.equal(bank.questions[0].answers[bank.questions[0].correct],'dass');
  assert.equal(calls.length,2);assert.match(calls[1].instructions,/Textantworten sind erlaubt/);
  assert.equal(calls[0].text.format.schema.properties.questions.items.properties.answers.minItems,answerCount);
  registerCustomBank(bank);
 }
 assert.throws(()=>validateRequest({topic:'Deutsch',level:1,count:1,answerCount:4}));
 assert.throws(()=>validateRequest({topic:'Deutsch',level:1,count:1,answerFormat:'code'}));
});

test('Ambiguous language tasks stay blocked after an unsuccessful correction',async()=>{
 let reviews=0;
 const fetchImpl=async(_url,options)=>{
  const body=JSON.parse(options.body);
  if(body.text.format.name==='av_questions')return response({questions:[raw]});
  reviews++;return response(reviewBody(body,false,['Frage 1: Ohne Satzkontext sind zwei Antworten möglich.']));
 };
 await assert.rejects(()=>generateBank({topic:'das oder dass',level:1,count:1,answerFormat:'text',answerCount:2},
  {apiKey:'test-only',model:'example',fetchImpl}),/Gegenprüfung/);
 assert.equal(reviews,3);
});
