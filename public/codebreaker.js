const choice=value=>Number.isInteger(value)&&value>=0&&value<3;
export const createCodebreaker=()=>({streaks:[0,0,0,0],answers:[null,null,null,null],revealed:false,correct:null,winners:[]});
export function setTeamAnswer(game,team,answer){
  if(game.revealed||!Number.isInteger(team)||team<0||team>3||!(answer===null||choice(answer)))throw new Error('Diese Antwort kann nicht eingetragen werden.');
  const answers=[...game.answers];answers[team]=answer;return {...game,answers};
}
export function resolveCodebreaker(game,correct){
  if(game.revealed||!choice(correct)||!game.answers.every(choice))throw new Error('Alle vier Teams müssen zuerst antworten.');
  const streaks=game.streaks.map((streak,i)=>game.answers[i]===correct?streak+1:0);
  return {...game,streaks,revealed:true,correct,winners:streaks.flatMap((streak,i)=>streak===4?[i]:[])};
}
export function nextCodebreakerRound(game){
  if(!game.revealed||game.winners.length)throw new Error('Diese Runde kann nicht fortgesetzt werden.');
  return {...game,answers:[null,null,null,null],revealed:false,correct:null,winners:[]};
}
export function validCodebreakerSave(game,history,index,phase){
  try{
    if(!game||!Array.isArray(history)||history.length>10000||!Number.isInteger(index)||index<0||
      !['vote','result','opened'].includes(phase)||history.length!==index+(phase==='vote'?0:1))return false;
    let replay=createCodebreaker();
    for(const [i,round] of history.entries()){
      if(!round||round.round!==i+1||!Array.isArray(round.answers)||round.answers.length!==4||!choice(round.correct)||
        !Number.isInteger(round.level)||round.level<1||round.level>5)return false;
      for(let team=0;team<4;team++)replay=setTeamAnswer(replay,team,round.answers[team]);
      replay=resolveCodebreaker(replay,round.correct);
      if(i<history.length-1||phase==='vote')replay=nextCodebreakerRound(replay);
    }
    if(!Array.isArray(game.answers)||game.answers.length!==4)return false;
    if(phase==='vote')for(let team=0;team<4;team++)replay=setTeamAnswer(replay,team,game.answers[team]);
    if((phase==='opened')!==Boolean(replay.winners.length))return false;
    return ['streaks','answers','revealed','correct','winners'].every(key=>JSON.stringify(game[key])===JSON.stringify(replay[key]));
  }catch(_){return false;}
}

