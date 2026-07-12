const VERSION = "prakriti-sewa-v3";
const STATIC_CACHE = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;
const IMAGE_CACHE = `${VERSION}-images`;

const APP_SHELL_URLS = [
  "/",
  "/_shell.html",
  "/offline.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon.svg",
  "/apple-touch-icon.svg",
  "/og-prakriti-sewa.svg",
  "/robots.txt",
  "/sitemap.xml",
];

const APP_ROUTES = [
  "/",
  "/mission",
  "/tree-protection",
  "/tree-relocation",
  "/tree-plantation",
  "/impact",
  "/stories",
  "/gallery",
  "/volunteer",
  "/donate",
  "/donation-confirmation",
  "/blogs",
  "/blogs/jadav-payeng-molai-forest",
  "/blogs/piplantri-111-trees-for-every-daughter",
  "/blogs/chami-murmu-jharkhand-green-leadership",
  "/blogs/daripalli-ramaiah-seeds-in-pocket",
  "/blogs/van-mahotsav-tree-festival-india",
  "/blogs/pune-tree-mapping-citizen-science",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) =>
        Promise.allSettled(
          [...APP_SHELL_URLS, ...APP_ROUTES].map((url) =>
            cache.add(new Request(url, { cache: "reload" })),
          ),
        ),
      ),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .keys()
        .then((keys) =>
          Promise.all(
            keys
              .filter((key) => ![STATIC_CACHE, RUNTIME_CACHE, IMAGE_CACHE].includes(key))
              .map((key) => caches.delete(key)),
          ),
        ),
      self.registration.navigationPreload?.enable?.(),
    ]),
  );
  self.clients.claim();
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(event));
    return;
  }

  if (url.origin === self.location.origin && url.pathname.startsWith("/assets/")) {
    event.respondWith(cacheFirst(request, RUNTIME_CACHE));
    return;
  }

  if (["image", "font", "style", "script"].includes(request.destination)) {
    event.respondWith(
      staleWhileRevalidate(request, request.destination === "image" ? IMAGE_CACHE : RUNTIME_CACHE),
    );
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
  }
});

async function handleNavigation(event) {
  const { request } = event;

  try {
    const preload = await event.preloadResponse;
    if (preload) {
      await putInCache(request, preload.clone(), STATIC_CACHE);
      return preload;
    }

    const response = await fetch(request);
    await putInCache(request, response.clone(), STATIC_CACHE);
    return response;
  } catch {
    return (
      (await caches.match(request)) ||
      (await caches.match("/_shell.html")) ||
      (await caches.match("/")) ||
      (await caches.match("/offline.html")) ||
      new Response("Offline", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      })
    );
  }
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  await putInCache(request, response.clone(), cacheName);
  return response;
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);
  const network = fetch(request)
    .then(async (response) => {
      await putInCache(request, response.clone(), cacheName);
      return response;
    })
    .catch(() => undefined);

  return cached || (await network) || (await caches.match("/offline.html"));
}

async function putInCache(request, response, cacheName) {
  if (!response || response.status >= 500) return;

  const cache = await caches.open(cacheName);
  await cache.put(request, response);
}
