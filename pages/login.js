import Button from 'react-bootstrap/Button';
import {Google} from "@mui/icons-material";
import {Container} from "react-bootstrap";
import Layout from "/components/Layout";
import {Link} from "@mui/material";
import {useState} from 'react';
import {Checkbox} from "@material-ui/core";
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {signInWithGoogle} from '../firebaseConfig'
import {useRouter} from 'next/router';
import {get_user_profile, login_user} from '../redux/types';
import {emailPasswordSignIn} from '../fetchUserDetails';
import CircularProgress from '@mui/material/CircularProgress';
import {
    checkEmailAlreadyExist,
    getSingleUserFromFirestoreDBById,
    storeNewUSerToFirestoreDB
} from '../firebaseFirestore';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useUser} from '../components/userState';

let sos_contacts = [];
let savedLabs = [];
let savedDiets = [];
let savedRemedies = [];

function Login() {
    const {user, isAuthenticated, loading, fetched} = useUser({redirectTo: "/", redirectIfFound: true});
    // console.log("isAuthenticated", isAuthenticated)
    // console.log("user", user)


    let dispatch = useDispatch();
    let router = useRouter();
    let [signInLoader, setsignInLoader] = useState(false);
    // const [errorMessage, setErrorMessage] = useState(false);
    const [localLoggedError, setlocalLoggedError] = useState(false);
    const [loggedErrorMessage, setloggedErrorMessage] = useState(null);
    const [googleSignInError, setGoogleSignInError] = useState(false);
    const handledGoogleAuth = async () => {
        try {
            setsignInLoader(true);
            setGoogleSignInError(false);
            let {user} = await signInWithGoogle();
            const {refreshToken, providerData} = user;
            if (providerData) {
                let userExist = await checkEmailAlreadyExist(providerData[0].email);
                if (!userExist) {
                    let res = await storeNewUSerToFirestoreDB({
                        authId: user.uid,
                        email: providerData[0].email,
                        name: providerData[0].displayName ? providerData[0].displayName : null,
                        image: user.photoURL ? user.photoURL : null,
                        isolated: false, sos_contacts: sos_contacts,
                        isolatedOn: null, labRadius: 20,
                        isolationDays: 14,
                        savedLabs: savedLabs,
                        hadFirstVacc: false,
                        savedDiets:savedDiets,
                        savedRemedies: savedRemedies

                    });
                }
                let getUserInfo = await getSingleUserFromFirestoreDBById(user.uid);
                dispatch(login_user({
                    email: providerData[0].email,
                    name: providerData[0].displayName,
                    token: refreshToken,
                    image: user.photoURL
                }));
                dispatch(get_user_profile({
                    ...getUserInfo,
                    email: providerData[0].email,
                    image: getUserInfo.image ? getUserInfo.image : user.photoURL
                }));
                setsignInLoader(false)
                router.push('/');
            }
        } catch (error) {
            setsignInLoader(false)
            setGoogleSignInError(true);

            console.log('error....', error);
        }
    };

    return (
        <Layout pageTitle="BotMD | Login">
            {(!isAuthenticated && fetched) &&
                (
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        enableReinitialize={true}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('Must be a valid email')
                                .max(255)
                                .required('Email is required'),
                            password: Yup.string()
                                .min(6, 'Password must be at least 6 chracters')
                                .max(255)
                                .required('Password is required'),
                        })}
                        onSubmit={async (values, {setSubmitting}) => {

                            try {
                                setsignInLoader(false);
                                const data = await emailPasswordSignIn(values);
                                if (data) {
                                    let getUserInfo = await getSingleUserFromFirestoreDBById(data.authId);
                                    dispatch(login_user({
                                        email: data.email,
                                        name: data.displayName,
                                        token: data.refreshToken,
                                        image: data.photoURL,

                                    }))
                                    dispatch(get_user_profile({...getUserInfo, email: values.email}));
                                    router.push('/');
                                    setSubmitting(false);
                                }

                            } catch (err) {
                                setlocalLoggedError(true);
                                setloggedErrorMessage(err)
                                setSubmitting(false);
                            }
                        }}>
                        {({
                              errors,
                              handleBlur,
                              handleChange,
                              handleSubmit,
                              isSubmitting,
                              touched,
                              values,
                          }) => (

                            <div className="maincontainer">
                                <div className="container-fluid">
                                    <div className="row no-gutter">

                                        <div style={styles.image} className="col-md-6 d-none d-md-flex bg-image"></div>

                                        <div className="col-md-6 bg-light">
                                            <div style={styles.login} className="login d-flex align-items-center py-5">

                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                                            <h3 style={styles.h3} className="display-4">Login!</h3>
                                                            <form>
                                                                <div className="form-group mb-3">
                                                                    <label>Email</label>
                                                                    <input id="inputEmail" type="email" name='email'
                                                                           onChange={(e) => {
                                                                               handleChange(e);
                                                                               setlocalLoggedError(false)
                                                                               setloggedErrorMessage(null);
                                                                           }} placeholder="Email address"
                                                                           required="" autoFocus=""
                                                                           className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                                                </div>
                                                                {touched.email && errors.email && (
                                                                    <div style={{color: 'red'}}>{errors.email}</div>
                                                                )}
                                                                <div className="form-group mb-3">
                                                                    <label>Password</label>

                                                                    <input id="inputPassword" type="password"
                                                                           name='password'
                                                                           onChange={e => {
                                                                               handleChange(e);
                                                                               setlocalLoggedError(false)
                                                                               setloggedErrorMessage(null);
                                                                           }} placeholder="Password"
                                                                           required=""
                                                                           className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                                                </div>
                                                                {touched.password && errors.password && (
                                                                    <div style={{color: 'red'}}>{errors.password}</div>
                                                                )}

                                                                {localLoggedError &&
                                                                    <Stack sx={{width: '100%'}} spacing={2}>
                                                                        <Alert
                                                                            severity="error">{loggedErrorMessage}</Alert>
                                                                    </Stack>
                                                                }
                                                                {/*<div className="custom-control custom-checkbox mb-3">*/}
                                                                {/*    <Checkbox label="Remember Me" color="primary"/>*/}
                                                                {/*    <label>Remember Me!</label>*/}
                                                                {/*</div>*/}
                                                                <Container>
                                                                    <button style={styles.button} type="submit"
                                                                            disabled={isSubmitting}
                                                                            onClick={handleSubmit}
                                                                            className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                                                                        Sign In {isSubmitting &&
                                                                        <CircularProgress color='inherit'
                                                                                          style={{marginLeft: '10px'}}
                                                                                          size={20}/>}
                                                                    </button>

                                                                    <Button style={styles.gbutton} variant="primary"
                                                                            disabled={signInLoader}
                                                                            className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                                                            onClick={handledGoogleAuth} type="button">
                                                                        <Google style={styles.icon}
                                                                        />
                                                                        Sign in with Google {signInLoader &&
                                                                        <CircularProgress color='inherit'
                                                                                          style={{marginLeft: '10px'}}
                                                                                          size={20}/>}
                                                                    </Button>
                                                                    {googleSignInError &&
                                                                        <Stack sx={{width: '100%'}} spacing={2}>
                                                                            <Alert severity="error">Something went
                                                                                wrong, Please try again to login</Alert>
                                                                        </Stack>
                                                                    }

                                                                </Container>
                                                                <div style={styles.new} className="text-center">
                                                                    <small className="text-muted text-center">Already
                                                                        have an
                                                                        account?</small>
                                                                    <Link href={`/SignUp`} className="small">Sign
                                                                        up</Link>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Formik>
                )}
            {(!isAuthenticated && loading) && (
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

    )
}

const styles = {
    login: {
        minHeight: '100vh',
        backgroundColor: "#dcdcdc",
        borderLeft: "1px solid #fff",
        boxShadow: "10px 10px 1000px #000",


    },
    icon: {
        marginRight: "10px",
        size: "30px",

    },
    image: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',


    },
    h3: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: '50px',
        textAlign: 'center',
        marginBottom: '50px',

    },
    button: {
        width: '100%',
        margin: 'auto',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#3b5998',
    },
    fbutton: {
        width: '100%',
        backgroundColor: '#3b5998',
        marginTop: '20px',
        marginRight: '20px',
        fontSize: '15px',
        textTransform: 'capitalize',

    },
    gbutton: {
        width: '100%',
        backgroundColor: '#d34836',
        borderColor: '#d34836',
        marginTop: '20px',
        marginRight: '20px',
        fontSize: '15px',
        fontweight: 'bold',
        textTransform: 'capitalize',

    },
    new: {
        marginTop: '20px',
    }

};


export default Login;