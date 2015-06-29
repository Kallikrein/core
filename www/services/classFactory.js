(function() {
	'use strict';

	define([
		'm',
		'tools'
	], function(m, T) {

		return classFactory;

		function classFactory(model) {
			var Class = function() {
				var self = this;

				for (var attribute in model.attributes) {
					self[attribute] = model.attributes[attribute];
				}

			};

			Class.save = function() {};

			return Class;
		}

		function getterSetterFactory(attribute) {
			return function getterSetter(value) {

			};
		}

	});

})();
