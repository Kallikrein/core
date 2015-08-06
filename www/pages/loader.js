(function() {
	'use strict';

	define([
		'm',
		'components/logo.animated'
	], function(m, logo) {

		var component = {};

		component.controller = function() {
			var self = this;

			self.progress = 0;
			self.progressActivated = false;

			setTimeout(function activateProgress() {
				self.progressActivated = true;
				m.redraw();
			}, 500);

			setTimeout(function() {
				m.route.go('home');
			}, 4700);
		};

		component.view = function(c) {
			return m('.loaderPanel', [
				m('.loaderPanel--logo', [
					logo,
					m('.loaderPanel--title', [
						'Saison',
						m('span.loaderPanel--title__colored', ' 1')
					])
				]),
				m('.loaderPanel--progress', {
					class: c.progressActivated ? 'activated' : ''
				})
			]);
		};

		return component;

	});

})();
