(function() {
	'use strict';

	define([
		'm'
	], function(m) {

		var component = {};

		component.controller = function() {
			var self = this;
		};

		component.view = function(c) {
			return m('.signupPanel--body.framer--elem', [
				m('.logo-brand'),
				m('.addAvatar', [
					m('.addAvatar--txt', 'Ajouter votre photo')
				]),
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
					ontap: m.route.go.bind(null, 'loader')
				}, 'Get Sparted!')
			]);
		};

		return component;

	});

})();
