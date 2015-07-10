(function() {
	'use strict';

	define([
		'bluebird',
		'services/localStorageService'
	], function(Promise, storage) {

		return classFactory;

		function classFactory(model) {
			var _arraysPromise;
			Class.prototype.is = {};

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
					/*
					** defines a subfunction attached to the getter-setter for each method in
					** the model.attributes.is : {}
					*/
					for (var method in model.attributes[name].is) {
						self[name].is[method] = isMethod (
							name,
							method,
							model.attributes[name].is[method],
							self[name]
						);
						_arraysPromise[method].push(self[name].is[method]);
						Class.prototype.is[method] = new Promise(function(resolve, reject) {
							var _promArray;
							for (var promise in _arraysPromise[method])

						});
					}

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

			function valid (name) {
				return (function (key) {
					return function () {
						return new Promise(function (resolve, reject) {
							if (model.attributes[key].valid())
							{
								console.log('valid in factory');
								console.log(this);
								resolve(self[name]);
							}
							else
								reject(name + ' didn\'t pass the valid check' );
						});
					};
				})(name);
			}
			function isMethod (varName, methodName, method, getterSetter) {
				return (function (_varName, _methodName, _method, _getterSetter) {
					return function () {
						return new Promise(function (resolve, reject) {
							if (_method.bind(null, _getterSetter)())
								resolve(_getterSetter);
							else
								reject(model.prefix + '/' + varName + ': \'' + _getterSetter() + '\' is not ' + methodName);
						});
					};
				})(varName, methodName, method, getterSetter);
			}


			/* INSTANCE METHODS */

			Class.prototype.save = function save () {
				//
				// return new Promise(function (resolve, reject) {
				// 	localStorage.setItem(this._id(), 'test');
				// });
			};

			Class.prototype.valid = function valid () {
				//promise array =
				//	for each getter setter, 
				//
				var array = [];

				for (var name in model.attributes) {
					array.push(this[name].is.valid());
				}
				return Promise.all(array);
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
			** defines a class.method() for each method in classMethods {}
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
