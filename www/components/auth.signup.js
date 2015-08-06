(function() {
	'use strict';

	define([
		'm'
	], function(m) {

		var component = {};

		component.controller = function() {
			var self = this;

			self.login = function() {
				console.log('ONTAP');
			};

			self.hidden = m.prop(true);

			self.signup = function() {
				if (self.hidden())
					self.hidden(false);
				else {
					m.redraw.strategy('none');
					m.route.go('signup');
				}
			};
		};

		component.view = function(c, panel) {
			return m('.framer--elem', [
				m('.authOptions', [
					m('button.button.button__fb', {
						config: m.touchHelper({tap: c.login})
					}, 'Facebook login'),
					m('.txt.txt__light.authOptions--separ', 'ou'),
					m('.authForm', {
						class: c.hidden() ? '' : 'displayed'
					}, [
						m('.authForm--inputs', [
							m('input.input', {
								placeholder: 'Adresse e-mail'
							}),
							m('input.input', {
								placeholder: 'Mot de passe',
								type:        'password'
							})
						]),
						m('button.button.button__normal.authForm--button', {
							ontap: c.signup
						}, 'Inscription')
					])
				]),
				m('.authPanel--bottom', [
					m('p.txt.txt__light', {
						config: m.touchHelper({tap: panel.bind(null, 2)})
					}, '> Déjà membre ?')
				])
			]);
		};

		return component;

	});

})();
