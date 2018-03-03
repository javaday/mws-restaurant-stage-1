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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/styles.css",
    "revision": "92318e8bcd57bff72f494a2144b4dc85"
  },
  {
    "url": "data/restaurants.json",
    "revision": "500a3defff288a163f63f80b48025716"
  },
  {
    "url": "gulpfile.js",
    "revision": "deb84d02c03b0ac3d9502d52a6251f82"
  },
  {
    "url": "img/large/1.jpg",
    "revision": "cc074688becddd2725114187fba9471c"
  },
  {
    "url": "img/large/10.jpg",
    "revision": "2bd68efbe70c926de6609946e359faa2"
  },
  {
    "url": "img/large/2.jpg",
    "revision": "759b34e9a95647fbea0933207f8fc401"
  },
  {
    "url": "img/large/3.jpg",
    "revision": "81ee36a32bcfeea00db09f9e08d56cd8"
  },
  {
    "url": "img/large/4.jpg",
    "revision": "23f21d5c53cbd8b0fb2a37af79d0d37f"
  },
  {
    "url": "img/large/5.jpg",
    "revision": "0a166f0f4e10c36882f97327b3835aec"
  },
  {
    "url": "img/large/6.jpg",
    "revision": "eaf1fec4ee66e121cadc608435fec72f"
  },
  {
    "url": "img/large/7.jpg",
    "revision": "bd0ac197c58cf9853dc49b6d1d7581cd"
  },
  {
    "url": "img/large/8.jpg",
    "revision": "6e0e6fb335ba49a4a732591f79000bb4"
  },
  {
    "url": "img/large/9.jpg",
    "revision": "ba4260dee2806745957f4ac41a20fa72"
  },
  {
    "url": "img/medium/1.jpg",
    "revision": "8e267b4ecf4ff3724381d9f22083ffc9"
  },
  {
    "url": "img/medium/10.jpg",
    "revision": "7bd85977eb04231fae4f052d55908104"
  },
  {
    "url": "img/medium/2.jpg",
    "revision": "b42c269ed5137cd24adaa9d1c844476e"
  },
  {
    "url": "img/medium/3.jpg",
    "revision": "dba4ef4f57ed3e37a7bb7b077bf9f731"
  },
  {
    "url": "img/medium/4.jpg",
    "revision": "009787dd25961c2cb3265b1f906d3861"
  },
  {
    "url": "img/medium/5.jpg",
    "revision": "cee55f4d01745506b854a1722c3a9fbf"
  },
  {
    "url": "img/medium/6.jpg",
    "revision": "ba9d4a46ce4defee255dc86d53e09062"
  },
  {
    "url": "img/medium/7.jpg",
    "revision": "aa7a3f6d91b82e71974969ee58f5f5d8"
  },
  {
    "url": "img/medium/8.jpg",
    "revision": "445e04b443168998f5dad7bf75d69336"
  },
  {
    "url": "img/medium/9.jpg",
    "revision": "b2f1eba57524d164d79770ee89f13b7e"
  },
  {
    "url": "img/small/1.jpg",
    "revision": "2f7fdfec4dc9b746cb1ab4bd1594dd1b"
  },
  {
    "url": "img/small/10.jpg",
    "revision": "a9ab3d18a76dc2b8fa958f6edcaba0de"
  },
  {
    "url": "img/small/2.jpg",
    "revision": "6912ab5d3fb9e1f71fee625541abb6d8"
  },
  {
    "url": "img/small/3.jpg",
    "revision": "db3643ce640bcbb2feb336122356b926"
  },
  {
    "url": "img/small/4.jpg",
    "revision": "7c11dacd017a9a05bd8b0f3eeb8bd241"
  },
  {
    "url": "img/small/5.jpg",
    "revision": "d16b6cd02af3ed83f0b8eca6f0dbde08"
  },
  {
    "url": "img/small/6.jpg",
    "revision": "1761d4d1ab95386b4a455c8100459258"
  },
  {
    "url": "img/small/7.jpg",
    "revision": "bae4dcceeb23b4e69acf0b6aaf9b0c02"
  },
  {
    "url": "img/small/8.jpg",
    "revision": "09a3261b9ee2ad392b1d1ca841f30606"
  },
  {
    "url": "img/small/9.jpg",
    "revision": "8045341d8a78f218529a4c3dd5b0917d"
  },
  {
    "url": "index.html",
    "revision": "382ef1677f368f4ebbfdc2f7b8d7b4cc"
  },
  {
    "url": "js/dbhelper.js",
    "revision": "1337229cc0c46954d548344cbe5509b6"
  },
  {
    "url": "js/main.js",
    "revision": "05b2915572d27d1331301a567a9ee459"
  },
  {
    "url": "js/restaurant_info.js",
    "revision": "57625eb08d27c2e99c3ecc3d0acf8172"
  },
  {
    "url": "js/sw-register.js",
    "revision": "c09b405f4938236b2674612ffa069773"
  },
  {
    "url": "package-lock.json",
    "revision": "87243b571dcdf841ac4cdede6a906a31"
  },
  {
    "url": "package.json",
    "revision": "6d97ae0731ef3174252a2c59f46ecb50"
  },
  {
    "url": "restaurant.html",
    "revision": "e7211c19f4c18a42eabe798e7cc5221a"
  },
  {
    "url": "workbox-config.js",
    "revision": "6772a7c99813ad51041a7e5dffa4cdfe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.+\/restaurant.html/, workbox.strategies.networkFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/maps.googleapis.com\/maps\/api\/js/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
