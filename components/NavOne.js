import React from 'react';
import Link from 'next/link';

export default class NavOne extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {


    }

    render() {
        return (

            <header className="site-header-one">
                <nav className="main-nav__one stricky">
                    <div className="container-fluid">
                        <div className="main-nav__logo-box">
                            <Link href="/">
                                <img className="logo" width={20} src="/assets/images/12.png" alt="Logo"/>
                            </Link>
                            <a href="#" className="side-menu__toggler"><i className="fa fa-bars"></i></a>
                        </div>
                        <div className="main-nav__main-navigation">
                            <ul className=" main-nav__navigation-box">
                                <li className="dropdown">
                                    <a className={"bannerP"} href="/">Home</a>

                                </li>
                                <li>
                                    <Link className={"bannerP"} href="/about"><a className={"bannerP"}>About</a></Link>
                                </li>
                                <li>
                                    <Link className={"bannerP"} href="/prevention"><a
                                        className={"bannerP"}>Preventions</a></Link>
                                </li>
                                <li>
                                    <Link className={"bannerP"} href="/faq"><a className={"bannerP"}>FAQs</a></Link>
                                </li>

                                <li className="dropdown">
                                    <Link className={"bannerP"} href="/covidStats"><a className={"bannerP"}>Covid
                                        Stats</a></Link>

                                </li>
                                <li>
                                    <Link className={"bannerP"} href="/contact"><a
                                        className={"bannerP"}>Track Symptoms</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main-nav__cta">
                            <div className="main-nav__cta-icon">
                                <i className="vimns-icon-phone"></i>
                            </div>
                            <div className="main-nav__cta-content">
                                <h3><a href="tel:308-1152-683">+923081152683</a></h3>
                                <p>Helpline</p>
                            </div>
                        </div>
                        <div className="main-nav__right">

                            <a className="main-nav__btn" href={"/Profile"}>Profile</a>

                        </div>
                    </div>
                </nav>

            </header>
        )
    }
}

