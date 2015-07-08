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
		'bluebird',
		'services/networkService',
		'pages/homePage',
		'pages/loginPage',
		'pages/todoListPage',
		'models/userModel'
	], main);

	function main(m, Promise, network, home, login, todo, user) {

		Promise.longStackTraces();

		document.addEventListener('deviceready', onDeviceReady);

		network.init().then(console.log.bind(console));
		user.init();

		m.route.mode = 'hash';

		m.route(document.body, '/', {
			'/': home,
			'/login': login,
			'/todo/': todo
		});

	}

	function onDeviceReady() {
		console.log(cordova.file);
	}

})();
