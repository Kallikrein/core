(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'services/classFactory'
	], function(m, Promise, classFactory) {

		var User = {
			attributes: {
				email: {
					required:  true,
					isAllowed: function() {},
					isValid:   function() {}
				},
				password: {
					required: true
				},
				firstname: {
					type:      'string',
					isAllowed: function(value) {
						var chars = ['@'];

						for (var i = 0, len = chars.length; i < len; i++) {
							if (value.indexOf(chars[i]) >= 0)
								return false;
						}

						return true;
					},
					isValid: function(value) {
						console.log(value, value == 'yolo');
						return value == 'yolo';
					}
				},
				lastname: {
					type:    'string',
					isValid: function(value) {
						console.log(value == 'yolo');
						return value == 'yolo';
					}
				}
			},
			me: function() {}
		};

		return classFactory(User);

	});

})();
