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
            return m(".page.ins-page", [
                m(".ins-logo-block", "sparted logo"),
                m(".ins-button-wrapper", [
                    m("button.bblue.button.ins-button",{},"Facebook login"),
                    m("div.gray", "ou"),
                    m("button.button.ins-button",{},"Inscription")
                ]),
                m(".ins-bottom.center", [
                    m("a.gray.pointer",{},"> Déjà membre ?")
                ] )
            ]);
        };

        return component;
    });
})();
