(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'factory',
		'local',
		'network'
	], function(m, Promise, factory, local, network) {

		var User = {
			id: 'id',
			version: 'updatedAt',
			prefix: 'USER',
			attributes: {
				id: {},
				createdAt: {},
				updatedAt: {}
			}
		};
		return network(User, local(User, factory(User)));
	});
})();
