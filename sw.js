// BloomiKids Service Worker v383
const CACHE = 'bk-v383';
const STATIC = [
  '/',
  '/app.html',
  '/manifest.json',
  '/bloom_happy.png',
  '/logo.png',
];

// Install - cache static assets
self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(STATIC).catch(function(){});
    })
  );
});

// Activate - delete ALL old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){ return self.clients.claim(); })
  );
});

// Fetch - network first for HTML, cache first for assets
self.addEventListener('fetch', function(e) {
  var url = e.request.url;
  
  // Always network-first for app.html (never serve stale)
  if (url.endsWith('app.html') || url.endsWith('/')) {
    e.respondWith(
      fetch(e.request).catch(function() {
        return caches.match('/app.html');
      })
    );
    return;
  }

  // Network first for JS/HTML files
  if (url.includes('.html') || url.includes('.js')) {
    e.respondWith(
      fetch(e.request)
        .then(function(res) {
          var clone = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
          return res;
        })
        .catch(function() { return caches.match(e.request); })
    );
    return;
  }

  // Cache first for images, fonts, audio
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(res) {
        var clone = res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
        return res;
      });
    })
  );
});
