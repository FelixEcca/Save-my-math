import {topics,generateTopicQuestion,validateQuestion,parseLinear,registerCustomBank,renderTerms,renderVector} from './engine.js';
import {createScene} from './scene.js';
import {loadBrowserBanks,saveBrowserBank} from './storage.js';
import {createCodebreaker,setTeamAnswer,resolveCodebreaker,nextCodebreakerRound,validCodebreakerSave,createCodebreakerView} from './codebreaker.js';
import {createFootball,moveBall,positionBall,awardGoal,drawPlayers,validFootballSave,createFootballView} from './football.js';
const root=document.getElementById('av-rescue-preview');
const byId=id=>root.querySelector('#'+id);
  const scenarios = {
    water: {name: 'Über Bord', color: 'bean-water', goal: 'Rettungsboot', success: 'Wieder an Bord!',
      failure: 'Ein ziemlich nasser Abgang.'},
    rail: {name: 'Auf dem Gleis', color: 'bean-rail', goal: 'Bahnsteig', success: 'Schuh frei. Gleis frei!',
      failure: 'Der Zug hatte keine Geduld.'},
    cliff: {name: 'Am Felsen', color: 'bean-cliff', goal: 'Gipfel', success: 'Oben angekommen!',
      failure: 'Die Schwerkraft hat gewonnen.'},
    ice: {name: 'Dünnes Eis', color: 'bean-ice', goal: 'Ufer', success: 'Wieder festen Boden!',
      failure: 'Das Eis war leider dünner.'},
    space: {name: 'Im All', color: 'bean-space', goal: 'Raumschiff', success: 'Zurück in der Luftschleuse!',
      failure: 'Leider ohne Rückflugticket.'}
  };
  const footballFromSettings=settings=>({...createFootball(settings.blueSize??10,settings.redSize??10),taskLabel:topics[settings.topic??'brackets'].label,
    plan:{topic:settings.topic??'brackets',customTopic:settings.customTopic||'',notes:settings.notes||'',level:settings.level??2}});
  const fresh = (settings = {}) => ({
    version: 2, mode:settings.mode??'rescue', codebreaker:createCodebreaker(), football:footballFromSettings(settings), topic:settings.topic??'brackets', count: settings.count ?? 20, total: settings.total ?? 8,
    scenario: settings.scenario ?? 'water', level: settings.level ?? 2,
    index: 0, energy: Math.min(4,settings.total??8), votes: [0,0,0], phase: 'vote', history: [], usedTerms: [],
    current: generateTopicQuestion(settings.topic??'brackets',settings.level ?? 2)
  });
  let state = fresh();
  let setupOpen=true, draft=null, setupError='', setupMessage='', pendingTopicRequest=null;
  let preparedQuestions=[];
  const sizeInput = byId('rescue-size');
  const totalInput = byId('rescue-total');
  const countInputs = [0,1,2].map(index => byId('rescue-count-' + index));
  const action = byId('rescue-resolve');
  const scene = byId('rescue-canvas');
  let busy=false,notice='',pendingReview=null;
  let aiConfigured=false;
  let cloudMode=false,aiAccess={required:false,authenticated:true,configured:true};
  const renderer=createScene(scene,root,()=>state);
  const drawScene=time=>renderer.draw(time);
  const resizeScene=()=>renderer.resize();
  const safeView=createCodebreakerView(byId('codebreaker-stage'),byId('codebreaker-teams'),(team,answer)=>{
    if(busy||pendingReview||state.mode!=='codebreaker'||state.phase!=='vote')return;
    state.codebreaker=setTeamAnswer(state.codebreaker,team,answer);render();persist();
    const card=byId('codebreaker-teams').children[team];
    card.querySelector(answer===null?'.ck-answer-buttons button':'.ck-change').focus();
  });
  let footballPlanRef=null;
  const footballView=createFootballView(byId('football-board'),{
    move:direction=>updateFootball(game=>moveBall(game,direction)),
    position:position=>updateFootball(game=>positionBall(game,position)),
    draw:()=>updateFootball(game=>drawPlayers(game)),goal:()=>updateFootball(game=>awardGoal(game))
  });
  function updateFootball(update){
    if(busy||pendingReview||state.mode!=='football')return;
    state.football=update(state.football);render();persist();
  }

  function validSettings() {
    return Number.isInteger(state.count) && state.count >= 1 && state.count <= 40 &&
      Number.isInteger(state.total) && state.total >= 1 && state.total <= 30;
  }
  function validVotes() {
    return validSettings() && state.votes.every(vote => Number.isInteger(vote) && vote >= 0 && vote <= state.count);
  }
  function ready() {
    return validVotes() && state.votes.reduce((a,b) => a+b,0) === state.count;
  }
  function persist() {
    try { localStorage.setItem('av-rescue-game-v1',JSON.stringify({privateContent:{rescue:state,setup:draft,setupOpen}})); }
    catch(_){notice='Der Spielstand konnte in diesem Browser nicht gespeichert werden.';}
  }
  function migrate(old) {
    if (!old || old.version !== 1) return old;
    const legacy = [
      ['12 − (4 − 2)',['6','10','18'],1],
      ['18 + (5 − 3)',['20','16','26'],0],
      ['15 − (4 + 3)',['14','22','8'],2],
      ['9 + (x − 4)',['x + 5','x − 5','5 − x'],0],
      ['12 − (x − 4)',['8 − x','16 − x','8 + x'],1],
      ['4x + (2x − 3)',['2x − 3','6x + 3','6x − 3'],2],
      ['8x − (3x − 2)',['5x + 2','5x − 2','11x − 2'],0],
      ['6a − (2a + 3b)',['4a + 3b','8a − 3b','4a − 3b'],2]
    ];
    if (!Number.isInteger(old.index) || !legacy[old.index]) return null;
    const [term,answers,correct] = legacy[old.index];
    const parsed = parseLinear(term);
    const legacyLevel = [1,1,1,2,2,3,3,5][old.index];
    const current = {term,answers,correct,level:legacyLevel,
      why:term+' = '+renderTerms(parsed.terms)+' = '+renderVector(parsed.coefficients)+'.'};
    return {...old,version:2,total:8,scenario:'water',level:legacyLevel,current,usedTerms:[term]};
  }
  function restore(snapshot) {
    const saved = migrate(snapshot?.privateContent?.rescue);
    const safe=saved?.mode==='codebreaker';
    const football=saved?.mode==='football';
    if (!saved || saved.version !== 2 || !scenarios[saved.scenario] ||
        !['rescue','codebreaker','football'].includes(saved.mode??'rescue') ||
        !Number.isInteger(saved.level) || saved.level < 1 || saved.level > 5 ||
        !Number.isInteger(saved.count) || saved.count < 1 || saved.count > 40 ||
        !Number.isInteger(saved.total) || saved.total < 1 || saved.total > 30 ||
        !Number.isSafeInteger(saved.index) || saved.index < 0 || (!safe&&!football&&saved.index >= saved.total) ||
        !Number.isInteger(saved.energy) || saved.energy < 0 || saved.energy > 5 ||
        !Array.isArray(saved.votes) || saved.votes.length !== 3 ||
        !saved.votes.every(vote => vote === null || (Number.isInteger(vote) && vote >= 0 && vote <= saved.count))) return;
    if(football){
      if(!validFootballSave(saved.football)||saved.phase!=='vote'||!Array.isArray(saved.history)||saved.history.length||saved.index!==saved.football.taskNumber-1||
        !(topics[saved.football.plan.topic]||saved.football.plan.topic==='custom'))return;
    }else if(safe){
      if(!validCodebreakerSave(saved.codebreaker,saved.history,saved.index,saved.phase))return;
    }else if(!['vote','result','rescued','failed'].includes(saved.phase)||
        !Array.isArray(saved.history)||saved.history.length!==saved.index+(saved.phase==='vote'?0:1)||
        !saved.history.every((round,index) => round && round.round === index+1 &&
          Number.isInteger(round.correct) && round.correct >= 0 && round.correct <= saved.count &&
          round.total === saved.count && round.pass === (round.correct*5 >= saved.count*4) &&
          Number.isInteger(round.delta) && round.delta >= -1 && round.delta <= 1 &&
          Number.isInteger(round.energy) && round.energy >= 0 && round.energy <= 5)) return;
    if(!topics[saved.topic||'brackets'])return;
    try { validateQuestion(saved.current); } catch (_) { return; }
    state = {...saved,mode:saved.mode??'rescue',codebreaker:safe?saved.codebreaker:createCodebreaker(),football:football?saved.football:footballFromSettings(saved),topic:saved.topic||'brackets',history:[...saved.history],votes:[...saved.votes],
      usedTerms:Array.isArray(saved.usedTerms) ? saved.usedTerms.filter(term => typeof term==='string').slice(-60) : []};
    const stored=snapshot.privateContent;
    setupOpen=typeof stored.setupOpen==='boolean'?stored.setupOpen:true;
    const settings=stored.setup;
    if(settings&&(topics[settings.topic]||settings.topic==='custom')&&[1,3,5].includes(settings.level)&&scenarios[settings.scenario]){
      draft={...settings,mode:['codebreaker','football'].includes(settings.mode)?settings.mode:'rescue',blueSize:state.football.teams[0].size,redSize:state.football.teams[1].size,customTopic:String(settings.customTopic||'').slice(0,120),notes:String(settings.notes||'').slice(0,600)};
      syncSetupFields();
    }else{
      draft=draftFromGame();syncSetupFields();
    }
    pendingTopicRequest=null;
    preparedQuestions=[];
    render();
  }
  function replaceQuestion() {
    state.usedTerms = [...state.usedTerms,state.current.term].slice(-60);
    state.current = preparedQuestions.find(q=>q.level===state.level&&!state.usedTerms.includes(q.term))||
      generateTopicQuestion(state.topic,state.level,state.usedTerms);
    state.votes = [0,0,0];
    if(state.mode==='codebreaker')state.codebreaker=state.codebreaker.revealed?
      nextCodebreakerRound(state.codebreaker):{...state.codebreaker,answers:[null,null,null,null]};
  }
  async function changeLevel(change) {
    if(busy||pendingReview||state.phase==='opened'||(state.mode==='codebreaker'&&state.phase==='vote'&&state.codebreaker.answers.some(v=>v!==null)))return;
    const next=Math.max(1,Math.min(5,state.level+change));
    if(next===state.level)return;
    if(state.mode==='football'){
      state.football.plan.level=next;syncFootballPlan();return nextFootballTask();
    }
    const bank=topics[state.topic]?.bank;
    if(bank&&!bank.questions.some(q=>q.level===next)){
      return requestAI({topic:bank.label,notes:bank.notes||'',level:next,count:Math.max(8,state.total),exclude:bank.questions.map(q=>q.term).slice(-60)},
        {mode:'extend',topicId:state.topic,nextLevel:next,wasSetupOpen:setupOpen});
    }
    state.level=next;
    if(state.phase==='vote')replaceQuestion();
    render();persist();
  }
  function reset() {
    if(state.mode==='football'){
      const game=state.football;
      state.football={...createFootball(game.teams[0].size,game.teams[1].size),plan:game.plan,taskLabel:game.taskLabel,taskNumber:game.taskNumber};
      render();persist();return;
    }
    state = fresh({count:validSettings()?state.count:20,total:validSettings()?state.total:8,
      mode:state.mode,scenario:state.scenario,level:state.level,topic:state.topic});
    preparedQuestions=[];
    render();
    persist();
  }
  function render() {
    root.querySelectorAll('button,input,select,textarea').forEach(el=>el.disabled=false);
    const safe=state.mode==='codebreaker',football=state.mode==='football';root.dataset.mode=state.mode;
    renderSetup();
    byId('rescue-notice').hidden=!notice;
    byId('rescue-notice').textContent=notice;
    byId('rescue-scenarios').hidden=safe||football;byId('rescue-scene').hidden=safe||football;
    byId('rescue-voting-settings').hidden=safe||football;byId('codebreaker-stage').hidden=!safe;
    byId('codebreaker-teams-section').hidden=!safe;
    byId('football-board').hidden=!football;byId('football-plan').hidden=!football;byId('football-next').hidden=!football;
    byId('rescue-choices').hidden=football;byId('rescue-reset').textContent=football?'Spielstand zurücksetzen':'Neu starten';
    action.removeAttribute('aria-expanded');
    if(football){renderFootball();finishRender();return;}
    if(safe){renderCodebreaker();finishRender();return;}
    const revealed = state.phase !== 'vote';
    const finished = state.phase === 'rescued' || state.phase === 'failed';
    const settingsValid = validSettings();
    const sum = state.votes.reduce((total,value) => total+(Number.isFinite(value)?value:0),0);
    const required = settingsValid ? Math.ceil(state.count*4/5) : 0;
    const scenario = scenarios[state.scenario];
    sizeInput.value = state.count ?? '';
    totalInput.value = state.total ?? '';
    sizeInput.disabled = state.history.length > 0;
    totalInput.disabled = state.history.length > 0;
    sizeInput.setAttribute('aria-invalid',String(!Number.isInteger(state.count)||state.count<1||state.count>40));
    totalInput.setAttribute('aria-invalid',String(!Number.isInteger(state.total)||state.total<1||state.total>30));
    byId('rescue-round').textContent = setupOpen?'Spiel vorbereiten':
      topics[state.topic].label+' · '+scenario.name+' · Frage '+(state.index+1)+' von '+(state.total||'–');
    renderQuestion(revealed,finished);
    root.querySelectorAll('[data-rescue-scenario]').forEach(button => {
      button.setAttribute('aria-pressed',String(button.dataset.rescueScenario===state.scenario));
    });
    byId('rescue-threshold').textContent = settingsValid
      ? 'Mindestens '+required+' von '+state.count+' Antworten müssen richtig sein.'
      : 'Wähle 1 bis 40 SuS und 1 bis 30 Fragen.';
    byId('rescue-energy-text').textContent = state.energy+' / 5';
    byId('rescue-energy').setAttribute('aria-valuenow',state.energy);
    [...byId('rescue-energy').children].forEach((part,index)=>part.classList.toggle('is-on',index<state.energy));
    const remaining = Math.max(0,(state.total||8)-state.history.length);
    const warnings = {
      water:{3:'Die Wellen werden höher.',2:'Die Figur geht immer tiefer!',1:'Nur noch der Kopf ist über Wasser!'},
      rail:{3:'Der Zug kommt näher.',2:'Der Zug rast auf die Figur zu!',1:'Der Zug ist fast da!'},
      cliff:{3:'Das Seil beginnt zu reißen.',2:'Nur wenige Fasern halten noch!',1:'Nur noch ein Faden hält!'},
      ice:{3:'Die Risse werden breiter.',2:'Das Eis bricht unter den Füßen!',1:'Die letzte Eisscholle kippt!'},
      space:{3:'Die Verbindung wird brüchig.',2:'Luft entweicht aus dem Anzug!',1:'Das Seil reißt gleich!'}
    };
    root.dataset.rescueDanger = state.phase==='rescued'?'calm':state.energy<=1?'critical':
      state.energy===2?'high':state.energy===3?'rising':'calm';
    byId('rescue-boat').textContent = state.phase==='rescued'?scenario.success:
      state.phase==='failed'?scenario.failure:warnings[state.scenario][state.energy]||
      scenario.goal+' · noch '+remaining+(remaining===1?' Frage':' Fragen');
    for (let i=0;i<3;i++) {
      countInputs[i].value = state.votes[i] ?? '';
      countInputs[i].max = state.count||40;
      countInputs[i].disabled = revealed;
      countInputs[i].setAttribute('aria-invalid',String(!Number.isInteger(state.votes[i])||state.votes[i]<0||
        (settingsValid&&state.votes[i]>state.count)));
    }
    action.disabled = !revealed&&!ready();
    action.textContent = finished?'Neuer Rettungsversuch':revealed?'Nächste Frage':'Auflösen';
    const status = byId('rescue-status');
    status.classList.toggle('is-error',!revealed&&(!validVotes()||(settingsValid&&sum>state.count)));
    byId('rescue-feedback').hidden = !revealed;
    if (revealed) {
      const last = state.history[state.history.length-1];
      const percent = new Intl.NumberFormat('de-DE',{maximumFractionDigits:1}).format(last.correct/last.total*100);
      status.textContent = last.correct+' von '+last.total+' richtig · '+percent+' %';
      const change = last.delta>0?'+1 Kraft':last.delta<0?'−1 Kraft':'Kraft bleibt voll';
      byId('rescue-outcome').textContent = (last.pass?'80-Prozent-Ziel erreicht. ':'80-Prozent-Ziel verfehlt. ')+change+'.';
      byId('rescue-outcome').style.color = last.pass?'var(--rs-green)':'var(--rs-danger)';
      byId('rescue-explanation').textContent = state.current.why;
    } else if (!settingsValid) {
      status.textContent = 'Prüfe die Einstellungen.';
    } else if (!validVotes()) {
      status.textContent = 'Trage ganze Stimmenzahlen zwischen 0 und '+state.count+' ein.';
    } else if (sum>state.count) {
      status.textContent = 'Es sind '+sum+' Stimmen bei '+state.count+' SuS eingetragen.';
    } else {
      status.textContent = sum+' von '+state.count+' Stimmen eingetragen.';
    }
    byId('rescue-ending').hidden = !finished;
    byId('rescue-end-text').textContent = state.phase==='rescued'?'Gerettet!':'Das ging schief.';
    byId('rescue-end-detail').textContent = state.phase==='rescued'?scenario.success:scenario.failure;
    scene.setAttribute('aria-label',scenario.name+'. Comicfigur mit '+state.energy+' von 5 Kraftpunkten. '+
      byId('rescue-boat').textContent+(finished?' '+byId('rescue-end-text').textContent:''));
    root.dataset.scenario = state.scenario;
    finishRender();
  }
  function finishRender(){
    root.setAttribute('aria-busy',String(busy));
    if(busy)root.querySelectorAll('button,input,select,textarea').forEach(el=>el.disabled=true);
    drawScene(0);
  }
  function renderQuestion(revealed,finished=false){
    byId('rescue-question').textContent=state.current.term;
    byId('rescue-instruction').textContent=state.current.instruction||topics[state.topic].instruction;
    byId('rescue-question').parentElement.classList.toggle('is-text',state.current.term.length>55);
    byId('rescue-level').textContent=(finished?'Neues Spiel · ':revealed?'Nächste Frage · ':'')+'Stufe '+state.level+' · '+topics[state.topic].levels[state.level-1];
    const frozen=state.mode==='codebreaker'&&(finished||(state.phase==='vote'&&state.codebreaker.answers.some(v=>v!==null)));
    byId('rescue-easier').disabled=frozen||state.level===1;byId('rescue-harder').disabled=frozen||state.level===5;
    for(let i=0;i<3;i++){
      byId('rescue-answer-'+i).textContent=state.current.answers[i];
      const option=byId('rescue-option-'+i);option.classList.toggle('is-correct',revealed&&state.current.correct===i);
      option.querySelector('.rs-correct-label').hidden=!(revealed&&state.current.correct===i);
    }
  }
  function renderCodebreaker(){
    const game=state.codebreaker,answered=game.answers.filter(v=>v!==null).length,finished=state.phase==='opened';
    safeView.render(game);renderQuestion(game.revealed,finished);
    byId('rescue-round').textContent=setupOpen?'Spiel vorbereiten':topics[state.topic].label+' · Runde '+(state.index+1)+' · vier Teams';
    const status=byId('rescue-status');status.classList.remove('is-error');
    status.textContent=finished?'Vier Schlösser offen. Der Safe ist geknackt.':game.revealed?'Alle Antworten sind aufgedeckt.':answered+' von 4 Teams haben geantwortet.';
    action.disabled=!game.revealed&&answered!==4;
    action.textContent=finished?'Neues Spiel':game.revealed?'Nächste Runde':'Runde auflösen';
    byId('rescue-feedback').hidden=!game.revealed;
    if(game.revealed){
      const names=game.winners.map(i=>'Team '+(i+1)).join(' und ');
      byId('rescue-outcome').textContent=finished?names+(game.winners.length===1?' gewinnt!':' gewinnen gemeinsam!'):'Richtige Antwort: '+['A','B','C'][game.correct]+'.';
      byId('rescue-outcome').style.color='var(--rs-green)';byId('rescue-explanation').textContent=state.current.why;
    }
  }
  function renderFootball(){
    const game=state.football;
    if(footballPlanRef!==game.plan){syncFootballPlan();footballPlanRef=game.plan;}
    footballView.render(game);renderQuestion(game.solutionVisible);
    renderFootballPlan();
    byId('rescue-round').textContent=setupOpen?'Spiel vorbereiten':game.taskLabel+' · Aufgabe '+game.taskNumber;
    byId('rescue-level').textContent='Stufe '+state.level+' · '+(state.level<=2?'Niveau A':state.level<=4?'Niveau B':'Niveau C');
    byId('rescue-status').classList.remove('is-error');byId('rescue-status').textContent=game.solutionVisible?'Die Lösung ist eingeblendet.':'Die Lösung bleibt verborgen.';
    action.disabled=false;action.textContent=game.solutionVisible?'Lösung verbergen':'Lösung anzeigen';action.setAttribute('aria-expanded',String(game.solutionVisible));
    byId('rescue-feedback').hidden=!game.solutionVisible;
    if(game.solutionVisible){byId('rescue-outcome').textContent='Lösung: '+state.current.answers[state.current.correct];byId('rescue-outcome').style.color='var(--rs-green)';byId('rescue-explanation').textContent=state.current.why;}
  }
  function syncFootballPlan(){
    const plan=state.football.plan;
    byId('football-topic').value=plan.topic;byId('football-custom-topic').value=plan.customTopic;byId('football-notes').value=plan.notes;
    refreshFootballLevels();
  }
  function refreshFootballLevels(){
    const plan=state.football.plan,select=byId('football-level'),labels=topics[plan.topic]?.levels;
    select.replaceChildren();
    for(let level=1;level<=5;level++){const option=document.createElement('option');option.value=level;option.textContent='Stufe '+level+' · '+(labels?.[level-1]||(['A','A','B','B','C'][level-1]+'-Niveau'));select.appendChild(option);}
    select.value=String(plan.level);
  }
  function footballNeedsAI(){
    const p=state.football.plan,bank=topics[p.topic]?.bank;
    return p.topic==='custom'||Boolean(p.notes.trim())||Boolean(bank&&!bank.questions.some(q=>q.level===p.level));
  }
  function renderFootballPlan(){
    const needsAI=footballNeedsAI();byId('football-custom-field').hidden=state.football.plan.topic!=='custom';
    byId('football-login').hidden=!needsAI||!aiAccess.required||aiAccess.authenticated||!aiAccess.configured;
    byId('football-next').disabled=needsAI&&aiAccess.required&&!aiAccess.authenticated;
    byId('football-plan-note').textContent=needsAI&&aiAccess.required&&!aiAccess.authenticated?
      aiAccess.configured?'Schalte die KI mit deinem Zugangscode frei, um diese Vorgaben umzusetzen.':'Der KI-Zugang ist noch nicht eingerichtet.':
      'Freie Vorgaben werden mit KI umgesetzt. Die Lösung bleibt bis zu deinem Klick verborgen.';
  }
  function useFootballQuestion(question,topic,label,level){
    validateQuestion(question);state.usedTerms=[...state.usedTerms,state.current.term].slice(-60);
    state.current=question;state.topic=topics[topic]?topic:'mental';state.level=level;state.index++;
    state.football={...state.football,taskNumber:state.index+1,taskLabel:label,solutionVisible:false};
    preparedQuestions=[];notice='';render();persist();
  }
  async function nextFootballTask(){
    if(busy||pendingReview||state.mode!=='football')return;
    const p=state.football.plan;
    if(p.topic==='custom'&&!p.customTopic.trim()){notice='Trage ein Thema für die nächste Aufgabe ein.';render();byId('football-plan').open=true;byId('football-custom-topic').focus();return;}
    const label=p.topic==='custom'?p.customTopic.trim():topics[p.topic].label;
    if(footballNeedsAI()){
      if(aiAccess.required&&!aiAccess.authenticated){notice='Schalte die KI im Bereich „Vorgaben für die nächste Aufgabe“ frei.';render();byId('football-plan').open=true;return;}
      return requestAI({topic:label,notes:p.notes.trim()||topics[p.topic]?.bank?.notes||'',level:p.level,count:1,exclude:state.usedTerms},
        {mode:'football-next',targetTopic:p.topic,nextLevel:p.level,wasSetupOpen:false});
    }
    try{useFootballQuestion(generateTopicQuestion(p.topic,p.level,[...state.usedTerms,state.current.term]),p.topic,label,p.level);}
    catch(error){notice=error.message;render();}
  }
  root.querySelectorAll('[data-rescue-scenario]').forEach(button=>button.addEventListener('click',()=>{
    state.scenario=button.dataset.rescueScenario;
    render();
    persist();
  }));
  sizeInput.addEventListener('input',()=>{
    if (state.history.length) return;
    state.count=sizeInput.value===''?null:Number(sizeInput.value);
    state.votes=[0,0,0];
    render();
    persist();
  });
  totalInput.addEventListener('input',()=>{
    if (state.history.length) return;
    state.total=totalInput.value===''?null:Number(totalInput.value);
    if(Number.isInteger(state.total)&&state.total>=1&&state.total<=30) state.energy=Math.min(4,state.total);
    render();
    persist();
  });
  countInputs.forEach((input,index)=>input.addEventListener('input',()=>{
    if (state.phase!=='vote') return;
    state.votes[index]=input.value===''?null:Number(input.value);
    render();
    persist();
  }));
  byId('rescue-easier').addEventListener('click',()=>changeLevel(-1));
  byId('rescue-harder').addEventListener('click',()=>changeLevel(1));
  byId('rescue-reset').addEventListener('click',reset);
  action.addEventListener('click',()=>{
    if(busy||pendingReview)return;
    if(state.mode==='football'){state.football.solutionVisible=!state.football.solutionVisible;render();persist();return;}
    if(state.mode==='codebreaker'){
      if(state.phase==='opened')return reset();
      if(state.phase==='result'){
        state.index++;state.phase='vote';replaceQuestion();
      }else{
        if(!state.codebreaker.answers.every(v=>Number.isInteger(v)))return;
        state.codebreaker=resolveCodebreaker(state.codebreaker,state.current.correct);
        state.history.push({round:state.index+1,correct:state.current.correct,answers:[...state.codebreaker.answers],level:state.current.level});
        state.phase=state.codebreaker.winners.length?'opened':'result';
      }
      render();persist();return;
    }
    if (state.phase==='rescued'||state.phase==='failed') return reset();
    if (state.phase==='result') {
      state.index++;
      state.phase='vote';
      replaceQuestion();
    } else if (ready()) {
      const correct=state.votes[state.current.correct];
      const pass=correct*5>=state.count*4;
      const before=state.energy;
      state.energy=Math.max(0,Math.min(5,state.energy+(pass?1:-1)));
      state.history.push({round:state.index+1,correct,total:state.count,pass,
        delta:state.energy-before,energy:state.energy,level:state.current.level});
      state.phase=state.energy===0?'failed':state.index===state.total-1?'rescued':'result';
    } else return;
    render();
    persist();
  });


  function draftFromGame(){
    const p=state.mode==='football'?state.football.plan:null;
    return {mode:state.mode??'rescue',topic:p?.topic||state.topic||'brackets',customTopic:p?.customTopic||'',notes:p?.notes||'',
      blueSize:state.football.teams[0].size,redSize:state.football.teams[1].size,
      level:state.level<=2?1:state.level<=4?3:5,total:state.total||8,count:state.count||20,scenario:state.scenario};
  }
  function syncSetupFields(){
    if(!draft)draft=draftFromGame();
    byId('game-mode').value=draft.mode??'rescue';
    byId('rescue-topic').value=draft.topic;
    byId('rescue-custom-topic').value=draft.customTopic||'';
    byId('rescue-custom-notes').value=draft.notes||'';
    byId('rescue-start-level').value=String(draft.level);
    byId('rescue-setup-scenario').value=draft.scenario;
    byId('rescue-setup-total').value=draft.total??'';
    byId('rescue-setup-size').value=draft.count??'';
    byId('football-blue-size').value=draft.blueSize??10;byId('football-red-size').value=draft.redSize??10;
  }
  function refreshTopics(){
    for(const select of [byId('rescue-topic'),byId('football-topic')]){
    const previous=select.value;
    select.replaceChildren();
    for(const [id,topic] of Object.entries(topics)){
      const option=document.createElement('option');option.value=id;option.textContent=topic.label;
      select.appendChild(option);
    }
    const custom=document.createElement('option');custom.value='custom';custom.textContent='Eigenes Thema mit KI …';select.appendChild(custom);
    select.value=previous||'brackets';
    }
  }
  function renderSetup(){
    const safe=draft?.mode==='codebreaker';
    const football=draft?.mode==='football';
    byId('game-title').textContent=setupOpen?'Save my Math':state.mode==='codebreaker'?'Codeknacker':state.mode==='football'?'Mathe-Fußball':'Rettungseinsatz';
    document.title=byId('game-title').textContent+' · Mathematik im AV';
    for(const kind of ['scenario','total','size'])byId('rescue-'+kind+'-field').hidden=safe||football;
    for(const kind of ['scenario','total','size'])byId('rescue-setup-'+kind).disabled=safe||football;
    byId('codebreaker-setup-rule').hidden=!safe;
    for(const team of ['blue','red']){byId('football-'+team+'-field').hidden=!football;byId('football-'+team+'-size').disabled=!football;}
    byId('rescue-storage-note').hidden=!cloudMode;
    byId('rescue-setup').hidden=!setupOpen||Boolean(pendingReview);
    byId('rescue-play').hidden=setupOpen||Boolean(pendingReview);
    byId('rescue-review').hidden=!pendingReview;
    byId('rescue-open-setup').hidden=setupOpen||Boolean(pendingReview);
    if(!draft)return;
    const custom=draft.topic==='custom';
    const bank=topics[draft.topic]?.bank;
    const missingLevel=Boolean(bank&&!bank.questions.some(q=>q.level===draft.level));
    const needsAI=custom||missingLevel;
    const showAccess=aiAccess.required&&(custom||Boolean(topics[draft.topic]?.bank));
    byId('rescue-ki-access').hidden=!showAccess;
    byId('rescue-ki-login').hidden=aiAccess.authenticated||!aiAccess.configured;
    byId('rescue-lock').hidden=!aiAccess.authenticated;
    byId('rescue-ki-access-status').textContent=!aiAccess.configured?
      'Der KI-Zugang muss in Vercel mit APP_PASSWORD eingerichtet werden.':
      aiAccess.authenticated?'Die KI ist freigeschaltet.':
      'Schalte die kostenpflichtige KI mit deinem Zugangscode frei.';
    byId('rescue-generate').disabled=needsAI&&aiAccess.required&&!aiAccess.authenticated;
    byId('rescue-custom-fields').hidden=!custom;
    byId('rescue-custom-topic').required=custom;
    byId('rescue-generate').textContent=busy?'Aufgaben werden erstellt …':custom?'KI-Aufgaben erstellen':missingLevel?'KI-Aufgaben für dieses Niveau erstellen':'Aufgaben erstellen und starten';
    const note=byId('rescue-setup-note');
    note.classList.toggle('is-error',Boolean(setupError));note.setAttribute('role',setupError?'alert':'status');
    note.textContent=setupError||setupMessage||(needsAI?
      aiConfigured?'Die KI erstellt Aufgaben zu deinem Thema. Danach kannst du sie prüfen und freigeben.':
      cloudMode?'Die KI ist noch nicht eingerichtet. Hinterlege OPENAI_API_KEY in den Vercel-Einstellungen und veröffentliche die App erneut.':
      'Die KI ist noch nicht eingerichtet. Öffne „KI konfigurieren.cmd“ im Projektordner und starte die App danach neu.':
      football?'Die Lösung blendest du per Klick ein. Im Spiel kannst du Vorgaben für die nächste Aufgabe festlegen.':
      'Du erhältst neue Aufgaben mit je drei Antwortmöglichkeiten. Mit „Leichter“ und „Schwerer“ änderst du das Anforderungsniveau.');
  }
  function openSetup(){
    if(busy||pendingReview)return;
    draft=draftFromGame();setupError='';setupMessage='';notice='';setupOpen=true;
    syncSetupFields();render();persist();byId('rescue-topic').focus();
  }
  async function api(path,options={}){
    let response;
    try{response=await fetch(path,{...options,headers:{'Content-Type':'application/json',...options.headers},signal:AbortSignal.timeout(200000)});}
    catch(_){throw new Error('Der Server ist nicht erreichbar. Prüfe deine Verbindung und versuche es erneut.');}
    let body;try{body=await response.json();}catch(_){throw new Error('Der Server hat keine lesbare Antwort geliefert.');}
    if(!response.ok)throw new Error(body.error||'Die Anfrage ist fehlgeschlagen.');
    return body;
  }
  async function requestAI(request,context){
    if(busy)return;
    busy=true;setupError='';notice='Die KI erstellt und prüft die Aufgaben. Das kann einen Moment dauern.';render();
    try{
      const {bank}=await api('/api/generate',{method:'POST',body:JSON.stringify(request)});
      pendingReview={...context,bank};
      buildReview(bank);notice='';
    }catch(error){notice=error.message;if(setupOpen)setupError=error.message;}
    finally{busy=false;render();}
  }
  function buildReview(bank){
    const football=pendingReview.mode==='football-next'||pendingReview.settings?.mode==='football';
    byId('rescue-review-note').textContent=football?'Prüfe die Aufgabe vor dem Einsatz. Unter „Lösung prüfen“ kannst du die Lösung einblenden.':'Prüfe die Aufgaben vor dem Einsatz. Die Lösungen sind in dieser Vorschau für dich sichtbar.';
    byId('rescue-review-summary').textContent=bank.label+' · '+bank.questions.length+' Aufgaben · Stufe '+bank.questions[0].level;
    const list=byId('rescue-review-list');list.replaceChildren();
    for(const [index,q] of bank.questions.entries()){
      const details=document.createElement('details');details.open=index<2;
      const summary=document.createElement('summary');summary.textContent=q.term;
      const instruction=document.createElement('p');instruction.className='rs-setup-note';instruction.textContent=q.instruction;
      const answers=document.createElement('ol');answers.type='A';
      q.answers.forEach((answer,i)=>{const li=document.createElement('li');li.textContent=answer+(i===q.correct?' · richtig':'');if(i===q.correct)li.className='is-right';answers.appendChild(li);});
      const why=document.createElement('p');why.className='rs-explanation';why.textContent=q.why;
      if(football){
        const solution=document.createElement('details'),title=document.createElement('summary'),answer=document.createElement('p');
        title.textContent='Lösung prüfen';answer.textContent=q.answers[q.correct];solution.append(title,answer,why);details.append(summary,instruction,solution);
      }else details.append(summary,instruction,answers,why);
      list.appendChild(details);
    }
  }
  async function approveReview(){
    if(busy||!pendingReview)return;
    const review=pendingReview;let bank=review.bank;
    if(review.mode==='football-next'){
      try{useFootballQuestion(bank.questions[0],review.targetTopic,bank.label,review.nextLevel);pendingReview=null;setupOpen=false;notice='';persist();}
      catch(error){notice=error.message;}
      render();return;
    }
    if(review.mode==='extend'){
      const previous=topics[review.topicId].bank;
      bank={...previous,questions:[...previous.questions,...bank.questions].filter((q,i,all)=>all.findIndex(v=>v.id===q.id)===i)};
    }
    busy=true;notice='Aufgabensatz wird gespeichert …';render();
    try{
      const saved=await api('/api/banks',{method:'POST',body:JSON.stringify(bank)});
      saveBrowserBank(saved.bank);
      registerCustomBank(saved.bank);refreshTopics();
      if(review.mode==='extend'&&!review.settings){
        state.level=review.nextLevel;
        if(state.phase==='vote')replaceQuestion();
        setupOpen=review.wasSetupOpen;
      }else{
        state=fresh({...review.settings,topic:saved.bank.id});
        preparedQuestions=[];setupOpen=false;
      }
      pendingReview=null;notice='';persist();
    }catch(error){notice=error.message;}
    finally{busy=false;render();resizeScene();}
  }
  function initializeTopicSetup(){
    refreshTopics();draft=draftFromGame();syncSetupFields();
    byId('rescue-open-setup').addEventListener('click',openSetup);
    byId('rescue-unlock').addEventListener('click',async()=>{
      if(busy)return;
      const input=byId('rescue-teacher-password'),password=input.value;input.value='';
      if(!password){setupError='Trage deinen KI-Zugangscode ein.';renderSetup();return;}
      busy=true;setupError='';render();
      try{await api('/api/session',{method:'POST',body:JSON.stringify({password})});aiAccess.authenticated=true;}
      catch(error){setupError=error.message;}
      finally{busy=false;render();}
    });
    byId('rescue-lock').addEventListener('click',async()=>{
      if(busy)return;busy=true;render();
      try{await api('/api/session',{method:'DELETE'});aiAccess.authenticated=false;}
      catch(error){setupError=error.message;}
      finally{busy=false;render();}
    });
    byId('rescue-cancel-setup').addEventListener('click',()=>{
      if(busy)return;setupOpen=false;setupError='';setupMessage='';notice='';render();resizeScene();persist();byId('rescue-open-setup').focus();
    });
    byId('rescue-approve').addEventListener('click',approveReview);
    byId('rescue-discard').addEventListener('click',()=>{
      if(busy||!pendingReview)return;setupOpen=pendingReview.wasSetupOpen;pendingReview=null;notice='';render();resizeScene();
    });
    byId('football-next').addEventListener('click',nextFootballTask);
    for(const [id,key] of [['football-topic','topic'],['football-level','level'],['football-custom-topic','customTopic'],['football-notes','notes']]){
      const field=byId(id);field.addEventListener(field.tagName==='SELECT'?'change':'input',()=>{
        state.football.plan[key]=key==='level'?Number(field.value):field.value;
        if(key==='topic')refreshFootballLevels();renderFootballPlan();persist();
      });
    }
    byId('football-unlock').addEventListener('click',async()=>{
      if(busy)return;const input=byId('football-password'),password=input.value;input.value='';
      if(!password){notice='Trage deinen KI-Zugangscode ein.';render();return;}
      busy=true;render();
      try{await api('/api/session',{method:'POST',body:JSON.stringify({password})});aiAccess.authenticated=true;notice='';}
      catch(error){notice=error.message;}finally{busy=false;render();}
    });
    const controls={
      'game-mode':['mode',String],
      'rescue-topic':['topic',String],'rescue-custom-topic':['customTopic',String],
      'rescue-custom-notes':['notes',String],'rescue-start-level':['level',Number],
      'rescue-setup-scenario':['scenario',String],'rescue-setup-total':['total',Number],
      'rescue-setup-size':['count',Number]
      ,'football-blue-size':['blueSize',Number],'football-red-size':['redSize',Number]
    };
    for(const [id,[key,parse]] of Object.entries(controls)){
      const control=byId(id);
      control.addEventListener(control.tagName==='SELECT'?'change':'input',()=>{
        draft[key]=control.value===''?(parse===Number?null:''):parse(control.value);setupError='';setupMessage='';renderSetup();persist();
      });
    }
    const createTopicGame=async event=>{
      event.preventDefault();if(busy||!byId('rescue-setup').reportValidity())return;
      setupError='';notice='';
      const safe=draft.mode==='codebreaker';
      const football=draft.mode==='football';
      if(!safe&&!football&&(!Number.isInteger(draft.count)||draft.count<1||draft.count>40||!Number.isInteger(draft.total)||draft.total<1||draft.total>30)){
        setupError='Wähle 1 bis 40 SuS und 1 bis 30 Fragen.';renderSetup();return;
      }
      if(football&&![draft.blueSize,draft.redSize].every(n=>Number.isInteger(n)&&n>=1&&n<=40)){setupError='Jedes Team braucht 1 bis 40 Personen.';renderSetup();return;}
      const settings={...draft,...(safe?{count:20,total:12,scenario:'water'}:football?{count:20,total:8,scenario:'water'}:{})};
      if(draft.topic==='custom'){
        return requestAI({topic:draft.customTopic.trim(),notes:draft.notes.trim(),level:draft.level,count:Math.max(8,settings.total)},
          {mode:'new',settings,wasSetupOpen:true});
      }
      const bank=topics[draft.topic]?.bank;
      if(bank&&!bank.questions.some(q=>q.level===draft.level)){
        return requestAI({topic:bank.label,notes:bank.notes||'',level:draft.level,count:Math.max(8,settings.total),exclude:bank.questions.map(q=>q.term).slice(-60)},
          {mode:'extend',topicId:draft.topic,nextLevel:draft.level,settings,wasSetupOpen:true});
      }
      try{
        const next=fresh(settings);
        const sample=[next.current];for(let i=1;i<settings.total;i++)sample.push(generateTopicQuestion(draft.topic,draft.level,sample.map(q=>q.term)));
        preparedQuestions=sample;state=next;setupOpen=false;render();resizeScene();persist();byId('rescue-open-setup').focus();
      }catch(_){setupError='Die Aufgaben konnten nicht erstellt werden. Wähle ein anderes Thema oder Niveau.';renderSetup();}
    };
    byId('rescue-generate').addEventListener('click',createTopicGame);
    byId('rescue-setup').addEventListener('submit',createTopicGame);
    byId('rescue-setup').addEventListener('keydown',event=>{if(event.key==='Enter'&&event.target.tagName==='INPUT'){event.preventDefault();byId(event.target.id==='rescue-teacher-password'?'rescue-unlock':'rescue-generate').click();}});
  }
  async function startApplication(){
    for(const bank of loadBrowserBanks()){try{registerCustomBank(bank);}catch(_){}}
    try{
      const [status,saved]=await Promise.all([api('/api/status'),api('/api/banks')]);aiConfigured=status.aiConfigured;
      cloudMode=status.storageMode==='browser';
      aiAccess={required:Boolean(status.authRequired),authenticated:status.authRequired?Boolean(status.authenticated):true,configured:status.accessConfigured!==false};
      for(const bank of saved.banks){try{registerCustomBank(bank);}catch(_){/* An invalid set does not prevent playing the built-in topics. */}}
    }catch(error){notice=error.message;}
    initializeTopicSetup();
    try{const saved=JSON.parse(localStorage.getItem('av-rescue-game-v1')||'null');if(saved)restore(saved);}catch(_){/* An unreadable old save starts a new game. */}
    render();resizeScene();
  }
  window.addEventListener('pagehide',()=>renderer.destroy(),{once:true});
  startApplication();
