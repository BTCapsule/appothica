const appothica = "dev-appothica-site-v1.1"
const assets = [
  "/",
	
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(appothica).then(cache => {
      cache.addAll(assets)
    })
  )
})







self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})




self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    Promise.all(keyList.map((key) => {
      if (key === cacheName) { return; }
      caches.delete(key);
    }))
  })());
});