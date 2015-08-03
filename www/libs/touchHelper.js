(function(env) {
	'use strict';

	if (typeof env.define === 'function' && env.define.amd)
		env.define(['m'], addTouchHelper);
	else {
		if (env.m == null)
			throw new Error('Missing dependency: mithril is not defined');
		env.addTouchHelper = addTouchHelper();
	}

	function addTouchHelper(m) {

		m.touchHelper = function(options) {
			return function(elem, init, ctx) {
				if (!init) {
					Object.keys(options).forEach(function(touchType) {
						options.cb = postEvent(options[touchType]);
						elem.addEventListener(touchType, options.cb, false);
					});
					ctx.onunload = function() {
						Object.keys(options).forEach(function(touchType) {
							elem.removeEventListener(touchType, options.cb, false);
						});
					};
				}
			};
		};

		function postEvent(ft) {
			return function(e) {
				ft(e);
				m.redraw();
			};
		}

	}

})(this);
