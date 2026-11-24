const close=(a,b)=>Math.abs(a-b)<=1e-10*Math.max(1e-20,Math.abs(a),Math.abs(b));
export const formatNumber=value=>new Intl.NumberFormat('de-DE',{maximumFractionDigits:8}).format(value);
export const roundTo=(value,decimals)=>Number(value.toFixed(decimals));

// Parse a small arithmetic language. Model output is never evaluated as JavaScript.
export function calculate(expression){
  if(typeof expression!=='string'||expression.length>200)throw new Error('Die Rechnung ist zu lang.');
  const compact=expression.toLowerCase().replaceAll('−','-').replaceAll('·','*').replaceAll('×','*')
    .replaceAll('÷','/').replaceAll(',','.').replace(/\s/g,'');
  const tokens=compact.match(/\d+(?:\.\d+)?|sqrt|pi|[()+\-*/^]/g)||[];
  if(tokens.join('')!==compact||!tokens.length||tokens.length>120)throw new Error('Die Rechnung enthält ungültige Zeichen.');
  let index=0,depth=0;
  const finite=value=>{if(!Number.isFinite(value)||Math.abs(value)>1e14)throw new Error('Die Rechnung ist nicht definiert oder zu groß.');return value;};
  function primary(){
    if(++depth>24)throw new Error('Die Rechnung ist zu tief verschachtelt.');
    const token=tokens[index++];let value;
    if(token==='('){value=sum();if(tokens[index++]!==')')throw new Error('Eine Klammer fehlt.');}
    else if(token==='sqrt'){
      if(tokens[index++]!=='(')throw new Error('sqrt benötigt eine Klammer.');
      value=Math.sqrt(sum());if(tokens[index++]!==')')throw new Error('Eine Klammer fehlt.');
    }else if(token==='pi')value=3.14;
    else if(/^\d+(?:\.\d+)?$/.test(token||''))value=Number(token);
    else throw new Error('In der Rechnung fehlt eine Zahl.');
    depth--;return finite(value);
  }
  function power(){let value=primary();if(tokens[index]==='^'){index++;const exponent=unary();if(Math.abs(exponent)>8)throw new Error('Der Exponent ist zu groß.');value=finite(value**exponent);}return value;}
  function unary(){if(tokens[index]==='+'){index++;return unary();}if(tokens[index]==='-'){index++;return -unary();}return power();}
  function product(){let value=unary();while(tokens[index]==='*'||tokens[index]==='/'){const op=tokens[index++],right=unary();if(op==='/'&&right===0)throw new Error('Division durch null.');value=finite(op==='*'?value*right:value/right);}return value;}
  function sum(){let value=product();while(tokens[index]==='+'||tokens[index]==='-'){const op=tokens[index++],right=product();value=finite(op==='+'?value+right:value-right);}return value;}
  const result=sum();if(index!==tokens.length)throw new Error('Die Rechnung wurde nicht vollständig gelesen.');
  return finite(result);
}

export function validateGeneratedQuestion(q){
  if(!q||typeof q.id!=='string'||q.id.length>60||typeof q.term!=='string'||!q.term.trim()||q.term.length>260||
     !Number.isInteger(q.level)||q.level<1||q.level>5||typeof q.instruction!=='string'||q.instruction.length>180||
     typeof q.why!=='string'||q.why.length>500||typeof q.calculation!=='string'||
     typeof q.unit!=='string'||q.unit.length>24||!Number.isInteger(q.decimals)||q.decimals<0||q.decimals>8||
     !Array.isArray(q.answers)||q.answers.length!==3||!Array.isArray(q.values)||q.values.length!==3||
     !q.values.every(Number.isFinite)||!Number.isInteger(q.correct)||q.correct<0||q.correct>2)throw new Error('Der Aufgabensatz ist unvollständig.');
  const result=roundTo(calculate(q.calculation),q.decimals);
  if(q.values.filter(v=>close(v,result)).length!==1||!close(q.values[q.correct],result)||
     q.values.some((v,i)=>q.values.some((w,j)=>i!==j&&close(v,w))))throw new Error('Die Antworten sind nicht eindeutig.');
  if(!q.answers.every((text,i)=>text===formatNumber(q.values[i])+(q.unit?' '+q.unit:'')))throw new Error('Der Antworttext stimmt nicht mit dem Ergebnis überein.');
  return q;
}

export function materializeQuestion(raw,level,id,random=Math.random){
  if(!raw||typeof raw.prompt!=='string'||!raw.prompt.trim()||raw.prompt.length>260||
     typeof raw.instruction!=='string'||raw.instruction.length>90||typeof raw.unit!=='string'||
     !/^[\p{L}\p{N}²³%°€$ /·^\-]{0,24}$/u.test(raw.unit)||
     !Number.isInteger(raw.decimals)||raw.decimals<0||raw.decimals>8||
     !Array.isArray(raw.distractors)||raw.distractors.length!==2||
     !raw.distractors.every(v=>Number.isFinite(v)&&Math.abs(v)<=1e14))throw new Error('Die KI-Aufgabe hat ein ungültiges Format.');
  const result=roundTo(calculate(raw.calculation),raw.decimals);
  const values=[result,...raw.distractors.map(v=>roundTo(v,raw.decimals))];
  const options=values.map((value,i)=>({value,correct:i===0}));
  for(let i=options.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[options[i],options[j]]=[options[j],options[i]];}
  const instruction=(raw.instruction||'Berechne die gesuchte Größe.')+
    (raw.decimals?' Runde auf '+raw.decimals+(raw.decimals===1?' Nachkommastelle.':' Nachkommastellen.'):'');
  const calculation=raw.calculation.replaceAll('*',' · ').replaceAll('/',' : ').replaceAll('pi','3,14');
  return validateGeneratedQuestion({id,kind:'ai-numeric',term:raw.prompt.trim(),instruction,level,
    calculation:raw.calculation,unit:raw.unit,decimals:raw.decimals,
    values:options.map(o=>o.value),answers:options.map(o=>formatNumber(o.value)+(raw.unit?' '+raw.unit:'')),
    correct:options.findIndex(o=>o.correct),why:calculation+' = '+formatNumber(result)+(raw.unit?' '+raw.unit:'')+'.'});
}
