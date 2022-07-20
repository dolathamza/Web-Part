import React from 'react';

export default class AboutThree extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (

            <section className="about-three">
                <div className="container">
                    <div className="block-title text-center">
                        <p>More Know About BotMD</p>
                        <h3>Technologies Used</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about-three__image">
                                <img src="/assets/images/imagess/Cross.png" alt=""/>
                            </div>
                            <div className="about-three__title">
                                <h3>We’re Always Here to Protect You From Virus</h3>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-three__image">
                                <img src="/assets/images/imagess/12.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="text-center about-three__text">
                        <p style={{
                            color: '#fff',
                            fontSize: '15px',
                            letterSpacing: '1.2px',
                            textTransform: 'capitalize',
                        }} className={"bannerP"}>The COVID-19 pandemic led to an increase in app development and
                            utilization. We have observed
                            that the number of medical, healthcare apps on Google Play increased drastically as tech
                            companies helped track diseases worldwide while also providing treatment options for
                            patients
                            around the globe. <br/>
                            The medical industry is becoming more and more aware of the need to track diseases
                            worldwide.
                            Several apps are now available that provide COVID-19 services but only serve one specific
                            domain, such as tracking your condition or providing help remotely by connecting you with a
                            doctor via a video chat app like FaceTime <br/>
                            A system should not just be an application on our smartphones--it needs much greater
                            capabilities
                            than this because it will become "your" friend who lives inside all accessible devices we
                            own home
                            appliances, cars, etc., helping from anywhere at any time when needed! With this system, you
                            will
                            be able to communicate with your Bot and help set up a profile for yourself. The AI will
                            also detect
                            COVID-19 symptoms by having conversations about what is going on in the user world so that
                            when things arise from their end of the spectrum, we can get them tested as soon as
                            possible! We
                            aim to create a platform where users can share their meals, chat with friends and family
                            members
                            who are also on the app—all while tracking your isolation. Our proposed system will act as
                            social
                            media by allowing different people worldwide to interact within one interface!
                            With an ever-growing need for virtual health assistants, we propose this project to operate
                            during
                            the pandemic efficiently. Our Bot will assist users throughout their journey using Machine
                            Learning-based technologies, so that interacting with our application becomes easy
                            regardless of
                            whether you are not familiar or uncomfortable around tech like us!</p>
                    </div>
                </div>
            </section>
        )
    }
}