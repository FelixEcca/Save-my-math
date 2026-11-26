import {calculate,materializeQuestion,roundTo} from './math.js';

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

// Each expression models a specific mistake in the displayed task. The same
// restricted arithmetic parser checks these expressions and the correct one.
function errorCalculations(topic,level,a,b,c){
  const high=level>=4,mid=level>=3;
  if(topic==='rounding'){
    const place=level===1?10:level===2?100:level===3?1:level===4?.1:.01;
    const value=level<=2?a*37+b:Number((a/10+b/100+(high?c/1000:0)).toFixed(3));
    const digits=-Math.log10(place),scaled=Number(value+'e'+digits);
    // Always round down/up, or round to a place one position too far left.
    return [Number(Math.floor(scaled)+'e'+(-digits)),Number(Math.ceil(scaled)+'e'+(-digits)),
      Number(Math.round(Number(value+'e'+(digits-1)))+'e'+(1-digits)),value].map(String);
  }
  if(topic==='compareNumbers'){
    const values=mid?[a/10,-b/10,(a-c)/10]:[a*10+b,a*10+c,b*10+a];
    if(!high)return values.map(String); // Select another one of the given numbers.
    const largest=Math.max(...values),smallest=Math.min(...values);
    // Add the negative endpoint, use just one endpoint, or reverse subtraction.
    return [`(${largest})+(${smallest})`,String(largest),String(-smallest),`(${smallest})-(${largest})`];
  }
  if(topic==='integers')return high?
    [`-${a}+${b}+${c}`,`${a}+${b}-${c}`,`-${a}-${b}-${c}`,`-${a}+${b}`]:
    [`${a}+${b}`,`-${a}-${b}`,`${a}-${b}`];
  if(topic==='decimalMultiply'){
    const x=level<=2?a/10:a/100,y=mid?b/10:b;
    // Omit the reserve, multiply it too, or misplace the decimal point.
    return high?[`${x}*${b}`,`${x}*(${b}+${c}/10)`,`${a}*${b}+${c}/10`,`${x}*${b}+${c}`]:
      [`${x}*${y}*10`,`${x}*${y}/10`,`${x}+${y}`,`${a}*${b}`];
  }
  if(topic==='division'){
    const amount=a*b;
    // Treat per-person extras as a shared total, or replace division by another operation.
    return high?[`${amount}/${b}`,`(${amount}+${c})/${b}`,`${amount}/(${b}+${c})`,`${amount}*${b}+${c}`]:
      [`${amount}-${b}`,`${amount}*${b}`,`${b}/${amount}`,String(amount)];
  }
  if(topic==='orderOperations')return level<=2?
    [`(${a}+${b})*${c}`,`${a}+${b}+${c}`,`${a}*(${b}+${c})`]:high?
    [`${a}+${b}*${c}-${b}`,`(${a}+${b})*(${c}-${b})`,`(${a}+${b})*${c}`,`(${a}+${b})*${c}+${b}`]:
    [`${a}+${b}*${c}`,`${a}*${c}+${b}`,`${a}+${b}+${c}`];
  if(topic==='powers'){
    const base=a%25+1,exp=level<=2?2:3;
    // Confuse exponent and factor, or give the new volume instead of its increase.
    return high?[`(${base}+1)^3`,`${base}^3`,'1^3',`3*${base}^2`]:
      [`${base}*${exp}`,String(base),`${base}^${exp+1}`,`${base}^${exp-1}`];
  }
  if(topic==='equations'){
    const x=a%18+1,k=b%8+2,d=c%12+1,result=k*x+d;
    return level<=2?[`${x+d}+${d}`,String(x+d),`${d}-${x+d}`]:high?
      [`(${result}+${d})/${k}`,`${result}-${d}`,`${result}/${k}-${d}`,`${result}/${k}`]:
      [`${k*x}-${k}`,`${k*x}*${k}`,String(k)];
  }
  if(topic==='ratios'){
    const p=a%5+1,q=b%5+2,s=c%8+2,total=(p+q)*s;
    // Choose the first colour/one share, use inverse proportion, or add instead of scaling.
    return mid?[`${total}/(${p}+${q})*${p}`,`${total}/(${p}+${q})`,`${total}/${q}`,`${total}*${q}/${p}`]:
      [String(p*s),`${p*s}/${q}*${p}`,`${p*s}+(${q}-${p})`,`${p*s}*${q}`];
  }
  if(topic==='interest'){
    const capital=(a+10)*100,rate=b%5+1,months=c%12+1;
    // Omit the fraction of a year, the division by 12, or the percentage conversion.
    return high?[`${capital}*${rate}/100`,`${capital}*${rate}/100*${months}`,`${capital}*${rate}/100/12`,`${capital}*${rate}/100*${months}/360`]:
      [`${capital}*${rate}`,`${capital}+${capital}*${rate}/100`,`${capital}*${rate}/10000`];
  }
  if(topic==='timeUnits'){
    const hours=a%6+1,mins=b%60;
    // Use 100 minutes per hour, add the break, or fail to convert a mixed duration.
    return high?[`${hours}*60+${mins}+${c}`,`${hours}*100+${mins}-${c}`,`${hours}*60+${mins}`,`${hours}*60+${mins}-${c}*60`]:
      [`${hours}*100+${mins}`,`${hours}+${mins}`,`(${hours}+${mins})*60`,`${hours}*60`];
  }
  if(topic==='massUnits'||topic==='volumeUnits'){
    const value=mid?a+b/10:a,down=level%2===1;
    // Reverse the conversion or use the factor for an area/length conversion.
    return down?[`${value}/1000`,`${value}*100`,`${value}*10`,String(value)]:
      [`${value}*1000`,`${value}/100`,`${value}/10`,String(value)];
  }
  if(topic==='volumeSolids'){
    const x=a%15+2,y=b%10+2,z=c%8+2;
    // Leave the hole in place, subtract only its base area, or confuse volume and surface.
    return high?[`${x}*${y}*${z}`,`${x}*${y}*${z}-2`,`${x}*${y}*${z}+2*${z}`,`(${x}-2)*(${y}-1)*${z}`]:
      [`${x}*${y}`,`2*(${x}*${y}+${x}*${z}+${y}*${z})`,`${x}+${y}+${z}`];
  }
  if(topic==='surfaceSolids'){
    const x=a%15+2,y=b%10+2,z=c%8+2;
    // Count too few faces, forget the opposite faces, or include the absent lid.
    if(level<=2)return [`5*${x}*${x}`,`4*${x}*${x}`,`${x}^3`,`${x}*${x}`];
    return high?[`2*(${x}*${y}+${x}*${z}+${y}*${z})`,`2*${x}*${z}+2*${y}*${z}`,`${x}*${y}+${x}*${z}+${y}*${z}`,`${x}*${y}*${z}`]:
      [`${x}*${y}+${x}*${z}+${y}*${z}`,`2*${x}*${y}+2*${x}*${z}`,`${x}*${y}*${z}`,`2*(${x}+${y}+${z})`];
  }
  if(topic==='triangleArea'){
    const g=a%24+2,h=b%15+2,area=g*h/2;
    // Omit/reverse the factor 2 when finding area or height.
    return high?[`${area}/${g}`,`${area}*2`,`${area}/(2*${g})`,`${area}*${g}/2`]:
      [`${g}*${h}`,`(${g}+${h})/2`,`${g}*${h}/4`,`${g}+${h}`];
  }
  if(topic==='circleArea'){
    const r=a%18+2,parts=high?4:mid?2:1;
    // Use circumference, forget the circle part/square, or treat the radius as a diameter.
    return [`2*3.14*${r}/${parts}`,`3.14*${r}^2`,`3.14*${r}/${parts}`,`3.14*(${r}/2)^2/${parts}`,`3.14*${r}^2*${parts}`];
  }
  if(topic==='cylinders'){
    const r=a%10+2,h=b%14+2,g=c%20+5;
    return high?[`3.14*${r}^2*(${h}+2)`,`3.14*${r}^2*${h}`,`3.14*${r}^2`,`3.14*${r}*2`]:
      mid?[`2*3.14*${r}*${h}`,`3.14*${r}^2`,`3.14*${r}*${h}`,`3.14*(${r}/2)^2*${h}`]:
      [`${g}+${h}`,String(g),`2*${g}*${h}`,`${g}/${h}`];
  }
  if(topic==='scale'){
    const drawing=a%20+2,scale=(b%10+1)*10,actual=drawing*scale;
    // Reverse multiplication/division, leave the length unchanged, or change units unnecessarily.
    return high?[`${actual}*${scale}`,String(actual),`${actual}/${scale}/100`,`${actual}-${scale}`]:
      [`${drawing}/${scale}`,`${drawing}+${scale}`,`${drawing}*${scale}/100`,String(drawing)];
  }
  if(topic==='mean'){
    const target=(a+b+c)/3+2;
    // Use the sum/wrong number of readings, or confuse the target mean with the missing value.
    return high?[String(target),`(${target})*3-${a}-${b}-${c}`,`(${target})*4`,`((${target})*4-${a}-${b}-${c})/4`]:
      [`${a}+${b}+${c}`,`(${a}+${b}+${c})/2`,`(${a}+${b}+${c})/4`,`(${a}+${b})/2`];
  }
  if(topic==='dataRead')return high?
    [`${a}/(${b}+${c})*100`,`${a}/(${a}+${b}+${c})`,`(${b}+${c})/(${a}+${b}+${c})*100`,`${a}/${b}*100`]:mid?
    [`${a}+${b}`,`${a}+${b}-${c}`,`${a}*${b}*${c}`]:
    [`${a}-${b}`,`${a}*${b}`,String(a),String(b)];
  throw new Error('Unbekanntes Mathematikthema.');
}

