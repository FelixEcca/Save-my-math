export function createScene(scene,root,getState) {
  const context=scene.getContext('2d');
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let state=getState(),width=736,height=250,colors={},active=true,animationId=0;
  function updateColors() {
    const names=['sky-top','sky-low','land','sea','sea-front','foam','boat','boat-ink','orange','skin',
      'bean-water','bean-rail','bean-cliff','bean-ice','bean-space','rock','ice','space','space-low','station','train','tracks',
      'shadow','hazard','rope-core'];
    const probe=document.createElement('span');
    probe.style.display='none';
    root.appendChild(probe);
    for (const name of names) {
      probe.style.color='var(--rs-'+name+')';
      colors[name]=getComputedStyle(probe).color;
    }
    probe.remove();
  }
  function polygon(points,color) {
    context.fillStyle=color;
    context.beginPath();
    points.forEach(([x,y],index)=>index?context.lineTo(x,y):context.moveTo(x,y));
    context.closePath();
    context.fill();
  }
  function line(points,color,thickness=2) {
    context.strokeStyle=color;
    context.lineWidth=thickness;
    context.lineCap='round';
    context.lineJoin='round';
    context.beginPath();
    points.forEach(([x,y],index)=>index?context.lineTo(x,y):context.moveTo(x,y));
    context.stroke();
  }
  function ellipse(x,y,rx,ry,color,rotation=0) {
    context.fillStyle=color;
    context.beginPath();
    context.ellipse(x,y,rx,ry,rotation,0,Math.PI*2);
    context.fill();
  }
  function roundedBox(x,y,w,h,r,color) {
    context.fillStyle=color;
    context.beginPath();
    context.roundRect(x,y,w,h,r);
    context.fill();
  }
  function puff(x,y,t) {
    for(let i=0;i<7;i++) {
      const angle=i*Math.PI*2/7;
      ellipse(x+Math.cos(angle)*22,y+Math.sin(angle)*14,18,14,colors.boat);
    }
    for(let i=0;i<3;i++) {
      const xx=x+Math.cos(t+i*2)*34;
      const yy=y-25+Math.sin(t+i*2)*8;
      line([[xx-3,yy],[xx+3,yy]],colors.orange,2);
      line([[xx,yy-3],[xx,yy+3]],colors.orange,2);
    }
  }
  function bean(x,y,scale,color,t,{rotation=0,helmet=false,hat=false,celebrate=false,failed=false,climbing=false}={}) {
    const fear=celebrate?0:Math.min(1,(5-state.energy)/4);
    const worry=celebrate?0:Math.max(0,5-state.energy);
    const shiver=Math.sin(t*12)*fear*fear*1.3;
    context.save();
    context.translate(x+shiver,y);
    context.rotate(rotation+(celebrate?0:fear*.035));
    context.scale(scale,scale);

    const swing=Math.sin(t*(2+fear*7))*(2+fear*9);
    const lift=celebrate||climbing||state.energy<=3;
    const leftHandY=lift?-29-fear*4:8;
    const rightHandY=lift?-30-fear*3:9;
    line([[-17,7],[-32,lift?-13:16],[-34+swing,leftHandY]],colors['boat-ink'],5);
    line([[18,7],[31,lift?-13:20],[39-swing*.55,rightHandY]],colors['boat-ink'],5);
    const kick=celebrate?Math.sin(t*4)*3:Math.sin(t*(3+fear*5))*fear*7;
    line([[-9,29],[-12-fear*3,41],[-20-fear*2,45+kick]],colors['boat-ink'],5);
    line([[9,29],[14+fear*5,36],[21+fear*5,45-fear*7-kick]],colors['boat-ink'],5);
    ellipse(-20-fear*2,45+kick,7,3.5,colors['boat-ink']);
    ellipse(21+fear*5,45-fear*7-kick,7,3.5,colors['boat-ink']);

    context.fillStyle=color;
    context.beginPath();
    context.moveTo(-21,3);
    context.bezierCurveTo(-24,-18,-14,-31,0,-30);
    context.bezierCurveTo(17,-31,25,-18,23,4);
    context.bezierCurveTo(28,27,16,35,0,34);
    context.bezierCurveTo(-20,34,-25,25,-21,3);
    context.fill();
    context.globalAlpha=.18;
    ellipse(-9,-16,5,9,colors.boat,-.4);
    context.globalAlpha=1;

    const eyeY=-7-Math.min(worry,4)*.45;
    const eyeWidth=6+Math.min(worry,4)*.60;
    const eyeHeight=7+Math.min(worry,4)*1.15;
    const pupil=celebrate?2.9:Math.max(1.45,3.1-fear*1.65);
    const look=state.scenario==='rail'?2*fear:Math.sin(t*.7)*.6;
    for(const xx of [-9,9]) {
      ellipse(xx,eyeY,eyeWidth,eyeHeight,colors.boat);
      if(failed) {
        line([[xx-3,eyeY-3],[xx+3,eyeY+3]],colors['boat-ink'],2);
        line([[xx+3,eyeY-3],[xx-3,eyeY+3]],colors['boat-ink'],2);
      } else {
        ellipse(xx+look+shiver*.2,eyeY+fear,pupil,pupil*1.25,colors['boat-ink']);
      }
    }

    if(failed) {
      ellipse(1,13,5,6,colors['boat-ink']);
    } else if(celebrate||state.energy===5) {
      context.strokeStyle=colors['boat-ink'];
      context.lineWidth=2.5;
      context.beginPath();
      context.moveTo(-6,9);
      context.quadraticCurveTo(1,18,9,8);
      context.stroke();
    } else if(state.energy===4) {
      context.strokeStyle=colors['boat-ink'];
      context.lineWidth=2.3;
      context.beginPath();
      context.moveTo(-6,13);
      context.quadraticCurveTo(1,9,8,13);
      context.stroke();
      line([[-15,-20],[-4,-22]],colors['boat-ink'],2);
      line([[5,-22],[16,-20]],colors['boat-ink'],2);
    } else if(state.energy===3) {
      context.strokeStyle=colors['boat-ink'];
      context.lineWidth=2.5;
      context.beginPath();
      context.moveTo(-8,16);
      context.quadraticCurveTo(1,5,10,16);
      context.stroke();
      line([[-17,-21],[-4,-25]],colors['boat-ink'],2.3);
      line([[5,-25],[18,-21]],colors['boat-ink'],2.3);
    } else {
      ellipse(1,14,state.energy===1?8:6,state.energy===1?11:8,colors['boat-ink']);
      ellipse(2,20,state.energy===1?4:2.5,2.4,colors.skin);
      line([[-18,-22],[-5,-28]],colors['boat-ink'],2.5);
      line([[5,-28],[19,-22]],colors['boat-ink'],2.5);
      if(state.energy===1) {
        line([[-17,8],[-16,16]],colors.foam,2.7);
        line([[17,8],[18,15]],colors.foam,2.7);
      }
    }

    if(hat) {
      roundedBox(-23,-33,46,10,4,colors.orange);
      ellipse(0,-35,19,10,colors.orange);
      ellipse(0,-45,5,5,colors.boat);
    }
    if(helmet) {
      context.globalAlpha=.13;
      ellipse(0,-4,33,36,colors.boat);
      context.globalAlpha=1;
      context.strokeStyle=colors.boat;
      context.lineWidth=3;
      context.beginPath();
      context.ellipse(0,-4,33,36,0,0,Math.PI*2);
      context.stroke();
      line([[-22,24],[22,24]],colors.boat,6);
      if(!celebrate&&state.energy<=2) {
        line([[18,-30],[11,-21],[20,-13],[13,-4],[23,4]],colors['boat-ink'],1.6);
        line([[11,-21],[2,-24]],colors['boat-ink'],1.2);
        if(state.energy<=1) {
          line([[-20,-27],[-12,-19],[-18,-9],[-7,-2]],colors['boat-ink'],1.6);
          line([[13,-4],[4,2]],colors['boat-ink'],1.2);
        }
      }
    }
    if(state.energy<=3&&!celebrate&&!failed) {
      const drops=state.energy===1?4:state.energy===2?3:1;
      for(let i=0;i<drops;i++) {
        const side=i%2===0?1:-1;
        const yy=-25+i*9+Math.sin(t*3+i)*2;
        context.save();
        context.translate(side*(29+i%2*2),yy);
        polygon([[0,-5],[-3,1],[0,5],[3,1]],colors.foam);
        context.restore();
      }
    }
    context.restore();
  }

  function sky(top=colors['sky-top'],bottom=colors['sky-low']) {
    const gradient=context.createLinearGradient(0,0,0,height);
    gradient.addColorStop(0,top);
    gradient.addColorStop(1,bottom);
    context.fillStyle=gradient;
    context.fillRect(0,0,width,height);
  }

  function rope(start,control,end,danger,broken=false) {
    const points=[];
    for(let i=0;i<=40;i++) {
      const t=i/40;
      points.push([
        (1-t)*(1-t)*start[0]+2*(1-t)*t*control[0]+t*t*end[0],
        (1-t)*(1-t)*start[1]+2*(1-t)*t*control[1]+t*t*end[1]
      ]);
    }
    if(danger<.5&&!broken) {
      line(points,colors.orange,3.5);
      return;
    }
    line(points.slice(0,22),colors.orange,3.5);
    line(points.slice(27),colors.orange,3.5);
    if(!broken) line(points.slice(21,28),colors['rope-core'],danger>=.95?.75:1.5);
    const center=points[24];
    const next=points[25];
    const length=Math.hypot(next[0]-center[0],next[1]-center[1])||1;
    const nx=-(next[1]-center[1])/length;
    const ny=(next[0]-center[0])/length;
    const fray=7+danger*11;
    for(const direction of [-1,1]) {
      line([[center[0],center[1]],[center[0]+nx*fray*direction-4,center[1]+ny*fray*direction+5]],colors.orange,1.5);
      line([[center[0]-3,center[1]-3],[center[0]+nx*fray*.7*direction+4,center[1]+ny*fray*.7*direction-7]],colors['rope-core'],1.1);
    }
  }

  function waterSurface(y,t,foreground=false,danger=0) {
    const amplitude=3+danger*9;
    context.beginPath();
    for(let x=0;x<=width;x+=4) {
      const yy=y+Math.sin(x/34+t*(1.2+danger))*amplitude+
        Math.sin(x/17-t*(.8+danger))*(1.4+danger*3);
      x===0?context.moveTo(x,yy):context.lineTo(x,yy);
    }
    context.lineTo(width,height);
    context.lineTo(0,height);
    context.closePath();
    context.fillStyle=foreground?colors['sea-front']:colors.sea;
    context.fill();
  }

  function boat(progress,t,danger=0) {
    const x=width*(.86-.39*progress);
    const y=height*(.49+.14*progress)+Math.sin(t*(1+danger))* (1.5+danger*4);
    context.save();
    context.translate(x,y);
    context.rotate(Math.sin(t*1.4)*danger*.045);
    context.scale(.75+progress*.2,.75+progress*.2);
    polygon([[-50,1],[49,1],[33,22],[-30,22]],colors.boat);
    polygon([[-48,2],[47,2],[39,8],[-42,8]],colors.orange);
    polygon([[-21,0],[-17,-25],[19,-25],[31,0]],colors.boat);
    polygon([[-10,-20],[14,-20],[22,-5],[-12,-5]],colors['boat-ink']);
    line([[-2,-25],[-2,-42],[18,-42]],colors.boat,3);
    if(state.phase==='rescued') bean(-29,-14,.45,colors['bean-water'],t,{celebrate:true});
    context.restore();
  }

  function drawWater(t,progress,danger) {
    sky();
    polygon([[0,height*.39],[width*.13,height*.31],[width*.29,height*.39],[width*.56,height*.36],
      [width,height*.41],[width,height],[0,height]],colors.land);
    waterSurface(height*.43,t,false,danger*.5);
    context.globalAlpha=.4;
    for(let row=0;row<6;row++) {
      const yy=height*(.47+row*.065);
      line([[0,yy],[width*.32,yy+Math.sin(t+row)*danger*7],
        [width*.64,yy-3],[width,yy+2]],colors.foam,1+danger*.5);
    }
    context.globalAlpha=1;
    if(danger>=.5) {
      context.globalAlpha=(danger-.3)*.36;
      for(let i=0;i<20;i++) {
        const xx=((i*73+t*45)%Math.max(1,width));
        const yy=((i*29+t*80)%Math.max(1,height));
        line([[xx,yy],[xx-5,yy+11]],colors.foam,1);
      }
      context.globalAlpha=1;
    }
    boat(progress,t,danger);
    const waterY=height*(.76-danger*.035);
    if(state.phase!=='rescued') {
      const bodyY=state.phase==='failed'?waterY+31:waterY-32+danger*33;
      bean(width*.28,bodyY,.87,colors['bean-water'],t,
        {failed:state.phase==='failed',rotation:Math.sin(t*(1.2+danger))*danger*.055});
    }
    waterSurface(waterY,t,true,danger);
    context.globalAlpha=.7;
    for(let i=0;i<4;i++) {
      const xx=width*.28-35+i*22;
      const yy=waterY+Math.sin(xx/34+t*(1.2+danger))*(3+danger*9)+4;
      line([[xx-6,yy],[xx+4,yy-1]],colors.foam,1+danger);
    }
    context.globalAlpha=1;
    if(state.phase==='failed') {
      for(let i=0;i<4;i++) ellipse(width*.28+Math.sin(i*2)*20,waterY-6-i*8,2+i%2,2+i%2,colors.foam);
    }
  }

  function train(x,y,t,danger=0) {
    const size=Math.min(1,width/650);
    context.save();
    context.translate(x,y);
    context.scale(size,size);
    if(danger>=.5) {
      context.globalAlpha=(danger-.3)*.6;
      polygon([[-7,-43],[-110,-58],[-110,-12],[-7,-31]],colors['rope-core']);
      context.globalAlpha=1;
      for(let i=0;i<3;i++) line([[80+i*23,-80-i*6],[143+i*23,-80-i*6]],colors['boat-ink'],2);
    }
    roundedBox(-8,-68,220,62,14,colors.train);
    roundedBox(-8,-34,220,27,5,colors.boat);
    roundedBox(3,-61,31,26,6,colors['boat-ink']);
    for(let i=0;i<4;i++) roundedBox(50+i*39,-59,25,23,4,colors['boat-ink']);
    line([[-6,-17],[212,-17]],colors.orange,6);
    ellipse(-3,-26,4,5,colors['rope-core']);
    for(const wheel of [25,90,170]) {
      ellipse(wheel,0,11,11,colors['boat-ink']);
      ellipse(wheel,0,5,5,colors.tracks);
    }
    line([[50,-69],[60,-85],[80,-85],[95,-69]],colors.tracks,3);
    context.restore();
  }

  function drawRail(t,progress,danger) {
    sky(colors.station,colors['sky-low']);
    roundedBox(width*.7,height*.25,width*.3,height*.30,3,colors.land);
    for(let i=0;i<3;i++) roundedBox(width*(.73+i*.075),height*.32,width*.045,height*.12,2,colors['boat-ink']);
    context.fillStyle=colors.station;
    context.fillRect(0,height*.65,width,height);
    const railY=height*.81;
    for(let x=-20;x<width;x+=31) line([[x,railY-9],[x+15,railY+12]],colors.rock,8);
    line([[0,railY-5],[width,railY-5]],colors.tracks,4);
    line([[0,railY+9],[width,railY+9]],colors.tracks,4);
    const failed=state.phase==='failed';
    const saved=state.phase==='rescued';
    const personX=width*.29;
    bean(personX,saved?height*.65-39:railY-39,.86,colors['bean-rail'],t,
      {celebrate:saved,rotation:failed?-.5:-danger*.10+Math.sin(t*(2+danger*4))*danger*.07,failed});
    if(!saved) {
      line([[personX-15,railY-1],[personX-8,railY+5]],colors.orange,6);
      if(danger>=.75) {
        for(let i=0;i<3;i++) {
          const xx=personX+6+i*6;
          line([[xx,railY-4],[xx+2,railY-11-i*2]],colors.hazard,1.5);
        }
      }
    }
    const near=personX+29;
    const far=width*.92;
    const trainX=failed?width*.22:saved?width*.75:far-(far-near)*Math.pow(danger,1.15);
    train(trainX,railY-10,t,danger);
    if(failed) puff(personX,railY-32,t);
  }

  function drawCliff(t,progress,danger) {
    sky();
    polygon([[0,height*.72],[width*.23,height*.35],[width*.50,height*.74],[width*.77,height*.30],
      [width,height*.62],[width,height],[0,height]],colors.land);
    polygon([[width*.62,height*.30],[width,height*.23],[width,height],[width*.53,height],
      [width*.57,height*.75],[width*.58,height*.52]],colors.rock);
    for(let i=0;i<5;i++) line([[width*.65,height*(.40+i*.11)],[width*.82,height*(.36+i*.11)]],colors.station,3);
    const saved=state.phase==='rescued';
    const failed=state.phase==='failed';
    const x=width*(saved?.72:failed?.35:.43);
    const y=saved?height*.30-32:height*(failed?.92:.42+danger*.32);
    const end=failed?[width*.49,height*.60]:saved?[x+9,y+18]:[x+34,y-27];
    rope([width*.68,height*.28],[width*.57,height*.40],end,danger,failed);
    if(danger>=.5&&!saved) {
      for(let i=0;i<4;i++) {
        const yy=height*(.60+i*.095)+(t*18+i*11)%(height*.16);
        const xx=width*(.52-i*.016);
        polygon([[xx,yy],[xx+5,yy-3],[xx+8,yy+4],[xx+2,yy+7]],colors.rock);
      }
    }
    if(failed) {
      bean(x,y,.7,colors['bean-cliff'],t,{failed:true,rotation:-1.1});
      puff(x+8,y+8,t);
    } else {
      bean(x,y,saved?.7:.88,colors['bean-cliff'],t,
        {hat:true,climbing:!saved,celebrate:saved,rotation:-danger*.035+Math.sin(t*(1.8+danger*3))*danger*.055});
    }
    line([[width*.85,height*.18],[width*.85,height*.30]],colors['boat-ink'],3);
    polygon([[width*.85,height*.18],[width*.93,height*.21],[width*.85,height*.24]],colors.orange);
  }

  function drawIce(t,progress,danger) {
    sky(colors['sky-low'],colors.ice);
    polygon([[0,height*.57],[width*.16,height*.32],[width*.33,height*.57],[width*.58,height*.39],
      [width*.79,height*.57],[width,height*.45],[width,height],[0,height]],colors.land);
    context.fillStyle=colors['sea-front'];
    context.fillRect(0,height*.65,width,height);
    polygon([[0,height*.61],[width*.38,height*.59],[width*.76,height*.65],[width,height*.61],
      [width,height],[0,height]],colors.ice);
    const x=width*.32,y=height*.76;
    const failed=state.phase==='failed';
    const saved=state.phase==='rescued';
    const holeRadius=failed?57:24+danger*57;
    if(!saved) {
      if(danger>=.75||failed) {
        ellipse(x,y,holeRadius,14+danger*13,colors.sea);
        if(!failed) {
          const platformRadius=Math.max(10,42-danger*32);
          ellipse(x+Math.sin(t*2)*danger*3,y-1,platformRadius,5,colors.ice,-danger*.08);
          line([[x-platformRadius*.7,y-2],[x+platformRadius*.6,y-3]],colors.foam,1.5);
        }
      }
      const radius=12+danger*48;
      for(let i=0;i<8;i++) {
        const angle=i*Math.PI/4+.15;
        const rootRadius=danger>=.75?holeRadius*.75:9;
        const middle=radius+danger*35;
        const end=middle+danger*35;
        const points=[
          [x+Math.cos(angle)*rootRadius,y+Math.sin(angle)*rootRadius*.4],
          [x+Math.cos(angle+.06)*middle,y+Math.sin(angle+.06)*middle*.43],
          [x+Math.cos(angle)*end,y+Math.sin(angle)*end*.43]
        ];
        line(points,colors.sea,.8+danger*2.2);
        if(danger>=.5) {
          const anchor=points[1];
          line([anchor,[anchor[0]+Math.cos(angle+.6)*16,anchor[1]+Math.sin(angle+.6)*9]],colors.sea,1+danger);
        }
      }
    }
    if(!saved) {
      if(failed) {
        context.save();
        context.beginPath();
        context.ellipse(x,y,holeRadius,14+danger*13,0,0,Math.PI*2);
        context.clip();
      }
      bean(x,failed?y+18:y-39,.86,colors['bean-ice'],t,
        {hat:true,failed,rotation:failed?.2:-danger*.055+Math.sin(t*(1.9+danger*4))*danger*.15});
      if(failed) context.restore();
    }
    if(danger>=.75&&!saved) {
      for(let i=0;i<5;i++) ellipse(x-27+i*13,y-8-Math.sin(t*2+i)*(2+danger*4),2,4,colors.foam);
    }
    polygon([[0,height*.59],[width*.19,height*.60],[width*.22,height*.75],[width*.14,height],
      [0,height]],colors.station);
    if(saved) bean(width*.11,height*.63-36,.86,colors['bean-ice'],t,{hat:true,celebrate:true});
  }

  function drawSpace(t,progress,danger) {
    sky(colors.space,colors['space-low']);
    for(let i=0;i<44;i++) {
      const x=((i*137+43)%997)/997*width;
      const y=((i*79+13)%233)/233*height;
      ellipse(x,y,i%5===0?1.6:.8,i%5===0?1.6:.8,colors.boat);
      if(danger>=.75) line([[x+3,y],[x+6+danger*7,y-1]],colors.foam,.7);
    }
    ellipse(width*.87,height*.30,47,47,colors.sea);
    context.strokeStyle=colors.foam;
    context.lineWidth=7;
    context.beginPath();
    context.ellipse(width*.87,height*.30,68,17,-.35,0,Math.PI*2);
    context.stroke();
    const shipX=width*.77,shipY=height*.66;
    roundedBox(shipX-35,shipY-48,96,67,27,colors.boat);
    roundedBox(shipX-29,shipY-30,38,45,13,colors['boat-ink']);
    roundedBox(shipX+19,shipY-35,26,22,7,colors.sea);
    line([[shipX+10,shipY+20],[shipX+10,shipY+39]],colors.orange,5);
    const failed=state.phase==='failed';
    const saved=state.phase==='rescued';
    const x=width*(saved?.70:failed?.065:.38-danger*.24);
    const y=height*(saved?.60:.53)+Math.sin(t*(.9+danger))*4;
    rope([shipX-30,shipY],[width*.48,height*(.92-danger*.13)],[x+25,y+9],danger,failed);
    if(danger>=.75&&!saved) {
      context.globalAlpha=.75;
      for(let i=0;i<5;i++) {
        const offset=30+i*12+(t*15)%12;
        ellipse(x+offset,y+8+i*3,1.5+i*.5,1.5+i*.5,colors.foam);
      }
      context.globalAlpha=1;
    }
    roundedBox(x-22,y-14,13,36,4,colors.boat);
    bean(x,y,.85,colors['bean-space'],t,{helmet:true,failed,celebrate:saved,
      rotation:failed?-.9:-danger*.25+Math.sin(t*(.6+danger))*danger*.11});
  }

  function atmosphere(danger) {
    if(danger<.5||state.phase==='rescued') return;
    const vignette=context.createRadialGradient(width*.34,height*.57,Math.min(width,height)*.16,
      width*.45,height*.5,Math.max(width,height)*.72);
    vignette.addColorStop(0,'transparent');
    vignette.addColorStop(1,colors.shadow);
    context.globalAlpha=(danger-.3)*.65;
    context.fillStyle=vignette;
    context.fillRect(0,0,width,height);
    context.globalAlpha=(danger-.35)*.14;
    context.fillStyle=colors.hazard;
    context.fillRect(0,0,width,height);
    context.globalAlpha=1;
  }

  function drawScene(time) {
    state=getState();
    if(!context||!colors.sea||state.mode==='codebreaker') return;
    context.clearRect(0,0,width,height);
    const progress=state.history.length/Math.max(1,state.total||8);
    const danger=state.phase==='rescued'?0:Math.min(1,(5-state.energy)/4);
    const renderers={water:drawWater,rail:drawRail,cliff:drawCliff,ice:drawIce,space:drawSpace};
    renderers[state.scenario](time,progress,danger);
    atmosphere(danger);
  }

  function resizeScene() {
    const bounds=scene.getBoundingClientRect();
    width=Math.max(1,bounds.width);
    height=Math.max(1,bounds.height);
    const ratio=Math.min(window.devicePixelRatio||1,2);
    scene.width=Math.round(width*ratio);
    scene.height=Math.round(height*ratio);
    context.setTransform(ratio,0,0,ratio,0,0);
    updateColors();
    drawScene(0);
  }
  function animate(time) {
    if(!active||!root.isConnected) return;
    if(!reducedMotion.matches&&!document.hidden) drawScene(time/1000);
    animationId=requestAnimationFrame(animate);
  }
  const resizeObserver=new ResizeObserver(resizeScene);
  resizeObserver.observe(scene);
  const themeObserver=new MutationObserver(()=>{updateColors();drawScene(0);});
  themeObserver.observe(document.documentElement,{attributes:true,attributeFilter:['class','style','data-theme']});
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{updateColors();drawScene(0);});
  reducedMotion.addEventListener('change',()=>drawScene(0));

  updateColors();resizeScene();animationId=requestAnimationFrame(animate);
  return {draw:drawScene,resize:resizeScene,destroy(){active=false;cancelAnimationFrame(animationId);resizeObserver.disconnect();themeObserver.disconnect();}};
}
