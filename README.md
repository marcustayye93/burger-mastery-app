# Meat Mastery v2.2.2

A premium, offline-ready PWA for mastering meat cookery across two disciplines: **Burger** and **Steak**. Formerly Burger Mastery (v0.x–v1.x); rebranded to Meat Mastery in v2.0.0.

**Live app:** https://marcustayye93.github.io/burger-mastery-app/

## The app today

On first launch, a full-screen diagonal chooser asks "What are we mastering today?" — burger on top, steak below. The header chip switches disciplines at any time, and progress is stored separately per discipline.

### Burger discipline (v1.x feature set, intact)
- **Burger Essentials** — the guided lesson curriculum with chapter tracking
- **Builder** — live burger construction with real-time nutrition (macros, kcal) and scoring
- **Signature recipe collection** — cook-along stories with step timers, categorized (Classics / High Protein / Lower Calorie / Flavour Forward)
- **Condiments & Sides** — 7 dishes including Beef Ribs Soup (added v2.0.0)
- **Flavours**, **Burger Lab** (saved experiments), **challenges**, and mastery tracking

### Steak discipline (added v2.0.0)
- **Steak Designer** — 7 cuts (Ribeye, Striploin, Filet Mignon, Rump, Flank, Sirloin, Picanha), 3 thicknesses (cm + inch equivalents), 3 grades, 3 preparations, 6 methods (Pan Sear, Gas Grill, Sear + Oven, Air Fry, Reverse Sear, Sous Vide), 5 doneness targets (Rare → Well-Done)
- **Protocol metrics engine** — chef-reviewed pull temperatures with method-specific carryover, cook and rest times, eating-experience scores, and honest live warnings for bad combinations
- **Dynamic cook-alongs** — every designed protocol compiles into a photographed step-by-step story
- **Steak Lab** — save, reload and delete protocols
- **Signature Steaks** — 4 benchmark technique cook-alongs
- **Flavours** — Doneness Decoded plus Maillard and marbling science
- **Steak Essentials (Learn)** — curriculum preview; full 6-chapter / 32-lesson track ships in v2.1

## Version history (highlights)

| Version | Release |
|---------|---------|
| v2.2.2 | Inch equivalents on all steak thicknesses; Steak Essentials curriculum preview |
| v2.0.3 | Steak section image performance fix (~4× lighter card payloads) |
| v2.0.2 | Diagonal split discipline chooser redesign with lightweight panels |
| v2.0.1 | Steak core: Designer, protocol engine, cook-alongs, photography, Signature Steaks |
| v2.0.0 | Rebrand to Meat Mastery; discipline chooser; M-in-burger icon set; Beef Ribs Soup side |
| v1.x | Burger Mastery: curriculum, Builder, recipes, sides, Flavours, Lab, challenges, PWA/offline |
| v0.7.0 | Sprint 7 premium UI/UX polish |

## Architecture

Vanilla JS PWA — no framework, no build step. `js/app.js` holds state, routing and views; content lives in data modules (`data.js`, `recipes-data.js`, `sides-data.js`, `flavours-data.js`, `steak-designer-data.js`, `steak-cook.js`, `steak-recipes.js`, `steak-flavours.js`). Service worker (`sw.js`) precaches the shell and versions the cache (`VERSION` constant is the source of truth for the deployed version). Photography is served from the [burger-mastery-assets](https://github.com/marcustayye93/burger-mastery-assets) repo via CDN with responsive w480/w960 WebP variants.

Deployment: push to `main`, then force-sync `gh-pages` (`git push origin main:gh-pages --force`). GitHub Pages serves the live app.

Note: the Android APK release (v1.4.0) predates the rebrand and is deprecated; install the PWA from the live URL instead.
