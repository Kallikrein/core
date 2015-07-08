(function() {
	'use strict';

	define ([
		'm',
		], todoComponent);

	function todoComponent(m) {
		return {
			controller: function(todo) {
				return {todo : todo};
			},
			view: function(c) {
				return m('.todo', [
					m('.name', 'name :' + c.todo.name),
					m('.name', 'data :' + c.todo.data),
				]);
			}
		}
	}

})();
