(function() {
	'use strict';

	define([
		'm'
	], function(m) {

		var component = {};

		component.controller = function() {
			var self = this;

			self.hidden = m.prop(false);
		};

		component.view = function(c, panel) {
			return m('.framer--elem', [
				m('.authOptions', [
					m('button.button.button__fb', 'Facebook login'),
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
							config: m.touchHelper({tap: c.hidden.bind(null, false)})
						}, 'Connexion')
					])
				]),
				m('.authPanel--bottom', [
					m('p.txt.txt__light', {
						config: m.touchHelper({tap: panel.bind(null, 1)})
					}, '> Nouveau membre ?'),
					m('p.txt.txt__light', {
						config: m.touchHelper({tap: panel.bind(null, 3)})
					}, '> Mot de passe oublié ?')
				])
			]);
		};

		return component;

	});

})();
