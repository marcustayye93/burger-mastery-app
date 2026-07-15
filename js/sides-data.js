// v1.6.0 — Condiments & Sides collection. Same shape as signature recipes so the
// story viewer renders them unchanged; opened via openRecipeStory(recipe,{side:true}).
const S="https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/sides/";
export const sides=[
{
id:"side-caramelised-onions",title:"Caramelised Onions",collection:"Condiments & Sides",
hero:S+"BM-SIDE-001-caramelised-onions.webp",
flavour:"Deep, sweet, savoury",texture:"Silky, melting ribbons",time:"45 min",difficulty:"Easy — but patient",
macros:{calories:98,protein:1,fat:6,carbs:11},
ingredients:["3 large yellow onions","30 g butter","1 tbsp olive oil","1/2 tsp salt","1 tsp balsamic vinegar (optional)","Splash of water as needed"],
doneTitle:"Sweet gold, banked for later.",
doneBody:"Caramelised onions keep for a week in the fridge and freeze beautifully in ice-cube trays. One spoonful transforms any burger in this app.",
steps:[
{image:S+"BM-SIDE-001-caramelised-onions.webp",kicker:"THE RULE",title:"Low, slow, and honest",body:"Real caramelised onions take 40 minutes, not 10. Anything faster is fried onion with sugar. What you are doing is coaxing the onion's own sugars out through slow, even heat — no shortcuts, no browning agents."},
{image:S+"BM-SIDE-001-caramelised-onions.webp",kicker:"PREP",title:"Slice with the grain",body:"Halve the onions pole to pole, then slice with the grain into 5 mm ribbons. Pole-to-pole slices hold their shape through the long cook; cross-grain slices collapse into mush before they colour."},
{image:S+"BM-SIDE-001-caramelised-onions.webp",kicker:"THE FAT",title:"Butter for flavour, oil for safety",body:"Melt 30 g butter with a tablespoon of olive oil over medium-low heat. The oil raises the smoke point so the butter solids do not burn during the long cook. Add every ribbon of onion at once — a crowded pan is correct here."},
{image:S+"BM-SIDE-001-caramelised-onions.webp",kicker:"STAGE ONE",title:"Sweat, do not sizzle",body:"Salt the onions now — half a teaspoon — to pull their water out. For the first 10 minutes they should soften and turn translucent with barely a sound from the pan. If you hear aggressive sizzling, the heat is too high."},
{image:S+"BM-SIDE-001-caramelised-onions.webp",kicker:"STAGE TWO",title:"The slow build",body:"Stir every 3 to 4 minutes, scraping the pan floor. Colour arrives from the bottom up: pale gold at 20 minutes, amber at 30. When brown film builds on the pan, add a splash of water and scrape — that film is concentrated flavour, not waste."},
{image:S+"BM-SIDE-001-caramelised-onions.webp",kicker:"THE FINISH",title:"Deep amber, jammy, sweet",body:"At 40 to 45 minutes the ribbons are mahogany, glossy and reduced to a quarter of their raw volume. Kill the heat and stir in a teaspoon of balsamic vinegar to sharpen the sweetness. Taste — it should be sweet enough to eat alone."}
]},
{
id:"side-burger-sauce",title:"Classic Burger Sauce",collection:"Condiments & Sides",
hero:S+"BM-SIDE-002-burger-sauce.webp",
flavour:"Tangy, creamy, savoury",texture:"Thick, spoon-coating",time:"10 min",difficulty:"Easy",
macros:{calories:87,protein:0,fat:9,carbs:2},
ingredients:["4 tbsp mayonnaise","1 tbsp ketchup","1 tbsp finely chopped pickles","1 tsp pickle brine","1/2 tsp smoked paprika","1/4 tsp garlic powder","Squeeze of lemon"],
doneTitle:"The sauce that ties it together.",
doneBody:"Keeps 5 days refrigerated in a sealed jar. Spread on the bottom bun only — the top bun gets the patty's own juices.",
steps:[
{image:S+"BM-SIDE-002-burger-sauce.webp",kicker:"THE IDEA",title:"Fat, acid, crunch, spice",body:"Every great burger sauce balances four things: a fat base (mayonnaise), an acid (pickle brine and lemon), texture (chopped pickles) and a warm spice note (smoked paprika). Once you understand the frame, you can riff endlessly."},
{image:S+"BM-SIDE-002-burger-sauce.webp",kicker:"PREP",title:"Chop the pickles fine",body:"Dice the pickles to 3 mm — small enough to spread evenly, large enough to still crunch. Drain them on a paper towel for a minute so they do not water down the sauce."},
{image:S+"BM-SIDE-002-burger-sauce.webp",kicker:"MIX",title:"Build in one bowl",body:"Stir the mayonnaise and ketchup together first until the colour is even, then fold in pickles, brine, smoked paprika and garlic powder. Finish with a small squeeze of lemon and stir once more."},
{image:S+"BM-SIDE-002-burger-sauce.webp",kicker:"THE WAIT",title:"Ten minutes makes it whole",body:"Rest the sauce for 10 minutes in the fridge before using. The paprika blooms into the fat and the flavours knit together — taste it before and after and you will never skip this step again."}
]},
{
id:"side-chili-con-carne",title:"Chili con Carne",collection:"Condiments & Sides",
hero:S+"BM-SIDE-003-chili-con-carne.webp",
flavour:"Rich, smoky, gently hot",texture:"Thick, spoonable stew",time:"90 min",difficulty:"Medium",
macros:{calories:265,protein:22,fat:12,carbs:17},
ingredients:["500 g minced beef (15% fat)","1 onion, diced","3 garlic cloves","2 tbsp tomato paste","400 g chopped tomatoes","400 g kidney beans, drained","1 tbsp ground cumin","1 tbsp smoked paprika","1 tsp dried oregano","1-2 dried chillies or 1 tsp chilli flakes","250 ml beef stock","Salt to taste"],
doneTitle:"A pot that outperforms its parts.",
doneBody:"Chili is famously better the next day — the spices settle and deepen overnight. Spoon it over a smash patty for an open-faced chili burger, or serve it as the side that steals the show.",
steps:[
{image:S+"BM-SIDE-003-chili-con-carne.webp",kicker:"THE BROWN",title:"Sear the beef hard first",body:"Heat a heavy pot until properly hot, then brown the minced beef in two batches — crowding the pot steams the meat grey instead of searing it brown. That brown crust is the same Maillard flavour you build on a patty, and it is the backbone of the whole chili."},
{image:S+"BM-SIDE-003-chili-con-carne.webp",kicker:"THE BASE",title:"Onions, garlic, paste",body:"Lower the heat, add the diced onion to the beef fat and cook 5 minutes until soft. Add the garlic for 1 minute, then the tomato paste — fry the paste for 2 full minutes until it darkens a shade. Cooked paste tastes rich; raw paste tastes tinny."},
{image:S+"BM-SIDE-003-chili-con-carne.webp",kicker:"THE SPICES",title:"Bloom, do not dump",body:"Add cumin, smoked paprika, oregano and chilli straight onto the hot base and stir for 30 seconds. Spices are fat-soluble — blooming them in the pot fat releases flavours that would stay locked away if they were stirred into liquid."},
{image:S+"BM-SIDE-003-chili-con-carne.webp",kicker:"THE SIMMER",title:"Low heat, loose lid, 60 minutes",body:"Return the beef, add chopped tomatoes and stock, and bring to a bare simmer. Lid half-on, one lazy bubble at a time, for 60 minutes. Stir every 15 minutes and scrape the bottom. If it thickens too fast, add a splash of stock."},
{image:S+"BM-SIDE-003-chili-con-carne.webp",kicker:"THE BEANS",title:"Beans join late",body:"Stir in the drained kidney beans for the final 15 minutes only. Added early, they split and turn mealy; added late, they hold their shape and stay creamy inside."},
{image:S+"BM-SIDE-003-chili-con-carne.webp",kicker:"THE FINISH",title:"Season at the end",body:"Taste and salt only now — the stock and the long reduction concentrate salt as they cook, so early seasoning overshoots. The chili is ready when a spoon dragged across the pot floor leaves a trail that holds for a second."}
]},
{
id:"side-baked-garlic",title:"Baked Garlic",collection:"Condiments & Sides",
hero:S+"BM-SIDE-004-baked-garlic.webp",
flavour:"Sweet, nutty, mellow",texture:"Soft as butter",time:"50 min",difficulty:"Easy",
macros:{calories:45,protein:2,fat:2,carbs:7},
ingredients:["2 whole garlic heads","2 tsp olive oil","2 sprigs fresh thyme","Pinch of flaky salt","Foil for wrapping"],
doneTitle:"Garlic, transformed.",
doneBody:"Squeeze the cloves straight onto a toasted bun, whip them into mayonnaise, or fold them into your patty mix — baked garlic gives every build depth without the raw bite.",
steps:[
{image:S+"BM-SIDE-004-baked-garlic.webp",kicker:"THE MAGIC",title:"Heat rewrites garlic",body:"Raw garlic is sharp because of allicin, which forms when cells are cut. Slow oven heat never triggers that reaction — instead the cloves' sugars caramelise and the flesh turns sweet, nutty and spreadable. Same bulb, entirely different ingredient."},
{image:S+"BM-SIDE-004-baked-garlic.webp",kicker:"PREP",title:"Top off, oil in",body:"Slice the top centimetre off each head to expose the cloves. Set each head on a square of foil, drizzle a teaspoon of olive oil over the cut surface, add a thyme sprig and a pinch of flaky salt, then wrap loosely — the foil should tent, not squeeze."},
{image:S+"BM-SIDE-004-baked-garlic.webp",kicker:"THE BAKE",title:"200°C, 40 to 45 minutes",body:"Bake at 200°C for 40 to 45 minutes. The heads are done when the exposed cloves are deep gold and a knife slides through the centre with zero resistance. Smaller heads finish closer to 35 minutes — check once at the half-hour mark."},
{image:S+"BM-SIDE-004-baked-garlic.webp",kicker:"THE SQUEEZE",title:"Rest, then press",body:"Rest 10 minutes until the heads are cool enough to handle, then squeeze from the root end — the cloves slide out like soft caramel. Mash with a fork and it is ready for buns, sauces, or straight into a patty blend."}
]},
{
id:"side-quick-pickles",title:"Quick Pickles",collection:"Condiments & Sides",
hero:S+"BM-SIDE-005-quick-pickles.webp",
flavour:"Bright, sharp, herbal",texture:"Cold and crunchy",time:"20 min + 1 hr chill",difficulty:"Easy",
macros:{calories:12,protein:0,fat:0,carbs:3},
ingredients:["2 cucumbers, sliced 3 mm","1/2 small onion, thinly sliced","250 ml white vinegar","250 ml water","1 tbsp sugar","1 tbsp salt","1 tsp mustard seeds","1 tsp black peppercorns","A few dill fronds"],
doneTitle:"The acid your burger was missing.",
doneBody:"Ready in an hour, better overnight, and they keep two weeks refrigerated. Their acidity resets your palate between bites — the secret to why the last bite tastes as good as the first.",
steps:[
{image:S+"BM-SIDE-005-quick-pickles.webp",kicker:"THE ROLE",title:"Why burgers need acid",body:"A burger is fat on fat: beef, cheese, sauce, buttered bun. Pickles are the counterweight — each slice cuts through the richness and resets your tongue. Without acid, the fourth bite tastes duller than the first."},
{image:S+"BM-SIDE-005-quick-pickles.webp",kicker:"PREP",title:"Slice thin and even",body:"Slice the cucumbers into 3 mm rounds — a crinkle cutter adds surface area and grip, but a sharp knife works. Slice the onion paper-thin. Pack both into a clean glass jar with the dill fronds layered between."},
{image:S+"BM-SIDE-005-quick-pickles.webp",kicker:"THE BRINE",title:"Equal parts, gently heated",body:"Bring vinegar, water, sugar, salt, mustard seeds and peppercorns to a bare simmer, stirring just until the sugar and salt dissolve. Do not boil hard — you want the brine hot enough to extract the spices, not so hot it cooks the cucumbers on contact."},
{image:S+"BM-SIDE-005-quick-pickles.webp",kicker:"THE POUR",title:"Cover, cool, chill",body:"Pour the hot brine over the jar until everything is submerged. Leave the jar open until it reaches room temperature, then lid on and into the fridge. One hour gives you bright, crunchy pickles; overnight gives you deeper flavour."}
]},
{
id:"side-garlic-yoghurt",title:"Garlic-Yoghurt Sauce",collection:"Condiments & Sides",
hero:S+"BM-SIDE-006-garlic-yoghurt.webp",
flavour:"Cool, garlicky, fresh",texture:"Thick and velvety",time:"10 min",difficulty:"Easy",
macros:{calories:42,protein:3,fat:2,carbs:3},
ingredients:["200 g thick Greek yoghurt","1 garlic clove, finely grated","1 tbsp olive oil","1 tbsp chopped chives","Zest of 1/4 lemon","Squeeze of lemon juice","Salt to taste"],
doneTitle:"The cool counterpoint.",
doneBody:"This is the sauce the app pairs with lamb blends and lean builds — its coolness flatters bold meat and its protein-to-fat ratio beats mayonnaise four times over. Keeps 3 days refrigerated.",
steps:[
{image:S+"BM-SIDE-006-garlic-yoghurt.webp",kicker:"THE PAIRING",title:"Built for bold meat",body:"Yoghurt sauce is the classic partner for lamb and heavily seasoned patties — the lactic coolness tames boldness the way mayonnaise never can, at a quarter of the fat. It is also why this sauce holds a permanent slot in the Builder."},
{image:S+"BM-SIDE-006-garlic-yoghurt.webp",kicker:"THE GARLIC",title:"Grate, never chop",body:"Grate the garlic clove on a microplane into a paste. Chopped garlic sits in pockets and ambushes single bites; grated garlic dissolves through the whole sauce evenly. One clove is enough — raw garlic grows stronger as the sauce sits."},
{image:S+"BM-SIDE-006-garlic-yoghurt.webp",kicker:"MIX",title:"Fold, season, brighten",body:"Fold the garlic, olive oil, chives and lemon zest into the yoghurt. Add a small squeeze of lemon juice and salt, then taste. It should be thick enough to hold a spoon upright — if your yoghurt is thin, strain it in a sieve for 10 minutes first."},
{image:S+"BM-SIDE-006-garlic-yoghurt.webp",kicker:"THE REST",title:"Twenty cold minutes",body:"Rest the sauce in the fridge for 20 minutes if you can. The garlic mellows from sharp to warm and the chives perfume the whole bowl. Serve it cold, straight onto a hot patty — the temperature contrast is the point."}
]}
];
export const sideById=id=>sides.find(s=>s.id===id);
