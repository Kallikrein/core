(function(env) {
	'use strict';

	if (typeof env.define === 'function' && env.define.amd)
		env.define(animationHandler);
	else
		env.animationHandler = animationHandler();

	function animationHandler() {

		var animations = {
			fromRight: function (elem, cb, config) {
				config = config || {};
				config.duration = (config.duration || 5) + 's';
				config.ease = config.ease || 'ease';

				if (config.z)
					elem.style.zIndex = config.z;

				elem.style.transform = 'translateX(100%)';
				elem.style.transition = ['transform', config.duration, config.ease].join(' ');

				setTimeout(function() {
					elem.style.transform = 'translateX(0)';
				}, 0);

				elem.addEventListener('transitionend', cb);
			},
			fromBottom: function (elem, cb, config) {
				config = config || {};
				config.duration = (config.duration || 5) + 's';
				config.ease = config.ease || 'ease';

				if (config.z)
					elem.style.zIndex = config.z;

				elem.style.transform = 'translateY(100%)';
				elem.style.transition = ['transform', config.duration, config.ease].join(' ');

				setTimeout(function() {
					elem.style.transform = 'translateY(0)';
				}, 0);

				elem.addEventListener('transitionend', cb);
			},
			toLeft: function (elem, cb, config) {
				config = config || {};
				config.duration = (config.duration || 5) + 's';
				config.ease = config.ease || 'ease';

				if (config.z)
					elem.style.zIndex = config.z;

				elem.style.transform = 'translateX(0)';
				elem.style.transition = ['transform', config.duration, config.ease].join(' ');

				setTimeout(function() {
					elem.style.transform = 'translateX(-100%)';
				}, 10);

				elem.addEventListener('transitionend', cb);
			},
			toTop: function (elem, cb, config) {
				config = config || {};
				config.duration = (config.duration || 5) + 's';
				config.ease = config.ease || 'ease';

				if (config.z)
					elem.style.zIndex = config.z;

				elem.style.transform = 'translateY(0)';
				elem.style.transition = ['transform', config.duration, config.ease].join(' ');

				setTimeout(function() {
					elem.style.transform = 'translateY(-100%)';
				}, 0);

				elem.addEventListener('transitionend', cb);
			},
			none: function(elem, cb, config) {
				config = config || {};
				config.duration = (config.duration || 5) + 's';
				config.ease = config.ease || 'ease';

				if (config.z)
					elem.style.zIndex = config.z;

				elem.style.transform = 'translateY(0)';
				elem.style.transition = ['transform', config.duration, config.ease].join(' ');

				setTimeout(function() {
					elem.style.transform = 'translateX(0)';
				}, 0);

				elem.addEventListener('transitionend', cb);
			}
		};

		return animations;
	}

})(this);
