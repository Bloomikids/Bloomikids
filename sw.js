const CACHE = 'bk-v432';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Always network-first for the main app file
  if (e.request.url.includes('app.html') || e.request.url.includes('/app')) {
    e.respondWith(fetch(e.request));
    return;
  }
  e.respondWith(fetch(e.request));
});
