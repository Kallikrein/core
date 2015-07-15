(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'factory',
		'local',
		'network'
	], function(m, Promise, factory, local, network) {

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

		return network(Template, local(Template, factory(Template)));

	});

	function valid (v) {
		if (v().length == 0)
			return false;
		return true;
	}

})();
