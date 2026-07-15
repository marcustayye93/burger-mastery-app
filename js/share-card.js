// v2.2.0 — Shareable build cards. Pure-canvas typography cards (no external images, so
// no CORS taint and instant generation). 1080x1350 portrait, brand palette.
const BG="#0d0b0a",PANEL="#171310",EMBER="#e8734a",CREAM="#f2e9dd",MUTE="#9a8d80",LINE="#2a231e";
function roundRect(x,c,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
function wrapText(c,text,x,y,maxW,lh){const words=String(text).split(" ");let line="",yy=y;for(const w of words){const t=line?line+" "+w:w;if(c.measureText(t).width>maxW&&line){c.fillText(line,x,yy);line=w;yy+=lh;}else line=t;}if(line)c.fillText(line,x,yy);return yy;}
export function makeShareCard(data){
  // data: {eyebrow,title,subtitle,stats:[{v,l}x4],rows:[{label,val}],score:{v,l},footer}
  const W=1080,H=1350,cv=document.createElement("canvas");cv.width=W;cv.height=H;const c=cv.getContext("2d");
  c.fillStyle=BG;c.fillRect(0,0,W,H);
  // ember top rule + subtle diagonal accent
  c.fillStyle=EMBER;c.fillRect(0,0,W,10);
  c.save();c.globalAlpha=.05;c.fillStyle=EMBER;c.beginPath();c.moveTo(W,0);c.lineTo(W,540);c.lineTo(W-460,0);c.closePath();c.fill();c.restore();
  // eyebrow
  c.fillStyle=EMBER;c.font="600 34px -apple-system,system-ui,sans-serif";c.textBaseline="top";
  c.fillText(String(data.eyebrow||"MEAT MASTERY").toUpperCase().split("").join("\u200a"),80,96);
  // title
  c.fillStyle=CREAM;c.font="800 92px -apple-system,system-ui,sans-serif";
  const tEnd=wrapText(c,data.title,80,170,W-160,104);
  // subtitle
  c.fillStyle=MUTE;c.font="400 40px -apple-system,system-ui,sans-serif";
  const sEnd=wrapText(c,data.subtitle||"",80,tEnd+128,W-160,54);
  // score badge (right aligned under subtitle area)
  let y=sEnd+110;
  if(data.score){c.save();roundRect(80,c,y,W-160,150,26);c.fillStyle=PANEL;c.fill();c.strokeStyle=LINE;c.lineWidth=2;c.stroke();
    c.fillStyle=EMBER;c.font="800 84px -apple-system,system-ui,sans-serif";c.fillText(String(data.score.v),120,y+34);
    const sw=c.measureText(String(data.score.v)).width;
    c.fillStyle=MUTE;c.font="500 36px -apple-system,system-ui,sans-serif";c.fillText(data.score.l,120+sw+28,y+62);c.restore();y+=190;}
  // stat grid 2x2
  if(data.stats&&data.stats.length){const gw=(W-160-24)/2,gh=170;
    data.stats.slice(0,4).forEach((s,i)=>{const gx=80+(i%2)*(gw+24),gy=y+Math.floor(i/2)*(gh+24);
      roundRect(gx,c,gy,gw,gh,22);c.fillStyle=PANEL;c.fill();c.strokeStyle=LINE;c.lineWidth=2;c.stroke();
      c.fillStyle=CREAM;c.font="800 64px -apple-system,system-ui,sans-serif";c.fillText(String(s.v),gx+36,gy+30);
      c.fillStyle=MUTE;c.font="500 32px -apple-system,system-ui,sans-serif";c.fillText(String(s.l).toUpperCase(),gx+36,gy+108);});
    y+=Math.ceil(Math.min(data.stats.length,4)/2)*(gh+24)+30;}
  // spec rows
  if(data.rows&&data.rows.length){roundRect(80,c,y,W-160,data.rows.length*74+50,26);c.fillStyle=PANEL;c.fill();c.strokeStyle=LINE;c.lineWidth=2;c.stroke();
    data.rows.forEach((r,i)=>{const ry=y+40+i*74;
      c.fillStyle=MUTE;c.font="500 34px -apple-system,system-ui,sans-serif";c.fillText(String(r.label).toUpperCase(),120,ry);
      c.fillStyle=CREAM;c.font="700 40px -apple-system,system-ui,sans-serif";const vw=c.measureText(String(r.val)).width;c.fillText(String(r.val),W-120-vw,ry-6);
      if(i<data.rows.length-1){c.strokeStyle=LINE;c.lineWidth=1;c.beginPath();c.moveTo(120,ry+52);c.lineTo(W-120,ry+52);c.stroke();}});
    y+=data.rows.length*74+80;}
  // footer
  c.fillStyle=EMBER;c.fillRect(80,H-140,64,6);
  c.fillStyle=MUTE;c.font="500 32px -apple-system,system-ui,sans-serif";
  c.fillText(data.footer||"meat mastery · marcustayye93.github.io/burger-mastery-app",80,H-114);
  return cv;
}
export async function shareCanvas(cv,filename,shareTitle){
  const blob=await new Promise(res=>cv.toBlob(res,"image/png"));
  if(!blob)return false;
  const file=new File([blob],filename,{type:"image/png"});
  if(navigator.canShare&&navigator.canShare({files:[file]})){try{await navigator.share({files:[file],title:shareTitle});return true;}catch(e){if(e.name==="AbortError")return true;}}
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},800);
  return true;
}
