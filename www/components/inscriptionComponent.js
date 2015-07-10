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
            return m(".inscription", [
                m(".inscription__logo", "sparted logo"),
                m(".inscription__button-wrapper", [
                    m("button.btn.btn--large.btn--blue",{},"Facebook login"),
                    m("div.txt--grayed", "ou"),
                    m("button.btn.btn--large.btn--blue",{},"Inscription")
                ]),
                m(".bottom.inscription__footer", [
                    m("a.txt--grayed.csr--pointer",{},"> Déjà membre ?")
                ] )
            ]);
        };

        return component;
    });
})();
