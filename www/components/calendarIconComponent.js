/**
 * Created by kevin gosse on 24/07/2015.
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
            return m(".cicon", [
                m("img.cicon__img", {
                    src: data.src
                }),
                m(".cicon__message",data.message),
                m(".cicon__month","OCT."),
                m(".cicon__day","31")
            ]);
        };

        return component;
    });
})();
