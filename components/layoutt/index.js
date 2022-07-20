import React from 'react'
import style from './style.module.scss'
import Main from '../main'
import Header from "../header";

const Layout = ({home, howToProtect, children}) => {
    return (
        <div className={style.layout}>
            <Header/>
            <Main home={home} howToProtect={howToProtect}>
                {children}
            </Main>

        </div>
    )
}

export default Layout
