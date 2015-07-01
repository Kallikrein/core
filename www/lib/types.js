(function() {
	'use strict';

	define([
	], function() {

		var types = {};

		types.email = function() {

			this.isAllowed = function(value) {
				var forbidden = ['"'];

				for (var i = forbidden.length - 1; i >= 0; i--) {
					if (value.indexOf(forbidden[i]))
						return false;
				}

				return true;
			};

			this.isValid = function(value) {
				return true;
			};

		};

	});

})();
