const V = 'bk-v300';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({type:'window'}).then(cs => cs.forEach(c => c.navigate(c.url))))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request, {cache:'no-store'}).catch(() => caches.match(e.request)));
});
