# Changelog

## v1.6.0 — Clarity & Condiments
A release shaped directly by user feedback: clearer Home page language, tappable cards that were expected to be tappable, and a brand-new Condiments & Sides recipe collection.

### Home page clarity
- **Directive hero copy.** "One clear next step." replaced with stage-aware instructions that say exactly what to do next — "Continue your lesson.", "Cook your first burger.", "Design your own burger." or "Take on a challenge." — each with a matching action button
- **The mastery card is now tappable.** Tapping "Overall mastery" opens the full breakdown on the You page, with a visible "View full breakdown" hint
- **"Current build" renamed "Your burger in the Builder"** with a clearer subtitle, so it is obvious this card shows the burger being designed in the Builder tab
- **The "Get the app" card moved to the bottom of Home**, below the content that matters day-to-day

### Clickable guided challenges
- **Tap any challenge card** to open a sheet showing exactly which burgers achieved it: the current Builder burger and every saved build are re-evaluated live against the challenge rules, each listed with its macros and scores and an Open button
- Works retroactively — builds saved before this release are evaluated too
- Clear empty state explains how to qualify when no build has met the challenge yet

### Condiments & Sides — a new collection
- **Six new cook-along recipes** in the same story format: Caramelised Onions, Classic Burger Sauce, Chili con Carne, Baked Garlic, Quick Pickles, and Garlic-Yoghurt Sauce
- Each teaches the technique, not just the steps — why onions need 40 minutes, why spices bloom in fat, why grated garlic beats chopped, why burgers need acid
- New dark-editorial photography for all six, generated to match the app's visual language, with fast-loading responsive variants
- Completing a side is tracked separately ("sides & condiments" metric on the You page) and never affects recipe stats
- Service worker bumped to v1.6.0

## v1.5.0 — Meat Blends & Lasting Photos
Two improvements in one release: the guided lesson now teaches meat blending visually, and photos no longer feel slow after app updates.

### Meat Blends in Burger Essentials
- **New photo rendering of blends.** A dark-editorial overhead composition showing pure beef and pure pork above the 70/30 beef–pork and 50/50 beef–lamb blends they create — folded strands visible, teaching the "marriage, not paste" texture rule at a glance
- **A juiciness & boldness table.** A designed comparison chart rating beef, pork, lamb, chicken thigh and the three classic blends on juiciness and boldness of flavour (five-dot scales), each with a short tasting descriptor and the 71–74°C safety rule for pork and chicken blends
- Both slides slot into the "Choose your meat" lesson right after Blending meats, so the theory lands immediately before the fold-gently technique. Lesson grows from 11 to 13 slides; Learn progress adapts automatically

### Photos that stay fast
- **The image cache now survives app updates.** Previously every release wiped the photo cache, so the first visit after an update re-downloaded everything — this is why images felt slow again each time. The image cache is now version-independent and holds up to 200 photos
- **The Home hero starts downloading immediately.** A high-priority preload begins fetching the hero photo (sized for your device) while the HTML is still parsing, instead of waiting for the app code to boot — the largest visual on the first screen now arrives noticeably sooner on cold visits
- Service worker bumped to v1.5.0

## v1.4.0 — Installability
Burger Mastery is now explicitly downloadable from inside the app itself — no app store required. A "Get the app" card on the Home and You pages adapts to the visitor's device and drives a real installation.

- **One-tap install on Android and desktop.** The card's Install button triggers the browser's native install prompt directly (captured `beforeinstallprompt`). If the prompt isn't available — already dismissed, or an unsupported browser — a clear manual instruction sheet appears instead
- **iOS install guide.** iPhones and iPads can't be prompted programmatically, so the card detects iOS and opens a four-step illustrated guide to Safari's Add to Home Screen flow, including the note that browser and installed app share the same data
- **Share and QR distribution.** A Share button uses the native share sheet (clipboard fallback), and a QR code sheet renders an offline, pre-generated SVG code pointing at the app — scannable from any phone camera for in-person sharing
- **Installed-state awareness.** When running standalone (already installed), the card switches to a "share it onward" message instead of asking you to install again
- Service worker bumped to v1.4.0; the two new modules are precached so the install guide and QR work offline

## v1.3.1 — Fast Photography
Photos were taking too long to load. The responsive 480px/960px variants have existed in the asset pipeline since RC2, but the heaviest surfaces in the app were still fetching the 1440px originals (250–400 KB each). This release makes every surface fetch the right file — no photo was re-encoded and nothing looks different; it just arrives 3–9x faster.

- **Story slides no longer download 1440px originals.** Full-screen slide images now cap their candidate set at the 960px variant (~130 KB, visually identical at phone and laptop sizes). High-DPI phones previously jumped straight to the heaviest file; small phones now receive the ~43 KB 480px variant
- **Slide preloading fixed.** The next-two-slides preloader was silently downloading full-resolution originals the browser never displayed — wasted bandwidth competing with the visible photo. It now preloads exactly the variant the renderer will use, sized to the device
- **Faster first photo.** The page now preconnects to the image CDN during HTML parse, removing ~350 ms of DNS/TLS setup from the first image of a cold visit
- Applies everywhere: recipe stories, Cook This Build stories, Learn lessons, Flavours and all cards. Service worker bumped to v1.3.1

