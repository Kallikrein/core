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
		'components/pageComponent'
	], main);

	function main(m, page) {

		document.addEventListener('deviceready', onDeviceReady);

		m.route.mode = 'hash';

		m.route(document.body, '/', {
			'/': page
		});

	}

	function onDeviceReady() {
		console.log(cordova.file);
	}

})();
