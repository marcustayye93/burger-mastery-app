import { assets } from "./assets.js";

export const flavourTopics = [
  {
    id: "meat-beef",
    category: "Meat Taste Guides",
    title: "How Beef Tastes",
    flavour: "Savoury, rich, and umami-heavy",
    hero: assets.meatBeef,
    slides: [
      { image: assets.meatBeef, kicker: "THE FOUNDATION", title: "The Taste of Beef", body: "Beef is the gold standard for burgers because it delivers a deep, savoury umami punch. It has an inherently rich, mineral-heavy flavour that holds up to aggressive searing and bold toppings." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/beef/BM-ING-BEEF-001-80-20-ground-chuck.webp", kicker: "THE FAT", title: "Where Flavour Lives", body: "Much of beef's signature taste comes from its fat. An 80/20 ratio of lean meat to fat provides enough rendered tallow to baste the meat as it cooks, creating a buttery, roasted flavour profile." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/beef/BM-ING-BEEF-006-fat-marbling-macro.webp", kicker: "THE SEAR", title: "The Maillard Reaction", body: "When beef hits a hot pan, amino acids and sugars react to create hundreds of new flavour compounds. This browned crust tastes entirely different from the interior: nutty, roasted, and slightly bitter." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-018-cheese-comparison-flatlay.webp", kicker: "PAIRING", title: "What Pairs Best", body: "Beef pairs beautifully with sharp, salty, and acidic ingredients. American cheese melts into its fat, while sharp cheddar cuts through the richness. Pickles, mustard, and raw onions provide necessary acidic contrast." }
    ]
  },
  {
    id: "meat-pork",
    category: "Meat Taste Guides",
    title: "How Pork Tastes",
    flavour: "Sweet, fatty, and tender",
    hero: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-002-pork-hero.webp",
    slides: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-002-pork-hero.webp", kicker: "THE PROFILE", title: "The Taste of Pork", body: "Ground pork is lighter, sweeter, and significantly more tender than beef. Its fat renders at a lower temperature, creating a very juicy patty with a mild, slightly fruity savoury profile." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-007-beef-vs-beef-pork-comparison.webp", kicker: "THE BLEND", title: "Pork in Blends", body: "Because pure pork can be too mild for a classic burger experience, it is often blended with beef. A 70% beef to 30% pork blend borrows pork's incredible tenderness and sweet fat while maintaining beef's savoury punch." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cheese/BM-CHEESE-014-provolone.webp", kicker: "PAIRING", title: "What Pairs Best", body: "Pork loves sweetness, heat, and mild dairy. It pairs perfectly with caramelised onions, spicy mustard, BBQ sauce, and smooth-melting cheeses like provolone or Swiss rather than sharp cheddar." }
    ]
  },
  {
    id: "meat-lamb",
    category: "Meat Taste Guides",
    title: "How Lamb Tastes",
    flavour: "Earthy, grassy, and robust",
    hero: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-003-lamb-hero.webp",
    slides: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-003-lamb-hero.webp", kicker: "THE PROFILE", title: "The Taste of Lamb", body: "Lamb has a distinctive, earthy, and slightly gamey flavour. The taste is heavily concentrated in its fat, which has a higher melting point and coats the palate with a rich, robust sensation." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-008-beef-vs-beef-lamb-comparison.webp", kicker: "THE BLEND", title: "Taming the Earthiness", body: "A pure lamb burger can be overwhelming for some. Blending 50/50 with beef grounds the burger in familiar umami while allowing the lamb's aromatic qualities to shine through." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/condiments/BM-COND-008-greek-yoghurt-burger-sauce.webp", kicker: "PAIRING", title: "What Pairs Best", body: "Lamb requires bold, fresh, and cooling pairings to balance its heavy fat. Think raw red onion, feta or goat cheese, mint, and yoghurt-based sauces. Standard ketchup and mustard often clash with lamb." }
    ]
  },
  {
    id: "meat-chicken",
    category: "Meat Taste Guides",
    title: "How Chicken Tastes",
    flavour: "Clean, mild, and highly adaptable",
    hero: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-003-low-calorie-layout.webp",
    slides: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/heroes/ingredients/BM-HERO-ING-003-low-calorie-layout.webp", kicker: "THE PROFILE", title: "The Taste of Chicken", body: "Ground chicken is a blank canvas. It is incredibly mild, very lean, and relies almost entirely on the seasonings, crust, and toppings you provide to deliver flavour." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-004-beef-pork-lamb-comparison.webp", kicker: "THE CHALLENGE", title: "Moisture Management", body: "Because chicken lacks the saturated fat of beef or pork, it dries out rapidly. It must be cooked fully for safety, meaning you cannot rely on a medium-rare centre for juiciness." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/condiments/BM-COND-007-chipotle-mayo.webp", kicker: "PAIRING", title: "What Pairs Best", body: "Chicken needs added fat and bold flavour. Mayonnaise-based sauces (like chipotle mayo), avocado, bacon, and highly melting cheeses like pepper jack transform a dry patty into a rich experience." }
    ]
  },
  {
    id: "builder-onions",
    category: "Flavour Builders",
    title: "Onions: Raw vs Cooked",
    flavour: "Pungent bite vs sweet depth",
    hero: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/vegetables/BM-VEG-005-white-onion.webp",
    slides: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/vegetables/BM-VEG-005-white-onion.webp", kicker: "THE PURPOSE", title: "Why Add Onions?", body: "Onions are the most critical aromatic in burger building. They provide either a sharp, acidic bite to cut through rich fat, or a deep, jammy sweetness to enhance the meat's savoury notes." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/ingredients/vegetables/BM-VEG-004-red-onion.webp", kicker: "RAW ONIONS", title: "When to use Raw", body: "Use raw white or red onions when your burger is heavy and fatty. The sharp, sulfuric bite cleanses the palate. Add them directly under the patty so the meat's heat slightly softens their crunch without cooking them." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-019-correct-onion-placement.webp", kicker: "COOKED ONIONS", title: "When to use Cooked", body: "Caramelised or grilled onions add profound sweetness and moisture. Use them when you want a richer, more luxurious burger, especially with Swiss or provolone cheese. They act almost like a sauce." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/assembly/BM-ASM-021-complete-vegetable-stack.webp", kicker: "THE RATIO", title: "How Much to Add", body: "For raw onions, 15-20 grams (two thin rings or a tablespoon of diced) is enough to provide bite without overpowering the beef. For caramelised onions, you can use up to 40 grams, as their flavour is mellow." }
    ]
  },
  {
    id: "builder-garlic",
    category: "Flavour Builders",
    title: "Garlic: Fresh vs Powder",
    flavour: "Aromatic, sharp, and roasted",
    hero: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-005-correct-gentle-mixing.webp",
    slides: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-005-correct-gentle-mixing.webp", kicker: "THE PURPOSE", title: "Why Add Garlic?", body: "Garlic amplifies the savoury umami notes of meat. It provides an aromatic backbone that makes beef taste 'beefier' and adds complexity to mild meats like pork or chicken." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-007-perfect-texture-macro.webp", kicker: "GARLIC POWDER", title: "The Best Choice for Beef", body: "For classic burgers, garlic powder is superior to fresh. It distributes evenly, won't burn on a screaming hot cast iron pan, and provides a sweet, roasted garlic flavour without the sharp bite of raw cloves." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/condiments/BM-COND-007-chipotle-mayo.webp", kicker: "FRESH GARLIC", title: "When to use Fresh", body: "If you want the sharp, pungent bite of fresh garlic, do not mix it into the meat where it will burn. Instead, mince it finely and fold it into your mayonnaise or burger sauce." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/patty/BM-PATTY-008-ready-for-cooking.webp", kicker: "THE RATIO", title: "How Much to Add", body: "Use a light hand. Half a teaspoon of garlic powder per 500 grams of meat is plenty. It should elevate the beef in the background, not turn the patty into a garlic sausage." }
    ]
  },
  {
    id: "builder-spices",
    category: "Flavour Builders",
    title: "Spices & Seasoning",
    flavour: "Salt, pepper, and timing",
    hero: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-007-perfect-texture-macro.webp",
    slides: [
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-007-perfect-texture-macro.webp", kicker: "THE PURPOSE", title: "Why Spices Matter", body: "Spices do not just add flavour; salt physically alters meat proteins. Proper seasoning is the difference between a restaurant-quality burger and a bland, dense meatloaf." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/meat/BM-MEAT-006-overmixed-meat-mistake.webp", kicker: "THE RULE", title: "Never Salt the Mix", body: "Never mix salt into ground beef before shaping. Salt dissolves myosin proteins, turning the meat into a sticky, sausage-like paste. The patty will become dense and rubbery when cooked." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-007-finished-crust.webp", kicker: "THE TIMING", title: "When to Season", body: "Season only the outside of the patty, and only immediately before it hits the hot pan. This creates a concentrated, salty, peppery crust while leaving the interior loose and tender." },
      { image: "https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images/cooking/BM-COOK-001-first-contact.webp", kicker: "THE RATIO", title: "How Much to Add", body: "Use more kosher salt than you think you need. A heavy, even shower of salt and freshly ground black pepper on both sides creates the necessary crust. About 1% of the meat's weight in salt is ideal." }
    ]
  }
];
