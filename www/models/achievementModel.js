(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'factory',
		'local',
		'network'
	], function(m, Promise, factory, local, network) {

		var Achievement = {
			id: 'id',
			version: 'updatedAt',
			prefix: 'ACHIEVEMENT',
			attributes: {
				id: {},
				createdAt: {},
				updatedAt: {}
			}
		};
		return network(Achievement, local(Achievement, factory(Achievement)));
	});
})();
