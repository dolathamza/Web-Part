import '../styles/globals.css'
import {wrapper} from "../redux/store"
import React, {useEffect, useState} from 'react';
import {getMe} from '../fetchUserDetails';
import {useDispatch, useSelector} from 'react-redux';
import '../styles/app.scss'
import {get_user, get_user_profile, loading_user, loading_user_profile, logout_user} from '../redux/types';
import GetVaccineInfoModal from '/components/getVaccineInfoModal'
import {getSingleUserFromFirestoreDBById} from '../firebaseFirestore';

function MyApp({Component, pageProps}) {
    const [openModal, setOpenModal] = useState(true);
    const handleClodeModal = () => {
        setOpenModal(false);
    }
    // const {user, isAuthenticated, loading, fetched,profile} = useUser({redirectTo: "/login"});
    const userData = useSelector(state => state.User);
    let {profile, loading, user} = userData;

    let dispatch = useDispatch();

    async function SignedUSer() {
        try {
            dispatch(loading_user(true));
            dispatch(loading_user_profile(true));
            const user = await getMe();
            if (user) {
                let getUserInfo = await getSingleUserFromFirestoreDBById(user.authId);
                dispatch(get_user(user));
                dispatch(get_user_profile(getUserInfo));
            }
            //  dispatch (loading_user(false));
        } catch (error) {
            dispatch(logout_user())
            // dispatch (loading_user(false));
        }

    }

    useEffect(() => {
        SignedUSer()
        window.watsonAssistantChatOptions = {
            integrationID: "b7ce30cb-c6c8-458f-8a2e-8b2e59e0844c", // The ID of this integration.
            region: "us-south", // The region your integration is hosted in.
            serviceInstanceID: "304cb930-c9ce-4e64-a096-42d12baad05f", // The ID of your service instance.
            onLoad: function (instance) {
                instance.render();
            }
        };
        setTimeout(function () {
            const t = document.createElement('script');
            t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
            document.head.appendChild(t);
        });

    }, [])

    useEffect(() => {
        if (profile && !openModal) {

            if (profile.hadFirstVacc !== true) {
                setTimeout(() => {
                    setOpenModal(true)
                }, 10 * 1000);
            } else {
                setOpenModal(false);
            }
        }


    }, [openModal, profile, loading])


    return (
        <div>
            <Component {...pageProps} />
            <GetVaccineInfoModal open={openModal && !loading && profile && !profile.hadFirstVacc}
                                 closeModal={handleClodeModal}/>
        </div>

    )
}

export default wrapper.withRedux(MyApp);
