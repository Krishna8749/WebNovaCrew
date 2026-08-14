const CACHE_NAME = 'webnovacrew-v3';
const RUNTIME_CACHE = 'webnovacrew-runtime-v3';

// Assets to cache on install
const PRECACHE_URLS = [
  '/',
  '/favicon.svg',
  '/logo.png',
  '/webnova-logo.png',
  '/manifest.json'
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
    }).then((cachesToDelete) => {
      return Promise.all(cachesToDelete.map((cacheToDelete) => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip non-GET requests and API calls (never cache player/resolve)
  if (event.request.method !== 'GET') {
    return;
  }
  try {
    const path = new URL(event.request.url).pathname;
    if (path.startsWith('/api/') || path.startsWith('/r/')) {
      return;
    }
  } catch (_) {
    /* continue */
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return caches.open(RUNTIME_CACHE).then((cache) => {
        return fetch(event.request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          // Cache successful responses
          // Clone the response as it can only be consumed once
          const responseToCache = response.clone();
          
          // Only cache specific types
          const url = new URL(event.request.url);
          if (
            url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|webp|woff|woff2)$/) ||
            url.pathname === '/' ||
            url.pathname.startsWith('/services') ||
            url.pathname.startsWith('/portfolio') ||
            url.pathname.startsWith('/about')
          ) {
            cache.put(event.request, responseToCache);
          }

          return response;
        }).catch(() => {
          // Return offline page if available
          return caches.match('/offline.html');
        });
      });
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms());
  }
});

async function syncForms() {
  // Implement form sync logic here
  console.log('Syncing forms...');
}

// Push notification support
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/logo.png',
    badge: '/favicon.svg',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/favicon.svg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon.svg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Web Nova Crew', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
