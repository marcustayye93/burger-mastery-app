# v2.6.4 — blank side cards on iPhone, definitive fix

## User report
Burger Home "Condiments & sides" cards render blank on iPhone (v2.6.3 confirmed running — new SWITCH pill visible). Cards show only "+ Add to build" chips; no photo, no title text. Cards abnormally tall.

## Diagnosis (confirmed from code)
1. Tall blank cards = `.image-fallback` divs. On the user's device the images FAILED (onerror → 2 retries → replaced by fallback template `<div class="image-fallback">`). The fallback is not absolutely positioned inside .recipe-card so it stretches the grid cell; the copy is absolute-bottom but text invisible because... fallback replaced only the img; copy should still show. BUT bmLoaded reveal: `img[data-bm-loaded="false"]{opacity:0}` could ALSO leave imgs invisible forever if load event races (iOS lazy-load + SW). Both paths fixed.
2. Root cause of network failure: raw.githubusercontent.com unreliable/rate-limited (429) on some mobile carriers/IPs.

## Fixes applied (v2.6.4)
- css/polish.css: `img[data-bm-loaded="false"]` now uses `animation:bm-img-reveal .35s .9s both` (fail-open auto-reveal) instead of sticky `opacity:0`. Added `@keyframes bm-img-reveal`.
- js/polish.js markImage(): added 500ms×8 watchdog interval — flips bmLoaded=true when complete&&naturalWidth or after 4s, fail-open.
- PLANNED js/app.js __imgRetry: on retry, fail over to jsDelivr CDN mirror. RAW base: `https://raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main/images` (js/assets.js line 2, export const RAW). Mirror: `https://cdn.jsdelivr.net/gh/marcustayye93/burger-mastery-assets@main/images` — VERIFIED 200 for: sides/BM-SIDE-001, sides/MM-SIDE-007, heroes w480 ASM-001, heroes w960 ASM-008, flavours BM-SEASONING-007.
- Current __imgRetry (app.js line 70): 2 retries same URL cache-busted then template fallback. NEW plan: retry1 = same base ?r=, retry2 = jsDelivr mirror URL, retry3 → fallback template.
- ONERR const at line 71; img() at line 72.

## Remaining steps
1. Edit __imgRetry in app.js for jsDelivr failover (map raw.githubusercontent.com/marcustayye93/burger-mastery-assets/main → cdn.jsdelivr.net/gh/marcustayye93/burger-mastery-assets@main).
2. Bump sw.js VERSION to v2.6.4 (line 1: const VERSION = "v2.6.3";).
3. node --check app.js/polish.js, local browser verify (localhost:8901, must fetch cache:"reload" for changed files first), test retry failover, deploy main+gh-pages, curl verify live, report.

## Key file locations
- sw.js image handler lines 36-55 (stale-while-revalidate, IMG_CACHE v1).
- index.html template#imageFallback line 56.
- sideCards() app.js line 114; steak sideCards ~line before 232.
- Local server: python3 http.server 8901 running.
- Live: https://marcustayye93.github.io/burger-mastery-app/ (deploy = push main + force push main:gh-pages).
