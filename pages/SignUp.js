import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Google} from "@mui/icons-material";
import {Container} from "react-bootstrap";
import Layout from "/components/Layout";
import {Link} from "@mui/material";
import * as Yup from 'yup';
import {Formik} from 'formik';
import {register_user_api} from '../redux/actions/userAPI';
import {connect, useDispatch} from 'react-redux';
import {signInWithGoogle} from '../firebaseConfig'
import {useRouter} from 'next/router';
import {get_user_profile, login_user} from '../redux/types';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import {emailPasswordSignUp} from '../fetchUserDetails';
import CircularProgress from '@mui/material/CircularProgress';
import {
    checkEmailAlreadyExist,
    getSingleUserFromFirestoreDBById,
    storeNewUSerToFirestoreDB
} from '../firebaseFirestore';


let sos_contacts = [];
let savedLabs = [];
let savedDiets = [];
let savedRemedies = [];

function SignUp(props) {
    let dispatch = useDispatch();
    let router = useRouter();
    let [signInLoader, setsignInLoader] = useState(false);
    const [accountExistError, setAccountExistError] = useState(false);
    const [googleSignInError, setGoogleSignInError] = useState(false);
    const [localSignUpError, setLocalSignUpError] = useState(false);
    const [localSignUpErrorMessage, setlocalSignUpErrorMessage] = useState(null);
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
                        name: providerData[0].displayName ? providerData[0].displayName : null,
                        email: providerData[0].email,
                        image: data.photoURL,
                        isolated: false,
                        hadFirstVacc: false,
                        sos_contacts: sos_contacts,
                        isolatedOn: null,
                        labRadius: 20,
                        isolationDays: 14,
                        savedLabs: savedLabs,
                        savedDiets: savedDiets,
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
                setsignInLoader(false)
                router.push('/');
            }
        } catch (error) {
            setsignInLoader(false);
            setGoogleSignInError(true);

            console.log('error....', error);
        }
    };


    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                name: '',
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
                name: Yup.string().required('Full name is required')
            })}
            onSubmit={async (values, {setSubmitting}) => {

                try {
                    setsignInLoader(false);
                    let userExist = await checkEmailAlreadyExist(values.email);
                    if (userExist) {
                        setAccountExistError(true);
                    } else {

                        try {
                            const data = await emailPasswordSignUp({...values});
                            if (data) {
                                let res = await storeNewUSerToFirestoreDB({
                                    authId: data.authId,
                                    email: values.email,
                                    name: values.name,
                                    image: data.photoURL,
                                    isolated: false,
                                    sos_contacts: sos_contacts,
                                    isolatedOn: null,
                                    labRadius: 20,
                                    isolationDays: 14,
                                    savedLabs: savedLabs
                                });
                                if (res) {
                                    dispatch(login_user({
                                        authId: data.authId,
                                        email: data.email,
                                        name: values.name,
                                        token: data.refreshToken,
                                        image: data.photoURL
                                    }))
                                    dispatch(get_user_profile({
                                        authId: data.authId,
                                        email: data.email,
                                        name: values.name,
                                        image: data.photoURL
                                    }));
                                    router.push('/');
                                    setSubmitting(false);
                                }
                            }
                        } catch (error) {

                            setLocalSignUpError(true);
                            setlocalSignUpErrorMessage(err)
                        }

                    }
                } catch (err) {
                    console.log(err);
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
                <Layout pageTitle="BotMD | SignUp">

                    <div className="maincontainer">
                        <div className="container-fluid">
                            <div className="row no-gutter">

                                <div style={styles.image} className="col-md-6 d-none d-md-flex bg-image"></div>

                                <div className="col-md-6 bg-light">
                                    <div style={styles.login} className="login d-flex align-items-center py-5">

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-10 col-xl-7 mx-auto">
                                                    <h3 style={styles.h3} className="display-4">Sign Up!</h3>
                                                    <form>
                                                        <div className="form-group mb-3">
                                                            <label>Full Name</label>
                                                            <input id="inputName" type="text" name='name'
                                                                   onChange={(e) => {
                                                                       handleChange(e);

                                                                   }} placeholder="Full name"
                                                                   required="" autoFocus=""
                                                                   className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                                        </div>
                                                        {touched.name && errors.name && (
                                                            <div style={{color: 'red'}}>{errors.name}</div>
                                                        )}
                                                        <div className="form-group mb-3">
                                                            <label>Email</label>

                                                            <input id="inputEmail" type="email" name='email'
                                                                   onChange={(e) => {
                                                                       handleChange(e);
                                                                       setAccountExistError(false);
                                                                       setLocalSignUpError(false);
                                                                       setlocalSignUpErrorMessage(null);
                                                                   }} placeholder="Email address"
                                                                   required="" autoFocus=""
                                                                   className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                                        </div>
                                                        {touched.email && errors.email && (
                                                            <div style={{color: 'red'}}>{errors.email}</div>
                                                        )}
                                                        <div className="form-group mb-3">
                                                            <label>Password</label>

                                                            <input id="inputPassword" type="password" name='password'
                                                                   onChange={(e) => {
                                                                       handleChange(e);
                                                                       setAccountExistError(false);
                                                                       setLocalSignUpError(false);
                                                                       setlocalSignUpErrorMessage(null);
                                                                   }} placeholder="Password"
                                                                   required=""
                                                                   className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                                        </div>
                                                        {touched.password && errors.password && (
                                                            <div style={{color: 'red'}}>{errors.password}</div>
                                                        )}
                                                        {accountExistError &&
                                                            <Stack sx={{width: '100%'}} spacing={2}>
                                                                <Alert severity="error">Account Already Exist,Please
                                                                    Login <Link href={`/login`}>here</Link></Alert>
                                                            </Stack>
                                                        }
                                                        {localSignUpError &&
                                                            <Stack sx={{width: '100%'}} spacing={2}>
                                                                <Alert
                                                                    severity="error">{localSignUpErrorMessage}</Alert>
                                                            </Stack>
                                                        }
                                                        {/*<div className="custom-control custom-checkbox mb-3">*/}
                                                        {/*    <Checkbox label="Remember Me" color="primary"/>*/}
                                                        {/*    <label>Remember Me!</label>*/}
                                                        {/*</div>*/}
                                                        <Container>
                                                            <button style={styles.button} type="submit"
                                                                    disabled={isSubmitting} onClick={handleSubmit}
                                                                    className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                                                                Sign Up {isSubmitting &&
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
                                                                    <Alert severity="error">Something went wrong, Please
                                                                        try again to login</Alert>
                                                                </Stack>
                                                            }

                                                        </Container>
                                                        <div style={styles.new} className="text-center">
                                                            <small className="text-muted text-center">Already have an
                                                                account?</small>
                                                            <Link href={`/login`} className="small">Sign in</Link>
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

                </Layout>
            )}
        </Formik>
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

const mapDispatchToProps = dispatch => ({
    register_user_api: (data) => dispatch(register_user_api(data))
})
export default connect(null, mapDispatchToProps)(SignUp);