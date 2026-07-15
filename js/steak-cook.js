// Meat Mastery v2.0.0 — Cook This Protocol.
// Compiles the Steak Designer's protocol into a recipe-shaped cook-along story
// that openRecipeStory renders unchanged (timer parsing, jump-to-step, progress).
import {assets} from "./assets.js";
import {cmToIn} from "./steak-designer-data.js";
const HERO=()=>assets.heroSteak,A=assets;
function prepSlides(m){
  const s=[];
  if(m.pr.id==="brine24h")s.push({image:A.stkBrine,kicker:"24 HOURS AHEAD",title:"The overnight dry brine",body:`Salt every face of the ${m.cut.label.toLowerCase()} generously — about 1% of its weight — set it on a rack over a tray, and refrigerate uncovered for 24 hours. The salt dissolves, travels deep, and the fridge air dries the surface bone-dry for a steakhouse sear.`});
  else if(m.pr.id==="brine1h")s.push({image:A.stkBrine,kicker:"1 HOUR AHEAD",title:"The one-hour dry brine",body:`Salt every face of the ${m.cut.label.toLowerCase()} — about 1% of its weight — and rest it on a rack in the fridge for 1 hour. Never salt 10–40 minutes ahead: that window pulls moisture out with no time to reabsorb it.`});
  else s.push({image:A.stkBrine,kicker:"PREP",title:"Salt at the last moment",body:"Pat the steak completely dry with paper towel, then salt every face generously right before it hits the heat. Salting now keeps the surface dry — the enemy of a crust is moisture."});
  s.push({image:A.stkMise,kicker:"MISE EN PLACE",title:"Everything on the bench",body:`Tonight's protocol: ${m.cut.label}, ${m.th.cm} cm (${cmToIn(m.th.cm)} in), ${m.gr.label.toLowerCase()}, taken to ${m.dn.label.toLowerCase()} (${m.dn.band}) by ${m.me.label.toLowerCase()}. You need: ${m.me.gear.toLowerCase()}. A probe thermometer is not optional — colour lies, the probe doesn't.`});
  return s;
}
function cookSlides(m){
  const s=[];
  if(m.me.id==="pan"){
    s.push({image:A.stkPanHeat,kicker:"THE PAN",title:"Heat until it just smokes",body:`Get the ${m.gr.id==="wagyu"?"pan to a moderate-high heat — wagyu fat renders fast and burns hot":"cast iron ripping hot — a drop of water should skitter and vanish"}. Add a thin film of high-smoke-point oil. ${m.gr.heatNote||""}`});
    s.push({image:A.stkPanSear,kicker:"THE SEAR",title:"Continuous 30-second flips",body:`Lay the steak away from you and flip every 30 seconds. Constant flipping keeps both faces building crust while the interior climbs gently and evenly — expect around ${m.cookMin} minutes total, but the thermometer decides, not the clock.`});
    if(m.fi.id==="baste")s.push({image:A.stkBaste,kicker:"THE BASTE",title:"Butter, garlic, thyme — late",body:"Only once the crust has formed, add a knob of butter, two crushed garlic cloves and a few thyme sprigs. Tilt the pan and spoon the foaming butter over the steak for the final 60–90 seconds. Added earlier, the milk solids burn around 150°C."});
    s.push({image:A.stkProbe,kicker:"THE PULL",title:`Pull at ${m.pull}°C`,body:`Probe the thickest part from the side. ${m.pullNote} Out at ${m.pull}°C — it will coast into the ${m.dn.band} window on the plate.`});
  } else if(m.me.id==="grill"){
    s.push({image:A.stkGrill,kicker:"TWO ZONES",title:"Build a hot side and a cool side",body:"All burners high on one side, off or low on the other. Clean, oiled grates. The hot zone is for crust; the cool zone is where the steak actually finishes cooking."});
    s.push({image:A.stkGrill,kicker:"THE SEAR",title:"Sear hot, finish cool",body:`Sear over the flames 1–2 minutes per side until deeply marked, then move to the cool zone, lid down, flipping occasionally. ≈${m.cookMin} minutes total — but probe, don't guess.${m.cut.id==="picanha"?" Start fat-cap down over medium flame first to render the cap.":""}`});
    s.push({image:A.stkProbe,kicker:"THE PULL",title:`Pull at ${m.pull}°C`,body:`${m.pullNote} Watch for flare-ups as fat renders — move the steak, don't fight the flame.`});
  } else if(m.me.id==="oven"){
    s.push({image:A.stkPanSear,kicker:"THE SEAR",title:"Hard sear on the hob",body:"Get an oven-safe pan very hot with a film of oil. Sear the steak about 90 seconds per side — you're building the crust now, because the oven won't."});
    s.push({image:A.stkOven,kicker:"THE OVEN",title:"Finish at 180°C",body:`Slide the whole pan into a 180°C oven. It finishes gently and evenly — around ${Math.round(m.th.cm*3.6)} minutes, probing from about two-thirds of the expected time.`});
    s.push({image:A.stkProbe,kicker:"THE PULL",title:`Pull at ${m.pull}°C`,body:m.pullNote});
  } else if(m.me.id==="airfry"){
    s.push({image:A.stkAirfry,kicker:"THE SETUP",title:"200°C, preheated, oiled steak",body:"Preheat the air fryer at 200°C for 5 minutes — a cold basket steams instead of searing. Rub the steak itself (not the basket) with a little oil."});
    s.push({image:A.stkAirfry,kicker:"THE COOK",title:"Flip once at halfway",body:`Cook ≈${m.cookMin} minutes at 200°C, flipping once at the midpoint. Circulating air cooks remarkably evenly — the trade is a lighter crust than cast iron gives.`});
    s.push({image:A.stkProbe,kicker:"THE PULL",title:`Pull at ${m.pull}°C`,body:`${m.pullNote} Probe early — air fryers vary more between models than any pan does.`});
  } else if(m.me.id==="reverse"){
    s.push({image:A.stkReverseRack,kicker:"THE SLOW PHASE",title:"Low oven, wire rack",body:`Oven at 100–120°C, steak on a wire rack over a tray, probe in the core. You're waiting for ${m.pull}°C — roughly ${Math.round(m.th.cm*11)} minutes for ${m.th.cm} cm (${cmToIn(m.th.cm)} in), but the probe is the only clock that matters.`});
    s.push({image:A.stkRest,kicker:"THE HANDOVER",title:"Rest while the pan heats",body:`At ${m.pull}°C, out of the oven. Rest the steak on the rack for 5 minutes while you get a pan ripping hot — this IS the rest; there won't be one after the sear.`});
    s.push({image:A.stkPanSear,kicker:"THE SEAR",title:"60–90 seconds per side",body:`Thin film of oil, steak in, 60–90 seconds per side plus the fat edges${m.fi.id==="baste"?", spooning foaming garlic-thyme butter over the top in the final minute":""}. The surface is already bone-dry from the oven — the crust arrives almost instantly.`});
    s.push({image:A.stkSlice,kicker:"SERVE NOW",title:"No second rest",body:`Straight to the board. A reverse-seared steak needs no post-sear rest — carryover was spent before the sear. It's sitting in the ${m.dn.band} window right now; every minute of waiting only costs you crust.`});
  } else {
    s.push({image:A.stkSousvide,kicker:"THE BATH",title:`Set the bath to ${m.target}°C exactly`,body:`Sous vide has zero carryover — the bath temperature IS your ${m.dn.label.toLowerCase()} target. Bag the steak with a sprig of thyme, drop it in, and hold at least ${m.cookMin<90?"1 hour":m.cookMin<150?"2 hours":"3 hours"} for ${m.th.cm} cm (${cmToIn(m.th.cm)} in). It cannot overshoot.`});
    s.push({image:A.stkMise,kicker:"THE DRY-OFF",title:"Bone-dry before the sear",body:"Out of the bag, pat aggressively dry with paper towel — a wet surface steams, and you have no cooking budget left to waste on evaporation."});
    s.push({image:A.stkPanSear,kicker:"THE FLASH SEAR",title:"45–60 seconds per side",body:`Ripping-hot pan, thin film of oil, 45–60 seconds per side — crust only, the inside is already perfect${m.fi.id==="baste"?". Spoon in foaming butter, garlic and thyme for the last 30 seconds":""}.`});
  }
  return s;
}
function finishSlides(m){
  const s=[];
  if(m.restMin>0)s.push({image:A.stkRest,kicker:"THE REST",title:`Rest ${m.restMin} minutes`,body:`${m.restNote} The fibres relax and the juices thicken — cut now and they end up on the board instead of in the bite. Expect the core to settle into ${m.dn.band}.`});
  if(m.fi.id==="compound")s.push({image:A.stkButter,kicker:"THE FINISH",title:"Compound butter on top",body:"Set a disc of herb-garlic butter on the steak as it rests — the resting heat melts it into a glossy pan-sauce-in-place. Zero extra effort, maximum effect."});
  if(m.fi.id==="salt")s.push({image:A.stkSlice,kicker:"THE FINISH",title:"Finishing salt on the cut face",body:"After slicing, scatter flaky salt over the exposed faces — crunch and seasoning land exactly where the tongue touches first."});
  s.push({image:A.stkSlice,kicker:"THE SLICE",title:m.cut.slicing.split(";")[0],body:`${m.cut.slicing} ${m.cut.id==="flank"||m.cut.id==="rump"?"Against the grain is the difference between tender and rope — the knife does what the doneness can't.":"A sharp knife and one confident stroke per slice keeps the juice inside."}`});
  return s;
}
export function generateSteakStory(protocol,m){
  const steps=[...prepSlides(m),...cookSlides(m),...finishSlides(m)];
  const warnCount=m.warnings.length;
  return {
    id:"steak-custom-build",
    title:protocol.name||"My Steak",
    collection:"MY PROTOCOL",
    hero:HERO(),
    flavour:m.cut.flavour.split("—")[0].trim(),
    texture:m.cut.character,
    time:`${m.totalMin} min${m.prepMin>=60?` + ${m.prepMin>=1440?"24 h":"1 h"} brine`:""}`,
    difficulty:m.me.advanced?"Advanced technique":warnCount?"Needs attention":"Straightforward",
    macros:{calories:`${m.pull}°C`,protein:`${m.target}°C`,fat:`${m.cookMin} min`,carbs:m.restMin?`${m.restMin} min`:"serve now"},
    macroLabels:{calories:"pull temp",protein:"target",fat:"cook",carbs:"rest"},
    ingredients:[`${m.cut.label} · ${m.th.cm} cm (${cmToIn(m.th.cm)} in) · ${m.gr.label}`,m.pr.label,`${m.me.label} — ${m.me.gear}`,`Target: ${m.dn.label} (${m.dn.band})`,m.fi.label],
    steps,
    custom:true,
    steak:true
  };
}
