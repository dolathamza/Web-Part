import React from 'react'
import HomeMain from './home'

const Main = ({home}) => {
    return (
        <main>
            {home && <HomeMain/>}

        </main>
    )
}

export default Main
