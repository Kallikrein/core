(function() {
	'use strict';

	define([
		'm',
		'models/userModel'
	], function(m, User) {

		var input = {};

		input.controller = function(getterSetter) {
			var self = this;

			self.input = function(value) {
				self.error = getterSetter.isAllowed(value) ? false : true;
			};

			self.change = function(value) {
				self.error = getterSetter.isValid(value) ? false : true;
			};
		};

		input.view = function(c) {
			return m('input.input', {
				class:       c.error ? 'input-error' : '',
				onchange:    m.withAttr('value', c.change),
				oninput:     m.withAttr('value', c.input),
				placeholder: 'Firstname'
			});
		};



		var component = {};

		component.controller = function() {
			var self = this;

			self.user = new User();

			console.log(self.user);

			self.input = function() {
				console.log('input');
			};

			self.change = function() {
				console.log('change');
			};

			self.send = function(e) {
				e.preventDefault();
				console.log(self.user.firstname());
				console.log(self.user.lastname());
				console.log(self.user.email());
				console.log(self.user.password());
			};

		};

		component.view = function(c) {
			return m('.page', [
				m('header.page-header', 'Kernel test'),
				m('section.page-section', [
					m('.button-wrapper', [
						m('form', {
							onsubmit: c.send
						}, [
							m('h2.title', 'Create a User'),
							m.component(input, c.user.firstname),
							m('input.input', {
								oninput:     m.withAttr('value', c.input),
								onchange:    m.withAttr('value', c.user.lastname),
								placeholder: 'Lastname'
							}),
							m('input.input', {
								oninput:     m.withAttr('value', c.input),
								onchange:    m.withAttr('value', c.user.email),
								placeholder: 'E-mail'
							}),
							m('input.input', {
								oninput:     m.withAttr('value', c.input),
								onchange:    m.withAttr('value', c.user.password),
								type:        'password',
								placeholder: 'Password'
							}),
							m('input.button', {
								type:  'submit',
								value: 'Create User'
							})
						]),
						m('a', {
							href:   '/data',
							config: m.route
						}, '<-- Storage page')
					])
				]),
				m('footer.page-footer', 'v0.0.1 dev')
			]);
		};

		return component;

	});

})();
