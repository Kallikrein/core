(function() {
	'use strict';

	define(['m'], inputComponent);

	function inputComponent (m) {
		return {
			controller: function(parentController, opt) {
				var self = this;
				parentController.login.isValid = this.isValid;
				parentController.login.value = this.value;
				this.value = m.prop('');
				this.error = m.prop('');
				this.isValid = function () {}
				this.validChar = function () {
					if /*grep chelou ici*/
						self.error('pas le droit oté')
				}
			},
			view: function(c, parentController, opt) {
				return [
					m('', opt.name),
					m('input', {
						type: opt.type,
						value: c.value(),
						oninput: m.withAttr('value', c.validChar),
					}),
					m('', c.error());
			}
		};
	}

})();
