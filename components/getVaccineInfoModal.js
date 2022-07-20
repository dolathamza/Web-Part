import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { AdapterDateFns } from '@date-io/date-fns';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {updateSingleUserFromFirestoreDBById} from '../firebaseFirestore';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {get_user_profile} from '../redux/types';
import {useDispatch, useSelector} from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #ffd240',
    boxShadow: '5px 4px 8px 0 #ffd240',
    borderRadius: "50px 0px 50px 0px",
    backgroundImage: "linear-gradient(to right, #ffd240 0%, #fa9442 100%)",
    // -webkit-gradient(linear, left top, right top, from(#ffd240), color-stop(51%, #fa9442), to(#ffd240));
    p: 4,
    enableTransitions: true,
    transitionDuration: '4s',
    transitionTimingFunction: 'fade-in-out',
    transitionDelay: '5s',
    transitionProperty: 'all',


};

export default function GetVaccineInfoModal(props) {
    var today = new Date();


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age, setAge] = React.useState('');
    const user = useSelector(state => state.User);
    const [error, setError] = React.useState(false);
    const dispatch = useDispatch();
    let {profile, loading} = user;
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState(new Date());

    const handleChangee = (newValue) => {
        setValue(newValue);
    };

    const handleCloseModalprops = () => {
        props.closeModal()
    }
    return (
        <Formik
            initialValues={{

                hadFirstVacc: true,
                vaccine: '',
                dateVaccinated: '',
                notes: '',
                reCovidCount: 0,
                lastVac: "",
                tryMonthlyData: [],
                date: '',

            }}
            enableReinitialize={true}
            validationSchema={Yup.object().shape({
                hadFirstVacc: Yup.boolean(),
                vaccine: Yup.string().when("vaccinated", {
                    is: true,
                    then: Yup.string().required("Vaccine name is required")
                }),
                dateVaccinated: Yup.string().when("vaccinated", {
                    is: true,
                    then: Yup.string().required("Vaccine date is required")
                }),
            })}
            onSubmit={async (values, {setSubmitting}) => {
                try {

                    // router.push('/');
                    let data = await updateSingleUserFromFirestoreDBById(profile.id, values);
                    if (data) {
                        dispatch(get_user_profile(data))
                        setSubmitting(false);
                        props.closeModal()

                    } else {
                        setError(true);
                        setSubmitting(false);

                    }

                } catch (err) {
                    console.log('error...', err);
                    // setErrorMessage(err)
                    console.log(err);
                    setSubmitting(false);
                    props.closeModal()

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
                  setValues
              }) => (
                <Modal
                    open={props.open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <p style={styles.head} className={"bannerP"}>Hol'up!</p>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            <p style={styles.p} className={"bannerP"}>We neend your help, we are collecting data for
                                vaccinations.</p>
                        </Typography>

                        <div>
                            <Typography style={{display: 'inline', marginRight: 20}} id="modal-modal-description"
                                        sx={{mt: 2}}>
                                <p style={styles.p} className={"bannerP"}>Have you been vaccinated yet?</p>
                            </Typography>
                            <FormControlLabel onChange={() => {
                                setValues({...values, hadFirstVacc: !values.hadFirstVacc});
                                setError(false)
                            }} control={<Switch color="secondary" checked={values.hadFirstVacc}/>}/>
                            {console.log('values...', values)}
                        </div>
                        {values.hadFirstVacc &&
                            <div>
                                <FormControl fullWidth style={{marginBottom: 10}}>
                                    <InputLabel id="demo-simple-select-label"><p className={"bannerP"}>Select
                                        Vaccine</p></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.vaccine}
                                        label="Select vaccine"
                                        onChange={handleChange}
                                        name="vaccine"
                                        style={styles.select}
                                    >


                                        <MenuItem value={'Sinovac'}>Sinovac</MenuItem>
                                        <MenuItem value={'Sinopharm'}>Sinopharm</MenuItem>
                                        <MenuItem value={'AstraZeneca'}>AstraZeneca</MenuItem>
                                        <MenuItem value={'Gamaleya'}>Gamaleya</MenuItem>
                                        <MenuItem value={'Cansino'}>Cansino</MenuItem>
                                        <MenuItem value={'Pfizer'}>Pfizer</MenuItem>
                                        <MenuItem value={'Moderna'}>Moderna</MenuItem>


                                    </Select>
                                    {touched.vaccine && errors.vaccine && (
                                        <div style={{color: 'red'}}>{errors.vaccine}</div>
                                    )}
                                </FormControl>


                                <FormControl fullWidth style={styles.select}>


                                    <LocalizationProvider dateAdapter={AdapterDateFns}>

                                        <DesktopDatePicker
                                            label="Date"
                                            inputFormat="MM/dd/yyyy"
                                            value={value}
                                            onChange={e => {
                                                handleChangee(e)
                                                setValues({
                                                    ...values,
                                                    dateVaccinated: e,
                                                    lastVac: e,
                                                    date: today
                                                })

                                            }}

                                            renderInput={(params) => <TextField {...params} />}
                                            style={styles.select}
                                        />
                                    </LocalizationProvider>
                                    {touched.dateVaccinated && errors.dateVaccinated && (
                                        <div style={{color: 'red'}}>{errors.dateVaccinated}</div>
                                    )}
                                </FormControl>


                                <div>
                                    <Typography style={{display: 'inline', marginRight: 20}}
                                                id="modal-modal-description" sx={{mt: 2}}>
                                        <p className={"bannerP"} style={styles.p}> Did you get Covid after being
                                            vaccinated?</p>
                                    </Typography>
                                    <FormControlLabel
                                        onChange={() => setValues({...values, reCovidCount: +!values.reCovidCount})}
                                        control={<Switch color={"secondary"} checked={+values.reCovidCount}/>}/>
                                    {console.log('values...', values)}
                                </div>
                                {values.reCovidCount &&
                                    <TextareaAutosize
                                        className={"bannerP"}
                                        aria-label="minimum height"
                                        minRows={3}
                                        placeholder="Any notes on your experience"
                                        style={styles.textArea}
                                        name="notes"
                                        onChange={handleChange}
                                    />
                                }
                            </div>
                        }
                        {error && <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: 30,
                            color: 'red'
                        }}>Something went wrong, please try again</div>}
                        <Button variant="contained" style={styles.btn1}
                                onClick={handleCloseModalprops}>Cancel</Button>
                        <Button variant="contained" style={styles.btn2}
                                onClick={handleSubmit}>Confirm {isSubmitting &&
                            <CircularProgress color='inherit'
                                              style={{marginLeft: '10px'}}
                                              size={20}/>}</Button>
                    </Box>
                </Modal>
            )}
        </Formik>
    );
}
const styles = {

    p: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'purple',
        marginTop: '10px',
        textTransform: 'capitalize',
        textAlign: 'left'
    },
    head: {
        fontSize: '1.5rem',
        color: 'purple',
        marginBottom: '10px',
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    select: {
        borderRadius: '10px',
        border: '1px solid purple',
    },
    btn1: {

        backgroundColor: 'purple',
        color: 'white',
        borderRadius: '10px',
        border: '1px solid purple',
        width: '45%',
        textTransform: 'uppercase',
        padding: '10px',
        textAlign: 'center',
        justifyContent: 'center',
        marginRight: '10px',


    },
    btn2: {
        backgroundColor: 'purple',
        color: 'white',
        borderRadius: '10px',
        border: '1px solid purple',
        width: '45%',
        textTransform: 'uppercase',
        padding: '10px',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: '10px',
    },
    textArea: {
        width: '100%',
        borderRadius: '10px',
        border: '1px solid purple',
        marginTop: '10px',
        marginBottom: '10px',
        color: '#000',
        padding: '10px',
        textTransform: 'capitalize'
    }


}
