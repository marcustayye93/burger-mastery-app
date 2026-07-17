# v3.0.0 — Full mobile optimisation (SHIPPED)

## User request
"Please ensure that the app is fully optimised for Mobile usage." Ship as v3.0.0.

## Audit results (completed — local app at http://localhost:8901, browser console probes)

### Already good (verified)
- Viewport meta: `width=device-width,initial-scale=1,viewport-fit=cover` (no user-scalable=no — good for a11y)
- Manifest: display standalone, theme/bg #090a0b, icons 192/512 + maskable 512 + SVG any
- No horizontal overflow on ANY route (home/builder/learn/flavours/lab/profile) — docWidth <= winWidth
- No inputs/selects with font-size <16px (no iOS focus-zoom risk) — builder inputs min-height 48px
- overscroll-behavior:none on body (polish.css), text-size-adjust 100%
- Safe-area insets used in 23 places (topbar padding-top, tabbar bottom, detail-sheet, story-meta)
- Cards/buttons have -webkit-tap-highlight-color handling in polish.css for .recipe-card
- SW precache + offline fallback works; images lazy-load with retry+fallback

### Issues found (TO FIX)
1. **Touch targets below 44px**:
   - `.discipline-chip` (SWITCH pill): 166x29 — too short. Fix: increase padding/min-height to >=44px effective or add ::after expansion hitbox (already used pattern: .mini-btn::after inset:-8px). Prefer ::after inset:-10px.
   - `.add-to-build-chip`: 104x26 visible — has ::after inset:-8px => effective 42px. Bump to inset:-10px for >=44px effective.
   - `.link-btn` ("Edit build"): 43x44 wide enough? w:43 — borderline; add padding/hitbox.
   - Builder: one unnamed button 630x34 (likely "reset"/full-width small button) — check builder buttons min-height 44.
   - `.sheet-close` is 44x44 OK.
2. **Tiny text below 11px**: .pill (10px), .eyebrow (10px), .spotlight-kicker (10.24px) — kickers/eyebrows are uppercase labels; acceptable branding but bump to 11px minimum for readability.
3. **touch-action on body**: 'auto' — add `touch-action: manipulation` to buttons/interactive elements to kill 300ms-ish delays & double-tap zoom on controls (iOS 13+ Safari respects). Add globally: `button,a,select,input,[role=button]{touch-action:manipulation}`.
4. **No `manifest orientation`**: add `"orientation":"portrait-primary"` (app is phone-first).
5. **text-size-adjust**: only in polish.css via body? add `-webkit-text-size-adjust:100%` on html explicitly (have 100% computed already — verify source; ensure it's set).
6. **Performance quick wins**:
   - Add `<link rel="preconnect" href="https://raw.githubusercontent.com">` + jsDelivr preconnect in index.html head (images load faster on first paint over carrier networks).
   - Add `fetchpriority="high"` on hero image (first img in home) via img() helper when eager.
   - Add `decoding="async"` to imgs in img() helper.
7. **iOS standalone polish**: add `<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">` if missing; check apple-touch-icon exists. (Check index.html head.)
8. **Reduce paint cost**: backdrop-filter blur(20px) on sticky topbar can jank low-end phones during scroll — reduce to blur(14px) (visual parity, cheaper).
9. **Range inputs** (builder sliders): ensure thumb hit area is big enough — add ::-webkit-slider-thumb sizing (min 28px visual w/ transparent padding) if currently tiny.

## Fix plan (Phase 2)
- css/app.css / polish.css: touch-action manipulation global; discipline-chip ::after hitbox; add-to-build-chip ::after inset -10px; link-btn hitbox; eyebrow/pill 11px; topbar blur 14px; slider thumb sizing.
- index.html: preconnects (raw.githubusercontent.com, cdn.jsdelivr.net), apple status bar meta if missing.
- js/app.js img() helper: add decoding=async; fetchpriority=high for eager hero.
- manifest.webmanifest: orientation portrait-primary.
- sw.js VERSION -> v3.0.0.

## Verify plan (Phase 3)
- Rerun audit console script on all routes: 0 targets <44 effective (account ::after), no overflow, inputs >=16px.
- Screenshot home + builder at mobile width.
- Deploy: git push main + main:gh-pages --force; sleep 65; curl sw.js == v3.0.0; live console audit; report.

## Env facts
- Repo /home/ubuntu/burger-mastery-app; live https://marcustayye93.github.io/burger-mastery-app/; local :8901 running.
- Current shipped: v2.9.2 (sides card width fix). Prior: v2.9.1 chooser loading overlay, v2.9.0 logo+splash bounce.
- img() helper in js/app.js builds <img loading=lazy ...> with data-src retry / __imgRetry fallback; MIRROR = [raw.githubusercontent, cdn.jsdelivr].
- .mini-btn::after,.add-to-build-chip::after{content:"";position:absolute;inset:-8px;border-radius:inherit} pattern exists at css/app.css ~line 251.
