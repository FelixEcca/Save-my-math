import {languageData} from './language-data.js';

export const subjects={
  math:{label:'Mathematik',format:'numeric'},german:{label:'Deutsch',format:'text'},
  english:{label:'Englisch',format:'text'},other:{label:'Weitere Fächer',format:'text'}
};
const levels=['A · Erkennen und ergänzen','A · Erkennen und ergänzen','B · Anwenden','B · Anwenden','C · Prüfen und begründen'];
const rotate=(items,offset)=>items.map((_,i)=>items[(i+offset)%items.length]);
const firstSentence=text=>text.split(/(?<=[.!?])\s+/)[0];
function questionsFor(data,level){
  const stage=level<=2?1:level<=4?3:5;
  return data.rows.map((row,index)=>{
    let term=row.prompt,answers=[...row.answers],why=row.why;
    if(data.format==='spelling')term='Welche Schreibung passt im normalen Satz ohne Hervorhebung?\n'+row.prompt;
    if(stage===3){
      if(data.format==='vocabulary'){
        const word=value=>value.prompt.match(/„([^“]+)“/)[1];
        term='Welches englische Wort bedeutet „'+row.answers[0]+'“?';
        answers=[word(row),word(data.rows[(index+5)%15]),word(data.rows[(index+9)%15])];
      }else if(['gap','spelling'].includes(data.format)){
        term='Welche Ergänzung ist richtig begründet?\n'+row.prompt;
        answers=[row.answers[0]+' — '+firstSentence(row.why),row.answers[1]+' — '+data.wrongRules[0],row.answers[0]+' — '+data.wrongRules[1]];
      }else{
        term='Welche Begründung passt?\n'+row.prompt;
        answers=[row.why,...data.wrongRules];
      }
    }else if(stage===5){
      const second=data.rows[(index+7)%15];
      const candidate=(['gap','spelling'].includes(data.format)?'Ergänze beide Sätze.\n':'Welche beiden Antworten passen?\n')+row.prompt+'\n'+second.prompt;
      if(candidate.length<=260){
        term=candidate;
        answers=[row.answers[0]+' / '+second.answers[0],row.answers[1]+' / '+second.answers[0],row.answers[0]+' / '+second.answers[1]];
        why='Erster Teil: '+row.why+' Zweiter Teil: '+second.why;
      }else{
        term='Welche Auswahl ist richtig begründet?\n'+row.prompt;
        answers=[row.answers[0]+' — '+firstSentence(row.why),
          row.answers[1]+' — '+data.wrongRules[0],row.answers[0]+' — '+data.wrongRules[1]];
      }
    }
    const offset=(index+stage)%3;
    answers=rotate(answers,offset);
    return {id:data.id+'-'+level+'-'+(index+1),term,answers,correct:(3-offset)%3,level,
      instruction:data.format==='gap'&&stage===1?'Wähle die passende Ergänzung.':'Wähle die richtige Antwort.',
      why};
  });
}
export const languageBanks=languageData.map(data=>({id:data.id,label:data.label,subject:data.subject,builtin:true,
  curriculum:data.curriculum,availableLevels:[1,3,5],perLevel:15,coreCount:45,levels,
  questions:[1,2,3,4,5].flatMap(level=>questionsFor(data,level))}));

export function bankSubject(bank){
  if(subjects[bank?.subject])return bank.subject;
  if(!bank?.questions?.some(q=>q.kind==='ai-text'))return 'math';
  if(/deutsch|dass|kleinschreibung|großschreibung|komma|seid|seit/i.test(bank.label))return 'german';
  if(/englisch|english|simple present|simple past/i.test(bank.label))return 'english';
  return 'other';
}
