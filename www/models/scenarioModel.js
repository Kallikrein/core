(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'factory',
		'local',
		'network'
	], function(m, Promise, factory, local, network) {

		var Scenario = {
			id: 'id',
			version: 'updatedAt',
			prefix: 'SCENARIO',
			attributes: {
				id: {},
				type: {},
				createdAt: {}
			}
		};
		return network(Scenario, local(Scenario, factory(Scenario)));
	});
})();
