// v2.6.1: verify every image URL used by sides + curricula resolves (200),
// including the w480/w960 derived variants the renderer actually fetches.
import {sides} from "../js/sides-data.js";
import {steakSides} from "../js/steak-sides-data.js";
import {lessonSequence} from "../js/data.js";
import {steakLessonSequence} from "../js/steak-lessons-data.js";

const urls = new Set();
for (const s of [...sides, ...steakSides]) { urls.add(s.hero); for (const st of s.steps) urls.add(st.image); }
for (const s of [...lessonSequence, ...steakLessonSequence]) urls.add(s.image);

const list = [...urls];
const derived = list
  .filter(u => u.includes("/main/images/") && !u.includes("/derived/"))
  .flatMap(u => [u.replace("/main/images/", "/main/images/derived/w480/"), u.replace("/main/images/", "/main/images/derived/w960/")]);

async function check(u) { try { const r = await fetch(u, { method: "HEAD" }); return [u, r.status]; } catch { return [u, 0]; } }
async function run(name, arr) {
  const out = [];
  for (let i = 0; i < arr.length; i += 20) out.push(...await Promise.all(arr.slice(i, i + 20).map(check)));
  const bad = out.filter(([, s]) => s !== 200);
  console.log(name, "checked", out.length, "bad", bad.length);
  bad.forEach(b => console.log("BAD", b[1], b[0]));
  return bad.length;
}
const b1 = await run("originals", list);
const b2 = await run("derived", derived);
process.exit(b1 + b2 ? 1 : 0);
