(function() {
	'use strict';

	define(['m', 'utils'
	], function(m, utils) {

		var storage = {
			getKey: getKey
		};

		return storage;

		function getKey(key) {
			var wrapper = {
				key:  key,
				obj:  {},
				save: _save
			};

			wrapper.obj = JSON.parse(localStorage.getItem(key));

			Object.keys(wrapper.obj).map(function (item) {
				//TODO: gérer le cas où un array se présente dans l'objet
				if (utils.is.arr(wrapper.obj[item]))
					console.log('Je suis un array');
				wrapper.obj[item] = m.prop(wrapper.obj[item]);
			});

			return wrapper;
		}

		function _save() {
			localStorage.setItem(this.key, JSON.stringify(this.obj));
		}
	});

})();
