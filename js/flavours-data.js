import { assets, RAW } from "./assets.js";

export const flavourTopics = [
  {
    id: "meat-beef",
    category: "Meat Taste Guides",
    title: "How Beef Tastes",
    flavour: "Savoury, rich, and umami-heavy",
    hero: assets.heroBeefPairing,
    slides: [
      { image: assets.meatBeef, kicker: "THE FOUNDATION", title: "The Taste of Beef", body: "Beef is the gold standard for burgers because it delivers a deep, savoury umami punch. It has an inherently rich, mineral-heavy flavour that holds up to aggressive searing and bold toppings. When people picture 'a burger', this is the flavour they are imagining." },
      { image: `${RAW}/ingredients/beef/BM-ING-BEEF-001-80-20-ground-chuck.webp`, kicker: "THE FAT", title: "Where Flavour Lives", body: "Much of beef's signature taste comes from its fat. An 80/20 ratio of lean meat to fat provides enough rendered tallow to baste the meat as it cooks, creating a buttery, roasted flavour profile. Leaner blends taste cleaner but need more careful cooking." },
      { image: `${RAW}/ingredients/beef/BM-ING-BEEF-006-fat-marbling-macro.webp`, kicker: "THE SEAR", title: "The Maillard Reaction", body: "When beef hits a hot pan, amino acids and sugars react to create hundreds of new flavour compounds. This browned crust tastes entirely different from the interior: nutty, roasted, and slightly bitter. Beef rewards a hard sear more than any other burger meat." },
      { image: assets.heroBeefPairing, kicker: "THE PAIRING", title: "The Classic Beef Build", body: "Beef pairs beautifully with sharp, salty, and acidic ingredients. American cheese melts into its fat, pickles and mustard cut through the richness, and raw onion adds bite. Everything on this board exists to balance beef's intensity, not compete with it." },
      { image: `${RAW}/cheese/BM-CHEESE-018-cheese-comparison-flatlay.webp`, kicker: "CHEESE", title: "Recommended Cheeses", body: "American cheese is the classic choice because it melts into a sauce that coats the fat. Sharp cheddar cuts through richness with acidity, and Swiss adds nutty depth. Avoid delicate cheeses that vanish under beef's heavy flavour." },
      { image: `${RAW}/ingredients/buns/BM-BUN-001-brioche-bun.webp`, kicker: "BUNS & SAUCES", title: "Bun and Sauce Matches", body: "A soft potato or brioche bun cushions beef's dense bite, while classic burger sauce, ketchup, and mustard supply the sweet-acid counterpoints the meat craves. Save the crusty artisan rolls for sandwiches — they squeeze the juices straight out of a burger." },
      { image: `${RAW}/meat/BM-MEAT-006-overmixed-meat-mistake.webp`, kicker: "COMMON MISTAKES", title: "How Beef Goes Wrong", body: "The two classic beef mistakes are overworking the mince, which turns the patty dense and bouncy, and choosing meat that is too lean, which cooks up dry. Buy 80/20, handle it cold and gently, and beef will forgive almost everything else." }
    ]
  },
  {
    id: "meat-pork",
    category: "Meat Taste Guides",
    title: "How Pork Tastes",
    flavour: "Sweet, fatty, and tender",
    hero: assets.heroPorkPairing,
    slides: [
      { image: `${RAW}/meat/BM-MEAT-002-pork-hero.webp`, kicker: "THE PROFILE", title: "The Taste of Pork", body: "Ground pork is lighter, sweeter, and significantly more tender than beef. Its fat renders at a lower temperature, creating a very juicy patty with a mild, slightly fruity savoury profile. It reads as 'gentle' where beef reads as 'bold'." },
      { image: `${RAW}/heroes/ingredients/BM-HERO-ING-007-beef-vs-beef-pork-comparison.webp`, kicker: "THE BLEND", title: "Pork in Blends", body: "Because pure pork can be too mild for a classic burger experience, it is often blended with beef. A 70% beef to 30% pork blend borrows pork's incredible tenderness and sweet fat while maintaining beef's savoury punch — the best of both animals." },
      { image: assets.heroPorkPairing, kicker: "THE PAIRING", title: "The Pork Build", body: "Pork loves sweetness, gentle heat, and mild dairy. Caramelised onions echo its natural sugars, spicy mustard and BBQ sauce lift its mildness, and a soft brioche bun matches its tender texture. Think 'sweet and smooth' rather than 'sharp and loud'." },
      { image: `${RAW}/cheese/BM-CHEESE-014-provolone.webp`, kicker: "CHEESE", title: "Recommended Cheeses", body: "Choose smooth-melting, mild cheeses: provolone and Swiss are ideal because they complement pork's sweetness without steamrolling it. Sharp cheddar tends to clash — its acidity fights the meat instead of supporting it." },
      { image: `${RAW}/cooking/BM-COOK-011-cold-pan-mistake.webp`, kicker: "COMMON MISTAKES", title: "How Pork Goes Wrong", body: "Pork fat renders fast, so a lukewarm pan makes the patty stew in its own juices instead of searing. Pork burgers must also be cooked through — use a thermometer and aim for 71°C in the centre rather than guessing by colour." }
    ]
  },
  {
    id: "meat-lamb",
    category: "Meat Taste Guides",
    title: "How Lamb Tastes",
    flavour: "Earthy, grassy, and robust",
    hero: assets.heroLambPairing,
    slides: [
      { image: `${RAW}/meat/BM-MEAT-003-lamb-hero.webp`, kicker: "THE PROFILE", title: "The Taste of Lamb", body: "Lamb has a distinctive, earthy, and slightly gamey flavour. The taste is heavily concentrated in its fat, which has a higher melting point and coats the palate with a rich, robust sensation. It is the most opinionated meat you can put in a bun." },
      { image: `${RAW}/heroes/ingredients/BM-HERO-ING-008-beef-vs-beef-lamb-comparison.webp`, kicker: "THE BLEND", title: "Taming the Earthiness", body: "A pure lamb burger can be overwhelming for some. Blending 50/50 with beef grounds the burger in familiar umami while allowing the lamb's aromatic qualities to shine through. Beginners should start with the blend, then work up to full lamb." },
      { image: assets.heroLambPairing, kicker: "THE PAIRING", title: "The Lamb Build", body: "Lamb requires bold, fresh, and cooling pairings to balance its heavy fat: raw red onion, crumbly feta, fresh mint, and yoghurt-based sauces. Everything on this board is Mediterranean for a reason — those cuisines solved lamb centuries ago." },
      { image: `${RAW}/condiments/BM-COND-008-greek-yoghurt-burger-sauce.webp`, kicker: "SAUCES", title: "Cooling Sauces Win", body: "A garlic-yoghurt sauce with lemon is the definitive lamb pairing: its acidity and coolness slice through the dense fat. Standard ketchup and sweet burger sauces usually clash with lamb's earthiness — save them for beef." },
      { image: `${RAW}/cheese/BM-CHEESE-013-swiss-cheese.webp`, kicker: "CHEESE & BUNS", title: "Cheese and Bun Matches", body: "Feta and goat cheese bring salty freshness; Swiss brings nutty restraint. A toasted sesame bun adds a roasted note that flatters lamb beautifully. Avoid heavy cheese sauces — lamb already saturates the palate with fat." },
      { image: `${RAW}/cooking/BM-COOK-012-smoking-hot-pan-mistake.webp`, kicker: "COMMON MISTAKES", title: "How Lamb Goes Wrong", body: "Lamb fat smokes aggressively, so ventilate before you sear. The bigger mistake is under-seasoning: lamb's boldness swallows timid seasoning. Salt it confidently and give it a dark, serious crust — lamb can take it." }
    ]
  },
  {
    id: "meat-chicken",
    category: "Meat Taste Guides",
    title: "How Chicken Tastes",
    flavour: "Clean, mild, and highly adaptable",
    hero: assets.heroChickenPairing,
    slides: [
      { image: assets.meatChickenBreast, kicker: "THE PROFILE", title: "The Taste of Chicken", body: "Ground chicken is a blank canvas. It is incredibly mild, very lean, and relies almost entirely on the seasonings, crust, and toppings you provide to deliver flavour. That neutrality is not a weakness — it is an invitation." },
      { image: assets.meatChickenGround, kicker: "THE GRIND", title: "Thigh Beats Breast", body: "When buying ground chicken, prefer thigh meat. It carries roughly twice the fat of breast, which translates directly into moisture and flavour. Pale, fine-textured breast-only grinds cook up dry unless you add fat back in." },
      { image: assets.pattyChickenRaw, kicker: "THE PATTY", title: "A Softer Patty", body: "Chicken mince is wetter and stickier than beef, so the patty feels loose and delicate. Chill it well, shape it with damp hands, and handle it as little as possible — it firms up in the pan, not on the board." },
      { image: assets.cookingChickenSeasoning, kicker: "SEASONING", title: "Season with Conviction", body: "Because chicken is so mild, it rewards assertive seasoning. Salt at about 1% of meat weight, then layer in pepper, paprika, and garlic powder. What would over-season beef is often exactly right for chicken." },
      { image: assets.cookingChickenSkillet, kicker: "THE COOK", title: "Moisture Management", body: "Chicken lacks the saturated fat of beef or pork, so it dries out rapidly, and it must be cooked fully for safety — 74°C in the centre. You cannot rely on a pink centre for juiciness, so the fat, sauce, and toppings must do that work instead." },
      { image: assets.xsecChicken, kicker: "DONENESS", title: "Reading the Interior", body: "A properly cooked chicken patty is opaque and pale throughout with clear juices — never pink. Use a thermometer rather than time or colour: a golden crust can form long before the centre is safe." },
      { image: assets.heroChickenPairing, kicker: "THE PAIRING", title: "The Chicken Build", body: "Chicken needs added fat and bold flavour. Mayonnaise-based sauces like chipotle mayo, creamy avocado, crisp bacon, and easy-melting cheeses such as pepper jack transform a lean patty into a rich experience." },
      { image: assets.heroChicken, kicker: "THE RESULT", title: "The Finished Chicken Burger", body: "Built correctly — thigh grind, confident seasoning, a proper crust, and fat added back through cheese and sauce — a chicken burger is juicy, aromatic, and every bit as satisfying as beef, at a fraction of the heaviness." }
    ]
  },
  {
    id: "builder-onions",
    category: "Flavour Builders",
    title: "Onions: Every State Explained",
    flavour: "Pungent bite to jammy sweetness",
    hero: assets.onionFullCaramel,
    slides: [
      { image: `${RAW}/ingredients/vegetables/BM-VEG-005-white-onion.webp`, kicker: "THE PURPOSE", title: "Why Add Onions?", body: "Onions are the most important aromatic in burger building. The same vegetable can deliver a sharp, acidic bite that cuts through rich fat, or a deep, jammy sweetness that amplifies the meat's savoury notes. The difference is entirely in how you treat it." },
      { image: `${RAW}/ingredients/vegetables/BM-VEG-004-red-onion.webp`, kicker: "STATE 1 · RAW", title: "Raw Rings: The Palate Cleanser", body: "Raw white or red onion delivers a sharp, sulphurous crunch. Use it when the burger is heavy and fatty — the bite cleanses the palate between mouthfuls. Two thin rings, about 15 g, placed under the patty so the heat softens them slightly." },
      { image: assets.onionDice, kicker: "STATE 2 · DICED", title: "Diced: Distributed Bite", body: "Dicing spreads the onion's punch evenly across every bite instead of concentrating it in one ring. A tablespoon — about 15–20 g of 3 mm dice — is the smash burger standard. Small enough to soften on the griddle, big enough to still crunch." },
      { image: assets.onionSlices, kicker: "STATE 3 · SLICED", title: "Slices: Ready to Cook", body: "Even 5 mm slices are the starting point for every cooked onion. Slice with the grain and they hold their shape through long cooking; slice across it and they melt down faster. One medium onion (150 g) cooks down to serve two burgers." },
      { image: assets.onionSweating, kicker: "STATE 4 · SWEATED", title: "Sweating: Soft, Not Brown", body: "Sweating means cooking slices gently in a little oil over low heat until translucent and soft — around 5–8 minutes with no browning. The harsh sulphur compounds cook off, leaving a mellow sweetness. Use sweated onions when you want softness without caramel intensity." },
      { image: assets.onionMidCaramel, kicker: "STATE 5 · CARAMELISING", title: "The Golden Middle", body: "Keep going past sweating and the onion's sugars begin to brown. This golden stage — 15–20 minutes in — is where impatience ruins most cooks. Do not raise the heat to rush it: high heat burns the edges before the centres sweeten. Stir occasionally and let time work." },
      { image: assets.onionFullCaramel, kicker: "STATE 6 · CARAMELISED", title: "Fully Caramelised: Onion Jam", body: "After 30–40 minutes on low heat, the onions collapse into a glossy, mahogany jam that tastes profoundly sweet. This is a sauce, not a topping — up to 40 g per burger works because the sharpness is completely gone. Magnificent with Swiss or provolone." },
      { image: assets.onionGrated, kicker: "STATE 7 · GRATED IN", title: "Grated Into the Meat", body: "Grating raw onion on a fine grater turns it into pulp that disappears into the mince, seasoning the patty from within and adding moisture. Use no more than 20 g per 500 g of meat and squeeze out excess juice first — too much liquid loosens the patty." },
      { image: `${RAW}/assembly/BM-ASM-019-correct-onion-placement.webp`, kicker: "THE DECISION", title: "Which State, Which Burger?", body: "Fatty, rich burger? Raw or diced for cutting bite. Sweet, luxurious build? Fully caramelised. Lean patty that needs internal moisture? Grated in. The onion is one ingredient with seven personalities — choose the one your burger is missing." }
    ]
  },
  {
    id: "builder-garlic",
    category: "Flavour Builders",
    title: "Garlic: Fresh, Powder & Roasted",
    flavour: "Aromatic, sharp, and roasted",
    hero: assets.garlicCloves,
    slides: [
      { image: assets.garlicCloves, kicker: "THE PURPOSE", title: "Why Add Garlic?", body: "Garlic amplifies the savoury umami notes of meat. It provides an aromatic backbone that makes beef taste 'beefier' and gives mild meats like pork and chicken a personality they lack on their own. The form you choose changes everything." },
      { image: assets.garlicMinced, kicker: "FORM 1 · FRESH MINCED", title: "Fresh: Sharp and Pungent", body: "Freshly minced garlic is hot, sharp, and aggressive. Never mix it directly into the patty — the exposed pieces scorch and turn bitter in a hot pan. Instead, fold 1–2 minced cloves into your mayonnaise or burger sauce, where it stays bright and raw." },
      { image: assets.garlicPowder, kicker: "FORM 2 · POWDER", title: "Powder: The Burger Workhorse", body: "For seasoning the patty itself, garlic powder is superior to fresh. It distributes evenly, never burns on screaming-hot cast iron, and tastes sweet and roasted rather than sharp. Use about 2 g (half a teaspoon) per 500 g of meat — enough to deepen, never dominate." },
      { image: assets.garlicRoasted, kicker: "FORM 3 · ROASTED", title: "Roasted: Sweet and Mellow", body: "A whole head roasted at 200°C for 40 minutes transforms garlic completely: the cloves turn soft, golden, and spreadably sweet, with zero harshness. Mash 3–4 roasted cloves into sauce or spread them directly on the toasted bun for a luxurious, nutty base note." },
      { image: assets.garlicInMeat, kicker: "IN THE MIX", title: "Garlic Inside the Patty", body: "If you want garlic inside the meat, use powder or finely mashed roasted garlic — both distribute evenly and survive the sear. Fold gently with open fingers just until combined. Remember why: raw chunks burn on the outside and stay harsh on the inside." },
      { image: `${RAW}/condiments/BM-COND-007-chipotle-mayo.webp`, kicker: "HOW MUCH & WHEN", title: "Quantities That Work", body: "In the meat: 2 g powder per 500 g, added with your gentle mix. In the sauce: 1–2 fresh cloves or 3–4 roasted, added any time before serving. Garlic should elevate the beef in the background — if you can name the garlic before the meat, you used too much." }
    ]
  },
  {
    id: "builder-spices",
    category: "Flavour Builders",
    title: "Salt, Pepper & Paprika",
    flavour: "The science of seasoning",
    hero: assets.seasoningBlend,
    slides: [
      { image: assets.seasoningSalt, kicker: "SALT · WHAT IT DOES", title: "Salt Is Not a Flavour", body: "Salt is an amplifier: it suppresses bitterness and magnifies the meat's natural umami. The right amount is measurable, not mystical — weigh it. Aim for about 1% of the patty's weight: 1.5 g of salt for a 150 g patty." },
      { image: `${RAW}/meat/BM-MEAT-006-overmixed-meat-mistake.webp`, kicker: "SALT · WHEN", title: "Never Salt the Mix", body: "Never mix salt through ground beef before shaping. Salt dissolves myosin proteins, cross-linking the strands into a sticky, sausage-like paste that cooks up dense and rubbery. This is the single most common seasoning mistake in burger cooking." },
      { image: assets.seasoningPepper, kicker: "PEPPER · WHAT IT DOES", title: "Pepper Brings Heat and Aroma", body: "Freshly cracked black pepper contributes piperine heat and a citrusy, woody aroma that pre-ground dust has long since lost. Crack it coarse — the jagged pieces toast in the pan and become tiny pockets of flavour in the crust. Roughly half the weight of your salt is a sound ratio." },
      { image: assets.seasoningPaprika, kicker: "PAPRIKA · WHAT IT DOES", title: "Paprika: Colour and Warmth", body: "Paprika adds a sweet, gently smoky warmth and a deep red colour to the crust. Sweet paprika flatters pork and chicken especially well; smoked paprika gives any patty a grill-fire character indoors. Use about 1 g per 150 g patty — it supports, it never leads." },
      { image: assets.seasoningBlend, kicker: "THE BLEND", title: "Building a House Blend", body: "A reliable house blend: 4 parts salt, 2 parts cracked pepper, 1 part paprika, 1 part garlic powder by weight. Mix it once, keep it in a jar by the stove, and every burger you cook gets the same confident, repeatable seasoning." },
      { image: assets.seasoningEven, kicker: "TECHNIQUE", title: "Season From a Height", body: "Season from 25–30 cm above the patty. The extra distance scatters the grains into an even, professional coverage instead of concentrated patches. Every square centimetre of surface should carry seasoning — that surface is where the crust forms." },
      { image: assets.seasoningOneSide, kicker: "TIMING", title: "One Side, Right Before the Pan", body: "Season the first side immediately before it hits the pan, then season the bare top side just before you flip. Salt left sitting on a patty draws moisture to the surface within minutes, and a wet surface steams instead of searing." },
      { image: assets.seasoningCrust, kicker: "THE PAYOFF", title: "The Seasoned Crust", body: "This is what correct seasoning buys you: a deep mahogany crust where salt, pepper, and paprika have fused with the Maillard browning into a crackling, savoury shell. The interior stays tender and pure — all the seasoning drama happens at the surface." }
    ]
  }
];
