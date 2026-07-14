
import { assets } from "./assets.js";
import { courses, storySlides, lessonSequence } from "./data.js";

const app = document.querySelector("#app");
const title = document.querySelector("#pageTitle");
const nav = [...document.querySelectorAll(".nav-item")];
const state = JSON.parse(localStorage.getItem("bm-state") || '{"route":"home","theme":"dark","completed":["meat"]}');
if (typeof state.storyIndex !== "number") state.storyIndex = 0;
if (typeof state.maxStoryIndex !== "number") state.maxStoryIndex = state.storyIndex;
document.documentElement.dataset.theme = state.theme || "dark";

function save(){ localStorage.setItem("bm-state", JSON.stringify(state)); }
function img(src, alt="", cls="", eager=false){
  return `<img class="${cls}" src="${src}" alt="${alt}" loading="${eager?"eager":"lazy"}" decoding="async" fetchpriority="${eager?"high":"auto"}" onerror="this.replaceWith(document.querySelector('#imageFallback').content.cloneNode(true))">`;
}
function route(name){
  state.route=name; save();
  nav.forEach(b=>{const active=b.dataset.route===name;b.classList.toggle("active",active);b.toggleAttribute("aria-current",active)});
  title.textContent={home:"Home",builder:"Builder",learn:"Burger Essentials",lab:"Burger Lab",profile:"You"}[name];
  render();
  window.scrollTo({top:0,behavior:"instant"});
  app.focus({preventScroll:true});
}
function home(){
 return `<div class="home-layout">
  <section class="hero card">
    ${img(assets.heroEditorial,"Premium cheeseburger","",true)}
    <div class="hero-copy">
      <span class="pill">CONTINUE LEARNING</span>
      <h2>Build better burgers with intention.</h2>
      <p>Continue Burger Essentials with patty shaping and texture.</p>
      <button class="btn btn-secondary" data-go="learn">Continue</button>
    </div>
  </section>
  <div class="side-stack">
    <section class="section">
      <div class="section-head"><div><h2>Your progress</h2><p>Understanding, not points</p></div></div>
      <div class="grid-2">
        <article class="card metric"><strong>18%</strong><span>overall mastery</span></article>
        <article class="card metric"><strong>3</strong><span>lessons viewed</span></article>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><h2>Featured burger</h2><p>High protein, still moist</p></div></div>
      <article class="card media-card">
        ${img(assets.heroHighProtein,"High protein burger")}
        <div class="media-copy"><h3>High-Protein Classic</h3><p>Approx. 43 g protein · 498 kcal</p><button class="link-btn" data-go="builder">Open builder</button></div>
      </article>
    </section>
    <section class="section">
      <div class="section-head"><div><h2>Today’s principle</h2><p>Texture begins before cooking</p></div></div>
      <article class="card media-card">
        ${img(assets.mixing,"Ground meat being mixed gently")}
        <div class="media-copy"><h3>Stop mixing sooner</h3><p>Once the blend looks even, further handling mostly increases density.</p><button class="link-btn" data-story="mixing">See visually</button></div>
      </article>
    </section>
  </div>
 </div>`;
}
function learn(){
 return `<section class="section">
  <div class="section-head"><div><h2>Build from the inside out</h2><p>Practical lessons following the real cooking flow</p></div></div>
  <div class="course-list">
   ${courses.map((c,i)=>`<article class="card course ${c.progress===100?"done":""}" data-story="${c.id}">
     ${img(c.image,c.title)}
     <div class="course-body"><strong>${c.title}</strong><p>${c.subtitle}</p><div class="progress"><i style="width:${c.progress}%"></i></div></div>
     <span class="course-num">${c.progress===100?"✓":i+1}</span>
   </article>`).join("")}
  </div>
 </section>`;
}
function builder(){
 return `<section class="hero card" style="min-height:390px">${img(assets.heroSmash,"Smash burger")}
  <div class="hero-copy"><span class="pill">SPRINT 2 PREVIEW</span><h2>Burger Builder</h2><p>The production shell is ready. Live macros and ingredient controls arrive in Sprint 2.</p></div>
 </section>
 <section class="section"><div class="grid-2">
  <article class="card metric"><strong>498</strong><span>estimated kcal</span></article>
  <article class="card metric"><strong>43 g</strong><span>estimated protein</span></article>
 </div></section>`;
}
function lab(){
 return `<section class="card empty"><div class="orb">🧪</div><h2>Your experiments will live here.</h2><p>Save Burger Genomes, compare results and track what you change. Lab data entry is scheduled for Sprint 4.</p></section>`;
}
function profile(){
 return `<section class="section">
  <article class="card panel"><p class="eyebrow">CURRENT GOAL</p><h2>High protein, fully satisfying</h2><p>Recommendations will favour leaner patties, moisture-preserving technique and high-impact condiments.</p></article>
 </section>
 <section class="section"><div class="grid-2">
  <article class="card metric"><strong>18%</strong><span>mastery</span></article>
  <article class="card metric"><strong>1</strong><span>chapter complete</span></article>
 </div></section>`;
}
function render(){
 app.innerHTML = ({home:home(),learn:learn(),builder:builder(),lab:lab(),profile:profile()})[state.route] || home();
}

/* ================= Continuous story viewer (Sprint 2) ================= */

const preloaded = new Set();
function preload(i){
  const s = lessonSequence[i];
  if (!s || preloaded.has(s.image)) return;
  const im = new Image();
  im.decoding = "async";
  im.src = s.image;
  preloaded.add(s.image);
}
function preloadAround(i){ preload(i); preload(i+1); preload(i+2); preload(i-1); }

