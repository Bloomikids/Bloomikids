// BloomiKids Service Worker v411
const CACHE = 'bk-v411';
const STATIC = [
  '/',
  '/app.html',
  '/manifest.json',
  '/bloom_happy.png',
  '/logo.png',
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(STATIC).catch(function(){});
    })
  );
});

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

self.addEventListener('fetch', function(e) {
  var req = e.request;
  
  // Skip non-GET requests (POST, PUT, etc.) - these cannot be cached
  if (req.method !== 'GET') return;
  
  // Skip Supabase API calls - always go to network
  if (req.url.includes('supabase.co')) return;
  
  // Skip chrome-extension and non-http requests
  if (!req.url.startsWith('http')) return;

  // Always network-first for app.html (never serve stale)
  if (req.url.endsWith('app.html') || req.url.endsWith('/')) {
    e.respondWith(
      fetch(req).catch(function() {
        return caches.match('/app.html');
      })
    );
    return;
  }

  // Network first for JS/HTML files
  if (req.url.includes('.html') || req.url.includes('.js')) {
    e.respondWith(
      fetch(req)
        .then(function(res) {
          var clone = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, clone); });
          return res;
        })
        .catch(function() { return caches.match(req); })
    );
    return;
  }

  // Cache first for images, fonts
  e.respondWith(
    caches.match(req).then(function(cached) {
      if (cached) return cached;
      return fetch(req).then(function(res) {
        if (res && res.status === 200) {
          var clone = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, clone); });
        }
        return res;
      }).catch(function(){ return cached; });
    })
  );
});
