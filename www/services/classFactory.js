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
				var attributes = model.attributes;

				for (var name in attributes) {
					// Verify here required value ?
					self[name] = getterSetterFactory(attributes[name]);
				}

			};

			Class.prototype.save = function() {};

			Class.prototype.populate = function(obj) {
				for (var key in obj) {
					if (this[key] !== undefined)
						this[key](obj[key]);
				}
			};

			return Class;
		}

		function getterSetterFactory(attribute) {
			var stored;

			function getterSetter(value) {
				if (arguments.length)
					stored = value;
				return stored;
			}

			getterSetter.isAllowed = attribute.isAllowed || returnTrue;
			getterSetter.isValid = function(value) {
				var isValid = attribute.isValid || returnTrue;

				if (isValid(value)) {
					stored = value;
					return true;
				} else
					return false;
			};

			return getterSetter;
		}

		function returnTrue() {
			return true;
		}

	});

})();
