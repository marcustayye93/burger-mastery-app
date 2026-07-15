# Changelog

## v1.1.1 — Feedback fixes: 2-second tap hint, Builder reordered
Direct response to user feedback from device screenshots.

- **Tap hint now blinks for 2 seconds only.** The "Tap right to continue · tap left to go back" pill appears once on the first story a user opens, pulses for 2 seconds, then fades out on its own. It no longer lingers over the slide text or waits for three taps to dismiss.
- **Builder tab reordered around the live build.** "My Burger" (live-build hero, patty designer, aromatics, nutrition, insight, coach, challenges, compare) now sits at the top of the Builder; "Adapt a Signature Recipe" follows; the "Signature recipes" catalogue moves to the bottom. The customer who comes to mix gets the mixing controls first.
- Service worker cache bumped to v1.1.1.

## v1.1.0 — Stage 1: Reactive Teaching in the Builder
The Builder now teaches flavour cause-and-effect. First release of the "reactive teaching" roadmap agreed after the chef/UX persona review.

### Aromatics & mix-ins (new Builder section)
- Three in-patty controls added between the patty sliders and the cheese/bun/sauce fields: **Onion in the mix** (none / grated 5 g / grated 10 g), **Garlic** (none / fresh 3 g / powder 0.5 g / roasted 8 g) and **Seasoning profile** (salt & pepper / smoked paprika / dried herbs)
- Every aromatic option carries full Ingredient Intelligence (flavour, texture, best use, common mistake, cooking approach, health trade-off) reachable via its info dot, plus dedicated insight and technique lines used by the live feedback
- Aromatics contribute to cooked nutrition and to all six eating-experience scores (e.g. grated onion lifts juiciness and tenderness while slightly muting beef purity and crust)
- Selections persist in the build state, in saved builds, and restore on load; builds saved before v1.1.0 load unchanged with aromatics defaulting to none/classic

