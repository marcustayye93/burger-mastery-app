/* Burger Mastery — v1.4.0 Installability
   In-app install button (Android/desktop via beforeinstallprompt),
   iOS install guide sheet, and share/QR distribution. */

import { QR_SVG } from "./install-qr.js";

const APP_URL = "https://marcustayye93.github.io/burger-mastery-app/";

let deferredPrompt = null;
let installed = false;

const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true;

const isIOS = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  refreshCards();
});
window.addEventListener("appinstalled", () => {
  installed = true;
  deferredPrompt = null;
  refreshCards();
});

function refreshCards() {
  document.querySelectorAll("[data-install-card]").forEach(el => {
    el.outerHTML = installCard();
  });
}

/* The QR code is pre-rendered at build time as an SVG for the fixed
   APP_URL, keeping the app dependency-free and offline-capable. */

/* ---- Public UI ---- */

export function installCard() {
  if (isStandalone() || installed) {
    return `<article class="card panel install-card" data-install-card>
      <p class="eyebrow">APP INSTALLED</p>
      <h3>You're running the app</h3>
      <p>Burger Mastery is installed on this device. Know someone who'd like it? Share it below.</p>
      <div class="install-actions">
        <button class="btn btn-secondary" data-share-app>Share the app</button>
        <button class="link-btn" data-show-qr>Show QR code</button>
      </div>
    </article>`;
  }
  if (isIOS()) {
    return `<article class="card panel install-card" data-install-card>
      <p class="eyebrow">GET THE APP</p>
      <h3>Install on your iPhone</h3>
      <p>Add Burger Mastery to your Home Screen — it runs full-screen, works offline and keeps all your progress.</p>
      <div class="install-actions">
        <button class="btn btn-primary" data-ios-guide>Show me how</button>
        <button class="link-btn" data-share-app>Share the app</button>
      </div>
    </article>`;
  }
  return `<article class="card panel install-card" data-install-card>
    <p class="eyebrow">GET THE APP</p>
    <h3>Install Burger Mastery</h3>
    <p>Full-screen, offline-ready, with an icon on your home screen — no app store needed.</p>
    <div class="install-actions">
      <button class="btn btn-primary" data-install-app>${deferredPrompt ? "Install app" : "Install app"}</button>
      <button class="link-btn" data-share-app>Share</button>
      <button class="link-btn" data-show-qr>QR code</button>
    </div>
  </article>`;
}

function sheet(id, title, bodyHtml) {
  closeSheets();
  const el = document.createElement("div");
  el.className = "install-sheet-backdrop";
  el.id = id;
  el.innerHTML = `<div class="install-sheet" role="dialog" aria-modal="true" aria-label="${title}">
    <div class="install-sheet-head"><h3>${title}</h3>
    <button class="icon-btn install-sheet-close" aria-label="Close">✕</button></div>
    ${bodyHtml}</div>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add("open"));
  el.addEventListener("click", e => {
    if (e.target === el || e.target.closest(".install-sheet-close")) closeSheets();
  });
}

export function closeSheets() {
  document.querySelectorAll(".install-sheet-backdrop").forEach(el => el.remove());
}

function iosGuide() {
  sheet("iosGuide", "Install on iOS", `
    <ol class="install-steps">
      <li><span class="install-step-n">1</span><div><strong>Open in Safari</strong><p>Installation only works from Safari. If you're in another app, open <em>${APP_URL.replace("https://","")}</em> in Safari first.</p></div></li>
      <li><span class="install-step-n">2</span><div><strong>Tap the Share button</strong><p>The square with an arrow pointing up, at the bottom of the screen.</p></div></li>
      <li><span class="install-step-n">3</span><div><strong>Choose "Add to Home Screen"</strong><p>Scroll down the share sheet if you don't see it immediately.</p></div></li>
      <li><span class="install-step-n">4</span><div><strong>Tap "Add"</strong><p>Burger Mastery appears on your Home Screen and opens full-screen like any app.</p></div></li>
    </ol>
    <p class="install-note">Your progress, saved builds and offline photos all carry over — the installed app and the browser share the same data on this device.</p>`);
}

function qrSheet() {
  sheet("qrSheet", "Scan to open", `
    <div class="install-qr">${QR_SVG}</div>
    <p class="install-note" style="text-align:center">Point any phone camera at the code.<br>${APP_URL.replace("https://","")}</p>`);
}

async function shareApp() {
  const data = {
    title: "Burger Mastery",
    text: "Learn, build and cook better burgers — free app, works offline.",
    url: APP_URL
  };
  if (navigator.share) {
    try { await navigator.share(data); return; } catch { /* cancelled */ }
  } else {
    try {
      await navigator.clipboard.writeText(APP_URL);
      sheet("copied", "Link copied", `<p class="install-note">The app link is on your clipboard:<br><strong>${APP_URL}</strong></p>`);
    } catch {
      qrSheet();
    }
  }
}

async function doInstall() {
  if (deferredPrompt) {
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") { installed = true; }
      deferredPrompt = null;
      refreshCards();
      return;
    } catch {
      // prompt() can throw (consumed prompt, missing gesture in some
      // browsers) — fall through to the manual instructions below.
      deferredPrompt = null;
    }
  }
  {
    // No captured prompt (already dismissed, unsupported browser, or desktop
    // without PWA support) — show manual instructions.
    sheet("manualInstall", "Install the app", `
      <ol class="install-steps">
        <li><span class="install-step-n">1</span><div><strong>Chrome / Edge on Android</strong><p>Open the browser menu (⋮) and choose <em>Add to Home screen</em> → <em>Install</em>.</p></div></li>
        <li><span class="install-step-n">2</span><div><strong>Chrome / Edge on desktop</strong><p>Click the install icon in the address bar, or menu → <em>Cast, save and share</em> → <em>Install page as app</em>.</p></div></li>
        <li><span class="install-step-n">3</span><div><strong>iPhone / iPad</strong><p>Open in Safari, tap Share, then <em>Add to Home Screen</em>.</p></div></li>
      </ol>`);
  }
}

document.addEventListener("click", e => {
  if (e.target.closest("[data-install-app]")) doInstall();
  if (e.target.closest("[data-ios-guide]")) iosGuide();
  if (e.target.closest("[data-show-qr]")) qrSheet();
  if (e.target.closest("[data-share-app]")) shareApp();
});
