(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'services/classFactory'
	], function(m, Promise, classFactory) {

		var User = {
			attributes: {
				mail: {
					required: true
				},
				password: {
					required: true
				},
				name: {
					type: 'string'
				}
			},
			me: function() {}
		};

		return classFactory(User);

	});

})();
