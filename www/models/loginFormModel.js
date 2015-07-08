(function() {
	'use strict';

	define([], loginFormModel);

	function loginFormModel () {
		function loginForm (vm) {
			vm.form = this.vm;
			

			self = this;
			// self.login = {
			// 	value: m.prop(''),
			// 	is: {
			// 		valid: function () {
			// 			return true;
			// 		}
			// 	}
			};
			self.password = {
				value: m.prop(''),
				is: {
					valid: function () {
						return true;
					}
				}
			};
			self.auth = function () {
				if (self.login.is.valid() && self.password.is.valid())

			}
		}

		return loginForm;
	}

})();

					login: {
						value: m.prop(''),
						is: 
					password: m.prop(''),
					errorStr: m.prop(''),
					submit: function () {
						if ! isvalid login
							;
						if ! is valid password
							;
						self.form.errorStr(user.auth(
							self.form.login(),
							self.form.password()
						));
						console.log(user.is.loggedIn);
						if (user.is.loggedIn)
						 	m.route('/');
					}