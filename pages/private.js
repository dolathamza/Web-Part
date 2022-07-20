import {useDispatch} from 'react-redux';
import {logOUt} from '../fetchUserDetails';
import {logout_user} from '../redux/types';
import {useUser} from '/components/userState';
import Layout from "/components/Layout";

const Private = () => {
    let dispatch = useDispatch();
    const {user, isAuthenticated, loading, fetched} = useUser({redirectTo: "/login"});


    const handleLogOut = async () => {
        try {
            const booloean = await logOUt();

            // console.log('boolean...', booloean)
            if (booloean.success) {
                dispatch(logout_user());
                // route.push('/login');
            }
        } catch (error) {
            console.log('error...', error);
        }
    }


    return (
        <Layout pageTitle="BotMD - Home">
            {isAuthenticated && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column'
                }}>
                    <div><h2>User Info</h2></div>
                    {
                        (fetched && user) ?
                            (
                                <div>
                                    <div>Name:{user.name}</div>
                                    <div>Email: {user.email}</div>
                                    <div>Photo0: {user.image}</div>
                                    <div>token: {user.token}</div>
                                    <div>userId: {user.uid}</div>


                                    <button onClick={handleLogOut} style={{
                                        marginTop: '30px',
                                        width: '100px',
                                        height: '50px',
                                        backgroundColor: 'teal',
                                        cursor: 'pointer'
                                    }}>Logout
                                    </button>
                                </div>
                            ) : ""
                    }
                </div>
            )}
            {(!isAuthenticated && loading) && (
                <div><h1 style={{color: 'white'}}>Loading...</h1></div>
            )}
        </Layout>
    )


}

export default Private;