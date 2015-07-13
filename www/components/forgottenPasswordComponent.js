/**
 * Created by kevin gosse on 13/07/2015.
 */


(function(){
    'use strict';

    define([
        'm'
    ], function(m){

        var component = {};

        component.controller = function(transition){
            var self = this;

            self.transition = m.prop(0);

            self.connexion = function(){
                transition(1);
            }
        };

        component.view = function(ctrl, transition){
            return m(".fpw", {class: ctrl.panel}, [
                m(".bottom.fpw__footer",{},[
                    m("p.txt--grayed", {
                        onclick: transition.bind(null, 1)
                    }, "> Retour")
                ])
            ]);
        };

        return component;
    });
})();
