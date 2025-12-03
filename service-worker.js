// See service worker teeb ainult ühte asja:
// kustutab kõik cache'id ja unregister'ib iseenda.
// Pärast seda ei ole sul enam PWA cache'i üldse.

self.addEventListener("install", (event) => {
  // aktiveeru kohe
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    // 1. Kustuta kõik cache'id
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key)))
    ).then(() =>
      // 2. Unregisteri iseennast
      self.registration.unregister()
    ).then(() =>
      // 3. Lae kõik avatud lehed uuesti (ilma SW-ta)
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      })
    )
  );
});

// NB! ÜHTEGI fetch-handlerit SIIN EI OLE.
// Pärast aktiveerumist ei jää ühtegi service workerit alles.
