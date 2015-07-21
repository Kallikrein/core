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
		'components/accueilComponent',
		'components/inscription0Component'
	], main);

	function main(m, page, accueil, inscription) {

		document.addEventListener('deviceready', onDeviceReady);

		m.route.mode = 'hash';

		m.route(document.body, '/', {
			'/': page,
			'/accueil': accueil,
			'/inscription': inscription
		});

	}

	function onDeviceReady() {
		console.log(cordova.file);
	}

})();
