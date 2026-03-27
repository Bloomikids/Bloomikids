// BloomiKids Service Worker v99 - FORCE FRESH
const CACHE_NAME = 'bloomikids-v99';

// On install - take control immediately  
self.addEventListener('install', event => {
  self.skipWaiting();
});

// On activate - delete ALL old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => {
        console.log('Deleting cache:', key);
        return caches.delete(key);
      }))
    ).then(() => self.clients.claim())
  );
});

// Fetch - ALWAYS go to network first, never serve stale
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
