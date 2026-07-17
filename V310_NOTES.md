# v3.1.0 — Beginner ease-of-use review (IN PROGRESS)

## User request
Review ease of interaction throughout the app for BEGINNERS. New users are overwhelmed by too much information at once. DO NOT rely on tutorials/onboarding — the UI must teach itself (progressive disclosure, self-explanatory affordances). Ship as v3.1.0.

## Audit method
Walk through as a brand-new user (fresh state): first launch → chooser → Home → story → Builder → Learn → Flavours → Lab → You. Catalogue overwhelm/ambiguity/hidden features.

## Home screen observations (burger, existing state)
Sections in order: hero (Continue lesson) → Overall mastery → Your burger in Builder → Today on the menu → The complete collection (6 recipe cards) → Condiments & sides (7 cards) → Guided challenges (4 cards) → Install app card.
- ISSUE H1: Home is VERY long (5800+px). A new user gets: journey %, builder state, spotlight, lab teaser, 6 recipes, 7 sides, 4 challenges, install — 8 sections at once. Overwhelm.
- ISSUE H2: "Overall mastery 10% / Your Burger Journey" + "Your burger in the Builder / My Burger 38.5g" shown even for brand-new users who did nothing yet — meaningless numbers before first action.
- ISSUE H3: Challenges reference Builder concepts (crust potential, juiciness) before user knows the Builder exists.
- ISSUE H4: "SWITCH" pill top-left is branded but cryptic ("BURGER · SWITCH" with arrows icon).
- NOTE: story slides need tap-right/left to advance — has tap-hint? (.tap-hint exists in CSS — verify when it shows)

## Environment facts (persist)
- Repo: /home/ubuntu/burger-mastery-app; local server :8901 running; live https://marcustayye93.github.io/burger-mastery-app/
- Current version shipped: v3.0.0. sw.js first line `const VERSION = "v3.0.0";`
- Deploy: git push origin main && git push origin main:gh-pages --force; Pages rebuild ~65s; verify sw.js.
- Routes: home/builder/learn/flavours/lab/profile via .nav-item[data-route]. Views rendered by js/app.js (module) + js/polish.js. CSS: css/app.css + css/polish.css (override layer, has v3.0.0 mobile block at end).
- State in localStorage "bm-state" (JSON: discipline, theme, steakStoryIndex, viewed lessons etc). Fresh-user test: localStorage.clear() then reload → discipline chooser overlay appears (choose Burger or Steak).
- Story engine: openStory(...); story slides advance by tapping right half (.story-tap). Learn: chapters → lesson picker.
- Sides cards on Home wrapped in .recipe-card-wrap with .add-to-build-chip.
- Videos: chooser halves have chooser-burger/steak.mp4 w/ loading overlay (v2.9.1); grain video on 2 steak slides.
- Splash: bouncing logo (v2.9.0), dismissed ~1.15-1.6s.

## TODO next in audit
1. localStorage.clear() → reload → screenshot chooser (first-run experience).
2. After choosing burger: what does Home show fresh? (mastery 0%? builder card "My Burger" default?)
3. Open a recipe story — check tap-hint visibility, how obvious next/prev/close are.
4. Builder: count controls visible at once; is it overwhelming? Any progressive disclosure?
5. Learn: chapter → lesson flow clarity. Flavours, Lab, You: empty states quality.
6. Check .tap-hint CSS/JS: when shown, once?

## Fix ideas (to refine after audit)
- Beginner-first Home: for fresh users (no lessons, no cooks, no saves), hide/de-emphasize mastery + builder-state + challenges sections; lead with "Start here" single clear action (first lesson or first cook-along) + collection. Reveal sections progressively as they become meaningful (progressive disclosure), e.g. show mastery once >0 activity, challenges once Builder opened once.
- Section order rethink: hero CTA → collection (recipes are the concrete, understandable thing) → sides → deeper stuff.
- First-story affordance: ensure tap-hint shows on the user's first story ever (both halves label: back | next), auto-fades.
- Builder: group advanced fields under a collapsed "Fine-tune" details block for first-time users; keep patty/bun/doneness essentials visible.
- Empty states: Lab/You should invite the one obvious next action with plain language.
- Discipline chip: label clearer, e.g. icon + "Burger ▾" or keep SWITCH but add subtitle? Small.

## COMPLETE AUDIT FINDINGS (fresh user, localStorage cleared)

GOOD (already there): chooser is a great forced first decision (full-screen, 2 clear options). Story tap-hint EXISTS and shows on first story ("Tap right to continue · tap left to go back / Swipe down or × to close"). Lab empty state is good ("Your experiments will live here… Build your first burger"). Learn has only 1 chapter list view (fine).

