# v2.6.1 patch — status notes

## Scope
1. Resume bar: "Resume · 36/160" → "Resume · Lesson X / 32" in both Learn tabs (burger `learn()`, steak `steakLearn()` in js/app.js; new helper `lessonNumAt(seq,i)` near line 151).
2. No consecutive repeated photos in any slide show.

## Work done
- app.js: lessonNumAt helper + both resume buttons updated. VERIFIED in browser: steak Learn shows "Resume · Lesson 1 / 32".
- Consecutive repeats fixed (started at 165 total):
  - js/burger-lessons-data.js: 64 slide images reassigned via scripts/fix-consecutive-images.mjs (thematic pools).
  - js/steak-lessons-data.js: 16 reassigned.
  - js/recipes-data.js: classic-smash SCRAPE step → BM-COOK-009-crosslight-crust-detail.webp.
  - js/sides-data.js: added F/C/K/A URL prefixes (flavours/condiments/cooking/assembly); 18 step images reassigned across all 7 burger sides.
  - js/steak-sides-data.js: 3 fixes (stkBrine for board-sauce PREP, stkRest for butter STORE, garlicCloves for chimichurri CHOP).
- scripts/check-consecutive-images.mjs → TOTAL 0. scripts/check-image-urls.mjs → all 78 originals + 156 derived variants 200 OK.
- Missing derived variants generated & pushed to assets repo (BM-COND-001, BM-COND-002 w480+w960).
- sw.js VERSION bumped to v2.6.1.
- verify-burger-lessons.mjs / verify-steak-lessons.mjs still pass (6/32/160, images OK).

## Shipped
Local verification passed: burger Learn shows "Resume · Lesson 3 / 32" at storyIndex 11 (correct math), story viewer renders reassigned images with no back-to-back repeats, state reset clean, zero console errors. Deployed to main + gh-pages (commits dfb41eb + sw bump). Live site verified: sw.js v2.6.1 served, steak Learn shows "Resume · Lesson 8 / 32" (the browser profile's real progress), app.js contains both new resume labels, sides-data.js serves the reassigned images. Note: the sw.js version string uses spaces — `const VERSION = "vX.Y.Z"` — remember for future sed bumps.
