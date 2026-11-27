import test from 'node:test';
import assert from 'node:assert/strict';
import {generateBank,validateRequest} from '../server/ai.mjs';
test('Thirty requested questions plus three reserve questions are all generated and reviewed',async()=>{
 const input={subject:'german',topic:'das oder dass',level:1,count:30,reserve:true,answerCount:2};
 assert.equal(validateRequest(input).count,33);
 assert.throws(()=>validateRequest({...input,count:31}));
 assert.throws(()=>validateRequest({...input,reserve:'true'}));
 let number=0,reviewed=0;const batches=[];
 const fetchImpl=async(_,options)=>{
  const body=JSON.parse(options.body),data=JSON.parse(body.input);
  const output=body.text.format.name==='av_questions'?{questions:Array.from({length:data.count},()=>({prompt:'Termin '+(++number)+': Ich hoffe, ___ du kommst.',instruction:'',answers:['das','dass'],correct:1,explanation:'Dass leitet einen Nebensatz ein.'}))}:
   {results:data.questions.map((q,i)=>{reviewed++;return {index:i+1,valid:true,reason:''};})};
  if(body.text.format.name==='av_questions')batches.push(data.count);
  return new Response(JSON.stringify({status:'completed',output:[{content:[{type:'output_text',text:JSON.stringify(output)}]}]}));
 };
 const bank=await generateBank(input,{apiKey:'test-only',model:'example',fetchImpl});
 assert.equal(bank.questions.length,33);assert.equal(bank.targetCount,30);assert.equal(bank.reserveCount,3);assert.equal(reviewed,33);
 assert.deepEqual(batches,[8,8,8,8,1]);assert.equal(new Set(bank.questions.map(q=>q.term)).size,33);
});
