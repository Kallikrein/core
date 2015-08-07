/**
 * Created by kevin gosse on 04/08/2015.
 */

(function(){
    'use strict';

    define([
        'm',
        'services/circularProgressBar'
    ], function(m, circle){


        //circle :
        //canvas,color,lineWidth,direction,speed,style,sAngle,eAngle,radius


        var component = {};

        component.controller = function(){
            var self = this;

            self.data = {
                question: 'Combien de gammes de produits Kérastase pour femme existent-t-il actuellement ?',
                answers:  ['Cinq', 'Sept', 'Treize'],
                counter:  10
            };

            self.showCircle = function(elem, isInit) {

                if (isInit)
                    return;

                setTimeout(function(){
                    var sAngle = 270;
                    var color = 'rgb(255,255,255)';
                    var lineWidth = 5;
                    var radius = 25;
                    //canvas,color,lineWidth,direction,speed,style,sAngle,eAngle,radius
                    var anim = circle(null, color, lineWidth, 3, 2, null, sAngle, null, radius);
                    var timeline = anim.getTimeline();

                    timeline.addCallback(function(){
                        var tl = new TimelineMax();
                        var duration = .4;
                        tl
                            .to('#canvas',duration,{
                                scale: 1.2
                            },'scale')
                            .to('.counter',duration,{
                                scale:   1.2,
                                opacity: 1
                            },'scale')
                            .to('#canvas',duration,{
                                scale: 1
                            },'scale2')
                            .to('.counter',duration,{
                                scale: 1
                            },'scale2');

                        tl.addCallback(function(){
                            var anim2 = circle(null, color, lineWidth, 4, 10,
                                null, sAngle, null, radius);
                            var timeline = anim2.getTimeline();
                            timeline.addCallback(function(){
                                var tl = new TimelineMax({
                                    onComplete: checkCounter
                                });
                                var duration = .5;
                                tl
                                    .to('.counter', duration, {
                                        scale:     1,
                                        autoAlpha: 1
                                    })
                                    .to('.counter',duration,{
                                        scale:     duration,
                                        autoAlpha: 0
                                    });

                            },'begin');
                            anim2.play();
                        });
                    });

                    anim.play();
                }, 1000);

            };

            function checkCounter(){
                if (self.data.counter == 0)
                    return;
                (new TimelineMax()).set(self.data, {counter: self.data.counter - 1});
                m.redraw();
                var duration = .5;
                var tl = new TimelineMax({
                    onComplete: checkCounter
                });
                tl
                    .to('.counter', duration, {
                        scale:     1,
                        autoAlpha: 1
                    })
                    .to('.counter',duration,{
                        scale:     duration,
                        autoAlpha: 0
                    });
            }
        };

        component.view = function(ctrl){
            return m(".content", [
                m(".content__top-section",[
                    m("canvas#canvas.content__top-section__canvas", {
                        config: ctrl.showCircle
                    }),
                    m(".content__top-section__counter.counter",ctrl.data.counter)
                ]),
                m(".content__middle-section",[]),
                m(".content__bottom-section",[
                    m(".content__bottom-section__question",[
                        m(".question", ctrl.data.question)
                    ]),
                    m(".content__bottom-section__answers",[
                        m(".answers",[
                            m(".answers__number", "1."),
                            m(".answers__txt", ctrl.data.answers[0])
                        ]),
                        m(".answers",[
                            m(".answers__number", "2."),
                            m(".answers__txt", ctrl.data.answers[1])
                        ]),
                        m(".answers",[
                            m(".answers__number", "3."),
                            m(".answers__txt", ctrl.data.answers[2])
                        ])
                    ])
                ])
            ]);
        };

        return component;
    });
})();
