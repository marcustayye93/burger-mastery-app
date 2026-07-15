import { courses, lessonSequence, burgerLessons } from "../js/data.js";
import { steakSides } from "../js/steak-sides-data.js";

const lessonCount = Object.values(burgerLessons).reduce((a, l) => a + l.length, 0);
const bad = lessonSequence.filter(s => !s.image || !s.kicker || !s.title || !s.body || s.body.length > 340);
const md = lessonSequence.filter(s => /\*\*|__|##/.test(s.body + s.title));
console.log("chapters:", courses.length);
console.log("lessons:", lessonCount);
console.log("slides:", lessonSequence.length);
console.log("bad slides:", bad.length, bad.map(b => b.slideId));
console.log("markdown leftovers:", md.length);

// steak sides checks
const sideBad = steakSides.filter(s => !s.id || !s.hero || !s.steps || s.steps.length < 3 || !s.macros || !s.ingredients?.length);
console.log("steak sides:", steakSides.length, "bad:", sideBad.length);
const stepBad = steakSides.flatMap(s => s.steps.filter(st => !st.image || !st.kicker || !st.title || !st.body).map(() => s.id));
console.log("bad steps:", stepBad.length);
if (bad.length || md.length || sideBad.length || stepBad.length || courses.length !== 6 || lessonCount !== 32 || lessonSequence.length !== 160 || steakSides.length !== 5) {
  console.error("VERIFY FAILED");
  process.exit(1);
}
console.log("VERIFY OK");

// image URL sanity: every image must be a defined string URL
const allImgs = [
  ...lessonSequence.map(x => x.image),
  ...courses.map(c => c.image),
  ...steakSides.flatMap(x => [x.hero, ...x.steps.map(st => st.image)])
];
const missingImgs = allImgs.filter(u => typeof u !== "string" || u.length < 10 || u.includes("undefined"));
console.log("missing/undefined images:", missingImgs.length);
if (missingImgs.length) { console.error("IMG VERIFY FAILED"); process.exit(1); }
console.log("IMG VERIFY OK");
