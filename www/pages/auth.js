(function() {
	'use strict';

	define([
		'm',
		'components/auth.signup',
		'components/auth.login',
		'components/auth.password'
	], function(m, signup, login, password) {

		var component = {};

		component.controller = function() {
			var self = this;

			self.panel = m.prop(1);

			self.children = [
				m.component(signup, self.panel),
				m.component(login, self.panel),
				m.component(password, self.panel)
			];
		};

		component.view = function(c) {
			return m('.authPanel', [
				m('.logo-brand'),
				m('.authPanel--body.framer.framer__w300', {
					class: 'nth' + c.panel()
				}, c.children)
			]);
		};

		return component;

	});

})();
