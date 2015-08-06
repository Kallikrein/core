/**
 * Created by kevin gosse on 16/07/2015.
 */

(function(){
    'use strict';

     define([
        'm'
    ], function(m){

        var component = {};

        component.controller = function(transition, modifications){
            var self = this;
        };

        component.view = function(ctrl, transition, modifications){
            return m(".ins1",[

                m(".ins1__logo", " "),
                m(".ins1__header",[
                    m(".ins1__header__txt", "Ajouter votre photo")
                ]),
                m(".ins1__body", [
                    m(".ins1__body__gender", [
                        m(".ipt.ins1__body__gender__woman",{
                            onclick: modifications.bind(null,1)
                        },"Femme"),
                        m(".ipt.ins1__body__gender__man",{
                            onclick: modifications.bind(null,-1)
                        },"Homme")
                    ]),
                    m(".ins1__body__infos", "INFOS PROFESSIONNELLES"),
                    m(".ins1__body__name", [
                        m("input.ipt.ipt--half.ipt--marg-right.ipt--height8[placeholder=Centis]"),
                        m("input.ipt.ipt--half.ipt--height8[placeholder=Menant]")
                    ]),
                    m(".ins1__body__birthdate", [
                        m(".ins1__body__birthdate__txt", "Date de naissance :"),
                        m(".ins1__body__birthdate__ipts", [
                            m(".ins1__body__birthdate__day", [
                                m("input.ipt.ipt--day.ipt--height8[placeholder=JJ]")
                            ]),
                            m(".ins1__body__birthdate__month", [
                                m("input.ipt.ipt--month.ipt--height8[placeholder=MM]")
                            ]),
                            m(".ins1__body__birthdate__year", [
                                m("input.ipt.ipt--year.ipt--height8[placeholder=AAAA]")
                            ])
                        ]),
                        m(".ins1__body__btn", [
                            m("button.btn.btn--full",{
                                onclick: transition.bind(null, 1)
                            } ,"Suivant")
                        ])
                    ])
                ]),
                m(".bottom.ins1__footer", [])
            ]);
        };

        return component;
    });
})();
