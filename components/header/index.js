import React from 'react'
import Link from 'next/link'

import style from './style.module.scss'
import {Image} from "antd";

const Header = () => {
    return (
        <nav className={style.header}>
            <Link href="../../covidStats">
                <div className={style.titleContainer}>
                    {/*<h1 className={style.title}>COVID-19 Tracker</h1>*/}
                    <Image src="/assets/images/12.png" width={50} alt={"Logo Here"} className={style.logo}/>
                    <h1 className={style.title}>BotMD COVID-19 Tracker</h1>
                </div>
            </Link>


        </nav>
    )
}


export default Header
