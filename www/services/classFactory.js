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

				attributes = attributes || [];

				for (var name in model.attributes) {
					self[name] = getterSetter(attributes[name]);
				}

			};

			Class.prototype.update = function(attributes) {
				for (var name in attributes) {
					if (typeof this[name] === 'function')
						this[name](attributes[name]);
				}
			};

			Class.prototype.save = function() {
				var saveModel = {};

				for (var key in model.attributes) {
					if (model.attributes[key].type == 'collection')
						saveModel[key] = T.pluck(this[key](), 'id');
					else if (model.attributes[key].type == 'model')
						saveModel[key] = this[key]().id || this[key];
					else
						saveModel[key] = this[key]();
				}

				return storage.store(saveModel);

			};

			/**
			 * Unpopulate remove the populated value from the reccord
			 * @param  {String} key The key you want to unpopulate
			 * @return {Object}     Promise
			 */
			Class.prototype.unpopulate = function (key) {
				var self = this;

				return (
					new Promise(function (resolve, reject) {
						if (!self[key])
							return reject('Cannot unpopulate, wrong key' + key);
						else if (model.attributes[key].type === 'collection' || model.attributes[key].type === 'model')
							self[key](T.pluck(self[key](), 'id'));
						return resolve(self);
					})
				);
			};

			/**
			 * Unpopulate all element from the current instance
			 * @return {Object}     Promise
			 */
			Class.prototype.unpopulateAll = function() {
				var self = this;

				return (
					new Promise(function (resolve) {
						for (var key in model.attributes) {
							self.unpopulate(key);
						}

						resolve(self);
					})
				);
			};

			Class.prototype.populateAll = function() {
				var self = this;

				return (
					new Promise(function (resolve) {
						for (var key in model.attributes) {
							self.populate(key);
						}

						resolve(self);
					})
				);
			};

			Class.prototype.populate = function(key) {
				var tmp = [];
				var self = this;

				return (
					new Promise(function (resolve, reject) {
						if (model.attributes[key].type === 'collection' || model.attributes[key].type === 'model') {
							this[key]().map(function (id) {
								return storage.get({id: id, model: model.prefix});
							}).then(tmp.push, reject);
							this[key](tmp);
						} else
							reject('Populate is not possible on ' + key);

						resolve(self);
					})
				);
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
