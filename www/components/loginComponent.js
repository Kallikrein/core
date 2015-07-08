(function() {
	'use strict';

	define([
		'm',
		'models/userModel'
		], loginComponent);

	function loginComponent (m, user) {
		return {
			controller: function () {
				self = this;
				self.form = {
					login: m.prop(''),
					password: m.prop(''),
					errorStr: m.prop(''),
					submit: function () {
						event.preventDefault();
						self.form.errorStr(user.auth(
							self.form.login(),
							self.form.password()
						));
						console.log(user.is.loggedIn);
						if (user.is.loggedIn) {
							user.load();
							user.save();
							user.default();
						 	m.route('/');
						}
					}
				};

			},
			view: function (c) {
				return m('form', {
					onsubmit: c.form.submit
				},[
					m('', 'login'),
					m('input', {
						type: 'text',
						onchange: m.withAttr('value', c.form.login),
						value: c.form.login()
					}),
					m('', 'password'),
					m('input', {
						type: 'password',
						onchange: m.withAttr('value', c.form.password),
						value: c.form.password()
					}),
					m('', c.form.errorStr()),
					m('button', {
						type: 'submit'
					},
					'login')
				]);
			}
		};
	}

})();
