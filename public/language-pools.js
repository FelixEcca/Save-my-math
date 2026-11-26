import {languageData} from './language-data.js';
import {languageLevels} from './language-levels.js';

export const subjects={
  math:{label:'Mathematik',format:'numeric'},german:{label:'Deutsch',format:'text'},
  english:{label:'Englisch',format:'text'},other:{label:'Weitere Fächer',format:'text'}
};
const levels=['A · Grundlagen','A · Grundlagen','B · Anwenden','B · Anwenden','C · Vertiefen'];
const rotate=(items,offset)=>items.map((_,i)=>items[(i+offset)%items.length]);
const vocabularyWord=row=>row.prompt.match(/„([^“]+)“/)?.[1];
function completedSentence(row,answer){
  return row.prompt.replace(/^(?:Ergänze|Verneine|Übersetze)[^:]*:\s*/,'').replace('___',answer);
}
function questionsFor(data,level,maxAnswers){
  const stage=level<=2?1:level<=4?3:5;
  const authored=languageLevels[data.id]?.[stage];
  return (authored??data.rows).map((row,index)=>{
    let term=row.prompt,answers=[...row.answers],why=row.why;
    if(!authored){
      if(stage===3&&data.format==='vocabulary'){
        term='Welches englische Wort bedeutet „'+row.answers[0]+'“?';
        answers=[vocabularyWord(row),vocabularyWord(data.rows[(index+5)%15]),vocabularyWord(data.rows[(index+9)%15])];
      }else if(stage===3&&row.prompt.includes('___')){
        term='Welcher Satz passt zur Aufgabe?\n'+row.prompt;
        answers=row.answers.map(answer=>completedSentence(row,answer));
      }
    }
    answers=answers.slice(0,maxAnswers);
    const offset=(index+stage)%answers.length;
    answers=rotate(answers,offset);
    return {id:data.id+'-'+level+'-'+(index+1),term,answers,correct:(answers.length-offset)%answers.length,level,
      instruction:term.includes('___')?'Wähle die passende Ergänzung.':'Wähle die richtige Antwort.',why};
  });
}
export const languageBanks=languageData.map(data=>{
  const overrides=Object.values(languageLevels[data.id]??{}).flat();
  const maxAnswers=Math.min(3,...[...data.rows,...overrides].map(row=>row.answers.length));
  return {id:data.id,label:data.label,subject:data.subject,builtin:true,version:2,maxAnswers,
    curriculum:data.curriculum,availableLevels:[1,3,5],perLevel:15,coreCount:45,levels,
    questions:[1,2,3,4,5].flatMap(level=>questionsFor(data,level,maxAnswers))};
});

export function bankSubject(bank){
  if(subjects[bank?.subject])return bank.subject;
  if(!bank?.questions?.some(q=>q.kind==='ai-text'))return 'math';
  if(/deutsch|dass|kleinschreibung|großschreibung|komma|seid|seit/i.test(bank.label))return 'german';
  if(/englisch|english|simple present|simple past/i.test(bank.label))return 'english';
  return 'other';
}