function distractorsFor(source,topic,level,a,b,c,answer){
  const wrong=[];
  const close=(x,y)=>Math.abs(x-y)<=1e-10*Math.max(1e-20,Math.abs(x),Math.abs(y));
  const add=value=>{
    if(!Number.isFinite(value)||Math.abs(value)>1e14)return;
    const rounded=roundTo(value,source.decimals);
    if(close(rounded,answer)||wrong.some(other=>close(rounded,other)))return;
    wrong.push(rounded);
  };
  for(const expression of errorCalculations(topic,level,a,b,c)){
    add(calculate(expression));
    if(wrong.length===2)return wrong;
  }
  // Coinciding values can erase a genuine error (for example, a square's area
  // and circumference). Only then fill the remaining slots with nearby values.
  const step=topic==='rounding'?(level===1?10:level===2?100:level===3?1:level===4?.1:.01):10**-source.decimals;
  for(let offset=1;wrong.length<2;offset++){
    add(calculate(`(${answer})+${step}*${offset}`));
    if(wrong.length<2)add(calculate(`(${answer})-${step}*${offset}`));
  }
  return wrong;
}

export function generateExtraMath(topic,level,previous=[],random=Math.random){
  let question;
  for(let attempt=0;attempt<200;attempt++){
    const a=2+Math.floor(random()*88),b=2+Math.floor(random()*77),c=2+Math.floor(random()*19);
    const source=task(topic,level,a,b,c);
    const base=materializeQuestion({...source,distractors:[-987654321,-987654322]},level,topic+'-'+a+'-'+b+'-'+c,random);
    const answer=base.values[base.correct];
    const wrong=distractorsFor(source,topic,level,a,b,c,answer);
    question={...materializeQuestion({...source,distractors:wrong},level,base.id,random),kind:'calculated',topic,
      why:(source.why?source.why+' ':'')+base.why};
    if(!previous.includes(question.term))return question;
  }
  return question;
}
