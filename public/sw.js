const CACHE_NAME = 'quicky-cache-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/main.css',
  '/assets/main.js'
]

self.addEventListener('install', (event) => {
  console.log('Service worker УСТАНОВЛЕН');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache)))
  
})

self.addEventListener('activate', (event) => {
  console.log('Service worker активирован');
})

// Стратегия "Сначала кеш, потом сеть"
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  )
})
