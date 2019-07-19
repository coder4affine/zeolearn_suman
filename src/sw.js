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

self.addEventListener('fetch', event => {
  if (
    event.request.method === 'POST' ||
    event.request.method === 'PUT' ||
    event.request.method === 'DELETE'
  ) {
    event.respondWith(
      fetch(event.request).catch(
        () =>
          new Response(
            JSON.stringify({
              error: 'This action disabled while app is offline',
            }),
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          ),
      ),
    );
  }
  // check network
  // event.request.body
  // encrypt and store data in indexDb

  // check for network if network is available && if data is available in indexDB
  // fetch data from indexDB and make api call
  // if success api call then clear indexDB
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
