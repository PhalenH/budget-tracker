console.log("checking status");

// resources to build application
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/index.js",
  "/styles.css",
  "/manifest.webmanifest",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// Prevent caches from using outdated cache (react manages this automatically)
const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

// what is the event install, is that referencing service-worker?
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Successfully pre-cached files");
      // installs all the initial resources/static assets and put it in cache
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  // tell the browser to activate this service worker immediately once it has finished installing
  self.skipWaiting();
});

//activate the service worker and remove old data from the cache.
self.addEventListener("activate", function (evt) {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Old cache removed", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});
