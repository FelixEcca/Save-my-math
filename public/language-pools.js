import {languageData} from './language-data.js';
import {languageLevels} from './language-levels.js';

export const subjects={
  math:{label:'Mathematik',format:'numeric'},german:{label:'Deutsch',format:'text'},
  english:{label:'Englisch',format:'text'},other:{label:'Weitere Fächer',format:'text'}
};
const levels=['A · Grundlagen','A · Grundlagen','B · Anwenden','B · Anwenden','C · Vertiefen'];
const rotate=(items,offset)=>items.map((_,i)=>items[(i+offset)%items.length]);
const vocabularyWord=row=>row.prompt.match(/„([^“]+)“/)?.[1];
function shortPrompt(prompt){
  if(prompt.includes('___')){
    prompt=prompt.replace(/^Ergänze den Satz:\s*/,'').replace(/^Ergänze (?:im|die Frage im|die Verneinung im) ([^:]+):\s*/,'($1) ')
      .replace(/^Ergänze die Zukunft mit „will“:\s*/,'').replace(/^Ergänze für „([^“]+)“:\s*/,'„$1“: ')
      .replace(/^Übersetze „([^“]+)“:\s*/,'„$1“: ').replace(/^Welches Wort leitet den Grund ein\?\s*/,'Grund: ');
    if(prompt.startsWith('„')&&prompt.endsWith('“'))prompt=prompt.slice(1,-1);
    return prompt;
  }
  const word=prompt.match(/^Welche Wortart hat „([^“]+)“ in „([^“]+)“\?$/);
  if(word)return '„'+word[2]+'“\nWortart von „'+word[1]+'“: ___';
  const tense=prompt.match(/^Welche grammatische Zeitform steht in „([^“]+)“\?$/);
  if(tense)return '„'+tense[1]+'“\nZeitform: ___';
  const past=prompt.match(/^Welche Form ist das simple past von „([^“]+)“\?$/);
  if(past)return 'Simple past: '+past[1]+' → ___';
  const number=prompt.match(/^Welches englische Zahlwort bedeutet (.+)\?$/);
  if(number)return number[1]+' → ___ (Englisch)';
  const time=prompt.match(/^Welcher Ausdruck bezeichnet (.+)\?$/);
  if(time)return time[1]+' → ___ (Englisch)';
  if(prompt.startsWith('Was passt?'))return prompt;
  return 'Was passt?\n'+prompt;
}
function questionsFor(data,level,maxAnswers){
  const stage=level<=2?1:level<=4?3:5;
  const authored=languageLevels[data.id]?.[stage];
  return (authored??data.rows).map((row,index)=>{
    let term=row.prompt,answers=[...row.answers],why=row.why;
    if(!authored){
      if(stage===3&&data.format==='vocabulary'){
        term='„'+row.answers[0]+'“ heißt auf Englisch: ___.';
        answers=[vocabularyWord(row),vocabularyWord(data.rows[(index+5)%15]),vocabularyWord(data.rows[(index+9)%15])];
      }
    }
    if(data.format==='vocabulary'&&stage===1)term='„'+vocabularyWord(row)+'“ heißt auf Deutsch: ___.';
    if(['de-komma-nebensatz','de-komma-aufzaehlung','de-woertliche-rede'].includes(data.id)){
      term=answers[0].replace(/[,„“:]/g,'').replace(/\s+/g,' ').trim();
      term='Was passt?\n'+term;
    }
    term=shortPrompt(term);
    term=term.replace(/^Was passt\?\nWas passt\?\n/,'Was passt?\n');
    answers=answers.slice(0,maxAnswers);
    const offset=(index+stage)%answers.length;
    answers=rotate(answers,offset);
    return {id:data.id+'-'+level+'-'+(index+1),term,answers,correct:(answers.length-offset)%answers.length,level,
      instruction:'',why};
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
