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
            
        };

        component.view = function(ctrl, transition){
            return m(".cnx", {} ,[

                m(".cnx__btn-wrapper", [
                    m("button.btn.btn--large.btn--facebook",{},"Facebook login"),
                    m(".cnx__btn-wrapper__txt.txt--grayed", "ou"),
                    m("", [
                        m("input.ipt.ipt--large[placeholder=Adresse e-mail]",{}),
                        m("input.ipt.ipt--large[placeholder=Mot de passe]",{})
                    ]),
                    m("button.btn.btn--large.btn--normal",{},"Connexion")
                ]),
                m(".bottom.cnx__footer", [
                    m("p.txt--grayed",{
                        onclick: transition.bind(null, 0)
                    },"> Nouveau membre ?"),
                    m("p.txt--grayed",{
                        onclick: transition.bind(null, 2)
                    },"> Mot de passe oublié ?")
                ] )
            ]);
        };

        return component;
    });
})();
