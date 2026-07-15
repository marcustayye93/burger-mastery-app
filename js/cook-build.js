// Burger Mastery · v1.2.0 · Cook This Build
// Compiles the user's current Builder selections into a personalised,
// recipe-shaped cook-along story. Zero new photography: every slide reuses
// one of the 56 registered asset keys or a step image already shipped with
// the six signature recipes.
import {assets, RAW} from "./assets.js";

// Step images harvested from the signature-recipe pipeline (same CDN, already cached offline once any recipe has been opened).
const IMG = {
  firstContact: `${RAW}/cooking/BM-COOK-001-first-contact.webp`,
  flipTiming: `${RAW}/cooking/BM-COOK-004-ideal-flip-timing.webp`,
  freshlyFlipped: `${RAW}/cooking/BM-COOK-005-freshly-flipped.webp`,
  secondSideCrust: `${RAW}/cooking/BM-COOK-006-second-side-crust.webp`,
  smashSear: `${RAW}/cooking/BM-COOK-002-fifteen-seconds-sear.webp`,
  smashCrust: `${RAW}/cooking/BM-COOK-003-first-crust-forming.webp`,
  thermometer: `${RAW}/cross-sections/BM-XSEC-003-medium-cross-section.webp`,
  mediumWell: `${RAW}/cross-sections/BM-XSEC-004-medium-well-cross-section.webp`,
  restingJuices: `${RAW}/cross-sections/BM-XSEC-010-resting-juices.webp`,
  lettuceWrap: `${RAW}/ingredients/buns/BM-BUN-007-lettuce-wrap.webp`,
  sauceSpread: `${RAW}/assembly/BM-ASM-010-correct-burger-sauce-spread.webp`,
  vegetableStack: `${RAW}/assembly/BM-ASM-021-complete-vegetable-stack.webp`,
  topBun: `${RAW}/assembly/BM-ASM-033-correct-top-bun-placement.webp`
};

const byId = (list, id) => list.find(x => x.id === id) || list[0];

// ---- Derivations -----------------------------------------------------------

function searPlan(build, meat) {
  const t = Number(build.thickness), w = Number(build.weight);
  const fullyCooked = meat.id === "beefpork"; // pork blend must reach 71 °C
  const heavier = w >= 180 ? 1 : 0; // heavier patties carry more cold mass
  if (t < 10) return {
    mode: "smash",
    perSide: "60–90 seconds",
    first: `${75 + heavier * 15} seconds`,
    second: `${60 + heavier * 15} seconds`,
    temp: fullyCooked ? "71 °C" : "cooked through — smash patties pass the safe zone almost instantly",
    rest: "1–2 minutes", restWhy: "A smash patty is thin enough that carry-over finishes in the time it takes to dress the bun."
  };
  if (t <= 15) return {
    mode: "fast",
    perSide: `${2 + heavier}–3 minutes`,
    first: `${2 + heavier} minutes`,
    second: "2 minutes",
    temp: fullyCooked ? "71 °C" : "57–60 °C for medium (54 °C only with fresh, trusted grind)",
    rest: "2 minutes", restWhy: "Two minutes lets the juices thicken without the patty cooling."
  };
  if (t <= 20) return {
    mode: "standard",
    perSide: `${3 + heavier}–4 minutes`,
    first: `${3 + heavier} minutes`,
    second: "3 minutes",
    temp: fullyCooked ? "71 °C" : "57–60 °C for medium (54 °C only with fresh, trusted grind)",
    rest: "3 minutes", restWhy: "Three minutes redistributes the juices so the first bite doesn't flood the bun."
  };
  return {
    mode: "thick",
    perSide: `${4 + heavier}–5 minutes`,
    first: `${4 + heavier} minutes`,
    second: "4 minutes",
    temp: fullyCooked ? "71 °C" : "57–60 °C — with a patty this thick the thermometer is not optional",
    rest: "5 minutes", restWhy: "A thick patty stores serious carry-over heat; five minutes lets the centre finish and the juices settle."
  };
}

