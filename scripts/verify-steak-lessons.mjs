import {steakCourses,steakLessons,steakLessonSequence,steakLessonCount} from "../js/steak-lessons-data.js";
console.log("chapters",steakCourses.length);
console.log("lessons",steakLessonCount);
console.log("slides",steakLessonSequence.length);
for(const c of steakCourses)console.log(c.id,(steakLessons[c.id]||[]).length,"lessons, img",Boolean(c.image));
const bad=steakLessonSequence.filter(s=>[s.image,s.kicker,s.title,s.body].some(v=>typeof v!=="string"||v.length===0));
console.log("malformed slides",bad.length);
console.log("markdown-bold leftovers",steakLessonSequence.filter(s=>s.body.includes("**")).length);
const ids=new Set();let dup=0;
for(const c of steakCourses)for(const l of steakLessons[c.id]){if(ids.has(l.id))dup++;ids.add(l.id);}
console.log("duplicate lesson ids",dup);
