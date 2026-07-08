const CACHE='jp-gestor-obras-v20';
const FILES=[
  './',
  './index.html',
  './styles.css',
  './jp-config.js',
  './jp-data.js',
  './app.js',
  './manifest.webmanifest',
  './version.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await Promise.all(FILES.map(async file=>{
      try{
        const response=await fetch(new Request(file,{cache:'reload'}));
        if(response.ok)await cache.put(file,response);
      }catch(error){}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message',event=>{
  if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting();
});

async function networkFirst(request,isNavigation=false){
  const cache=await caches.open(CACHE);
  try{
    const response=await fetch(request,{cache:'no-store'});
    if(response&&response.ok){
      if(isNavigation){
        await cache.put('./index.html',response.clone());
      }else{
        await cache.put(request,response.clone());
      }
    }
    return response;
  }catch(error){
    return (await cache.match(request))
      || (isNavigation?await cache.match('./index.html'):null)
      || Response.error();
  }
}

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;

  if(url.pathname.endsWith('/version.json')){
    event.respondWith(fetch(event.request,{cache:'no-store'}));
    return;
  }

  const isNavigation=event.request.mode==='navigate';
  const isCode=/\.(?:html|js|css|json|webmanifest)$/i.test(url.pathname);

  if(isNavigation||isCode){
    event.respondWith(networkFirst(event.request,isNavigation));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached=>
      cached||fetch(event.request).then(async response=>{
        if(response&&response.ok){
          const cache=await caches.open(CACHE);
          await cache.put(event.request,response.clone());
        }
        return response;
      })
    )
  );
});
