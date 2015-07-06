(function() {
	'use strict';

	require.config({
		paths: {
			m:        'bower_components/mithril/mithril.min',
			bluebird: 'bower_components/bluebird/js/browser/bluebird.min',
			utils:    'lib/utils'
		}
	});

	require([
		'm',
		'components/pageComponent',
		'components/testComponent'
	], main);

	function main(m, page, test) {

		document.addEventListener('deviceready', onDeviceReady);

		m.route.mode = 'hash';

		m.route(document.body, '/tests/', {
			'/': page,
			'/tests/': test
		});

	}

	function onDeviceReady() {
		console.log(cordova.file);
	}

})();
