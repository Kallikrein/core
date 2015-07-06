(function() {
	'use strict';

	require.config({
		paths: {
			m:        'bower_components/mithril/mithril.min',
			bluebird: 'bower_components/bluebird/js/browser/bluebird.min'
		}
	});

	require([
		'm',
		'bluebird',
		'components/pageComponent',
		'services/networkService'
	], main);

	function main(m, Promise, page, network) {

		Promise.longStackTraces();

		document.addEventListener('deviceready', onDeviceReady);

		network.init().then(console.log.bind(console));

		m.route.mode = 'hash';

		m.route(document.body, '/', {
			'/': page
		});

	}

	function onDeviceReady() {
		console.log(cordova.file);
	}

})();
