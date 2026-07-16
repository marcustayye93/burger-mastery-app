// v2.6.1: rewrite slide image assignments so no two consecutive slides in any
// slide-show sequence share the same photo. Works directly on the source files:
// for each consecutive repeat, the LATER slide's image key is swapped to a
// thematically-related key that differs from both its neighbours.
import {readFileSync, writeFileSync} from "node:fs";

// Thematic pools — replacements are only drawn from the same pool so the photo
// still matches the slide's subject matter.
const burgerPools = [
  ["meatBeef", "meatCompare", "grindLoose", "texture", "portion", "pattyReady", "mixing"],
  ["meatChickenBreast", "meatChickenGround", "meatChickenFlatlay", "pattyChickenRaw", "cookingChickenSkillet", "cookingChickenSeasoning", "heroChicken", "xsecChicken"],
  ["mixing", "texture", "grindLoose", "onionGrated", "garlicInMeat", "portion", "shaping"],
  ["shaping", "portion", "dimple", "thickness", "pattyReady", "heroSmash", "heroCross"],
  ["seasoningSalt", "seasoningPepper", "seasoningPaprika", "seasoningBlend", "seasoningEven", "seasoningOneSide", "seasoningCrust"],
  ["cheese", "heroClassic", "heroSteakhouse", "heroTopdown", "finished", "heroCross", "heroEditorial"],
  ["toast", "bunPotatoToasted", "sauce", "layers", "yoghurtSauce", "heroClassic", "heroTopdown", "finished", "heroEditorial"],
  ["heroBeefPairing", "heroPorkPairing", "heroLambPairing", "heroChickenPairing", "heroBeefPorkPairing", "heroBeefLambPairing", "heroClassic"],
  ["onionDice", "onionSlices", "onionSweating", "onionMidCaramel", "onionFullCaramel", "onionGrated"],
  ["garlicCloves", "garlicMinced", "garlicPowder", "garlicRoasted", "garlicInMeat"]
];
const steakPools = [
  ["stkBrine", "stkMise", "stkRest", "stkSlice", "stkProbe"],
  ["stkPanHeat", "stkPanSear", "stkBaste", "stkButter", "stkGrill"],
  ["stkGrill", "stkOven", "stkAirfry", "stkReverseRack", "stkSousvide", "stkPanSear"],
  ["stkProbe", "stkRest", "stkSlice", "stkButter", "stkBrine"]
];

function poolsFor(key, pools) {
  return pools.filter(p => p.includes(key)).flat();
}

// Process a data file: find all `image:A.key` (or assets.key) tokens in order,
// treat runs within the SAME sequence marker as consecutive. For curricula the
// entire lessonSequence is flattened in file order, which matches how slides
// play (chapters/lessons run continuously), so file order == play order.
function fixFile(path, prefix, pools, breakOnHero = false) {
  let src = readFileSync(path, "utf8");
  const re = new RegExp(`image:${prefix}\\.([a-zA-Z0-9]+)`, "g");
  const tokens = [];
  let m;
  while ((m = re.exec(src)) !== null) tokens.push({ idx: m.index, len: m[0].length, key: m[1] });
  const keys = tokens.map(t => t.key);
  let changes = 0;
  for (let i = 1; i < tokens.length; i++) {
    if (keys[i] !== keys[i - 1]) continue;
    const prev = keys[i - 1];
    const next = i + 1 < keys.length ? keys[i + 1] : null;
    let pool = poolsFor(keys[i], pools).filter(k => k !== prev && k !== next && k !== keys[i]);
    if (!pool.length) pool = pools.flat().filter(k => k !== prev && k !== next && k !== keys[i]);
    if (!pool.length) continue;
    const pick = pool[i % pool.length];
    keys[i] = pick;
    changes++;
  }
  // rebuild the file applying new keys back-to-front to keep indices valid
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (keys[i] === tokens[i].key) continue;
    src = src.slice(0, tokens[i].idx) + `image:${prefix}.${keys[i]}` + src.slice(tokens[i].idx + tokens[i].len);
  }
  writeFileSync(path, src);
  console.log(`${path}: ${changes} slide images reassigned`);
}

fixFile("js/burger-lessons-data.js", "A", burgerPools);
fixFile("js/steak-lessons-data.js", "A", steakPools);
