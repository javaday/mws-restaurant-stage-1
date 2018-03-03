module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,json,js,jpg,png,html}'
	],
	skipWaiting: true,
	clientsClaim: true,
	runtimeCaching: [
		{
			urlPattern: new RegExp('^.+/restaurant.html'),
			handler: 'networkFirst',
			options: {
				cacheableResponse: {
					statuses: [0, 200]
				}
			}
		},
		{
			urlPattern: new RegExp('^https://maps.googleapis.com/maps/api/js'),
			handler: 'staleWhileRevalidate',
			options: {
				cacheableResponse: {
					statuses: [0, 200]
				}
			}
		}
	],
	swDest: 'sw.js'
};