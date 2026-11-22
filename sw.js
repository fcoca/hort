const V="hort-v2",IMG="hort-img",FILES=["./","index.html","manifest.json","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!==IMG).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET")return;
  if(u.hostname==="upload.wikimedia.org"){
    e.respondWith(caches.match(r).then(x=>x||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(IMG).then(c=>c.put(r,cp))}return res}).catch(()=>new Response("",{status:504}))));
    return;
  }
  if(u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(x=>x||caches.match("index.html"))));
});
