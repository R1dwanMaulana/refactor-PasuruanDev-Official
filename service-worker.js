import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
// import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';
// import { cleanupOutdatedCaches } from 'workbox-precaching';
// import { registerRoute } from 'workbox-routing/registerRoute';

precacheAndRoute(self.__WB_MANIFEST, {
ignoreURLParametersMatching: [/.*/],
plugins: [
  new ExpirationPlugin({
    maxAgeSeconds: 30 * 24 * 60 * 60,
  }),
  { url: '/index.html', revision: '1' },
  { url: '/assets/css/pasdev.css', revision: '1'},
  { url: '/bundle.js', revision: '1' },
  { url: '/manifest.json', revision: '1' },
  { url: '/assets/images/2nd-anniv.jpg', revision: '1'},
  { url: '/assets/images/DSC_0061.webp', revision: '1'},
  { url: '/assets/images/DSC_0201 1.webp', revision: '1'},
  { url: '/assets/images/favicon.ico', revision: '1'},
  { url: '/assets/images/icon192.png', revision: '1'},
  { url: '/assets/images/icon512.png', revision: '1'},
  { url: '/assets/images/IMG_0778 1.webp', revision: '1'},
  { url: '/assets/images/IMG_3385 1.webp', revision: '1'},
  { url: '/assets/images/logo-landscape.png', revision: '1'},
  { url: '/assets/images/logo.png', revision: '1'},
  { url: '/assets/images/meetup1.png', revision: '1'},
  { url: '/assets/images/meetup2.jpg', revision: '1'},
  { url: '/assets/images/meetup4.jpg', revision: '1'},
  { url: '/assets/images/meetup7.jpg', revision: '1'},
  { url: '/assets/images/molakmalik.webp', revision: '1'},
  { url: '/assets/images/smanda.webp', revision: '1'},
  { url: '/assets/images/undraw_co-workers_ujs6.svg', revision: '1'},
  { url: '/assets/images/Vector 2.png', revision: '1'},
  { url: '/assets/images/webinar1.jpg', revision: '1'},
  { url: '/assets/images/webinar2.png', revision: '1'}, 
],
});