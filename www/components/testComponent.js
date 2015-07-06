(function() {
	'use strict';

	define([
		'm',
		'services/storageService',
		'services/networkService'
		], testComponent);

	function testComponent(m, storage, network) {
		console.log('test');
		return {
			controller: controller,
			view: view
		};


		function vm () {
			var vm = {
				chrono: m.prop(45)
			};
			return vm;
		}

		function controller () {
			this.vm = vm();
			this.testArray = ['test1', 'test2'];
		}

		var testList =  {
			view: function(c, a) {
				argument.tests.map(function(test){
					return m('.test', 'test');
				})
			return m('', 'chaud');
			}
		}

		function view (controller) {
			var vm = controller.vm;

			return m('.page', [
				m('header.page-header', 'Tests'),
				m('section.page-section', [
					m('.button-wrapper', [
						m('', vm.chrono()),
						//m.component({view: function(c, a){return m('div', a)}}, controller.testArray[1])
						m.component(
							{
								view: function(c, a){
									console.log('view');
									return m('.table', [
										a.map(function(test) {
											return m('div', test);
										})])
							}
							},
							controller.testArray
						)
					])
				]),
				m('footer.page-footer', 'v0.0.1 dev')
			]);
		}
	}


})();
