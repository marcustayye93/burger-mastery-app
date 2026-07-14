
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
      img.addEventListener("load", () => img.dataset.bmLoaded = "true", {once:true});
      img.addEventListener("error", () => img.dataset.bmLoaded = "true", {once:true});
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
