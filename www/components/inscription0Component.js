/**
 * Created by kevin gosse on 20/07/2015.
 */

(function(){
    'use strict';

    define([
        'm',
        'components/inscription1Component',
        'components/inscription2Component'
    ], function(m, ins1, ins2){

        var component = {};

        component.controller = function(){
            var self = this;

            self.transition = m.prop(0);
            self.scale = m.prop(0.2);
            self.modifications = m.prop(0);

            self.progress = function(){
                if (self.modifications() == 1) {
                    var res = self.scale() + 0.125; self.scale(res > 1 ? 1 : res); }
                else {
                    var res = self.scale() - 0.125;
                    self.scale(res < 0 ? 0 : res);
                }
                self.modifications(0);
                return self.scale();
            };

        };

        component.view = function(ctrl){
            return m(".ins0", [
                m(".ins0__body", {class: "ins0__body--trans" + ctrl.transition()},[
                    m.component(ins1, ctrl.transition, ctrl.modifications),
                    m.component(ins2, ctrl.transition)
                ]),
                m(".bottom.ins0__footer", [
                    m(".ins0__footer__tabs", [
                        m(".ins0__footer__tabs__1", {class: ctrl.transition() == 0 ? 'ins0__footer__tabs--active' : ''}),
                        m(".ins0__footer__tabs__2", {class: ctrl.transition() == 1 ? 'ins0__footer__tabs--active' : ''})
                    ]),
                    m(".ins0__footer__progress-bar", {
                        style: {
                            transform: "scale(" + (ctrl.modifications() != 0 ? ctrl.progress() : ctrl.scale()) + ", 1)"
                        }
                    })
                ])
            ]);
        };

        return component;
    });
})();
