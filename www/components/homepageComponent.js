/**
 * Created by kevin gosse on 23/07/2015.
 */

(function(){
    'use strict';

    define([
        'm',
        'components/cardComponent'
    ], function(m, Card){

        var component = {};

        component.controller = function(){
            var self = this;

            var card = {
                name: "Training course",
                title: "Discipline 1 - stage 1",
                background: "rgba(115,140,193,.6)",
                icon: {
                    type: "simpleIcon",
                    data: {
                        src: "assets/img/ico-card-examen.png"
                    }
                },
                zindex: 0,
                position: "prev",
                is_current: false,
                is_previous: false,
                is_next: false
            };

            var card2 = {
                name: "Breaking news",
                title: "Nouveau mode de jeu",
                background: "rgba(191,176,116,.7)",
                icon: {
                    type: "simpleIcon",
                    data: {
                        src: "assets/img/ico-card-breakingnews.png"
                    }
                },
                zindex: 1,
                position: "next"
                /*                is_current: false,
                 is_previous: false,
                 is_next: false*/
            };

            var card3 = {
                name: "Training course",
                title: "Discipline 1 - stage 1",
                background: "rgba(115,140,193,.6)",
                icon: {
                    type: "simpleIcon",
                    data: {
                        src: "assets/img/ico-card-examen.png"
                    }
                },
                zindex: 2,
                position: "next"
                /*                is_current: false,
                 is_previous: false,
                 is_next: false*/
            };

            var card4 = {
                name: "Daily serie",
                title: "Mardi 31 Octobre",
                background: "rgba(238,66,68,.6)",
                icon: {
                    type: "calendarIcon",
                    data: {
                        src: "assets/img/ico-card-dailyserie_2x.png",
                        message: "5/5 left"
                    }
                },
                zindex: 3,
                position: "current"
                /*                is_current: false,
                 is_previous: false,
                 is_next: false*/
            };

            self.cards = [card, card2, card3, card4];
            self.currentCard = self.cards.length - 1;

            self.showNext = function() {

                var tmp = (self.currentCard + 1) % (self.cards.length);
                self.cards[tmp].position = "next";
                self.cards[tmp].zindex = 1;

                self.cards[self.currentCard].position = "prev";
                self.cards[self.currentCard].zindex = 0;


                var current = self.currentCard != 0 ? self.currentCard - 1 : self.cards.length - 1;
                self.currentCard = current;

                self.cards[self.currentCard].position = "current";
                self.cards[self.currentCard].zindex++;
            };

            self.showPrev = function() {
                self.cards[self.currentCard].position = "next";
                self.cards[self.currentCard].zindex--;

                var current = (self.currentCard + 1) % (self.cards.length);

                self.cards[current].position = "current";
                self.cards[current].zindex = self.cards.length - 1;

                var tmp = (current + 1) % (self.cards.length);
                self.cards[tmp].position = "prev";
                self.cards[tmp].zindex = 0;

                self.currentCard = current;
            };

            self.res = [];

            for (var i = 0; i < self.cards.length; ++i) {
                self.res.push(m.component(Card, self.cards[i]));
            }
        };

        component.view = function(ctrl){
            return m(".home", [
                m(".home__body",[
                    m(".home__body__logo", [
                        m("img.icon-kquiz[src=assets/img/logo-kquiz.png]")
                    ]),
                    m(".home__body__cards",ctrl.res),
                    m(".bottom.home__body__footer",[
                        m(".home__body__footer__refresh",{
                            onclick: ctrl.showPrev
                        },[
                            m("img.icon-refresh[src=assets/img/ico-refresh-white.png]"),
                            m(".refresh-txt","Replay")
                        ]),
                        m(".home__body__footer__library",{
                            onclick: ctrl.showNext
                        },[
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