function deriveTiming(build, plan) {
  let prep = 10; // portion, shape, mise en place
  if (build.onion !== "none" || build.garlic !== "none") prep += 5; // grate, squeeze, fold, chill
  let cook = plan.mode === "smash" ? 5 : plan.mode === "fast" ? 8 : plan.mode === "standard" ? 10 : 13;
  let rest = plan.mode === "smash" ? 2 : plan.mode === "fast" ? 2 : plan.mode === "standard" ? 3 : 5;
  const total = Math.ceil((prep + cook + rest) / 5) * 5;
  return {prep, cook, rest, total};
}

function deriveDifficulty(build, plan, meat) {
  let score = 0;
  if (plan.mode === "smash" || plan.mode === "thick") score += 1;
  if (build.onion !== "none") score += 1;
  if (build.garlic !== "none") score += 1;
  if (meat.id === "beefpork" || meat.id === "beeflamb") score += 1;
  if (build.seasoning === "smoky") score += 1; // paprika scorch management
  return score <= 1 ? "Easy" : score <= 3 ? "Moderate" : "Advanced";
}

// ---- Slide builders --------------------------------------------------------

function ingredientList(build, r) {
  const items = [`${build.weight} g ${r.m.label.toLowerCase()}`];
  if (build.onion !== "none") items.push(r.on.label.toLowerCase());
  if (build.garlic !== "none") items.push(r.ga.label.toLowerCase());
  items.push(r.se.label.toLowerCase());
  if (build.cheese !== "none") items.push(`1 slice ${r.c.label.toLowerCase()}`);
  items.push(build.bun === "lettuce" ? "large lettuce leaves for wrapping" : `1 ${r.bun.label.toLowerCase()}`);
  if (build.sauce !== "none") items.push(r.s.label.toLowerCase());
  items.push(r.t.label.toLowerCase());
  return items;
}

function meatSlides(build, r) {
  const t = Number(build.thickness);
  const meatImg = r.m.id === "beefpork" ? assets.heroBeefPorkPairing : r.m.id === "beeflamb" ? assets.heroBeefLambPairing : assets.meatBeef;
  const slides = [{
    image: meatImg, kicker: "MEAT",
    title: `Start with ${r.m.label.toLowerCase()}`,
    body: `${r.m.flavour} ${r.m.cooking} Keep the ${build.weight} g portion refrigerated until the moment you work it — warm fat smears and costs you the crumbly, tender bite.`
  }];
  if (r.m.id === "beefpork") slides.push({
    image: assets.grindLoose, kicker: "MEAT",
    title: "Handle the pork blend gently",
    body: "Pork proteins bind faster than beef. Overworking this blend creates a bouncy, sausage-like texture. Keep the grind loose and cold, and plan to cook it fully to 71 °C — no pink centre with pork in the mix."
  });
  if (r.m.id === "beeflamb") slides.push({
    image: assets.grindLoose, kicker: "MEAT",
    title: "Let the lamb speak",
    body: "Lamb brings a grassy, slightly gamey richness that stands up to bold aromatics. Keep the grind loose; lamb fat melts at a higher temperature, so serve this burger hot off the rest for the best mouthfeel."
  });
  return slides;
}

