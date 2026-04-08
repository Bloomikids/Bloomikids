// BloomiKids SW v301 - nuclear cache bust
const V = 'bk-v301';
self.addEventListener('install', e => {
  self.skipWaiting();
});
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
  // Never cache - always fresh
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, {cache:'no-store', credentials:'same-origin'})
      .catch(() => caches.match(e.request))
  );
});