function firstIndexOfSection(sectionId){
  const i = lessonSequence.findIndex(s => s.sectionId === sectionId);
  return i < 0 ? 0 : i;
}
function markSectionsCompletedUpTo(index){
  // A section is complete once its final slide has been passed.
  const seen = {};
  lessonSequence.forEach((s, i) => { seen[s.sectionId] = i; });
  Object.entries(seen).forEach(([id, last]) => {
    if (index > last && !state.completed.includes(id)) state.completed.push(id);
  });
}

function openStory(startSectionId){
  const total = lessonSequence.length;
  if (!total) return;

  // Restore the user's position. Opening a specific section jumps to that
  // section's first slide unless they were already inside it.
  let index = Math.min(state.storyIndex || 0, total - 1);
  if (startSectionId){
    const first = firstIndexOfSection(startSectionId);
    if (lessonSequence[index].sectionId !== startSectionId) index = first;
  }

  let lastNav = 0;                 // debounce rapid taps
  let bannerTimer = null;
  const story = document.createElement("section");
  story.className = "story";
  story.setAttribute("role", "dialog");
  story.setAttribute("aria-label", "Burger Essentials lessons");

  const close = () => {
    state.storyIndex = index;
    state.maxStoryIndex = Math.max(state.maxStoryIndex || 0, index);
    save();
    story.remove();
    render();
  };

  const showBanner = (text) => {
    const el = story.querySelector(".story-banner");
    if (!el) return;
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(() => el.classList.remove("show"), 1400);
  };

  const draw = (sectionChanged=false) => {
    const s = lessonSequence[index];
    const journeyPct = Math.round(((index + 1) / total) * 100);
    story.innerHTML = `
      <div class="story-progress" aria-hidden="true">${lessonSequence.map((_,i)=>`<i class="${i<=index?"active":""}"></i>`).join("")}</div>
      <div class="story-meta"><span>${s.sectionTitle}</span><span>${index+1} / ${total} · ${journeyPct}%</span></div>
      <button class="story-close" aria-label="Close lessons">×</button>
      <div class="story-slide">
        ${img(s.image, s.title, "", true)}
        <div class="story-banner" aria-hidden="true"></div>
        <div class="story-content"><p class="eyebrow" style="color:#fff">${s.kicker}</p><h2>${s.title}</h2><p>${s.body}</p></div>
        <div class="story-tap"><button aria-label="Previous slide"></button><button aria-label="Next slide"></button></div>
      </div>`;
    story.querySelector(".story-close").onclick = close;
    const [prevBtn, nextBtn] = story.querySelectorAll(".story-tap button");
    prevBtn.onclick = () => go(-1);
    nextBtn.onclick = () => go(1);
    if (sectionChanged) showBanner(s.sectionTitle);
    preloadAround(index);
    state.storyIndex = index;
    state.maxStoryIndex = Math.max(state.maxStoryIndex || 0, index);
    markSectionsCompletedUpTo(index);
    save();
  };

  const go = (dir) => {
    const now = Date.now();
    if (now - lastNav < 250) return;   // prevent accidental double navigation
    lastNav = now;
    if (dir > 0){
      if (index === total - 1){
        markSectionsCompletedUpTo(total);   // journey complete
        state.storyIndex = 0;               // next visit starts fresh
        save();
        story.remove();
        render();
        return;
      }
      const from = lessonSequence[index].sectionId;
      index++;
      draw(lessonSequence[index].sectionId !== from);
    } else {
      if (index === 0) return;
      const from = lessonSequence[index].sectionId;
      index--;
      draw(lessonSequence[index].sectionId !== from);
    }
  };

  // Horizontal swipe navigation + reliable downward-swipe exit.
  let sx=0, sy=0, st=0, tracking=false;
  story.addEventListener("touchstart", e => {
    if (e.touches.length !== 1) { tracking=false; return; }
    tracking = true;
    sx = e.touches[0].clientX; sy = e.touches[0].clientY; st = Date.now();
  }, {passive:true});
  story.addEventListener("touchend", e => {
    if (!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;
    const dt = Date.now() - st;
    const ax = Math.abs(dx), ay = Math.abs(dy);
    if (dt > 800) return;
    if (ax > 48 && ax > ay * 1.4){            // horizontal swipe
      go(dx < 0 ? 1 : -1);
    } else if (dy > 90 && ay > ax * 1.6){     // clear downward swipe exits
      close();
    }
  }, {passive:true});

  // Keyboard support for testing and accessibility.
  const onKey = (e) => {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", onKey);
  const origRemove = story.remove.bind(story);
  story.remove = () => { document.removeEventListener("keydown", onKey); clearTimeout(bannerTimer); origRemove(); };

  document.body.appendChild(story);
  draw();
}

document.addEventListener("click",e=>{
 const go=e.target.closest("[data-go]"); if(go) route(go.dataset.go);
 const story=e.target.closest("[data-story]"); if(story) openStory(story.dataset.story);
 const n=e.target.closest(".nav-item"); if(n) route(n.dataset.route);
});
document.querySelector("#themeToggle").onclick=()=>{
 state.theme=document.documentElement.dataset.theme==="dark"?"light":"dark";
 document.documentElement.dataset.theme=state.theme;save();
};
if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(()=>{});
route(state.route || "home");
// Warm the cache for the first lessons so the story opens instantly.
if ("requestIdleCallback" in window) requestIdleCallback(() => preloadAround(state.storyIndex || 0));
else setTimeout(() => preloadAround(state.storyIndex || 0), 1200);
