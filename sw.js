// BloomiKids Service Worker — bk-v340
// POST FIX: pass through all non-GET requests, never cache app.html
const CACHE_NAME = 'bk-v340';
const STATIC_ASSETS = [
  '/',
  '/app.html',
  '/pose_warrior3.png',
  '/pose_threelegged.png',
  '/pose_plank.png',
  '/pose_happybaby.png',
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS.filter(function(url) {
        return url !== '/app.html'; // Never cache app.html
      })).catch(function(err) {
        console.warn('[SW] Cache addAll partial fail:', err);
      });
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  var req = e.request;

  // ✅ POST FIX: Always pass non-GET requests straight to network (Supabase, Stripe, etc.)
  if (req.method !== 'GET') {
    e.respondWith(fetch(req));
    return;
  }

  // Never cache app.html — always fetch fresh
  if (req.url.endsWith('/app.html') || req.url.endsWith('/') || req.url === self.location.origin + '/') {
    e.respondWith(
      fetch(req).catch(function() {
        return caches.match('/app.html');
      })
    );
    return;
  }

  // Cache-first for static assets
  e.respondWith(
    caches.match(req).then(function(cached) {
      if (cached) return cached;
      return fetch(req).then(function(response) {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(req, clone); });
        return response;
      }).catch(function() {
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      });
    })
  );
});
