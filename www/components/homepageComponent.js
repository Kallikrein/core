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
                id: 0,
                name: "Training course",
                title: "Discipline 1 - stage 1",
                title2: "Discipline 1 - stage 1",
                background: "rgba(115,140,193,.6)",
                background2: "rgb(115,140,193)",
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
                id: 2,
                name: "Breaking news",
                title: "Nouveau mode de jeu",
                title2: "",
                background: "rgba(191,176,116,.7)",
                background2: "rgb(191,176,116)",
                icon: {
                    type: "simpleIcon",
                    data: {
                        src: "assets/img/ico-card-breakingnews.png"
                    }
                },
                zindex: 1,
                position: "next"
            };

            var card3 = {
                id: 3,
                name: "Training course",
                title: "Discipline 1 - stage 1",
                title2: "Discipline 1 - stage 1",
                background: "rgba(115,140,193,.6)",
                background2: "rgb(115,140,193)",
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
                id: 4,
                name: "Daily serie",
                title: "Mardi 31 Octobre",
                title2: "Mardi 31 Octobre",
                background: "rgba(238,66,68,.6)",
                background2: "rgb(238,66,68)",
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

            self.cards = [card, card2, card4];

            self.card = {
                name: "Breaking news",
                title: "Nouveau mode de jeu",
                background: "rgba(191,176,116,.7)",
                background2: "rgb(191,176,116)",
                icon: {
                    type: "simpleIcon",
                    data: {
                        src: "assets/img/ico-card-breakingnews.png"
                    }
                },
                zindex: 1,
                position: "next"
            };

            self.currentCard = self.cards.length - 1;
            self.bool = true;
            self.showNext = function() {
                /*                if (self.bool) {
                 Draggable.create('.card-current', {
                 type: 'rotation',
                 edgeResistance: 0.65,
                 bounds: "#home__body__cards",
                 lockAxis: true,
                 throwProps: true
                 });
                 console.log('Draggable');
                 }
                 self.bool = false;*/

                var tmp = (self.currentCard + 1) % (self.cards.length);
                self.cards[tmp].position = "next";
                self.cards[tmp].zindex = 1;

                self.cards[self.currentCard].position = "prev";
                self.cards[self.currentCard].zindex = 0;


                var current = self.currentCard != 0 ? self.currentCard - 1 : self.cards.length - 1;
                self.currentCard = current;

                self.cards[self.currentCard].position = "current";
                self.cards[self.currentCard].zindex++;
                self.doAnim = true;
                //self.tm.kill();
                //self.tm.pause(0);
                /*                self.tm.remove();
                 self.tm.restart();*/
                //self.handleCards(null, false);
            };

            self.showPrev = function() {
                self.doAnim = true;
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
            self.slider = m.prop(100);

            for (var i = 0; i < self.cards.length; ++i) {
                self.res.push(m.component(Card, self.cards[i]));
            }


            var updateSlider = function(){
                self.slider(self.tm.progress() * 100);
            };

            self.tm = new TimelineMax({onUpdate: updateSlider});
            self.doAnim = true;
            self.cardsShown = false;
            self.cardSelected = false;

            self.handleCards = function(element, isInit){

                if (!self.doAnim || self.cardSelected)
                    return;
                /*                Draggable.create(".card-current", {
                 type:"y",
                 throwProps:true,
                 onDragEnd:function() {
                 console.log("x velocity is: " + ThrowPropsPlugin.getVelocity(this, "x") + " and the duration is " + this.tween.duration() + " seconds.");
                 }
                 });*/
                if (!self.cardsShown)
                {
                    self.showCards();
                    return;
                }
                self.tm = new TimelineMax({onUpdate: updateSlider});
                var color = self.cards[self.currentCard].background;
                self.tm.to('.card-prev',.4,{opacity:.5, top: 0, backgroundColor: "#808080",
                    transform: "rotateX(30deg) translate3d(0vh, -1vh, -20vh)",
                    ease: Power2.easeOut }, 'card')
                    .to('.card-next',.4,{opacity:.5, top: 0, backgroundColor: "#808080",
                        transform: "rotateX(-30deg) translate3d(0vh, 1vh, -20vh)",
                        ease: Power2.easeOut }, 'card')
                    .to('.card-current',.8,{backgroundColor: color},'card')
                    .to('.card-current',.4,{opacity:1, top: 0, transform: "",
                        //backgroundColor: color,
                        ease: Power2.easeOut }, 'card')
                    .to('.card__body--current',.1,{opacity: 1, ease: Power2.easeOut}, 'card')
                    .to('.card__body--prev',.1,{opacity: 0, ease: Power2.easeOut}, 'card')
                    .to('.card__body--next',.1,{opacity: 0, ease: Power2.easeOut}, 'card');
            };

            self.showCards = function(){
                var tm = new TimelineMax({delay: 2});
                if (self.cards.length >= 3)
                {
                    var duration = .9;
                    var durationOpacity = .4;
                    var i = 0;
                    var card = self.cards[i];
                    //first appearance animation
                    tm.from('.card' + card.id, duration, {
                        opacity: 0, transform: "rotateX(-65deg) translate3d(0vh, -25vh, 35vh) scale(1.2)",
                        ease: Power2.easeOut
                    }, 'cardfirst')
                        .from('.card__body' + card.id,durationOpacity,{opacity: 1},'cardfirst');
                    for (i = 1; i <= self.cards.length - 2 ; ++i)
                    {
                        card = self.cards[i];
                        var prev = self.cards[i - 1];
                        //card-next animation
                        tm.to('.card' + prev.id, duration, {
                            opacity:.5, top: 0, backgroundColor: "#808080",
                            transform: "rotateX(-30deg) translate3d(0vh, 1vh, -20vh)",
                            ease: Power2.easeOut
                        },'card' + i)
                            .to('.card__body' + prev.id,durationOpacity,{opacity: 0},'card' + i)
                            //first appearance animation
                            .from('.card' + card.id, duration, {
                                opacity: 0, transform: "rotateX(-65deg) translate3d(0vh, -25vh, 35vh) scale(1.2)",
                                ease: Power2.easeOut
                            }, 'card' + i)
                            .from('.card__body' + card.id,durationOpacity,{opacity: 1},'card' + i);

                    }
                    card = self.cards[0];
                    var prev = self.cards[i - 1];
                    var current = self.cards[i];
                    // card-next animation
                    tm.to('.card' + prev.id, duration, {
                        opacity:.5, top: 0, backgroundColor: "#808080",
                        transform: "rotateX(-30deg) translate3d(0vh, 1vh, -20vh)",
                        ease: Power2.easeOut
                    },'card' + i)
                        .to('.card__body' + prev.id,durationOpacity,{opacity: 0},'card' + i)
                        .from('.card' + current.id, duration, {
                            opacity: 0, transform: "rotateX(-65deg) translate3d(0vh, -25vh, 35vh) scale(1.2)",
                            ease: Power2.easeOut
                        }, 'card' + i)
                        .from('.card__body' + current.id,durationOpacity,{opacity: 1},'card' + i)
                        .to('.card' + card.id, duration,{opacity:.5, top: 0, backgroundColor: "#808080",
                            transform: "rotateX(30deg) translate3d(0vh, -1vh, -20vh)",
                            ease: Power2.easeOut},'card' + i)
                        .to('.card__body' + card.id,durationOpacity,{opacity: 0},'card' + i);

                }
                self.cardsShown = true;
            };

            self.handleSlider = function(value)
            {
                self.doAnim = false;
                self.slider(value);
                self.tm.progress(value/100).pause();
            };

            self.playCard = function(){

                if (self.cardSelected)
                    return;

                self.cardSelected = true;

                var tm = new TimelineMax();
                var color = self.cards[self.currentCard].background;
                var color2 = self.cards[self.currentCard].background2;
                var duration = .5;
                var dt2 = .4;
                tm
                    .to('.card-current',duration,{
                        //transform: matrix(.9, 0, 0, .9, 0, 0)
                        scale: .9
                        //borderRadius: 0
                    },'test')
                    .to('.card-current',0,{
                        backgroundColor: 'rgba(238,66,68,0)'
                    },'test+=0.5')
                    .to('.home__body__central-block',0,{
                        backgroundColor: color,
                        opacity:1
                    },'test+=0.5')
                    .to('.home__body__central-block',1,{
                        opacity: 1,
                        backgroundColor: color2,
                        /*                        top: 0,
                         left: 0,*/
                        scale: 1,
                        borderRadius: 0
                        /*                        width: '100vw',
                         height: '100vh'*/
                    },'test+=0.55')
                    .fromTo('.central-block__card__name',dt2,{
                        top: "-3vh"
                    },{
                        opacity: 1,
                        top: 0
                    },'tx-=0.1')
                    .fromTo('.central-block__card__title',dt2,{
                        top: 0
                    },{
                        opacity: 1,
                        top: "3vh"
                    },'tx-=0.1')
                    .fromTo('.central-block__card__footer',dt2,{
                        bottom: 0
                    },{
                        opacity: 1,
                        bottom: "3vh"
                    },'tx-=0.1');
            };

        };

        component.view = function(ctrl){
            return m(".home", [
                m(".home__body",[
                    m(".home__body__logo", [
                        m("img.icon-kquiz[src=assets/img/logo-kquiz.png]")
                    ]),
                    m(".home__body__cards#home__body__cards",{config: ctrl.handleCards},ctrl.res),
                    /*        m('input.home__body__input[type="range"][name="points"][step=".1"]',{
                     oninput: m.withAttr("value", ctrl.handleSlider),
                     value: ctrl.slider()
                     }),*/
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
                    ]),
                    m(".home__body__central-block",{
                        onclick: ctrl.playCard
                    },[
                        m(".central-block__card",[
                            m(".central-block__card__body",[
                                m(".central-block__card__name", ctrl.cards[ctrl.currentCard].name),
                                m("h1.central-block__card__title", ctrl.cards[ctrl.currentCard].title2),
                                m(".central-block__card__center", []),
                                m(".central-block__card__footer",ctrl.cards[ctrl.currentCard].icon.data.message)
                            ])
                        ])
                    ])
                ])
            ]);
        };

        return component;
    });
})();
