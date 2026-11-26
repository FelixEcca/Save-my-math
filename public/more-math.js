import {materializeQuestion} from './math.js';

const names={
 'rounding':'Zahlen runden','compareNumbers':'Zahlen vergleichen','integers':'Mit negativen Zahlen rechnen',
 'decimalMultiply':'Dezimalzahlen multiplizieren','division':'Dividieren und verteilen','orderOperations':'Punkt vor Strich und Klammern',
 'powers':'Potenzen und Quadratzahlen','equations':'Fehlende Zahlen und lineare Gleichungen','ratios':'Verhältnisse und Mischungen',
 'interest':'Zinsen berechnen','timeUnits':'Zeiten und Zeitspannen','massUnits':'Massen umrechnen','volumeUnits':'Volumenmaße umrechnen',
 'volumeSolids':'Volumen von Würfel und Quader','surfaceSolids':'Oberfläche von Würfel und Quader',
 'triangleArea':'Dreiecksflächen und fehlende Maße','circleArea':'Kreisflächen und Kreisteile','cylinders':'Volumen von Prismen und Zylindern',
 'scale':'Maßstab und Zeichnungen','mean':'Mittelwerte berechnen','dataRead':'Daten aus Angaben auswerten'
};
export const extraMathTopics=Object.fromEntries(Object.entries(names).map(([id,label])=>[id,{label,subject:'math',builtin:true,
  levels:['A · Grundlagen','A bis B · Aufbauen','B · Anwenden','B bis C · Verknüpfen','C · Transfer'],
  instruction:'Berechne die gesuchte Größe.',curriculum:'Mathematik BPE '+(['mean','dataRead'].includes(id)?'5':['ratios'].includes(id)?'4':['surfaceSolids','volumeSolids','triangleArea','circleArea','cylinders','scale','volumeUnits','massUnits','timeUnits'].includes(id)?'2–3':'1')}]));
