(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'factory',
		'decorator'
	], function(m, Promise, factory, decorator) {

		var Template = {
			prefix: 'TEMPLATE',
			attributes: {
				attribute1: {
					default: 'attribute 1',
					is: {
						valid: valid
					}
				},
				attribute2: {
					default: 'attribute 2',
					is : {
						valid: valid
					}
				}
			}//,
			//id: 'attribute1'
		};

		return decorator(Template, factory(Template));

	});

	function valid (v) {
		if (v().length == 0)
			return false;
		return true;
	}

})();
