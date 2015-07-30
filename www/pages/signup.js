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
			return m('.page.signup', [
				m('.m_signup')
			]);
		};

		return component;

	});

})();
