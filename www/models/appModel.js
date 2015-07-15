(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'factory',
		'local',
		'network'
	], function(m, Promise, factory, local, network) {

		var App = {
			id: 'name',
			version: 'updatedAt',
			prefix: 'APP',
			attributes: {
				name: {},
				createdAt: {},
				updatedAt: {}
			},
			collections: {
				scenario: {
					type: 'scenario',
					saveAsJson: false,
					saveWith: true,
					syncWith: true,
					fetchWith: true,
				},
				achievements: {
					type: 'achievement',
					saveAsJson: false
				},
			},
			object: {
				user: {
					type: 'user',
					saveAsJson: false,
				},
				map: {
					type: 'map',
					saveAsJson: true
				}
			}
		};
		return network(App, local(App, factory(App)));
	});
})();
