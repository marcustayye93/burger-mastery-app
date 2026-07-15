// v2.0.0 — Steak flavour topics: Doneness Decoded + The Science of Beef.
// Same shape as flavourTopics so the shared flavour story viewer renders them unchanged.
import {assets} from "./assets.js";
export const steakFlavourTopics=[
{
id:"stk-doneness-decoded",category:"Doneness Decoded",title:"The Doneness Spectrum",
flavour:"What each level actually tastes like",hero:assets.stkSlice,
slides:[
{image:assets.stkSlice,kicker:"THE SPECTRUM",title:"Doneness is a flavour choice",body:"Doneness is not a skill ladder with rare at the top — it is a set of genuinely different eating experiences. Each level changes the juice, the chew, the flavour and which cuts shine. The numbers below are after-rest centre temperatures: what the steak reads when you actually eat it."},
{image:assets.stkProbe,kicker:"RARE · 49°C",title:"Cool red centre, maximum juice",body:"Rare is soft, slick and mineral — the beef tastes bright and almost sweet, but fat barely melts, so marbled cuts feel waxy. Rare belongs to lean, tender cuts: filet mignon and flank carry it beautifully. Expect a plush, yielding chew and juices that run freely."},
{image:assets.stkRest,kicker:"MEDIUM-RARE · 54°C",title:"The all-rounder",body:"Warm red-pink centre, muscle fibres just set, juice still generous. Intramuscular fat begins to melt, so flavour deepens without drying. This is the widest sweet spot in the spectrum and the default for striploin, sirloin, rump and flank — and the level every chef quietly assumes you meant."},
{image:assets.stkButter,kicker:"MEDIUM · 60°C",title:"Where marbling pays out",body:"Rosy pink, firmer bite, noticeably less free juice — but here is the honest secret: heavily marbled cuts get better at medium. Ribeye, picanha and wagyu-style beef need this warmth to fully render their fat into flavour. A medium ribeye out-eats a medium-rare one; the marbling is the reason."},
{image:assets.stkPanSear,kicker:"MEDIUM-WELL · 66°C",title:"A thin blush, a firm chew",body:"Only a whisper of pink remains and the fibres have tightened. Juice is limited, so technique has to compensate: a hard crust, a rested slice and a fatty cut. If someone at your table wants medium-well, give them picanha or ribeye — their rendered fat keeps the experience alive where lean cuts go dry."},
{image:assets.stkOven,kicker:"WELL-DONE · 71°C+",title:"Cooked through, with respect",body:"Fully grey and firm — most of the water has been squeezed from the fibres, so what remains is crust flavour and rendered fat. If well-done is the brief, do it deliberately: a thinner fatty cut, gentle finishing heat so the outside never chars bitter, and slices cut thin. Done with care it is toothsome; done carelessly it is cardboard."},
{image:assets.stkMise,kicker:"CHOOSING",title:"Match the cut to the level",body:"The rule that unlocks the spectrum: the leaner the cut, the lower the ideal doneness; the fattier the cut, the more warmth it rewards. Filet peaks at rare to medium-rare. Striploin and rump live at medium-rare. Ribeye and picanha stretch happily to medium. The Designer scores every combination honestly — let it argue with you."}
]},
{
id:"stk-maillard",category:"The Science of Beef",title:"The Maillard Reaction",
flavour:"The chemistry of crust",hero:assets.stkPanSear,
slides:[
{image:assets.stkPanSear,kicker:"THE REACTION",title:"Browning is new flavour, not burnt old flavour",body:"Above roughly 140°C, amino acids and sugars on the steak's surface begin recombining into hundreds of compounds that did not exist in the raw meat — roasted, nutty, savoury notes layered over the beef. The crust is not cooked surface; it is a new ingredient you manufacture in the pan."},
{image:assets.stkPanHeat,kicker:"THE ENEMY",title:"Water is the handbrake",body:"Maillard cannot outrun evaporation: as long as the surface is wet, its temperature is pinned near 100°C — 40 degrees short of browning. This is why the dry brine, the pat-down and the smoking-hot pan all serve the same master. Dry surface, ferocious heat, honest crust."},
{image:assets.stkBaste,kicker:"THE ACCELERANT",title:"Butter joins late for a reason",body:"Butter carries milk solids that brown — and then burn — far faster than beef surface. Added late, they toast to a nutty finish and paint the crust with basted flavour. Added early, they blacken and turn the fond bitter. The order of fats is part of the chemistry."},
{image:assets.stkSlice,kicker:"THE PAYOFF",title:"Contrast is the point",body:"A great steak is two flavours in one bite: the dark, roasted complexity of the crust against the sweet, mineral juice of the interior. That contrast is the entire architecture of every protocol in the Designer — everything before the pan protects the interior; everything in the pan builds the crust."}
]},
{
id:"stk-marbling",category:"The Science of Beef",title:"Marbling & Grades",
flavour:"What fat does for flavour",hero:assets.stkMise,
slides:[
{image:assets.stkMise,kicker:"THE FAT INSIDE",title:"Marbling is internal basting",body:"Marbling — the white threads of intramuscular fat — melts as the steak cooks, lubricating the fibres from within. It is why a ribeye tastes juicy even slightly overcooked, and why a filet punishes every extra degree. When you choose a cut, you are mostly choosing how much built-in insurance you want."},
{image:assets.stkBrine,kicker:"THE GRADES",title:"Standard, prime, wagyu-style",body:"Grading is essentially marbling density. Standard beef rewards aggressive heat and confident seasoning. Prime and grain-fed carry more internal fat and a rounder, sweeter profile. Wagyu-style beef is so fat-rich the rules invert: lower pan heat so the fat renders instead of scorching, smaller portions, and a doneness half a step warmer."},
{image:assets.stkButter,kicker:"THE PERCEPTION",title:"Juiciness is partly an illusion",body:"Much of what reads as juiciness is rendered fat coating the palate, not water content. This is why a medium ribeye can taste juicier than a medium-rare one — more of its marbling has melted. Fat also carries beef's fat-soluble aroma compounds, so marbled cuts simply broadcast more flavour."},
{image:assets.stkGrill,kicker:"THE CHOICE",title:"Buy the cut for the cook",body:"Marbling should steer the whole protocol: fatty cuts love live fire and high heat that renders and crisps; lean cuts prefer gentle methods and butter or sauce to borrow the fat they lack. The Designer's grade selector adjusts heat guidance for exactly this reason — the fat decides the fire."}
]}
];
