// Meat Mastery v2.0.0 — Steak Designer catalogue + protocol metrics engine.
// The Designer builds a cooking PROTOCOL, not a nutrition profile: the engine
// computes pull temperature (method-dependent carryover), cook time, rest time
// and honest warnings. Chef-reviewed rules: pan sear/grill pull 4–6°C below
// target with thickness-scaled rest; oven-finish +3–5°C carryover; air fry pull
// 1–2°C shy; reverse sear pull ~10°C below (incl. final sear) and serve
// immediately; sous vide bath at target with zero carryover.
export const steakCatalogue = {
  cuts: [
    {id:"ribeye",label:"Ribeye",marbling:5,tenderness:4,beefiness:5,priceTier:"Premium",
      flavour:"The most flavour-dense mainstream cut — rich, buttery, deeply beefy from heavy marbling and the spinalis cap.",
      character:"Heavily marbled with a luxurious fat cap",bestDoneness:"medium",donenessNote:"Heavy marbling only melts fully around medium — medium-rare leaves some fat unrendered.",
      bestMethods:["pan","reverse"],avoid:"Very high grill flames — rendering fat causes flare-ups.",
      slicing:"Slice across the face; separate the cap (spinalis) and eat it first."},
    {id:"striploin",label:"Striploin",marbling:4,tenderness:4,beefiness:4,priceTier:"Premium",
      flavour:"The steakhouse benchmark — firm, even bite with a clean, robust beef flavour and a signature fat rim.",
      character:"Even shape, moderate marbling, fat strip on one edge",bestDoneness:"mediumRare",donenessNote:"Medium-rare keeps the even grain tender; render the fat rim by standing it on edge.",
      bestMethods:["pan","grill"],avoid:"Overcooking — past medium it turns noticeably firm.",
      slicing:"Slice across the grain in finger-width strips."},
    {id:"filet",label:"Filet Mignon",marbling:2,tenderness:5,beefiness:2,priceTier:"Luxury",
      flavour:"The most tender cut of all — mild, delicate, almost buttery, with very little fat to carry flavour.",
      character:"Ultra-tender, ultra-lean, thick medallions",bestDoneness:"mediumRare",donenessNote:"With so little fat there is nothing to render — past medium it dries fast.",
      bestMethods:["pan","reverse"],avoid:"The grill — lean meat and open flame is an unforgiving pairing. Butter-baste in a pan instead.",
      slicing:"Serve whole as a medallion; it needs no slicing help."},
    {id:"rump",label:"Rump",marbling:2,tenderness:3,beefiness:4,priceTier:"Value",
      flavour:"The value king — big, honest beef flavour with a firmer chew that rewards precise cooking and thin slicing.",
      character:"Lean, hard-working muscle with a strong flavour",bestDoneness:"mediumRare",donenessNote:"Medium-rare is the ceiling — beyond it the lean muscle tightens quickly.",
      bestMethods:["pan","reverse"],avoid:"Well-done — rump has no fat reserve to survive it.",
      slicing:"Slice thin across the grain — thickness of a coin, not a finger."},
    {id:"flank",label:"Flank",marbling:2,tenderness:2,beefiness:5,priceTier:"Value",
      flavour:"Loud, intensely beefy and fast — a thin, fibrous cut built for ripping heat and strict against-the-grain slicing.",
      character:"Thin, long visible grain, tapered profile",bestDoneness:"rare",donenessNote:"Rare to medium-rare only — the coarse fibres turn to rope past that.",
      bestMethods:["pan","grill"],avoid:"Slow methods — flank is too thin for reverse sear; it overshoots in minutes.",
      slicing:"Non-negotiable: slice thin, at 45°, against the visible grain."},
    {id:"sirloin",label:"Sirloin",marbling:3,tenderness:3,beefiness:4,priceTier:"Everyday",
      flavour:"The everyday all-rounder — balanced beef flavour, moderate tenderness, forgiving price. The weeknight default.",
      character:"Balanced marbling and chew at an honest price",bestDoneness:"mediumRare",donenessNote:"Happy from rare to medium — the most flexible cut on the board.",
      bestMethods:["pan","grill","airfry"],avoid:"Nothing in particular — just don't expect ribeye richness.",
      slicing:"Slice across the grain in medium strips."},
    {id:"picanha",label:"Picanha",marbling:3,tenderness:3,beefiness:5,priceTier:"Value",
      flavour:"The Brazilian favourite — a thick, sweet fat cap that bastes the meat as it renders, over a loud, mineral beef base.",
      character:"Triangular rump cap crowned with a solid fat cap",bestDoneness:"mediumRare",donenessNote:"Start fat-cap down on medium heat to render, then sear the meat sides hard.",
      bestMethods:["grill","pan","reverse"],avoid:"Trimming the fat cap off — it IS the cut.",
      slicing:"Slice with the grain into steaks first, then against the grain to serve (churrasco style)."}
  ],
  thicknesses: [
    {id:"thin",label:"2.5 cm · fast sear",cm:2.5,restMin:5,note:"Cooks in minutes — continuous flipping keeps the gradient even."},
    {id:"standard",label:"4 cm · standard",cm:4,restMin:8,note:"The sweet spot: thick enough for a gradient, thin enough for the pan alone."},
    {id:"thick",label:"5+ cm · showpiece",cm:5.5,restMin:10,note:"Pan alone can't cook this evenly — reverse sear or sous vide territory."}
  ],
  grades: [
    {id:"standard",label:"Standard",note:"Honest supermarket beef — technique matters more than grade here.",heatNote:""},
    {id:"prime",label:"Prime / grain-fed",note:"Visibly better marbling — more forgiving, richer finish.",heatNote:""},
    {id:"wagyu",label:"Wagyu-style",note:"Extreme marbling that melts at low temperatures.",heatNote:"Use moderate pan heat — wagyu fat renders fast and smokes; and aim a level higher on doneness so the fat actually melts."}
  ],
  preparations: [
    {id:"now",label:"Salted just before cooking",note:"Salt at the last moment — the surface stays dry and sears cleanly. Never salt 10–40 minutes ahead: that window pulls moisture out without time to reabsorb."},
    {id:"brine1h",label:"1-hour dry brine",note:"Salt, rack, uncovered in the fridge for an hour — the salt dissolves, gets pulled back in, and seasons the outer layer."},
    {id:"brine24h",label:"24-hour dry brine",note:"The pro move: overnight uncovered on a rack. Deep seasoning and a bone-dry surface that sears like a steakhouse."}
  ],
  methods: [
    {id:"pan",label:"Pan Sear",gear:"Cast iron or carbon steel + probe thermometer",carryover:"Pull 4–6°C below target; the hot-pan gradient keeps cooking through the rest.",
      profile:"The reference technique: ripping-hot pan, continuous 30-second flips, butter baste at the end.",advanced:false},
    {id:"grill",label:"Gas Grill",gear:"Two-zone grill + probe thermometer",carryover:"Pull 4–6°C below target; rest as for pan searing.",
      profile:"Hard sear over the hot zone, finish over the cool zone. Lid down between flips for convection.",advanced:false},
    {id:"oven",label:"Sear + Oven",gear:"Oven-safe pan + 180°C oven",carryover:"Pull 3–5°C below target — the oven's gentler finish carries slightly less than a pure pan cook.",
      profile:"Sear hard on the hob, then slide the whole pan into the oven to finish gently and evenly.",advanced:false},
    {id:"airfry",label:"Air Fry",gear:"Air fryer at 200°C + probe thermometer",carryover:"Near-zero carryover — pull only 1–2°C shy of target.",
      profile:"Circulating air cooks evenly with minimal carryover. The crust is honest but never pan-deep.",advanced:false},
    {id:"reverse",label:"Reverse Sear",gear:"100–120°C oven + rack + screaming-hot pan",carryover:"Pull from the oven ~10°C below target — the final sear supplies the rest. Serve immediately, no post-sear rest.",
      profile:"Low oven first for a wall-to-wall even interior, short rest while the pan heats, then a 60–90 second ripping sear per side.",advanced:true},
    {id:"sousvide",label:"Sous Vide",gear:"Immersion circulator + bag + hot pan for finishing",carryover:"Zero carryover — the bath IS the target temperature. Sear fast after, just for the crust.",
      profile:"Set the bath to your exact doneness, walk away, then flash-sear 45–60 seconds per side. Unmissable, unhurried.",advanced:true}
  ],
  donenesses: [
    {id:"rare",label:"Rare",temp:49,band:"49–52°C",feel:"Cool-to-warm red centre, maximum moisture, minimal fat rendering.",
      warning:"",bestFor:"Flank, filet and lean cuts sliced thin."},
    {id:"mediumRare",label:"Medium-Rare",temp:54,band:"54–57°C",feel:"Warm rosy centre — juicy with the fat just beginning to melt.",
      warning:"",bestFor:"Striploin, sirloin, rump — the all-round sweet spot."},
    {id:"medium",label:"Medium",temp:60,band:"60–63°C",feel:"Pink centre, firmer bite — intramuscular fat properly rendered.",
      warning:"",bestFor:"Ribeye, picanha and wagyu — fat-rich cuts shine here."},
    {id:"mediumWell",label:"Medium-Well",temp:66,band:"65–68°C",feel:"Slim pink line, notably firmer — most of the juice has been driven out.",
      warning:"Honest warning: past 63°C the muscle fibres squeeze hard. Only fat-rich cuts keep any succulence here.",bestFor:"Heavily marbled ribeye or picanha only."},
    {id:"wellDone",label:"Well-Done",temp:71,band:"71°C+",feel:"Grey throughout, dense and dry — the fibres have given up their moisture.",
      warning:"Honest warning: at 71°C+ no technique can preserve juiciness. If you must, choose the fattest cut available and slice thin.",bestFor:"Only fat-rich cuts survive it. We'll cook it properly — but consider medium-well."}
  ],
  finishes: [
    {id:"baste",label:"Butter baste · garlic & thyme",note:"Add butter, crushed garlic and thyme AFTER the crust forms — milk solids burn around 150°C. Tilt and spoon for the final 60–90 seconds."},
    {id:"compound",label:"Compound butter",note:"A disc of herb-garlic butter melting over the resting steak — the rest time does the work for you."},
    {id:"salt",label:"Finishing salt",note:"Flaky salt on the sliced face just before serving — crunch, sparkle, and seasoning exactly where the tongue lands first."},
    {id:"none",label:"No finish",note:"Purist mode: the steak stands on its crust and its seasoning alone."}
  ]
};
export const defaultProtocol = {name:"My Steak",cut:"ribeye",thickness:"standard",grade:"standard",preparation:"brine1h",method:"pan",doneness:"mediumRare",finish:"baste"};
const byId=(a,id)=>a.find(x=>x.id===id)||a[0];
export function steakMetrics(p=defaultProtocol){
  const cut=byId(steakCatalogue.cuts,p.cut),th=byId(steakCatalogue.thicknesses,p.thickness),gr=byId(steakCatalogue.grades,p.grade),pr=byId(steakCatalogue.preparations,p.preparation),me=byId(steakCatalogue.methods,p.method),dn=byId(steakCatalogue.donenesses,p.doneness),fi=byId(steakCatalogue.finishes,p.finish);
  const target=dn.temp;
  // Method-dependent pull temperature (chef-reviewed carryover rules).
  let pull,pullNote,restMin,restNote;
  if(me.id==="pan"||me.id==="grill"){pull=target-5;pullNote=`Pull at ${pull}°C — a hot-${me.id==="pan"?"pan":"grill"} cook carries +4–6°C through the rest.`;restMin=th.restMin;restNote=`${restMin} minutes under loose foil — scaled to ${th.cm} cm thickness.`;}
  else if(me.id==="oven"){pull=target-4;pullNote=`Pull at ${pull}°C — the gentle oven finish carries +3–5°C.`;restMin=th.restMin;restNote=`${restMin} minutes — the pan sear at the start still banked surface heat.`;}
  else if(me.id==="airfry"){pull=target-2;pullNote=`Pull at ${pull}°C — circulating air leaves almost no carryover, so stay close to target.`;restMin=Math.max(3,th.restMin-3);restNote=`${restMin} minutes — a short rest is enough with so little carryover.`;}
  else if(me.id==="reverse"){pull=target-10;pullNote=`Pull from the oven at ${pull}°C — the ripping final sear supplies the last ~10°C.`;restMin=0;restNote="No post-sear rest — the resting effectively happened before the sear. Slice and serve immediately.";}
  else {pull=target;pullNote=`Set the bath to ${target}°C exactly — sous vide has zero carryover. The steak cannot overshoot.`;restMin=2;restNote="2 minutes after the flash sear, just to settle the surface.";}
  // Cook time model (minutes), by method and thickness.
  const cm=th.cm;let cookMin,cookNote;
  if(me.id==="pan"){cookMin=Math.round(cm*3+(gr.id==="wagyu"?2:0));cookNote=`≈${cookMin} min of continuous 30-second flips${gr.id==="wagyu"?" at moderate heat (wagyu fat smokes early)":""} — thermometer decides, not the clock.`;}
  else if(me.id==="grill"){cookMin=Math.round(cm*3.2);cookNote=`≈${cookMin} min two-zone: hard sear over the flames, finish lid-down on the cool side.`;}
  else if(me.id==="oven"){cookMin=Math.round(4+cm*3.6);cookNote=`≈4 min searing + ≈${Math.round(cm*3.6)} min in the oven at 180°C.`;}
  else if(me.id==="airfry"){cookMin=Math.round(cm*4.2);cookNote=`≈${cookMin} min at 200°C, flipped once halfway.`;}
  else if(me.id==="reverse"){cookMin=Math.round(cm*11+3);cookNote=`≈${Math.round(cm*11)} min in a 100–120°C oven to ${pull}°C core + ≈3 min final sear.`;}
  else {cookMin=Math.round(cm<=2.5?60:cm<=4?120:180);cookNote=`${cookMin/60} hour${cookMin>60?"s":""} in the bath (minimum — an extra hour changes nothing) + 2 min flash sear.`;}
  const prepMin=pr.id==="now"?0:pr.id==="brine1h"?60:1440;
  const totalMin=cookMin+restMin;
  // Honest warnings.
  const warnings=[];
  if(dn.warning)warnings.push([dn.label,dn.warning]);
  if(cm>=5&&me.id!=="reverse"&&me.id!=="sousvide")warnings.push(["Thickness vs method",`A ${cm} cm cut can't cook evenly with ${me.label.toLowerCase()} alone — the edge overcooks long before the centre arrives. Switch to reverse sear or sous vide.`]);
  if(cm<=2.5&&me.id==="reverse")warnings.push(["Overkill alert","A 2.5 cm steak overshoots in a low oven within minutes — reverse sear needs 4 cm+. Use a straight pan sear with continuous flips instead."]);
  if(cut.id==="filet"&&me.id==="grill")warnings.push(["Cut vs method","Filet is too lean for open flame — it dries at the edges before the crust arrives. Butter-basted pan sear is the classic route."]);
  if(cut.id==="flank"&&(me.id==="reverse"||me.id==="sousvide"))warnings.push(["Cut vs method","Flank is too thin for slow methods — it flies past target. Ripping-hot pan or grill, minutes not hours."]);
  if(gr.id==="wagyu"&&dn.id==="rare")warnings.push(["Wagyu at rare","At 49°C wagyu's signature fat stays waxy and unrendered — its magic starts at medium-rare and peaks at medium."]);
  if(cut.id==="ribeye"&&dn.id==="rare")warnings.push(["Ribeye at rare","Ribeye's marbling barely melts at 49°C — you paid for fat that stays chewy. Medium-rare minimum, medium is honest advice."]);
  if(gr.id==="wagyu"&&(me.id==="grill"))warnings.push(["Wagyu on the grill","Rendering wagyu fat causes serious flare-ups — keep it moving, or use the pan at moderate heat."]);
  // Eating-experience scores (0-100).
  const donenessFactor={rare:0,mediumRare:1,medium:2,mediumWell:3,wellDone:4}[dn.id];
  const crust=Math.min(100,Math.round((me.id==="reverse"?92:me.id==="pan"?90:me.id==="grill"?88:me.id==="sousvide"?80:me.id==="oven"?84:72)+(pr.id==="brine24h"?6:pr.id==="brine1h"?3:0)));
  const juiciness=Math.max(20,Math.round(96-donenessFactor*14+cut.marbling*2-(me.id==="sousvide"?-4:0)));
  const tenderness=Math.max(25,Math.round(cut.tenderness*16+(me.id==="sousvide"?10:me.id==="reverse"?6:0)-donenessFactor*6+16));
  const render=Math.min(100,Math.round(30+donenessFactor*16+cut.marbling*4+(gr.id==="wagyu"?8:gr.id==="prime"?4:0)));
  const effort=Math.min(100,Math.round(me.id==="airfry"?25:me.id==="oven"?45:me.id==="pan"?55:me.id==="grill"?60:me.id==="sousvide"?70:80)+(pr.id==="brine24h"?10:0));
  const match=(cut.bestMethods.includes(me.id)?30:10)+(cut.bestDoneness===dn.id?30:dn.id==="mediumRare"||dn.id==="medium"?20:10)+(warnings.length===0?40:Math.max(0,40-warnings.length*15));
  return {cut,th,gr,pr,me,dn,fi,target,pull,pullNote,restMin,restNote,cookMin,cookNote,prepMin,totalMin,warnings,
    scores:{crust,juiciness,tenderness,render:Math.min(render,100),effort},match:Math.min(100,match)};
}
