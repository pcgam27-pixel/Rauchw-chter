const CACHE = 'glimm-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
          return res;
        })
        .catch(() => cached);
    })
  );
});

/* Best-effort background wake-up. Chrome/Android only, for installed PWAs
   with enough engagement. Not a guaranteed clock — the OS frequently
   batches or skips ticks to save battery. Treat as a bonus on top of
   the in-app hourly check, not a replacement for it. */
self.addEventListener('periodicsync', e => {
  if (e.tag === 'glimm-hourly-reminder') {
    e.waitUntil(
      self.registration.showNotification('Glimm', {
        body: 'Zeit zum Eintragen — wie viele bisher?',
        icon: './icon-192.png',
        badge: './icon-192.png',
        tag: 'glimm-reminder',
        silent: true
      })
    );
  }
});
