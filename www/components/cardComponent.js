/**
 * Created by kevin gosse on 23/07/2015.
 */


(function(){
    'use strict';

    define([
        'm',
        'components/simpleIconComponent',
        'components/calendarIconComponent'
    ], function(m, simpleIcon, calendarIcon){

        var component = {};

        component.controller = function(card, icon){
            var self = this;

            self.icons = {
                simpleIcon: simpleIcon,
                calendarIcon: calendarIcon
            };
        };

        component.view = function(ctrl, card){
            return m(".card",{style: {backgroundColor: card.background}}, [
                m(".card__name", card.name),
                m("h1.card__title", card.title),
                /*m("img.card__icon[src=assets/img/ico-card-examen.png]"),*/
                m(".card__icon", [
                    m.component(ctrl.icons[card.icon.type], card.icon.data)
                ]),
                m(".card__footer", "Touch to start")
            ]);
        };

        return component;
    });
})();
