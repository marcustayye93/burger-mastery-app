import { assets } from "./assets.js";
export const courses=[
{id:"meat",title:"Choose your meat",subtitle:"Beef, pork, lamb and what each brings",progress:100,image:assets.meatCompare},
{id:"mixing",title:"Mix without ruining texture",subtitle:"Loose, tender and evenly combined",progress:60,image:assets.mixing},
{id:"shaping",title:"Shape the patty",subtitle:"Weight, thickness, pressure and dimples",progress:30,image:assets.dimple},
{id:"seasoning",title:"Season with intention",subtitle:"Outside seasoning versus mixed-through",progress:0,image:assets.texture},
{id:"assembly",title:"Build a burger that holds",subtitle:"Toast, sauce, layering and alignment",progress:0,image:assets.layers}
];
export const storySlides={
meat:[
{image:assets.meatCompare,kicker:"BURGER ESSENTIALS",title:"Choose the flavour base",body:"Beef gives the familiar burger profile. Pork softens the bite and adds sweetness. Lamb contributes a deeper, aromatic finish."},
{image:assets.meatBeef,kicker:"CLASSIC BASE",title:"Start with beef",body:"For a classic burger, choose beef with visible fat. Around 15–20% fat gives beginners a forgiving balance of flavour, structure and moisture."},
{image:assets.mixing,kicker:"TECHNIQUE",title:"Fold gently",body:"Keep the meat cold and combine it with open fingers. Stop as soon as the blend looks even. Compression now becomes density later."}],
mixing:[
{image:assets.mixing,kicker:"CORRECT",title:"Keep strands distinct",body:"The meat should still look like ground meat after mixing—not a smooth paste."},
{image:assets.texture,kicker:"LOOK FOR THIS",title:"Visible fat, loose structure",body:"Separate strands and small fat deposits show the mixture has not been overworked."},
{image:assets.portion,kicker:"NEXT STEP",title:"Portion before shaping",body:"Weighing each portion gives even cooking and makes nutrition estimates more dependable."}],
shaping:[
{image:assets.portion,kicker:"PORTION",title:"Begin with the target weight",body:"A 150 g patty is a balanced starting point for a standard burger."},
{image:assets.shaping,kicker:"PRESSURE",title:"Use only enough pressure to hold",body:"Shape lightly. Dense patties eat more like sausage."},
{image:assets.thickness,kicker:"THICKNESS",title:"Thickness changes the experience",body:"Thin patties favour crust. Thick patties favour a juicy centre and need more careful heat control."},
{image:assets.dimple,kicker:"FINISH",title:"Add a shallow centre dimple",body:"For thicker patties, a subtle indentation helps reduce doming."}],
seasoning:[
{image:assets.texture,kicker:"SEASONING",title:"Protect the texture",body:"For a loose classic burger, season the outside shortly before cooking rather than mixing salt through."},
{image:assets.sauce,kicker:"BALANCE",title:"Seasonings are only one layer",body:"Cheese, pickles and sauces add salt too. Judge the finished burger."}],
assembly:[
{image:assets.toast,kicker:"FOUNDATION",title:"Toast for structure",body:"A golden surface adds flavour and slows moisture soaking into the bun."},
{image:assets.sauce,kicker:"SAUCE",title:"Use a thin, even layer",body:"Enough to flavour and lubricate—never so much that the burger slides apart."},
{image:assets.layers,kicker:"LAYERS",title:"Keep the stack centred",body:"Even layers distribute flavour and improve stability."},
{image:assets.cheese,kicker:"CHEESE",title:"Let cheese bind the stack",body:"A complete melt wraps the patty and helps neighbouring layers stay together."},
{image:assets.finished,kicker:"COMPLETE",title:"A burger built to eat",body:"The final test is whether the first and last bite feel equally balanced."}]
};
export const lessonSequence=courses.flatMap(c=>(storySlides[c.id]||[]).map((s,i)=>({sectionId:c.id,sectionTitle:c.title,slideId:`${c.id}-${String(i+1).padStart(2,"0")}`,...s})));
