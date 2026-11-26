/* Mes comptes : fonctionne hors connexion. Le cache se met à jour à chaque ouverture en ligne. */
var CACHE = "mes-comptes-v2";
var SHELL = ["./","index.html","manifest.webmanifest","vendor/exceljs.min.js","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png"];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  var req=e.request;
  if(req.method!=="GET") return;
  var url=new URL(req.url);
  if(url.origin!==location.origin) return;
  e.respondWith(
    caches.match(req,{ignoreSearch:true}).then(function(hit){
      var net=fetch(req).then(function(res){
        if(res && res.ok){ var copy=res.clone(); caches.open(CACHE).then(function(c){ c.put(req,copy); }); }
        return res;
      }).catch(function(){ return hit || caches.match("index.html"); });
      return hit || net;
    })
  );
});
