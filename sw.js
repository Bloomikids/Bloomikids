const CACHE_NAME = 'bloomikids-v465-cache';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(['/app', '/app.html', '/index.html', '/']);
  }));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(cacheNames => {
    return Promise.all(cacheNames.map(name => {
      if (name !== CACHE_NAME) {
        console.log('Deleting old cache:', name);
        return caches.delete(name);
      }
    }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const cache = caches.open(CACHE_NAME);
        cache.then(c => c.put(event.request, response.clone()));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
