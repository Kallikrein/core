(function() {
	'use strict';

	define([
	], function() {
		var storage = {
			getKey: getKey
		};
		return storage;
		function getKey(key) {
			var wrapper = {
				key: key,
				obj: {},
				save: function () {}
			}
			return wrapper;
		}
	});

})();