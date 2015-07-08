(function() {
	'use strict';

	define([
		'm',
		'bluebird'
	], function(m, Promise) {

		var _token = m.prop('');
		var _initialized;

		var api = {
			// Var
			// isInit: null,
			// Ft
			init:   init,
			get:    get,
			post:   post
		};

		return api;

		function get(url, data, progress) {
			return _request('GET', url, data, progress);
		}

		function post(url, data, progress) {
			return _request('POST', url, data, progress);
		}

		function init() {
			if (_initialized == null)
				_initialized = login();

			return _initialized;
		}

		function login() {
			return post('http://mp.sparted.com/login')
				.then(function(res) {
					return JSON.parse(res).token;
				})
				.then(_token)
				.catch(function(err) {
					console.log(err);
				});
		}

		function _request(method, url, data, progress) {
			return new Promise(function(resolve, reject) {
				var xhr = new XMLHttpRequest();

				xhr.open(method, url);

				if (_token() != '')
					xhr.setRequestHeader('X-token', _token());

				xhr.onload = function() {
					if (xhr.status != '200')
						reject(xhr.status + ' - ' + xhr.statusText);
					else
						resolve(xhr.response);
				};
				xhr.onerror = function() {
					reject('Error: ' + xhr.status + ' - ' + xhr.statusText);
				};
				xhr.onprogress = progress;

				xhr.send(data);
			});
		}

	});

})();
