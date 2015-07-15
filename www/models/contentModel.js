(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'factory',
		'local',
		'network'
	], function(m, Promise, factory, local, network) {

		var Content = {
			id: 'id',
			version: 'updatedAt',
			prefix: 'CONTENT',
			attributes: {
				id: {},
				createdAt: {},
				updatedAt: {}
			}
		};
		return network(Content, local(Content, factory(Content)));
	});
})();
