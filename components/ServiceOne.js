import React from 'react';

export default class ServiceOne extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="service">
                <section className="service-one">
                    <div className="container">
                        <div className="block-title text-center">
                            <p className={"bannerP"} style={styles.para}>Virus Arround the Globe </p>
                            <h3>How Virus is Spreading</h3>
                        </div>

                        <div className="row no-gutters">
                            <div className="col-lg-4 wow fadeInLeft" data-wow-animation-duration="1500ms">
                                <div className="service-one__single">
                                    <div className="service-one__inner">
                                        <div className="service-one__image">
                                            <img className="imagee" src="/assets/images/5.png" alt=""/>
                                        </div>
                                        <div className="service-one__content">
                                            <h3><a href="#">Close Contact With an Infected Person </a></h3>
                                            <p className={"bannerP"}>COVID-19 Can Spread from person to person. This can
                                                happen in close contact with an infected person. With BotMD you can get
                                                in touch with people who are going through the same thing as you
                                                are </p>

                                            <a href="#" className="service-one__link"><i
                                                className="vimns-icon-front"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeInUp" data-wow-animation-duration="1500ms">
                                <div className="service-one__single">
                                    <div className="service-one__inner">
                                        <div className="service-one__image">
                                            <img className={"imagee"} src="assets/images/6.png" alt=""/>
                                        </div>
                                        <div className="service-one__content">
                                            <h3><a href="#">No Isolation </a></h3>
                                            <p className={'bannerP'}>
                                                Isolation is the best way to prevent the spread of COVID-19. However, it
                                                is not always possible to isolate yourself. BotMD is here to help you,
                                                with its symptom checker, Intelligent and Responsive AI chatbot to make
                                                you not feel alone.
                                            </p>
                                            <a href="#" className="service-one__link"><i
                                                className="vimns-icon-front"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeInRight" data-wow-animation-duration="1500ms">
                                <div className="service-one__single">
                                    <div className="service-one__inner">
                                        <div className="service-one__image">
                                            <img className={"imagee"} src="/assets/images/7.png" alt=""/>
                                        </div>

                                        <div className="service-one__content">
                                            <h3><a href="#">Getting No Treatment, Making Immune System Weak </a></h3>
                                            <p className={'bannerP'}>
                                                Taking medication to make your immune system can help you recover from
                                                COVID-19 quickly, but if you don’t get treatment, you may recover a bit
                                                late from COVID-19.
                                            </p>
                                            <a href="#" className="service-one__link"><i
                                                className="vimns-icon-front"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const styles = {
    para: {
        fontSize: '70px',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',


    }
}