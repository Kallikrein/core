(function() {
	'use strict';

	define([
		'm',
		'components/templateComponent',
		'models/templateModel'
		], function(m, templateComponent, templateModel) {
		return {
			controller: function() {
				var self = this;
				this.template = new templateModel();
				this.template.testNetwork('http://mp.sparted.com/login');
				this.template.testNetwork('http://mp.sparted.com/users');
				this.load = function () {
					templateModel.get()
					.then(function (tmp) {
						console.log(tmp.attribute1());
					});
				}

				this.fetch = function () {
					templateModel.fetch()
					.then(function (tmp) {
						console.log(tmp.attribute1());
					});
				};

				this.template.test();
				this.vm = {
					globalError: m.prop(''),
					attribute1Error: m.prop(''),
					attribute2Error: m.prop(''),
				};
				this.submit = function () {
					self.template.is.valid().then(function (){
						self.template.save();
						console.log('saved');
					});
					//.catch(self.vm.globalError);
				}
			},
			view: function(c) {
				return m('', {style: 'border-style:solid'},[
					m('h1', 'page template'),
					m('.error', c.vm.globalError()),
					m('input', {
						onchange: m.withAttr("value", c.template.attribute1),
						value: c.template.attribute1()
					}),
					m('button', {
						onclick: c.submit
					},
					'save'),
					m('button', {
						onclick: c.load
					},
					'load'),
					m('button', {
						onclick: c.fetch
					},
					'fetch'),
					m.component(templateComponent)
				]);
			}
		}
	});
})();
