import { validateGeneratedQuestion } from './math.js';
import {languageBanks,bankSubject} from './language-pools.js';
import {extraMathTopics,generateExtraMath} from './more-math.js';
  // QUESTION_ENGINE_START
  const bracketLevels = ['Zahlenklammern', 'Eine Variable', 'Terme zusammenfassen', 'Mehrere Klammern', 'Zwei Variablen'];
  const variableNames = ['x', 'a', 'b'];
  const vector = (x = 0, a = 0, b = 0, n = 0) => [x, a, b, n];
  const add = (a, b) => a.map((value, i) => value + b[i]);
  const negate = values => values.map(value => -value);
  const vectorKey = values => values.join(',');
  const equalVectors = (a, b) => vectorKey(a) === vectorKey(b);

  function renderTerms(terms) {
    const pieces = terms.filter(term => term.coefficient !== 0).map((term, index) => {
      const amount = Math.abs(term.coefficient);
      const body = term.variable ? (amount === 1 ? '' : amount) + term.variable : String(amount);
      if (index === 0) return (term.coefficient < 0 ? '−' : '') + body;
      return (term.coefficient < 0 ? ' − ' : ' + ') + body;
    });
    return pieces.join('') || '0';
  }

  function renderVector(values) {
    const terms = variableNames.map((variable, index) => ({variable, coefficient: values[index]}));
    terms.push({variable: '', coefficient: values[3]});
    return renderTerms(terms);
  }

  function parseLinear(expression) {
    if (typeof expression !== 'string' || expression.length > 180) throw new Error('Ungültiger Term.');
    const compact = expression.replaceAll('−', '-').replace(/\s/g, '');
    const tokens = compact.match(/\d+[xab]|[xab]|\d+|[()+-]/g) || [];
    if (tokens.join('') !== compact || tokens.length === 0) throw new Error('Ungültige Zeichen im Term.');
    let position = 0;
    function atom() {
      const token = tokens[position++];
      if (token === '+' || token === '-') {
        const inner = atom();
        return token === '-' ? inner.map(term => ({...term, coefficient: -term.coefficient})) : inner;
      }
      if (token === '(') {
        const inner = expressionTerms();
        if (tokens[position++] !== ')') throw new Error('Klammer fehlt.');
        return inner;
      }
      if (!token || token === ')') throw new Error('Termteil fehlt.');
      const match = token.match(/^(\d*)([xab])$/);
      if (match) return [{variable: match[2], coefficient: match[1] ? Number(match[1]) : 1}];
      if (/^\d+$/.test(token)) return [{variable: '', coefficient: Number(token)}];
      throw new Error('Termteil ungültig.');
    }
    function expressionTerms() {
      let terms = atom();
      while (tokens[position] === '+' || tokens[position] === '-') {
        const operator = tokens[position++];
        const next = atom();
        terms = terms.concat(operator === '-' ? next.map(term => ({...term, coefficient: -term.coefficient})) : next);
      }
      return terms;
    }
    const terms = expressionTerms();
    if (position !== tokens.length) throw new Error('Term nicht vollständig gelesen.');
    const coefficients = vector();
    for (const term of terms) {
      const index = term.variable ? variableNames.indexOf(term.variable) : 3;
      coefficients[index] += term.coefficient;
    }
    if (!coefficients.every(Number.isSafeInteger)) throw new Error('Zahl zu groß.');
    return {coefficients, terms};
  }

  function validateAlgebraQuestion(question) {
    if (!question || typeof question.term !== 'string' || !Array.isArray(question.answers) ||
        ![2,3].includes(question.answers.length) || !Number.isInteger(question.correct) ||
        question.correct < 0 || question.correct >= question.answers.length || !Number.isInteger(question.level) ||
        question.level < 1 || question.level > 5) throw new Error('Frage unvollständig.');
    const source = parseLinear(question.term).coefficients;
    const options = question.answers.map(answer => parseLinear(answer).coefficients);
    if (new Set(options.map(vectorKey)).size !== question.answers.length) throw new Error('Antworten müssen verschieden sein.');
    if (options.filter(option => equalVectors(option, source)).length !== 1 ||
        !equalVectors(options[question.correct], source)) throw new Error('Lösung passt nicht zum Term.');
    return question;
  }

  function buildQuestion(term, alternatives, level, random) {
    const parsed = parseLinear(term);
    const correct = parsed.coefficients;
    const candidates = [];
    const seen = new Set([vectorKey(correct)]);
    for (const option of alternatives.concat([
      add(correct, vector(0, 0, 0, 2)), add(correct, vector(0, 0, 0, -2)),
      add(correct, vector(1)), negate(correct)
    ])) {
      const key = vectorKey(option);
      if (!seen.has(key)) {
        seen.add(key);
        candidates.push(option);
      }
      if (candidates.length === 2) break;
    }
    const options = [correct, ...candidates].map(values => ({values, text: renderVector(values)}));
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    const expanded = renderTerms(parsed.terms);
    const answer = renderVector(correct);
    const calculation = [term, expanded, answer].filter((value, index, list) => index === 0 || value !== list[index - 1]).join(' = ');
    const why = calculation + '. ' + (term.includes('− (')
      ? 'Vor einer Minusklammer wechseln alle Vorzeichen in der Klammer.'
      : 'Bei einer Plusklammer bleiben die Vorzeichen gleich.');
    return validateAlgebraQuestion({term, answers: options.map(option => option.text),
      correct: options.findIndex(option => equalVectors(option.values, correct)), why, level});
  }

  function generateBracketQuestion(level, previousTerms = [], random = Math.random) {
    const integer = (minimum, maximum) => minimum + Math.floor(random() * (maximum - minimum + 1));
    const sign = () => random() < .5 ? ' + ' : ' − ';
    let question;
    for (let attempt = 0; attempt < 120; attempt++) {
      let term;
      let alternatives;
      const r = integer(2, 9);
      const s = integer(2, 9);
      if (level === 1) {
        const n = integer(24, 48);
        const b = integer(8, 14);
        const c = integer(2, 7);
        const outside = sign();
        const inside = sign();
        term = n + outside + '(' + b + inside + c + ')';
        const source = parseLinear(term).coefficients;
        alternatives = [vector(0, 0, 0, n - b - c), vector(0, 0, 0, n + b + c),
          vector(0, 0, 0, n - b + c), vector(0, 0, 0, n + b - c), add(source, vector(0, 0, 0, 4))];
      } else if (level === 2) {
        const n = integer(9, 24);
        const outside = sign();
        const inside = sign();
        term = n + outside + '(x' + inside + r + ')';
        const answer = parseLinear(term).coefficients;
        alternatives = [vector(answer[0], 0, 0, n - r), vector(answer[0], 0, 0, n + r),
          vector(-answer[0], 0, 0, answer[3])];
      } else if (level === 3) {
        const p = integer(5, 12);
        const q = integer(2, p - 1);
        term = p + 'x' + sign() + '(' + q + 'x' + sign() + r + ')';
        const answer = parseLinear(term).coefficients;
        alternatives = [vector(p + q, 0, 0, answer[3]), vector(p - q, 0, 0, answer[3]),
          vector(answer[0], 0, 0, -answer[3])];
      } else if (level === 4) {
        const p = integer(6, 12);
        const q = integer(2, 5);
        const k = integer(1, 4);
        term = p + 'x − (' + q + 'x' + sign() + r + ') + (' + k + 'x' + sign() + s + ')';
        const answer = parseLinear(term).coefficients;
        alternatives = [vector(p + q + k, 0, 0, answer[3]), vector(answer[0], 0, 0, -answer[3]),
          vector(p - q - k, 0, 0, answer[3])];
      } else {
        const p = integer(6, 12);
        const q = integer(2, 5);
        const k = integer(1, 4);
        const b = integer(2, 6);
        term = p + 'a − (' + q + 'a' + sign() + b + 'b) + (' + k + 'a' + sign() + s + 'b)';
        const answer = parseLinear(term).coefficients;
        alternatives = [vector(0, p + q + k, answer[2]), vector(0, answer[1], -answer[2]),
          vector(0, p - q - k, answer[2])];
      }
      question = buildQuestion(term, alternatives, level, random);
      if (!previousTerms.includes(term)) return question;
    }
    // This is only reached after an unusually long sequence of difficulty changes.
    const base = 100 + previousTerms.length;
    return buildQuestion(base + ' − (x − 3)', [vector(-1,0,0,base-3),vector(1,0,0,base+3)],level,random);
  }
  // QUESTION_ENGINE_END

  // TOPIC_ENGINE_START
  // Custom topics are authored in the chat and embedded here, never executed as code.
  const customTopicBanks = languageBanks;
  const topics = {
    brackets:{label:'Plusklammer und Minusklammer',levels:bracketLevels,instruction:'Vereinfache den Term.'},
    terms:{label:'Variablen und Terme',levels:['Gleiche Variablen','Mit Zahlen','Vorzeichen','Zwei Variablen','Mehrere Termteile'],instruction:'Fasse den Term zusammen.'},
    mental:{label:'Kopfrechnen',levels:['Grundrechenarten','Zehner und Hunderter','Geschickt multiplizieren','Kommazahlen','Mehrere Rechenschritte'],instruction:'Berechne das Ergebnis.'},
    lengths:{label:'Längen umrechnen',levels:['Benachbarte Einheiten','Zur größeren Einheit','Mehrere Schritte','Kleine und große Zahlen','Von mm bis km'],instruction:'Rechne in die gesuchte Einheit um.'},
    areaUnits:{label:'Flächenmaße umrechnen',levels:['Benachbarte Einheiten','Zur größeren Einheit','Kommazahlen','Mehrere Schritte','Von mm² bis km²'],instruction:'Rechne in die gesuchte Einheit um.'},
    areas:{label:'Flächeninhalte',levels:['Rechteck und Quadrat','Parallelogramm und Dreieck','Trapez und Kreis','Fehlende Seiten','Zusammengesetzte Flächen'],instruction:'Berechne die gesuchte Größe.'},
    perimeter:{label:'Umfang und Kreisumfang',levels:['Rechteck und Quadrat','Mit Kommazahlen','Kreisumfang','Fehlende Seiten','Kreisteile'],instruction:'Berechne die gesuchte Größe.'},
    percent:{label:'Prozentrechnen',levels:['10 %, 25 % und 50 %','Prozentwert','Rabatt','Grundwert','Prozentsatz'],instruction:'Berechne die gesuchte Größe.'},
    fractions:{label:'Brüche',levels:['Anteile','Gleicher Nenner','Verschiedene Nenner','Brüche multiplizieren','Brüche und ganze Zahlen'],instruction:'Berechne das Ergebnis.'}
  };
  for(const topic of Object.values(topics)){topic.subject='math';topic.builtin=true;}
  Object.assign(topics,extraMathTopics);
  for(const bank of customTopicBanks) {
    if(bank&&/^[a-z][a-z0-9-]{0,40}$/.test(bank.id)&&typeof bank.label==='string'&&
       Array.isArray(bank.questions)&&bank.questions.length) {
      topics[bank.id]={label:bank.label,levels:bank.levels||['Einstieg','Grundlagen','Anwenden','Vertiefen','Herausforderung'],
        instruction:bank.instruction||'Wähle die richtige Antwort.',subject:bank.subject,builtin:true,availableLevels:bank.availableLevels,curriculum:bank.curriculum,bank};
    }
  }
  function registerCustomBank(bank) {
    if(!bank || (bank.subject!==undefined&&!['math','german','english','other'].includes(bank.subject))|| !/^ai-[a-f0-9-]{36}$/.test(bank.id) || typeof bank.label!=='string' ||
       !bank.label.trim() || bank.label.length>120 || !Array.isArray(bank.levels) || bank.levels.length!==5 ||
       !bank.levels.every(v=>typeof v==='string'&&v.length<80) || !Array.isArray(bank.questions) ||
       bank.questions.length<1 || bank.questions.length>300)throw new Error('Ungültiger Aufgabensatz.');
    const seen=new Set();
    for(const question of bank.questions){
      validateGeneratedQuestion(question);
      if(seen.has(question.id))throw new Error('Doppelte Aufgabenkennung.');
      seen.add(question.id);
    }
    topics[bank.id]={label:bank.label,levels:bank.levels,instruction:'Wähle die richtige Antwort.',subject:bankSubject(bank),bank};
    return bank;
  }
  const rounded=value=>Number(value.toPrecision(14));
  const numberText=value=>new Intl.NumberFormat('de-DE',{maximumFractionDigits:14}).format(rounded(value));
  const sameNumber=(a,b)=>Math.abs(a-b)<=1e-12*Math.max(1e-20,Math.abs(a),Math.abs(b));
  const numericRules={
    add:([a,b])=>a+b, sub:([a,b])=>a-b, mul:([a,b])=>a*b, div:([a,b])=>a/b,
    sumProduct:([a,b,c])=>a+b*c, convert:([a,f])=>a*f,
    rectangle:([a,b])=>a*b, square:([a])=>a*a, triangle:([a,h])=>a*h/2,
    parallelogram:([a,h])=>a*h, trapezoid:([a,c,h])=>(a+c)*h/2,
    circle:([r])=>3.14*r*r, perimeterRect:([a,b])=>2*(a+b), perimeterSquare:([a])=>4*a,
    circumference:([r])=>2*3.14*r, semiPerimeter:([r])=>3.14*r+2*r,
    quarterPerimeter:([r])=>3.14*r/2+2*r,
    cutTriangle:([a,b,g,h])=>a*b-g*h/2,
    addHalfCircle:([a,b,r])=>a*b+3.14*r*r/2,
    percentValue:([g,p])=>g*p/100, discount:([g,p])=>g*(1-p/100),
    percentBase:([w,p])=>w*100/p, percentRate:([w,g])=>w/g*100,
    fractionAdd:([a,b,c,d])=>a/b+c/d, fractionMul:([a,b,c,d])=>a/b*c/d
  };
  function checkNumeric(check) {
    if(!check||!numericRules[check.op]||!Array.isArray(check.args)||check.args.length>4||
       !check.args.every(v=>Number.isFinite(v)&&Math.abs(v)<=1e15))throw new Error('Rechnung fehlt.');
    const value=rounded(numericRules[check.op](check.args));
    if(!Number.isFinite(value))throw new Error('Rechnung ist nicht definiert.');
    return value;
  }
  function shuffle(items,random) {
    for(let i=items.length-1;i>0;i--){
      const j=Math.floor(random()*(i+1));
      [items[i],items[j]]=[items[j],items[i]];
    }
    return items;
  }
  function numericQuestion(term,op,args,distractors,unit,why,level,topic,random) {
    const check={op,args};
    const answer=checkNumeric(check);
    const wrong=[];
    const candidates=[...distractors,answer*2,answer/2,answer+1,answer-1,answer+10];
    for(const value of candidates){
      if(Number.isFinite(value)&&!sameNumber(value,answer)&&!wrong.some(w=>sameNumber(w,value)))wrong.push(rounded(value));
      if(wrong.length===2)break;
    }
    if(wrong.length!==2)throw new Error('Zu wenige verschiedene Antworten.');
    const values=shuffle([answer,...wrong],random);
    return validateQuestion({kind:'numeric',topic,term,level,check,unit,
      answers:values.map(v=>numberText(v)+(unit?' '+unit:'')),
      values,correct:values.findIndex(v=>sameNumber(v,answer)),why});
  }
  function validateQuestion(question) {
    if(question?.kind==='choice-subset'){
      const source=question.source,indices=question.answerIndices;
      if(!source||source.kind==='choice-subset')throw new Error('Die Ausgangsaufgabe fehlt.');
      validateQuestion(source);
      if(!Array.isArray(indices)||indices.length!==2||new Set(indices).size!==2||
        !indices.every(i=>Number.isInteger(i)&&i>=0&&i<source.answers.length)||
        !['term','why','level','instruction','topic'].every(k=>question[k]===source[k])||
        JSON.stringify(question.answers)!==JSON.stringify(indices.map(i=>source.answers[i]))||
        question.correct!==indices.indexOf(source.correct)||question.correct<0)
        throw new Error('Die Antwortauswahl passt nicht zur geprüften Aufgabe.');
      return question;
    }
    if(!question||typeof question.term!=='string'||question.term.length>260||
       !Array.isArray(question.answers)||![2,3].includes(question.answers.length)||
       !question.answers.every(a=>typeof a==='string'&&a.length>0&&a.length<=300)||
       new Set(question.answers).size!==question.answers.length||!Number.isInteger(question.correct)||
       question.correct<0||question.correct>=question.answers.length||!Number.isInteger(question.level)||
       question.level<1||question.level>5||typeof question.why!=='string')throw new Error('Frage unvollständig.');
    if(question.kind==='numeric'){
      const answer=checkNumeric(question.check);
      if(!Array.isArray(question.values)||question.values.length!==question.answers.length||
         !question.values.every(Number.isFinite)||question.values.filter(v=>sameNumber(v,answer)).length!==1||
         !sameNumber(question.values[question.correct],answer)||
         !question.answers.every((a,i)=>a===numberText(question.values[i])+(question.unit?' '+question.unit:'')))throw new Error('Lösung passt nicht zur Rechnung.');
    } else if(['ai-numeric','ai-text','calculated'].includes(question.kind)){
      validateGeneratedQuestion(question);
    } else if(question.kind==='authored'){
      const source=topics[question.topic]?.bank?.questions.find(q=>q.id===question.id);
      if(!source||source.term!==question.term||source.level!==question.level||source.correct!==question.correct||source.instruction!==question.instruction||source.why!==question.why||
        JSON.stringify(source.answers)!==JSON.stringify(question.answers))throw new Error('Aufgabe ist nicht im geprüften Themensatz.');
    } else validateAlgebraQuestion(question);
    return question;
  }
  function generateTopicQuestion(topic,level,previousTerms=[],random=Math.random,answerCount=3) {
    if(!topics[topic])topic='brackets';
    answerCount=Math.min(answerCount,topics[topic].bank?.maxAnswers??3);
    if(extraMathTopics[topic])return validateQuestion(generateExtraMath(topic,level,previousTerms,random));
    if(topic==='brackets')return {...generateBracketQuestion(level,previousTerms,random),topic,kind:'algebra'};
    const integer=(min,max)=>min+Math.floor(random()*(max-min+1));
    const pick=items=>items[integer(0,items.length-1)];
    const n=numberText;
    const make=(term,op,args,wrong,unit,why)=>numericQuestion(term,op,args,wrong,unit,why,level,topic,random);
    if(topics[topic].bank){
      const pool=topics[topic].bank.questions.filter(q=>q.level===level&&q.answers.length>=answerCount);
      if(!pool.length)throw new Error('Für dieses Niveau fehlen noch Aufgaben.');
      const unused=pool.filter(q=>!previousTerms.includes(q.term));
      return validateQuestion({...pick(unused.length?unused:pool),kind:'authored',topic});
    }
    let question;
    for(let attempt=0;attempt<120;attempt++){
      if(topic==='terms'){
        const p=integer(3,15),q=integer(1,9),c=integer(2,15),d=integer(1,8);
        let term;
        if(level===1)term=p+'x + '+q+'x';
        else if(level===2)term=p+'x + '+c+' + '+q+'x';
        else if(level===3)term=p+'x − '+q+'x + '+c+' − '+d;
        else if(level===4)term=p+'a + '+q+'b − '+d+'a + '+c+'b';
        else term=q+'a − '+p+'b − '+c+'a + '+d+'b + '+integer(2,12)+' − '+integer(3,18);
        const answer=parseLinear(term).coefficients;
        const shift=level<=3?vector(1):vector(0,1);
        question={...buildQuestion(term,[add(answer,shift),add(answer,negate(shift)),negate(answer)],level,random),
          topic,kind:'algebra',why:term+' = '+renderVector(answer)+'. Addiere oder subtrahiere die Zahlen vor derselben Variablen. Zahlen ohne Variable werden getrennt zusammengefasst.'};
      } else if(topic==='mental'){
        if(level===1){
          const a=integer(2,9),b=integer(2,9);
          if(random()<.5)question=make(a+' · '+b,'mul',[a,b],[a+b,a*b+a],'',a+' · '+b+' = '+a*b+'.');
          else {const x=integer(15,70),y=integer(2,Math.min(29,x));
            question=make(x+' − '+y,'sub',[x,y],[x+y,x-y+10],'',x+' − '+y+' = '+(x-y)+'.');}
        }else if(level===2){
          const a=integer(2,9),b=integer(2,9)*pick([10,100]);
          question=make(a+' · '+b,'mul',[a,b],[a*b/10,a*b*10],'',a+' · '+b+' = '+n(a*(b/(b>=100?100:10)))+' · '+(b>=100?100:10)+' = '+n(a*b)+'.');
        }else if(level===3){
          const a=pick([12,14,15,18,21,25]),b=integer(3,9);
          question=make(a+' · '+b,'mul',[a,b],[a+b,a*b+b],'',a+' · '+b+' = '+Math.floor(a/10)*10+' · '+b+' + '+a%10+' · '+b+' = '+a*b+'.');
        }else if(level===4){
          const a=integer(2,25)/10,b=integer(2,9);
          question=make(n(a)+' · '+b,'mul',[a,b],[a*b*10,a*b/10],'',n(a)+' · '+b+' = '+n(a*b)+'.');
        }else{
          const a=integer(5,30)/2,b=integer(2,9),c=integer(2,18)/2;
          question=make(n(a)+' + '+b+' · '+n(c),'sumProduct',[a,b,c],[(a+b)*c,a+b+c],'',
            'Punkt vor Strich: '+b+' · '+n(c)+' = '+n(b*c)+'. Dann '+n(a)+' + '+n(b*c)+' = '+n(a+b*c)+'.');
        }
      }else if(topic==='lengths'||topic==='areaUnits'){
        const area=topic==='areaUnits';
        const units=area?['mm²','cm²','dm²','m²','a','ha','km²']:['mm','cm','dm','m','km'];
        const exponents=area?[0,2,4,6,8,10,12]:[0,1,2,3,6];
        let from,to,value;
        if(level===1){to=integer(0,area?5:2);from=to+1;value=integer(1,20);}
        else if(level===2){from=integer(0,area?5:2);to=from+1;value=integer(1,50)*(area?100:10);}
        else if(level===3){from=integer(0,area?5:2);to=from+1;value=integer(1,99)/10;}
        else if(level===4){from=integer(0,units.length-3);to=from+2;value=integer(1,60)*pick([.01,10,1000]);}
        else{from=integer(0,units.length-1);to=integer(0,units.length-2);if(to>=from)to++;value=integer(1,99)/pick([1,10,100]);}
        const factor=10**(exponents[from]-exponents[to]);
        const answer=value*factor;
        question=make(n(value)+' '+units[from]+' = ? '+units[to],'convert',[value,factor],
          [value/factor,answer*10,answer/10],units[to],n(value)+' '+units[from]+' '+
          (factor>=1?'· '+n(factor):': '+n(1/factor))+' = '+n(answer)+' '+units[to]+'.');
      }else if(topic==='areas'){
        const a=integer(4,16),b=integer(3,12),h=integer(2,10);
        if(level===1){
          if(random()<.5)question=make('Ein Rechteck ist '+a+' cm lang und '+b+' cm breit. Wie groß ist seine Fläche?',
            'rectangle',[a,b],[2*(a+b),a+b],'cm²','A = '+a+' · '+b+' = '+a*b+' cm².');
          else question=make('Ein Quadrat hat die Seitenlänge '+a+' cm. Wie groß ist seine Fläche?',
            'square',[a],[4*a,2*a],'cm²','A = '+a+' · '+a+' = '+a*a+' cm².');
        }else if(level===2){
          const triangle=random()<.5;
          question=make((triangle?'Ein Dreieck':'Ein Parallelogramm')+' hat die Grundseite '+a+' cm und die zugehörige Höhe '+h+' cm. Wie groß ist seine Fläche?',
            triangle?'triangle':'parallelogram',[a,h],[triangle?a*h:a*h/2,a+h],'cm²',
            'A = '+a+' · '+h+(triangle?' : 2':'')+' = '+n(a*h/(triangle?2:1))+' cm².');
        }else if(level===3){
          if(random()<.5)question=make('Ein Trapez hat parallele Seiten von '+a+' cm und '+b+' cm. Die Höhe ist '+h+' cm. Wie groß ist die Fläche?',
            'trapezoid',[a,b,h],[(a+b)*h,a*b/2],'cm²','A = ('+a+' + '+b+') · '+h+' : 2 = '+n((a+b)*h/2)+' cm².');
          else {const r=integer(2,9);question=make('Ein Kreis hat den Radius '+r+' cm. Wie groß ist seine Fläche? Rechne mit π = 3,14.',
            'circle',[r],[2*3.14*r,3.14*(2*r)**2],'cm²','A = 3,14 · '+r+'² = '+n(3.14*r*r)+' cm².');}
        }else if(level===4){
          question=make('Eine rechteckige Metallplatte hat '+a*b+' cm² Fläche. Sie ist '+a+' cm lang. Wie breit ist sie?',
            'div',[a*b,a],[a*b-a,a*b+a],'cm','b = A : a = '+a*b+' : '+a+' = '+b+' cm.');
        }else{
          const g=integer(2,a-1),hh=integer(2,b-1);
          if(random()<.5)question=make('Aus einer '+a+' cm × '+b+' cm großen Platte wird ein Dreieck herausgeschnitten (g = '+g+' cm, h = '+hh+' cm). Wie viel Fläche bleibt?',
            'cutTriangle',[a,b,g,hh],[a*b-g*hh,a*b+g*hh/2],'cm²',
            'A = '+a+' · '+b+' − '+g+' · '+hh+' : 2 = '+n(a*b-g*hh/2)+' cm².');
          else{const r=integer(2,5);question=make('An ein Rechteck ('+a+' cm × '+2*r+' cm) wird außen ein Halbkreis mit d = '+2*r+' cm angefügt. Wie groß ist die Gesamtfläche? π = 3,14.',
            'addHalfCircle',[a,2*r,r],[a*2*r+3.14*r*r,a*2*r+3.14*r],'cm²',
            'r = '+r+' cm. A = '+a+' · '+2*r+' + 3,14 · '+r+'² : 2 = '+n(a*2*r+3.14*r*r/2)+' cm².');}
        }
      }else if(topic==='perimeter'){
        const a=integer(4,20)/(level===2?10:1),b=integer(2,12)/(level===2?10:1);
        if(level<=2){
          question=make('Ein Rechteck ist '+n(a)+' cm lang und '+n(b)+' cm breit. Wie groß ist sein Umfang?',
            'perimeterRect',[a,b],[a+b,a*b],'cm','U = 2 · ('+n(a)+' + '+n(b)+') = '+n(2*(a+b))+' cm.');
        }else if(level===3){
          const r=integer(2,25),diameter=random()<.5;question=make('Ein Kreis hat den '+(diameter?'Durchmesser '+2*r:'Radius '+r)+' cm. Wie groß ist sein Umfang? π = 3,14.',
            'circumference',[r],[3.14*r,3.14*r*r],'cm',(diameter?'r = '+r+' cm. ':'')+'U = 2 · 3,14 · '+r+' = '+n(2*3.14*r)+' cm.');
        }else if(level===4){
          question=make('Ein rechteckiger Rahmen hat '+2*(a+b)+' cm Umfang. Er ist '+a+' cm lang. Wie breit ist er?',
            'sub',[(a+b),a],[2*(a+b)-a,a+b],'cm','b = U : 2 − a = '+2*(a+b)+' : 2 − '+a+' = '+b+' cm.');
        }else{
          const r=integer(2,25),semi=random()<.5;
          question=make('Ein '+(semi?'Halbkreis':'Viertelkreis')+' hat den Radius '+r+' cm. Wie lang ist sein gesamter Rand einschließlich der geraden Stücke? π = 3,14.',
            semi?'semiPerimeter':'quarterPerimeter',[r],[3.14*r/(semi?1:2),2*3.14*r],'cm',
            'U = '+(semi?'3,14 · '+r:'3,14 · '+r+' : 2')+' + 2 · '+r+' = '+n((semi?3.14*r:3.14*r/2)+2*r)+' cm.');
        }
      }else if(topic==='percent'){
        const g=integer(4,30)*(level===5?20:10),p=level===1?pick([10,25,50]):level===5?pick([5,10,15,20,25,30,40,50]):pick([5,12,15,20,30,40]);
        const w=g*p/100;
        if(level<=2)question=make('Wie viel sind '+p+' % von '+g+' €?','percentValue',[g,p],[g/p,g-w],'€',
          'W = '+g+' · '+p+' : 100 = '+n(w)+' €.');
        else if(level===3)question=make('Eine Jacke kostet '+g+' €. Es gibt '+p+' % Rabatt. Wie viel bezahlst du?',
          'discount',[g,p],[w,g-p],'€','Rabatt: '+n(w)+' €. Neuer Preis: '+g+' − '+n(w)+' = '+n(g-w)+' €.');
        else if(level===4)question=make(n(w)+' € sind '+p+' % des ursprünglichen Preises. Wie hoch war dieser Preis?',
          'percentBase',[w,p],[w*p/100,w*100/(100-p)],'€','G = '+n(w)+' : '+p+' · 100 = '+g+' €.');
        else question=make('Von '+g+' Werkstücken sind '+n(w)+' fehlerhaft. Wie viel Prozent sind das?',
          'percentRate',[w,g],[100-p,w/g],'%', 'p = '+n(w)+' : '+g+' · 100 = '+p+' %.');
      }else if(topic==='fractions'){
        const denominator=pick([2,4,5,8,10]),a=integer(1,denominator-1),c=integer(1,5);
        if(level===1){const whole=denominator*integer(2,12);
          question=make('Wie viel sind '+a+'/'+denominator+' von '+whole+'?','mul',[a/denominator,whole],
            [whole/denominator,whole*a],'',whole+' : '+denominator+' · '+a+' = '+n(whole/denominator*a)+'.');
        }else if(level<=3){
          const d=level===2?denominator:pick([2,4,5,8,10]);
          question=make(a+'/'+denominator+' + '+c+'/'+d+' = ? (als Dezimalzahl)',
            'fractionAdd',[a,denominator,c,d],[(a+c)/(denominator+d),(a+c)/denominator],'',
            a+'/'+denominator+' + '+c+'/'+d+' = '+a*d+'/'+denominator*d+' + '+c*denominator+'/'+denominator*d+' = '+n(a/denominator+c/d)+'.');
        }else if(level===4){
          const d=pick([2,4,5,10]);question=make(a+'/'+denominator+' · '+c+'/'+d+' = ? (als Dezimalzahl)',
            'fractionMul',[a,denominator,c,d],[(a+c)/(denominator+d),a*c/(denominator+d)],'',
            'Zähler mal Zähler, Nenner mal Nenner: '+a*c+'/'+denominator*d+' = '+n(a*c/(denominator*d))+'.');
        }else{const whole=integer(2,9);
          question=make(whole+' − '+a+'/'+denominator+' = ? (als Dezimalzahl)',
            'sub',[whole,a/denominator],[(whole-a)/denominator,whole+a/denominator],'',
            whole+' − '+a+'/'+denominator+' = '+(whole*denominator-a)+'/'+denominator+' = '+n(whole-a/denominator)+'.');}
      }
      validateQuestion(question);
      if(!previousTerms.includes(question.term))return question;
    }
    return question;
  }
  // TOPIC_ENGINE_END
function withAnswerCount(question,count=3,random=Math.random){
  validateQuestion(question);
  if(![2,3].includes(count))throw new Error('Wähle zwei oder drei Antworten.');
  if(question.answers.length===count)return question;
  if(question.kind==='choice-subset')return withAnswerCount(question.source,count,random);
  if(count===3)throw new Error('Für drei Antworten wird ein neuer Aufgabensatz benötigt.');
  const wrong=question.answers.map((_,i)=>i).filter(i=>i!==question.correct);
  const indices=shuffle([question.correct,wrong[Math.floor(random()*wrong.length)]],random);
  return validateQuestion({...question,kind:'choice-subset',source:question,answerIndices:indices,
    answers:indices.map(i=>question.answers[i]),correct:indices.indexOf(question.correct)});
}
export { withAnswerCount, topics, generateTopicQuestion, validateQuestion, parseLinear, registerCustomBank, renderTerms, renderVector };
