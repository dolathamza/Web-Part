import React from 'react';

export default class FaqPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (

            <section style={{marginBottom:50}} className="faq-one faq-one__faq-page">
                <div className="container">
                    <div className="block-title text-center">
                        <p>Frequently Asked Questions </p>
                        <h3>Have any question?</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                <div className="accrodion active">
                                    <div className="accrodion-title">
                                        <h4>What Are The Coronavirus Symptoms?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Symptoms for Corona Virus may include Most common symptoms:

                                                fever
                                                cough
                                                tiredness
                                                loss of taste or smell
                                                Less common symptoms:
                                                sore throat
                                                headache
                                                aches and pains
                                                diarrhoea
                                                a rash on skin, or discolouration of fingers or toes
                                                red or irritated eyes
                                                Serious symptoms:
                                                difficulty breathing or shortness of breath
                                                loss of speech or mobility, or confusion
                                                chest pain
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion ">
                                    <div className="accrodion-title">
                                        <h4>Why We Should Stay At Home?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>By staying at home during this period of isolation, you are not only protecting others, you are protecting yourself. This way, you are not exposed to others who may be carriers outside of the home. When you observe the stay-at-home order, you decrease the chance of spreading the disease. </p>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="accrodion ">*/}
                                {/*    <div className="accrodion-title">*/}
                                {/*        <h4>COVID-19 Illness can Affect Your Lungs?</h4>*/}
                                {/*    </div>*/}
                                {/*    <div className="accrodion-content">*/}
                                {/*        <div className="inner">*/}
                                {/*            <p>There are many variations of passages of available but majority have*/}
                                {/*                alteration in*/}
                                {/*                some by inject humour or random . </p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="accrodion ">*/}
                                {/*    <div className="accrodion-title">*/}
                                {/*        <h4>Find Out How We Are Monitoring Corona?</h4>*/}
                                {/*    </div>*/}
                                {/*    <div className="accrodion-content">*/}
                                {/*        <div className="inner">*/}
                                {/*            <p>There are many variations of passages of available but majority have*/}
                                {/*                alteration in*/}
                                {/*                some by inject humour or random . </p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
                                <div className="accrodion ">
                                    <div className="accrodion-title">
                                        <h4>What Are The Coronavirus Preventions?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Wear a mask.
                                                Save lives.
                                                Wear a mask
                                                Clean your hands
                                                Keep a safe distance </p>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="accrodion active">*/}
                                {/*    <div className="accrodion-title">*/}
                                {/*        <h4>Why We Should Stay At Home?</h4>*/}
                                {/*    </div>*/}
                                {/*    <div className="accrodion-content">*/}
                                {/*        <div className="inner">*/}
                                {/*            <p>There are many variations of passages of available but majority have*/}
                                {/*                alteration in*/}
                                {/*                some by inject humour or random . </p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="accrodion ">*/}
                                {/*    <div className="accrodion-title">*/}
                                {/*        <h4>COVID-19 Illness can Affect Your Lungs?</h4>*/}
                                {/*    </div>*/}
                                {/*    <div className="accrodion-content">*/}
                                {/*        <div className="inner">*/}
                                {/*            <p>There are many variations of passages of available but majority have*/}
                                {/*                alteration in*/}
                                {/*                some by inject humour or random . </p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="accrodion ">*/}
                                {/*    <div className="accrodion-title">*/}
                                {/*        <h4>Find Out How We Are Monitoring Corona?</h4>*/}
                                {/*    </div>*/}
                                {/*    <div className="accrodion-content">*/}
                                {/*        <div className="inner">*/}
                                {/*            <p>There are many variations of passages of available but majority have*/}
                                {/*                alteration in*/}
                                {/*                some by inject humour or random . </p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}