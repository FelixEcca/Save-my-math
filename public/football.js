const validSize=size=>Number.isInteger(size)&&size>=1&&size<=40;
export function createFootball(blue=10,red=10){
  if(!validSize(blue)||!validSize(red))throw new Error('Jedes Team braucht 1 bis 40 Personen.');
  return {position:0,scores:[0,0],teams:[blue,red].map(size=>({size,remaining:[],player:null})),lastGoal:null,solutionVisible:false,taskNumber:1,taskLabel:'',plan:null};
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
  const teams=game.teams.map(team=>{
    let remaining=[...team.remaining];
    if(!remaining.length){
      remaining=Array.from({length:team.size},(_,i)=>i+1);
      for(let i=remaining.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[remaining[i],remaining[j]]=[remaining[j],remaining[i]];}
      if(team.size>1&&remaining.at(-1)===team.player)[remaining[0],remaining[remaining.length-1]]=[remaining.at(-1),remaining[0]];
    }
    const player=remaining.pop();return {...team,remaining,player};
  });
  return {...game,teams};
}
export function validFootballSave(game){
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

const shirt='<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M29 12 7 29l12 25 13-7v42h36V47l13 7 12-25-22-17-13 8H42z" fill="currentColor"/><path d="M41 15q9 20 18 0" fill="none" stroke="white" stroke-width="3"/><text class="fb-shirt-number" x="50" y="69" text-anchor="middle" fill="white" font-size="35" font-family="sans-serif" font-weight="700">–</text></svg>';
export function createFootballView(board,actions){
  board.innerHTML=`<div class="fb-scoreboard"><section class="fb-team fb-blue" aria-label="Team Blau"><div><h3>Team Blau</h3><p class="fb-direction">Blau greift nach rechts an.</p></div><strong class="fb-score" id="football-score-blue">0</strong><div class="fb-shirt">${shirt}<span class="fb-roster" id="football-roster-blue"></span></div></section><div class="fb-draw"><button type="button" id="football-draw">Spieler auslosen</button><p id="football-draw-status" aria-live="polite">Jede Person erhält eine Trikotnummer.</p></div><section class="fb-team fb-red" aria-label="Team Rot"><div><h3>Team Rot</h3><p class="fb-direction">Rot greift nach links an.</p></div><strong class="fb-score" id="football-score-red">0</strong><div class="fb-shirt">${shirt}<span class="fb-roster" id="football-roster-red"></span></div></section></div>
  <div class="fb-position"><label for="football-position">Ballposition</label><input id="football-position" type="range" min="-3" max="3" step="1" value="0"><span id="football-position-label">Mitte</span></div>
  <div class="fb-pitch-wrap"><svg class="fb-pitch" viewBox="0 0 900 350" role="img" aria-labelledby="football-pitch-title"><title id="football-pitch-title">Fußballfeld. Der Ball liegt in der Mitte.</title><defs><pattern id="fb-net-blue" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#cfe7ff"/><path d="M0 0h12v12" fill="none" stroke="#276ad2" stroke-width="2"/></pattern><pattern id="fb-net-red" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#ffe0db"/><path d="M0 0h12v12" fill="none" stroke="#d5483b" stroke-width="2"/></pattern></defs><rect width="900" height="350" rx="7" fill="#2e8157"/><g fill="#fff" opacity=".055"><path d="M0 0h150v350H0zM300 0h150v350H300zM600 0h150v350H600z"/></g><g fill="none" stroke="#e3f5e8"><rect x="3" y="3" width="894" height="344" rx="5" stroke-width="3"/><path d="M150 3v344m150-344v344m150-344v344m150-344v344m150-344v344" stroke-width="2" opacity=".45"/><path d="M450 3v344" stroke-width="3"/><circle cx="450" cy="175" r="57" stroke-width="3"/><path d="M4 81h105v188H4m892-188H791v188h105" stroke-width="3"/></g><rect x="5" y="122" width="47" height="106" fill="url(#fb-net-blue)" stroke="#b9dbff" stroke-width="2"/><rect x="848" y="122" width="47" height="106" fill="url(#fb-net-red)" stroke="#ffd2ca" stroke-width="2"/><g id="football-ball" transform="translate(450 175)"><ellipse cy="19" rx="24" ry="7" fill="#102c20" opacity=".4"/><circle r="23" fill="white" stroke="#18352c" stroke-width="2"/><path d="m0-11 11 8-4 13H-7L-11-3zM-20-11l8-7 3 8-10 7zm35-6 7 10-7 4-6-8zM-20 11l9 3 2 8-8-6zm33 2 8-4-4 12-8 1z" fill="#1d302a"/></g></svg></div>
  <div class="fb-match-controls"><button type="button" class="fb-blue-button" id="football-blue-move">Blau rückt vor</button><p id="football-match-status" aria-live="polite">Der Ball liegt in der Mitte.</p><button type="button" class="fb-red-button" id="football-red-move">Rot rückt vor</button><button type="button" class="rs-main-action" id="football-goal" disabled>Tor werten und Anstoß</button></div>`;
  board.querySelector('#football-draw').addEventListener('click',actions.draw);
  board.querySelector('#football-blue-move').addEventListener('click',()=>actions.move(1));
  board.querySelector('#football-red-move').addEventListener('click',()=>actions.move(-1));
  board.querySelector('#football-goal').addEventListener('click',actions.goal);
  board.querySelector('#football-position').addEventListener('input',event=>actions.position(Number(event.target.value)));
  return {render(game){
    board.querySelector('#football-score-blue').textContent=game.scores[0];board.querySelector('#football-score-red').textContent=game.scores[1];
    const shirts=board.querySelectorAll('.fb-shirt-number');
    game.teams.forEach((team,i)=>{shirts[i].textContent=team.player??'–';board.querySelector(i===0?'#football-roster-blue':'#football-roster-red').textContent='Nr. 1 bis '+team.size;});
    board.querySelector('#football-draw-status').textContent=game.teams.every(t=>t.player!==null)?'Blau: Nr. '+game.teams[0].player+' · Rot: Nr. '+game.teams[1].player:'Jede Person erhält eine Trikotnummer.';
    const label=game.position===0?'Mitte':Math.abs(game.position)===3?'Im Tor von '+(game.position===3?'Rot':'Blau'):
      Math.abs(game.position)+' '+(Math.abs(game.position)===1?'Feld':'Felder')+' '+(game.position>0?'rechts':'links')+' der Mitte';
    board.querySelector('#football-position').value=game.position;board.querySelector('#football-position').setAttribute('aria-valuetext',label);
    board.querySelector('#football-position-label').textContent=label;board.querySelector('#football-pitch-title').textContent='Fußballfeld. Ballposition: '+label+'.';
    board.querySelector('#football-ball').setAttribute('transform','translate('+(450+game.position*140)+' 175)');
    board.querySelector('#football-goal').disabled=Math.abs(game.position)!==3;
    board.querySelector('#football-blue-move').disabled=game.position===3;board.querySelector('#football-red-move').disabled=game.position===-3;
    board.querySelector('#football-match-status').textContent=game.lastGoal!==null?'Tor für '+(game.lastGoal===0?'Blau':'Rot')+'! Anstoß in der Mitte.':Math.abs(game.position)===3?'Tor für '+(game.position===3?'Blau':'Rot')+' kann gewertet werden.':'Du entscheidest, welches Team vorrückt.';
  }};
}
