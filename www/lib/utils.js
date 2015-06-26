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

		return T;

	});

})();
