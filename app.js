// Register the Service Worker which will polyfill the HTML module behavior.
navigator.serviceWorker.register('./sw.js');

// Unfortunately, we have to wait for the Service Worker to ready before
// actually loading the application so that it can intercept the HTML requests.
navigator.serviceWorker.ready.then(() => import('./hello-world.js'));
