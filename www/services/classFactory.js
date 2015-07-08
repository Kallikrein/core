(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'tools',
		'services/localStorageService'
	], function(m, Promise, T, storage) {

		return classFactory;

		function classFactory(model) {
			var namespace = {
				create: create
			};

			var Class = function(attributes) {
				var self = this;

				for (var name in model.attributes) {
					self[name] = getterSetter(attributes[name]);
				}

			};

			Class.prototype.update = function(attributes) {
				for (var name in attributes) {
					this[name](attributes[name]);
				}
			};

			function create(attributes) {
				return new Promise(function(resolve, reject) {
					for (var name in model.attributes) {
						if (model.attributes[name].required && attributes[name] === undefined)
							reject('Attributes ' + name + ' is required');
					}
					resolve(new Class(attributes));
				});
			}

			return namespace;
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
