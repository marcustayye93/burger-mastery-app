// v2.0.0 — Signature steak cook-alongs. Same shape as burger recipes so
// openRecipeStory renders them unchanged; macroLabels swaps the kcal grid
// for protocol stats (pull °C / target °C / cook min / rest min).
import {assets} from "./assets.js";
const L={calories:"°C pull",protein:"°C target",fat:"min cook",carbs:"min rest"};
export const steakRecipes=[
{
id:"stk-butter-basted-ribeye",title:"Butter-Basted Ribeye",collection:"Signature Steaks",
hero:assets.stkBaste,
flavour:"Rich, nutty, deeply beefy",texture:"Dark crust, rosy medium-rare centre",time:"25 min + 1 h brine",difficulty:"The benchmark",
macros:{calories:49,protein:54,fat:12,carbs:8},macroLabels:L,
ingredients:["1 ribeye, 4 cm / 1.6 in thick (about 400 g)","Fine salt","30 g butter","2 garlic cloves, crushed","3 sprigs thyme","Neutral high-smoke-point oil","Instant-read thermometer"],
doneTitle:"The reference steak.",
doneBody:"This is the technique every other method is measured against. Once your flips are steady and your pulls are honest, every cut in the catalogue opens up. Log the protocol in your Steak Lab and refine the pull temperature next cook.",
steps:[
{image:assets.stkBrine,kicker:"PREP",title:"Dry brine for an hour",body:"Salt every face generously and rest the steak on a rack, uncovered, in the fridge for an hour. The salt dissolves, gets drawn back in, and seasons the outer layer while the surface dries — a dry surface is what makes the crust possible. Never salt 10–40 minutes ahead; that window leaves moisture stranded on the surface."},
{image:assets.stkMise,kicker:"MISE EN PLACE",title:"Everything within reach",body:"Butter cut and waiting, garlic crushed, thyme picked, thermometer on the board, tongs in hand. Butter basting happens fast at the end — there is no time to hunt through drawers with a steak in the pan."},
{image:assets.stkPanHeat,kicker:"THE PAN",title:"Heat cast iron until it just smokes",body:"A film of neutral oil in a cast-iron pan over high heat until the first wisps of smoke rise. Cast iron holds its temperature when the cold steak lands — that stored heat is what buys you the crust."},
{image:assets.stkPanSear,kicker:"THE SEAR",title:"Flip every 30 seconds",body:"Lay the steak away from you and flip every 30 seconds. Continuous flipping builds an even crust on both faces while the interior climbs gently and evenly — no grey band, no scorched face. Expect roughly 12 minutes for a 4 cm (1.6 in) cut, but the thermometer decides, not the clock."},
{image:assets.stkBaste,kicker:"THE BASTE",title:"Butter, garlic, thyme — late",body:"In the final 3 minutes, drop in the butter, garlic and thyme. Tilt the pan and spoon the foaming butter over the steak in waves. Basting arrives late deliberately: butter solids burn if they ride along from the start."},
{image:assets.stkProbe,kicker:"THE PULL",title:"Out at 49°C",body:"Probe the thickest part from the side. At 49°C the steak comes out — the hot-pan gradient carries another 4–6°C through the rest, landing the centre at 54°C medium-rare. Pulling on time takes nerve; trust the number."},
{image:assets.stkRest,kicker:"THE REST",title:"Eight patient minutes",body:"Rest the steak on a warm board or rack for 8 minutes. The muscle relaxes and the juices redistribute and thicken. Slice immediately and they end up on the board instead of in the meat."},
{image:assets.stkSlice,kicker:"THE SLICE",title:"Across the face, cap first",body:"Slice across the grain of the eye. Separate the spinalis cap — the crescent of richly marbled muscle around the top — and eat it first, while it is warmest. It is the single best bite on the animal."}
]},
{
id:"stk-reverse-seared-showpiece",title:"Reverse-Seared Showpiece",collection:"Signature Steaks",
hero:assets.stkReverseRack,
flavour:"Even rosy interior, aggressive crust",texture:"Edge-to-edge medium-rare, no grey band",time:"About 1 h 15 min + 24 h brine",difficulty:"Thick-cut mastery",
macros:{calories:44,protein:54,fat:55,carbs:0},macroLabels:L,
ingredients:["1 thick-cut steak, 5 cm / 2 in or more (ribeye, striploin or a bone-in showpiece)","Fine salt","Neutral high-smoke-point oil","Wire rack and baking tray","Instant-read thermometer"],
doneTitle:"The showpiece, mastered.",
doneBody:"Reverse sear is the only honest route for cuts past 5 cm (2 in) — every other method overshoots the outside before the centre arrives. You now own the technique that handles tomahawks, thick porterhouses and every showpiece cut in the case.",
steps:[
{image:assets.stkBrine,kicker:"PREP",title:"24-hour dry brine",body:"A cut this thick deserves the full day. Salt generously, rack it uncovered in the fridge, and let the brine work overnight — deeper seasoning, drier surface, better crust. This is the step that separates good from unforgettable."},
{image:assets.stkReverseRack,kicker:"THE LOW OVEN",title:"Slow ride at 110°C",body:"Steak on a rack over a tray, into a 110°C oven. The gentle heat walks the interior up evenly — no gradient, no grey band. For 5 cm (2 in) expect 45 to 60 minutes, but probe from 35 minutes; ovens lie and thermometers do not."},
{image:assets.stkProbe,kicker:"THE FIRST PULL",title:"Out of the oven at 44°C",body:"Pull the steak when the deep centre reads 44°C — a full 10°C below the 54°C target. The remaining climb comes from the sear. Rest it on the rack while the pan heats; this pre-sear pause lets the surface dry and the heat equalise."},
{image:assets.stkPanHeat,kicker:"THE PAN",title:"Ripping hot, no apologies",body:"This sear has one job: crust, fast. Get the cast iron genuinely smoking with a film of oil. The interior is already cooked — every second in the pan is spent on the outside only."},
{image:assets.stkPanSear,kicker:"THE SEAR",title:"60 to 90 seconds a side",body:"Sear hard: 60 to 90 seconds per face, plus a minute standing on the fat edge with tongs to render it. The surface is bone dry from the oven ride, so the crust arrives almost instantly. Do not linger — past 2 minutes a side you start eating into the rosy interior."},
{image:assets.stkSlice,kicker:"SERVE",title:"No second rest — slice now",body:"Reverse sear breaks the resting rule: the interior equalised during the pre-sear pause, so the steak goes straight to the board. Slice across the grain and serve while the crust still crackles — edge-to-edge rose from face to face."}
]},
{
id:"stk-weeknight-flank",title:"Weeknight Flank Steak",collection:"Signature Steaks",
hero:assets.stkSlice,
flavour:"Big, open-grained beef flavour",texture:"Juicy ribbons when sliced right",time:"15 min",difficulty:"Fast and honest",
macros:{calories:49,protein:54,fat:6,carbs:5},macroLabels:L,
ingredients:["1 flank steak (about 500 g, 2–2.5 cm / 0.8–1 in)","Fine salt","Neutral high-smoke-point oil","Instant-read thermometer","A sharp slicing knife"],
doneTitle:"Dinner in fifteen minutes.",
doneBody:"Flank is the proof that great steak does not need a special occasion. High heat, an early pull, and a ruthless cross-grain slice — the whole technique fits inside a weeknight. It also takes marinades and rubs better than any premium cut.",
steps:[
{image:assets.stkMise,kicker:"PREP",title:"Salt it and dry it — now",body:"Flank is thin, so salt just before cooking and pat the surface aggressively dry. There is no time budget for a brine on a weeknight, and with this much surface area per bite, crust does most of the seasoning work anyway."},
{image:assets.stkPanHeat,kicker:"THE PAN",title:"Hotter than feels reasonable",body:"A thin cut needs maximum heat so the crust forms before the centre overshoots. Oil the pan and take it to full smoke. Open a window — this cook is loud and fast."},
{image:assets.stkPanSear,kicker:"THE SEAR",title:"Six minutes of constant flips",body:"Flip every 30 seconds for roughly 6 minutes total. On a cut this thin the margin for error is tiny — constant flipping is what keeps the inside from blowing past medium-rare while the outside browns."},
{image:assets.stkProbe,kicker:"THE PULL",title:"49°C and out",body:"Probe from the side into the thickest section and pull at 49°C for a 54°C medium-rare after rest. Flank past medium turns to rope — on this cut, the early pull is not a preference, it is the whole game."},
{image:assets.stkRest,kicker:"THE REST",title:"Five minutes, no more",body:"Rest 5 minutes under loose foil. A thin cut cools fast, so the rest is short — just long enough for the juices to settle before the knife work that makes or breaks this steak."},
{image:assets.stkSlice,kicker:"THE SLICE",title:"Thin, across the grain, on a bias",body:"Find the grain — on flank it runs boldly along the length. Slice thin ribbons across it at a slight angle. Cut correctly, flank chews like a steak twice its price; cut along the grain, the same meat is shoe leather. The knife decides."}
]},
{
id:"stk-perfect-filet",title:"The Perfect Filet Mignon",collection:"Signature Steaks",
hero:assets.stkButter,
flavour:"Delicate, clean, butter-finished",texture:"Velvet tenderness under a fine crust",time:"30 min + 1 h brine",difficulty:"Gentle precision",
macros:{calories:51,protein:54,fat:14,carbs:6},macroLabels:L,
ingredients:["2 filet mignon medallions, 4–5 cm / 1.6–2 in thick","Fine salt","20 g butter plus a compound butter disc to finish","Neutral high-smoke-point oil","Oven-safe pan","Instant-read thermometer"],
doneTitle:"Precision, plated.",
doneBody:"Filet has no fat to forgive you, which is exactly why mastering it matters — every degree shows. The sear-then-oven route plus a compound butter finish covers the cut's one weakness and showcases its one superpower: tenderness.",
steps:[
{image:assets.stkBrine,kicker:"PREP",title:"One-hour dry brine",body:"Salt all over — including the sides — and rack the medallions uncovered in the fridge for an hour. Filet is the leanest premium cut; with no marbling to carry flavour, the seasoning layer has to do more of the work."},
{image:assets.stkMise,kicker:"MISE EN PLACE",title:"Set up for two heats",body:"Oven preheating to 180°C, compound butter out of the fridge, thermometer ready. Filet runs a relay: a hard sear for the crust, then gentle oven heat to walk the tall, narrow centre up without punishing the outside."},
{image:assets.stkPanSear,kicker:"THE SEAR",title:"Two minutes a side, plus the edges",body:"Sear in a smoking oven-safe pan: about 2 minutes per face, then roll the medallions on their sides with tongs to brown the band all the way round. A filet is a cylinder — the edge is a third of its surface."},
{image:assets.stkOven,kicker:"THE OVEN",title:"Finish at 180°C",body:"Pan straight into the oven. The surrounding heat is gentler than the pan floor, letting the deep centre climb evenly — for 4 to 5 cm (1.6 to 2 in) medallions expect 4 to 7 minutes. Start probing at 4; thickness varies more than recipes admit."},
{image:assets.stkProbe,kicker:"THE PULL",title:"Out at 51°C",body:"Pull at 51°C — the oven finish carries roughly +3°C through the rest, landing at 54°C. Filet is at its best medium-rare; without fat to baste the interior, every degree past that is pure moisture lost."},
{image:assets.stkButter,kicker:"THE FINISH",title:"Compound butter on the rest",body:"Rest 6 minutes with a disc of compound butter melting over the top. This is the fat the cut was born without — garlic, herbs and butterfat sliding into every slice. Serve whole or halved to show the blush centre."}
]}
];
export const steakRecipeById=id=>steakRecipes.find(r=>r.id===id);
