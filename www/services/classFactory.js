(function() {
	'use strict';

	define([
		'bluebird',
		'services/localStorageService'
	], function(Promise, storage) {

		return classFactory;

		function classFactory(model) {

			/* CONSTRUCTOR */
			var Class = function(values) {
				var self = this;

				/*
				** defines a getter setter for each variable in the model attributes : {}
				** if a fields had a default value define in the model attributes default,
				** sets the get-set to this value
				*/
				values = values || {};
				for (var name in model.attributes) {
					self[name] = getterSetter(values[name] || model.attributes[name].default);
				}

				/*
				** defines an instance.method() for each variable in the model instanceMethods : {}
				*/
				for (var name in model.instanceMethods) {
					self[name] = model.instanceMethods[name];
				}

				/*
				** If the model has a field that will be used as a save ID, defines a _id() function that
				** returns the custom identifier for this instance.
				** Else, the class is a singleton and is stored/id'd under the prefix key only.
				*/
				if (model.id) {
					self._id = function _id () {
						return model.prefix + '/'+ self[model.id]();
					};
				}
				else
					self._id = function _id () {
						return model.prefix;
					};
			};

			/* !CONSTRUCTOR! */

			/* INSTANCE METHODS */

			Class.prototype.save = function save () {
				//
				// return new Promise(function (resolve, reject) {
				// 	localStorage.setItem(this._id(), 'test');
				// });
			};

			Class.prototype.valid = function valid () {
				//
			};

			Class.prototype.current = function current () {
				Class.current = this;
			};

			/* ! INSTANCE METHODS ! */

			Class.current;

			/* INSTANCE PRIVATE */

			function load () {};

			/* !INSTANCE PRIVATE! */

			/* STATIC METHODS */

			/*
			** defines a class.method() or each method in classMethods {}
			*/
			for (var name in model.classMethods)
			{
				Class[name] = model.classMethods[name];
			}

			Class.create = function create(attributes) {
				return new Promise(function(resolve) {
					resolve(new Class(attributes));
				});
			};

			Class.find = function find () {
				//returns an array
			};

			Class.get = function get () {
				//returns a promise or an object ?
			};

			/* !STATIC METHODS! */

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
