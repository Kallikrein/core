(function() {
	'use strict';

	define([
		'm',
		'models/userModel',
		'components/loginComponent'
	], loginPage);

	function loginPage (m, user, login) {
		return {
			controller: function () {
				var self = this;
				self.vm = {
					header: false,
					body: login,
					footer: false
				};
			},
			view: function (c) {
				return [
					m.component(login)
				];
			}
		};
	}

})();