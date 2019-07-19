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

workbox.precaching.precacheAndRoute(
  (self.__precacheManifest = (self.__precacheManifest || []).concat([
    {
      revision: '43f5c8c136cd40c5a33926dd2bc2cd9b',
      url: '/index.html',
    },
    {
      revision: 'ffc68c2e3eaaa4c4e7d7',
      url: '/static/css/main.34de6062.chunk.css',
    },
    {
      revision: '944c059134f8878d6d6f',
      url: '/static/js/2.79a3ff23.chunk.js',
    },
    {
      revision: '06db8cfeda2c6b32988b',
      url: '/static/js/3.943b4baf.chunk.js',
    },
    {
      revision: '3be907d8ddb9b11a3fe5',
      url: '/static/js/4.68962020.chunk.js',
    },
    {
      revision: 'cadbbf74aa5f2d01aed2',
      url: '/static/js/5.7b92e575.chunk.js',
    },
    {
      revision: 'a1753536fdc6684b3e60',
      url: '/static/js/6.8b953c03.chunk.js',
    },
    {
      revision: '9c64584302cab4b8c6c8',
      url: '/static/js/7.e16d86f2.chunk.js',
    },
    {
      revision: 'ffc68c2e3eaaa4c4e7d7',
      url: '/static/js/main.bc97d6bc.chunk.js',
    },
    {
      revision: 'd5b87d00f41bc283c2a7',
      url: '/static/js/runtime~main.cc7f1ce2.js',
    },
  ])),
);
