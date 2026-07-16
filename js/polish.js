
/* Burger Mastery Sprint 7 — interaction polish only. No product logic. */
(() => {
  const PRESS_SELECTOR = [
    ".btn",".icon-btn",".nav-item",".recipe-card",".course",
    ".saved-build",".mini-btn",".info-dot",".link-btn"
  ].join(",");

  const supportsVibration = typeof navigator.vibrate === "function";
  const pulse = (node) => {
    if (!node) return;
    node.classList.remove("bm-value-pulse");
    void node.offsetWidth;
    node.classList.add("bm-value-pulse");
  };

  const markImage = (img) => {
    if (!(img instanceof HTMLImageElement) || img.dataset.bmObserved) return;
    img.dataset.bmObserved = "true";
    img.dataset.bmLoaded = img.complete && img.naturalWidth ? "true" : "false";
    if (img.dataset.bmLoaded === "false") {
      const reveal = () => { img.dataset.bmLoaded = "true"; };
      img.addEventListener("load", reveal, {once:true});
      img.addEventListener("error", reveal, {once:true});
      /* v2.6.4 watchdog — iOS Safari can complete a lazy image without firing a
         catchable load event after src swaps (retry) or SW responses. Poll briefly,
         then fail open so a card is never left invisible. */
      let ticks = 0;
      const timer = setInterval(() => {
        ticks += 1;
        if (img.dataset.bmLoaded === "true" || !img.isConnected) { clearInterval(timer); return; }
        if ((img.complete && img.naturalWidth) || ticks >= 8) { clearInterval(timer); reveal(); }
      }, 500);
    }
  };

  const scan = (root=document) => {
    root.querySelectorAll?.("img").forEach(markImage);
  };

  document.addEventListener("pointerdown", (event) => {
    const target = event.target.closest(PRESS_SELECTOR);
    if (!target) return;
    target.classList.add("bm-press");
  }, {passive:true});

  ["pointerup","pointercancel","pointerleave"].forEach(type => {
    document.addEventListener(type, (event) => {
      event.target.closest?.(PRESS_SELECTOR)?.classList.remove("bm-press");
    }, {passive:true});
  });

  document.addEventListener("click", (event) => {
    const interactive = event.target.closest(PRESS_SELECTOR);
    if (interactive && supportsVibration) navigator.vibrate(7);

    const builderControl = event.target.closest("[data-opt],[data-load],[data-adapt],[data-save]");
    if (builderControl) {
      requestAnimationFrame(() => {
        document.querySelectorAll("[data-metric],.score-badge strong,.challenge-card>strong")
          .forEach(pulse);
      });
    }
  }, {passive:true});

  document.addEventListener("input", (event) => {
    if (!event.target.matches("[data-builder]")) return;
    requestAnimationFrame(() => {
      document.querySelectorAll("[data-metric],.score-row strong,.challenge-card>strong")
        .forEach(pulse);
    });
  }, {passive:true});

  const observer = new MutationObserver((records) => {
    for (const record of records) {
      record.addedNodes.forEach(node => {
        if (!(node instanceof Element)) return;
        scan(node);
        if (node.matches("main") || node.closest?.("main")) {
          const main = document.querySelector("main");
          main?.classList.remove("bm-route-enter");
          requestAnimationFrame(() => main?.classList.add("bm-route-enter"));
        }
      });
    }
  });

  observer.observe(document.body, {childList:true,subtree:true});
  scan();

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    document.documentElement.classList.add("bm-keyboard");
  }, {once:true});

  document.addEventListener("touchstart", () => {
    document.documentElement.classList.remove("bm-keyboard");
  }, {passive:true,once:true});
})();
