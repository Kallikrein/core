(function() {
	'use strict';

	define([
		'm',
		'components/signup.perso',
		'components/signup.pro'
	], function(m, perso, pro) {

		var component = {};

		component.controller = function() {
			var self = this;

			self.panel = m.prop(1);

			self.inputsNb = m.prop(0);

			self.children = [
				m.component(perso, {
					panel:    self.panel,
					inputsNb: self.inputsNb
				}),
				m.component(pro, {
					panel:    self.panel,
					inputsNb: self.inputsNb
				})
			];
		};

		component.view = function(c) {
			return m('.signupPanel', [
				m('.framer.framer__w200', {
					class: 'nth' + c.panel()
				}, c.children),
				m('.signupPanel--footer', [
					m('.bullets', c.children.map(function(item, i) {
						return m('.bullets--elem', {
							class: c.panel() == i + 1 ? 'active': ''
						});
					})),
					m('.signupPanel--progress', {
						style: {
							transform: ['scaleX(', c.inputsNb() + 0.02, ')'].join('')
						}
					})
				])
			]);
		};

		return component;

	});

})();
