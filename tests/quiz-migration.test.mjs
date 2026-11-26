import test from 'node:test';
import assert from 'node:assert/strict';
import {topics,generateTopicQuestion,validateQuestion,withAnswerCount} from '../public/engine.js';
import {upgradeQuizQuestion,upgradeQuizState} from '../public/quiz-migration.js';
import {createCodebreaker,setTeamAnswer,resolveCodebreaker,nextCodebreakerRound,validCodebreakerSave} from '../public/codebreaker.js';
import {createFootball,drawPlayers,validFootballSave} from '../public/football.js';

// Static examples from the preceding release; production contains only their trusted fingerprints.
const legacy={
  "b": [
    {
      "id": "de-seit-seid-3-1",
      "term": "Welche Ergänzung ist richtig begründet?\nIhr ___ heute früh dran.",
      "answers": [
        "seid — „Seit“ bezieht sich auf Zeit.",
        "seit — „Seid“ steht immer bei einer Zeitangabe.",
        "seid — „Seit“ ist die Verbform zu „ihr“."
      ],
      "correct": 0,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-2",
      "term": "Welche Ergänzung ist richtig begründet?\nWir warten ___ einer Stunde.",
      "answers": [
        "seid — „Seid“ steht immer bei einer Zeitangabe.",
        "seit — „Seit“ ist die Verbform zu „ihr“.",
        "seit — „Seit“ bezieht sich auf Zeit."
      ],
      "correct": 2,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-3",
      "term": "Welche Ergänzung ist richtig begründet?\n___ ihr bereit?",
      "answers": [
        "Seid — „Seit“ ist die Verbform zu „ihr“.",
        "Seid — „Seit“ bezieht sich auf Zeit.",
        "Seit — „Seid“ steht immer bei einer Zeitangabe."
      ],
      "correct": 1,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-4",
      "term": "Welche Ergänzung ist richtig begründet?\nIch wohne ___ 2022 hier.",
      "answers": [
        "seit — „Seit“ bezieht sich auf Zeit.",
        "seid — „Seid“ steht immer bei einer Zeitangabe.",
        "seit — „Seit“ ist die Verbform zu „ihr“."
      ],
      "correct": 0,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-5",
      "term": "Welche Ergänzung ist richtig begründet?\nIhr ___ ein gutes Team.",
      "answers": [
        "seit — „Seid“ steht immer bei einer Zeitangabe.",
        "seid — „Seit“ ist die Verbform zu „ihr“.",
        "seid — „Seit“ bezieht sich auf Zeit."
      ],
      "correct": 2,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-6",
      "term": "Welche Ergänzung ist richtig begründet?\n___ Montag arbeite ich im Praktikum.",
      "answers": [
        "Seit — „Seit“ ist die Verbform zu „ihr“.",
        "Seit — „Seit“ bezieht sich auf Zeit.",
        "Seid — „Seid“ steht immer bei einer Zeitangabe."
      ],
      "correct": 1,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-7",
      "term": "Welche Ergänzung ist richtig begründet?\nWarum ___ ihr so leise?",
      "answers": [
        "seid — „Seit“ bezieht sich auf Zeit.",
        "seit — „Seid“ steht immer bei einer Zeitangabe.",
        "seid — „Seit“ ist die Verbform zu „ihr“."
      ],
      "correct": 0,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-8",
      "term": "Welche Ergänzung ist richtig begründet?\nDie Werkstatt ist ___ gestern geschlossen.",
      "answers": [
        "seid — „Seid“ steht immer bei einer Zeitangabe.",
        "seit — „Seit“ ist die Verbform zu „ihr“.",
        "seit — „Seit“ bezieht sich auf Zeit."
      ],
      "correct": 2,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-9",
      "term": "Welche Ergänzung ist richtig begründet?\nIhr ___ für das Material zuständig.",
      "answers": [
        "seid — „Seit“ ist die Verbform zu „ihr“.",
        "seid — „Seit“ bezieht sich auf Zeit.",
        "seit — „Seid“ steht immer bei einer Zeitangabe."
      ],
      "correct": 1,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-10",
      "term": "Welche Ergänzung ist richtig begründet?\nIch kenne ihn ___ der Grundschule.",
      "answers": [
        "seit — „Seit“ bezieht sich auf Zeit.",
        "seid — „Seid“ steht immer bei einer Zeitangabe.",
        "seit — „Seit“ ist die Verbform zu „ihr“."
      ],
      "correct": 0,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-11",
      "term": "Welche Ergänzung ist richtig begründet?\n___ vorsichtig an der Maschine!",
      "answers": [
        "Seit — „Seid“ steht immer bei einer Zeitangabe.",
        "Seid — „Seit“ ist die Verbform zu „ihr“.",
        "Seid — „Seit“ bezieht sich auf Zeit."
      ],
      "correct": 2,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-12",
      "term": "Welche Ergänzung ist richtig begründet?\nSie lernt ___ zwei Wochen für den Test.",
      "answers": [
        "seit — „Seit“ ist die Verbform zu „ihr“.",
        "seit — „Seit“ bezieht sich auf Zeit.",
        "seid — „Seid“ steht immer bei einer Zeitangabe."
      ],
      "correct": 1,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-13",
      "term": "Welche Ergänzung ist richtig begründet?\n___ ihr mit der Aufgabe fertig?",
      "answers": [
        "Seid — „Seit“ bezieht sich auf Zeit.",
        "Seit — „Seid“ steht immer bei einer Zeitangabe.",
        "Seid — „Seit“ ist die Verbform zu „ihr“."
      ],
      "correct": 0,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-14",
      "term": "Welche Ergänzung ist richtig begründet?\n___ dem Unfall trägt er Handschuhe.",
      "answers": [
        "Seid — „Seid“ steht immer bei einer Zeitangabe.",
        "Seit — „Seit“ ist die Verbform zu „ihr“.",
        "Seit — „Seit“ bezieht sich auf Zeit."
      ],
      "correct": 2,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    },
    {
      "id": "de-seit-seid-3-15",
      "term": "Welche Ergänzung ist richtig begründet?\nIhr ___ jetzt an der Reihe.",
      "answers": [
        "seid — „Seit“ ist die Verbform zu „ihr“.",
        "seid — „Seit“ bezieht sich auf Zeit.",
        "seit — „Seid“ steht immer bei einer Zeitangabe."
      ],
      "correct": 1,
      "level": 3,
      "instruction": "Wähle die richtige Antwort.",
      "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
      "kind": "authored",
      "topic": "de-seit-seid"
    }
  ],
  "c": {
    "id": "de-seit-seid-5-1",
    "term": "Ergänze beide Sätze.\nIhr ___ heute früh dran.\nDie Werkstatt ist ___ gestern geschlossen.",
    "answers": [
      "seid / seid",
      "seid / seit",
      "seit / seit"
    ],
    "correct": 1,
    "level": 5,
    "instruction": "Wähle die richtige Antwort.",
    "why": "Erster Teil: „Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“. Zweiter Teil: „Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
    "kind": "authored",
    "topic": "de-seit-seid"
  },
  "a": {
    "id": "de-seit-seid-1-1",
    "term": "Ihr ___ heute früh dran.",
    "answers": [
      "seit",
      "seidt",
      "seid"
    ],
    "correct": 2,
    "level": 1,
    "instruction": "Wähle die passende Ergänzung.",
    "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
    "kind": "authored",
    "topic": "de-seit-seid"
  },
  "two": {
    "id": "de-seit-seid-2-1",
    "term": "Ihr ___ heute früh dran.",
    "answers": [
      "seit",
      "seidt",
      "seid"
    ],
    "correct": 2,
    "level": 2,
    "instruction": "Wähle die passende Ergänzung.",
    "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
    "kind": "authored",
    "topic": "de-seit-seid"
  },
  "four": {
    "id": "de-seit-seid-4-1",
    "term": "Welche Ergänzung ist richtig begründet?\nIhr ___ heute früh dran.",
    "answers": [
      "seid — „Seit“ bezieht sich auf Zeit.",
      "seit — „Seid“ steht immer bei einer Zeitangabe.",
      "seid — „Seit“ ist die Verbform zu „ihr“."
    ],
    "correct": 0,
    "level": 4,
    "instruction": "Wähle die richtige Antwort.",
    "why": "„Seit“ bezieht sich auf Zeit. „Seid“ ist eine Form von „sein“ und passt zu „ihr“.",
    "kind": "authored",
    "topic": "de-seit-seid"
  }
};
const clone=value=>structuredClone(value);
const canonical=old=>({...topics[old.topic].bank.questions.find(q=>q.id===old.id),kind:'authored',topic:old.topic});
const subset=(source,indices=[source.correct,(source.correct+1)%source.answers.length])=>({
  ...clone(source),kind:'choice-subset',source:clone(source),answerIndices:indices,
  answers:indices.map(i=>source.answers[i]),correct:indices.indexOf(source.correct)
});
const base=(current=clone(legacy.b[0]))=>({
  version:2,mode:'rescue',topic:current.topic,level:current.level,current,answerCount:current.answers.length,
  answerFormat:'text',index:0,total:8,count:20,energy:4,votes:[5,8,7],phase:'vote',history:[],usedTerms:[]
});
const answered=(game,answer)=>{for(let team=0;team<4;team++)game=setTeamAnswer(game,team,answer);return game;};

