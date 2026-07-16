// Meat Mastery v2.3.0 — Steak Essentials curriculum (6 chapters · 32 lessons).
// Content authored by Grok (Steak_Essentials_Curriculum_Draft), verified against
// the steak-designer-data.js protocol engine (doneness anchors 49/54/60/66/71°C,
// per-method carryover offsets, the "immediately or ≥45 min" dry-brine rule).
// Shape mirrors js/data.js: courses + per-chapter slides, flattened to a sequence.
import {assets} from "./assets.js";
const A=assets;
export const steakCourses=[
{id:"know-your-cuts",title:"Know Your Cuts",subtitle:"The seven steaks that matter — anatomy, flavour, texture and best use",image:A.stkSlice},
{id:"sourcing-grades",title:"Sourcing & Grades",subtitle:"What grading actually means and how to buy better beef",image:A.stkMise},
{id:"prep-foundations",title:"Prep Foundations",subtitle:"Dry brining, tempering, trimming and drying — the steps that decide the crust",image:A.stkBrine},
{id:"heat-mastery",title:"Heat Mastery",subtitle:"All six methods with honest decision trees by cut and thickness",image:A.stkGrill},
{id:"doneness-ladder",title:"The Doneness Ladder",subtitle:"Internal temperatures, carryover by method, and why the pull temperature rules the cook",image:A.stkProbe},
{id:"resting-serving",title:"Resting & Serving",subtitle:"Why resting works, when to skip it, slicing against the grain, and finishing the plate",image:A.stkRest}
];
// Per-lesson slide imagery is drawn from the existing natural-set steak photography.
export const steakLessons={
"know-your-cuts":[
{id:"kyc-ribeye",title:"Ribeye — The Flavour King",minutes:6,slides:[
{image:A.stkSlice,kicker:"KNOW YOUR CUTS",title:"Ribeye",body:"The most flavour-dense mainstream cut. Heavy marbling and the spinalis (fat cap) deliver rich, buttery, deeply beefy flavour. This is the cut people remember."},
{image:A.stkProbe,kicker:"RIBEYE",title:"Best doneness",body:"Medium (60°C after rest). Heavy marbling only fully melts and becomes silky around medium. Medium-rare leaves some fat unrendered and waxy on the palate."},
{image:A.stkPanSear,kicker:"RIBEYE",title:"Best methods",body:"Pan sear or reverse sear. Both give you control over crust formation while allowing time for the intramuscular fat to render properly."},
{image:A.stkGrill,kicker:"RIBEYE",title:"What to avoid",body:"Very high grill flames. Rendering fat causes aggressive flare-ups that can burn the exterior before the centre reaches temperature."},
{image:A.stkRest,kicker:"RIBEYE",title:"Slicing",body:"Slice across the face. Separate the spinalis cap and eat it first — it is the richest, most tender and most flavourful part of the steak."}]},
{id:"kyc-striploin",title:"Striploin — The Steakhouse Benchmark",minutes:5,slides:[
{image:A.stkMise,kicker:"KNOW YOUR CUTS",title:"Striploin (New York Strip)",body:"Firm, even bite with a clean, robust beef flavour and a signature fat rim along one edge. The classic steakhouse cut for good reason."},
{image:A.stkProbe,kicker:"STRIPLOIN",title:"Best doneness",body:"Medium-rare (54°C after rest). Keeps the even grain tender while rendering the fat rim just enough without drying the leaner muscle."},
{image:A.stkPanSear,kicker:"STRIPLOIN",title:"Best methods",body:"Pan sear or gas grill. Both deliver a strong, even crust while respecting the cut's moderate thickness."},
{image:A.stkPanHeat,kicker:"STRIPLOIN",title:"What to avoid",body:"Overcooking past medium. The leaner muscle fibres tighten noticeably and lose the clean, steakhouse bite that defines this cut."},
{image:A.stkSlice,kicker:"STRIPLOIN",title:"Slicing",body:"Slice across the grain in finger-width strips. Stand the fat rim on edge during the final minute of cooking to render it fully."}]},
{id:"kyc-filet",title:"Filet Mignon — Pure Tenderness",minutes:5,slides:[
{image:A.stkMise,kicker:"KNOW YOUR CUTS",title:"Filet Mignon",body:"The most tender cut of all. Ultra-lean with almost no intramuscular fat to carry flavour. Mild, delicate, almost buttery in texture."},
{image:A.stkProbe,kicker:"FILET",title:"Best doneness",body:"Medium-rare (54°C after rest). With so little fat there is nothing to render — past medium the meat dries out quickly and loses its silkiness."},
{image:A.stkBaste,kicker:"FILET",title:"Best methods",body:"Pan sear with butter baste or reverse sear. Both protect the lean meat while still building a proper crust."},
{image:A.stkGrill,kicker:"FILET",title:"What to avoid",body:"Open-flame grilling. Lean meat and direct high heat is an unforgiving combination — the edges dry before a good crust can form."},
{image:A.stkButter,kicker:"FILET",title:"Slicing & serving",body:"Serve whole as a medallion. It needs no help from a knife. A compound butter or light finishing sauce is welcome."}]},
{id:"kyc-rump",title:"Rump — The Value Workhorse",minutes:5,slides:[
{image:A.stkMise,kicker:"KNOW YOUR CUTS",title:"Rump",body:"Big, honest beef flavour from a hard-working muscle. Firmer chew that rewards precise cooking and thin slicing. Excellent everyday value when treated correctly."},
{image:A.stkProbe,kicker:"RUMP",title:"Best doneness",body:"Medium-rare (54°C after rest) is the practical ceiling. Beyond that the lean muscle tightens quickly and loses moisture."},
{image:A.stkPanSear,kicker:"RUMP",title:"Best methods",body:"Pan sear or reverse sear. Both allow you to hit temperature precisely without overcooking the exterior."},
{image:A.stkPanHeat,kicker:"RUMP",title:"What to avoid",body:"Well-done. Rump has no fat reserve to survive it — the result is dry and tough."},
{image:A.stkSlice,kicker:"RUMP",title:"Slicing",body:"Slice very thin across the grain — thickness of a coin, not a finger. This is the single most important step for tenderness on this cut."}]},
{id:"kyc-flank",title:"Flank — Loud, Beefy & Fast",minutes:5,slides:[
{image:A.stkMise,kicker:"KNOW YOUR CUTS",title:"Flank",body:"Loud, intensely beefy and fast. Thin, fibrous cut built for ripping heat and strict against-the-grain slicing. Outstanding value when sliced correctly."},
{image:A.stkProbe,kicker:"FLANK",title:"Best doneness",body:"Rare to medium-rare only (49–54°C after rest). The coarse fibres turn ropey and unpleasant past that point."},
{image:A.stkPanHeat,kicker:"FLANK",title:"Best methods",body:"Ripping-hot pan or grill. This cut is measured in minutes, not hours. It overshoots temperature very quickly."},
{image:A.stkSousvide,kicker:"FLANK",title:"What to avoid",body:"Reverse sear or sous vide on anything thinner than ~4 cm (1.6 in). The cut is too thin for slow methods — it flies past target before you can react."},
{image:A.stkSlice,kicker:"FLANK",title:"Slicing (non-negotiable)",body:"Slice thin at a 45° angle against the visible grain. This single step transforms the eating experience of flank more than any other technique."}]},
{id:"kyc-sirloin",title:"Sirloin — The Everyday All-Rounder",minutes:4,slides:[
{image:A.stkMise,kicker:"KNOW YOUR CUTS",title:"Sirloin",body:"Balanced beef flavour, moderate tenderness and a forgiving price. The reliable weeknight steak that still tastes like proper steak."},
{image:A.stkProbe,kicker:"SIRLOIN",title:"Best doneness",body:"Flexible from rare to medium (49–60°C after rest). The most forgiving cut on the board in terms of doneness window."},
{image:A.stkAirfry,kicker:"SIRLOIN",title:"Best methods",body:"Pan, grill or air fryer. Straightforward across multiple techniques with no dramatic weaknesses."},
{image:A.stkPanSear,kicker:"SIRLOIN",title:"What to avoid",body:"Nothing dramatic — just don't expect ribeye-level richness or marbling. It is an honest, balanced, everyday cut."},
{image:A.stkSlice,kicker:"SIRLOIN",title:"Slicing",body:"Slice across the grain in medium strips. Simple and effective."}]},
{id:"kyc-picanha",title:"Picanha — The Fat-Cap Champion",minutes:6,slides:[
{image:A.stkMise,kicker:"KNOW YOUR CUTS",title:"Picanha (Rump Cap)",body:"Brazilian favourite. Thick triangular cut crowned with a solid fat cap that bastes the meat as it renders. Loud mineral beef base underneath."},
{image:A.stkProbe,kicker:"PICANHA",title:"Best doneness",body:"Medium-rare (54°C after rest). The fat cap needs time and moderate heat to render properly without burning."},
{image:A.stkGrill,kicker:"PICANHA",title:"Best methods",body:"Grill, pan or reverse sear. All three give the fat cap time to do its job while building crust on the meat."},
{image:A.stkBrine,kicker:"PICANHA",title:"What to avoid",body:"Trimming the fat cap off. It is not waste — it is the defining feature and primary flavour engine of this cut."},
{image:A.stkSlice,kicker:"PICANHA",title:"Slicing (churrasco style)",body:"First slice with the grain into thick steaks, then slice those against the grain to serve. Classic Brazilian presentation."}]}
],
"sourcing-grades":[
{id:"sg-what-grading-means",title:"What Grading Actually Measures",minutes:6,slides:[
{image:A.stkMise,kicker:"SOURCING & GRADES",title:"Marbling is king",body:"Grading primarily measures intramuscular fat (marbling). More marbling generally means more flavour, tenderness and moisture retention during cooking."},
{image:A.stkBrine,kicker:"GRADING",title:"Maturity and colour",body:"Younger animals with bright cherry-red colour and fine muscle texture score higher. Older or darker meat is usually graded lower regardless of marbling."},
{image:A.stkSlice,kicker:"GRADING",title:"Firmness and texture",body:"Higher grades have finer muscle grain and firmer fat. This directly affects how evenly the steak cooks and how it feels when you slice it."},
{image:A.stkPanSear,kicker:"GRADING",title:"The real-world gap",body:"Grading is a useful guide, not a guarantee. A well-handled Standard steak from a good butcher can outperform a poorly handled Prime steak from a supermarket."},
{image:A.stkMise,kicker:"GRADING",title:"What to actually look for",body:"Even marbling distribution, bright colour, and a dry surface. Avoid meat that looks wet or has large, hard fat deposits."}]},
{id:"sg-standard-prime-wagyu",title:"Standard vs Prime vs Wagyu-Style",minutes:7,slides:[
{image:A.stkRest,kicker:"SOURCING & GRADES",title:"Standard grade",body:"Honest supermarket or commodity beef. Technique matters more than grade here. Good results are very achievable with proper cooking."},
{image:A.stkSlice,kicker:"GRADES",title:"Prime / grain-fed",body:"Visibly better marbling than Standard. More forgiving during cooking and delivers richer mouthfeel. Worth the premium for special meals."},
{image:A.stkPanHeat,kicker:"GRADES",title:"Wagyu-style",body:"Extreme marbling that melts at relatively low temperatures. Requires moderate heat — high heat causes the fat to render too fast and smoke heavily."},
{image:A.stkPanSear,kicker:"GRADES",title:"Practical recommendation",body:"For everyday cooking, good Standard or Prime is excellent. Reserve true Wagyu-style for occasions where you want maximum richness and are willing to cook more carefully."},
{image:A.stkRest,kicker:"GRADES",title:"Price vs performance",body:"The jump from Standard to Prime is usually the best value upgrade. The jump from Prime to full-blood Wagyu is much more expensive for a smaller additional gain in most home settings."}]},
{id:"sg-dry-aged-vs-wet",title:"Dry-Aged vs Wet-Aged Beef",minutes:6,slides:[
{image:A.stkMise,kicker:"SOURCING & GRADES",title:"Wet-aged (most common)",body:"Beef vacuum-sealed and aged in its own juices. Convenient, consistent, and what you usually get at supermarkets. Minimal flavour change."},
{image:A.stkBrine,kicker:"DRY-AGED",title:"Dry-aged process",body:"Beef aged uncovered in a controlled environment (usually 2–6 weeks). Moisture evaporates and enzymes break down muscle, concentrating flavour and tenderising the meat."},
{image:A.stkSlice,kicker:"DRY-AGED",title:"What you actually taste",body:"Nutty, funky, sometimes blue-cheese or mushroom notes appear. The crust also becomes more savoury. Not everyone loves the flavour — it is an acquired taste for some."},
{image:A.stkBrine,kicker:"DRY-AGED",title:"Home dry-aging reality",body:"Possible in a dedicated fridge with good airflow and humidity control. Risk of spoilage is real if conditions are not perfect. Start with smaller cuts if experimenting."},
{image:A.stkRest,kicker:"DRY-AGED",title:"When it is worth it",body:"Best on thick, well-marbled cuts like ribeye or striploin. Less noticeable (and sometimes wasteful) on lean cuts like filet or flank."}]},
{id:"sg-butcher-vs-supermarket",title:"Butcher vs Supermarket Buying",minutes:5,slides:[
{image:A.stkMise,kicker:"SOURCING & GRADES",title:"Butcher advantages",body:"You can ask for specific thickness (e.g. 4 cm / 1.6 in), trim level, and sometimes even choose the individual steak. Freshness and provenance are usually better."},
{image:A.stkRest,kicker:"BUYING",title:"Supermarket advantages",body:"Convenience, consistent grading labels, and often lower price. Many now offer premium or butcher's-selection lines that are perfectly acceptable."},
{image:A.stkSlice,kicker:"BUYING",title:"What to ask the butcher",body:"Thickness in centimetres, marbling level, and whether the steak has been dry-aged. Good butchers are happy to explain and cut to order."},
{image:A.stkBrine,kicker:"BUYING",title:"Supermarket red flags",body:"Meat sitting in pooled liquid, faded colour, or sell-by dates that are too far in the future. These are signs of older stock or poor handling."},
{image:A.stkMise,kicker:"BUYING",title:"Practical rule",body:"For special meals or thick cuts, go to a good butcher. For weeknight cooking, a reputable supermarket premium range is usually fine."}]},
{id:"sg-reading-labels",title:"Reading Labels and Provenance",minutes:5,slides:[
{image:A.stkRest,kicker:"SOURCING & GRADES",title:"Country of origin",body:"Different countries have different feeding and aging practices. Grass-fed vs grain-fed changes flavour profile and fat composition."},
{image:A.stkSlice,kicker:"LABELS",title:"Breed information",body:"Angus, Wagyu, Hereford and similar names are marketing terms to varying degrees. True full-blood Wagyu is rare and expensive outside specialist suppliers."},
{image:A.stkBrine,kicker:"LABELS",title:"Aging claims",body:"“Dry-aged 21 days” is meaningful. “Aged for flavour” with no number is usually marketing speak. Ask for the actual aging method and duration."},
{image:A.stkRest,kicker:"LABELS",title:"Organic / grass-fed claims",body:"These affect flavour more than tenderness. Grass-fed beef is often leaner and has a more mineral, grassy taste. It can dry out faster if overcooked."},
{image:A.stkMise,kicker:"LABELS",title:"Best practice",body:"When in doubt, ask. A good butcher or knowledgeable supermarket staff member will tell you more than any label. Build a relationship with your supplier."}]}
],
"prep-foundations":[
{id:"pf-dry-brining-rules",title:"Dry Brining — The Correct Timing",minutes:7,slides:[
{image:A.stkBrine,kicker:"PREP FOUNDATIONS",title:"The danger window",body:"Never salt a steak 10–40 minutes before cooking. In this window salt draws moisture to the surface but there is not enough time for it to be reabsorbed, leaving the surface wet."},
{image:A.stkProbe,kicker:"DRY BRINING",title:"Two correct options only",body:"Salt immediately before cooking (surface stays dry and sears cleanly), or salt at least 45 minutes ahead (ideally 1–24 hours) so moisture is reabsorbed and the surface dries."},
{image:A.stkBrine,kicker:"DRY BRINING",title:"1-hour dry brine",body:"Salt, place on a rack uncovered in the fridge. Salt dissolves, gets pulled back into the meat, and seasons the outer layer while drying the surface for better searing."},
{image:A.stkButter,kicker:"DRY BRINING",title:"Overnight (24-hour) dry brine",body:"The pro move. Deep seasoning penetrates further and the surface becomes bone-dry — ideal for a hard, even crust. Do not cover the meat."},
{image:A.stkMise,kicker:"DRY BRINING",title:"How much salt",body:"Roughly 1% of the steak's weight is a good starting point. You can always add finishing salt at the end. Too much early salt can make the exterior overly salty after searing."}]},
{id:"pf-tempering",title:"Tempering — Why It Matters",minutes:5,slides:[
{image:A.stkSlice,kicker:"PREP FOUNDATIONS",title:"What tempering means",body:"Letting the steak sit at room temperature for 30–60 minutes before cooking so the centre is not refrigerator-cold when it hits the heat."},
{image:A.stkProbe,kicker:"TEMPERING",title:"Why it helps",body:"A cold centre creates a bigger temperature gradient. The outside can overcook while the middle is still cold. Tempering reduces this gradient and improves evenness."},
{image:A.stkMise,kicker:"TEMPERING",title:"How long is enough",body:"30–60 minutes is usually sufficient for steaks up to ~5 cm (2 in) thick. Very thick cuts (5.5 cm+ / 2+ in) benefit from closer to 90 minutes."},
{image:A.stkRest,kicker:"TEMPERING",title:"Food safety note",body:"Do not leave meat out for hours. 30–90 minutes in a normal kitchen is safe. If your kitchen is very warm, keep it shorter."},
{image:A.stkPanHeat,kicker:"TEMPERING",title:"Practical habit",body:"Take the steak out while you prepare the rest of the meal or heat the pan or grill. It becomes automatic and costs almost no extra time."}]},
{id:"pf-trimming",title:"Trimming — What to Remove and What to Keep",minutes:5,slides:[
{image:A.stkMise,kicker:"PREP FOUNDATIONS",title:"Silver skin",body:"Remove tough, shiny silver skin on the surface. It does not render and will be chewy. Use a sharp knife and slide just under the membrane."},
{image:A.stkSlice,kicker:"TRIMMING",title:"Hard fat vs soft fat",body:"Large, hard chunks of external fat can be trimmed. The softer, creamy fat that is well-attached or marbled inside should usually be left — it bastes the meat as it renders."},
{image:A.stkGrill,kicker:"TRIMMING",title:"Picanha fat cap",body:"Do not trim the fat cap off picanha. It is the defining feature of the cut and bastes the meat during cooking."},
{image:A.stkBrine,kicker:"TRIMMING",title:"How much to leave",body:"A thin, even layer of external fat (3–5 mm) is ideal on most cuts. It protects the meat and adds flavour without becoming excessive."},
{image:A.stkMise,kicker:"TRIMMING",title:"Tools",body:"A sharp, flexible boning knife or petty knife makes clean trimming much easier and safer than a large chef's knife."}]},
{id:"pf-drying-surface",title:"Drying the Surface — The Secret to Crust",minutes:6,slides:[
{image:A.stkPanHeat,kicker:"PREP FOUNDATIONS",title:"Why drying matters",body:"Moisture on the surface turns to steam when it hits the pan or grill. Steam prevents direct contact and delays Maillard browning (the crust)."},
{image:A.stkMise,kicker:"DRYING",title:"Paper towel method",body:"Pat the steak very dry on all sides with paper towels just before seasoning or cooking. This is the simplest and most effective step most home cooks skip."},
{image:A.stkBrine,kicker:"DRYING",title:"Dry brining helps",body:"A proper dry brine (especially 1–24 hours) naturally dries the surface as moisture is reabsorbed. This is one of the biggest advantages of dry brining."},
{image:A.stkProbe,kicker:"DRYING",title:"Air drying in the fridge",body:"Leaving the steak uncovered on a rack for even 30–60 minutes helps. Overnight is even better. The fridge's dry air is very effective."},
{image:A.stkPanSear,kicker:"DRYING",title:"When you are in a rush",body:"At minimum, do a thorough paper towel pat-down right before the steak hits the heat. Even this small step makes a noticeable difference to crust quality."}]},
{id:"pf-tools-mise-en-place",title:"Tools & Mise en Place for Steak",minutes:5,slides:[
{image:A.stkProbe,kicker:"PREP FOUNDATIONS",title:"Instant-read thermometer",body:"Non-negotiable for consistent results. The difference between guessing and knowing the internal temperature is the difference between good and great steak."},
{image:A.stkPanHeat,kicker:"TOOLS",title:"Heavy pan or grill",body:"Cast iron or thick carbon steel for pan searing. A two-zone setup (hot + cool) is ideal for grilling. Thin pans or single-zone grills make even cooking much harder."},
{image:A.stkPanSear,kicker:"TOOLS",title:"Tongs and timer",body:"Tongs for control and safety. A timer (or phone) is useful, but the thermometer is still the final authority — not the clock."},
{image:A.stkMise,kicker:"MISE EN PLACE",title:"Everything ready before heat",body:"Have your finishing salt, butter, garlic and thyme (if basting), resting rack or board, and thermometer ready. Once the steak hits the heat you should not be searching for things."},
{image:A.stkRest,kicker:"MISE EN PLACE",title:"Resting setup",body:"Prepare a warm plate or rack with loose foil (or no foil for reverse sear) before you start cooking. Resting is part of the process, not an afterthought."}]}
],
"heat-mastery":[
{id:"hm-pan-sear",title:"Pan Sear — The Reference Technique",minutes:7,slides:[
{image:A.stkPanHeat,kicker:"HEAT MASTERY",title:"Pan Sear overview",body:"The most controllable and reliable method for most home kitchens. Excellent crust and precise temperature control when done with continuous flipping and a probe."},
{image:A.stkProbe,kicker:"PAN SEAR",title:"Pull temperature",body:"Pull 4–6°C below your target doneness. The hot pan creates a strong surface-to-centre gradient that continues cooking during the rest."},
{image:A.stkPanSear,kicker:"PAN SEAR",title:"Technique basics",body:"Ripping hot pan, continuous 30-second flips, butter baste in the final 60–90 seconds. Thermometer decides when to pull — not the clock."},
{image:A.stkBaste,kicker:"PAN SEAR",title:"Best for",body:"Steaks up to ~5 cm (2 in) thick. Works very well on ribeye, striploin, sirloin and filet. Less ideal for very thick showpiece cuts."},
{image:A.stkPanSear,kicker:"PAN SEAR",title:"Common mistakes",body:"Not drying the surface, moving the steak too little (uneven crust), or pulling too late because you are afraid of undercooking."}]},
{id:"hm-gas-grill",title:"Gas Grill — Two-Zone Control",minutes:6,slides:[
{image:A.stkGrill,kicker:"HEAT MASTERY",title:"Gas Grill overview",body:"Very similar physics to pan searing but with the option of convection when the lid is down. Excellent for larger quantities or when you want grill marks."},
{image:A.stkProbe,kicker:"GAS GRILL",title:"Pull temperature",body:"Pull 4–6°C below target. The principle is the same as pan searing — the surface heat continues the cook during rest."},
{image:A.stkGrill,kicker:"GAS GRILL",title:"Two-zone technique",body:"Hard sear over the hot zone, finish over the cooler zone with the lid down for convection. Move the steak as needed to control the rate."},
{image:A.stkOven,kicker:"GAS GRILL",title:"Best for",body:"Most cuts. Particularly good when you want pronounced grill flavour or are cooking multiple steaks at once."},
{image:A.stkPanHeat,kicker:"GAS GRILL",title:"Watch-outs",body:"Flare-ups from rendering fat (especially ribeye and wagyu-style). Keep the steak moving and have a cooler zone ready."}]},
{id:"hm-sear-oven",title:"Sear + Oven — Gentle Finish",minutes:6,slides:[
{image:A.stkOven,kicker:"HEAT MASTERY",title:"Sear + Oven overview",body:"Sear hard on the hob, then finish gently in a moderate oven (around 180°C). Excellent evenness on thicker steaks without needing reverse sear equipment."},
{image:A.stkProbe,kicker:"SEAR + OVEN",title:"Pull temperature",body:"Pull 3–5°C below target. The gentler oven heat creates slightly less carryover than a pure pan cook."},
{image:A.stkPanSear,kicker:"SEAR + OVEN",title:"Technique",body:"Sear hard on the hob until a good crust forms, then transfer the whole pan (oven-safe) into the oven to finish. Use a probe to know exactly when to pull."},
{image:A.stkOven,kicker:"SEAR + OVEN",title:"Best for",body:"Thicker steaks (4–5.5 cm / 1.6–2+ in) where pure pan searing struggles to cook the centre evenly without overcooking the outside."},
{image:A.stkReverseRack,kicker:"SEAR + OVEN",title:"Watch-outs",body:"Oven temperature accuracy varies. A probe is essential. Also remember the pan is extremely hot when it comes out of the oven."}]},
{id:"hm-air-fry",title:"Air Fry — Convenient Even Cooking",minutes:5,slides:[
{image:A.stkAirfry,kicker:"HEAT MASTERY",title:"Air Fry overview",body:"Circulating hot air cooks surprisingly evenly with minimal carryover. Convenient and relatively hands-off, though the crust is never as deep as a proper pan sear."},
{image:A.stkProbe,kicker:"AIR FRY",title:"Pull temperature",body:"Pull only 1–2°C below target. Circulating air leaves almost no carryover, so you stay very close to the final temperature."},
{image:A.stkAirfry,kicker:"AIR FRY",title:"Technique",body:"Usually 200°C, flipped once halfway. Use a probe — timing varies significantly with steak thickness and starting temperature."},
{image:A.stkOven,kicker:"AIR FRY",title:"Best for",body:"Weeknight cooking and thinner-to-medium steaks (up to ~4 cm / 1.6 in). Good when you want minimal mess and monitoring."},
{image:A.stkPanSear,kicker:"AIR FRY",title:"Limitations",body:"Crust is honest but never reaches true pan-sear depth. Not ideal for very thick cuts or when you want maximum Maillard flavour."}]},
{id:"hm-reverse-sear",title:"Reverse Sear — The Thick-Cut Solution",minutes:7,slides:[
{image:A.stkReverseRack,kicker:"HEAT MASTERY",title:"Reverse Sear overview",body:"Low oven first for wall-to-wall even interior, short rest while the pan heats, then a ripping final sear. The gold standard for thick cuts (5 cm+ / 2+ in)."},
{image:A.stkProbe,kicker:"REVERSE SEAR",title:"Pull temperature from oven",body:"Pull from the low oven (100–120°C) roughly 10°C below your final target. The short, hard final sear supplies the remaining temperature and the crust."},
{image:A.stkReverseRack,kicker:"REVERSE SEAR",title:"Technique",body:"Low oven on a rack until the target pull temp, rest 10–20 minutes while the pan gets ripping hot, then sear 60–90 seconds per side. Serve immediately — no post-sear rest needed."},
{image:A.stkPanSear,kicker:"REVERSE SEAR",title:"Best for",body:"Thick steaks (5 cm+ / 2+ in) and showpiece cuts. Also excellent for picanha and well-marbled ribeyes where even rendering matters."},
{image:A.stkReverseRack,kicker:"REVERSE SEAR",title:"Watch-outs",body:"Too thin (under 4 cm / 1.6 in) and the low oven will overshoot quickly. Also requires planning — it is not a fast weeknight method."}]},
{id:"hm-sous-vide",title:"Sous Vide — Precision and Forgiveness",minutes:7,slides:[
{image:A.stkSousvide,kicker:"HEAT MASTERY",title:"Sous Vide overview",body:"Set the water bath to your exact target temperature. The steak cannot overshoot. Finish with a fast, hard sear for crust. Extremely consistent and forgiving."},
{image:A.stkAirfry,kicker:"SOUS VIDE",title:"Bath temperature",body:"Set the bath to your exact final target temperature (e.g. 54°C for medium-rare). There is zero carryover from the bath itself."},
{image:A.stkSousvide,kicker:"SOUS VIDE",title:"Time guidelines",body:"Minimum 1 hour for steaks up to 4 cm (1.6 in), 2 hours for thicker cuts. Going significantly longer (within reason) does not harm most steaks."},
{image:A.stkPanSear,kicker:"SOUS VIDE",title:"Finishing",body:"Pat very dry, then sear hard for 45–60 seconds per side in a ripping hot pan or on a grill. This is purely for crust — the doneness is already perfect."},
{image:A.stkSlice,kicker:"SOUS VIDE",title:"Best for",body:"Thick or expensive cuts where perfect doneness and edge-to-edge consistency matter most. Also excellent when you want to cook ahead and sear at the last minute."}]}
],
"doneness-ladder":[
{id:"dl-rare",title:"Rare — 49°C after rest",minutes:5,slides:[
{image:A.stkProbe,kicker:"DONENESS LADDER",title:"What rare actually is",body:"Cool-to-warm red centre, maximum moisture retained, very little fat rendering. The muscle is barely cooked."},
{image:A.stkMise,kicker:"RARE",title:"Best cuts for rare",body:"Flank, filet, and leaner cuts that you plan to slice thin. Fat-rich cuts (ribeye, picanha) are usually better at least medium-rare so the fat can melt."},
{image:A.stkPanSear,kicker:"RARE",title:"Trade-offs",body:"Maximum juiciness but minimal flavour development from rendered fat and Maillard crust depth. Some people find it too raw-tasting."},
{image:A.stkProbe,kicker:"RARE",title:"Safety note",body:"Whole-muscle steaks are generally considered lower risk than ground meat, but vulnerable people should still cook to at least medium."},
{image:A.stkBrine,kicker:"RARE",title:"Pull strategy",body:"Because carryover is real, pull a few degrees below 49°C depending on method (especially important on pan or grill)."}]},
{id:"dl-medium-rare",title:"Medium-Rare — 54°C after rest",minutes:6,slides:[
{image:A.stkSlice,kicker:"DONENESS LADDER",title:"The sweet spot for most people",body:"Warm rosy centre, juicy with fat just beginning to melt. The most popular doneness for good reason — excellent balance of moisture and flavour."},
{image:A.stkMise,kicker:"MEDIUM-RARE",title:"Best cuts",body:"Striploin, sirloin, rump, filet, and most everyday steaks. The versatile default recommendation for the majority of cuts."},
{image:A.stkPanSear,kicker:"MEDIUM-RARE",title:"Trade-offs",body:"Slightly less moisture than rare, but noticeably better flavour from fat rendering and deeper crust development. The best all-rounder for most diners."},
{image:A.stkProbe,kicker:"MEDIUM-RARE",title:"Carryover awareness",body:"Still important to pull 4–6°C below target on pan or grill and ~10°C below on reverse sear. The difference between 50°C and 58°C at the table is significant."},
{image:A.stkRest,kicker:"MEDIUM-RARE",title:"Practical target",body:"For most home cooks, aiming for a true 54°C after rest on well-marbled cuts delivers the experience most people associate with great steak."}]},
{id:"dl-medium",title:"Medium — 60°C after rest",minutes:5,slides:[
{image:A.stkSlice,kicker:"DONENESS LADDER",title:"Medium explained",body:"Pink centre, firmer bite, intramuscular fat properly rendered and silky. The point where most fat has melted and contributed to flavour and mouthfeel."},
{image:A.stkMise,kicker:"MEDIUM",title:"Best cuts for medium",body:"Ribeye, picanha, and well-marbled steaks in general. These cuts shine when the fat is fully rendered. Lean cuts start to feel dry here."},
{image:A.stkPanSear,kicker:"MEDIUM",title:"Trade-offs",body:"Noticeably less juicy than medium-rare, but significantly more flavour from rendered fat and deeper crust. The steakhouse medium many people actually prefer."},
{image:A.stkRest,kicker:"MEDIUM",title:"Who should order medium",body:"People who dislike red centres or want maximum fat flavour. Also safer for guests who are uncertain about doneness."},
{image:A.stkProbe,kicker:"MEDIUM",title:"Cooking note",body:"Requires slightly more care with lean cuts. On ribeye and picanha it is often the honest, delicious recommendation rather than a compromise."}]},
{id:"dl-medium-well",title:"Medium-Well — 66°C after rest",minutes:5,slides:[
{image:A.stkSlice,kicker:"DONENESS LADDER",title:"Medium-Well reality",body:"Slim pink line or none, notably firmer texture. Most of the free moisture has been driven out of the muscle fibres."},
{image:A.stkProbe,kicker:"MEDIUM-WELL",title:"Honest assessment",body:"Past ~63°C the muscle fibres squeeze hard. Only fat-rich cuts (heavily marbled ribeye or picanha) retain any real succulence at this temperature."},
{image:A.stkPanSear,kicker:"MEDIUM-WELL",title:"Trade-offs",body:"Significant loss of juiciness in exchange for a very firm, well-cooked texture and fully rendered fat. Flavour can still be good if the cut has enough marbling."},
{image:A.stkRest,kicker:"MEDIUM-WELL",title:"Who this is for",body:"People who genuinely prefer well-cooked meat or have been taught that any pink is unsafe. Respect their preference while being honest about the texture trade-off."},
{image:A.stkSlice,kicker:"MEDIUM-WELL",title:"Cooking advice",body:"Choose the fattiest cut available and slice thin. Even then, expect noticeably less moisture than medium or below."}]},
{id:"dl-well-done",title:"Well-Done — 71+°C after rest",minutes:5,slides:[
{image:A.stkOven,kicker:"DONENESS LADDER",title:"Well-Done reality",body:"Grey throughout, dense and dry. The muscle fibres have given up almost all their moisture. No technique can fully preserve juiciness at this temperature."},
{image:A.stkProbe,kicker:"WELL-DONE",title:"Honest warning",body:"At 71°C and above, no amount of basting, resting, or reverse searing can bring back the moisture that has been squeezed out of the fibres."},
{image:A.stkButter,kicker:"WELL-DONE",title:"Best (only) option",body:"Only the fattiest cuts have any chance of remaining palatable. Even then, slice very thin and consider a sauce or compound butter."},
{image:A.stkRest,kicker:"WELL-DONE",title:"Who orders well-done",body:"Some people genuinely prefer this texture or have cultural or medical reasons. Others were taught that pink meat is dangerous. Meet them where they are."},
{image:A.stkSlice,kicker:"WELL-DONE",title:"Cooking approach",body:"Choose the absolute fattiest cut you can find, cook gently after the initial sear, and slice thin. Still expect a dry result compared to lower doneness."}]}
],
"resting-serving":[
{id:"rs-why-resting-works",title:"Why Resting Works (and When to Skip It)",minutes:6,slides:[
{image:A.stkRest,kicker:"RESTING & SERVING",title:"What happens during rest",body:"The muscle fibres relax and reabsorb some of the juices that were pushed toward the centre during cooking. This reduces the amount that pours out when you slice."},
{image:A.stkProbe,kicker:"RESTING",title:"How long to rest",body:"Roughly 5–10 minutes for standard thickness (4 cm / 1.6 in), up to 15 minutes for very thick cuts. The steak should be warm but not hot when served."},
{image:A.stkReverseRack,kicker:"RESTING",title:"When to skip resting entirely",body:"Reverse sear and sous vide + hard sear. In both cases the resting effectively happened before the final sear. Slice and serve immediately."},
{image:A.stkRest,kicker:"RESTING",title:"Foil or no foil",body:"Loose foil is fine for pan-seared steaks. For reverse sear, many prefer no foil so the crust stays crisp. The difference is small."},
{image:A.stkButter,kicker:"RESTING",title:"Practical habit",body:"Rest the steak while you finish any sides or sauce. It becomes automatic and prevents the common mistake of cutting into it too early."}]},
{id:"rs-slicing-technique",title:"Slicing Against the Grain",minutes:5,slides:[
{image:A.stkSlice,kicker:"RESTING & SERVING",title:"Why grain direction matters",body:"Muscle fibres run in one direction. Cutting parallel to them leaves long, chewy strands. Cutting across them shortens the fibres and makes every bite more tender."},
{image:A.stkMise,kicker:"SLICING",title:"How to identify the grain",body:"Look for the lines running through the meat (especially visible on flank, rump, and striploin). On most steaks they run roughly lengthwise."},
{image:A.stkSlice,kicker:"SLICING",title:"Angle and thickness",body:"A slight 45° angle increases surface area and looks better on the plate. Thickness should be roughly finger-width for most cuts, thinner for flank and rump."},
{image:A.stkButter,kicker:"SLICING",title:"Picanha exception",body:"First slice with the grain into thick steaks (churrasco style), then slice those pieces against the grain to serve. This is the traditional Brazilian method."},
{image:A.stkRest,kicker:"SLICING",title:"Serving order",body:"On cuts with a fat cap or spinalis (ribeye, picanha), consider separating and serving the richest part first or alongside."}]},
{id:"rs-board-sauces-compound-butter",title:"Board Sauces & Compound Butters",minutes:6,slides:[
{image:A.stkButter,kicker:"RESTING & SERVING",title:"Board sauce concept",body:"Chop herbs, garlic, chilli or anchovy on a board, add olive oil or butter, and let the resting steak's juices mix in. Simple, fresh, and dramatic."},
{image:A.stkRest,kicker:"BOARD SAUCE",title:"Classic combination",body:"Parsley, garlic, chilli flakes, flaky salt, and good olive oil. The resting juices turn it into a light, savoury sauce that coats each slice."},
{image:A.stkButter,kicker:"COMPOUND BUTTER",title:"Compound butter method",body:"Mix softened butter with garlic, herbs, lemon zest or mustard. Form into a log and chill. Slice a disc onto the resting steak — the residual heat melts it perfectly."},
{image:A.stkRest,kicker:"COMPOUND BUTTER",title:"When to use each",body:"Board sauces are fresher and brighter. Compound butter is richer and more luxurious. Both beat bottled sauce for most steaks."},
{image:A.stkSlice,kicker:"FINISHING",title:"Finishing salt timing",body:"Flaky salt on the sliced face just before serving gives crunch and seasoning exactly where the tongue lands first. Do not add it too early or it dissolves."}]},
{id:"rs-plating-temperature",title:"Plating and Serving Temperature",minutes:5,slides:[
{image:A.stkRest,kicker:"RESTING & SERVING",title:"Serve warm, not piping hot",body:"Steak continues to carry a little heat after resting. Serving it slightly cooler than maximum temperature actually improves flavour perception and texture."},
{image:A.stkMise,kicker:"PLATING",title:"Warm plates",body:"A warm plate keeps the steak from cooling too fast. It is a small detail that makes a noticeable difference to the eating experience."},
{image:A.stkButter,kicker:"PLATING",title:"Sauce placement",body:"Spoon board sauce or melting butter over the slices rather than under them. This keeps the crust crisp and lets the sauce coat each piece as it is picked up."},
{image:A.stkSlice,kicker:"PLATING",title:"Simple is often best",body:"A perfectly cooked steak needs very little. Good flaky salt, a light board sauce or compound butter, and maybe a simple green salad or roasted vegetable is often enough."},
{image:A.stkRest,kicker:"PLATING",title:"The final test",body:"The first and last bite should feel balanced. If they do, every decision from cut selection through resting and slicing has succeeded."}]}
]
};
// Flat slide sequence mirroring lessonSequence in data.js — one linear track through
// every chapter and lesson, used by the steak story viewer and progress tracking.
export const steakLessonSequence=steakCourses.flatMap(c=>(steakLessons[c.id]||[]).flatMap(l=>l.slides.map((s,i)=>({sectionId:c.id,sectionTitle:c.title,lessonId:l.id,lessonTitle:l.title,slideId:`${l.id}-${String(i+1).padStart(2,"0")}`,...s}))));
export const steakLessonCount=steakCourses.reduce((a,c)=>a+(steakLessons[c.id]||[]).length,0);
