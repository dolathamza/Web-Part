import React from 'react';
import Link from "next/link";

export default class Footer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i
                    className="fa fa-angle-up"></i></a>

                <div className="side-menu__block">
                    <div className="side-menu__block-overlay custom-cursor__overlay">
                        <div className="cursor"></div>
                        <div className="cursor-follower"></div>
                    </div>
                    <div className="side-menu__block-inner ">
                        <div className="side-menu__top justify-content-end">
                            <a href="#" className="side-menu__toggler side-menu__close-btn"><img
                                src="/assets/images/shapes/close-1-1.png" alt=""/></a>
                        </div>

                        <nav className="mobile-nav__container"></nav>
                        <div className="side-menu__sep"></div>
                        <div className="side-menu__content">


                            <div className="side-menu__social">
                                <a href="https://www.facebook.com/hamzi09/" className="fab fa-facebook-square"></a>
                                <a href="https://twitter.com/dolathamza8019" className="fab fa-twitter"></a>
                                <a href="https://www.instagram.com/dolat.hamza/" className="fab fa-instagram"></a>
                                <a href="www.youtube.com" className="fab fa-youtube"></a>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="site-footer-one site-footer-one__home-one">

                    <div className="site-footer-one__upper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer-widget footer-widget__about">
                                        <a href="index.html" className="footer-widget__logo">
                                            <img className="logos" width="70" src="/assets/images/12.png" alt=""/>
                                        </a>
                                        <h1 className={"BotMD"}>BotMD</h1>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="footer-widget footer-widget__links">
                                        <h3 className="footer-widget__title">Explore</h3>
                                        <div className="footer-widget__links-wrap">
                                            <ul className="list-unstyled footer-widget__links-list">
                                                <li><Link href="/about"><a>About</a></Link></li>
                                                {/*<li><Link href="/"><a>Doctors</a></Link></li>*/}
                                                <li><Link href="/prevention"><a>Prevention</a></Link></li>
                                                <li><Link href="/contact"><a>Track Symptoms</a></Link></li>
                                                <li><Link href="/covidStats"><a>View Covid Stats</a></Link></li>
                                            </ul>
                                            <ul className="list-unstyled footer-widget__links-list">
                                                <li><Link href="/faq"><a>FAQs</a></Link></li>
                                                {/*<li><Link href="/about"><a>Privacy Policy</a></Link></li>*/}
                                                {/*<li><Link href="/about"><a>Terms of Use</a></Link></li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-widget footer-widget__contact">
                                        <h3 className="footer-widget__title">Contact</h3>
                                        <p className={"pp"}><a href="tel:888-999-0000">+923081152683</a></p>
                                        <p className={"pp"}><a href="mailto:needhelp@vimns.com">fyp@comsats.edu.pk</a>
                                        </p>
                                        <p className={"pp"}>Comsats University Islamabad <br/> Pakistan</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 d-flex">
                                    <div className="footer-widget my-auto">
                                        <div className="footer-widget__social">
                                            <a href="https://www.facebook.com/hamzi09/" className="fab fa-facebook-square"></a>
                                            <a href="https://twitter.com/dolathamza8019" className="fab fa-twitter"></a>
                                            <a href="https://www.instagram.com/dolat.hamza/" className="fab fa-instagram"></a>
                                            <a href="www.youtube.com" className="fab fa-youtube"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer-one__bottom">
                        <div className="container">
                            <p>© Copyright 2022 by <a href="#">BotMD </a></p>
                        </div>
                    </div>
                </footer>

            </div>

        )
    }
}