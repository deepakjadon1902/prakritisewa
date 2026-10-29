const VERSION = "vriksh-rakshak-v10";
const STATIC_CACHE = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;
const IMAGE_CACHE = `${VERSION}-images`;

const APP_SHELL_URLS = [
  "/offline.html",
  "/manifest.json",
  "/vriksh-rakshak-logo.jpeg",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon-32.png",
  "/favicon-48.png",
  "/apple-touch-icon.png",
  "/og-vriksh-rakshak.jpg",
  "/robots.txt",
  "/sitemap.xml",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .open(STATIC_CACHE)
        .then((cache) =>
          Promise.allSettled(
            APP_SHELL_URLS.map((url) => cache.add(new Request(url, { cache: "reload" }))),
          ),
        ),
      self.skipWaiting(),
    ]),
  );
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
      self.clients.claim(),
    ]),
  );
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

  // Do not cache MP4 responses. Media requests use byte ranges, and Cache.put
  // cannot store partial (206) responses.
  if (
    url.origin === self.location.origin &&
    (request.destination === "video" ||
      request.headers.has("range") ||
      url.pathname.toLowerCase().endsWith(".mp4"))
  ) {
    event.respondWith(fetch(request));
    return;
  }

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
    if (preload?.ok) {
      await putInCache(request, preload.clone(), STATIC_CACHE);
      return preload;
    }

    const response = await fetch(new Request(request, { cache: "no-store" }));
    if (response.ok) await putInCache(request, response.clone(), STATIC_CACHE);
    return response;
  } catch {
    return (
      (await caches.match(request)) ||
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
  if (!response?.ok) return;

  const cache = await caches.open(cacheName);
  await cache.put(request, response);
}
