(function() {
	'use strict';

	define([
	], function() {

		return {
			get: get,
			create: create,
			clean: clean,
			clear: clear
		};

		function get(id) {
			return JSON.parse(localStorage.getItem(id));
		}

		function create() {}

		function clean() {
		}

		function clear() {
			localStorage.clear();
		}

	});

})();
