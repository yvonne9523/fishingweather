// 強制讓所有安裝過此 PWA 的手機註銷、清空所有卡住的快取檔案
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))).then(() => self.clients.claim()));