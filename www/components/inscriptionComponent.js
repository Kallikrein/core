/**
 * Created by kevin gosse on 08/07/2015.
 */

(function(){
    'use strict';

    define([
        'm'
    ], function(m){

        var component = {};

        component.controller = function(transition){
            var self = this;

            self.hidden = true;

            self.display = function(){
                if (!self.hidden)
                    return;

                self.hidden = !self.hidden;
            };

        };

        component.view = function(ctrl, transition){
            return m(".ins", {}, [
                m(".ins__btn-wrapper", [
                    m("button.btn.btn--large.btn--facebook",{},"Facebook login"),
                    m(".ins__btn-wrapper__txt.txt.txt--grayed", "ou"),
                    m(".ins__btn-wrapper__inputs", {class: ctrl.hidden ? '' : 'displayInputs'}, [
                        m("input.ipt.ipt--large[placeholder=Adresse e-mail]",{}),
                        m("input.ipt.ipt--large[placeholder=Mot de passe]",{

                        })
                    ]),
                    m("button.btn.btn--large.btn--normal.ins__btn-wrapper__btn",{
                        onclick: ctrl.display,
                        class: ctrl.hidden ? '' : 'moveButton'
                    },"Inscription")
                ]),
                m(".bottom.ins__footer", [
                    m("p.txt--grayed",{
                        onclick: transition.bind(null, 1)
                    },"> Déjà membre ?")
                ] )
            ]);
        };

        return component;
    });
})();
