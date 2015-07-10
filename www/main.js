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
		'components/pageComponent',
		'components/splashscreenComponent',
		'components/inscriptionComponent',
		'components/connexionComponent',
		'components/inscription2Component'
	], main);

	function main(m, page, loader1, inscription, connexion, inscription2) {

		document.addEventListener('deviceready', onDeviceReady);

		m.route.mode = 'hash';

		m.route(document.body, '/', {
			'/': page,
			'/loader1': loader1,
			'/inscription': inscription,
			'/inscription2': inscription2,
			'/connexion': connexion
		});

	}

	function onDeviceReady() {
		console.log(cordova.file);
	}

})();
