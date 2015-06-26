(function() {
	'use strict';

	define([
	], function() {

		return storage;

		function storage(key, value) {
			if (arguments.length == 0)
				localStorage.clear();
			else if (arguments.length == 1)
				return localStorage[key];
			else
				localStorage[key] = value;
		}

	});

})();
