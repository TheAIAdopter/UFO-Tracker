const CACHE_NAME = 'ufo-tracker-v1';
const urlsToCache = [
  '/UFO-Tracker/',
  '/UFO-Tracker/index.html',
  '/UFO-Tracker/manifest.json',
  '/UFO-Tracker/icon-192.png',
  '/UFO-Tracker/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
