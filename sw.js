// BloomiKids Service Worker v105 - AGGRESSIVE CACHE BUST
const CACHE_NAME = 'bloomikids-v105';
const NEVER_CACHE = ['/app.html', '/', '/index.html'];

self.addEventListener('install', event => {
  console.log('[SW] Installing v105');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[SW] Activating v105 - clearing all caches');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          console.log('[SW] Deleting cache:', key);
          return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // NEVER cache the main HTML file - always get fresh
  if (NEVER_CACHE.some(path => url.pathname === path || url.pathname.endsWith('/app.html'))) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  // For everything else: network first, fall back to cache
  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
