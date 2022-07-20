import React from 'react';

export default class AboutTwo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (

            <section className="about-two">
                <img src="/assets/images/imagess/9.png" className="about-two__moc wow fadeInRight imagesss"
                     data-wow-animation-duration="1500ms" alt=""/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <p className={'det'} style={styles.det}>Coronavirus Disease (COVID-19)</p>
                                    <h3>The Coronavirus Wordlwide <br/> Situation reports</h3>
                                </div>

                                <div className="about-two__icon-wrap">
                                    <div className="about-two__icon-single">
                                        <div className="about-two__icon">
                                            <i className="vimns-icon-screw"></i>
                                        </div>
                                        <div className="about-two__icon-text">
                                            <h3>Stay <br/> Informed</h3>
                                        </div>
                                    </div>
                                    <div className="about-two__icon-single">
                                        <div className="about-two__icon">
                                            <i className="vimns-icon-work"></i>
                                        </div>
                                        <div className="about-two__icon-text">
                                            <h3>New <br/> Updates</h3>
                                        </div>
                                    </div>
                                </div>
                                <p className={'bannerP'} style={styles.bannerP}>Covid-19 is a global pandemic affecting
                                    many countries around the world.
                                    There are many ways to protect yourself and others from the virus, and
                                    some are as simple as keeping a safe distance from others.

                                    Stay informed and follow the advice of your local health authority.
                                    If you have mild symptoms, such as a cough, runny nose, and fever,
                                    call your doctor.

                                    Our team is working to provide you with the latest information on the
                                    situation.

                                    Stay safe!
                                </p>
                                <div className="about-two__btn-block">
                                    <a href="/pages/covidStats.js" className="thm-btn btn-2" style={styles.btn2}>View
                                        Covid Stats</a>
                                    {/*<a href="#" className="thm-btn about-two__btn-2">Download Reports</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const styles = {
    det: {
        fontSize: '30px',
        fontWeight: 'normal',
        color: '#fff',


    },
    bannerP: {
        fontSize: '15px',
        fontWeight: 'normal',
        color: '#fff',
        lineHeight: '1.5',
        letterSpacing: '1px',

    },
    btn2:
        {

            backgroundImage: '-webkit-gradient(linear, left top, right top, from(rgba(128, 0, 128, 1)), to(rgba(0, 0, 0, 0.8)))',
            border: '1px solid #000',
            boxShadow: '0px 0px 10px #000',
            borderRadius: '5px',

        }
}