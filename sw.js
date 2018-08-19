self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('restaurant-reviews').then(function(cache) {
			return cache.addAll([
				'/',
				'js/main.js',
				'js/restaurant_info.js',
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'img/10.jpg',
				'data/restaurants.json',
				'css/styles.css'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		fetch(event.request).then(function(response) {
			if (response.status === 404) {
				return new Response("404 err");
			}
			return response;
		}).catch(function() {
			return new Response("ERROR");
		})
	)
});