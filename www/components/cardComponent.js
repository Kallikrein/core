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

        component.controller = function(card){
            var self = this;

            self.icons = {
                simpleIcon: simpleIcon,
                calendarIcon: calendarIcon
            };
        };

        component.view = function(ctrl, card){

            return m(".card",{
                style: {
                    backgroundColor:  card.background,
                    zIndex: ("" + card.zindex)
                },
                class: "card-" + card.position + " card" + card.id
            },[
                m(".card__body", {
                    class: "card__body--" + card.position + " card__body" + card.id
                },[
                    m(".card__name", card.name),
                    m("h1.card__title", card.title),
                    m(".card__icon", [
                        m.component(ctrl.icons[card.icon.type], card.icon.data)
                    ]),
                    m(".card__footer", "Touch to start")
                ])
            ]);
        };


        return component;
    });
})();
