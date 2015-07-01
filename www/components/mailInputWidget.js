(function() {
	'use strict';

	define([
		'm'
	], function(m) {

		var component = {};

		component.controller = function(getterSetter) {
			var self = this;

			self.input = function(value) {
				self.error = getterSetter.isAllowed(value) ? false : true;
			};

			self.change = function(value) {
				self.error = getterSetter.isValid(value) ? false : true;
			};
		};

		component.view = function(c) {
			return m('input.input', {
				class:       c.error ? 'input-error' : '',
				onchange:    m.withAttr('value', c.change),
				oninput:     m.withAttr('value', c.input),
				placeholder: 'Firstname'
			});
		};

		return component;

	});

})();
