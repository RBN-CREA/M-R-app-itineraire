// Mode hors-ligne : pages en "réseau d'abord", le reste en "cache d'abord".
// Changer la version pour forcer la mise à jour du cache chez les invités.
const CACHE = 'mariage-v6';
const CORE = ['./', 'index.html', 'itineraire-v4.html', 'photos.html', 'manifest.webmanifest',
  'asset/plan.webp', 'asset/diner-illu.webp', 'asset/soiree-illu.webp',
  'asset/corner-tl.png', 'asset/corner-tr.png', 'asset/corner-bl.png', 'asset/corner-br.png', 'asset/sprig-right.png',
  'asset/point-parking.png', 'asset/point-ceremonie.png', 'asset/point-cocktail.png',
  'asset/trajet-entree-parking.png', 'asset/trajet-parking-ceremonie.png', 'asset/trajet-ceremonie-cocktail.png',
  'asset/icon-192.png', 'asset/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isPage = req.mode === 'navigate';
  e.respondWith(
    isPage
      ? fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
          .catch(() => caches.match(req).then(r => r || caches.match('index.html')))
      : caches.match(req).then(hit => hit || fetch(req).then(r => {
          const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r;
        }))
  );
});
