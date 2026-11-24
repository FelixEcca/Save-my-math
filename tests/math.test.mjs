import test from 'node:test';
import assert from 'node:assert/strict';
import {calculate,materializeQuestion,validateGeneratedQuestion} from '../public/math.js';
import {topics,generateTopicQuestion,validateQuestion,registerCustomBank} from '../public/engine.js';

test('Arithmetic parser respects precedence and rejects executable input',()=>{
  for(const [source,answer] of [['6*20',120],['2+3*4',14],['(2+3)*4',20],['-2^2',-4],['2^-2',.25],['sqrt(81)',9],['pi*4^2',50.24],['1,5 · 4',6]])assert.equal(calculate(source),answer);
  for(const source of ['process.exit()','alert(1)','1;2','Infinity','1/0','sqrt(-1)','2**3','(1+2','1+','9^999'])assert.throws(()=>calculate(source));
});
test('Generated answers are computed, rounded, distinct, and tied to their displayed values',()=>{
  const q=materializeQuestion({prompt:'Eine Platte ist 12 cm lang und 4 cm breit. Wie groß ist die Fläche?',instruction:'Berechne die Fläche.',calculation:'12*4',unit:'cm²',decimals:0,distractors:[32,96]},2,'example-id',()=>.2);
  assert.equal(q.values[q.correct],48);assert.equal(q.answers[q.correct],'48 cm²');validateGeneratedQuestion(q);
  assert.throws(()=>validateGeneratedQuestion({...q,correct:(q.correct+1)%3}));
  assert.throws(()=>materializeQuestion({prompt:'Wie viel ist 1 : 3?',instruction:'Berechne.',calculation:'1/3',unit:'',decimals:2,distractors:[.333,.5]},1,'bad'));
  assert.throws(()=>validateGeneratedQuestion({...q,answers:['48 cm²','48 cm²','96 cm²']}));
});
test('Every built-in topic generates varied, valid tasks on all five levels',()=>{
  let seed=4183;
  const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  let count=0;
  for(const topic of Object.keys(topics))for(let level=1;level<=5;level++){
    const used=[];
    for(let i=0;i<200;i++){
      const q=generateTopicQuestion(topic,level,i<30?used:[],random);validateQuestion(q);
      assert.equal(q.topic,topic);assert.equal(q.level,level);assert.equal(new Set(q.answers).size,3);
      if(i<30){assert.ok(!used.includes(q.term),topic+' '+level);used.push(q.term);}
      if(topic==='terms')assert.doesNotMatch(q.term,/[()]/);
      if(q.kind==='numeric'&&q.check.op==='convert'&&q.check.args[0]>0)assert.ok(q.values[q.correct]>0);
      count++;
    }
  }
  assert.equal(count,9000);
});
test('AI banks are validated before entering the topic picker',()=>{
  const question=materializeQuestion({prompt:'Was ist 3 · 4?',instruction:'Berechne.',calculation:'3*4',unit:'',decimals:0,distractors:[7,16]},1,'q');
  const bank={id:'ai-aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',label:'Testthema',levels:['1','2','3','4','5'],questions:[question]};
  registerCustomBank(bank);assert.equal(generateTopicQuestion(bank.id,1).values[question.correct],12);
  assert.throws(()=>registerCustomBank({...bank,questions:[{...question,correct:(question.correct+1)%3}]}));
  assert.throws(()=>registerCustomBank({...bank,id:'../../secret'}));
});
