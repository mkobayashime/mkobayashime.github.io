importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4224278c24538a222a15.js",
    "revision": "b173b132be79f23e410dec068d0509a7"
  },
  {
    "url": "/_nuxt/70c944c3eb2c199de90e.js",
    "revision": "92a85d5480f6e559fa27f841da5b4b8a"
  },
  {
    "url": "/_nuxt/a56777c410935dcb3d60.js",
    "revision": "a2e5f7cd93dc43f815b126120437a2cd"
  },
  {
    "url": "/_nuxt/cd17c23be340b3d20659.js",
    "revision": "8aee79da07a4b9a5468cadb888286185"
  }
], {
  "cacheId": "mkobayashime.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
