(function() {
	'use strict';

	define([
		'm',
		'models/userModel',
		'components/navComponent'
	], homePage);

	function homePage (m, user, nav) {
		return {
			controller: function () {
				console.log(user);
				var self = this;
				if (user.is.loggedIn === false)
					m.route('/login');
			},
			view: function (c) {
				return m.component(nav);
			}
		};
	}

})();
