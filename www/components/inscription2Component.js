/**
 * Created by kevin gosse on 09/07/2015.
 */

(function(){
    'use strict';

    define([
        'm'
    ], function(m){

        var component = {};

        component.controller = function(){};

        component.view = function(ctrl){
            return m(".page.ins2-page", [
                m(".ins2-logo-block", "sparted logo"),
                m(".ins2-header",[
                    m(".ins2-header-title.center", "Votre organisation :"),
                    m(".ins2-header-text.center", "Veuillez saisir votre code " +
                    "démo afin de pouvoir sélectionner votre organisation")
                ]),
                m(".ins2-button-wrapper", [
                    m("input.button.ins2-input.ins2-input1",{},"Inscription"),
                    m("input.button.ins2-input",{},"Inscription"),
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
