(function() {
	'use strict';

	define ([
		'm',
		'models/todoListModel',
		'models/userModel',
		'components/todoComponent',
		'components/navComponent'
		], todoListComponent);

	function todoListComponent(m, todoListModel, user, todoComponent, nav) {
		return {
			controller: function () {
				var self = this;
				user.load();
				self.todoList =  user.todoList;
				self.newTodo = {
					name: m.prop(''),
					data: m.prop(''),
					new: function () {
						user.todoList().push({
							name: self.newTodo.name(),
							data: self.newTodo.data()
						});
						self.newTodo.name('');
						self.newTodo.data('');
						user.save();
					}
				};
			},
			view: function (c) {
				return [
					m.component(nav),
					m('.wrapper', [
						m('.todoList', [
							m('h3', c.todoList.name),
							m('button.button', {onclick: user.save}, 'Save todo list'),
							user.todoList().map(function(todoItem){ 
								return m.component(todoComponent, todoItem);
							}),
							m('', 'name : '),
							m('input.button', {
								oninput: m.withAttr('value', c.newTodo.name),
								value: c.newTodo.name()
							}),
							m('', 'data : '),
							m('input.button', {
								oninput: m.withAttr('value', c.newTodo.data),
								value: c.newTodo.data()
							}),
							m('button.button', {onclick: c.newTodo.new}, 'create'),
							
						])
					])
				];
			}
		};
	}

})();
