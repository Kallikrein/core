(function() {
	'use strict';

	define([
		'm'
	], function(m) {

		var _chrono = m.prop(0);
		var _interval = 0;

		function start() {
			_interval = setInterval(_increment, 1000);
		}

		function stop() {
			clearInterval(_interval);
		}

		function reset() {
			stop();
			_chrono(0);
			start();
		}

		function _increment() {
			_chrono(_chrono() + 1);
			m.redraw();
		}

		return {
			start:  start,
			stop:   stop,
			reset:  reset,
			chrono: _chrono
		};

	});

})();
