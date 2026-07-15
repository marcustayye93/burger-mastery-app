// Meat Mastery v2.5.0 — Burger Essentials curriculum rewrite.
// Matches the depth of the steak curriculum: 6 chapters, 32 lessons, 160 slides.
import {assets} from "./assets.js";
const A=assets;

export const burgerCourses=[
  {id:"meat-blends",title:"Meat & Blends",subtitle:"Beef, pork, lamb, chicken and the science of the fat ratio",image:A.meatCompare},
  {id:"grind-mix",title:"Grind & Mix",subtitle:"Strand integrity, aromatics in the mix, and avoiding the sausage effect",image:A.texture},
  {id:"shape-structure",title:"Shape & Structure",subtitle:"Thickness, dimples, portioning, and the smash technique",image:A.thickness},
  {id:"season-crust",title:"Season & Crust",subtitle:"The Maillard reaction, salt timing, and the perfect sear",image:A.seasoningCrust},
  {id:"cheese-melt",title:"Cheese & The Melt",subtitle:"Types of melt, steam domes, and binding the stack",image:A.cheese},
  {id:"assembly-architecture",title:"Assembly Architecture",subtitle:"Toasting, sauce barriers, stacking order, and stability",image:A.layers}
];

export const burgerLessons={
  "meat-blends":[
    {id:"mb-beef",title:"Beef: The Classic Canvas",minutes:5,slides:[
      {image:A.meatBeef,kicker:"MEAT & BLENDS",title:"The familiar foundation",body:"Beef provides the deep, savoury, mineral-rich flavour we associate with a classic burger. It rewards a hard sear and carries aggressive seasoning perfectly."},
      {image:A.meatBeef,kicker:"BEEF",title:"The 80/20 rule",body:"For a standard burger, 80% lean to 20% fat is the gold standard. The fat renders during cooking, basting the meat from the inside and carrying fat-soluble flavours to your palate."},
      {image:A.meatBeef,kicker:"BEEF",title:"When to use 85/15",body:"If you are cooking a thick pub-style burger to medium-rare, 85/15 works well — the interior stays juicy enough without needing as much fat to render."},
      {image:A.meatBeef,kicker:"BEEF",title:"The problem with 90/10",body:"Very lean beef (90/10 or 95/5) dries out quickly. Without fat to lubricate the fibres, a well-done lean burger feels dense and chalky. Compensate with moisture-rich sauces."},
      {image:A.heroBeefPairing,kicker:"BEEF",title:"Classic pairings",body:"Beef's richness demands sharp contrast: American cheese, acidic pickles, sharp mustard, and raw onion. The toppings exist to cut through the heavy fat profile."}
    ]},
    {id:"mb-pork",title:"Pork: The Sweet Softener",minutes:4,slides:[
      {image:A.meatCompare,kicker:"MEAT & BLENDS",title:"Sweet and tender",body:"Pork is milder and sweeter than beef. Its fat renders at a lower temperature, which means pork patties eat remarkably juicy and soft."},
      {image:A.meatCompare,kicker:"PORK",title:"The safety rule",body:"Unlike beef, pork must always be cooked through. Use a meat thermometer to ensure the centre reaches 71°C to guarantee safety without overcooking."},
      {image:A.heroPorkPairing,kicker:"PORK",title:"Flavour pairings",body:"Pork loves sweetness and smooth dairy. Pair it with caramelised onions, BBQ sauce, spicy mustard, and mild melting cheeses like provolone or Swiss."},
      {image:A.meatCompare,kicker:"PORK",title:"The texture trade-off",body:"Because it is so soft, a 100% pork burger can sometimes feel too gentle or lack the satisfying chew of beef. This is exactly why it shines brightest in a blend."},
      {image:A.meatCompare,kicker:"PORK",title:"The ultimate blend",body:"A 70% beef and 30% pork blend is a revelation. The beef provides the savoury backbone and chew, while the pork softens the bite and adds a subtle sweetness."}
    ]},
    {id:"mb-lamb",title:"Lamb: The Bold Choice",minutes:4,slides:[
      {image:A.meatCompare,kicker:"MEAT & BLENDS",title:"Earthy and aromatic",body:"Lamb tastes grassy, earthy, and slightly gamey. The flavour is concentrated heavily in its fat. It is bold enough to divide a table, making it an exciting meat to master."},
      {image:A.meatCompare,kicker:"LAMB",title:"Fat management",body:"Lamb fat can feel heavy and coat the mouth as it cools. Serve lamb burgers hot, and ensure they have a solid sear to render as much surface fat as possible."},
      {image:A.heroLambPairing,kicker:"LAMB",title:"Cooling pairings",body:"Lamb needs fresh, cooling contrast to balance its heavy profile. Think garlic-yoghurt sauce, sharp feta, goat cheese, fresh mint, and raw red onion."},
      {image:A.heroLambPairing,kicker:"LAMB",title:"What to avoid",body:"Sweet ketchup and classic American cheese clash aggressively with lamb's earthy profile. Keep the flavours leaning toward the Mediterranean."},
      {image:A.meatCompare,kicker:"LAMB",title:"The gateway blend",body:"If pure lamb is too strong, a 50/50 beef-lamb blend is the perfect introduction. It grounds the lamb's boldness in familiar, savoury beef umami."}
    ]},
    {id:"mb-chicken",title:"Chicken: The Blank Canvas",minutes:5,slides:[
      {image:A.meatChickenBreast,kicker:"MEAT & BLENDS",title:"Light and adaptable",body:"Chicken is the mildest choice — very lean, light, and almost neutral. That neutrality means your seasoning, crust, and toppings must do all the heavy lifting."},
      {image:A.meatChickenGround,kicker:"CHICKEN",title:"Thigh over breast",body:"Always prefer ground chicken thigh over ground breast. The breast has almost no fat and dries out instantly. The thigh's extra fat is what keeps the patty juicy."},
      {image:A.pattyChickenRaw,kicker:"CHICKEN",title:"Handling the wet mix",body:"Ground chicken is significantly wetter and stickier than beef. Chill the meat thoroughly before shaping, and use damp hands to prevent it from sticking to you."},
      {image:A.cookingChickenSkillet,kicker:"CHICKEN",title:"The temperature rule",body:"Chicken must be cooked to exactly 74°C in the centre. With chicken, a probe thermometer is not optional — guessing leads to either dry meat or food safety risks."},
      {image:A.heroChickenPairing,kicker:"CHICKEN",title:"Adding fat back",body:"Because the meat is lean, add fat and boldness through toppings: chipotle mayo, sliced avocado, crispy bacon, and pepper jack cheese."}
    ]},
    {id:"mb-blending",title:"Blending Meats Like a Butcher",minutes:5,slides:[
      {image:A.heroBeefPorkPairing,kicker:"MEAT & BLENDS",title:"Why blend at all",body:"Blends give you the best of two animals. One meat provides the structural backbone and familiar flavour; the second contributes a quality the first lacks — sweetness, juiciness, or aroma."},
      {image:A.heroBeefPorkPairing,kicker:"BLENDING",title:"Beef + pork (70/30)",body:"The crowd-pleaser. Beef anchors the umami while pork adds tenderness and gentle sweetness. It eats noticeably juicier and softer than beef alone."},
      {image:A.heroBeefLambPairing,kicker:"BLENDING",title:"Beef + lamb (50/50)",body:"The adventurer. Beef grounds lamb's gamey edge into a rounded, savoury depth. Pair it with yoghurt sauce and feta rather than ketchup and American cheese."},
      {image:A.meatCompare,kicker:"BLENDING",title:"The gentle marriage",body:"Blend cold meats with open fingers and stop the second the mix looks even. The strands should stay distinct — a blend is a marriage, not a paste."},
      {image:A.meatCompare,kicker:"BLENDING",title:"The safety floor",body:"Any blend containing pork must be cooked fully through — 71°C at the centre. Any blend containing chicken needs 74°C. Pure beef blends can be served pink."}
    ]},
    {id:"mb-fat-ratio",title:"The Science of the Fat Ratio",minutes:6,slides:[
      {image:A.texture,kicker:"THE FAT RATIO",title:"Why 80/20 wins",body:"80% lean to 20% fat is the universal standard for a reason. 20% fat provides enough lubrication to keep the meat tender, enough rendering to baste the crust, and enough flavour to carry the seasoning."},
      {image:A.texture,kicker:"THE FAT RATIO",title:"Fat equals flavour",body:"Most of the compounds that give beef its distinct flavour are fat-soluble. A lean burger doesn't just taste drier; it literally tastes less beefy."},
      {image:A.texture,kicker:"THE FAT RATIO",title:"The shrinkage factor",body:"Fat renders (melts) and leaves the patty during cooking. A 70/30 blend will shrink significantly more in the pan than an 85/15 blend. You must account for this when sizing your patties."},
      {image:A.texture,kicker:"THE FAT RATIO",title:"Smash burgers need fat",body:"Smash burgers require high heat and a long sear relative to their thickness. Without at least 20% fat, they will stick to the pan and dry out before a proper crust forms."},
      {image:A.texture,kicker:"THE FAT RATIO",title:"Thick burgers and fat",body:"A thick pub burger cooked to medium-rare retains more of its internal juices, so it can succeed with slightly less fat (85/15) without feeling dry."}
    ]}
  ],
  "grind-mix":[
    {id:"gm-grind-size",title:"Understanding Grind Size",minutes:4,slides:[
      {image:A.grindLoose,kicker:"GRIND & MIX",title:"Coarse vs. fine",body:"The size of the meat grinder plate dictates the final texture. A coarse grind leaves larger pieces of fat and muscle, resulting in a steak-like chew. A fine grind creates a denser, more uniform patty."},
      {image:A.grindLoose,kicker:"GRIND SIZE",title:"The supermarket standard",body:"Most supermarket ground beef is a medium-fine grind. It holds together easily but can become dense if overworked. Handle it with extreme care."},
      {image:A.grindLoose,kicker:"GRIND SIZE",title:"The butcher's advantage",body:"Asking a butcher for a coarse, single-pass grind preserves the distinct strands of meat. This creates the loose, crumbly texture that defines premium burgers."},
      {image:A.grindLoose,kicker:"GRIND SIZE",title:"Fat distribution",body:"A good grind distributes fat evenly in small flecks. If you see massive white chunks or long strings of fat, the grinder was dull and smeared the fat instead of cutting it."},
      {image:A.grindLoose,kicker:"GRIND SIZE",title:"The visual test",body:"Look at the meat in the package. You should be able to see individual strands of meat, like tiny noodles. If it looks like a solid pink paste, it has been overworked."}
    ]},
    {id:"gm-temperature",title:"Temperature Control",minutes:5,slides:[
      {image:A.mixing,kicker:"GRIND & MIX",title:"Cold fat is safe fat",body:"The golden rule of burger prep: keep the meat cold. If the fat warms up before cooking, it smears into the meat instead of remaining in distinct pockets."},
      {image:A.mixing,kicker:"TEMPERATURE",title:"The smearing problem",body:"Smeared fat melts out of the burger immediately when it hits the pan, leaving you with a dry, dense puck. Distinct cold fat pockets render slowly, basting the meat."},
      {image:A.mixing,kicker:"TEMPERATURE",title:"Chill your hands",body:"Your hands are warm. If you spend five minutes kneading the meat, you are melting the fat. Work quickly, and wash your hands in cold water before mixing."},
      {image:A.mixing,kicker:"TEMPERATURE",title:"Chill the bowls",body:"If you are mixing a large batch or grinding your own meat, put your mixing bowls and grinder parts in the freezer for 20 minutes first. Cold equipment protects the fat."},
      {image:A.mixing,kicker:"TEMPERATURE",title:"Back to the fridge",body:"Once you have shaped your patties, put them back in the fridge for at least 15 minutes before cooking. This resets the fat and helps the patty hold together in the pan."}
    ]},
    {id:"gm-mixing-technique",title:"The Art of the Gentle Mix",minutes:5,slides:[
      {image:A.mixing,kicker:"GRIND & MIX",title:"The sausage effect",body:"When you knead ground meat, you dissolve the protein myosin. This protein acts like glue, binding the meat together into a tight, springy matrix — exactly what you want for sausage, and exactly what ruins a burger."},
      {image:A.texture,kicker:"TECHNIQUE",title:"Open fingers",body:"When mixing blends or folding in aromatics, use open fingers like a rake. Toss the meat gently rather than squeezing it in your fists."},
      {image:A.texture,kicker:"TECHNIQUE",title:"Less is more",body:"Stop mixing the exact second the ingredients look evenly distributed. Every additional fold you make is chewiness you will taste later."},
      {image:A.texture,kicker:"TECHNIQUE",title:"The visual check",body:"After mixing, the meat should still look like ground meat, with distinct strands and fat pockets visible. If it looks like a smooth paste, you have gone too far."},
      {image:A.texture,kicker:"TECHNIQUE",title:"The drop test",body:"If you drop a piece of the mixed meat onto the counter and it bounces or holds its shape perfectly, it's overworked. It should slump and feel delicate."}
    ]},
    {id:"gm-aromatics",title:"Aromatics in the Mix",minutes:6,slides:[
      {image:A.garlicInMeat,kicker:"GRIND & MIX",title:"Inside vs. outside",body:"Seasoning the outside builds crust; seasoning the inside builds background flavour. But solid ingredients inside the patty behave very differently under heat."},
      {image:A.onionGrated,kicker:"AROMATICS",title:"The raw onion problem",body:"Chopped raw onion folded into a patty rarely cooks through. You get crunchy, sharp pockets of raw onion that disrupt the texture and overpower the beef."},
      {image:A.onionGrated,kicker:"AROMATICS",title:"The grated solution",body:"If you want onion inside, grate it. Grated onion melts invisibly into the mix, providing subtle sweetness and noticeable moisture. Max 20g per 500g of meat."},
      {image:A.onionGrated,kicker:"AROMATICS",title:"Squeeze the juice",body:"Always squeeze grated onion in a paper towel before folding it in. Too much onion juice makes the meat wet, preventing a good sear and causing the patty to fall apart."},
      {image:A.garlicInMeat,kicker:"AROMATICS",title:"Garlic rules",body:"Minced fresh garlic stays harsh in quick-cooking patties. Use garlic powder for even, foolproof warmth, or roasted garlic paste for sweet, nutty richness without the bite."}
    ]},
    {id:"gm-salt-timing",title:"Why We Never Salt the Mix",minutes:5,slides:[
      {image:A.seasoningSalt,kicker:"GRIND & MIX",title:"The cardinal sin",body:"Never, ever fold salt into the ground meat mixture before shaping. Salt is the fastest way to dissolve myosin and trigger the sausage effect."},
      {image:A.seasoningSalt,kicker:"SALT TIMING",title:"The science",body:"Salt draws out moisture and breaks down meat proteins. Within minutes of salting the mix, the proteins cross-link, turning the tender crumb into a dense, rubbery puck."},
      {image:A.seasoningSalt,kicker:"SALT TIMING",title:"The surface rule",body:"Always salt the outside of the patty, just before it hits the pan. This draws a tiny amount of moisture to the surface, which aids in forming a crackling Maillard crust."},
      {image:A.seasoningSalt,kicker:"SALT TIMING",title:"The exception",body:"The only time you salt the mix is if you are making a deliberate sausage-style patty (like a Cevapi burger) where that bouncy, tight texture is the goal."},
      {image:A.seasoningSalt,kicker:"SALT TIMING",title:"Dry brining burgers?",body:"Unlike steak, you do not dry brine burgers. Salting the surface hours ahead will draw moisture out and cure the exterior, creating a tough, ham-like skin on the patty."}
    ]}
  ],
  "shape-structure":[
    {id:"ss-portioning",title:"Portioning for Purpose",minutes:4,slides:[
      {image:A.portion,kicker:"SHAPE & STRUCTURE",title:"Consistency is control",body:"If your patties are different sizes, they will finish cooking at different times. A digital scale is the cheapest way to instantly improve your cooking."},
      {image:A.portion,kicker:"PORTIONING",title:"The smash weight",body:"For a smash burger, 60g to 80g is the ideal window. Any smaller and it burns; any larger and it won't smash thin enough to maximize the crust-to-meat ratio."},
      {image:A.portion,kicker:"PORTIONING",title:"The classic weight",body:"For a standard diner-style or backyard burger, 140g to 170g (about 1/3 lb) provides a balanced meat-to-bun ratio while still cooking quickly and evenly."},
      {image:A.portion,kicker:"PORTIONING",title:"The pub weight",body:"Thick pub-style burgers range from 200g to 225g (1/2 lb). At this weight, you must manage the heat carefully to cook the centre without burning the exterior."},
      {image:A.portion,kicker:"PORTIONING",title:"Accounting for shrink",body:"An 80/20 patty will lose about 20% of its weight and diameter during cooking as fat renders and water evaporates. Size your raw patties wider than your bun."}
    ]},
    {id:"ss-gentle-shaping",title:"The Gentle Shape",minutes:5,slides:[
      {image:A.shaping,kicker:"SHAPE & STRUCTURE",title:"Minimal pressure",body:"Shape the patty with the absolute minimum pressure required to make it hold together. The patty only needs to survive the trip to the pan; the sear will lock it together."},
      {image:A.shaping,kicker:"SHAPING",title:"The tossing method",body:"Instead of pressing the meat into a puck, gently toss the portion back and forth between your cupped hands. This rounds the edges naturally without compressing the centre."},
      {image:A.shaping,kicker:"SHAPING",title:"The edge check",body:"Look at the edges of your shaped patty. If they are perfectly smooth and sheer, you pressed too hard. Ragged, slightly uneven edges mean you preserved the loose texture."},
      {image:A.shaping,kicker:"SHAPING",title:"Using a ring",body:"If you struggle with consistency, use a metal pastry ring or the lid of a large jar lined with cling film. Press the meat in gently just to reach the edges, then pop it out."},
      {image:A.shaping,kicker:"SHAPING",title:"The wet hands trick",body:"If the meat is sticking to you, lightly dampen your hands with cold water. The water creates a barrier, and the cold keeps the fat from melting."}
    ]},
    {id:"ss-the-dimple",title:"The Dimple Trick",minutes:4,slides:[
      {image:A.dimple,kicker:"SHAPE & STRUCTURE",title:"The doming problem",body:"As meat cooks, the proteins contract. The edges of a patty cook and contract faster than the centre, forcing the middle to bulge upward into a dome."},
      {image:A.dimple,kicker:"THE DIMPLE",title:"Why doming ruins burgers",body:"A domed patty cooks unevenly, refuses to hold toppings securely, and makes the burger difficult to eat. You want a flat, even surface from edge to edge."},
      {image:A.dimple,kicker:"THE DIMPLE",title:"The thumb press",body:"For any patty thicker than 1.5 cm, press your thumb gently into the centre to create a shallow dimple, about 1/3 of the way through the meat."},
      {image:A.dimple,kicker:"THE DIMPLE",title:"The flattening out",body:"As the edges contract during cooking, they will pull the meat outward. The dimple will rise and flatten out, leaving you with a perfectly level patty."},
      {image:A.dimple,kicker:"THE DIMPLE",title:"Not for smash burgers",body:"Do not dimple smash burgers. You will be flattening them entirely with a press in the pan, so a pre-made dimple is irrelevant."}
    ]},
    {id:"ss-smash-technique",title:"The Smash Technique",minutes:6,slides:[
      {image:A.heroSmash,kicker:"SHAPE & STRUCTURE",title:"Maximum Maillard",body:"The smash burger exists to maximize the crust. By smashing the meat flat against screaming hot metal, you create a massive surface area for the Maillard reaction."},
      {image:A.heroSmash,kicker:"SMASHING",title:"Start with a ball",body:"Do not pre-shape smash patties. Roll the 70g portion into a loose meatball. This ensures that when you smash it, the meat spreads outward evenly."},
      {image:A.heroSmash,kicker:"SMASHING",title:"The first 10 seconds",body:"You must smash the ball within the first 10 seconds of it hitting the pan. After that, the fat begins to render. Smashing late squeezes out the melted fat, leaving dry meat."},
      {image:A.heroSmash,kicker:"SMASHING",title:"The equipment",body:"You need a heavy, flat, unslotted spatula or a dedicated burger press. Use a second utensil (like the handle of a wooden spoon) to press down on the spatula for maximum leverage."},
      {image:A.heroSmash,kicker:"SMASHING",title:"The scrape",body:"The crust will fuse to the pan. When it's time to flip, you must scrape aggressively under the crust to release it. If you leave the crust stuck to the pan, the smash was wasted."}
    ]},
    {id:"ss-thickness-heat",title:"Matching Thickness to Heat",minutes:5,slides:[
      {image:A.thickness,kicker:"SHAPE & STRUCTURE",title:"The geometry of cooking",body:"The thickness of your patty dictates how you must manage the heat. You cannot cook a 2.5 cm pub burger with the same technique as a 6 mm smash patty."},
      {image:A.thickness,kicker:"THICKNESS",title:"Thin patties (Smash)",body:"Needs ripping hot heat. The goal is to build a massive crust in 60 seconds before the thin centre overcooks. Flip once, add cheese, remove quickly."},
      {image:A.thickness,kicker:"THICKNESS",title:"Medium patties (Classic)",body:"Needs medium-high heat. You want a solid sear on the outside while allowing the heat enough time to penetrate to the centre without burning the crust."},
      {image:A.thickness,kicker:"THICKNESS",title:"Thick patties (Pub)",body:"Needs a two-stage cook. Sear hard on both sides, then lower the heat significantly (or move to a cooler zone on a grill) to let the centre reach target temperature gently."},
      {image:A.thickness,kicker:"THICKNESS",title:"The thermometer check",body:"For thick patties, visual cues fail. Use a probe thermometer through the side of the patty to check the dead centre. Pull at 54°C for medium-rare."}
    ]}
  ],
  "season-crust":[
    {id:"sc-the-maillard-reaction",title:"The Maillard Reaction",minutes:5,slides:[
      {image:A.seasoningCrust,kicker:"SEASON & CRUST",title:"Browning is flavour",body:"The Maillard reaction is a chemical process where amino acids and sugars recombine under high heat (above 140°C) to create hundreds of new, savoury, roasted flavour compounds."},
      {image:A.seasoningCrust,kicker:"MAILLARD",title:"Moisture is the enemy",body:"Water boils at 100°C. If your meat is wet, the pan's energy goes into boiling the water rather than heating the meat to the 140°C needed for browning. Dry the meat surface."},
      {image:A.seasoningCrust,kicker:"MAILLARD",title:"Heat capacity",body:"You need a pan that holds heat well — cast iron or heavy carbon steel. When cold meat hits a thin pan, the pan's temperature drops instantly, halting the Maillard reaction."},
      {image:A.seasoningCrust,kicker:"MAILLARD",title:"Contact matters",body:"The reaction only happens where the meat touches the metal. Pressing the patty gently (or smashing it) ensures maximum surface contact and an even, wall-to-wall crust."},
      {image:A.seasoningCrust,kicker:"MAILLARD",title:"The colour check",body:"Don't flip until you see a deep mahogany brown. Grey or pale tan means the reaction hasn't finished. Trust the colour, not the clock."}
    ]},
    {id:"sc-salt-application",title:"The Rules of Salt",minutes:4,slides:[
      {image:A.seasoningSalt,kicker:"SEASON & CRUST",title:"Salt amplifies beef",body:"Salt does not just make things salty; it suppresses bitterness and amplifies savoury umami notes. A burger without adequate salt tastes flat and dull, no matter the meat quality."},
      {image:A.seasoningSalt,kicker:"SALT",title:"Weigh your salt",body:"Use exactly 1% of the patty's weight in salt. For a 150g patty, that is 1.5g of salt. Eyeballing leads to inconsistency; a cheap digital scale guarantees perfection."},
      {image:A.seasoningEven,kicker:"SALT",title:"Season from a height",body:"Drop the salt from 25–30 cm above the patty. This allows the grains to scatter evenly across the surface. Concentrated patches of salt ruin the bite."},
      {image:A.seasoningOneSide,kicker:"SALT",title:"The timing rule",body:"Season the first side immediately before it hits the pan. Season the second side while the first side cooks, just before the flip. Salt sitting on raw meat draws out water."},
      {image:A.seasoningSalt,kicker:"SALT",title:"Flake vs. Kosher",body:"Use Kosher salt or fine sea salt for even coverage. Large flaky finishing salts bounce off raw meat and distribute poorly in the pan."}
    ]},
    {id:"sc-pepper-spices",title:"Pepper and Spices",minutes:5,slides:[
      {image:A.seasoningPepper,kicker:"SEASON & CRUST",title:"Freshly cracked only",body:"Pre-ground pepper dust has lost its volatile oils and tastes like ash. Freshly cracked black pepper carries a citrusy, floral heat that wakes up the heavy beef fat."},
      {image:A.seasoningPepper,kicker:"PEPPER",title:"The coarse grind",body:"Use a coarse grind. Large pieces of pepper toast in the hot fat, mellowing their bite and creating aromatic, crunchy pockets in the crust."},
      {image:A.seasoningPaprika,kicker:"SPICES",title:"Smoked paprika",body:"A pinch of smoked paprika (about 1g) adds a warm, campfire note that mimics outdoor grilling when cooking indoors. It deepens the crust colour beautifully."},
      {image:A.seasoningPaprika,kicker:"SPICES",title:"The burning risk",body:"Spices burn faster than meat. If you use a heavy spice rub, you must lower the pan heat slightly to prevent the paprika or garlic powder from turning bitter and acrid."},
      {image:A.seasoningBlend,kicker:"SPICES",title:"Dried herbs",body:"Dried herbs (oregano, thyme) tolerate pan heat well and pull the flavour profile toward Mediterranean territory. Crush them between your palms as you apply to wake the oils."}
    ]},
    {id:"sc-the-flip",title:"The Perfect Flip",minutes:4,slides:[
      {image:A.cookingChickenSkillet,kicker:"SEASON & CRUST",title:"When to flip",body:"For classic burgers, flip when you see the edges turning brown and juices beginning to pool on the raw upper surface. For smash burgers, flip when the edges look lacy and dark."},
      {image:A.cookingChickenSkillet,kicker:"THE FLIP",title:"The release",body:"A proper crust will naturally release from a hot pan. If you feel heavy resistance when sliding the spatula under a classic patty, wait 30 seconds. (Smash burgers are the exception)."},
      {image:A.cookingChickenSkillet,kicker:"THE FLIP",title:"The aggressive scrape",body:"For smash burgers, the crust is fused. You must use a sharp, stiff spatula and scrape aggressively at a 45-degree angle to chisel the crust off the metal. Leave no brown behind."},
      {image:A.cookingChickenSkillet,kicker:"THE FLIP",title:"One flip vs. many",body:"Flipping once builds a thicker, more distinct crust on each side. Flipping multiple times (every 30 seconds) cooks the centre faster and more evenly. Both are valid techniques."},
      {image:A.cookingChickenSkillet,kicker:"THE FLIP",title:"No pressing after flipping",body:"Once you flip a classic burger, never press down on it with your spatula. You are just squeezing the juices out into the pan. Let the heat do the work."}
    ]},
    {id:"sc-doneness-safety",title:"Burger Doneness & Safety",minutes:5,slides:[
      {image:A.heroCross,kicker:"SEASON & CRUST",title:"Burgers are not steaks",body:"Grinding distributes surface bacteria throughout the meat. A steak is sterile inside; a burger is not. This is why burger doneness rules differ from steak rules."},
      {image:A.heroCross,kicker:"DONENESS",title:"The safe pink window",body:"Freshly ground, high-quality beef from a trusted butcher can be served at 57–60°C — juicy with a blush of pink. Supermarket pre-ground beef is safest at 68–71°C."},
      {image:A.heroCross,kicker:"DONENESS",title:"The non-negotiables",body:"Pork blends: 71°C, always. Chicken: 74°C, always. There is no rare pork burger and no medium chicken burger — the thermometer decides, not the colour."},
      {image:A.heroCross,kicker:"DONENESS",title:"Probe through the side",body:"Insert the thermometer horizontally through the side of the patty to reach the dead centre. A vertical probe in a thin patty reads the pan heat, not the meat."},
      {image:A.heroCross,kicker:"DONENESS",title:"Juice colour lies",body:"Clear juices do not guarantee safety, and pink juices do not guarantee danger — myoglobin chemistry varies with pH and age. Only temperature tells the truth."}
    ]},
    {id:"sc-pan-management",title:"Managing the Pan",minutes:5,slides:[
      {image:A.cookingChickenSkillet,kicker:"SEASON & CRUST",title:"The right fat",body:"You need a thin layer of fat to start the sear. Use a high-smoke-point oil (like groundnut or canola) or beef tallow. Butter will burn instantly at searing temperatures."},
      {image:A.cookingChickenSkillet,kicker:"PAN MANAGEMENT",title:"Crowding the pan",body:"Do not put four patties in a small pan. They will drop the temperature, release water, and steam each other. Leave at least an inch of space around every patty."},
      {image:A.cookingChickenSkillet,kicker:"PAN MANAGEMENT",title:"Smoke management",body:"A proper sear generates smoke. Turn on your extractor fan before the meat hits the pan. If the oil is smoking heavily before the meat goes in, the pan is too hot."},
      {image:A.cookingChickenSkillet,kicker:"PAN MANAGEMENT",title:"The fond",body:"The browned bits stuck to the pan after cooking are called the fond. If you are making a batch of burgers, wipe the pan out if the fond turns black and bitter."},
      {image:A.cookingChickenSkillet,kicker:"PAN MANAGEMENT",title:"Carryover cooking",body:"A thick burger continues to cook after leaving the pan, rising 2-3°C as the surface heat moves inward. Pull it from the heat just before it reaches your target doneness."}
    ]}
  ],
  "cheese-melt":[
    {id:"cm-american-cheese",title:"The American Standard",minutes:4,slides:[
      {image:A.cheese,kicker:"CHEESE & THE MELT",title:"The king of the melt",body:"American cheese is the undisputed champion of burger cheeses. It melts into a perfectly smooth, glossy drape that binds the patty to the bun without splitting or oiling out."},
      {image:A.cheese,kicker:"AMERICAN CHEESE",title:"The science of the melt",body:"American cheese contains sodium citrate, an emulsifying salt that prevents the fat and water proteins from separating under heat. This is why it melts instead of sweating grease."},
      {image:A.cheese,kicker:"AMERICAN CHEESE",title:"Flavour profile",body:"It is mild, creamy, and salty. It does not compete with the beef; it enhances it, acting almost like a thick, savoury sauce that wraps the entire patty."},
      {image:A.cheese,kicker:"AMERICAN CHEESE",title:"Deli vs. plastic-wrapped",body:"Always buy deli-sliced American cheese if possible. The individually plastic-wrapped singles contain more stabilizers and less actual cheese, resulting in a slightly plastic texture."},
      {image:A.cheese,kicker:"AMERICAN CHEESE",title:"The smash burger requirement",body:"For a smash burger, American cheese is practically mandatory. Its rapid, flawless melt is the only thing that can keep up with the 30-second second-side cook time."}
    ]},
    {id:"cm-aged-cheeses",title:"Working with Aged Cheeses",minutes:5,slides:[
      {image:A.cheese,kicker:"CHEESE & THE MELT",title:"The splitting problem",body:"Aged cheeses like sharp cheddar or mature gruyere taste incredible, but they lack emulsifiers. Under high heat, their fat separates from their protein, leaving a greasy puddle and a rubbery lump."},
      {image:A.cheese,kicker:"AGED CHEESE",title:"Grate, don't slice",body:"To help aged cheese melt faster and more evenly, grate it instead of using thick slices. Grated cheese exposes more surface area to the ambient heat."},
      {image:A.cheese,kicker:"AGED CHEESE",title:"The low-heat melt",body:"Aged cheese needs gentle heat. Move the patty to a cooler zone on the grill, or turn the pan heat to low before adding the cheese, to prevent the fat from breaking."},
      {image:A.cheese,kicker:"AGED CHEESE",title:"The blend trick",body:"If you want the flavour of aged cheddar with the melt of American, place a thin slice of cheddar underneath a slice of American. The emulsifiers in the American will help stabilize the cheddar."},
      {image:A.cheese,kicker:"AGED CHEESE",title:"Matching the meat",body:"Strong cheeses belong on strong burgers. A sharp, funky blue cheese or a mature cheddar pairs beautifully with the earthy notes of a lamb or beef-lamb blend."}
    ]},
    {id:"cm-the-steam-dome",title:"The Steam Dome Technique",minutes:4,slides:[
      {image:A.cheese,kicker:"CHEESE & THE MELT",title:"Trapping the heat",body:"The fastest, most reliable way to melt any cheese is to trap steam. Placing a lid or a metal dome over the patty creates an instant convection oven environment."},
      {image:A.cheese,kicker:"STEAM DOME",title:"The water splash",body:"Add the cheese, drop a teaspoon of water into the hot pan next to the patty, and immediately cover with a dome. The water vaporizes instantly, enveloping the cheese in hot steam."},
      {image:A.cheese,kicker:"STEAM DOME",title:"Timing is everything",body:"A steam dome works in seconds. Leave it on for 15 to 20 seconds max. Leave it too long, and you risk steaming the crust you just worked so hard to build."},
      {image:A.cheese,kicker:"STEAM DOME",title:"The equipment",body:"A dedicated metal burger dome is great, but any heat-safe bowl, a deep pan lid, or even a disposable aluminium pie tin works perfectly. You just need to trap the vapour."},
      {image:A.cheese,kicker:"STEAM DOME",title:"Essential for thick burgers",body:"For a thick pub burger, the pan heat alone won't melt the top of the cheese before the bottom of the patty overcooks. The steam dome is essential here."}
    ]},
    {id:"cm-timing-the-melt",title:"Timing the Melt",minutes:4,slides:[
      {image:A.cheese,kicker:"CHEESE & THE MELT",title:"The final countdown",body:"Cheese should be the absolute last thing that happens in the pan. Add it only when the burger is within 30 seconds of being completely finished."},
      {image:A.cheese,kicker:"TIMING",title:"The premature melt",body:"If you add the cheese too early, it will over-melt, slide completely off the patty into the pan, and burn into a bitter, smoking mess."},
      {image:A.cheese,kicker:"TIMING",title:"The residual melt",body:"If you are using American cheese on a hot smash patty, you can often turn the heat completely off when you add the cheese. The residual heat in the meat and pan is enough."},
      {image:A.cheese,kicker:"TIMING",title:"The resting melt",body:"If you are resting a thick pub burger, you can add the cheese while it rests on the board. Tent it loosely with foil, and the carryover heat will melt the cheese gently."},
      {image:A.cheese,kicker:"TIMING",title:"Multiple slices",body:"If you are using two slices of cheese on a single patty, offset them to create an eight-point star. This ensures the cheese drapes evenly over the edges instead of pooling in one spot."}
    ]},
    {id:"cm-cheese-as-glue",title:"Cheese as Structural Glue",minutes:4,slides:[
      {image:A.cheese,kicker:"CHEESE & THE MELT",title:"Binding the stack",body:"Melted cheese is the mortar of the burger architecture. It fills the gaps between the uneven patty surface and the flat bun, locking the assembly together."},
      {image:A.cheese,kicker:"STRUCTURAL GLUE",title:"The double patty lock",body:"In a double smash burger, the cheese goes between the patties. It melts and fuses the two thin patties into a single, cohesive structural unit that won't slide apart."},
      {image:A.cheese,kicker:"STRUCTURAL GLUE",title:"Anchoring toppings",body:"If you are using loose toppings like grilled onions or chopped chillies, press them directly into the melting cheese while it's still in the pan. The cheese will set and hold them in place."},
      {image:A.cheese,kicker:"STRUCTURAL GLUE",title:"The bottom cheese shield",body:"Placing a slice of cheese on the bottom bun under the hot patty creates a waterproof fat barrier. It prevents the meat juices from turning the bottom bun to mush."},
      {image:A.cheese,kicker:"STRUCTURAL GLUE",title:"The drape",body:"A perfect melt should drape over the sides of the patty, sealing the edges. This captures the juices inside the meat rather than letting them run out onto the plate."}
    ]}
  ],
  "assembly-architecture":[
    {id:"aa-the-bun",title:"Bun Selection and Toasting",minutes:5,slides:[
      {image:A.bunPotatoToasted,kicker:"ASSEMBLY ARCHITECTURE",title:"The unsung hero",body:"The bun is 40% of the burger's volume. A bad bun ruins a great patty. It must be soft enough to yield to a bite, but resilient enough to hold wet ingredients without collapsing."},
      {image:A.bunPotatoToasted,kicker:"THE BUN",title:"Potato vs. Brioche",body:"Potato buns are the gold standard — squishy, resilient, and mildly sweet. Brioche is rich and buttery but can be too fragile and cake-like for a heavy, juicy burger."},
      {image:A.toast,kicker:"THE BUN",title:"Why we toast",body:"Toasting the cut face of the bun isn't just for flavour; it creates a structural barrier. The crispy, dehydrated surface slows down the absorption of sauces and meat juices."},
      {image:A.toast,kicker:"THE BUN",title:"The fat barrier",body:"Always toast with fat. A thin layer of mayonnaise or butter on the bun before toasting browns it beautifully and adds a hydrophobic (water-repelling) layer of fat to protect the crumb."},
      {image:A.toast,kicker:"THE BUN",title:"Edge to edge",body:"Ensure the toast reaches all the way to the edges. A bun that is only toasted in the centre will collapse at the rim where your fingers are holding it."}
    ]},
    {id:"aa-sauce-placement",title:"Sauce Placement and Barriers",minutes:4,slides:[
      {image:A.sauce,kicker:"ASSEMBLY ARCHITECTURE",title:"Lubrication and flavour",body:"Sauce provides necessary lubrication and acid to balance the rich beef fat. But placed incorrectly, it acts as a lubricant for the entire stack to slide apart."},
      {image:A.sauce,kicker:"SAUCE",title:"The bottom bun rule",body:"Always sauce the bottom bun. This anchors the patty and ensures the sauce hits your tongue first, delivering immediate acidic contrast to the rich meat."},
      {image:A.sauce,kicker:"SAUCE",title:"The top bun rule",body:"You can sauce the top bun, but apply it thinly. The top bun is already absorbing the rising steam and juices from the hot patty; too much sauce turns it to paste."},
      {image:A.sauce,kicker:"SAUCE",title:"Edge to edge coverage",body:"Spread the sauce evenly from edge to edge. A massive dollop in the centre will squeeze out the sides on the first bite, leaving the rest of the burger dry."},
      {image:A.sauce,kicker:"SAUCE",title:"The mayo shield",body:"Mayonnaise is an emulsion of oil and egg. A thin layer of mayo on the bottom bun acts as a waterproof shield, repelling the water-based juices of the meat and tomato."}
    ]},
    {id:"aa-stacking-order",title:"The Order of Operations",minutes:6,slides:[
      {image:A.layers,kicker:"ASSEMBLY ARCHITECTURE",title:"Gravity and friction",body:"A burger is an exercise in engineering. You must manage gravity, moisture, and friction. Put slippery things next to grippy things, and heavy things at the bottom."},
      {image:A.layers,kicker:"STACKING",title:"The bottom heavy rule",body:"The patty is the heaviest item. It belongs low in the stack, resting directly on the bottom bun (or a sauce/pickle layer). Putting thick veg under the patty makes it unstable."},
      {image:A.layers,kicker:"STACKING",title:"The tomato problem",body:"Tomatoes are wet and slippery. Never place a tomato directly next to a lettuce leaf, or the top half of the burger will slide off. Place the tomato under the cheese or against the bun."},
      {image:A.layers,kicker:"STACKING",title:"Lettuce placement",body:"Shredded iceberg lettuce on the bottom bun creates a dry bed for the patty to sit on, catching juices. A whole leaf of butter lettuce on top protects the top bun from steam."},
      {image:A.layers,kicker:"STACKING",title:"The classic diner stack",body:"Bottom bun → Sauce → Pickles → Patty with Cheese → Tomato → Lettuce → Top bun with light sauce. This balances weight, isolates moisture, and maximizes friction."}
    ]},
    {id:"aa-temperature-contrast",title:"Temperature Contrast",minutes:4,slides:[
      {image:A.finished,kicker:"ASSEMBLY ARCHITECTURE",title:"Hot meets cold",body:"A great burger is not a uniform temperature. The contrast between the screaming hot, salty patty and the crisp, cold, acidic vegetables is what makes the bite exciting."},
      {image:A.finished,kicker:"CONTRAST",title:"Keep veg cold",body:"Keep your lettuce, tomatoes, and pickles in the fridge until the exact moment of assembly. Warm, wilted lettuce ruins the structural contrast of the burger."},
      {image:A.finished,kicker:"CONTRAST",title:"The resting window",body:"Have your buns toasted and your toppings laid out before the meat finishes cooking. The patty should go from the pan, to the bun, to your mouth as quickly as possible."},
      {image:A.finished,kicker:"CONTRAST",title:"Melting the cheese",body:"The cheese is the bridge between hot and cold. It must be fully melted on the hot patty before assembly, so it drapes and holds the colder toppings in place."},
      {image:A.finished,kicker:"CONTRAST",title:"The foil wrap trick",body:"Wrapping the finished burger tightly in foil for 2 minutes homogenizes the temperature slightly, softening the bun and steaming the stack. It's a stylistic choice for diner-style burgers."}
    ]},
    {id:"aa-the-final-bite",title:"Eating Mechanics",minutes:4,slides:[
      {image:A.finished,kicker:"ASSEMBLY ARCHITECTURE",title:"The bite test",body:"The ultimate test of your architecture is the first bite. The bun should yield, the meat should shear cleanly, and the toppings should stay exactly where you put them."},
      {image:A.finished,kicker:"MECHANICS",title:"The squish factor",body:"Before taking a bite, give the top bun a gentle but firm press. This compresses the crumb, sets the toppings into the sauce, and locks the architecture in place."},
      {image:A.finished,kicker:"MECHANICS",title:"The hold",body:"Hold the burger with both thumbs supporting the back of the bottom bun, and your fingers spread across the top. This pinches the back closed, preventing ingredients from shooting out."},
      {image:A.finished,kicker:"MECHANICS",title:"Width over height",body:"A burger should be wider than it is tall. If you have to unhinge your jaw to take a bite, the architecture has failed. Build wider patties, not taller stacks."},
      {image:A.finished,kicker:"MECHANICS",title:"The last bite",body:"If the last bite of the burger has the exact same ratio of bun, meat, cheese, and sauce as the first bite, your assembly was flawless."}
    ]}
  ]
};
