import test from 'node:test';
import assert from 'node:assert/strict';
import {generateTopicQuestion,validateQuestion,withAnswerCount} from '../public/engine.js';
import {languageBanks} from '../public/language-pools.js';
import {extraMathTopics,generateExtraMath} from '../public/more-math.js';
import {calculate,roundTo} from '../public/math.js';

// Case carries the distinction in spelling tasks: “Bus” and “bus” are different options.
const answerText=text=>text.normalize('NFC').trim().replace(/\s+/g,' ');

test('Every authored language question asks one task with distinct, separate answer choices',()=>{
 for(const bank of languageBanks)for(const question of bank.questions){
  const label=question.id;
  assert.equal(question.answers.length,bank.maxAnswers,label);
  assert.equal(new Set(question.answers.map(answerText)).size,question.answers.length,label);
  assert.ok((question.term.match(/___/g)??[]).length<=1,label+' has multiple gaps');
  for(const answer of question.answers){
   assert.ok(!answer.includes(' / '),label+' bundles two answers');
   assert.ok(!answer.includes(' — '),label+' adds a second decision about a reason');
   assert.doesNotMatch(answer,/Beide (?:Schreibweisen|Formen)/iu,label+' has an artificial third choice');
  }
  assert.doesNotMatch([question.term,...question.answers].join('\n'),/seidt|daß/iu,label+' has a fabricated or obsolete spelling');
 }
});

test('Binary spelling pools stay binary even when three answers are requested',()=>{
 const ids=['de-das-dass','de-seit-seid','de-gross-klein','de-nominalisierung',
  'de-lange-vokale','de-doppelkonsonanten','de-getrennt-zusammen'];
 for(const id of ids){
  const bank=languageBanks.find(item=>item.id===id);
  assert.ok(bank,id);assert.equal(bank.maxAnswers,2,id);
  for(const level of [1,2,3,4,5]){
   const question=generateTopicQuestion(id,level,[],()=>0,3);
   validateQuestion(question);assert.equal(question.answers.length,2,id+' '+level);
   const two=withAnswerCount(question,2,()=>0);
   validateQuestion(two);
   assert.equal(two.answers[two.correct],question.answers[question.correct]);
  }
 }
 const spelling=languageBanks.find(bank=>bank.id==='de-gross-klein');
 assert.ok(spelling.questions.some(question=>
  new Set(question.answers.map(answer=>answer.toLocaleLowerCase('de'))).size<question.answers.length),
 'Capitalization alternatives must retain their meaningful case distinction');
});

test('Since/are spelling gaps offer exactly seit and seid on every level',()=>{
 const bank=languageBanks.find(item=>item.id==='de-seit-seid');
 assert.equal(bank.maxAnswers,2);
 for(const level of [1,2,3,4,5]){
  const pool=bank.questions.filter(question=>question.level===level);
  assert.equal(pool.length,15);
  assert.ok(pool.some(question=>question.term.includes('___')));
  for(const question of pool){
   assert.equal(question.answers.length,2,question.id);
   if(question.term.includes('___')){
    assert.deepEqual(question.answers.map(answer=>answer.toLocaleLowerCase('de')).sort(),['seid','seit'],question.id);
   }
  }
 }
});

test('Common mathematical mistakes supply the wrong choices in independently worked examples',()=>{
 const examples=[
  // Six square faces; five faces or only four side faces are incomplete surfaces.
  ['surfaceSolids',1,[64,80,96]],
  // Three undoubled face areas or a missing pair of faces on a 4 by 4 by 4 cuboid.
  ['surfaceSolids',3,[48,64,96]],
  // An open box: missing the base, the correct five faces, or adding an absent lid.
  ['surfaceSolids',5,[64,80,96]],
  // A circle with radius 4: pi*r, circumference, and the correct area.
  ['circleArea',1,[12.56,25.12,50.24]],
  // A 4 by 4 triangle: averaging lengths, the correct area, or omitting the half.
  ['triangleArea',1,[4,8,16]],
  // The mean of 2, 2, 2: correct divisor 3, divisor 2, or no division.
  ['mean',1,[2,3,6]],
  // 2 kg to grams: reverse the conversion, use factor 100, or use factor 1000.
  ['massUnits',1,[.002,200,2000]],
  ['volumeUnits',1,[.002,200,2000]],
  // A 4 by 4 by 4 block with a 2 by 1 full-height hole: remove volume, area only, or nothing.
  ['volumeSolids',5,[56,62,64]],
  // A drawing of a 120 cm line at 1:30: divide, omit conversion, or multiply.
  ['scale',5,[4,120,3600]],
 ];
 for(const [topic,level,expected] of examples){
  const question=generateExtraMath(topic,level,[],()=>0);
  validateQuestion(question);
  assert.deepEqual([...question.values].sort((a,b)=>a-b),expected,topic+' '+level);
 }
});

test('Rounded distractors remain different from the correct result and from each other on all five levels',()=>{
 for(const topic of Object.keys(extraMathTopics))for(let level=1;level<=5;level++){
  // Equal and boundary inputs exercise collisions between genuine error calculations.
  for(const sample of [0,.5,.999999]){
   const question=generateExtraMath(topic,level,[],()=>sample);
   validateQuestion(question);
   assert.equal(question.values.length,3,topic+' '+level);
   assert.equal(new Set(question.values).size,3,topic+' '+level);
   assert.ok(question.values.every(value=>value===roundTo(value,question.decimals)),topic+' '+level);
   const expected=roundTo(calculate(question.calculation),question.decimals);
   assert.equal(question.values[question.correct],expected,topic+' '+level);
   assert.equal(question.values.filter(value=>value===expected).length,1,topic+' '+level);
  }
 }
});
