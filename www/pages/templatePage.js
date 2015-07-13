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
				this.vm = {
					globalError: m.prop(''),
					attribute1Error: m.prop(''),
					attribute2Error: m.prop(''),
				};
				this.submit = function () {
					self.template.is.valid().then()
					.catch(self.vm.globalError);
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
					'click me'),
					m.component(templateComponent)
				]);
			}
		}
	});
})();
