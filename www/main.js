(function() {
	'use strict';

	require.config({
		paths: {
			m:        'bower_components/mithril/mithril',
			bluebird: 'bower_components/bluebird/js/browser/bluebird.min'
		}
	});

	var onDevice = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
	var initDependencies = [
		'm',
		'libs/mithril-ui-router',
		'bluebird',
		'libs/touchEvents',
		'libs/touchHelper'
	];

	if (onDevice)
		initDependencies.push('cordova');

	require(initDependencies, init);

	function init(m, mx, Promise, touch, helper) {
		var original = m.route;

		m.route = mx.route;

		m.route.$original = original;

		Promise.longStackTraces();

		loadCss('assets/main.css');
		loadCss('assets/fonts.css');
		loadCss('assets/auth.css');
/*
		if (cordova)
			// Do stuff
*/
		require([
			'm',
			'libs/animations',
			'pages/auth',
			'components/auth.login',
			'components/auth.signup',
			'components/auth.password',
			'pages/signup',
			'components/signup.perso',
			'components/signup.pro',
			'pages/loader',
			'pages/home',
			'pages/game',
			'components/game.quiz.1',
			'components/game.quiz.2',
			'pages/profile',
			'components/profile.rating',
			'components/profile.followers',
			'components/profile.following',
			'pages/awards',
			'components/awards.certificates',
			'components/awards.gifts',
			'components/awards.benefits',
			'pages/ladder',
			'pages/menu'
		], main);
	}

	function main(
		m,
		Animations,
		auth,
		authLog,
		authSign,
		authPass,
		signup,
		signupPerso,
		signupPro,
		loader,
		home,
		game,
		quiz1,
		quiz2,
		profile,
		profileRating,
		profileFollowers,
		profileFollowing,
		awards,
		awardsCertificates,
		awardsGifts,
		awardsBenefits,
		ladder,
		menu
	) {

		var app = {
			auth:               auth,
			authLog:            authLog,
			authSign:           authSign,
			authPass:           authPass,
			signup:             signup,
			signupPerso:        signupPerso,
			signupPro:          signupPro,
			loader:             loader,
			home:               home,
			game:               game,
			quiz1:              quiz1,
			quiz2:              quiz2,
			profile:            profile,
			profileRating:      profileRating,
			profileFollowers:   profileFollowers,
			profileFollowing:   profileFollowing,
			awards:             awards,
			awardsCertificates: awardsCertificates,
			awardsGifts:        awardsGifts,
			awardsBenefits:     awardsBenefits,
			ladder:             ladder,
			menu:               menu
		};

		m.route(app, 'auth', {
			'auth': {
				url:    '/auth',
				module: 'auth',
				place:  '.m_app'
			},
			// 'auth.login': {
			// 	url:     '/login',
			// 	module:  'authLog',
			// 	place:   '.m_login',
			// 	onEnter: function(elem) {
			// 		Animations.fromRight(elem);
			// 	}
			// },
			// 'auth.signup': {
			// 	url:    '/signup',
			// 	module: 'authSign',
			// 	place:  '.m_login'
			// },
			// 'auth.password': {
			// 	url:    '/password',
			// 	module: 'authPass',
			// 	place:  '.m_login'
			// },
			'signup': {
				url:    '/signup',
				module: 'signup',
				place:  '.m_app'
			},
			// 'signup.perso': {
			// 	url:    '/perso',
			// 	module: 'signupPerso',
			// 	place:  '.m_signup'
			// },
			// 'signup.pro': {
			// 	url:    '/pro',
			// 	module: 'signupPro',
			// 	place:  '.m_signup'
			// },
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
			// 'profile.rating': {
			// 	url:    '/rating',
			// 	module: 'profileRating',
			// 	place:  '.m_profile'
			// },
			// 'profile.following': {
			// 	url:    '/following',
			// 	module: 'profileFollowing',
			// 	place:  '.m_profile'
			// },
			// 'profile.followers': {
			// 	url:    '/followers',
			// 	module: 'profileFollowers',
			// 	place:  '.m_profile'
			// },
			'awards': {
				url:    '/awards',
				module: 'awards',
				place:  '.m_app'
			},
			// 'awards.certificates': {
			// 	url:    '/certificates',
			// 	module: 'awardsCertificates',
			// 	place:  '.m_awards'
			// },
			// 'awards.gifts': {
			// 	url:    '/gifts',
			// 	module: 'awardsGifts',
			// 	place:  '.m_awards'
			// },
			// 'awards.benefits': {
			// 	url:    '/benefits',
			// 	module: 'awardsBenefits',
			// 	place:  '.m_awards'
			// },
			'ladder': {
				url:    '/ladder',
				module: 'ladder',
				place:  '.m_app'
			}
		});

		// m.render(document.querySelector('.m_menu'), menu);
	}

	function loadCss(url) {
		var link = document.createElement('link');
		link.type = 'text/css';
		link.rel = 'stylesheet';
		link.href = url;
		document.getElementsByTagName('head')[0].appendChild(link);
	}

})();
