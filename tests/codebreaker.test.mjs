import test from 'node:test';
import assert from 'node:assert/strict';
import {createCodebreaker,setTeamAnswer,resolveCodebreaker,nextCodebreakerRound,validCodebreakerSave} from '../public/codebreaker.js';
const answer=(game,answers)=>answers.reduce((state,value,team)=>setTeamAnswer(state,team,value),game);
test('Codeknacker resolves four simultaneous answers and resets only incorrect teams',()=>{
  let game=createCodebreaker();
  for(let round=0;round<3;round++)game=nextCodebreakerRound(resolveCodebreaker(answer(game,[0,0,1,0]),0));
  assert.deepEqual(game.streaks,[3,3,0,3]);
  const result=resolveCodebreaker(answer(game,[1,0,0,1]),0);
  assert.deepEqual(result.streaks,[0,4,1,0]);assert.deepEqual(result.winners,[1]);
  assert.deepEqual(game.streaks,[3,3,0,3]);
  assert.throws(()=>nextCodebreakerRound(result));assert.throws(()=>resolveCodebreaker(result,0));
});
test('Four consecutive wins are required, ties win together, and unanswered rounds remain locked',()=>{
  let game=createCodebreaker();assert.throws(()=>resolveCodebreaker(game,0));
  game=resolveCodebreaker(answer(game,[0,0,0,0]),0);assert.deepEqual(game.winners,[]);
  assert.throws(()=>setTeamAnswer(game,0,1));
  game=nextCodebreakerRound(game);game=resolveCodebreaker(answer(game,[1,1,1,1]),0);
  assert.deepEqual(game.streaks,[0,0,0,0]);
  for(let i=0;i<4;i++){game=nextCodebreakerRound(game);game=resolveCodebreaker(answer(game,[2,2,2,2]),2);}
  assert.deepEqual(game.winners,[0,1,2,3]);
});
test('Saved progress is reconstructed from rounds and corrupted streaks or results are rejected',()=>{
  let game=createCodebreaker();const history=[];
  for(let i=0;i<3;i++){
    game=resolveCodebreaker(answer(game,[0,1,0,2]),0);
    history.push({round:i+1,correct:0,answers:[...game.answers],level:1});
    assert.equal(validCodebreakerSave(game,history,i,'result'),true);
    game=nextCodebreakerRound(game);
  }
  game=setTeamAnswer(game,2,1);assert.equal(validCodebreakerSave(game,history,3,'vote'),true);
  assert.equal(validCodebreakerSave({...game,streaks:[4,0,3,0]},history,3,'vote'),false);
  assert.equal(validCodebreakerSave(game,history,2,'vote'),false);
  game=resolveCodebreaker(answer(game,[0,0,0,0]),0);history.push({round:4,correct:0,answers:[...game.answers],level:1});
  assert.equal(validCodebreakerSave(game,history,3,'opened'),true);
  assert.equal(validCodebreakerSave(game,history,3,'result'),false);
  assert.deepEqual(createCodebreaker().streaks,[0,0,0,0]);
});
