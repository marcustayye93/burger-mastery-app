// v2.6.1: detect consecutive repeated photos in every slide-show sequence.
import {lessonSequence} from "../js/data.js";
import {steakLessonSequence} from "../js/steak-lessons-data.js";
import {flavourTopics} from "../js/flavours-data.js";
import {steakFlavourTopics} from "../js/steak-flavours.js";
import {recipes} from "../js/recipes-data.js";
import {steakRecipes} from "../js/steak-recipes.js";
import {sides} from "../js/sides-data.js";
import {steakSides} from "../js/steak-sides-data.js";

let total = 0;
const report = [];
function checkSeq(name, seq, getImg) {
  for (let i = 1; i < seq.length; i++) {
    const a = getImg(seq[i - 1]), b = getImg(seq[i]);
    if (a && b && a === b) {
      total++;
      report.push(`${name} @${i - 1}->${i}: ${String(b).split("/").pop()}`);
    }
  }
}

checkSeq("burger-curriculum", lessonSequence, s => s.image);
checkSeq("steak-curriculum", steakLessonSequence, s => s.image);
for (const t of flavourTopics) checkSeq(`burger-flavour:${t.id}`, t.slides, s => s.image || t.hero);
for (const t of steakFlavourTopics) checkSeq(`steak-flavour:${t.id}`, t.slides, s => s.image || t.hero);
for (const r of recipes) checkSeq(`burger-recipe:${r.id}`, r.steps || [], s => s.image || r.hero);
for (const r of steakRecipes) checkSeq(`steak-recipe:${r.id}`, r.steps || [], s => s.image || r.hero);
for (const s of sides) checkSeq(`burger-side:${s.id}`, s.steps || [], x => x.image || s.hero);
for (const s of steakSides) checkSeq(`steak-side:${s.id}`, s.steps || [], x => x.image || s.hero);

console.log(report.join("\n") || "(no consecutive repeats)");
console.log("TOTAL consecutive repeats:", total);
