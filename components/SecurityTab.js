import React, {useState} from 'react';
// import {change_password_user_api} from '../../store/APi/userApI';
// import { useNavigate } from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
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
import {updateUserPasswordFromFirestoreDBById} from '../firebaseFirestore';
import SubCard from './subCard';
import {gridSpacing} from './constants';
import {makeStyles} from '@material-ui/styles';
import useScriptRef from './useScriptRef';
import AnimateButton from './animateButton';
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
        // ...theme.typography.customInput
    },
    profileImageDiv: {
        borderRadius: "50%",
        width: "150px",
        height: "150px",
        background: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        '& img': {
            maxWidth: "100%"
        }
    },
    circuler_main_div: {
        marginLeft: '10px',
    },

}));

function SecurityTab(props) {
    const classes = useStyles();
    const customization = useSelector((state) => state.customization);
    const scriptedRef = useScriptRef();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);


    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container spacing={gridSpacing}>

            <Grid item xs={12} sm={12} lg={12}>
                <SubCard title="Change Password">
                    <Formik
                        initialValues={{
                            newPassword: '',
                            verifyPassword: ''

                        }}
                        enableReinitialize={true}
                        validationSchema={Yup.object().shape({
                            newPassword: Yup.string().max(255).required('Password is required'),
                            verifyPassword: Yup.string().required('Verfiy Password is required').when("newPassword", {
                                is: val => (val ? true : false),
                                then: Yup.string().oneOf(
                                    [Yup.ref("newPassword")],
                                    "Both NewPassword and VerifyPassword need to be the same"
                                )
                            })
                        })}
                        onSubmit={async (values, {setStatus, setSubmitting, setErrors}) => {
                            try {

                                // await  props.change_password_user_api(values);
                                let res = await updateUserPasswordFromFirestoreDBById(values.newPassword);
                                if (res) {
                                    console.log('res...', res);
                                    setSubmitting(false);
                                }

                            } catch (err) {
                                console.log('resvived errir', err);

                                setError(true);
                                setErrorMessage(err);
                                // setErrors({ submit: err.message });
                                setSubmitting(false);

                            }
                        }}
                    >
                        {({errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values}) => (
                            <form noValidate>
                                <Grid container direction="row" spacing={1}>

                                    <Grid item sm={6}>
                                        <FormControl fullWidth
                                                     error={Boolean(touched.newPassword && errors.newPassword)}
                                                     className={classes.loginInput}>
                                            <InputLabel htmlFor="outlined-adornment-email-login">New
                                                Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-fName"
                                                type="text"
                                                value={values.newPassword}
                                                name="newPassword"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                style={{paddingLeft: 10}}

                                                label="New Password"
                                                inputProps={{
                                                    classes: {
                                                        notchedOutline: classes.notchedOutline
                                                    }
                                                }}
                                            />
                                            {touched.newPassword && errors.newPassword && (
                                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                                    {' '}
                                                    {errors.newPassword}{' '}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <FormControl fullWidth
                                                     error={Boolean(touched.verifyPassword && errors.verifyPassword)}
                                                     className={classes.loginInput}>
                                            <InputLabel htmlFor="outlined-adornment-email-login">Re-enter New
                                                Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-email-login"
                                                type="text"
                                                value={values.verifyPassword}
                                                name="verifyPassword"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                style={{paddingLeft: 10}}
                                                label="Verify Password"
                                                inputProps={{
                                                    classes: {
                                                        notchedOutline: classes.notchedOutline
                                                    }
                                                }}
                                            />
                                            {touched.verifyPassword && errors.verifyPassword && (
                                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                                    {' '}
                                                    {errors.verifyPassword}{' '}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    {error && <div style={{
                                        color: 'red',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%'
                                    }}>{errorMessage}</div>}
                                    <Grid item sm={12}>

                                        <Box
                                            sx={{
                                                mt: 2
                                            }}
                                        >
                                            <AnimateButton>
                                                <Button
                                                    disableElevation
                                                    disabled={isSubmitting}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleSubmit}
                                                >

                                                    {isSubmitting ? (
                                                            <div className={classes.circuler_main_div}>
                                                                <CircularProgress size={20} style={{color: '#08090a'}}/>
                                                            </div>
                                                        )
                                                        : "Change Passowrd"}
                                                </Button>
                                            </AnimateButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </SubCard>
            </Grid>
        </Grid>
    )

}

// let mapDispatchToProps = dispatch=>({
//   change_password_user_api : (data)=>dispatch(change_password_user_api(data))
// })
export default connect(null, null)(SecurityTab);