import { assets } from "./assets.js";

const commonSteps = {
  mix: {image:assets.mixing,kicker:"STEP 1",title:"Keep the meat cold",body:"Combine only until the blend is even. Distinct strands and visible fat protect a tender bite."},
  shape: {image:assets.shaping,kicker:"STEP 2",title:"Shape with light pressure",body:"Form an even patty without kneading or compressing it into a dense puck."},
  dimple: {image:assets.dimple,kicker:"STEP 3",title:"Finish the shape",body:"For standard and thick patties, add a shallow centre indentation to reduce doming."},
  cook: {image:"https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-004-ideal-flip-timing.webp",kicker:"STEP 4",title:"Cook for contrast",body:"Build a deep crust while protecting the interior. Adjust heat to the patty thickness rather than relying only on time."},
  cheese: {image:"https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-002-perfect-american-melt.webp",kicker:"STEP 5",title:"Melt the cheese completely",body:"Add cheese near the end and cover briefly so it drapes around the patty without overcooking the centre."},
  assemble: {image:assets.layers,kicker:"STEP 6",title:"Stack for structure",body:"Place heavier, wetter ingredients at the bottom to anchor the burger, and softer greens on top."}
};

export const recipes = [
  {
    id: "classic-cheeseburger",
    title: "Classic Cheeseburger",
    collection: "Classics",
    hero: assets.heroClassic,
    flavour: "Savoury, rich and balanced",
    texture: "Juicy centre with a lightly toasted bite",
    time: "20 min",
    difficulty: "Easy",
    macros: { calories: 654, protein: 35, fat: 38, carbs: 40 },
    ingredients: ["150 g 80/20 beef", "1 potato bun", "1 American-style cheese slice", "Burger sauce", "Pickles, onion, lettuce and tomato"],
    build: { name: "Classic Cheeseburger", meat: "beef85", weight: 150, thickness: 16, cheese: "american", bun: "potato", sauce: "classic", toppings: "standard" },
    steps: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-001-classic-cheeseburger-layout.webp", kicker: "PREP", title: "The Classic Layout", body: "Gather your ingredients. The classic cheeseburger relies on the balance of rich beef, sharp American cheese, and fresh, crisp vegetables." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-001-beef-hero.webp", kicker: "MEAT", title: "Select 80/20 Chuck", body: "Use freshly ground 80/20 beef chuck. The 20% fat content is crucial for a juicy medium-rare to medium centre." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/patty/BM-PATTY-001-portioning-150g-scale.webp", kicker: "PORTION", title: "Weigh to 150 grams", body: "Portion exactly 150 grams of cold meat. This weight provides a substantial bite without overwhelming the bun." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/patty/BM-PATTY-002-correct-gentle-shaping.webp", kicker: "SHAPE", title: "Shape gently", body: "Form a loose, even patty slightly wider than your bun. Do not overwork or compress the meat." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/patty/BM-PATTY-004-thumb-dimple.webp", kicker: "DIMPLE", title: "Add a thumb dimple", body: "Press a shallow indentation into the centre. This prevents the patty from doming like a meatball as the proteins contract." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-001-first-contact.webp", kicker: "SEAR", title: "Hot pan, heavy salt", body: "Season heavily with salt and pepper right before placing the patty into a smoking hot cast-iron pan." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-004-ideal-flip-timing.webp", kicker: "FLIP", title: "Wait for the crust", body: "Do not move the patty until a deep brown crust forms and releases naturally from the pan, about 3 minutes." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-007-finished-crust.webp", kicker: "SEAR", title: "The Maillard reaction", body: "Flip to reveal a perfect, nutty-brown crust. Cook the second side for about 2 minutes." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-001-american-before-melt.webp", kicker: "CHEESE", title: "Apply American cheese", body: "Place one slice of American cheese on the patty during the final minute of cooking." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-002-perfect-american-melt.webp", kicker: "MELT", title: "Cover and melt", body: "Cover the pan briefly. The steam will melt the cheese perfectly, draping it over the edges of the patty." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-001-toasted-brioche-bottom-bun.webp", kicker: "BUILD", title: "Toast the bun", body: "Toast the bun in butter until golden brown to create a barrier against juices." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-010-correct-burger-sauce-spread.webp", kicker: "BUILD", title: "Apply burger sauce", body: "Spread an even layer of classic burger sauce on both the top and bottom buns." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-020-correct-pickle-placement.webp", kicker: "BUILD", title: "Layer the vegetables", body: "Stack pickles, raw onion rings, lettuce, and a slice of tomato on the bottom bun." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-025-patty-onto-vegetables.webp", kicker: "BUILD", title: "Place the patty", body: "Transfer the hot, cheesy patty directly onto the vegetable stack." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-033-correct-top-bun-placement.webp", kicker: "BUILD", title: "Crown the burger", body: "Place the sauced top bun on the patty and press down very gently to unify the layers." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cross-sections/BM-XSEC-003-medium-cross-section.webp", kicker: "FINISH", title: "Perfect medium centre", body: "The result is a beautifully layered burger with a juicy, pink medium centre and a crisp exterior." }
    ]
  },
  {
    id: "classic-smash",
    title: "Classic Smash Burger",
    collection: "Classics",
    hero: assets.heroSmash,
    flavour: "Deeply browned, salty and savoury",
    texture: "Maximum crust with thin, tender patties",
    time: "18 min",
    difficulty: "Easy",
    macros: { calories: 612, protein: 36, fat: 35, carbs: 38 },
    ingredients: ["140 g 80/20 beef, divided", "1 potato bun", "1 American-style cheese slice", "Yellow mustard", "Pickles and onion"],
    build: { name: "Classic Smash Burger", meat: "beef80", weight: 140, thickness: 7, cheese: "american", bun: "potato", sauce: "mustard", toppings: "minimal" },
    steps: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-005-smash-burger-layout.webp", kicker: "PREP", title: "The Smash Layout", body: "A smash burger is all about the meat and the crust. Keep toppings minimal: mustard, pickles, and finely diced onions." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/beef/BM-ING-BEEF-001-80-20-ground-chuck.webp", kicker: "MEAT", title: "Select 80/20 Chuck", body: "You must use 80/20 beef. Leaner blends will stick to the pan and dry out completely when smashed thin." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-005-correct-gentle-mixing.webp", kicker: "PORTION", title: "Divide into two", body: "Divide 140 grams of cold meat into two loose 70-gram balls. Do not pack them tightly." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-002-fifteen-seconds-sear.webp", kicker: "SMASH", title: "Smash thin and wide", body: "Place the balls in a screaming hot dry pan. Immediately smash them completely flat using a heavy spatula and a rolling pin for leverage." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-003-first-crust-forming.webp", kicker: "SEAR", title: "Hold the pressure", body: "Hold the pressure for 10 seconds to lock the meat to the steel, ensuring maximum crust formation." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-008-macro-crust-texture.webp", kicker: "SCRAPE", title: "Scrape, don't lift", body: "After 60-90 seconds, juices will pool on top. Use a sharp spatula to scrape under the patty, keeping the dark, lacy crust attached to the meat." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-011-american-slices.webp", kicker: "CHEESE", title: "Apply American cheese", body: "Flip the patties. Immediately place a slice of American cheese on one patty." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-027-centered-burger-stack.webp", kicker: "STACK", title: "Stack the patties", body: "Place the second patty on top of the cheese to create a double stack. The residual heat will melt the cheese instantly." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-002-toasted-potato-bottom-bun.webp", kicker: "BUILD", title: "Toast a potato bun", body: "A soft, squishy potato bun is the perfect vessel for a smash burger. Toast it lightly." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-011-correct-mustard-spread.webp", kicker: "BUILD", title: "Apply yellow mustard", body: "Spread sharp yellow mustard on the bottom bun to cut through the rich, fatty crust." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-020-correct-pickle-placement.webp", kicker: "BUILD", title: "Add pickles and onion", body: "Layer dill pickles and finely diced white onions. The sharp acidity balances the heavy Maillard flavours." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-034-slight-press-after-assembly.webp", kicker: "BUILD", title: "Crown and press", body: "Place the double patty stack on the bun, crown it, and give it a slight press to marry the layers." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/BM-HERO-004-macro-crust-edge.webp", kicker: "FINISH", title: "Lacy, crispy edges", body: "The perfect smash burger is defined by its overhanging, crispy, lacy edges and intensely beefy flavour." }
    ]
  },
  {
    id: "high-protein",
    title: "High-Protein Classic",
    collection: "High Protein",
    hero: assets.heroHighProtein,
    flavour: "Clean beef flavour with bright acidity",
    texture: "Firm-tender and moist rather than greasy",
    time: "24 min",
    difficulty: "Easy",
    macros: { calories: 492, protein: 46, fat: 18, carbs: 31 },
    ingredients: ["170 g 90/10 beef", "1 thin wholemeal bun", "Reduced-fat cheddar", "Greek-yoghurt burger sauce", "Pickles, onion, lettuce and tomato"],
    build: { name: "High-Protein Classic", meat: "beef90", weight: 170, thickness: 16, cheese: "lightcheddar", bun: "thin", sauce: "yoghurt", toppings: "standard" },
    steps: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-002-high-protein-layout.webp", kicker: "PREP", title: "The High-Protein Layout", body: "This build swaps fat for protein using a larger, leaner patty, reduced-fat cheddar, and a yoghurt-based sauce." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/beef/BM-ING-BEEF-003-90-10-lean-beef.webp", kicker: "MEAT", title: "Select 90/10 Beef", body: "Use 90/10 lean beef. It provides significantly more protein per calorie but requires careful cooking to prevent drying out." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/patty/BM-PATTY-008-ready-for-cooking.webp", kicker: "PORTION", title: "A larger 170g patty", body: "Because the meat is lean, we can increase the portion size to 170 grams to maximize the protein payload." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-005-freshly-flipped.webp", kicker: "SEAR", title: "Sear quickly", body: "Sear over high heat. Lean beef has less margin for error, so we want to build a crust rapidly without overcooking the centre." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-010-perfect-patty-no-cheese.webp", kicker: "TEMP", title: "Stop cooking earlier", body: "Remove the patty as soon as it hits medium-rare to medium. Lean beef becomes tough and dry if cooked to well-done." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-012-sharp-cheddar-slices.webp", kicker: "CHEESE", title: "Reduced-fat cheddar", body: "Apply a slice of sharp, reduced-fat cheddar. It melts reasonably well and provides strong flavour for fewer calories." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/buns/BM-BUN-006-english-muffin.webp", kicker: "BUILD", title: "Use a thin bun", body: "Use a thin wholemeal bun or English muffin to reduce empty carbohydrates while maintaining the structural integrity of a burger." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/condiments/BM-COND-008-greek-yoghurt-burger-sauce.webp", kicker: "BUILD", title: "Yoghurt-based sauce", body: "Spread a sauce made from Greek yoghurt, ketchup, and relish. It mimics classic burger sauce but adds protein instead of fat." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-018-correct-tomato-placement.webp", kicker: "BUILD", title: "Add fresh moisture", body: "Layer plenty of lettuce and thick tomato slices. These add essential moisture to compensate for the leaner beef." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-021-complete-vegetable-stack.webp", kicker: "BUILD", title: "Assemble the stack", body: "Place the heavy 170g patty on the vegetables, crown the burger, and serve immediately." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cross-sections/BM-XSEC-002-medium-rare-cross-section.webp", kicker: "FINISH", title: "Dense and satisfying", body: "A massive 46g of protein in a satisfying, substantial burger that fits perfectly into a macro-conscious diet." }
    ]
  },
  {
    id: "lower-calorie",
    title: "Lean Mustard Burger",
    collection: "Lower Calorie",
    hero: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/BM-HERO-ASM-006-lower-calorie-burger-hero.webp",
    flavour: "Sharp, savoury and pickle-forward",
    texture: "Light, crisp and compact",
    time: "20 min",
    difficulty: "Easy",
    macros: { calories: 356, protein: 34, fat: 13, carbs: 24 },
    ingredients: ["140 g 95/5 beef", "1 lettuce wrap or thin bun", "Yellow mustard", "Pickles and white onion", "No cheese"],
    build: { name: "Lean Mustard Burger", meat: "beef95", weight: 140, thickness: 12, cheese: "none", bun: "lettuce", sauce: "mustard", toppings: "minimal" },
    steps: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-003-low-calorie-layout.webp", kicker: "PREP", title: "The Low-Calorie Layout", body: "To cut calories drastically without losing the burger experience, we eliminate cheese, use extra-lean beef, and rely on mustard and pickles for flavour." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/beef/BM-ING-BEEF-004-95-5-extra-lean-beef.webp", kicker: "MEAT", title: "Select 95/5 Beef", body: "Use 95/5 extra-lean beef. It has almost no fat, saving hundreds of calories, but requires specific techniques to remain edible." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-008-ready-to-shape.webp", kicker: "PORTION", title: "Keep it moderate", body: "Portion 140 grams of meat. A massive patty of extra-lean beef becomes tiring to chew, so a moderate size is best." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/patty/BM-PATTY-005-no-dimple-comparison.webp", kicker: "SHAPE", title: "Keep it moderately thin", body: "Shape the patty thinner than usual (about 12mm). A thinner lean patty cooks quickly and develops crust before the centre dries out." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-006-second-side-crust.webp", kicker: "SEAR", title: "Fast and hot", body: "Sear over very high heat for just 2 minutes per side. Do not overcook it." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cross-sections/BM-XSEC-009-dry-interior-macro.webp", kicker: "WARNING", title: "Beware the dry centre", body: "Extra-lean beef has no fat to lubricate the muscle fibres. If you cook it past medium, it will become unpleasantly dry and crumbly." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/buns/BM-BUN-007-lettuce-wrap.webp", kicker: "BUILD", title: "Use a lettuce wrap", body: "To save 150+ calories, swap the bun for a crisp iceberg lettuce wrap, or use a very thin, low-calorie bun alternative." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/condiments/BM-COND-003-yellow-mustard.webp", kicker: "BUILD", title: "Use acidity, not fat", body: "Skip the mayonnaise. Yellow mustard delivers strong, sharp flavour for fewer than 10 calories and keeps the burger lively." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/vegetables/BM-VEG-006-pickles.webp", kicker: "BUILD", title: "Heavy on the pickles", body: "Layer dill pickles and white onion generously. Their crunch and acidity replace the satisfaction normally provided by cheese and fat." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-023-clean-layering-macro.webp", kicker: "BUILD", title: "Assemble the burger", body: "Wrap the hot patty tightly in the lettuce or place it on your thin bun." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cross-sections/BM-XSEC-008-juicy-interior-macro.webp", kicker: "FINISH", title: "Light and sharp", body: "At under 360 calories, this burger provides a sharp, savoury hit without the heavy, lethargic aftermath of a classic build." }
    ]
  },
  {
    id: "beef-pork",
    title: "Beef & Pork Provolone",
    collection: "Flavour Forward",
    hero: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/BM-HERO-ASM-008-editorial-beauty-shot.webp",
    flavour: "Rich, subtly sweet and savoury",
    texture: "Exceptionally tender and juicy",
    time: "28 min",
    difficulty: "Medium",
    macros: { calories: 702, protein: 38, fat: 43, carbs: 39 },
    ingredients: ["160 g beef–pork blend", "1 brioche bun", "1 slice provolone", "Dijon-style burger sauce", "Pickles and onion"],
    build: { name: "Beef & Pork Provolone", meat: "beefpork", weight: 160, thickness: 18, cheese: "provolone", bun: "brioche", sauce: "classic", toppings: "minimal" },
    steps: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-007-beef-vs-beef-pork-comparison.webp", kicker: "PREP", title: "The Pork Blend Layout", body: "Blending pork into beef creates an incredibly tender, slightly sweet patty. We pair it with mild provolone, sweet brioche, and sharp Dijon." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-002-pork-hero.webp", kicker: "MEAT", title: "Blend 70/30", mix: true, body: "Mix 70% ground beef with 30% ground pork. The pork fat renders easily, ensuring a juicy burger even when cooked all the way through." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/patty/BM-PATTY-003-overcompressed-mistake.webp", kicker: "WARNING", title: "Do not over-compress", body: "Pork blends can become sausage-like if overworked. Shape the 160g patty with very light hands." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/patty/BM-PATTY-007-macro-edge-detail.webp", kicker: "SHAPE", title: "A thick, rustic edge", body: "Leave the edges slightly rough. This allows the rendered pork fat to crisp up beautifully in the pan." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-011-cold-pan-mistake.webp", kicker: "WARNING", title: "Ensure the pan is hot", body: "Do not put the patty into a cold pan. Pork fat renders quickly; if the pan isn't screaming hot, the patty will boil in its own juices." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-019-uneven-cooking-mistake.webp", kicker: "SEAR", title: "Cook it through", body: "Because the blend contains pork, cook it to a safe internal temperature (medium-well) while managing heat to preserve the crust." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-014-provolone.webp", kicker: "CHEESE", title: "Apply Provolone", body: "Use a slice of mild provolone. Its smooth, slightly smoky flavour complements the sweet pork without overpowering it." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-005-provolone-melt.webp", kicker: "MELT", title: "A perfect, stretchy melt", body: "Cover and melt the provolone until it drapes heavily over the edges of the thick patty." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/condiments/BM-COND-004-dijon-mustard.webp", kicker: "BUILD", title: "Dijon burger sauce", body: "Spread a sauce made with a heavy hit of Dijon mustard onto a toasted brioche bun. The mustard spice cuts the rich pork fat." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-009-correct-mayonnaise-spread.webp", kicker: "BUILD", title: "Even coverage", body: "Ensure the sauce reaches all the way to the edges of the bun." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-019-correct-onion-placement.webp", kicker: "BUILD", title: "Add onions and pickles", body: "Layer raw onions and pickles. The sharp bite is necessary against the sweet brioche and pork." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-029-double-patty-alignment.webp", kicker: "BUILD", title: "Stack the burger", body: "Place the heavy patty on the vegetables and crown with the top bun." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cross-sections/BM-XSEC-004-medium-well-cross-section.webp", kicker: "FINISH", title: "Tender and safe", body: "A medium-well centre that remains incredibly juicy thanks to the pork fat, delivering a rich, complex flavour profile." }
    ]
  },
  {
    id: "beef-lamb",
    title: "Beef & Lamb Burger",
    collection: "Flavour Forward",
    hero: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/BM-HERO-ASM-009-burger-held-one-hand.webp",
    flavour: "Earthy, aromatic and deeply savoury",
    texture: "Juicy with a substantial bite",
    time: "28 min",
    difficulty: "Medium",
    macros: { calories: 676, protein: 40, fat: 40, carbs: 36 },
    ingredients: ["160 g beef–lamb blend", "1 sesame bun", "Swiss or provolone", "Greek-yoghurt sauce", "Red onion, tomato and lettuce"],
    build: { name: "Beef & Lamb Burger", meat: "beeflamb", weight: 160, thickness: 18, cheese: "swiss", bun: "sesame", sauce: "yoghurt", toppings: "standard" },
    steps: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-008-beef-vs-beef-lamb-comparison.webp", kicker: "PREP", title: "The Lamb Blend Layout", body: "Lamb brings an earthy, robust flavour. We pair it with Swiss cheese, a fresh yoghurt sauce, and sharp red onions to balance the heavy fat." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-003-lamb-hero.webp", kicker: "MEAT", title: "Blend 50/50", body: "Mix equal parts ground beef and ground lamb. This grounds the burger in familiar umami while letting the lamb's aromatic qualities shine." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-006-overmixed-meat-mistake.webp", kicker: "WARNING", title: "Do not overmix", body: "Lamb fat is dense. If you overmix the blend, the patty will become incredibly tough and heavy on the palate." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/patty/BM-PATTY-008-ready-for-cooking.webp", kicker: "SHAPE", title: "A thick 160g patty", body: "Shape a thick, 160-gram patty. Lamb benefits from a robust sear and a juicy, medium-rare centre." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-012-smoking-hot-pan-mistake.webp", kicker: "WARNING", title: "Manage the smoke", body: "Lamb fat smokes heavily when it hits a hot pan. Ensure your extractor fan is on high before searing." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-009-crosslight-crust-detail.webp", kicker: "SEAR", title: "Build a heavy crust", body: "Sear aggressively. The robust flavour of lamb can stand up to a very dark, heavily charred crust." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-013-swiss-cheese.webp", kicker: "CHEESE", title: "Apply Swiss cheese", body: "Use a slice of Swiss cheese. Its nutty, mellow flavour pairs beautifully with earthy lamb." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-004-swiss-melt.webp", kicker: "MELT", title: "A glossy melt", body: "Melt the Swiss until glossy. It will not drape as heavily as American cheese, but it provides excellent texture." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/buns/BM-BUN-003-sesame-bun.webp", kicker: "BUILD", title: "Toast a sesame bun", body: "The nutty, roasted flavour of sesame seeds is the perfect match for lamb." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/condiments/BM-COND-001-mayonnaise.webp", kicker: "BUILD", title: "Garlic yoghurt sauce", body: "Spread a sauce made of Greek yoghurt, minced garlic, and lemon juice. The acidity cuts through the dense lamb fat." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/vegetables/BM-VEG-004-red-onion.webp", kicker: "BUILD", title: "Add red onions", body: "Use sharp, raw red onions instead of white. Their pungency stands up to the lamb's bold flavour." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-026-perfect-cheese-alignment.webp", kicker: "BUILD", title: "Stack the burger", body: "Place the heavy, cheese-topped patty on the vegetables and crown it." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cross-sections/BM-XSEC-010-resting-juices.webp", kicker: "FINISH", title: "Let it rest", body: "Allow the burger to rest for a minute before eating so the dense lamb juices redistribute through the patty." }
    ]
  }
];

export function recipeById(id) {
  return recipes.find(recipe => recipe.id === id);
}
