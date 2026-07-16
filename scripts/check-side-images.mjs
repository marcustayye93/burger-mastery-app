import {sides} from "../js/sides-data.js";
import {steakSides} from "../js/steak-sides-data.js";

const toDerived=(u,w)=>u.includes("/main/images/")&&u.includes("/derived/")===false?u.replace("/main/images/",`/main/images/derived/w${w}/`):u;
const check=async(u)=>{try{const r=await fetch(u,{method:"HEAD"});return r.status;}catch(e){return "ERR";}};

let bad=0;
for(const s of [...sides,...steakSides]){
  const urls=[s.hero,...(s.steps||[]).map(x=>x.image)];
  for(const u of urls){
    const d480=toDerived(u,480);
    const st=await check(d480);
    if(st!==200){bad++;console.log("BAD",st,s.id,d480);}
  }
}
console.log(bad===0?"ALL SIDE IMAGES OK":`${bad} BAD side images`);
