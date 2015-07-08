(function() {
	'use strict';

	define([
	], function() {
		var T = {};

		T.is = {
			obj: function(val) {
				return {}.toString.call(val) == '[object Object]';
			},
			arr: function(val) {
				return {}.toString.call(val) == '[object Array]';
			},
			str: function(val) {
				return {}.toString.call(val) == '[object String]';
			},
			ft: function(val) {
				return {}.toString.call(val) == '[object Function]';
			}
		};

		// TODO : A voir pour gérer les objets dans collection
		T.pluck = function (collection, path) {
			var pluckValues = [];

			collection.map(function (val) {
				if (val[path])
					pluckValues.push(val[path]);
			});

			return pluckValues;

		};

		return T;

	});

})();
