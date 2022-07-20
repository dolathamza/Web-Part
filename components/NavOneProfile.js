import React from 'react';
import Link from 'next/link';

import {logOUt} from "../fetchUserDetails";
import {logout_user} from "../redux/types";
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';

export default function NavOneProfile() {
    var dispatch = useDispatch();
    var router = useRouter();
    const handleLogOut = async () => {
        try {
            const booloean = await logOUt();
            if (booloean.success) {
                dispatch(logout_user());
                router.push('/login');
            }
        } catch (error) {
            console.log('error...', error);
        }
    }

    return (

        <header className="site-header-one">
            <nav className="main-nav__one stricky">
                <div className="container-fluid">
                    <div className="main-nav__logo-box">
                        <Link href="/">
                            <img className="logo" width={20} src="/assets/images/12.png" alt="Logo"/>
                        </Link>
                        <a className={"bannerP"} href="#" className="side-menu__toggler"><i className="fa fa-bars"></i></a>
                    </div>
                    <div className="main-nav__main-navigation">
                        <ul className=" main-nav__navigation-box">
                            <li className="dropdown">
                                <a className={"bannerP"} href="/">Home</a>

                            </li>
                            <li>
                                <Link href="/about"><a className={"bannerP"}>About</a></Link>
                            </li>
                            <li>
                                <Link href="/prevention"><a className={"bannerP"}>Preventions</a></Link>
                            </li>
                            <li>
                                <Link href="/faq"><a className={"bannerP"}>FAQs</a></Link>
                            </li>


                            <li>
                                <Link href="/contact"><a className={"bannerP"}>Track Covid Symptoms</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="main-nav__cta">
                        <div className="main-nav__cta-icon">
                            <i className="vimns-icon-phone"></i>
                        </div>
                        <div className="main-nav__cta-content">
                            <h3><a  href="tel:308-1152-683">+923081152683</a></h3>
                            <p>Helpline</p>
                        </div>
                    </div>
                    <div className="main-nav__right">
                        <a className="main-nav__btn bannerP">
                            <button style={styles.buttton} onClick={handleLogOut}>Logout</button>
                        </a>
                    </div>
                </div>
            </nav>

        </header>
    )
}


const styles = {
    buttton: {
        backgroundColor: 'rgba(0,0,255,0)',
        border: 'none',
        padding: '5px',
        margin: '5px',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        outline: 'none',
        transition: 'all 0.3s ease-in-out',
        ':hover': {
            backgroundColor: '#000',
            color: '#fff',
            border: '1px solid #fff',
            cursor: 'pointer',
        }
    }
}