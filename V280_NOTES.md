# v2.8.0 — Video placements (in progress)

## Task (user approved: "Ship the 2 video files as per recommendation")
Two video placements, three clips total:
1. **Discipline chooser motion panels** (replaces static chooser panel webp):
   - Burger half: slow-mo smash burger searing on griddle, smoke, fat bubbling.
   - Steak half: butter basting a thick ribeye (foaming butter spooned over crust).
2. **Against-the-grain slicing instructional clip**: knife identifies grain lines on rested flank steak, then slices perpendicular across the grain.

This is a mini asset-generation task, NOT a full narrative film — the video-generator skill's full 5-phase workflow (user Q&A stop, BGM, narration) does not apply. Silent looping clips, no audio (generate_audio false), 4s each. User already confirmed everything; do not stop to ask.

## Key implementation facts
- Chooser panels currently: `${RAW}/chooser/chooser-panel-{burger|steak}-w360/w720.webp` rendered by `panel(name,alt)` inside chooser overlay in app.js (grep "chooser-half"). Panels are full-height half-screen buttons (portrait-ish crop, object-fit cover likely).
- Slicing content locations: steak-designer-data.js cut `slicing` fields; flank lesson in steak-lessons-data.js ("against-the-grain slicing"); steak-cook.js has story steps with kickers like "THE SEAR"/"THE PULL" — rest/slice step exists at end. Simplest ship: add video to the **flank/grain lesson slides** or recipe steps where `image` key is used — better: introduce `video` support in the story slide renderer + chooser.
- Assets repo: github.com/marcustayye93/burger-mastery-assets (clone at /tmp/bma earlier). Videos should go to `videos/` dir in assets repo; serve via jsDelivr: `https://cdn.jsdelivr.net/gh/marcustayye93/burger-mastery-assets@main/videos/<file>.mp4` (carrier-reliable). raw.githubusercontent works too but jsDelivr preferred for user's carrier.
- Weight target: ~300-500 KB per clip. ffmpeg: H.264, no audio (`-an`), crf ~30-32, scale 720 width (chooser) / 960 (slide), `-movflags +faststart`, fps 24.
- Markup: `<video autoplay loop muted playsinline preload="metadata" poster="...">` — must include `muted` + `playsinline` for iOS autoplay. Add poster from existing webp for instant paint.
- App version: current live v2.7.0. Next: v2.8.0. Bump sw.js VERSION (line 1: const VERSION = "v2.8.0") — do NOT precache mp4s in SW (keep SW image/video passthrough; check isImage matcher doesn't misroute .mp4 — the fetch handler falls back to shell for failed non-image requests! Must ensure video requests aren't hijacked: they're cross-origin (jsdelivr/raw) so SW may ignore or pass through — verify).
- Local dev server on port 8901 (python http.server, heuristic caching — refresh modules via fetch cache:"reload" before browser verify).
- Deploy: git push origin main && git push origin main:gh-pages --force. Verify live via curl + browser.
- Video files also keep static webp fallback (poster + <img> fallback if video fails).

## Generation plan (generate_video tool)
- 3 clips, portrait aspect for chooser (chooser halves are wide-ish? panels w720 webp suggests landscape-ish crop but displayed full-bleed half-screen vertical stack on mobile → portrait safest for chooser halves; slide clip 9:16 portrait to match story slides). DECISION: chooser = portrait, slicing = portrait (story viewer is 9:16).
- generate_audio: false. Duration 4s. Prompts: photorealistic macro food cinematography, subtle imperfections to avoid AI look.
- Save to /home/ubuntu/videos/: chooser-burger.mp4, chooser-steak.mp4, technique-grain.mp4.

## Status
- [x] Plan approved by user
- [x] Generate 3 clips — all 720x1280 24fps 4s, saved in /home/ubuntu/videos/: chooser-burger.mp4 (1.67MB), chooser-steak.mp4 (3.29MB), technique-grain.mp4 (1.80MB)
- [x] Visual QA passed: burger = craggy smash patty searing with smoke (excellent); steak = spoon basting foaming butter+thyme over ribeye crust (excellent); grain = flank on board, knife slicing clearly perpendicular across visible grain, rosy slices falling open (excellent, instructionally correct)
- [x] Compressed: chooser-burger 252KB, chooser-steak 436KB, technique-grain 243KB (verified 200 on jsDelivr + raw)
- [x] Posters extracted and pushed (chooser-*-poster.webp etc.)
- [x] SW: mp4/video requests pass through untouched (v2.8.0 guard added); VERSION bumped to v2.8.0
- [x] Chooser wired: panel() renders <video> (autoplay loop muted playsinline, poster) over .video-fallback <img>; VID const + slideVideo() helper + __vidFail added
- [x] Grain clip wired to 2 lesson slides: flank "Slicing (non-negotiable)" (seq idx 24) + resting-serving "Why grain direction matters" (seq idx 145) via slide.video field; openSteakStory draw() renders slideVideo() with w960 image variant as poster
- [x] CSS added: .story-slide video.slide-video + .chooser-half video.slide-video (absolute inset, object-fit:cover)
- [x] Local browser verification passed: both chooser videos playing (readyState 4, currentTime advancing, jsDelivr src); __vidFail hides video and reveals .video-fallback img; both grain slides show playing video; zero console errors; all regression scripts green (6/32/160 both curricula, 0 consecutive repeats)
- [ ] Deploy main+gh-pages, verify live
