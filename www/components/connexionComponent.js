/**
 * Created by kevin gosse on 08/07/2015.
 */

(function(){
    'use strict';

    define([
        'm'
    ], function(m){

        var component = {};

        component.controller = function(){};

        component.view = function(ctrl){
            return m(".page.cnx-page", [
                m(".cnx-logo-block", "sparted logo"),
                m(".cnx-button-wrapper", [
                    m("button.bblue.button.cnx-button",{},"Facebook login"),
                    m("div.gray", "ou"),
                    m("input.button.cnx-input[placeholder=Adresse e-mail]",{},"Inscription"),
                    m("input.button.cnx-input[placeholder=Mot de passe]",{},"Inscription"),
                    m("button.button.cnx-button",{},"Connexion")
                ]),
                m(".page-footer.bwhite", [
                    m("p.gray.pointer",{},"> Nouveau membre ?"),
                    m("p.gray.pointer",{},"> Mot de passe oublié ?")
                ] )
            ]);
        };

        return component;
    });
})();
