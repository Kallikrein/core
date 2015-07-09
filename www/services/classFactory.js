(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'services/localStorageService'
	], function(m, Promise, storage) {

		return classFactory;

		function classFactory(model) {

			// Constructor
			var Class = function(values) {
				var self = this;

				values = values || {};

				for (var name in model.attributes) {
					self[name] = getterSetter(values[name]);
				}

			};

			// Static Method
			Class.create = function create(attributes) {
				return new Promise(function(resolve) {
					resolve(new Class(attributes));
				});
			};

			return Class;
		}

		function getterSetter(store) {
			var prop = function(/*value*/) {
				if (arguments.length)
					store = arguments[0];
				return store;
			};
			return prop;
		}

	});

})();
