(function() {
	'use strict';

	define([
		'm',
		'bluebird',
		'services/classFactory'
	], function(m, Promise, classFactory) {

		var User = {
			prefix: 'USER',
			attributes: {
				email: {
					required: true
				},
				password: {
					required: true
				},
				firstname: {
					type: 'string'
				},
				lastname: {
					type: 'string'
				},
				friendList: {
					type:  'collection',
					model: 'friend'
				},
				groups: {
					type: 'array',
					via:  ''
				}
			},
			me: function() {}
		};

		return classFactory(User);

		// var toto = new User('toto');

		// // toto.populate('friends');

		// User.create({firstname : 'tata'})
		// .then(function (record) {
		// 	record.lastname('toto');
		// 	return record.save()
		// })

		// User.find({lastname : 'toto'})
		// .then(function (record) {
		// 	console.log(record.friendList);
		// 	// [1, 2]
		// });

		// var array = [];

		// find(id) {
		// 	var array = JSON.parse('ID' + 'USER');
		// 	for each in array
		// }

		// User.find({lastname : 'toto'})
		// .populateAll()
		// .then(function (record) {
		// 	console.log(record.friendList);
		// 	// [{}, {}]
		// 	record.friendList.add(42)
		// 	record.save()
		// })

	});

})();
