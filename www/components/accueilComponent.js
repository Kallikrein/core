/**
 * Created by kevin gosse on 13/07/2015.
 */

(function(){
    'use strict';

    define([
        'm',
        'components/inscriptionComponent',
        'components/connexionComponent',
        'components/forgottenPasswordComponent'

    ], function(m, inscription, connexion, fpw){

        var component = {};

        component.controller = function(){
            var self = this;

            self.transition = m.prop(0);

            self.manageTransition = function(){
                var res = self.transition();
                if (res)
                {
                    self.transition(0);
                    var str =  "acc__body--trans" + res;
                    return str;
                }
                return "";
            };
        };

        component.view = function(ctrl){
            return m(".acc", [
                m(".acc__logo.txt", " "),
                m(".acc__body",{class: "acc__body--trans" + ctrl.transition()},[
                    m.component(inscription, ctrl.transition),
                    m.component(connexion, ctrl.transition),
                    m.component(fpw, ctrl.transition)
                ])
            ]);
        };

        return component;
    });
})();
