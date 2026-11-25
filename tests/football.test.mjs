import test from 'node:test';
import assert from 'node:assert/strict';
import {createFootball,moveBall,positionBall,awardGoal,drawPlayers,validFootballSave,migrateFootballSave,createFootballBatch,advanceFootballBatch} from '../public/football.js';
import {validateQuestion} from '../public/engine.js';
import {materializeQuestion} from '../public/math.js';
test('Individual KI tasks remain independently verifiable after reload without a saved bank',()=>{
  const question=materializeQuestion({prompt:'Wie groß ist die Fläche eines Rechtecks mit 8 cm und 6 cm?',instruction:'Berechne die Fläche.',calculation:'8*6',decimals:0,unit:'cm²',distractors:[14,28]},1,'football-test');
  assert.deepEqual(validateQuestion(JSON.parse(JSON.stringify(question))),question);
  const wrong={...question,correct:(question.correct+1)%3};assert.throws(()=>validateQuestion(wrong));
});
test('Football goals count for the attacking team once and return the ball to kickoff',()=>{
  let game=createFootball(8,13);assert.throws(()=>awardGoal(game));
  for(let i=0;i<5;i++)game=moveBall(game,1);
  assert.equal(game.position,3);const result=awardGoal(game);
  assert.deepEqual(result.scores,[1,0]);assert.equal(result.position,0);assert.equal(result.lastGoal,0);
  assert.equal(game.position,3);assert.deepEqual(game.scores,[0,0]);assert.throws(()=>awardGoal(result));
  const red=awardGoal(positionBall(result,-3));assert.deepEqual(red.scores,[1,1]);assert.equal(red.lastGoal,1);
  assert.throws(()=>positionBall(red,4));assert.throws(()=>moveBall(red,0));
});
test('Both teams receive the same jersey number and the shared pool is exhausted before repeating',()=>{
  let seed=42;const random=()=>((seed=(1664525*seed+1013904223)>>>0)/2**32);
  let game=createFootball(3,7),blue=[],red=[],last=[null,null];
  for(let i=0;i<210;i++){
    const old=game;game=drawPlayers(game,random);const players=game.teams.map(t=>t.player);
    assert.ok(players[0]>=1&&players[0]<=3);assert.equal(players[0],players[1]);assert.equal(game.draw.player,players[0]);
    assert.notEqual(players[0],last[0]);assert.notEqual(players[1],last[1]);
    assert.notEqual(game.teams,old.teams);blue.push(players[0]);red.push(players[1]);last=players;
  }
  for(let i=0;i<210;i+=3)assert.equal(new Set(blue.slice(i,i+3)).size,3);
  for(let i=0;i<210;i+=3)assert.equal(new Set(red.slice(i,i+3)).size,3);
  assert.equal(game.draw.serial,210);
  assert.deepEqual(drawPlayers(createFootball(1,1)).teams.map(t=>t.player),[1,1]);
  assert.throws(()=>createFootball(0,10));assert.throws(()=>createFootball(10,41));
});
test('Football saves preserve rosters and reject invalid scores, jersey bags and task settings',()=>{
  let game=drawPlayers(createFootball(5,9));game.plan={topic:'mental',customTopic:'',notes:'Nur Einmaleins',level:1,batchSize:10};
  assert.equal(validFootballSave(JSON.parse(JSON.stringify(game))),true);
  assert.equal(validFootballSave({...game,position:2.5}),false);
  assert.equal(validFootballSave({...game,scores:[-1,0]}),false);
  assert.equal(validFootballSave({...game,teams:[{...game.teams[0],remaining:[1,1]},game.teams[1]]}),false);
  assert.equal(validFootballSave({...game,plan:{...game.plan,level:7}}),false);
});
const questions=count=>Array.from({length:count},(_,i)=>materializeQuestion({prompt:'Berechne '+(i+2)+' · 3.',instruction:'Berechne.',calculation:(i+2)+'*3',decimals:0,unit:'',distractors:[(i+2)*3+1,(i+2)*3+2]},1,'q-'+i));
test('Approved batches advance locally, preserve the match, and stop at the end',()=>{
  let game=drawPlayers(createFootball(4,6));game.plan={topic:'mental',customTopic:'',notes:'',level:1,batchSize:10};
  game={...game,position:2,scores:[2,1],solutionVisible:true,batch:createFootballBatch(questions(10),{label:'Einmaleins',topic:'mental',level:1})};
  const original=game;
  for(let i=1;i<10;i++)game=advanceFootballBatch(game);
  assert.equal(game.batch.cursor,9);assert.equal(game.taskNumber,10);assert.equal(game.solutionVisible,false);
  assert.deepEqual(game.scores,[2,1]);assert.equal(game.position,2);assert.deepEqual(game.teams,original.teams);assert.deepEqual(game.draw,original.draw);
  assert.equal(original.batch.cursor,0);assert.throws(()=>advanceFootballBatch(game));assert.equal(validFootballSave(game),true);
  assert.throws(()=>createFootballBatch(questions(9),{label:'Test',topic:'mental',level:1}));
  const invalid=questions(15);invalid[3].correct=(invalid[3].correct+1)%3;
  assert.throws(()=>createFootballBatch(invalid,{label:'Test',topic:'mental',level:1}));
  assert.equal(validFootballSave({...game,batch:{...game.batch,cursor:10}}),false);
});
test('Existing football saves keep scores and tasks while migrating to the common draw',()=>{
  const legacy={...createFootball(3,5),position:-2,scores:[4,3],taskNumber:7,taskLabel:'Flächen',plan:{topic:'areas',customTopic:'',notes:'',level:1}};
  delete legacy.draw;delete legacy.batch;
  legacy.teams=[{size:3,player:2,remaining:[1,3]},{size:5,player:4,remaining:[1,2,3,5]}];
  const migrated=migrateFootballSave(JSON.parse(JSON.stringify(legacy)));
  assert.deepEqual(migrated.scores,[4,3]);assert.equal(migrated.position,-2);assert.equal(migrated.taskNumber,7);
  assert.deepEqual(migrated.teams.map(t=>t.player),[null,null]);assert.equal(migrated.plan.batchSize,10);assert.equal(migrated.batch,null);
  assert.equal(validFootballSave(migrated),true);
});
