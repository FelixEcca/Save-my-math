import test from 'node:test';
import assert from 'node:assert/strict';
import {createFootball,moveBall,positionBall,awardGoal,drawPlayers,validFootballSave} from '../public/football.js';
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
test('Jersey draws stay within each roster and use every player before repeating',()=>{
  let seed=42;const random=()=>((seed=(1664525*seed+1013904223)>>>0)/2**32);
  let game=createFootball(3,7),blue=[],red=[],last=[null,null];
  for(let i=0;i<210;i++){
    const old=game;game=drawPlayers(game,random);const players=game.teams.map(t=>t.player);
    assert.ok(players[0]>=1&&players[0]<=3);assert.ok(players[1]>=1&&players[1]<=7);
    assert.notEqual(players[0],last[0]);assert.notEqual(players[1],last[1]);
    assert.notEqual(game.teams,old.teams);blue.push(players[0]);red.push(players[1]);last=players;
  }
  for(let i=0;i<210;i+=3)assert.equal(new Set(blue.slice(i,i+3)).size,3);
  for(let i=0;i<210;i+=7)assert.equal(new Set(red.slice(i,i+7)).size,7);
  assert.deepEqual(drawPlayers(createFootball(1,1)).teams.map(t=>t.player),[1,1]);
  assert.throws(()=>createFootball(0,10));assert.throws(()=>createFootball(10,41));
});
test('Football saves preserve rosters and reject invalid scores, jersey bags and task settings',()=>{
  let game=drawPlayers(createFootball(5,9));game.plan={topic:'mental',customTopic:'',notes:'Nur Einmaleins',level:1};
  assert.equal(validFootballSave(JSON.parse(JSON.stringify(game))),true);
  assert.equal(validFootballSave({...game,position:2.5}),false);
  assert.equal(validFootballSave({...game,scores:[-1,0]}),false);
  assert.equal(validFootballSave({...game,teams:[{...game.teams[0],remaining:[1,1]},game.teams[1]]}),false);
  assert.equal(validFootballSave({...game,plan:{...game.plan,level:7}}),false);
});
