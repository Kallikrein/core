(function() {
	'use strict';

	define(['services/storageService'], todoListModel);

	function todoListModel (storage) {

		var self = this;
		var newList = function (name) {
			console.log(name);
			this.name = name;
			this.list = [];
			this.listId = [];
		};

		var todoList = {
			load : function (name) {
				//load data from localstorage
				var _load = localStorage.getItem('todoLists ' + name);
				var ret = {};
				if (!_load)
					ret = new newList(name);
				else
					ret = JSON.parse(_load);
				ret.save = function () {
					console.log(ret);
					localStorage.setItem('todoLists ' + ret.name, JSON.stringify(ret));
				};
				return ret;
			}

		};

		return todoList; 
	}

})();
