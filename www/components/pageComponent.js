(function() {
	'use strict';

	define([
		'm',
		'services/storageService',
		'services/networkService',
		'services/daemonService'
	], function(m, storage, network, daemon) {

		var component = {};

		component.controller = function() {
			var self = this;

			self.data = '';

			self.store = function() {
				self.data = 'Hello RAM';
			};

			self.write = function() {
				storage('hello', 'Hello LocalStorage');
			};

			self.request = function() {
				network.get('http://mp.sparted.com').then(function(res) {
					alert(res);
				}).catch(function(err) {
					alert('Error: ' + err);
				});
			};

			self.clearAll = function() {
				self.data = '';
				daemon.reset();
				storage();
			};

			self.display = function() {
				var str = [
					['RAM:', self.data].join(' '),
					['LocalStorage:', storage('hello')].join(' ')
				].join('\n\n');

				alert(str);
			};

			self.chrono = daemon.chrono;

			daemon.start();
		};

		component.view = function(c) {
			return m('.page', [
				m('header.page-header', 'Kernel test'),
				m('section.page-section', [
					m('.button-wrapper', [
						m('button.button', {onclick: c.store}, 'Store data'),
						m('button.button', {onclick: c.write}, 'Write on localstorage'),
						m('button.button', {onclick: c.request}, 'Send request'),
						m('button.button', {onclick: c.display}, 'Display'),
						m('button.button', {onclick: c.clearAll}, 'Clear all'),
						m('', c.chrono())
					])
				]),
				m('footer.page-footer', 'v0.0.1 dev')
			]);
		};

		return component;

	});

})();
