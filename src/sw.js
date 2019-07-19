/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

workbox.core.skipWaiting(); // not mandatory
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https:.*min.(css|js)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cdn-cache',
  }),
);

workbox.routing.registerRoute(
  new RegExp('http://localhost:3004/*'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'network-cache',
  }),
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
