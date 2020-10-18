const cacheName = 'super-chat-v1';
const staticAssets = [
    './',
    './main.css',
    './index.js',
];


self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});


self.addEventListener('activate', e => {
    self.clients.claim();
});

//кеширование ломает работу чата, пока не понятно почему...
/*self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
      e.respondWith(cacheFirst(req));
    } else {
      e.respondWith(networkAndCache(req));
    }
});*/

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        return await cache.match(req);
    }
}

self.addEventListener('push', (event) => {
    let body;
    if(event.data){
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }

    const options = {
        body,
        actions: [
            {
                action: 'close',
                title: 'Close push message',
                icon: '',
            }
        ],
    };

    event.waitUntil(
        self.registration.showNotification('Test push message', options)
    );
});
