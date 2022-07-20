import React from 'react';

export default class Team extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (

            <section className="team-one">
                <div className="container">
                    <div className="team-one__sep"></div>
                    <div className="block-title text-center">
                        <p className={"bannerP"} style={{
                            fontSize: 70,
                            color: "#fff"
                        }}>Meet the Team</p>
                        <h3 style={{color: "#fff"}}>FYP Partners</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="000ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/imagess/13.jpeg" alt=""/>
                                </div>
                                <h3 style={{fontSize: 60, color: "#fff"}}>Dolat Hamza</h3>
                                <h3 style={{fontSize: 40, color: "#fff"}}>FA18-BCS-036</h3>
                                <p className={"bannerP"} style={{
                                    fontSize: 25,
                                    color: "#fff"
                                }}>Web Developer</p>
                                <div className="team-one__social">
                                    <a target={"_blank"} href="https://github.com/Dolat-Hamza"  className="fab fa-github"></a>
                                    <a target={"_blank"} href="https://twitter.com/dolathamza8019" className="fab fa-twitter"></a>
                                    <a target={"_blank"} href="https://www.linkedin.com/in/dolat-hamza-37031116a/" className="fab fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="100ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/imagess/16.png" alt=""/>
                                </div>
                                <h3 style={{fontSize: 60, color: "#fff"}}>Mr. Muhammad Rashid Mukhtar</h3>
                                <h3 style={{fontSize: 40, color: "#fff"}}>Assistant Professor</h3>
                                <p className={"bannerP"} style={{
                                    fontSize: 25,
                                    color: "#fff"
                                }}>Supervisor for Covid Companion</p>
                                <div className="team-one__social">
                                    <a target={"_blank"} href="https://github.com/tekmode" className="fab fa-github"></a>
                                    <a target={"_blank"} href="https://twitter.com/mrashidmukhtar" className="fab fa-twitter"></a>
                                    <a target={"_blank"} href="https://www.linkedin.com/in/muhammad-rashid-mukhtar-97159870/" className="fab fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="100ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/imagess/15.png" alt=""/>
                                </div>
                                <h3 style={{fontSize: 60, color: "#fff"}}>Abdul Rehman</h3>
                                <h3 style={{fontSize: 40, color: "#fff"}}>FA18-BCS-003</h3>
                                <p className={"bannerP"} style={{
                                    fontSize: 25,
                                    color: "#fff"
                                }}>Mobile App Developer</p>
                                <div className="team-one__social">
                                    <a target={"_blank"} href="https://github.com/abdulrehman04" className="fab fa-github"></a>
                                    <a target={"_blank"} href="#" className="fab fa-linkedin"></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}