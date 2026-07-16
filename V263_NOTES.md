# v2.6.3 work notes (in progress)

## User-reported issues (screenshot IMG_0028.PNG, iPhone, live site, burger Home)
1. Burger "Condiments & sides" section on Home: card photos render BLANK (big empty card areas, only "+ Add to build" chips visible). User suspects heavy photos.
2. Discipline switcher (top-left "MEAT MASTERY · BURGER ›" chip) not obviously a button — make it clearly tappable in top-left corner.

## Diagnosis so far
- All 24 burger side image URLs (hero + steps) return HTTP 200 including w480 derived variants — `scripts/check-side-images.mjs` says ALL SIDE IMAGES OK.
- So NOT missing files. Suspects:
  a) The `onerror` replaceWith #imageFallback template — if fallback template missing, error images vanish leaving blank space. Check index.html has `#imageFallback` template.
  b) Recipe-card CSS: card images are lazy-loaded; on iPhone the blank area suggests image never loaded or `img` removed. Possibly the v2.6.1 SW (image cache) serving failed/opaque responses? IMG_CACHE = "burger-mastery-img-v1" persists across versions — could hold bad cached responses from when BM-COND-001/002 w480 variants were missing (they were generated and pushed only during v2.6.1 work!). iPhone cached the 404s!
  c) sides use A.condCaramelizedOnions etc — the two condiments whose derived variants were MISSING until I generated them (BM-COND-001, BM-COND-002 w480+w960 pushed to assets repo during v2.6.1). The SW image cache may cache 404/opaque failures permanently.
- LIKELY ROOT CAUSE: sw.js image caching caches failed responses OR iPhone HTTP-cached the 404. Fix: make SW only cache OK responses (check existing logic), and add cache-busting/version note. Also check img() onerror fallback exists.

## App structure facts (for context recovery)
- repo: /home/ubuntu/burger-mastery-app, deployed via gh-pages branch to https://marcustayye93.github.io/burger-mastery-app/
- assets repo: /tmp/bma clone of marcustayye93/burger-mastery-assets; derived variants under images/derived/w480|w960/
- img() helper app.js line ~67: sizes==="card" → uses variant(src,480); onerror → replaces with #imageFallback template clone.
- variant() line ~59: replaces /main/images/ with /main/images/derived/wN/.
- sideCards() app.js line 109; sidesSection() line 110 (burger Home + Flavours).
- sw.js: VERSION = "v2.6.2" (spaces around =), SHELL_CACHE burger-mastery-shell-$VERSION, IMG_CACHE = "burger-mastery-img-v1" (version-independent!).
- Discipline chip: button#disciplineChip top-left, renders "MEAT MASTERY · BURGER ›" eyebrow-style text; hint "Switch discipline". Styled in css/app.css. Need: obvious button styling (border, bg, swap icon ⇄, maybe "Switch" label).
- Local server: python3 http.server port 8901, browser caches modules aggressively — use fetch no-store refresh trick then reload.
- sed version bump: sed -i 's/const VERSION = "v2.6.2"/const VERSION = "v2.6.3"/' sw.js
- Verify scripts: scripts/verify-burger-lessons.mjs, verify-steak-lessons.mjs, check-consecutive-images.mjs, check-image-urls.mjs, check-side-images.mjs — all pass currently.

## Diagnosis conclusion (desktop repro attempt)
- Live burger Home in sandbox browser: 6/7 side imgs loaded fine (nw480), beef-ribs-soup img complete=false only because lazy + below viewport. Recipe imgs 6/6. Files all 200, light (25–62KB w480).
- sw.js image handler: stale-while-revalidate; only caches res.ok — good — BUT `.catch(() => cached)` returns undefined when no cache + network fail → respondWith(undefined) = NetworkError, img onerror fires, fallback replaces img permanently with no retry. On iPhone flaky 5G + GitHub raw CDN hiccup, an entire section's lazy images can fail once and never recover. THIS is the likely cause of user's blank cards.
- Fix plan (v2.6.3):
  1. sw.js: if network fails and no cache, return a proper Response.error() fallback — actually better: retry once, else respond with Response.error() (defined). Keep only-ok caching.
  2. app.js img(): replace destructive onerror-replaceWith with a retry mechanism: on error, retry the src with cache-bust up to 2 times before falling back; keep fallback as last resort. Also make side cards' first images eager within viewport? Keep lazy but add onerror retry.
  3. Restyle #disciplineChip as an obvious button: bordered pill, swap icon ⇄, label 'Switch', top-left.
  4. Bump SW VERSION to v2.6.3, verify locally, deploy, verify live, report.

## Discipline chip current markup
- renderShell/app.js: button#disciplineChip with hint 'Switch discipline', text 'MEAT MASTERY · BURGER ›' — find its CSS class in css and markup in app.js (search disciplineChip).