const n=value=>new Intl.NumberFormat('de-DE',{maximumFractionDigits:8}).format(value);
function raw(prompt,calculation,unit='',why='',decimals=2){
  return {prompt,instruction:'Berechne die gesuchte Größe.',calculation,unit,decimals,why};
}
function task(topic,level,a,b,c){
  const high=level>=4,mid=level>=3;
  if(topic==='rounding'){
    const place=level===1?10:level===2?100:level===3?1:level===4?.1:.01;
    const value=level<=2?a*37+b:Number((a/10+b/100+(high?c/1000:0)).toFixed(3));
    const digits=-Math.log10(place);
    const answer=Number(Math.round(Number(value+'e'+digits))+'e'+(-digits));
    const target=place>=10?(place===10?'Zehner':'Hunderter'):place===1?'ganze Zahlen':place===.1?'eine Nachkommastelle':'zwei Nachkommastellen';
    return raw('Runde '+n(value)+' auf '+target+'.',String(answer),'','Die nächste Stelle entscheidet: 0 bis 4 abrunden, 5 bis 9 aufrunden. Ergebnis: '+n(answer)+'.',place>=1?0:place===.1?1:2);
  }
  if(topic==='compareNumbers'){
    const values=mid?[a/10,-b/10,(a-c)/10]:[a*10+b,a*10+c,b*10+a];
    const largest=Math.max(...values),smallest=Math.min(...values);
    return raw('Gegeben sind '+values.map(n).join('; ')+'. '+(high?'Wie groß ist der Abstand zwischen größter und kleinster Zahl?':'Welche Zahl ist am größten?'),
      high?`(${largest})-(${smallest})`:String(largest),'',high?'Abstand = '+n(largest)+' − ('+n(smallest)+') = '+n(largest-smallest)+'.':'Die größte Zahl liegt auf dem Zahlenstrahl am weitesten rechts.');
  }
  if(topic==='integers'){
    return high?raw('Am Morgen sind es −'+a+' °C. Es wird um '+b+' °C wärmer und später um '+c+' °C kälter. Wie hoch ist die Temperatur am Ende?',`-${a}+${b}-${c}`,'°C','Erwärmung wird addiert, Abkühlung subtrahiert.'):
      raw('Die Temperatur beträgt −'+a+' °C und steigt um '+b+' °C. Wie hoch ist sie danach?',`-${a}+${b}`,'°C','Addiere die Erwärmung zur Ausgangstemperatur.');
  }
  if(topic==='decimalMultiply'){
    const x=level<=2?a/10:a/100,y=mid?b/10:b;
    return high?raw('Ein Stück Kabel ist '+n(x)+' m lang. Du brauchst '+b+' Stücke und '+n(c/10)+' m Reserve. Wie viel Kabel wird insgesamt benötigt?',`${x}*${b}+${c}/10`,'m','Multipliziere die Länge mit der Stückzahl und addiere die Reserve.',3):
      raw(n(x)+' · '+n(y)+' = ?',`${x}*${y}`,'','Multipliziere zunächst ohne Komma und berücksichtige anschließend die Nachkommastellen.',3);
  }
  if(topic==='division'){
    const amount=a*b;
    return high?raw('Ein Auftrag umfasst '+amount+' Teile. '+b+' Personen teilen die Arbeit gleichmäßig. Jede Person fertigt zusätzlich '+c+' Ersatzteile. Wie viele Teile fertigt jede Person?',`${amount}/${b}+${c}`,'Teile','Teile den Auftrag gleichmäßig und addiere die Ersatzteile pro Person.',0):
      raw(amount+' Schrauben werden gleichmäßig auf '+b+' Schachteln verteilt. Wie viele liegen in jeder Schachtel?',`${amount}/${b}`,'Schrauben','Gesamtzahl geteilt durch Anzahl der Schachteln.',0);
  }
  if(topic==='orderOperations'){
    const exp=level<=2?`${a}+${b}*${c}`:high?`(${a}+${b})*${c}-${b}`:`(${a}+${b})*${c}`;
    return raw(exp.replaceAll('*',' · ').replaceAll('-',' − ')+' = ?',exp,'','Rechne zuerst Klammern, dann Multiplikation und Division, zuletzt Addition und Subtraktion.',0);
  }
  if(topic==='powers'){
    const base=a%25+1,exp=level<=2?2:3;
    return high?raw('Ein Würfel hat '+base+' cm Kantenlänge. Sein Volumen beträgt a³. Um wie viel cm³ wächst es, wenn jede Kante um 1 cm verlängert wird?',`(${base}+1)^3-${base}^3`,'cm³','Berechne beide Volumen und bilde ihre Differenz.',0):
      raw('Berechne '+base+(exp===2?'²':'³')+'.',`${base}^${exp}`,'','Die Hochzahl gibt an, wie oft die Basis als Faktor verwendet wird.',0);
  }
  if(topic==='equations'){
    const x=a%18+1,k=b%8+2,d=c%12+1,result=k*x+d;
    if(level<=2)return raw('Ergänze die fehlende Zahl: □ + '+d+' = '+(x+d)+'.',`${x+d}-${d}`,'','Ziehe den bekannten Summanden von der Summe ab.',0);
    return high?raw(k+'x + '+d+' = '+result+'. Wie groß ist x?',`(${result}-${d})/${k}`,'','Ziehe zuerst '+d+' ab. Teile dann durch '+k+'.',0):
      raw(k+' · □ = '+(k*x)+'. Welche Zahl fehlt?',`${k*x}/${k}`,'','Teile das Ergebnis durch den bekannten Faktor.',0);
  }
  if(topic==='ratios'){
    const p=a%5+1,q=b%5+2,s=c%8+2,total=(p+q)*s;
    return mid?raw('Zwei Farben werden im Verhältnis '+p+' : '+q+' gemischt. Insgesamt brauchst du '+total+' Liter. Wie viele Liter der zweiten Farbe benötigst du?',`${total}/(${p}+${q})*${q}`,'l','Ermittle den Wert eines Anteils und multipliziere mit der Anzahl der Anteile der zweiten Farbe.'):
      raw('Für '+p+' Liter Farbe brauchst du '+(p*s)+' Liter Wasser. Wie viel Wasser brauchst du bei gleichem Verhältnis für '+q+' Liter Farbe?',`${p*s}/${p}*${q}`,'l','Berechne zuerst die Wassermenge für einen Liter Farbe.');
  }
  if(topic==='interest'){
    const capital=(a+10)*100,rate=b%5+1,days=c%12+1;
    return high?raw('Ein Guthaben von '+capital+' € wird mit '+rate+' % pro Jahr verzinst. Berechne die Zinsen für '+days+' Monate ohne Zinseszins.',`${capital}*${rate}/100*${days}/12`,'€','Berechne die Jahreszinsen und davon den Anteil für die angegebenen Monate.'):
      raw('Ein Guthaben beträgt '+capital+' €. Der jährliche Zinssatz ist '+rate+' %. Wie hoch sind die Zinsen für ein Jahr ohne Zinseszins?',`${capital}*${rate}/100`,'€','Jahreszinsen = Guthaben · Zinssatz : 100.');
  }
  if(topic==='timeUnits'){
    const hours=a%6+1,mins=b%60;
    return high?raw('Eine Schicht dauert '+hours+' Stunden und '+mins+' Minuten. Davon entfallen '+c+' Minuten auf Pausen. Wie viele Minuten Arbeitszeit bleiben?',`${hours}*60+${mins}-${c}`,'min','Wandle Stunden in Minuten um und ziehe die Pausenzeit ab.',0):
      raw('Wie viele Minuten sind '+hours+' Stunden und '+mins+' Minuten?',`${hours}*60+${mins}`,'min','Eine Stunde hat 60 Minuten.',0);
  }
  if(topic==='massUnits'){
    const value=mid?a+b/10:a,down=level%2===1;
    return raw('Rechne '+n(value)+(down?' kg in g':' g in kg')+' um.',down?`${value}*1000`:`${value}/1000`,down?'g':'kg','1 kg = 1 000 g.',4);
  }
  if(topic==='volumeUnits'){
    const value=mid?a+b/10:a,down=level%2===1;
    return raw('Rechne '+n(value)+(down?' dm³ in cm³':' cm³ in dm³')+' um.',down?`${value}*1000`:`${value}/1000`,down?'cm³':'dm³','1 dm³ = 1 000 cm³. Drei Längenrichtungen verändern sich jeweils um den Faktor 10.',4);
  }
  if(topic==='volumeSolids'){
    const x=a%15+2,y=b%10+2,z=c%8+2;
    return high?raw('Ein Quader ist '+x+' cm lang, '+y+' cm breit und '+z+' cm hoch. Ein Durchbruch von 2 cm × 1 cm geht durch die ganze Höhe. Welches Volumen bleibt?',`${x}*${y}*${z}-2*1*${z}`,'cm³','Berechne das Volumen des ganzen Quaders und ziehe das Volumen des Durchbruchs ab.',0):
      raw('Ein Quader ist '+x+' cm lang, '+y+' cm breit und '+z+' cm hoch. Wie groß ist sein Volumen?',`${x}*${y}*${z}`,'cm³','V = Länge · Breite · Höhe.',0);
  }
  if(topic==='surfaceSolids'){
    const x=a%15+2,y=b%10+2,z=c%8+2;
    if(level<=2)return raw('Ein Würfel hat '+x+' cm Kantenlänge. Wie groß ist seine Oberfläche?',`6*${x}*${x}`,'cm²','Ein Würfel hat sechs gleich große Quadrate als Flächen.',0);
    return high?raw('Ein Kasten ohne Deckel ist '+x+' cm lang, '+y+' cm breit und '+z+' cm hoch. Berechne nur den äußeren Boden und die vier Außenseiten.',`${x}*${y}+2*${x}*${z}+2*${y}*${z}`,'cm²','Addiere Boden und vier Seiten. Die Öffnung ist keine Fläche.',0):
      raw('Ein Quader ist '+x+' cm lang, '+y+' cm breit und '+z+' cm hoch. Wie groß ist seine Oberfläche?',`2*(${x}*${y}+${x}*${z}+${y}*${z})`,'cm²','Addiere die drei verschiedenen Rechteckflächen und verdopple die Summe.',0);
  }
  if(topic==='triangleArea'){
    const g=a%24+2,h=b%15+2;
    return high?raw('Ein Dreieck hat '+n(g*h/2)+' cm² Fläche und die Grundseite '+g+' cm. Wie lang ist die zugehörige Höhe?',`${g*h/2}*2/${g}`,'cm','Aus A = g · h : 2 folgt h = 2 · A : g.'):
      raw('Ein Dreieck hat die Grundseite '+g+' cm und die zugehörige senkrechte Höhe '+h+' cm. Berechne die Fläche.',`${g}*${h}/2`,'cm²','A = Grundseite · zugehörige Höhe : 2.');
  }
  if(topic==='circleArea'){
    const r=a%18+2,parts=high?4:mid?2:1;
    return raw('Ein '+(parts===4?'Viertelkreis':parts===2?'Halbkreis':'Kreis')+' hat den Radius '+r+' cm. Berechne seine Fläche. π = 3,14.',`3.14*${r}^2/${parts}`,'cm²','Kreisfläche = π · r². Teile bei Halb- oder Viertelkreisen durch 2 oder 4.');
  }
  if(topic==='cylinders'){
    const r=a%10+2,h=b%14+2,g=c%20+5;
    return high?raw('Ein Zylinder hat '+r+' cm Radius und '+h+' cm Höhe. Ein zweiter Zylinder mit gleichem Radius ist 2 cm höher. Um wie viel cm³ wächst das Volumen? π = 3,14.',`3.14*${r}^2*2`,'cm³','Bei gleicher Grundfläche ist die Volumenzunahme Grundfläche mal zusätzliche Höhe.'):
      mid?raw('Ein Zylinder hat '+r+' cm Radius und '+h+' cm Höhe. Berechne sein Volumen. π = 3,14.',`3.14*${r}^2*${h}`,'cm³','V = Grundfläche · Höhe = π · r² · h.'):
      raw('Ein gerades Prisma hat '+g+' cm² Grundfläche und '+h+' cm Höhe. Berechne sein Volumen.',`${g}*${h}`,'cm³','V = Grundfläche · Höhe.',0);
  }
  if(topic==='scale'){
    const drawing=a%20+2,scale=(b%10+1)*10;
    return high?raw('Eine Strecke ist in Wirklichkeit '+drawing*scale+' cm lang. In einer Zeichnung im Maßstab 1 : '+scale+' soll sie dargestellt werden. Wie lang ist sie dort?',`${drawing*scale}/${scale}`,'cm','Zeichnungslänge = wirkliche Länge : Maßstabszahl.'):
      raw('Eine Zeichnung hat den Maßstab 1 : '+scale+'. Darin ist eine Strecke '+drawing+' cm lang. Wie lang ist sie in Wirklichkeit?',`${drawing}*${scale}`,'cm','Wirkliche Länge = Zeichnungslänge · Maßstabszahl.');
  }
  if(topic==='mean'){
    return high?raw('Drei Messungen ergeben '+a+' mm, '+b+' mm und '+c+' mm. Welcher vierte Wert ist nötig, damit der Mittelwert '+n((a+b+c)/3+2)+' mm beträgt?',`(${(a+b+c)/3+2})*4-${a}-${b}-${c}`,'mm','Gesuchte Gesamtsumme = gewünschter Mittelwert · 4. Ziehe die drei bekannten Werte ab.',2):
      raw('Drei Messwerte lauten '+a+' mm, '+b+' mm und '+c+' mm. Berechne den Mittelwert. Runde auf zwei Nachkommastellen.',`(${a}+${b}+${c})/3`,'mm','Addiere alle drei Werte und teile durch 3.');
  }
  if(topic==='dataRead'){
    return high?raw('Ein Betrieb fertigt am Montag '+a+' Teile, am Dienstag '+b+' und am Mittwoch '+c+'. Wie viel Prozent der Gesamtzahl entfallen auf Montag? Runde auf zwei Nachkommastellen.',`${a}/(${a}+${b}+${c})*100`,'%','Anteil = Montag : Gesamtzahl · 100.'):
      mid?raw('Die Bestellliste enthält '+a+' Schrauben, '+b+' Muttern und '+c+' Scheiben. Wie viele Teile sind es insgesamt?',`${a}+${b}+${c}`,'Teile','Addiere die drei Mengen.',0):
      raw('Mia fertigt '+a+' Teile und Ali '+b+' Teile. Wie viele fertigen beide zusammen?',`${a}+${b}`,'Teile','Addiere die beiden Stückzahlen.',0);
  }
  throw new Error('Unbekanntes Mathematikthema.');
}
export function generateExtraMath(topic,level,previous=[],random=Math.random){
  let question;
  for(let attempt=0;attempt<200;attempt++){
    const a=2+Math.floor(random()*88),b=2+Math.floor(random()*77),c=2+Math.floor(random()*19);
    const source=task(topic,level,a,b,c);
    const base=materializeQuestion({...source,distractors:[-987654321,-987654322]},level,topic+'-'+a+'-'+b+'-'+c,random);
    const answer=base.values[base.correct],step=10**-source.decimals;
    const wrong=[answer+Math.max(step,Math.abs(answer)*.1),answer-Math.max(step,Math.abs(answer)*.2)];
    question={...materializeQuestion({...source,distractors:wrong},level,base.id,random),kind:'calculated',topic,
      why:(source.why?source.why+' ':'')+base.why};
    if(!previous.includes(question.term))return question;
  }
  return question;
}