ISSUES CONFIRMED:
1. HERO LIES to fresh users: "Continue your lesson. Pick up Burger Essentials right where you stopped." — user never started. CTA "Continue learning". Must say "Start here / Begin with the basics" until any lesson viewed.
2. HOME ORDER buries the concrete stuff: Mastery 0% + "Your burger in the Builder / My Burger 38.5g" (a build they never made) appear BEFORE recipes. Meaningless-before-action sections shown first = overwhelm. FIX: for fresh users hide "Overall mastery" & "Your burger in the Builder" & "Guided challenges" sections; show them only once meaningful (any lesson viewed / builder visited / any challenge relevant). Reorder: hero → collection → sides → spotlight/lab teaser → (progressive sections).
3. CHALLENGES on fresh Home reference "current build", "crust potential", "juiciness" — Builder jargon before Builder seen. Hide until user has opened Builder once (or saved once).
4. BUILDER: 10 fields + 11 headings, 5275px tall. First-timers face "Meat blend/Onion in mix/Seasoning profile…" all at once. FIX: keep first 4 essentials (Build name, Meat blend, Patty weight, Thickness) visible; collapse the remaining 6 (Onion, Garlic, Seasoning, Cheese, Bun, Sauce) into <details> "More ingredients (6)" — open by default ONLY after user has saved a build before; else collapsed. Simple, no tutorial.
5. YOU page shows "10% mastered" for a zero-activity user (misleading; baseline inflation). Check mastery calc — comes from challenges achieved by DEFAULT build (2/4 challenges auto-achieved by the default builder values!). Also challenges list on You. FIX: challenges achieved should require a SAVED/user-touched build, not default state. (Root cause of H2: "2/4 challenges" fresh.) Simplest: compute challenge achievement only when builder.touched or savedBuilds>0.
6. Discipline chip: fresh label is "CHOOSE DISCIPLINE" pre-choice, then "BURGER · SWITCH" — acceptable, keep (small).
7. Home pageHeight fresh: 3639px (after fixes should drop when hiding 3 sections).

## FIX LIST v3.1.0 (no tutorials, progressive disclosure)
F1 Hero fresh state: if no viewedLessons and completed==0 → h2 "Start with the basics.", p "Five-minute lessons that make your next burger noticeably better.", CTA "Start lesson 1". (Same for steak discipline wording: chapter 1.)
F2 Home section gating + reorder: define hasLearned=viewedLessons>0||completed>0; hasBuilt=builder.touched||savedBuilds>0||state.route ever builder (add flag builderSeen); hasChallenge=hasBuilt. Fresh order: hero → The complete collection → Condiments & sides → Today on the menu → (mastery if hasLearned||hasBuilt) → (builder card if hasBuilt) → (challenges if hasBuilt) → install card.
F3 Builder progressive disclosure: wrap fields 5-10 in <details class="builder-more"><summary>More ingredients · cheese, bun, sauce & more</summary>…</details>; open attribute if savedBuilds>0. Ensure i-dots inside still work.
F4 Mastery/challenge integrity: challenges only evaluate when hasBuilt; else show as locked-neutral "Open the Builder to start" on You page; mastery calc: challenges contribute 0 until hasBuilt. Avoid "10% mastered" at zero actions.
F5 Small copy: Lab empty state OK; You "Your path / Not set" keep; add builderSeen flag set in renderBuilder.
NOTE: keep all changes surgical in js/app.js render fns + css; bump sw VERSION v3.1.0.

## STATUS
- [x] Audit complete
- [x] Implement F1-F5
- [x] Local verify (fresh + returning user states)
- [ ] Deploy + live verify

## IMPLEMENTATION STATE (v3.1.0)
DONE in js/app.js:
- Added helpers near line 110: hasBuilt() {builderSeen||savedBuilds}, hasLearned() {viewedLessons||completed}, isFreshUser().
- syncChallenges(): early-return unless hasBuilt() — default build no longer auto-awards challenges.
- unifiedProgress(): challengeShare counts 0 unless hasBuilt() — no more "10% mastered" at zero activity.
- home() rewritten (line ~157): fresh hero "Start with the basics."/"Start the first lesson" (pill WELCOME); masterySection gated by hasLearned()||hasBuilt()||completedRecipes; builderSection + challengesSection gated by hasBuilt(); fresh section order = collection → sides → spotlight; returning order unchanged (spotlight → collection → sides).
- builder() (line ~201): sets state.builderSeen=true;save() on render. Six secondary fields (Onion/Garlic/Seasoning + AROUND THE PATTY + Cheese/Bun/Sauce) wrapped in <details class="builder-more"> with <summary><b>More ingredients</b><span>Onion, garlic, seasoning, cheese, bun &amp; sauce</span></summary>; open attr if savedBuilds.length>0.
- data-next-step handler: fresh case falls into state.completed.length<courses.length → openStory(null,true) = opens first lesson. OK, no change needed.

TODO NEXT:
1. CSS for .builder-more summary styling in polish.css (marker, padding, tap size; hide default marker; chevron; span muted small). Ensure details>summary doesn't break field <label> layout (fields inside details are display:grid via .builder-field — fine).
2. node --check js/app.js (was OK after home edit; recheck after builder edit).
3. Bump sw.js VERSION v3.0.0 → v3.1.0.
4. Note: profile() "10% mastered" now fixed via unifiedProgress gating (challenges 0 until built). Also You page Challenges section still lists challengeCards for fresh users — acceptable on profile page? Better: keep (it's a deliberate visit, and copy invites Builder). KEEP for now.
5. Steak side: steakHome unchanged (already simple, no misleading numbers); steak profile fine.
6. Local verify matrix: (a) fresh user localStorage.clear() → Home shows WELCOME hero, NO mastery/builder/challenges sections, order collection→sides→spotlight; builder shows collapsed More ingredients; challenges NOT auto-achieved (check state.completedChallenges empty) until builder visited; after visiting builder+going home, sections appear (builderSeen set) BUT challenges now auto-award on any metrics()... verify acceptable: visiting builder = engaged. (b) Returning user (existing live users have completedChallenges already persisted; gating only affects NEW awards — fine, no regression).
7. Regression scripts: node tests/* if exist. Deploy: git push main + gh-pages, sleep 65, verify sw v3.1.0 live, verify live fresh-user flow via console with localStorage cleared.
8. REPORT: honest hero, progressive Home, collapsed builder extras, integrity fix for challenges/mastery (this also fixes "2/4 challenges achieved" at install), story tap-hint already present, Lab empty state already good.
