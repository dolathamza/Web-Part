import React from 'react';
import Layout from "./Layout";

export default class PreventionTwo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Layout>
                <section className="prevention-one prevention-one__prevention-page">
                    <div className="container">
                        <div className="block-title text-center">
                            <p>List of All Preventions </p>
                            <h3 style={{color:"white"}}>Checkout Our Main Precaution</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="prevention-one__box boxxes">
                                    <div className="prevention-one__box-top">
                                        <h3>Things You Should Do</h3>
                                    </div>
                                    <div className="prevention-one__box-bottom">
                                        <div className="prevention-one__single">
                                            <div className="prevention-one__icon">
                                                <div style={{backgroundColor: "#000"}}
                                                     className="prevention-one__icon-inner">
                                                    <img style={{backgroundColor: "#000"}}
                                                         src="https://img.freepik.com/free-vector/diet-plan-schedule_3446-617.jpg?t=st=1652816429~exp=1652817029~hmac=7e809524578d34860b6fa0eeb1f85f757170ebb187ec0cd9336f80321eb260d4&w=826"
                                                         alt=""/>
                                                </div>
                                            </div>
                                            <div className="prevention-one__content">
                                                <h3 style={{color:"white"}}>Take Healthy Diet </h3>
                                                <p></p>
                                            </div>
                                        </div>
                                        <div className="prevention-one__single">
                                            <div className="prevention-one__icon">
                                                <div style={{backgroundColor:"black"}} className="prevention-one__icon-inner">
                                                    <img
                                                        src="https://img.freepik.com/free-vector/vaccination-cartoon-poster_1284-71605.jpg?t=st=1652816517~exp=1652817117~hmac=a5368123fc97fbaeb1a8f51e1d3253d154973eb65b5bbe0a939ab5bd73d8bda0&w=1380"
                                                        alt=""/>
                                                </div>
                                            </div>
                                            <div className="prevention-one__content">
                                                <h3 style={{color:"white"}}>Get Vaccinated</h3>
                                                {/*<p>There are many of passages of lorem Ipsum but the available majority.</p>*/}
                                            </div>
                                        </div>
                                        <div className="prevention-one__single">
                                            <div className="prevention-one__icon">
                                                <div style={{backgroundColor:"black"}} className="prevention-one__icon-inner">
                                                    <img
                                                        src="https://img.freepik.com/free-vector/workout-concept-illustration_114360-1065.jpg?t=st=1652816632~exp=1652817232~hmac=9a445f82d29794eb9d1436bf0323f0d8044570d2cbc043923bb75d9b20b38190&w=826"
                                                        alt=""/>
                                                </div>
                                            </div>
                                            <div className="prevention-one__content">
                                                <h3 style={{color:"white"}}>Excercise Daily </h3>
                                                {/*<p>There are many of passages of lorem Ipsum but the available majority.</p>*/}
                                            </div>
                                        </div>
                                        {/*<div className="prevention-one__single">*/}
                                        {/*    <div className="prevention-one__icon">*/}
                                        {/*        <div style={{backgroundColor:"black"}} className="prevention-one__icon-inner">*/}
                                        {/*            <img src="/assets/images/imagess/7.png" alt=""/>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="prevention-one__content">*/}
                                        {/*        <h3>Wash Your Hands 20 Seconds </h3>*/}
                                        {/*        <p>There are many of passages of lorem Ipsum but the available majority.</p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="prevention-one__box">
                                    <div className="prevention-one__box-top">
                                        <h3>Things You Shouldn't Do</h3>
                                    </div>
                                    <div className="prevention-one__box-bottom">
                                        <div className="prevention-one__single">
                                            <div className="prevention-one__icon">
                                                <div style={{backgroundColor:"black"}} className="prevention-one__icon-inner">
                                                    <img src="/assets/images/13.png" alt=""/>
                                                </div>
                                            </div>
                                            <div className="prevention-one__content">
                                                <h3 style={{color:"white"}}>Don't Eat Raw And Unhealthy Foods </h3>
                                                {/*<p>There are many of passages of lorem Ipsum but the available majority.</p>*/}
                                            </div>
                                        </div>
                                        <div className="prevention-one__single">
                                            <div className="prevention-one__icon">
                                                <div style={{backgroundColor:"black"}} className="prevention-one__icon-inner">
                                                    <img src="/assets/images/imagess/7.png" alt=""/>
                                                </div>
                                            </div>
                                            <div className="prevention-one__content">
                                                <h3 style={{color:"white"}}>Don't Cough with Your Mouth Open </h3>
                                                {/*<p>There are many of passages of lorem Ipsum but the available majority.</p>*/}
                                            </div>
                                        </div>
                                        <div className="prevention-one__single">
                                            <div  className="prevention-one__icon">
                                                <div style={{backgroundColor:"black"}} className="prevention-one__icon-inner">
                                                    <img src="/assets/images/14.png" alt=""/>
                                                </div>
                                            </div>
                                            <div className="prevention-one__content">
                                                <h3 style={{color:"white"}}>Don't Travel </h3>
                                                {/*<p>There are many of passages of lorem Ipsum but the available majority.</p>*/}
                                            </div>
                                        </div>
                                        {/*<div className="prevention-one__single">*/}
                                        {/*    <div className="prevention-one__icon">*/}
                                        {/*        <div style={{backgroundColor:"black"}} className="prevention-one__icon-inner">*/}
                                        {/*            <img src="/assets/images/imagess/7.png" alt=""/>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="prevention-one__content">*/}
                                        {/*        <h3>Wash Your Hands 20 Seconds </h3>*/}
                                        {/*        <p>There are many of passages of lorem Ipsum but the available majority.</p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}