test('Current authored, numeric and two-option questions remain unchanged',()=>{
  const authored=canonical(legacy.b[0]),numeric=generateTopicQuestion('mental',1);
  for(const question of [authored,numeric,withAnswerCount(numeric,2)]){
    const upgraded=upgradeQuizQuestion(question);
    assert.equal(upgraded.changed,false);assert.equal(upgraded.question,question);
  }
  const saved=base(numeric),upgraded=upgradeQuizState(saved);
  assert.equal(upgraded.state,saved);assert.equal(upgraded.changed,false);assert.equal(upgraded.advanced,false);
});

test('Trusted old explanation, paired and alias-level language questions become canonical clear tasks',()=>{
  for(const old of [legacy.a,legacy.b[0],legacy.c,legacy.two,legacy.four]){
    const before=clone(old),upgraded=upgradeQuizQuestion(old);
    assert.equal(upgraded.changed,true,old.id);validateQuestion(upgraded.question);
    assert.deepEqual(upgraded.question,canonical(old));assert.deepEqual(old,before);
    assert.equal(upgraded.question.answers.length,2);
  }
});

test('Legacy fingerprints reject modified content, answer keys, explanations and identities',()=>{
  const old=legacy.b[0];
  const wrong=[
    {...old,term:old.term+'!'},
    {...old,answers:['Falsch',...old.answers.slice(1)]},
    {...old,correct:(old.correct+1)%old.answers.length},
    {...old,why:old.why+' Ungeprüft.'},
    {...old,instruction:'Eine andere Anweisung.'},
    {...old,level:5},
    {...old,id:old.id.replace(/-1$/,'-2')},
    {...old,topic:'de-unknown'},
    {...old,id:'de-seit-seid-3-16'}
  ];
  for(const question of wrong)assert.throws(()=>upgradeQuizQuestion(question));
  assert.throws(()=>upgradeQuizQuestion({...canonical(old),why:'Ungeprüfte Erklärung.'}));
});

