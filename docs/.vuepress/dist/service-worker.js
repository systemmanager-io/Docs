/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2b9003de81d6f258d852e006294625df"
  },
  {
    "url": "assets/css/0.styles.44077ee5.css",
    "revision": "ce6d35e6ea70459c56c84ddbfa1e5cfe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66bb6d91.js",
    "revision": "ea909a3209fd2984e083e6f037c7eb5d"
  },
  {
    "url": "assets/js/11.ec314848.js",
    "revision": "ee60d2e61276b14c509b8b8df1a95cd7"
  },
  {
    "url": "assets/js/2.6c731473.js",
    "revision": "271a675dac968ae4993a4b8327188fc9"
  },
  {
    "url": "assets/js/3.781645fe.js",
    "revision": "e835a0030cef378d501dee2566653373"
  },
  {
    "url": "assets/js/4.02d10a82.js",
    "revision": "0aef221c71ef24a095485c2bbac1fc04"
  },
  {
    "url": "assets/js/5.7002fe1f.js",
    "revision": "4cb57eb5136e5704ed782ad8dba78263"
  },
  {
    "url": "assets/js/6.1f965730.js",
    "revision": "7ec9110337619189dffda4b0ed261878"
  },
  {
    "url": "assets/js/7.79bc09f8.js",
    "revision": "1bf7350d6ff24119da75df0c50d3bb71"
  },
  {
    "url": "assets/js/8.4e79d67d.js",
    "revision": "ad473543c0153564010cec57202930f8"
  },
  {
    "url": "assets/js/9.0fae0488.js",
    "revision": "dc1e3059f4b133cac41ad3b8f4a843d5"
  },
  {
    "url": "assets/js/app.66ff8fa1.js",
    "revision": "8644d1d7ae919a1ae2b4e8d5004876f9"
  },
  {
    "url": "core/getting_started.html",
    "revision": "3b8526d26b9919c64d1f97115e410dd8"
  },
  {
    "url": "core/updating.html",
    "revision": "67091378ac02e3514fa9608cd26a334c"
  },
  {
    "url": "daemon/getting_started.html",
    "revision": "98643b96fb516310a558813f035845e3"
  },
  {
    "url": "daemon/updating.html",
    "revision": "aab86f67cf3064f7f2c42c58bc6c47f3"
  },
  {
    "url": "index.html",
    "revision": "ade3c039010c1de0b3d9928510de916d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
