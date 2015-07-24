/**
 * Created by kevin gosse on 23/07/2015.
 */

(function(){
    'use strict';

    define([
        'm'
    ], function(m){

        var component = {};

        component.controller = function(data){
            var self = this;

        };

        component.view = function(ctrl, data){
            return m("img.sicon", {
                src: data.src
            });

        };

        return component;
    });
})();

