(function() {
	'use strict';

	define([
		'm',
		'bluebird'
	], function(m, Promise) {

		function _request(method, url, data, progress) {
			return new Promise(function(resolve, reject) {
				var xhr = new XMLHttpRequest();

				xhr.open(method, url);
				// xhr.setRequestHeader();
				xhr.onload = function() {
					resolve(xhr.response);
				};
				xhr.onerror = function() {
					reject(xhr.response);
				};
				xhr.onprogress = progress;
				xhr.send(data);
			});
		}

		return {
			get: function(url, data, progress) {
				return _request('GET', url, data, progress);
			},
			post: function(url, data, progress) {
				return _request('POST', url, data, progress);
			}
		};

	});

})();