test('Old two-option selections validate their old source and preserve two meaningful choices',()=>{
  const old=subset(legacy.c),upgraded=upgradeQuizQuestion(old);
  assert.equal(upgraded.changed,true);assert.equal(upgraded.question.answers.length,2);
  validateQuestion(upgraded.question);
  const expected=canonical(legacy.c);
  assert.equal(upgraded.question.answers[upgraded.question.correct],expected.answers[expected.correct]);
  assert.throws(()=>upgradeQuizQuestion({...old,answers:['Andere Antwort',old.answers[1]]}));
  assert.throws(()=>upgradeQuizQuestion({...old,answerIndices:[old.source.correct,old.source.correct]}));
  const corrupt=clone(old);corrupt.source.why+=' Ungeprüft.';corrupt.why=corrupt.source.why;
  assert.throws(()=>upgradeQuizQuestion(corrupt));
});

test('Changed live questions clear votes and pending Codeknacker answers while retaining completed progress',()=>{
  const correct=legacy.b[0].correct;
  let game=resolveCodebreaker(answered(createCodebreaker(),correct),correct);
  const history=[{round:1,correct,answers:[correct,correct,correct,correct],level:3}];
  game=setTeamAnswer(nextCodebreakerRound(game),0,2);
  const saved={...base(),mode:'codebreaker',index:1,history,codebreaker:game},before=clone(saved);
  const upgraded=upgradeQuizState(saved),state=upgraded.state;
  assert.equal(upgraded.changed,true);assert.equal(upgraded.advanced,false);
  assert.deepEqual(state.votes,[0,0,0]);assert.deepEqual(state.codebreaker.answers,[null,null,null,null]);
  assert.deepEqual(state.codebreaker.streaks,[1,1,1,1]);assert.equal(state.index,1);
  assert.equal(state.history,history);assert.equal(state.answerCount,2);
  assert.equal(validCodebreakerSave(state.codebreaker,state.history,state.index,state.phase),true);
  assert.deepEqual(saved,before);
});

