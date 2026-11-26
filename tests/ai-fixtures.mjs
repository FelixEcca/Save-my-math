export function reviewBody(body,valid=true,issues=[]){
  const questions=JSON.parse(body.input).questions;
  return {results:questions.map((_,index)=>({index:index+1,valid,reason:valid?'':issues.join(' ')}))};
}
