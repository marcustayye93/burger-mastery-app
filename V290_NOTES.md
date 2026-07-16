# v2.9.0 — Logo everywhere + bouncing-buns loader (SHIPPED)

## User request (verbatim intent)
- User uploaded logo: /home/ubuntu/upload/m-mark-b.png (1920x1920, dark bg #130f0e — flat burger mark: cream top bun with 3 seeds, red patty block whose bottom edge forms an "M" with orange rim on the M cut edges + bottom, cream bottom bun)
- Wants the logo to appear more in the app
- App loading: make the logo BUNS BOUNCE (animation)
- Keep logo with TRANSPARENT background, small and visible THROUGHOUT the app

## Logo colors sampled from the PNG
- Bun cream: #f8e4c3
- Seeds: #1a1613 (dark)
- Patty red: #da5259
- Orange rim (M edges + bottom): #fd7a3a
- Dark patty shadow strip on top: ~#3d1a12
- Original bg (NOT used, transparent instead): #130f0e

## Assets created
- icons/logo-mark.svg — transparent-background SVG recreation, QA'd visually vs reference (good match). Groups for animation: .bm-bun-top, .bm-patty, .bm-bun-bottom. viewBox 0 0 512 512.

## Implementation plan
1. Splash (#splash in index.html): replace/augment text with inline SVG logo (same markup as logo-mark.svg inlined so groups are animatable). CSS keyframes: top bun bounces up (translateY -10~14px) and bottom bun down slightly, patty subtle squash; alternate loop while splash visible. Respect prefers-reduced-motion.
   - Splash markup currently: <div id="splash"><div class="splash-inner"><p class="splash-title">Meat Mastery</p><p class="splash-sub">Master the craft.</p></div></div>
   - Splash CSS: css/polish.css lines ~656-685 (#splash, .splash-title, .splash-sub). Dismissal JS: app.js line ~248, leaves after first paint or 1s max.
   - Consider slightly extending min splash time (e.g. leave after ~1.2s) so bounce is visible — but keep fast; maybe just keep as is (bounce also plays during slow loads).
2. Topbar persistent logo: add small <img src="./icons/logo-mark.svg" class="topbar-logo" alt=""> (or inline svg) in header .topbar next to the discipline chip / title. ~26-30px. Visible on every route since topbar is static in index.html.
   - Topbar markup in index.html: header.topbar > div > (button#disciplineChip + h1#pageTitle) + button#themeToggle.
   - Place logo left of the div content or between chip and title; simplest: flex row wrapper with logo before the div, or logo inside topbar as first child.
3. Also add logo to chooser overlay mid section? (optional, "MEAT MASTERY" eyebrow there) — nice touch, small logo above "What are we mastering today?".
4. Bump sw.js VERSION to v2.9.0; add icons/logo-mark.svg to shell precache list if there is one (check SHELL_ASSETS in sw.js).
5. Verify locally (localhost:8901, force refresh via fetch cache:reload), deploy: git push origin main && git push origin main:gh-pages --force. Verify live sw v2.9.0.

## Key facts (carried from earlier versions)
- Repo: /home/ubuntu/burger-mastery-app -> github.com/marcustayye93/burger-mastery-app (main + gh-pages force push)
- Live: https://marcustayye93.github.io/burger-mastery-app/
- Local server port 8901 running (python http.server)
- sw.js line 1: const VERSION = "v2.8.0" -> bump to v2.9.0
- CSS files: css/app.css (main), css/polish.css (splash/reveal). polish.css has --ease-out var and bm-text-up keyframes.
- Topbar CSS: .topbar in app.css line ~20 (sticky flex header). Discipline chip at line ~156.
- v2.8.0 shipped: chooser videos + technique-grain video slides; all verified live.

## Status
- [x] Logo SVG created + QA passed (icons/logo-mark.svg)
- [x] Splash bouncing buns animation (1.1s cycle, reduced-motion safe, dwell 1.15-1.6s)
- [x] Topbar 32px persistent logo on all 6 routes
- [x] SW v2.9.0 + logo-mark.svg precached
- [x] Local verify passed (animation running, all routes, no errors)

## v2.9.1 (follow-up, SHIPPED)
User: chooser (holding slide between burgers/steaks) lags 2-3 s while videos buffer; overlay the bouncing burger icon until video loads.
Implemented:
- app.js: chooserLoaderHTML (inline 64px bouncing mark, same SVG groups) appended inside each chooser half by panel(); wireChooserLoaders(el) hides it (.gone fade, then remove) on video canplay/playing/error, source error, readyState>=3 or 6 s timeout.
- polish.css: .chooser-half .chooser-loading overlay (absolute inset, grid center, dim blur backdrop, z-index 2 same as labels, pointer-events none), reuses bm-bun-*-bounce/bm-patty-squash keyframes, reduced-motion safe.
- sw.js VERSION bumped v2.9.1.
Verified locally: overlay present+bouncing on open, fades once both videos canplay (readyState 4, playing), halves clickable, error path hides loader + shows static fallback, chooser dismisses cleanly.
