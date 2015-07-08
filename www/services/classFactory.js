(function() {
	'use strict';

	define([
		'm',
		'tools',
		'bluebird'
	], function(m, T, Promise) {

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

		function save() {
			var saveModel = {};

			return (
				new Promise(function (resolve, reject) {
					for (var key in attributes) {
						if (attributes[key].collection)
							saveModel[key] = T.pluck(this[key](), 'id');
						else if (attributes[key].model)
							saveModel[key] = this[key]().id || this[key];
						else
							saveModel[key] = this[key]();
					}

					storage.store(saveModel)
					.then(function (response) {
						resolve(this);
					})
					.catch(reject);
				})
			);
		}

		function populate(key) {
			var values = [];
			var tmp = [];

			return (
				new Promise(function (resolve, reject) {
					if (attributes[key].collection || attributes[key].model) {
						Promise.map(this[key], function (id) {
							return storage.get(val);
						})
						.then(function (values) {
							console.log(values);
							this[key](values);
						})
						.catch(function (e) {
							console.log(e);
							reject(e);
						})
						// this[key]().map(function (val) {
						// 	values.push(storage.get(val));
						// });

						// values.
						// this[key](tmp);
					} else
						reject('The key is not a collection nor a model, cannot populate');

					resolve(this);
				})
			);
		}

		function populateAll() {
			var tmp = [];

			return (
				new Promise(function (resolve, reject) {
					for (var key in attributes) {
						if (attributes[key].collection || attributes[key].model) {
							this[key]().map(function (val) {
								storage.get(val).then(tmp.push, reject);
							});
							this[key](tmp);
						}
					}

					resolve(this);
				})
			);
		}

	});

})();

/*

[1] = [{id: 1}]
[1, 2] = [{id: 1, name: 'toto'}, {id: 2, name: 'tata'}]

 */
