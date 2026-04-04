// BloomiKids Service Worker v201 — cache bust
const CACHE_VERSION = 'bloomikids-v201';

// On install — skip waiting so new SW activates immediately
self.addEventListener('install', function(e) {
  self.skipWaiting();
});

// On activate — delete ALL old caches, claim all clients
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key) {
          console.log('[SW] Deleting cache:', key);
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// On fetch — NEVER cache app.html, always fetch fresh
self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  // Always bypass cache for the main app file
  if (url.includes('app.html') || url.includes('sw.js')) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' }).catch(function() {
        return caches.match(e.request);
      })
    );
    return;
  }

  // For everything else — network first, cache as fallback
  e.respondWith(
    fetch(e.request, { cache: 'no-store' }).then(function(response) {
      return response;
    }).catch(function() {
      return caches.match(e.request);
    })
  );
});
