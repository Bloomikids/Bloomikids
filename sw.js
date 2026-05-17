// bk-v382 — force kill all caches
const CACHE_NAME = 'bk-v382';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
    .then(() => self.clients.claim())
    .then(() => self.clients.matchAll().then(clients => clients.forEach(c => c.navigate(c.url))))
  );
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') { e.respondWith(fetch(e.request)); return; }
  if (e.request.url.includes('app.html') || e.request.url.endsWith('/')) {
    e.respondWith(fetch(e.request.url + '?v=382'));
    return;
  }
  e.respondWith(fetch(e.request));
});
