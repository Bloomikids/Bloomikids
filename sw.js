// BloomiKids SW v320 - force cache bust
const V = 'bk-v332';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({type:'window', includeUncontrolled:true}))
      .then(cs => { cs.forEach(c => { try { c.navigate(c.url); } catch(e){} }); })
  );
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Never cache app.html
  if (e.request.url.includes('app.html')) {
    e.respondWith(fetch(e.request, {cache:'no-store'}));
    return;
  }
  e.respondWith(
    fetch(e.request, {cache:'no-store'})
      .catch(() => caches.match(e.request))
  );
});
