(function() {
	'use strict';

	define([
		'm'
	], function(m) {

		var component = {};

		component.controller = function() {};

		component.view = function() {
			return m('img.logo.logo__animated', {
				src: 'assets/img/pub-logo-circle.gif'
			});
		};

		return component;

	});

})();