function aromaticSlides(build, r) {
  const slides = [];
  if (build.onion !== "none") {
    const heavy = build.onion === "grated10";
    slides.push({
      image: assets.onionGrated, kicker: "AROMATICS",
      title: heavy ? "Grate 10 g of onion per patty" : "Grate 5 g of onion per patty",
      body: `${r.on.cooking} ${heavy ? "At 10 g the mix turns noticeably wetter — a firm squeeze in a paper towel is the difference between a patty that shapes cleanly and one that falls apart in the pan." : "At 5 g the onion melts invisibly into the crumb, adding juiciness and a quiet sweetness without announcing itself."}`
    });
  }
  if (build.garlic !== "none") {
    const gImg = build.garlic === "powder" ? assets.garlicPowder : build.garlic === "roasted" ? assets.garlicRoasted : assets.garlicMinced;
    slides.push({
      image: gImg, kicker: "AROMATICS",
      title: build.garlic === "fresh" ? "Mince fresh garlic to a paste"
        : build.garlic === "powder" ? "Measure the garlic powder"
        : "Mash the roasted garlic",
      body: `${r.ga.cooking} ${r.ga.flavour}`
    });
  }
  if (build.onion !== "none" || build.garlic !== "none") {
    slides.push({
      image: assets.garlicInMeat, kicker: "AROMATICS",
      title: "Fold the aromatics through",
      body: `Scatter the aromatics over the cold meat and fold with no more than five or six strokes — just enough to distribute, never enough to knead. ${build.onion === "grated10" ? "With 10 g of onion in the mix, chill the seasoned meat for 10 minutes before shaping so the moisture equalises and the patty firms up." : "Then move straight to shaping while everything is still cold."}`
    });
  }
  return slides;
}

function seasoningSlide(build, r) {
  const sImg = build.seasoning === "smoky" ? assets.seasoningPaprika : build.seasoning === "herb" ? assets.seasoningBlend : assets.seasoningSalt;
  const extra = build.seasoning === "smoky"
    ? " One warning for the pan stage: smoked paprika scorches easily, so keep the heat just below smoking and turn promptly."
    : build.seasoning === "herb"
    ? " Dried herbs bloom in fat, so the flavour builds as the crust forms."
    : " Salt on the surface, not in the mix — interior salt dissolves the proteins and turns the bite springy.";
  return {
    image: sImg, kicker: "SEASONING",
    title: `Season: ${r.se.label.toLowerCase()}`,
    body: `${r.se.cooking}${extra} Season the outside generously just before the patty meets the pan — early salting draws moisture to the surface and steams the crust away.`
  };
}

function shapeSlides(build, plan) {
  const t = Number(build.thickness);
  const slides = [{
    image: assets.shaping, kicker: "SHAPING",
    title: `Shape ${build.weight} g, ${t} mm thick`,
    body: `Portion ${build.weight} g and shape with cold hands and light pressure — press just until the edges stop cracking. ${t < 10 ? "For a smash patty, roll a loose ball instead; the pan does the shaping." : "Aim for a puck slightly wider than your bun, because every patty shrinks as the fat renders."}`
  }];
  if (t < 10) {
    slides.push({
      image: assets.heroSmash, kicker: "SHAPING",
      title: "Smash territory",
      body: "Under 10 mm you're cooking a smash burger: maximum crust, minimum interior. No dimple needed — the press flattens everything. Have parchment and a heavy spatula ready before the pan heats."
    });
  } else if (t <= 15) {
    slides.push({
      image: assets.thickness, kicker: "SHAPING",
      title: "A fast-cooking patty",
      body: `At ${t} mm this patty cooks quickly and evenly. Press a shallow dimple into the centre with your thumb — thinner patties still dome slightly, and the dimple keeps the surface flat for even crust contact.`
    });
  } else {
    slides.push({
      image: assets.dimple, kicker: "SHAPING",
      title: "Press the thumb dimple",
      body: `At ${t} mm the patty will dome as the edges contract in the pan. Press a clear dimple into the centre — about a third of the thickness deep. It cooks out flat and keeps the crust in full contact with the pan.${t > 20 ? " With a patty this thick, rest the shaped puck in the fridge for 10 minutes so it holds together through the longer cook." : ""}`
    });
  }
  return slides;
}

