import {topics,validateQuestion,generateTopicQuestion,withAnswerCount} from './engine.js';
import {nextCodebreakerRound} from './codebreaker.js';
import {legacyDigests} from './quiz-legacy.js';

const fail=()=>{throw new Error('Die gespeicherte Frage ist nicht im geprüften Aufgabensatz.');};
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const fields=['topic','id','term','answers','correct','level','instruction','why'];
const canonicalQuestion=question=>{
  const source=topics[question?.topic]?.bank?.questions.find(q=>q.id===question.id);
  return source?{...source,kind:'authored',topic:question.topic}:null;
};
function digest(question){
  const text=JSON.stringify([question.topic,question.id,question.term,question.answers,
    question.correct,question.level,question.instruction??'',question.why??'']);
  let hash=0xcbf29ce484222325n;
  for(const byte of new TextEncoder().encode(text))hash=BigInt.asUintN(64,(hash^BigInt(byte))*0x100000001b3n);
  return hash.toString(16).padStart(16,'0');
}
function trustedLegacy(question,canonical){
  if(!canonical||!Object.hasOwn(legacyDigests,question.topic)||
    !topics[question.topic]?.builtin||!['german','english'].includes(topics[question.topic].subject)||
    typeof question.id!=='string'||!question.id.startsWith(question.topic+'-')||
    typeof question.term!=='string'||question.term.length>260||
    !Array.isArray(question.answers)||![2,3].includes(question.answers.length)||
    !question.answers.every(a=>typeof a==='string'&&a.length>0&&a.length<=300)||
    new Set(question.answers).size!==question.answers.length||
    !Number.isInteger(question.correct)||question.correct<0||question.correct>=question.answers.length||
    typeof question.why!=='string'||(question.instruction!==undefined&&typeof question.instruction!=='string'))return false;
  const match=/^([1-5])-(1[0-5]|[1-9])$/.exec(question.id.slice(question.topic.length+1));
  if(!match||question.level!==Number(match[1])||canonical.level!==question.level)return false;
  const expected=legacyDigests[question.topic][(question.level-1)*15+Number(match[2])-1];
  return typeof expected==='string'&&digest(question)===expected;
}
function validateSubset(question){
  const source=question.source,indices=question.answerIndices;
  if(!source||source.kind==='choice-subset'||!Array.isArray(source.answers)||
    !Array.isArray(indices)||indices.length!==2||new Set(indices).size!==2||
    !indices.every(i=>Number.isInteger(i)&&i>=0&&i<source.answers.length)||
    !['id','term','why','level','instruction','topic'].every(k=>question[k]===source[k])||
    !same(question.answers,indices.map(i=>source.answers[i]))||
    question.correct!==indices.indexOf(source.correct)||question.correct<0)fail();
}

export function upgradeQuizQuestion(question){
  if(question?.kind==='choice-subset'){
    // Check the original selection before replacing its trusted source.
    validateSubset(question);
    const source=upgradeQuizQuestion(question.source);
    if(!source.changed){validateQuestion(question);return {question,changed:false};}
    return {question:withAnswerCount(source.question,Math.min(2,source.question.answers.length)),changed:true};
  }
  if(question?.kind==='authored'){
    const canonical=canonicalQuestion(question);
    try{
      validateQuestion(question);
      if(canonical&&fields.every(key=>same(question[key],canonical[key])))return {question,changed:false};
    }catch(_){/* Only a fingerprinted legacy question may be replaced. */}
    if(!trustedLegacy(question,canonical))fail();
    validateQuestion(canonical);
    return {question:canonical,changed:true};
  }
  validateQuestion(question);
  return {question,changed:false};
}

export function upgradeQuizState(saved){
  if(!saved||typeof saved!=='object')throw new Error('Der gespeicherte Spielstand fehlt.');
  const current=upgradeQuizQuestion(saved.current);
  let state=saved,changed=current.changed,advanced=false;
  if(current.changed)state={...state,current:current.question,answerCount:current.question.answers.length};
  const batch=saved.football?.batch;
  let batchChanged=false;
  if(batch!==undefined&&batch!==null){
    if(!Array.isArray(batch.questions))fail();
    const questions=batch.questions.map(question=>{
      const upgraded=upgradeQuizQuestion(question);batchChanged||=upgraded.changed;return upgraded.question;
    });
    if(batchChanged){
      changed=true;
      state={...state,football:{...state.football,batch:{...batch,questions}}};
    }
  }
  if(!changed)return {state,changed:false,advanced:false,finished:false};
  if(state.mode==='football')state={...state,football:{...state.football,solutionVisible:false}};
  const finished=current.changed&&['opened','rescued','failed'].includes(state.phase);
  if(current.changed){
    state={...state,votes:[0,0,0]};
    if(!finished&&state.phase==='result'){
      if(!Number.isSafeInteger(state.index)||state.index<0)fail();
      const topic=state.topic||state.current.topic,level=state.level;
      if(!topics[topic]||!Number.isInteger(level)||level<1||level>5)fail();
      const usedTerms=[...(Array.isArray(state.usedTerms)?state.usedTerms.filter(v=>typeof v==='string'):[]),state.current.term].slice(-60);
      const count=Math.min(state.current.answers.length,topics[topic].bank?.maxAnswers??3);
      const question=generateTopicQuestion(topic,level,usedTerms,Math.random,count);
      state={...state,index:state.index+1,phase:'vote',usedTerms,
        current:withAnswerCount(question,Math.min(count,question.answers.length))};
      state.answerCount=state.current.answers.length;
      if(state.mode==='codebreaker')state.codebreaker=nextCodebreakerRound(state.codebreaker);
      advanced=true;
    }else if(!finished&&state.phase==='vote'&&state.mode==='codebreaker'){
      state={...state,codebreaker:{...state.codebreaker,answers:[null,null,null,null]}};
    }
  }
  return {state,changed,advanced,finished};
}
