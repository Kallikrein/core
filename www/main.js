(function() {
	'use strict';

	require.config({
		paths: {
			m:        'bower_components/mithril/mithril.min',
			bluebird: 'bower_components/bluebird/js/browser/bluebird.min',
			factory:  'bower_components/raft/raft',
			decorator:'bower_components/raft-decorator-localStorage/raftLocal',
			utils:    'lib/utils'
		}
	});

	require([
		'm',
		'bluebird',
		'pages/templatePage'
	], main);

	function main(m, Promise, template) {

		Promise.longStackTraces();

		document.addEventListener('deviceready', onDeviceReady);

		m.route.mode = 'hash';

		m.route(document.body, '/', {
			'/': template
		});

	}

	function onDeviceReady() {
		console.log(cordova.file);
	}

})();
