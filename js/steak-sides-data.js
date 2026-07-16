// Meat Mastery v2.4.0 — Steak Condiments & Sides.
// Uses the existing story viewer engine (openRecipeStory with side:true).
import {assets} from "./assets.js";
const A=assets;

export const steakSides=[
{
  id:"stk-side-board-sauce",title:"Herb Board Sauce",collection:"Condiments & Sides",
  hero:A.stkRest,
  flavour:"Bright, herbal, rich",texture:"Oil-slicked herbs",time:"5 min",difficulty:"Easy",
  macros:{calories:120,protein:0,fat:14,carbs:1},
  ingredients:["4 tbsp good olive oil","1 tbsp fresh rosemary, chopped","1 tbsp fresh thyme, chopped","1 clove garlic, smashed","1 tsp flaky sea salt","1/2 tsp black pepper"],
  doneTitle:"The resting juice does the rest.",
  doneBody:"As the steak rests on top of this mixture, its hot juices melt the herbs and oil into a self-making sauce. Slice and drag the meat through it.",
  steps:[
    {image:A.stkMise,kicker:"THE IDEA",title:"A sauce made by the steak",body:"A board sauce uses the heat and juices of the resting steak to bloom fresh herbs. It is the lowest-effort, highest-impact sauce in steak cookery."},
    {image:A.stkBrine,kicker:"PREP",title:"Chop and pool",body:"Chop the rosemary and thyme finely. Smash the garlic clove — do not mince it, you just want its bruised oils. Pool the olive oil in the centre of your resting board and mix the herbs, salt and pepper into it."},
    {image:A.stkRest,kicker:"REST",title:"Rest the steak on the herbs",body:"When the steak comes off the heat, lay it directly on top of the herb pool. The residual heat will instantly wake the aromatics."},
    {image:A.stkSlice,kicker:"SERVE",title:"Slice and drag",body:"After the rest, slice the steak on the same board. The released meat juices will emulsify with the olive oil. Drag each slice through the mixture as you serve."}
  ]
},
{
  id:"stk-side-compound-butter",title:"Roasted Garlic Compound Butter",collection:"Condiments & Sides",
  hero:A.stkButter,
  flavour:"Sweet garlic, rich dairy",texture:"Melting cream",time:"10 min",difficulty:"Easy",
  macros:{calories:100,protein:0,fat:11,carbs:1},
  ingredients:["100 g unsalted butter, softened","1 head of garlic, roasted","1 tbsp fresh parsley, minced","1 tsp flaky sea salt","1/2 tsp black pepper"],
  doneTitle:"Roll, chill, slice.",
  doneBody:"Keeps in the fridge for two weeks, or the freezer for months. Slice off a coin for every hot steak you serve.",
  steps:[
    {image:A.stkMise,kicker:"THE IDEA",title:"Built-in basting",body:"A coin of compound butter melting over a resting steak mimics the richness of a pan baste without the risk of burning the milk solids during the cook."},
    {image:A.garlicRoasted,kicker:"PREP",title:"Squeeze the garlic",body:"Squeeze the soft, sweet roasted garlic cloves out of their skins. Mash them into a paste with the side of your knife."},
    {image:A.stkButter,kicker:"MIX",title:"Fold it together",body:"In a bowl, combine the softened butter, roasted garlic paste, minced parsley, salt and pepper. Mash with a fork until the colour is even."},
    {image:A.stkRest,kicker:"STORE",title:"Roll into a log",body:"Spoon the butter onto parchment paper or cling film. Roll it into a tight log, twist the ends, and chill until firm. Slice coins as needed."}
  ]
},
{
  id:"stk-side-chimichurri",title:"Classic Chimichurri",collection:"Condiments & Sides",
  hero:A.stkMise,
  flavour:"Sharp, acidic, herbaceous",texture:"Loose herb oil",time:"15 min",difficulty:"Easy",
  macros:{calories:90,protein:0,fat:10,carbs:2},
  ingredients:["1 large bunch flat-leaf parsley","2 tbsp fresh oregano","3 cloves garlic, minced","1 small red chilli, minced","2 tbsp red wine vinegar","120 ml olive oil","1 tsp salt"],
  doneTitle:"Acid cuts fat.",
  doneBody:"The ultimate pairing for rich cuts like ribeye or picanha. The vinegar and fresh herbs slice straight through the heavy beef fat.",
  steps:[
    {image:A.stkMise,kicker:"THE IDEA",title:"The Argentine standard",body:"Chimichurri is not a pesto or a puree — it is a loose, acidic herb oil. It should taste sharp enough to wake up a heavy, fatty steak."},
    {image:A.garlicCloves,kicker:"CHOP",title:"Hand chop only",body:"Finely chop the parsley and oregano by hand. Do not use a food processor — it will bruise the herbs, turn the oil bitter, and create a puree instead of a loose sauce."},
    {image:A.garlicMinced,kicker:"MIX",title:"Build the base",body:"In a bowl, combine the minced garlic, chilli, vinegar and salt. Let this sit for 5 minutes — the vinegar will mellow the raw garlic bite."},
    {image:A.stkMise,kicker:"FINISH",title:"Fold in oil and herbs",body:"Stir in the chopped herbs, then pour the olive oil over the top. Do not whisk aggressively. Let it sit for at least 20 minutes before serving so the flavours knit."}
  ]
},
{
  id:"stk-side-peppercorn-sauce",title:"Steakhouse Peppercorn Sauce",collection:"Condiments & Sides",
  hero:A.stkPanSear,
  flavour:"Creamy, peppery, deep",texture:"Thick, coating cream",time:"15 min",difficulty:"Medium",
  macros:{calories:180,protein:2,fat:18,carbs:4},
  ingredients:["2 tbsp whole black peppercorns","1 shallot, finely diced","30 ml cognac or brandy","150 ml beef stock","100 ml double cream","1 tbsp butter","Salt to taste"],
  doneTitle:"The classic pan sauce.",
  doneBody:"Built directly in the pan you cooked the steak in, using the fond (browned bits) as the flavour base.",
  steps:[
    {image:A.seasoningPepper,kicker:"PREP",title:"Crush the pepper",body:"Place the peppercorns in a bag and crush them heavily with a rolling pin or heavy pan. You want coarse shards, not fine powder. The texture is the point."},
    {image:A.stkPanSear,kicker:"THE PAN",title:"Use the steak pan",body:"While the steak rests, pour off all but 1 tablespoon of fat from the pan. Over medium heat, add the butter, shallot and crushed peppercorns. Sweat for 2 minutes until soft."},
    {image:A.stkPanHeat,kicker:"DEGLAZE",title:"The alcohol flash",body:"Pull the pan off the heat and add the cognac. Return to the heat to boil off the alcohol, scraping up the browned beef fond from the bottom of the pan."},
    {image:A.stkOven,kicker:"REDUCE",title:"Stock then cream",body:"Add the beef stock and boil until reduced by half. Lower the heat, stir in the double cream, and simmer until the sauce coats the back of a spoon. Salt to taste."}
  ]
},
{
  id:"stk-side-potato-gratin",title:"Dauphinoise Potatoes",collection:"Condiments & Sides",
  hero:A.stkOven,
  flavour:"Rich, creamy, earthy",texture:"Tender layers, crisp top",time:"90 min",difficulty:"Medium",
  macros:{calories:320,protein:6,fat:22,carbs:28},
  ingredients:["1 kg starchy potatoes (Russet/Maris Piper)","300 ml double cream","300 ml whole milk","2 cloves garlic, smashed","1 sprig fresh thyme","Pinch of nutmeg","Salt and pepper","Butter for the dish"],
  doneTitle:"The ultimate steakhouse side.",
  doneBody:"Make this ahead. It holds heat beautifully while you focus entirely on searing the steak.",
  steps:[
    {image:A.stkOven,kicker:"THE IDEA",title:"Cream, starch, time",body:"Dauphinoise potatoes are simply thin potato slices baked in garlic-infused cream until the starch thickens the liquid into a savoury custard."},
    {image:A.stkPanHeat,kicker:"INFUSE",title:"Steep the cream",body:"In a saucepan, gently heat the cream, milk, smashed garlic, thyme, nutmeg, salt and pepper until steaming. Turn off the heat and let it steep for 20 minutes, then remove the garlic and thyme."},
    {image:A.stkMise,kicker:"SLICE",title:"Do not wash them",body:"Peel and slice the potatoes 3 mm thick. Do not wash or soak the slices — you need their surface starch to thicken the cream sauce."},
    {image:A.stkOven,kicker:"BAKE",title:"Layer and bake",body:"Butter a baking dish. Layer the potatoes like fallen dominoes, pouring the infused cream over every few layers. Bake at 160°C for 60–75 minutes until tender and deeply browned on top."}
  ]
}
];
