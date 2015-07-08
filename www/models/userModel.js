(function() {
	'use strict';

	define([], userModel);

	function userModel () {
		var user = {
			login: '',
			is: {
				loggedIn: false,
				nice: true
			},
			todoList: m.prop([])
		};
		//user.todoList = m.prop([]);
		user.auth = function (login, password) {
			if (login === '' )
				return 'no login';
			else if (password === '')
				return 'no password';
			var _password = localStorage.getItem('UserDB'+login)
			if (_password === undefined || _password === null || _password.length === 0) {
				localStorage.setItem('UserDB'+login, password);
				user.login = login;
				user.is.loggedIn = true;
				return 'user created';
			}
			else if (password === _password) {
				user.load(login);
				user.is.loggedIn = true;
				return 'user logged in';
			}
			else {
				user.login = '';
				user.is.loggedIn = false;
				return 'invalid password';
			}
		};
		user.init = function () {
			var _default = localStorage.getItem('User');
			if (_default === undefined || _default === null || _default.length === 0)
				return ;
			else
				user.load(_default);
		};
		user.load = function (name) {
			var _userStr = localStorage.getItem('User' + name);
			if (_userStr === undefined || _userStr === null || _userStr.length === 0)
				return ;
			else
				var _user = JSON.parse(_userStr);
			if (_user.login.length > 0)
				user.login = _user.login;
			if (_user.is.loggedIn == true)
				user.is.loggedIn = true;
			if (_user.todoList)
				user.todoList(_user.todoList);
		};
		user.save = function () {
			var _user = {
				login: user.login,
				is: user.is,
				todoList: user.todoList()
			};
			console.log(_user);
			localStorage.setItem('User'+ user.login, JSON.stringify(_user));
		};
		user.default = function () {
			localStorage.setItem('User', user.login);
		};
		user.logout = function () {
			user.is.loggedIn = false;
			user.save();
			user.login = '';
			user.todoList([]);
			localStorage.setItem('User', '');
		};
		return user;
	}

})();