### Flavour-first "Why it changed"
- The insight card now answers every control change in three ordered tiers: **Flavour** (what it does to taste, drawn from the ingredient's culinary copy), **Technique** (what changes at the pan), **Nutrition** (kcal delta and updated macros)
- Weight and thickness changes generate computed technique guidance: smash (<10 mm), fast (10–15 mm), standard (16–20 mm) and thick-patty (>20 mm) cook protocols with times, rest and thermometer guidance consistent with the curriculum
- The card's idle state now teaches its own model ("Change any ingredient…") instead of a generic placeholder

### Housekeeping
- Service worker cache version bumped to v1.1.0
- No recipe, curriculum or story-viewer changes in this release

## v1.0.0 — Final Polish Sprint
A perceived-quality release. No functional behaviour, recipe, curriculum or Builder calculation changed; every modification is visual or motion polish within the approved FP register.

### FP-01 — First-time story interaction
- Every story (Recipes, Learn, Flavours) now plays a subtle onboarding animation on its opening slide only: a semi-transparent finger illustration in the lower-right of the content performs three gentle tap pulses with an expanding touch ring over ~2 seconds, then fades away smoothly. It never reappears while the story remains open and plays again on the first slide of the next story opened. The existing text hint is retained, and the animation is suppressed entirely under the reduced-motion preference.

### FP-02 — Premium micro-interaction pass
- Story viewer: slide text fades in with a slight upward motion on every slide; images keep their existing decode fade; progress segments ease between states
- Progress bars (journey, score tracks, challenge progress) fill with an eased scale-in on paint and animate width changes smoothly
- Mastery: the overall score badge enters with a gentle ring-scale animation and headline percentages fade in
- Challenges: qualification and achieved states transition via eased border, background and label colour changes
- Sheets: the ingredient sheet now closes with a refined 220 ms slide-down and backdrop fade instead of disappearing instantly, including when dismissed with the system back button
- Navigation, cards and buttons retain their established press-compression, elevation and active-tab easing within the 150–250 ms target band
- All new motion is wrapped in reduced-motion media queries and respects the user preference

### FP-03 — Branded launch screen
- A minimalist branded launch screen (“Burger Mastery — Master the craft.”) displays while the application initialises, themed to the user’s stored appearance and respecting safe areas; it dismisses as soon as the first render paints, with a hard 1-second cap and a smooth 400 ms fade into Home — startup is never artificially delayed

### Housekeeping
- Service worker cache version bumped to v1.0.0 so returning users receive the release immediately; all RC2 functionality (responsive images, Wake Lock, story resume, offline support, layered back behaviour, accessibility) is preserved unchanged

## v1.0.0-rc2 — Release-Candidate Remediation Sprint
Every change in this release maps to an approved issue in the RC2 remediation register. No new features, recipes or curriculum categories were added.

### Critical
- **RC2-C01** — Bottom navigation grid corrected from five to six columns; all six tabs now render in one stable row at 320–768 px with no clipping or wrap

### Major
- **RC2-M01** — Responsive image delivery: every app-referenced photograph now ships 480 w and 960 w derived variants (in `images/derived/` in the asset repository) served via `srcset`/`sizes`; cards request card-scale sources while heroes and story slides retain full-resolution candidates for high-density displays; lazy loading, async decoding and priority hints unchanged
- **RC2-M02** — Service worker rewritten: versioned shell and image caches, stale-while-revalidate strategy for immutable image assets with an explicit 120-entry LRU cap, network-first shell with offline fallback, and automatic removal of old cache versions on activation
- **RC2-M03** — Screen Wake Lock is requested while any story viewer (recipe, Learn, Flavours) is open, released on close or page hide, and safely re-acquired on visibility return; unsupported browsers are unaffected
- **RC2-M04** — System back now closes the topmost transient layer in order (ingredient sheet → story viewer) via a history-integrated layer stack before leaving the app
- **RC2-M05** — Per-recipe position persistence: closing a cook-along stores the current step; the recipe overview then offers “Resume step N” and “Start over”; completion clears the stored position; recipe cards show in-progress state
- **RC2-M06** — Learn completion integrity: chapter completion is now derived from genuinely viewed slides per chapter; finishing the final slide no longer bulk-completes skipped chapters; chapter progress bars reflect actual viewed share; existing legitimate progress is migrated
- **RC2-M07** — Saved builds can now be renamed and deleted (with confirmation); favourite status, comparison selection and metrics survive renames; deleting a favourite or comparison build reassigns those references safely
- **RC2-M08** — Challenge cards distinguish historical `ACHIEVED` status from live qualification, with an explicit “current build qualifies / does not qualify yet” line; the misleading permanent `COMPLETED` label is removed
- **RC2-M09** — Light-theme muted text darkened to meet WCAG AA (≥ 4.5:1) against actual surfaces; dark theme unchanged
- **RC2-M10** — All primary controls (link buttons, mini buttons, info dots, icon buttons, saved-build actions) now provide at least 44×44 px hit areas via padding or invisible hit regions
- **RC2-M11** — Valid PNG install icons added (192×192, 512×512, 180×180 apple-touch, maskable 512 with safe-zone padding) and wired into the manifest and page head; SVG retained as a supplementary source
- **RC2-M12** — Corrected the two verified wrong photographs: the Classic Cheeseburger potato-bun step now uses the toasted potato-bun photograph, and the Beef & Lamb yoghurt-sauce step now uses `BM-COND-008-greek-yoghurt-burger-sauce.webp`
- **RC2-M13** — Beef & Pork total time corrected to 45 minutes to honestly include the 30–40 minute traditional caramelised-onion step; the quick-onion shortcut is labelled as a separate faster variation
- **RC2-M14** — Lower Calorie grated onion aligned to the curriculum rule (≈ 5 g well-squeezed per 140 g patty); Learn and Flavours guidance now state compatible per-patty quantities
- **RC2-M15** — Added a 2-minute rest step to Beef & Pork after reaching 71°C, included in total timing
- **RC2-M16** — Home now presents the complete six-recipe collection with copy distinguishing cooking a recipe from adapting it in the Builder; blend recipes are no longer discoverable only through Builder

### Minor
- **RC2-m01** — `½ inch (1.2 cm)` corrected to `½ inch (1.3 cm)`; Builder thickness output now shows millimetres with curriculum-equivalent inches and centimetres
- **RC2-m02** — Doneness terminology unified: 54°C medium-rare, 57–60°C medium range, 71°C well done / safe target for poultry and pork-containing mince
- **RC2-m03** — One concise seven-variable timing disclaimer placed consistently in each recipe; individual steps keep practical ranges and cues
- **RC2-m04** — Back-to-back duplicate Learn images resolved: slide 12 now uses the loose premium grind photograph and slide 17 the ready-for-cooking patty photograph
- **RC2-m05** — First-time story hint expanded to cover tap right/left and swipe-down or × to close, while remaining brief and self-dismissing
- **RC2-m06** — Essential 9 px metadata raised for readability, including labels over photography
- **RC2-m07** — `maximize` corrected to `maximise`; slide-title convention applied consistently
- **RC2-m08** — Beef & Pork hero replaced with the steakhouse hero so it no longer duplicates the Home hero; the Home current-build card now uses the top-down hero instead of repeating the high-protein hero
- **RC2-m09** — Adapt-a-Signature module now supports all six recipes
- **RC2-m10** — Browser theme-colour meta now syncs with the active theme, preventing dark chrome in light mode

### Deferred to v1.1 (per specification)
- Ingredient/seasoning encyclopedia, new Learn cooking chapter, full asset-library utilisation, analytics, bundler migration and all other items listed in section 4 of the RC2 specification

## v0.9.0 — Curriculum Expansion & v0.9.0 Photography Library
- Integrated all 32 new v0.9.0 asset-library photographs: the real chicken series, onion state series, garlic state series, seasoning technique series and six meat-pairing heroes
- Replaced every chicken stand-in image with dedicated chicken photography
- Expanded all six Signature Recipe cook-alongs to 18–25 slides with metric-first measurements, timing-variable guidance, thermometer targets, resting steps, troubleshooting and variation slides
- Rewrote recipe and lesson copy in a warmer instructor voice that explains the why behind each step
- Expanded the Learn journey from 17 to 35 slides with per-meat taste, pairing and blending lessons plus in-mix aromatics guidance
- Expanded the Flavours guides from 25 to 49 slides covering onion states, garlic forms and quantified salt, pepper and paprika usage
- Added a first-time-only “Tap anywhere to continue” onboarding hint on story slides that fades after a few advances and never reappears
- Service worker cache bumped to v0.9.0

## v0.8.0 — Flavours Guide & Expanded Cook-Alongs
- Added new Flavours tab: meat taste guides (beef, pork, lamb, chicken) and flavour builders (onions, garlic, spices & seasoning) as tap-through slideshows
- Expanded all six Signature Recipe cook-alongs from 7 to 11–16 detailed steps
- Increased photography coverage from ~20 to 84+ unique asset-library images
- Service worker cache bumped to v0.8.0

## v0.7.0 — Premium UI/UX Polish
- Standardised visual hierarchy, radii, shadows, typography and spacing
- Improved Home hero, mastery cards, recipe cards and photography crops
- Refined Burger Builder controls, sliders, macro cards and score feedback
- Improved story progress, overlays, gradients, close controls and readability
- Added consistent press feedback and restrained haptics where supported
- Added decoded-image fades, shimmer fallbacks and route transitions
- Improved one-handed touch targets and safe-area treatment
- Added focused 320 px small-screen rules
- Added robust reduced-motion behaviour
- Preserved all Sprint 1–6 product functionality
