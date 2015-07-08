(function() {
	'use strict';

	define([
		'm',
		'models/userModel'
	], navComponent);

	function navComponent (m, user) {
		return {
			controller: function () {
				this.links = [
					{
						title: 'home',
						url: '/'
					},
					{
						title: 'todo',
						url: '/todo/'
					}
				];
				this.logout = function () {
					user.logout();
					//m.route('/login');
				};
			},
			view: function (c) {
				return m('ul', [
					c.links.map(function(link){
						return m('li', m('a', {
							config: m.route,
							href: link.url
						}, link.title));
					}),
					m('li', m('a', {
						onclick: c.logout,
						config: m.route,
						href: '/login'
					}, 'logout'))
				]);
			}
		}
	}

})();
