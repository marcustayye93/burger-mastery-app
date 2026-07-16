# v2.7.0 — Double-tap zoom fix + Lesson picker

## User requests
1. Double-tap on story viewer sometimes zooms page (iOS). FIX: css/app.css line ~61: `.story,.story *{touch-action:manipulation}` + .story-tap/button manipulation + no tap-highlight. Covers openStory, openSteakStory, openRecipeStory (class "story recipe-story"). DONE.
2. Chapter cards should open a lesson picker (list of lessons e.g. Ribeye/Sirloin/Picanha), each button jumps to that lesson's first slide. Both disciplines. DONE in app.js:
   - openStory/openSteakStory now accept 3rd param startIndex (line 228/231).
   - New lessonPickerPct(kind,lid) + openLessonPicker(kind,chapterId) (lines 232-234), uses .modal-backdrop/.detail-sheet pattern with class "lesson-picker", rows [data-pick-lesson], whole-chapter button [data-pick-chapter].
   - Click wiring line 238: [data-story] -> openLessonPicker("burger",...), [data-steak-story] -> openLessonPicker("steak",...). Resume buttons unchanged.

## Remaining TODO
- [ ] Add CSS for .lesson-picker .picker-list/.picker-row/.picker-num/.picker-copy/.picker-go/.picker-sub (append to css/app.css).
- [ ] Bump sw.js VERSION to v2.7.0 (line 1: const VERSION = "v2.6.4";)
- [ ] node --check js/app.js
- [ ] Local verify: localhost:8901 (must fetch(f,{cache:"reload"}) for changed files: js/app.js, css/app.css, sw.js — local server caches heuristically). Test picker on burger Learn + steak Learn, jump to mid-chapter lesson (e.g. Sirloin), verify story opens at correct slide, close, no console errors.
- [ ] Deploy: git add -A; commit; push origin main; push origin main:gh-pages --force. Wait ~60s; curl live sw.js for version.
- [ ] Live check + report.

## Verification state (in progress)
- After 2nd cache refresh + reload, picker WORKS: chapter card opens sheet with 6 lesson rows + "Play whole chapter" + progress % per row. Layout renders correctly (screenshot verified).
- BUG FOUND: clicking a lesson row does NOT open the story. Repro via console: row.click() -> lessonId "mb-blending" resolved, picker dismissed, but storyOpen=false. openStory signature (line 228) DOES support startIndex as 3rd param and looks correct. Hypothesis: in openLessonPicker click handler, `(isSteak?openSteakStory:openStory)(null,false,idx)` — idx from `bLessonSlideIdx(row.dataset.pickLesson)[0]` may be undefined (helper may return object/number not array). CHECK bLessonSlideIdx return type: if it returns a number (first index) then [0] is undefined -> startIndex=null -> section=null -> findIndex(-1) -> Math.max(0,-1)=0... story should still open at 0 though! But story did NOT open at all => exception thrown. Check console errors; also note dismiss() runs closeLayer+setTimeout remove — maybe openStory ran but pushLayer conflict? Next: capture console error during row click.

## Key facts
- Local server: python http.server on 8901 (heuristic caching — use cache:"reload" fetches then reload).
- Live: https://marcustayye93.github.io/burger-mastery-app/
- Burger lessons: courses + burgerLessons from data.js; steak: steakCourses/steakLessons/steakLessonSequence from steak-lessons-data.js. Lesson objects: {id,title,minutes,slides[]}.
- Helpers: bLessonSlideIdx/sLessonSlideIdx(lid) -> flat slide indices; bLessonDone/sLessonDone.
- Steak ch1 "Know Your Steaks" lessons include ribeye/sirloin/picanha etc.