test('A changed completed rescue round advances once without awarding energy twice',()=>{
  const history=[{round:1,correct:16,total:20,pass:true,delta:1,energy:5,level:3}];
  const saved={...base(),phase:'result',history,energy:5},before=clone(saved);
  const {state,changed,advanced,finished}=upgradeQuizState(saved);
  assert.equal(changed,true);assert.equal(advanced,true);assert.equal(finished,false);
  assert.equal(state.index,1);assert.equal(state.phase,'vote');assert.equal(state.energy,5);
  assert.equal(state.history,history);assert.equal(state.current.answers.length,2);
  assert.notEqual(state.current.term,canonical(saved.current).term);validateQuestion(state.current);
  assert.deepEqual(saved,before);
});

test('A changed completed Codeknacker round advances with the existing streaks and history',()=>{
  const correct=legacy.b[0].correct,answers=[correct,correct,correct,correct];
  const game=resolveCodebreaker(answered(createCodebreaker(),correct),correct);
  const saved={...base(),mode:'codebreaker',phase:'result',codebreaker:game,
    history:[{round:1,correct,answers,level:3}]};
  const {state,advanced}=upgradeQuizState(saved);
  assert.equal(advanced,true);assert.equal(state.index,1);assert.equal(state.phase,'vote');
  assert.deepEqual(state.codebreaker.streaks,[1,1,1,1]);assert.equal(state.codebreaker.revealed,false);
  assert.deepEqual(state.codebreaker.answers,[null,null,null,null]);
  assert.equal(validCodebreakerSave(state.codebreaker,state.history,state.index,state.phase),true);
});

test('Finished games keep their final outcome and expose the finished migration flag',()=>{
  for(const phase of ['rescued','failed']){
    const saved={...base(),phase,index:7,energy:phase==='failed'?0:5};
    const {state,finished,advanced}=upgradeQuizState(saved);
    assert.equal(finished,true);assert.equal(advanced,false);assert.equal(state.phase,phase);
    assert.equal(state.index,7);assert.equal(state.energy,saved.energy);assert.equal(state.history,saved.history);
  }
  const correct=legacy.b[0].correct,history=[];
  let game=createCodebreaker();
  for(let i=0;i<4;i++){
    game=resolveCodebreaker(answered(game,correct),correct);
    history.push({round:i+1,correct,answers:[correct,correct,correct,correct],level:3});
    if(i<3)game=nextCodebreakerRound(game);
  }
  const saved={...base(),mode:'codebreaker',phase:'opened',index:3,history,codebreaker:game};
  const {state,finished,advanced}=upgradeQuizState(saved);
  assert.equal(finished,true);assert.equal(advanced,false);assert.equal(state.codebreaker,game);
  assert.equal(validCodebreakerSave(state.codebreaker,state.history,state.index,state.phase),true);
});

test('Football restores all ten or fifteen trusted questions and preserves the entire match',()=>{
  for(const size of [10,15]){
    const batch={questions:clone(legacy.b.slice(0,size)),cursor:4,label:'seit und seid',topic:'de-seit-seid',level:3};
    const football={...drawPlayers(drawPlayers(createFootball(5,8))),position:2,scores:[3,2],
      taskNumber:7,taskLabel:batch.label,solutionVisible:true,batch,
      plan:{topic:batch.topic,customTopic:'',notes:'',level:3,batchSize:size}};
    const saved={...base(clone(batch.questions[batch.cursor])),mode:'football',football,index:6,history:[]},before=clone(saved);
    const {state,changed,advanced}=upgradeQuizState(saved);
    assert.equal(changed,true);assert.equal(advanced,false);assert.equal(state.football.solutionVisible,false);
    assert.equal(state.football.batch.cursor,4);assert.equal(state.football.taskNumber,7);
    assert.equal(state.football.position,2);assert.deepEqual(state.football.scores,[3,2]);
    assert.deepEqual(state.football.draw,football.draw);assert.deepEqual(state.football.teams,football.teams);
    assert.equal(state.football.plan,football.plan);assert.equal(state.index,6);
    for(const q of state.football.batch.questions){validateQuestion(q);assert.equal(q.answers.length,2);}
    assert.equal(validFootballSave(state.football),true);assert.deepEqual(saved,before);
    const corrupt=clone(saved);corrupt.football.batch.questions[8].correct=(corrupt.football.batch.questions[8].correct+1)%3;
    assert.throws(()=>upgradeQuizState(corrupt));
  }
});