const lockIcon='<svg viewBox="0 0 28 32" aria-hidden="true"><path class="ck-shackle" d="M7 14V9a7 7 0 0 1 14 0v5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><rect x="3" y="13" width="22" height="17" rx="4" fill="currentColor"/><circle cx="14" cy="21" r="2" fill="var(--rs-paper)"/><path d="M14 21v4" stroke="var(--rs-paper)" stroke-width="2"/></svg>';
export function createCodebreakerView(stage,container,onAnswer){
  stage.innerHTML=`<div class="ck-hero-copy"><p class="ck-kicker">Vier Teams · Vier Schlösser</p><h3 id="codebreaker-headline">Wer knackt den Safe?</h3><p>Vier richtige Antworten in Folge öffnen den Safe. Eine falsche Antwort schließt alle Schlösser des Teams.</p><p id="codebreaker-lead" class="ck-lead" aria-live="polite">Alle Teams starten bei null.</p></div>
  <div class="ck-vault-art" aria-hidden="true"><svg class="ck-vault" viewBox="0 0 360 240"><defs><linearGradient id="ck-metal" x2="1" y2="1"><stop stop-color="#7f9cad"/><stop offset=".5" stop-color="#49677c"/><stop offset="1" stop-color="#294456"/></linearGradient></defs><ellipse cx="185" cy="222" rx="142" ry="10" fill="#071522" opacity=".6"/><rect x="64" y="207" width="35" height="15" rx="3" fill="#203344"/><rect x="265" y="207" width="35" height="15" rx="3" fill="#203344"/><rect x="46" y="15" width="270" height="197" rx="19" fill="url(#ck-metal)" stroke="#90aabb" stroke-width="2"/><rect x="63" y="31" width="236" height="164" rx="12" fill="#0b1d2a"/><g class="ck-treasure" fill="#f6c66d" stroke="#b78331" stroke-width="2"><path d="M93 152h53l12 23H84z"/><path d="M163 152h53l12 23h-74z"/><path d="M128 125h53l12 23h-74z"/></g><g class="ck-vault-door"><rect x="65" y="33" width="232" height="160" rx="11" fill="url(#ck-metal)" stroke="#aec4cf" stroke-width="3"/><rect x="79" y="47" width="205" height="133" rx="5" fill="none" stroke="#263f51" stroke-width="3"/><rect x="58" y="58" width="18" height="31" rx="4" fill="#a1bac7"/><rect x="58" y="139" width="18" height="31" rx="4" fill="#a1bac7"/><circle cx="180" cy="110" r="40" fill="#263f51" stroke="#a1bac7" stroke-width="4"/><g class="ck-wheel" stroke="#bad0d9" stroke-width="7" stroke-linecap="round"><path d="M180 110V82m0 28 25 15m-25-15-25 15"/></g><circle cx="180" cy="110" r="11" fill="#819eaf"/><rect x="241" y="91" width="19" height="45" rx="5" fill="#182f40" stroke="#a1bac7" stroke-width="3"/><circle cx="179" cy="167" r="4" fill="#f6c66d"/></g></svg><div class="ck-vault-locks">${lockIcon.repeat(4)}</div></div>`;
  const cards=[];
  for(let team=0;team<4;team++){
    const card=document.createElement('section');card.className='ck-team';card.dataset.team=team;card.setAttribute('aria-label','Team '+(team+1));
    card.innerHTML=`<div class="ck-team-top"><h4>Team ${team+1}</h4><span class="ck-streak"></span></div><div class="ck-locks">${lockIcon.repeat(4)}</div><p class="ck-team-status" aria-live="polite"></p><div class="ck-answer-buttons">${['A','B','C'].map((letter,answer)=>`<button type="button" data-team="${team}" data-answer="${answer}" aria-label="Team ${team+1}: Antwort ${letter} wählen">${letter}</button>`).join('')}</div><button class="ck-change" type="button" data-team="${team}" data-answer="clear" hidden>Ändern</button>`;
    container.appendChild(card);cards.push(card);
  }
  container.addEventListener('click',event=>{
    const button=event.target.closest('button[data-answer]');if(!button||button.disabled)return;
    onAnswer(Number(button.dataset.team),button.dataset.answer==='clear'?null:Number(button.dataset.answer));
  });
  return {render(game){
    const finished=game.winners.length>0,lead=Math.max(...game.streaks);
    stage.classList.toggle('is-open',finished);
    stage.querySelector('#codebreaker-headline').textContent=finished?'Der Safe ist offen!':'Wer knackt den Safe?';
    const leaders=game.streaks.flatMap((streak,i)=>streak===lead?['Team '+(i+1)]:[]).join(' und ');
    stage.querySelector('#codebreaker-lead').textContent=finished?leaders+(game.winners.length===1?' gewinnt!':' gewinnen gemeinsam!'):
      lead===0?'Alle Teams stehen bei null.':leaders+' · '+lead+' von 4 Schlössern offen';
    stage.querySelectorAll('.ck-vault-locks svg').forEach((icon,i)=>icon.classList.toggle('is-open',i<lead));
    cards.forEach((card,i)=>{
      const answered=game.answers[i]!==null,right=game.answers[i]===game.correct;
      card.classList.toggle('is-right',game.revealed&&right);card.classList.toggle('is-wrong',game.revealed&&!right);
      card.classList.toggle('is-winner',game.winners.includes(i));
      card.querySelector('.ck-streak').textContent=game.streaks[i]+' / 4';
      card.querySelector('.ck-locks').setAttribute('aria-label',game.streaks[i]+' von 4 Schlössern offen');
      card.querySelectorAll('.ck-locks svg').forEach((icon,j)=>icon.classList.toggle('is-open',j<game.streaks[i]));
      card.querySelector('.ck-team-status').textContent=game.revealed?
        ['A','B','C'][game.answers[i]]+' · '+(game.winners.includes(i)?'Safe geknackt!':right?'Richtig!':'Zurück auf Anfang.'):
        answered?'Antwort gespeichert.':'Welche Antwort wählt ihr?';
      card.querySelector('.ck-answer-buttons').hidden=game.revealed||answered;
      card.querySelector('.ck-change').hidden=game.revealed||!answered;
    });
  }};
}
