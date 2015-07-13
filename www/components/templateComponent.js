(function() {
	'use strict';

	define([
		'm',
		'models/templateModel'
	], function(m, model) {
		return {
			controller: function() {
				var self = this;
			},
			view: function(c) {
				return m('h2', 'component template');
			}
		}
	});
})();