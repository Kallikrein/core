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
            return m(".ins2", [
                m(".ins2__logo", " "),
                m(".ins2__header",[
                    m(".ins2__header__title", "VOTRE ORGANISATION :"),
                    m(".ins2__header__txt", "Veuillez saisir votre code " +
                    "démo afin de pouvoir sélectionner votre organisation")
                ]),
                m(".ins2__body", [
                    m("", [
                        m("input.ipt.ipt--half.ipt--marg-right[placeholder=France]",{},"Inscription"),
                        m("input.ipt.ipt--half[placeholder=75011][type=number]",{},"Inscription")
                    ])/*,
                    m("textarea.txtarea.txtarea--large"),
                    m("", [
                        m("span","Mon rôle:"),
                        m("select", [
                            m("option", "Formation")
                        ])
                    ])*/
                ])/*,
                m(".ins2__footer", [
                    m("p.gray.pointer",{},"> Nouveau membre ?"),
                    m("p.gray.pointer",{},"> Mot de passe oublié ?")
                ] )*/
            ]);
        };

        return component;
    });
})();
