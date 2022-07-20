import React from 'react';
import Link from 'next/link';

export default class CallToActionTwo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (

            <section className="cta-two wow fadeInUp" data-wow-animation-duration="1500ms"
                     style={{backgroundImage: `url(assets/images/imagess/8.png)`}}>
                <div className="container">
                    <h3>It’s Our Government Job to Project <br/>
                        Themselves And Others</h3>
                    <Link href="/contact">
                        <a className="thm-btn cta-two__btn">Track Your Symptoms</a>
                    </Link>
                </div>
            </section>
        )
    }
}