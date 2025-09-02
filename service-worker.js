const CACHE_NAME = 'factory-form-v1';
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([
      '/',
      '/index.html',
      '/styles.css',
      '/manifest.json'
    ]))
  );
  self.skipWaiting();
});
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp=>resp||fetch(event.request)));
});
