const CACHE_NAME    = ‘bloomikids-v1’;

const DYNAMIC_CACHE = ‘bloomikids-dynamic-v1’;



// Files to cache immediately on install (app shell)

const STATIC_ASSETS = [

‘/’,

‘/index.html’,

‘/manifest.json’,

‘https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;800&family=Nunito:wght@400;600;700&display=swap’,

];



// ── Install: cache the app shell ─────────────────────────────

self.addEventListener(‘install’, (event) => {

console.log(’[SW] Installing BloomiKids Service Worker…’);

event.waitUntil(

caches.open(CACHE_NAME).then((cache) => {

console.log(’[SW] Caching static assets’);

return cache.addAll(STATIC_ASSETS);

})

);

// Activate immediately — don’t wait for old tabs to close

self.skipWaiting();

});



// ── Activate: clean up old caches ────────────────────────────

self.addEventListener(‘activate’, (event) => {

console.log(’[SW] Activating BloomiKids Service Worker…’);

event.waitUntil(

caches.keys().then((keyList) => {

return Promise.all(

keyList

.filter((key) => key !== CACHE_NAME && key !== DYNAMIC_CACHE)

.map((key) => {

console.log(’[SW] Deleting old cache:’, key);

return caches.delete(key);

})

);

})

);

// Take control of all open pages immediately

self.clients.claim();

});



// ── Fetch: serve from cache, fall back to network ────────────

self.addEventListener(‘fetch’, (event) => {

const { request } = event;

const url = new URL(request.url);



// Skip non-GET requests (POST to Supabase, etc.)

if (request.method !== ‘GET’) return;



// Skip Supabase API calls — always hit the network for live data

if (url.hostname.includes(‘supabase.co’)) return;



// Strategy: Cache First for static assets, Network First for pages

if (STATIC_ASSETS.includes(url.pathname) || request.destination === ‘style’ || request.destination === ‘font’) {

// CACHE FIRST — static assets

event.respondWith(

caches.match(request).then((cached) => {

return cached || fetch(request).then((response) => {

return caches.open(CACHE_NAME).then((cache) => {

cache.put(request, response.clone());

return response;

});

});

})

);

} else {

// NETWORK FIRST — HTML pages, dynamic content

event.respondWith(

fetch(request)

.then((response) => {

// Cache a copy of the fresh response

return caches.open(DYNAMIC_CACHE).then((cache) => {

cache.put(request, response.clone());

return response;

});

})

.catch(() => {

// Network failed — serve from cache

return caches.match(request).then((cached) => {

if (cached) return cached;

// If no cache either, show offline fallback

if (request.destination === ‘document’) {

return caches.match(’/index.html’);

}

});

})

);

}

});



// ── Background Sync: save data when back online ───────────────

// Queues failed Supabase writes and retries when connection returns

self.addEventListener(‘sync’, (event) => {

console.log(’[SW] Background sync triggered:’, event.tag);

if (event.tag === ‘sync-progress’) {

event.waitUntil(syncOfflineData());

}

});



async function syncOfflineData() {

// Get any queued writes from IndexedDB

const db = await openOfflineDB();

const tx = db.transaction(‘offlineQueue’, ‘readwrite’);

const store = tx.objectStore(‘offlineQueue’);

const items = await getAllItems(store);



for (const item of items) {

try {

await fetch(item.url, {

method:  item.method,

headers: item.headers,

body:    item.body,

});

// Success — remove from queue

store.delete(item.id);

console.log(’[SW] Synced offline item:’, item.id);

} catch (err) {

console.log(’[SW] Sync failed for item:’, item.id, ‘— will retry’);

}

}

}



// Minimal IndexedDB helpers for offline queue

function openOfflineDB() {

return new Promise((resolve, reject) => {

const req = indexedDB.open(‘bloomikids-offline’, 1);

req.onupgradeneeded = (e) => {

e.target.result.createObjectStore(‘offlineQueue’, { keyPath: ‘id’, autoIncrement: true });

};

req.onsuccess = (e) => resolve(e.target.result);

req.onerror   = (e) => reject(e.target.error);

});

}



function getAllItems(store) {

return new Promise((resolve, reject) => {

const req = store.getAll();

req.onsuccess = (e) => resolve(e.target.result);

req.onerror   = (e) => reject(e.target.error);

});

}



// ── Push Notifications (optional — enable in Supabase) ───────

self.addEventListener(‘push’, (event) => {

if (!event.data) return;

const data = event.data.json();

console.log(’[SW] Push received:’, data);



event.waitUntil(

self.registration.showNotification(data.title || ‘BloomiKids’, {

body:    data.body    || “Time for today’s learning session! 🌱”,

icon:    ‘/icons/icon-192.png’,

badge:   ‘/icons/icon-72.png’,

tag:     ‘bloomikids-reminder’,

renotify: true,

data:    { url: data.url || ‘/’ },

})

);

});



self.addEventListener(‘notificationclick’, (event) => {

event.notification.close();

event.waitUntil(

clients.openWindow(event.notification.data.url || ‘/’)

);

});