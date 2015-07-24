(function() {
	'use strict';

	require.config({
		paths: {
			m:             'bower_components/mithril/mithril.min',
			bluebird:      'bower_components/bluebird/js/browser/bluebird.min',
			viewport:      'bower_components/viewport-units-buggyfill/viewport-units-buggyfill',
			viewportHacks: 'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.hacks'
		}
	});

	require([
		'm',
		'viewport',
		'viewportHacks',
		'components/pageComponent',
		'components/accueilComponent',
		'components/inscription0Component',
		'components/homepageComponent',
		'components/cardComponent'
	], main);

	function main(m, viewport, viewportHacks, page, accueil, inscription, home, card) {

		document.addEventListener('deviceready', onDeviceReady);

		viewport.init({
			force: true,
			hacks: viewportHacks
		});

		m.route.mode = 'hash';

		m.route(document.body, '/home', {
			'/': page,
			'/accueil': accueil,
			'/inscription': inscription,
			'/home': home,
			'/card'	: card
		});

	}

	function onDeviceReady() {
		console.log(cordova.file);
	}

})();
