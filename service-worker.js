import 'regenerator-runtime';
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
);
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST, {
ignoreURLParametersMatching: [/.*/],
});

if (workbox) 
  console.log(`Yesss! workbox sukses :)`);
else 
  console.log(`Yahhh! workbox gagal :(`);
workbox.precaching.precacheAndRoute( 
[
  { url: '/index.html', revision: '1' },
  { url: '/assets/css/pasdev.css', revision: '1'},
  { url: '/bundle.js', revision: '1' },
  { url: '/manifest.json', revision: '2' },
  { url: '/assets/images/2nd-anniv.jpg', revision: '1'},
  { url: '/assets/images/main-bg.png', revision: '1'},
  { url: '/assets/images/DSC_0061.webp', revision: '1'},
  { url: '/assets/images/DSC_0201 1.webp', revision: '1'},
  { url: '/assets/images/favicon.ico', revision: '1'},
  { url: '/assets/images/favicon-1.512x512.png', revision: '1'},
  { url: '/assets/images/favicon-1.192x192.png', revision: '1'},
  { url: '/assets/images/favicon-1.png', revision: '1'},
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
  { url: '/ico/apple-touch-icon-57x57.png', revision: '1'},
  { url: '/ico/apple-touch-icon-60x60.png', revision: '1'},
  { url: '/ico/apple-touch-icon-72x72.png', revision: '1'},
  { url: '/ico/apple-touch-icon-76x76.png', revision: '1'},
  { url: '/ico/apple-touch-icon-144x144.png', revision: '1'},
  { url: '/ico/apple-touch-icon-120x120.png', revision: '1'},
  { url: '/ico/apple-touch-icon-144x144.png', revision: '1'},
  { url: '/ico/apple-touch-icon-152x152.png', revision: '1'},
  { url: '/ico/favicon-16x16.png', revision: '1'},
  { url: '/ico/favicon-196x196.png', revision: '1' },
  { url: '/ico/favicon-32x32.png', revision: '1' },
  { url: '/ico/favicon-96x96.png', revision: '1' },
  { url: '/ico/favicon-128.png', revision: '1' },
  { url: '/ico/favicon.ico', revision: '1'},
  { url: '/ico/mstile-144x144.png', revision: '1' },
  { url: '/ico/mstile-150x150.png', revision: '1' },
  { url: '/ico/mstile-310x150.png', revision: '1' },
  { url: '/ico/mstile-310x310.png', revision: '1' },
  { url: '/ico/mstile-70x70.png', revision: '1'},
  { url: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js'},
  { url: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'},
],
  {
  ignoreUrlParametersMatching: [/.*/],
  }
);

cleanupOutdatedCaches();