(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'services/networkService'
	], function(m, Promise, network) {

		return App;

		function App() {
			var self = this;
			var id;
			var initialized;

			self.init = function(name) {
				var promises = [];

				if (initialized == null) {
					id = name || 'Sparted Flow';
					promises.push(network.init());
					initialized = Promise.all(promises);
				}

				return initialized;
			};

		}

	});

})();
