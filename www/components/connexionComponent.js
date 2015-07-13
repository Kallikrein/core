/**
 * Created by kevin gosse on 08/07/2015.
 */

(function(){
    'use strict';

    define([
        'm'
    ], function(m){

        var component = {};

        component.controller = function(){
            var self = this;

            self.inscription = function(){
                m.route("/inscription");
            };

        };

        component.view = function(ctrl){
            return m(".cnx", [
                m(".cnx__logo", "sparted logo"),
                m(".cnx__btn-wrapper", [
                    m("button.btn.btn--large.btn--facebook",{},"Facebook login"),
                    m(".txt--grayed", "ou"),
                    m("input.ipt.ipt--large[placeholder=Adresse e-mail]",{}),
                    m("input.ipt.ipt--large[placeholder=Mot de passe]",{}),
                    m("button.btn.btn--large.btn--normal",{},"Connexion")
                ]),
                m(".bottom.cnx__footer", [
                    m("p.txt--grayed[style='margin-bottom:3vh']",{
                        onclick: ctrl.inscription
                    },"> Nouveau membre ?"),
                    m("p.txt--grayed",{},"> Mot de passe oublié ?")
                ] )
            ]);
        };

        return component;
    });
})();
