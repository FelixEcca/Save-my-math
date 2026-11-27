import test from 'node:test';
import assert from 'node:assert/strict';
import {languageBanks} from '../public/language-pools.js';
import {languageData} from '../public/language-data.js';
test('Language tasks have no extra instruction or expanded B sentence options',()=>{
 for(const bank of languageBanks){
  for(const q of bank.questions){
   assert.equal(q.instruction,'',q.id);
   assert.doesNotMatch(q.term,/Welche (?:Regel|Begründung)|richtig begründet|Welcher Satz passt zur Aufgabe/iu,q.id);
  }
  const data=languageData.find(d=>d.id===bank.id);
  if(!['de-seit-seid','de-das-dass'].includes(bank.id)&&data.format!=='vocabulary'){
   const q=bank.questions.filter(q=>q.level===3);
   q.forEach((item,i)=>assert.deepEqual([...item.answers].sort(),data.rows[i].answers.slice(0,bank.maxAnswers).sort(),item.id));
  }
 }
});
test('Das/dass and seit/seid use only spelling decisions at every level',()=>{
 for(const id of ['de-das-dass','de-seit-seid'])for(const q of languageBanks.find(b=>b.id===id).questions){
  assert.equal((q.term.match(/___/g)||[]).length,1,q.id);
  assert.deepEqual(q.answers.map(a=>a.toLowerCase()).sort(),id==='de-das-dass'?['das','dass']:['seid','seit']);
 }
});
