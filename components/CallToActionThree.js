import React from 'react';

export default class CallToActionThree extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (

            <section className="cta-three">
                <img src="/assets/images/shapes/about-bg-1-1.png" className="cta-three__bg" alt=""/>
                <div className="container">
                    <div className="inner-container">
                        <div className="cta-three__icon">
                            <i className="vimns-icon-alert"></i>
                        </div>
                        <div className="cta-three__content">
                            <h3>Coronavirus disease COVID-19 Alert</h3>
                            <div className="cta-three__btn-block">
                                <a href="/about" className="cta-three__btn">More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}