function searSlides(build, r, plan) {
  const slides = [];
  const roastedGarlic = build.garlic === "roasted";
  const heavyOnion = build.onion === "grated10";
  if (plan.mode === "smash") {
    slides.push({
      image: assets.pattyReady, kicker: "THE SEAR",
      title: "Get the pan ripping hot",
      body: "A smash burger needs a pan just starting to smoke — cast iron or carbon steel, dry, over the highest heat. Drop the ball, cover with parchment, and press hard with a spatula for 10 full seconds until it's wafer-thin."
    }, {
      image: IMG.smashSear, kicker: "THE SEAR",
      title: `Sear ${plan.first}, no touching`,
      body: `Hold ${plan.first} on the first side while the crust builds — lacy, deep brown edges are the goal.${roastedGarlic ? " Your roasted garlic adds extra sugars that brown fast: pull the heat back a notch and watch the edges." : ""}${build.seasoning === "smoky" ? " Watch the paprika — if it smells sharp, the pan is too hot." : ""}`
    }, {
      image: IMG.smashCrust, kicker: "THE SEAR",
      title: `Scrape, flip, ${plan.second} more`,
      body: `Scrape under the crust with a thin spatula — leave nothing behind — flip once, and give it ${plan.second}. ${build.cheese !== "none" ? "Lay the cheese on immediately after the flip so it melts on residual heat." : "The second side needs barely a minute; it's already nearly done."}`
    });
    return slides;
  }
  slides.push({
    image: IMG.firstContact, kicker: "THE SEAR",
    title: "First contact",
    body: `Preheat a heavy pan over medium-high until a drop of water skates and vanishes. Lay the patty away from you and don't move it. ${r.m.cooking}${roastedGarlic ? " Roasted garlic sugars brown roughly 30 seconds faster per side — set your timer accordingly and trust colour over the clock." : ""}`
  });
  slides.push({
    image: IMG.flipTiming, kicker: "THE SEAR",
    title: `First side: ${plan.first}`,
    body: `Give the first side ${roastedGarlic ? `${plan.first}, minus about 30 seconds — the aromatic sugars accelerate browning` : plan.first}${heavyOnion ? ", plus an extra 10 seconds — the onion moisture cools the surface before the crust can set" : ""}. You'll know it's ready when the patty releases from the pan without a fight and the edges show a deep brown band climbing the side.`
  });
  slides.push({
    image: IMG.freshlyFlipped, kicker: "THE SEAR",
    title: `Flip once, then ${plan.second}`,
    body: `One flip only — every extra flip trades crust for nothing. ${plan.mode === "thick" ? "After the flip, drop the heat to medium so the centre catches up without the surface burning." : "Keep the heat steady and let the second side build its own crust."} About ${plan.second} on side two.`
  });
  return slides;
}

function doneSlide(build, r, plan) {
  const fully = r.m.id === "beefpork";
  return {
    image: fully ? IMG.mediumWell : IMG.thermometer, kicker: "DONENESS",
    title: fully ? "Cook fully: 71 °C" : "Trust the thermometer",
    body: fully
      ? "With pork in the blend there is no medium-rare option — probe the thickest point from the side and pull at 71 °C. The pork fat keeps it juicy well past the temperatures that would dry out pure beef."
      : `Probe the thickest point from the side. Pull at ${plan.temp}. Carry-over adds 2–3 °C during the rest, so pulling slightly early lands you exactly on target.`
  };
}

function cheeseSlide(build, r) {
  if (build.cheese === "none") return [];
  return [{
    image: assets.cheese, kicker: "CHEESE",
    title: `Melt the ${r.c.label.toLowerCase()}`,
    body: `${r.c.cooking} ${r.c.flavour || ""} A splash of water in the pan and a lid for 30 seconds turns the pan into a steam chamber — the fastest route to a full drape without overcooking the patty.`
  }];
}

function bunSlide(build, r) {
  if (build.bun === "lettuce") return [{
    image: IMG.lettuceWrap, kicker: "THE WRAP",
    title: "Build the lettuce wrap",
    body: "Dry the leaves thoroughly — water is the enemy of structure. Overlap two or three large leaves into a double layer, shine side out. No toasting step tonight; the wrap goes straight to assembly."
  }];
  const potato = build.bun === "potato";
  return [{
    image: potato ? assets.bunPotatoToasted : assets.toast, kicker: "THE BUN",
    title: `Toast the ${r.bun.label.toLowerCase()}`,
    body: `${r.bun.cooking} Do this while the patty rests — the cut face should be golden and crisp, a moisture barrier that keeps the bottom bun from soaking through.`
  }];
}

