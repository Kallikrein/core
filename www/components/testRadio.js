(function() {
	'use strict';

	define([
		'm'
	], function(m) {

		var component = {};

		// component.controller = function(args) {
		// 	var self = this;
		// };

		component.view = function(c, args) {
			return m('.radio', args.choices.map(function(item, i) {
				return m('.radio--choice', {
					class: args.choice() == i ? 'choosen' : '',
					ontap: args.choice.bind(null, i)
				}, item);
			}));
		};

		return component;

	});

})();
