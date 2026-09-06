// Service worker mínimo: no cachea nada por ahora (los datos viven en Supabase),
// pero es necesario para que el navegador considere la app "instalable" como PWA.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Deja pasar todas las peticiones directo a la red, sin interceptar nada.
  return;
});
