/**
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
'License'); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

// Note, these will be updated automatically at build time
var CACHE_VERSION = '1508781425074';
var CACHE_LIST = [
    "/config.xml",
    "/cordova-sw.js",
    "/cordova.js",
    "/cordova_plugins.js",
    "/dist/build.js",
    "/dist/css/index.css",
    "/dist/css/ionic.css",
    "/dist/img/logo.png",
    "/favicon.ico",
    "/index.html",
    "/manifest.json",
    "/plugins/cordova-plugin-dialogs/www/browser/notification.js",
    "/plugins/cordova-plugin-dialogs/www/notification.js",
    "/plugins/cordova-plugin-network-information/src/browser/network.js",
    "/plugins/cordova-plugin-network-information/www/Connection.js",
    "/plugins/cordova-plugin-network-information/www/network.js",
    "/plugins/cordova-plugin-safariviewcontroller/www/SafariViewController.js",
    "/src/App.vue",
    "/src/Cordova.js",
    "/src/main.js",
    "/src/router/index.js",
    "/src/store/index.js",
    "/src/views/about.vue",
    "/src/views/ionic.vue",
    "/src/views/main.vue"
];

this.addEventListener('install', function (event) {
    // Perform install steps
    console.log('cordova service worker is installing.');
    event.waitUntil(caches.open(CACHE_VERSION) /* eslint no-undef : 0 */
        .then(function (cache) {
            return cache.addAll(CACHE_LIST);
        }));
});

this.addEventListener('activate', function (event) {
    // Perform activate steps
    console.log('cordova service worker is activated.');
});

this.addEventListener('fetch', function (event) {
    console.log('cordova service worker : fetch : ' + event.request.url);

    event.respondWith(caches.match(event.request).then(function (response) { /* eslint no-undef : 0 */
        // Cache hit? return response else fetch it
        return response || fetch(event.request); /* eslint no-undef : 0 */
    }));
});
