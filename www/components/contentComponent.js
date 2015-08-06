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
                answers:  ['Cinq', 'Sept', 'Treize']
            };

            self.showCircle = function() {
                setTimeout(function(){
                    circle(null, "rgb(255,255,255)",5, true, 2, null, -270, 180, 20)
                        .play();
                }, 1000);
            };
        };

        component.view = function(ctrl){
            return m(".content", [
                m(".content__top-section",[
                    m("canvas#canvas.content__top-section__canvas", {
                        config: ctrl.showCircle
                    })
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
