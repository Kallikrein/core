(function() {
	'use strict';

	require.config({
		paths: {
			m:        'bower_components/mithril/mithril.min',
			bluebird: 'bower_components/bluebird/js/browser/bluebird.min',
			tools:    'lib/utils'
		}
	});

	require([
		'm',
		'bluebird',
		'components/storageComponent',
		'components/dataComponent',
		'services/networkService',
		'models/appModel'
	], main);

	function main(m, Promise, storagePage, dataPage, network, App) {

		Promise.longStackTraces();

		document.addEventListener('deviceready', onDeviceReady);

		network.init().then(console.log.bind(console));

		var app = new App();

		app.init();

		m.route.mode = 'hash';

		m.route(document.body, '/storage', {
			'/storage': storagePage,
			'/data':    dataPage
		});

	}

	function onDeviceReady() {
		console.log(cordova.file);
	}

})();
