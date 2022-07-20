import React from 'react';
// material-ui
// import Box from '@mui/material/Box';
// project imports
// import {Avatar, Button, Descriptions, Layout} from 'antd';
import SubCard from './subCard';
// import { update_user_api } from '../../store/APi/userApI'
// import MainCard from 'ui-component/cards/MainCard';
import {updateSingleUserFromFirestoreDBByIdProfile} from '../firebaseFirestore';
import {get_user_profile} from '../redux/types';
// import { useNavigate } from 'react-router-dom';
// import { useRouter } from 'next/router';
import {connect, useDispatch, useSelector} from 'react-redux';

import {gridSpacing} from './constants';
import {makeStyles} from '@material-ui/styles';
import {Avatar} from 'antd';
import {AntDesignOutlined} from '@ant-design/icons';
import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput
} from '@material-ui/core';
import useScriptRef from './useScriptRef';
import AnimateButton from './animateButton';
// third party
import * as Yup from 'yup';
import {Formik} from 'formik';

const useStyles = makeStyles((theme) => ({
    redButton: {
        fontSize: '1rem',
        fontWeight: 500,
        // backgroundColor: theme.palette.grey[50],
        border: '1px solid',
        // borderColor: theme.palette.grey[100],
        // color: theme.palette.grey[700],
        textTransform: 'none',
        '&:hover': {
            //   backgroundColor: theme.palette.primary.light
        },
        // [theme.breakpoints.down('sm')]: {
        //   fontSize: '0.875rem'
        // }
    },
    typo: {
        fontSize: '1rem',
        fontWeight: 500,
        textAlign: 'center',


    },
    Labels: {
        fontSize: '1rem',
        fontWeight: 500,
        textAlign: 'left',
        marginLeft: '1.5rem',
    },
    signDivider: {
        flexGrow: 1
    },
    signText: {
        cursor: 'unset',
        // margin: theme.spacing(2),
        padding: '5px 56px',
        // borderColor: `${theme.palette.grey[100]} !important`,
        // color: `${theme.palette.grey[900]}!important`,
        fontWeight: 500
    },

    loginIcon: {
        marginRight: '16px',
        // [theme.breakpoints.down('sm')]: {
        //   marginRight: '8px'
        // }
    },
    loginInput: {

        padding: '8px',

    },
    profileImageDiv: {
        borderRadius: "50%",
        width: "110px",
        height: "110px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid black",
        overflow: "hidden",
        '& img': {
            maxWidth: "100%"
        }
    },
    profileImage: {
        width: '130px',
        height: '130px',
        borderRadius: '50%',
        objectFit: 'contain',
        objectPosition: 'center',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',


    },
    profile_bottom_text: {
        textAlign: 'center'
    }
    ,
    image_upload_button: {
        margin: '0 auto',
        background: '#673ab7'
    },
    circuler_main_div: {
        marginLeft: '10px',
    },

}));
// let url = `${window.location.origin}/uploads/`
let url;
var date = new Date();
function ProfileTab(props) {
    const classes = useStyles();
    let dispatch = useDispatch();
//   let navigate = useNavigate()
    const customization = useSelector((state) => state.customization);
    const scriptedRef = useScriptRef();
    const [imageUrl, setimageUrl] = React.useState(null);
    const [image, setimage] = React.useState(null);


    const handleImages = (e) => {
        document.getElementById('images').click();
    }

    var imagee = "";

    const {user, profile, loading, profileLoading} = props.user;
    if (loading || profileLoading) {
        return (
            <div className={classes.root}
                 style={{width: '100%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress color="primary"/>
            </div>)
    }
    return (
        <Formik
            initialValues={{
                address: "",
                ...profile,
                isolated: profile.isolated,

            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                name: Yup.string().required('name is required'),
                address: Yup.string(),
            })}
            onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {
                try {

                    console.log("enter in submit...");
                    let data = await updateSingleUserFromFirestoreDBByIdProfile(profile.id, {
                        name: values.name,
                    });
                    if (data) {
                        dispatch(get_user_profile(data))
                        setSubmitting(false);
                    }

                } catch (err) {
                    console.error(err);


                    setErrors({submit: err.message});
                    setSubmitting(false);

                }
            }}
        >
            {({errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values}) => (
                <Grid container spacing={gridSpacing}>
                    <Grid style={styles.grid} item xs={12} sm={12} lg={12}>
                        <SubCard title="Profile Picture">


                            <Grid container direction="column" spacing={1}>
                                <Grid item style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                      display={"flex"} justifyContent="center">
                                    <div style={styles.border}>
                                        <div className={classes.profileImageDiv}>
                                            {/*<Image src={imagee} width={50} height={50} className={classes.profileImage}/>
                                        */}
                                            <Avatar
                                                size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                                                src={values.image}
                                                className={classes.profileImage}
                                                icon={<AntDesignOutlined/>}
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <h1  style={styles.h1}>Name</h1>
                                    <p style={styles.banner} className={"bannerP"}>{values["name"]}</p>



                                    <h1 style={styles.h1}>Email</h1>
                                    <p style={styles.banner} className={"bannerP"}>{values["email"]}</p>

                                    <h1 style={styles.h1}>Isolation Information</h1>
                                    <p style={styles.banner} className={"bannerP"}>The User is in Isolation: {values["isolated"].toString().toLocaleUpperCase()}</p>
                                    <h1 style={styles.h1}>Last Vaccination</h1>
                                    <p style={styles.banner} className={"bannerP"}>{date.getDate()}-{date.getMonth()}-{date.getFullYear()} ({date.getHours()} Hrs-{date.getMinutes()}min-{date.getSeconds()}sec)</p>


                                </Grid>
                                {/*<Grid item style={{alignContent: 'center', margin: '0 auto'}}>*/}
                                {/*    <input type="file" onChange={(e) => {*/}
                                {/*        setimage(e.target.files[0])*/}
                                {/*        setimageUrl(URL.createObjectURL(e.target.files[0]))*/}
                                {/*    }} accept="images/*" name="images" id="images" style={{display: 'none'}}/>*/}
                                {/*    <Button onClick={handleImages} variant="contained"*/}
                                {/*            className={classes.image_upload_button}>*/}
                                {/*        Select Image*/}
                                {/*    </Button>*/}
                                {/*</Grid>*/}
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <SubCard title="Edit Account Details">
                            {/* <Grid container direction="row" spacing={1}> */}
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item sm={6}>
                                        <FormControl fullWidth error={Boolean(touched.name && errors.name)}
                                                     className={classes.loginInput}>
                                            <InputLabel className={classes.Labels}
                                                        htmlFor="outlined-adornment-email-login">Name</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-fName"
                                                type="text"
                                                value={values.name}
                                                defaultValue={values.name}
                                                name="name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                style={{paddingLeft: 10}}
                                                label="Name"
                                                inputProps={{
                                                    classes: {
                                                        notchedOutline: classes.notchedOutline
                                                    }
                                                }}
                                            />
                                            {touched.name && errors.name && (
                                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                                    {' '}
                                                    {errors.name}{' '}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <FormControl
                                            disabled={true}
                                            fullWidth error={Boolean(touched.lastName && errors.lastName)}
                                            className={classes.loginInput}>
                                            <InputLabel className={classes.Labels}
                                                        disabled={true}
                                                        htmlFor="outlined-adornment-email-login">Email</InputLabel>
                                            <OutlinedInput
                                                disabled={true}
                                                id="outlined-adornment-email-login"
                                                type="email"
                                                value={values.email}
                                                name="email"
                                                onBlur={handleBlur}
                                                // onChange={handleChange}
                                                label="Email"


                                                inputProps={{
                                                    classes: {
                                                        notchedOutline: classes.notchedOutline
                                                    }
                                                }}
                                            />
                                            {touched.email && errors.email && (
                                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                                    {' '}
                                                    {errors.email}{' '}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    {/*<Grid item sm={12}>*/}
                                    {/*    <FormControl fullWidth error={Boolean(touched.address && errors.address)}*/}
                                    {/*                 className={classes.loginInput}>*/}
                                    {/*        <InputLabel className={classes.Labels} htmlFor="outlined-adornment-email-login">Address</InputLabel>*/}
                                    {/*        <OutlinedInput*/}
                                    {/*            id="outlined-adornment-email-login"*/}
                                    {/*            type="text"*/}
                                    {/*            value={values.address}*/}
                                    {/*            defaultValue={values.address}*/}
                                    {/*            name="address"*/}
                                    {/*            onBlur={handleBlur}*/}
                                    {/*            onChange={handleChange}*/}
                                    {/*            style={{paddingLeft: 10}}*/}
                                    {/*            label="Address"*/}
                                    {/*            inputProps={{*/}
                                    {/*                classes: {*/}
                                    {/*                    notchedOutline: classes.notchedOutline*/}
                                    {/*                }*/}
                                    {/*            }}*/}
                                    {/*        />*/}
                                    {/*        {touched.address && errors.address && (*/}
                                    {/*            <FormHelperText error id="standard-weight-helper-text-email-login">*/}
                                    {/*                {' '}*/}
                                    {/*                {errors.address}{' '}*/}
                                    {/*            </FormHelperText>*/}
                                    {/*        )}*/}
                                    {/*    </FormControl>*/}
                                    {/*</Grid>*/}
                                    <Grid item sm={12}>

                                        <Box
                                            sx={{
                                                mt: 2
                                            }}
                                        >
                                            <AnimateButton>
                                                <Button style={styles.btn}
                                                        disableElevation
                                                        disabled={isSubmitting}
                                                        fullWidth
                                                        size="large"
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"

                                                >

                                                    {isSubmitting ? (
                                                            <div className={classes.circuler_main_div}>
                                                                <CircularProgress size={20} style={{color: '#08090a'}}/>
                                                            </div>
                                                        )
                                                        : "Change Details"}
                                                </Button>
                                            </AnimateButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </form>

                            <Grid item>

                            </Grid>

                            {/* </Grid> */}
                        </SubCard>
                    </Grid>
                </Grid>
            )}
        </Formik>
    )
}

const styles = {
    banner: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '20px',
        borderBottom: '1px solid #e0e0e0',
    },
    h1: {
        fontSize: '35px',
        fontWeight: 'bold',
        color: '#08090a',
        textAlign: 'center',
        marginTop: '40px'


    },
    border: {
        borderBottom: '1px solid #d9d9d9',
    },
    btn: {
        backgroundImage: 'linear-gradient(to right, #4D1E4D, #000)',
        padding: '10px',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '15px',
        marginTop: '20px',
        borderRadius: '5px',


    }

}

// const mapDispatchToProps = dispatch => ({
//   update_user_api: data => dispatch(update_user_api(data))
// })
const mapStateToProps = state => ({
    user: state.User
})


export default connect(mapStateToProps, null)(ProfileTab)