import {validateQuestion} from './engine.js';
const validSize=size=>Number.isInteger(size)&&size>=1&&size<=40;
export function createFootball(blue=10,red=10){
  if(!validSize(blue)||!validSize(red))throw new Error('Jedes Team braucht 1 bis 40 Personen.');
  return {position:0,scores:[0,0],teams:[blue,red].map(size=>({size,remaining:[],player:null})),draw:{player:null,remaining:[],serial:0},batch:null,lastGoal:null,solutionVisible:false,taskNumber:1,taskLabel:'',plan:null};
}
export function positionBall(game,position){
  if(!Number.isInteger(position)||position < -3||position > 3)throw new Error('Die Ballposition ist ungültig.');
  return {...game,position,lastGoal:null};
}
export function moveBall(game,direction){
  if(direction!==-1&&direction!==1)throw new Error('Die Spielrichtung ist ungültig.');
  return positionBall(game,Math.max(-3,Math.min(3,game.position+direction)));
}
export function awardGoal(game){
  if(Math.abs(game.position)!==3)throw new Error('Der Ball muss zuerst im Tor sein.');
  const team=game.position===3?0:1,scores=[...game.scores];scores[team]++;
  return {...game,scores,position:0,lastGoal:team};
}
export function drawPlayers(game,random=Math.random){
    const size=Math.min(...game.teams.map(t=>t.size));
    let remaining=[...game.draw.remaining];
    if(!remaining.length){
      remaining=Array.from({length:size},(_,i)=>i+1);
      for(let i=remaining.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[remaining[i],remaining[j]]=[remaining[j],remaining[i]];}
      if(size>1&&remaining.at(-1)===game.draw.player)[remaining[0],remaining[remaining.length-1]]=[remaining.at(-1),remaining[0]];
    }
    const player=remaining.pop();
    return {...game,draw:{player,remaining,serial:game.draw.serial+1},teams:game.teams.map(t=>({...t,remaining:[],player}))};
}
function validFootballBase(game){
  if(!game||!Number.isInteger(game.position)||game.position < -3||game.position > 3||
    !Array.isArray(game.scores)||game.scores.length!==2||!game.scores.every(n=>Number.isSafeInteger(n)&&n>=0)||
    !Array.isArray(game.teams)||game.teams.length!==2||!game.teams.every(team=>validSize(team.size)&&
      (team.player===null||(Number.isInteger(team.player)&&team.player>=1&&team.player<=team.size))&&
      Array.isArray(team.remaining)&&team.remaining.length<=team.size&&new Set(team.remaining).size===team.remaining.length&&
      team.remaining.every(n=>Number.isInteger(n)&&n>=1&&n<=team.size&&n!==team.player))||
    ![null,0,1].includes(game.lastGoal)||typeof game.solutionVisible!=='boolean'||
    !Number.isSafeInteger(game.taskNumber)||game.taskNumber<1||typeof game.taskLabel!=='string'||game.taskLabel.length>120)return false;
  const p=game.plan;
  return Boolean(p&&typeof p.topic==='string'&&p.topic.length<=100&&typeof p.customTopic==='string'&&p.customTopic.length<=120&&
    typeof p.notes==='string'&&p.notes.length<=600&&Number.isInteger(p.level)&&p.level>=1&&p.level<=5);
}
export function createFootballBatch(questions,{label,topic,level}){
  if(![10,15].includes(questions?.length)||typeof label!=='string'||!label||label.length>120||typeof topic!=='string'||topic.length>100||
    !Number.isInteger(level)||level<1||level>5)throw new Error('Der Aufgabenvorrat muss 10 oder 15 Aufgaben enthalten.');
  questions.forEach(q=>{validateQuestion(q);if(q.level!==level)throw new Error('Die Aufgaben passen nicht zum gewählten Niveau.');});
  return {questions:[...questions],label,topic,level,cursor:0};
}
export function advanceFootballBatch(game){
  const batch=game.batch;if(!batch||batch.cursor+1>=batch.questions.length)throw new Error('Der Aufgabenvorrat ist aufgebraucht.');
  return {...game,batch:{...batch,cursor:batch.cursor+1},solutionVisible:false,taskNumber:game.taskNumber+1,taskLabel:batch.label};
}
export function validFootballSave(game){
  if(!validFootballBase(game)||![10,15].includes(game.plan.batchSize))return false;
  const draw=game.draw,size=Math.min(...game.teams.map(t=>t.size));
  if(!draw||!Number.isSafeInteger(draw.serial)||draw.serial<0||!(draw.player===null||(Number.isInteger(draw.player)&&draw.player>=1&&draw.player<=size))||
    !Array.isArray(draw.remaining)||draw.remaining.length>size||new Set(draw.remaining).size!==draw.remaining.length||
    !draw.remaining.every(n=>Number.isInteger(n)&&n>=1&&n<=size&&n!==draw.player)||
    !game.teams.every(t=>t.player===draw.player&&t.remaining.length===0))return false;
  if(game.batch!==null){
    try{createFootballBatch(game.batch.questions,game.batch);if(!Number.isInteger(game.batch.cursor)||game.batch.cursor<0||game.batch.cursor>=game.batch.questions.length)return false;}
    catch(_){return false;}
  }
  return true;
}
export function migrateFootballSave(game){
  if(!validFootballBase(game))return null;
  const migrated={...game,plan:{...game.plan,batchSize:game.plan.batchSize??10},batch:game.batch??null};
  if(!game.draw){migrated.draw={player:null,remaining:[],serial:0};migrated.teams=game.teams.map(t=>({...t,remaining:[],player:null}));}
  return validFootballSave(migrated)?migrated:null;
}

