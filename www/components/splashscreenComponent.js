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
            return m(".page", [
                m(".button-wrapper", [
                    m("p", "logo sparted"),
                    m("p", "second logo")
                ])
            ]);
        };

        return component;

    });
})();
