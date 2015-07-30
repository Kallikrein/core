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
			return m('.profile__following', 'Profile following');
		};

		return component;

	});

})();