function restSlide(plan) {
  return {
    image: IMG.restingJuices, kicker: "THE REST",
    title: `Rest ${plan.rest}`,
    body: `Move the patty to a warm plate or rack and leave it alone for ${plan.rest}. ${plan.restWhy} Skipping the rest sends every drop of juice into the bun instead of your first bite.`
  };
}

function assemblySlides(build, r) {
  const slides = [];
  if (build.sauce !== "none") slides.push({
    image: build.sauce === "yoghurt" ? assets.yoghurtSauce : IMG.sauceSpread, kicker: "ASSEMBLY",
    title: `Sauce: ${r.s.label.toLowerCase()}`,
    body: `${r.s.cooking || "Spread a thin, even layer edge to edge."} ${build.sauce === "yoghurt" ? "Yoghurt splits under direct heat, so it only ever touches the burger after the patty leaves the pan." : "Thin and even beats a blob in the middle — every bite should taste the same."}`
  });
  slides.push({
    image: assets.layers, kicker: "ASSEMBLY",
    title: "Stack in the right order",
    body: build.bun === "lettuce"
      ? `Onto the lettuce base: ${build.sauce !== "none" ? "a light stripe of sauce, " : ""}${build.toppings === "minimal" ? "then the patty" : "the vegetables, then the patty"}${build.cheese !== "none" ? " with its melted cheese" : ""}. Fold tightly and wrap the base in paper so it holds.`
      : `Bottom bun${build.sauce !== "none" ? " → sauce" : ""}${build.toppings === "minimal" ? "" : " → lettuce → tomato → onion → pickles"} → patty${build.cheese !== "none" ? " with cheese" : ""} → top bun. Vegetables under the patty keep the bottom bun dry; the cheese glues the patty to the stack.`
  });
  return slides;
}

function finalSlide(build, r, timing) {
  return {
    image: assets.heroTopdown, kicker: "SERVICE",
    title: `${build.name || "Your build"}, done`,
    noTimer: true,
    body: `${r.cooked.calories} kcal, ${r.cooked.protein} g protein on the plate — your spec, your burger, cooked in about ${timing.total} minutes. If it hit, save this build to your Lab. If it can be better, head back to the Builder and change exactly one thing.`
  };
}

// ---- Public API ------------------------------------------------------------

export function generateCookStory(build, catalogue, r) {
  const meat = byId(catalogue.meats, build.meat);
  const plan = searPlan(build, meat);
  const timing = deriveTiming(build, plan);
  const difficulty = deriveDifficulty(build, plan, meat);
  const steps = [
    {
      image: assets.portion, kicker: "MISE EN PLACE",
      title: "Lay everything out",
      body: `Tonight's build: ${ingredientList(build, r).join(", ")}. Get every element on the bench before the pan goes on — a burger cooks too fast for mid-sear shopping trips.`
    },
    ...meatSlides(build, r),
    ...aromaticSlides(build, r),
    seasoningSlide(build, r),
    ...shapeSlides(build, plan),
    ...searSlides(build, r, plan),
    doneSlide(build, r, plan),
    ...cheeseSlide(build, r),
    restSlide(plan),
    ...bunSlide(build, r),
    ...assemblySlides(build, r),
    finalSlide(build, r, timing)
  ];
  return {
    id: "custom-build",
    title: build.name || "My Burger",
    collection: "MY BURGER",
    hero: assets.finished,
    flavour: r.m.flavour || "Your custom profile",
    texture: r.m.texture || "Defined by your build",
    time: `${timing.total} min`,
    difficulty,
    macros: {calories: r.cooked.calories, protein: r.cooked.protein, fat: r.cooked.fat, carbs: r.cooked.carbs},
    ingredients: ingredientList(build, r),
    build: {...build},
    steps,
    custom: true
  };
}
