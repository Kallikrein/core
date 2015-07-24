/**
 * Created by kevin gosse on 23/07/2015.
 */

(function(){
    'use strict';

    define([
        'm',
        'components/cardComponent'
    ], function(m, card){

        var component = {};

        component.controller = function(){
            var self = this;

            self.card = {
                name: "Examen",
                title: "Discipline 1 - stage 1",
                background: "rgba(115,140,193,.6)",
                icon: {
                    type: "simpleIcon",
                    data: {
                        src: "assets/img/ico-card-examen.png"
                    }
                }
            };

            self.card2 = {
                name: "Breaking news",
                title: "Nouveau mode de jeu",
                background: "rgba(191,176,116,.7)",
                icon: {
                    type: "simpleIcon",
                    data: {
                        src: "assets/img/ico-card-breakingnews.png"
                    }
                }
            };

            self.card3 = {
                name: "Daily serie",
                title: "Mardi 31 Octobre",
                background: "rgba(238,66,68,.6)",
                icon: {
                    type: "calendarIcon",
                    data: {
                        src: "assets/img/ico-card-dailyserie_2x.png",
                        message: "5/5 left"
                    }
                }
            }

        };

        component.view = function(ctrl){
            return m(".home", [
                m(".home__body",[
                    m(".home__body__logo", [
                        m("img.icon-kquiz[src=assets/img/logo-kquiz.png]")
                    ]),
                    m(".home__body__cards",[
                        m.component(card, ctrl.card3)
                    ]),
                    m(".bottom.home__body__footer",[
                        m(".home__body__footer__refresh",[
                            m("img.icon-refresh[src=assets/img/ico-refresh-white.png]"),
                            m(".refresh-txt","Replay")
                        ]),
                        m(".home__body__footer__library",[
                            m("img.icon-library[src=assets/img/ico-library-white.png]"),
                            m(".library-txt","Library")
                        ])
                    ])
                    /*      m(".home__menu-icon",[
                     m("img[src=assets/img/ico-menu-white.png]")
                     ])*/
                ])
            ]);
        };

        return component;
    });
})();
