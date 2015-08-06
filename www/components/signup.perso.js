(function() {
	'use strict';

	define([
		'm',
		'components/testRadio'
	], function(m, radio) {

		var component = {};

		component.controller = function() {
			var self = this;

			self.gender = m.prop(0);
		};

		component.view = function(c, args) {
			return m('.signupPanel--body.framer--elem', [
				m('.logo-brand'),
				m('.addAvatar', [
					m('.addAvatar--txt', 'Ajouter votre photo')
				]),
				m.component(radio, {choices: ['Femme', 'Homme'], choice: c.gender}),
				m('.signupPanel--title', 'Infos professionnelles :'),
				m('input.input.input__half', {
					placeholder: 'Prénom'
				}),
				m('input.input.input__half', {
					placeholder: 'Nom'
				}),
				m('label.label', 'Date de naissance :'),
				m('input.input.input__2digits', {
					placeholder: 'DD'
				}),
				m('input.input.input__2digits', {
					placeholder: 'MM'
				}),
				m('input.input.input__4digits', {
					placeholder: 'AAAA'
				}),
				m('button.button.button__normal', {
					ontap: args.panel.bind(null, 2)
				}, 'Next')
			]);
		};

		return component;

	});

})();
