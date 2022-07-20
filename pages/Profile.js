import Head from 'next/head';
import Layout from "/components/Layout";
import NavOneProfile from "/components/NavOneProfile";
import Footer from "/components/Footer";
import React from 'react'
import {useUser} from '/components/userState';
import {Container} from "@mui/material";
import {Content} from "antd/lib/layout/layout";
import SimpleTabs from '../components/profileMain';
import CircularProgress from '@mui/material/CircularProgress';

const Profile = () => {
    const {user, isAuthenticated, loading} = useUser({redirectTo: "/login"});
    return (

        <div>
            <Layout pageTitle="BotMD - Profile">
                {(isAuthenticated && user) && (
                    <>
                        <NavOneProfile/>
                        <Container>
                            <Content style={styles.content}>
                                {/* <ProfilePage/> */}
                                <SimpleTabs/>
                            </Content>
                        </Container>
                        <Footer/>
                    </>
                )}
                {(!isAuthenticated && loading && !user) && (
                    <div style={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <CircularProgress size={40}/>
                    </div>
                )}
            </Layout>
            <Head>
                <link rel="stylesheet" href="../public/assets/css/main.css"/>
            </Head>
        </div>
    )

}
const styles = {
    content: {
        padding: '0 50px',
        marginTop: '20%',
        minHeight: 'calc(100vh - 80px)'
    }
}

export default Profile;

