import Head from 'next/head';
import Layout from "/components/Layout";
import NavOne from "/components/NavOne";
import BannerOne from "/components/BannerOne";
import CallToActionThree from "/components/CallToActionThree";
import AboutOne from "/components/AboutOne";
import FunFactOne from "/components/FunFactOne";
import ServiceOne from "/components/ServiceOne";
import PreventionOne from "/components/PreventionOne";
import CallToActionTwo from "/components/CallToActionTwo";
import Footer from "/components/Footer";
import AboutTwo from "/components/AboutTwo";
import BrandOne from "/components/BrandOne";
import React from 'react'
import LabsData from '../components/LabsData';
import {useUser} from '/components/userState';
import News from '../components/News';
import Remedies from "../components/Remedies";


const Home = () => {

    const {user, isAuthenticated, loading} = useUser({redirectTo: "/login"});
    return (<div>
        <Layout pageTitle="BotMD - Home">
            {isAuthenticated && (<>
                <NavOne/>
                <BannerOne/>
                <News/>
                <Remedies/>
                <LabsData id={"Labs"}/>
                <CallToActionThree/>
                <AboutOne/>
                <FunFactOne/>
                <ServiceOne/>
                <PreventionOne/>
                <CallToActionTwo/>
                <AboutTwo/>
                <BrandOne/>
                {/*<FaqOne/>*/}
                <Footer/>
            </>)}
            {(!isAuthenticated && loading) && (<div><h1 style={{color: 'white'}}>Loading...</h1></div>)}
        </Layout>
        <Head>
            <link rel="stylesheet" href="/assets/css/dark.css"/>
        </Head>
    </div>)

}

export default Home;