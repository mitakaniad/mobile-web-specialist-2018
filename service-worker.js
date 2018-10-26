let staticCacheName = 'mws-mita-static-v6';

self.addEventListener('install', function(event) {
    console.log('Installing...');

    // Create new caches
    let urlsToCaches = [
        '/index.html',
        '/themes.css',
        '/images/logo.jpg',
        '/images/logo.png',
        '/js/main.js',
        '/project1/index.html',
        '/project1/add2numbers.js',
        '/project1/styles.css',
        '/project2/index.html',
        '/project2/mapbox.js',
        '/project2/mapbox.css',
        '/project2/css/themes.css',
        '/project4/index.html',
        '/project4/data/map.json',
        '/project4/js/map.js',
        '/project4/images/cern.jpg',
        '/project4/images/softbank.png',
        '/project4/images/eth-zurich.jpg',
        '/project3/index.html',
        '/project3/css/styles.css',
        '/project3/js/dbhelper.js',
        '/project3/js/main.js',
        '/project3/js/restaurant_info.js',
        '/project3/restaurant.html?id=1',
        '/project3/restaurant.html?id=2',
        '/project3/restaurant.html?id=3',
        '/project3/restaurant.html?id=4',
        '/project3/restaurant.html?id=5',
        '/project3/restaurant.html?id=6',
        '/project3/restaurant.html?id=7',
        '/project3/restaurant.html?id=8',
        '/project3/restaurant.html?id=9',
        '/project3/restaurant.html?id=10',
    ];

    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll(urlsToCaches);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Activating...');

    // Update all caches
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('mws-mita-') && cacheName !== staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    //console.log('Fetching...');

    event.respondWith(
        caches.match(event.request).then(function(response){
            //console.log(response);

            return response || fetch(event.request).then(function(response) {
                return caches.open(staticCacheName).then(function(cache) {
                    cache.put(event.request, response.clone());

                    return response;
                });
            })
        })
    );
});
