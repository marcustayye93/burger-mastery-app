const VERSION = "v1.0.0";
const SHELL_CACHE = `burger-mastery-shell-${VERSION}`;
const IMG_CACHE = `burger-mastery-img-${VERSION}`;
const IMG_LIMIT = 120;
const SHELL = ["./", "./index.html", "./css/app.css", "./css/polish.css", "./js/app.js", "./js/polish.js", "./js/assets.js", "./js/data.js", "./js/builder-data.js", "./js/recipes-data.js", "./js/flavours-data.js", "./manifest.webmanifest", "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL_CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== SHELL_CACHE && k !== IMG_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function trimCache(name, limit) {
  const cache = await caches.open(name);
  const keys = await cache.keys();
  if (keys.length <= limit) return;
  await Promise.all(keys.slice(0, keys.length - limit).map(k => cache.delete(k)));
}

function isImage(req) {
  return req.destination === "image" || /\.(webp|png|jpg|jpeg|svg|gif|avif)(\?|$)/i.test(new URL(req.url).pathname);
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  if (isImage(req)) {
    // Stale-while-revalidate for images: instant cached response, silent refresh, capped store.
    e.respondWith(
      caches.open(IMG_CACHE).then(async cache => {
        const cached = await cache.match(req);
        const network = fetch(req).then(res => {
          if (res && res.ok) {
            cache.put(req, res.clone());
            trimCache(IMG_CACHE, IMG_LIMIT);
          }
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // Network-first for shell and app code, cache fallback when offline.
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(SHELL_CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req).then(m => m || caches.match("./index.html")))
  );
});