export function createFootballView(board,drawHost,actions){
  drawHost.innerHTML='<p class="fb-draw-label">Gemeinsame Trikotnummer</p><div class="fb-shirt-badge"><output id="football-shared-number" aria-live="polite">–</output></div><button type="button" id="football-draw">Nummer auslosen</button><p id="football-draw-status">Für Team Blau und Team Rot</p>';
  board.innerHTML=`<div class="fb-scoreboard"><section class="fb-team fb-blue" aria-label="Team Blau"><h3>Team Blau</h3><p class="fb-direction">Blau greift nach rechts an.</p><p class="fb-roster" id="football-roster-blue"></p></section><div class="fb-score-display" role="status" aria-label="Spielstand: Blau 0, Rot 0"><strong class="fb-score fb-blue" id="football-score-blue">0</strong><span class="fb-score-divider" aria-hidden="true">:</span><strong class="fb-score fb-red" id="football-score-red">0</strong><span class="fb-score-label" aria-hidden="true">Spielstand</span></div><section class="fb-team fb-red" aria-label="Team Rot"><h3>Team Rot</h3><p class="fb-direction">Rot greift nach links an.</p><p class="fb-roster" id="football-roster-red"></p></section></div>
  <div class="fb-position"><label for="football-position">Ballposition</label><input id="football-position" type="range" min="-3" max="3" step="1" value="0"><span id="football-position-label">Mitte</span></div>
  <div class="fb-pitch-wrap"><svg class="fb-pitch" viewBox="0 0 900 350" role="img" aria-labelledby="football-pitch-title"><title id="football-pitch-title">Fußballfeld. Der Ball liegt in der Mitte.</title><defs><pattern id="fb-net-blue" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#cfe7ff"/><path d="M0 0h12v12" fill="none" stroke="#276ad2" stroke-width="2"/></pattern><pattern id="fb-net-red" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#ffe0db"/><path d="M0 0h12v12" fill="none" stroke="#d5483b" stroke-width="2"/></pattern></defs><rect width="900" height="350" rx="7" fill="#2e8157"/><g fill="#fff" opacity=".055"><path d="M0 0h150v350H0zM300 0h150v350H300zM600 0h150v350H600z"/></g><g fill="none" stroke="#e3f5e8"><rect x="3" y="3" width="894" height="344" rx="5" stroke-width="3"/><path d="M150 3v344m150-344v344m150-344v344m150-344v344m150-344v344" stroke-width="2" opacity=".45"/><path d="M450 3v344" stroke-width="3"/><circle cx="450" cy="175" r="57" stroke-width="3"/><path d="M4 81h105v188H4m892-188H791v188h105" stroke-width="3"/></g><rect x="5" y="122" width="47" height="106" fill="url(#fb-net-blue)" stroke="#b9dbff" stroke-width="2"/><rect x="848" y="122" width="47" height="106" fill="url(#fb-net-red)" stroke="#ffd2ca" stroke-width="2"/><g id="football-ball" transform="translate(450 175)"><ellipse cy="19" rx="24" ry="7" fill="#102c20" opacity=".4"/><circle r="23" fill="white" stroke="#18352c" stroke-width="2"/><path d="m0-11 11 8-4 13H-7L-11-3zM-20-11l8-7 3 8-10 7zm35-6 7 10-7 4-6-8zM-20 11l9 3 2 8-8-6zm33 2 8-4-4 12-8 1z" fill="#1d302a"/></g></svg></div>
  <div class="fb-match-controls"><button type="button" class="fb-blue-button" id="football-blue-move">Blau rückt vor</button><p id="football-match-status" aria-live="polite">Der Ball liegt in der Mitte.</p><button type="button" class="fb-red-button" id="football-red-move">Rot rückt vor</button><button type="button" class="rs-main-action" id="football-goal" disabled>Tor werten und Anstoß</button></div>`;
  drawHost.querySelector('#football-draw').addEventListener('click',actions.draw);
  board.querySelector('#football-blue-move').addEventListener('click',()=>actions.move(1));
  board.querySelector('#football-red-move').addEventListener('click',()=>actions.move(-1));
  board.querySelector('#football-goal').addEventListener('click',actions.goal);
  board.querySelector('#football-position').addEventListener('input',event=>actions.position(Number(event.target.value)));
  let lastDraw=null;
  return {render(game){
    board.querySelector('#football-score-blue').textContent=game.scores[0];board.querySelector('#football-score-red').textContent=game.scores[1];
    board.querySelector('.fb-score-display').setAttribute('aria-label','Spielstand: Blau '+game.scores[0]+', Rot '+game.scores[1]);
    game.teams.forEach((team,i)=>{board.querySelector(i===0?'#football-roster-blue':'#football-roster-red').textContent=team.size+' Personen';});
    drawHost.querySelector('#football-shared-number').textContent=game.draw.player??'–';
    drawHost.querySelector('#football-draw-status').textContent='Für beide Teams · Nr. 1 bis '+Math.min(...game.teams.map(t=>t.size));
    if(lastDraw!==null&&game.draw.serial!==lastDraw&&game.draw.serial>0&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const badge=drawHost.querySelector('.fb-shirt-badge');badge.getAnimations().forEach(a=>a.cancel());
      badge.animate([{transform:'scale(.75) rotate(-8deg)',opacity:.3},{transform:'scale(1.12) rotate(4deg)',opacity:1,offset:.6},{transform:'scale(1) rotate(0)',opacity:1}],{duration:550,easing:'ease-out'});
    }
    lastDraw=game.draw.serial;
    const label=game.position===0?'Mitte':Math.abs(game.position)===3?'Im Tor von '+(game.position===3?'Rot':'Blau'):
      Math.abs(game.position)+' '+(Math.abs(game.position)===1?'Feld':'Felder')+' '+(game.position>0?'rechts':'links')+' der Mitte';
    board.querySelector('#football-position').value=game.position;board.querySelector('#football-position').setAttribute('aria-valuetext',label);
    board.querySelector('#football-position-label').textContent=label;board.querySelector('#football-pitch-title').textContent='Fußballfeld. Ballposition: '+label+'.';
    board.querySelector('#football-ball').setAttribute('transform','translate('+(450+game.position*140)+' 175)');
    board.querySelector('#football-goal').disabled=Math.abs(game.position)!==3;
    board.querySelector('#football-blue-move').disabled=game.position===3;board.querySelector('#football-red-move').disabled=game.position===-3;
    const status=board.querySelector('#football-match-status');
    status.textContent=game.lastGoal!==null?'Tor für '+(game.lastGoal===0?'Blau':'Rot')+'! Anstoß in der Mitte.':Math.abs(game.position)===3?'Tor für '+(game.position===3?'Blau':'Rot')+' kann gewertet werden.':'';status.hidden=!status.textContent;
  }};
}
