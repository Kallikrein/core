(function() {
	'use strict';

	require.config({
		paths: {
			m:           'bower_components/mithril/mithril',
			bluebird:    'bower_components/bluebird/js/browser/bluebird.min',
			factory:        'bower_components/raft/raft',
			local:   'bower_components/raft-decorator-localStorage/raftLocal',
			network: 'bower_components/raft-decorator-network/raftNetwork'
		}
	});

	require(['factory', 'local', 'network'], function (raft, local, network) {
		raft.decorate([local, network]);
	});

	require(['models/userModel', 'models/scenarioModel', 'models/contentModel'], function (User, Scenario, Content) {
		window.user = new User({id: 'bob'});
	});

	var onDevice = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
	var initDependencies = [
		'm',
		'libs/mithril-ui-router',
		'bluebird'
	];

	// if (onDevice)
	// 	initDependencies.push('cordova');

	require(initDependencies, init);

	// Add touch events management in mithril
	require([
		'libs/touchEvents',
		'libs/touchHelper'
	]);

	// Call the main
	require([
		'm',
		'libs/animations',
		'pages/auth',
		'pages/signup',
		'pages/loader',
		'pages/home',
		'pages/game',
		'pages/profile',
		'pages/awards',
		'pages/ladder',
		'pages/menu'
	], main);

	function init(m, mx, Promise) {
		var original = m.route;

		m.route = mx.route;

		m.route.$original = original;

		Promise.longStackTraces();

		loadCss('assets/main.css');
		loadCss('assets/fonts.css');
		loadCss('assets/auth.css');
	}

	function main(
		m,
		Animations,
		auth,
		signup,
		loader,
		home,
		game,
		profile,
		awards,
		ladder,
		menu
	) {

		var app = {
			auth:    auth,
			signup:  signup,
			loader:  loader,
			home:    home,
			game:    game,
			profile: profile,
			awards:  awards,
			ladder:  ladder,
			menu:    menu
		};

		m.route(app, 'auth', {
			'auth': {
				url:    '/auth',
				module: 'auth',
				place:  '.m_app'
			},
			'signup': {
				url:    '/signup',
				module: 'signup',
				place:  '.m_app'
			},
			'loader': {
				url:    '/loader',
				module: 'loader',
				place:  '.m_app'
			},
			'home': {
				url:    '/home',
				module: 'home',
				place:  '.m_app'
			},
			'profile': {
				url:    '/profile',
				module: 'profile',
				place:  '.m_app'
			},
			'awards': {
				url:    '/awards',
				module: 'awards',
				place:  '.m_app'
			},
			'ladder': {
				url:    '/ladder',
				module: 'ladder',
				place:  '.m_app'
			}
		});

		m.mount(document.querySelector('.m_menu'), menu);
	}

	function loadCss(url) {
		var link = document.createElement('link');
		link.type = 'text/css';
		link.rel = 'stylesheet';
		link.href = url;
		document.getElementsByTagName('head')[0].appendChild(link);
	}

})();
