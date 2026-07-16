# v2.9.2 — Fix blank "Condiments & sides" cards (SHIPPED)

## User report
Screenshot (IMG_0031.PNG): Home > "Condiments & sides" section shows completely blank cards — no image, no title text; only "+ Add to build" chips visible. Card outlines are thin 2px slivers at the left of each grid cell.

## Root cause (CONFIRMED by DOM inspection on live site in sandbox browser)
- Burger side cards are wrapped: `<div class="recipe-card-wrap"><button class="recipe-card card">...` (added v2.2.0 for the add-to-build chip).
- `.recipe-card-wrap{position:relative}` only. The wrap is the grid item (stretched to 216px), but the inner `<button class="recipe-card">` is `display:inline-block` with ALL children absolutely positioned → intrinsic width collapses to ~2px. Measured: grid cell 216.66px, wrap 216.66px, button width **2px** (height 350px).
- Non-wrapped cards (signature recipes, steak sides) are direct grid items so they stretch — that's why only burger sides broke.
- Why it appeared "new": iOS Safari previously computed the shrink-to-fit width differently / possibly Chrome update changed button sizing; not caused by v2.9.0 topbar CSS (that only touched .topbar). Actually reproduced identically in sandbox Chromium — likely long-standing since v2.2.0 but masked previously (min-height + absolute img `inset:0` needs a sized containing block).

## Fix applied
css/app.css after `.recipe-card-wrap{position:relative}`:
`.recipe-card-wrap>.recipe-card{display:block;width:100%}`

## Remaining steps
1. Bump sw.js VERSION to v2.9.2.
2. Local verify: Home > sides cards show photo + copy at full width (check .recipe-card width ≈ grid cell), other sections unaffected.
3. Commit + push main and gh-pages (force), wait ~65s, verify live sw v2.9.2 + card widths on live.
4. Report to user.

## Key environment facts
- Repo: /home/ubuntu/burger-mastery-app, remote marcustayye93/burger-mastery-app, deploy = push main + `git push origin main:gh-pages --force`.
- Live URL: https://marcustayye93.github.io/burger-mastery-app/
- Local server: python3 http.server on port 8901 (running).
- Current SW VERSION v2.9.1 (v2.9.1 shipped: chooser video loading overlay w/ bouncing mark).
- All sides hero images verified 200 on raw.githubusercontent + jsDelivr (orig, w480). Only MM-SIDE-007 loads slowly sometimes.