## v1.3.0 — Cook-State Awareness
The recipe story viewer now works with greasy hands. Stories were linear rails — fine for reading, awkward mid-cook. This release adds live timers and direct step navigation to every cook-along, signature and generated alike. No recipe content changed; Learn and Flavours stories are untouched.

### Step timers
- **One-tap timers on timed steps.** Any step whose copy specifies a duration ("sear 75 seconds", "rest 3 minutes", "60–90 seconds") now shows a timer chip under the step text. Ranges arm the upper bound; durations are parsed from the copy itself, so the timers automatically match whatever protocol the Cook This Build generator derived for your patty
- **A single kitchen timer, always visible.** Starting a timer shows a floating countdown pill at the top of the story with pause/resume and cancel. It keeps running while you tap between slides — start the sear timer, flip ahead to read the flip step, and the countdown stays on screen
- **An alarm you can't miss.** At zero the pill turns ember-orange and pulses, the phone vibrates, and a short beep plays (generated live — no audio asset, works offline). The pulse is suppressed under reduced-motion
- Timers cancel cleanly when the story closes, and starting a new timer replaces the old one — one cook, one clock

### Jump-to-step
- **A step list button (☰) next to the close button** opens a bottom sheet listing every slide grouped by phase (MISE EN PLACE, THE SEAR, ASSEMBLY…). The current step is highlighted, completed steps are dimmed, and the sheet auto-scrolls to where you are
- Tap any row to jump straight there — no more tapping through nine slides to reach the flip. Works identically in generated Cook This Build stories

### Housekeeping
- Service worker cache bumped to v1.3.0
- No changes to recipes, Learn, Flavours, Builder calculations, or completion/stats behaviour

## v1.2.0 — Cook This Build
The Builder's selections now compile into a personalised, step-by-step cook-along — the same premium story format as the six Signature Recipes, generated live from the user's own build. No new photography: every slide reuses the existing 56-asset library and recipe step imagery.

### The generator (`js/cook-build.js`)
- **One tap from spec to story.** A new primary "Cook this build" button sits at the end of the Builder's My Burger column. It compiles the current build (meat, weight, thickness, aromatics, seasoning, cheese, bun, sauce, toppings) into a 12–18 step cook-along and opens it in the full story viewer — progress bar, resume, wake lock, back-button layering and swipe gestures all included
- **Derived sear protocol.** Pan times, flip timing, target temperature and rest duration are computed from the actual build: smash (<10 mm, 60–90 s/side, ripping-hot pan and press technique), fast (10–15 mm), standard (16–20 mm with thumb dimple) and thick (>20 mm, heat drop after the flip, mandatory thermometer, 5-minute rest). Patties of 180 g and over get proportionally longer sides
- **Meat-aware safety and technique.** Beef-pork builds are steered to a full 71 °C cook with no pink-centre option; beef builds get the 57–60 °C medium window with the fresh-grind 54 °C caveat; beef-lamb builds get lamb-fat serving guidance. Blend-specific handling slides warn against overworking pork and explain lamb's character
- **Aromatics change the cook, not just the copy.** Grated onion adds squeeze/chill steps (with a firm-squeeze warning at 10 g and +10 s before the first flip); fresh, powder and roasted garlic each get their own prep slide with the correct photograph; roasted garlic trims ~30 s per side because its sugars brown faster; smoked paprika seasoning carries a scorch warning at the pan
- **Conditional assembly.** Cheese-melt, bun-toast and sauce slides appear only when selected; the lettuce wrap replaces toasting with a dry-and-fold wrap step; Greek-yoghurt sauce is explicitly held until the patty leaves the heat; the stacking order slide adapts to minimal vs standard toppings
- **Honest numbers.** The overview slide shows the build's own cooked macros from the Builder engine, a derived total time and a derived difficulty rating — the same figures the user just saw in the nutrition card

### Story viewer
- `openRecipe` refactored into `openRecipeStory(recipe, opts)`, letting generated stories share the exact viewer used by the signature recipes with zero duplication
- **Custom completion that respects your stats.** Finishing a generated cook-along shows "You cooked your own build." with **Save to Burger Lab** and **Close** — it does not touch the recipe-completion list, mastery percentages or challenge history, and it never overwrites the Builder state the way signature-recipe completion intentionally does
- Resume works for the generated story; regenerating after changing the build resets its saved position so the story always matches the current spec

### Housekeeping
- `js/cook-build.js` added to the service-worker shell precache; cache version bumped to v1.2.0 so the cook-along works fully offline once installed
- No changes to the six signature recipes, Learn, Flavours, or any Builder calculation

## v1.1.2 — New app icon: Ember Glyph
Icon redesign selected by the user from five UI-cogent candidates derived from the app's own visual language. No functional changes.

- **Ember Glyph icon package.** The app icon is now a flat ember-orange burger glyph glowing softly on the app's charcoal surface — the same accent colour as the active nav tab and progress bars. Replaced `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` (glyph inset within the 80% safe zone on solid charcoal) and `apple-touch-icon.png` (180×180)
- **Matching SVG favicon.** `icon.svg` redrawn as the Ember Glyph mark (bun dome with sesame cutouts, wavy lettuce line, patty bar, bun base, soft glow) and linked via `rel="icon"` in `index.html`, which previously had no favicon link
- Service worker cache bumped to v1.1.2 so installed clients receive the new icons

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
