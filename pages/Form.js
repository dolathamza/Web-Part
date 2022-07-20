import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import axios from "axios";
import {Button} from "@material-ui/core";
import {notification} from 'antd';

function openNotification(message, description) {
    notification.open({
        message: message,
        description: description,
        onClick: () => {
            window.location.href = '/#Labs';
        },
        duration: 20
    });
}

function openNotificationforNotCovid(message, description) {
    notification.open({
        message: message,
        description: description,
        onClick: () => {
            window.location.href = '/covidStats';
        },
        duration: 20,
    });
}

const Form = () => {
    const [q1, setQ1] = useState('yes');
    const [q2, setQ2] = useState('yes');
    const [q3, setQ3] = useState('yes');
    const [q4, setQ4] = useState('yes');
    const [q5, setQ5] = useState('yes');
    const [q6, setQ6] = useState('yes');
    const [q7, setQ7] = useState('yes');
    const [q8, setQ8] = useState('yes');
    const [q9, setQ9] = useState('yes');

    const handleSubmit = async (e) => {
        try {
            console.log("working")
            console.log(q1.toLowerCase());
            console.log(q2);
            console.log(q3);
            console.log(q4);
            console.log(q5);
            console.log(q6);
            console.log(q7);
            console.log(q8);
            console.log(q9)
            console.log("END")
            let url = `https://symptom-predictor.herokuapp.com/predict?v1=${q1.toLowerCase()}&v2=${q2.toLowerCase()}&v3=${q3.toLowerCase()}&v4=${q4.toLowerCase()}&v5=${q5.toLowerCase()}&v6=${q6.toLowerCase()}&v7=${q7.toLowerCase()}&v8=${q8.toLowerCase()}&v9=${q9.toLowerCase()}`
            let data = await axios.get(url).then(async res => {
                console.log(res.data["result"]);
                var response = res.data["result"];
                if (res.data["result"] === "Covid") {
                    // const response = document.createElement('Alert');
                    // response.innerHTML = `Your Symptoms are likely to be ${response}, We suggest that you take precautionary measures to prevent the spread of the virus.`;
                    // document.getElementById('alert').appendChild(response);
                    await openNotification("Your Symptoms are likely to be Covid", `We suggest that you take precautionary measures to prevent the spread of the virus. Click Me to Get a list of Labs offering Covid Test `);
                    setTimeout(function () {
                        window.location.reload();
                    }, 15000);
                } else if (res.data["result"] === "None") {
                    await openNotificationforNotCovid("Your Symptoms are likely to be Not Covid", `We suggest that you take precautionary measures to prevent the deadly Virus. Click Me to Get a list of Diets for Healthy Eating `);
                    setTimeout(function () {
                        window.location.reload();
                    }, 15000);
                } else if (res.data["result"] === "Pre Covid" || res.data["result"] === "Pre-Covid") {
                    await openNotification(`Your Symptoms are likely to be ${res.data["result"]} `, `We suggest that you take precautionary measures to prevent the spread of the virus. Click Me to Get a list of Labs offering Covid Test`);
                    setTimeout(function () {
                        window.location.reload();
                    }, 15000);
                } else if (res.data["result"] === "Post Covid" || res.data["result"] === "Post-Covid") {
                    await openNotification(`Your Symptoms are likely to be ${res.data["result"]} `, `We suggest that you take precautionary measures to prevent the spread of the virus. Click Me to Get a list of Labs offering Covid Test`);
                    //add a timer of 10 seconds and then reload the page

                    setTimeout(function () {
                        window.location.reload();
                    }, 15000);
                }
                return res.data;
            }).catch(err => {
                console.log("error", err);
            });
        } catch (err) {
            console.log("error is:", err)
        }
    }


    return (

        <section className="contact-one">

            <div className="container">
                <div className="block-title text-center">
                    <p>Afraid that you might have covid?</p>
                    <h3>Lets Track Your Symptoms</h3>
                </div>
                <FormControl className="contact-one__form" style={styles.FormContainer}>

                    <FormControl>
                        <h1 style={styles.h1}>Question 1</h1>
                        <FormLabel style={styles.label} className={"bannerP"} id="demo-radio-buttons-group-label"><p
                            className={"bannerP"}>Do
                            you Feel Fever?</p></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Yes"
                            name="radio-buttons-group"
                            aria-required={true}
                        >
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="Yes"
                                              control={<Radio/>}
                                              label="Yes"
                                              onClick={event => setQ1(event.target.value)}

                            />
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="No"
                                              control={<Radio/>}
                                              label="No"
                                              onClick={event => setQ1(event.target.value)}
                            />

                        </RadioGroup>
                        <h1 style={styles.h1}>Question 2</h1>
                        <FormLabel style={styles.label} className={"bannerP"} id="demo-radio-buttons-group-label"><p
                            className={"bannerP"}>Do you feel tired?</p></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Yes"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="Yes"
                                              control={<Radio/>}
                                              label="Yes"
                                              onClick={event => setQ2(event.target.value)}

                            />
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="No"
                                              control={<Radio/>}
                                              label="No"
                                              onClick={event => setQ2(event.target.value)}
                            />

                        </RadioGroup>
                        <h1 style={styles.h1}>Question 3</h1>
                        <FormLabel style={styles.label} className={"bannerP"} id="demo-radio-buttons-group-label"><p
                            className={"bannerP"}>Do you have dry cough?</p></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Yes"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="Yes"
                                              control={<Radio/>}
                                              label="Yes"
                                              onClick={event => setQ3(event.target.value)}

                            />
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="No"
                                              control={<Radio/>}
                                              label="No"
                                              onClick={event => setQ3(event.target.value)}
                            />

                        </RadioGroup>
                        <h1 style={styles.h1}>Question 4</h1>
                        <FormLabel style={styles.label} className={"bannerP"} id="demo-radio-buttons-group-label"><p
                            className={"bannerP"}>Do you feel any kind of difficultly in breathing?</p></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Yes"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="Yes"
                                              control={<Radio/>}
                                              label="Yes"
                                              onClick={event => setQ4(event.target.value)}

                            />
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="No"
                                              control={<Radio/>}
                                              label="No"
                                              onClick={event => setQ4(event.target.value)}
                            />

                        </RadioGroup>
                        <h1 style={styles.h1}>Question 5</h1>
                        <FormLabel style={styles.label} className={"bannerP"} id="demo-radio-buttons-group-label"><p
                            className={"bannerP"}>Do you have sore throat?</p></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Yes"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="Yes"
                                              control={<Radio/>}
                                              label="Yes"
                                              onClick={event => setQ5(event.target.value)}

                            />
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="No"
                                              control={<Radio/>}
                                              label="No"
                                              onClick={event => setQ5(event.target.value)}
                            />

                        </RadioGroup>
                        <h1 style={styles.h1}>Question 6</h1>
                        <FormLabel style={styles.label} className={"bannerP"} id="demo-radio-buttons-group-label"><p
                            className={"bannerP"}>Do you feel any pains in your body?</p></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Yes"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="Yes"
                                              control={<Radio/>}
                                              label="Yes"
                                              onClick={event => setQ6(event.target.value)}

                            />
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="No"
                                              control={<Radio/>}
                                              label="No"
                                              onClick={event => setQ6(event.target.value)}
                            />

                        </RadioGroup>
                        <h1 style={styles.h1}>Question 7</h1>
                        <FormLabel style={styles.label} className={"bannerP"} id="demo-radio-buttons-group-label"><p
                            className={"bannerP"}>Do you have nasal congestion?</p></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Yes"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="Yes"
                                              control={<Radio/>}
                                              label="Yes"
                                              onClick={event => setQ7(event.target.value)}

                            />
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="No"
                                              control={<Radio/>}
                                              label="No"
                                              onClick={event => setQ7(event.target.value)}
                            />

                        </RadioGroup>

                        <h1 style={styles.h1}>Question 8</h1>
                        <FormLabel style={styles.label} className={"bannerP"} id="demo-radio-buttons-group-label"><p
                            className={"bannerP"}>Do you have runny nose?</p></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Yes"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="Yes"
                                              control={<Radio/>}
                                              label="Yes"
                                              onClick={event => setQ8(event.target.value)}

                            />
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="No"
                                              control={<Radio/>}
                                              label="No"
                                              onClick={event => setQ8(event.target.value)}
                            />

                        </RadioGroup>
                        <h1 style={styles.h1}>Question 9</h1>
                        <FormLabel style={styles.label} className={"bannerP"} id="demo-radio-buttons-group-label"><p
                            className={"bannerP"}>Do you have diarrhea?</p></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Yes"
                            name="radio-buttons-group"
                            aria-required={true}
                        >
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="Yes"
                                              control={<Radio/>}
                                              label="Yes"
                                              onClick={event => setQ9(event.target.value)}


                            />
                            <FormControlLabel className={"bannerP"} style={styles.radiolabel}
                                              value="No"
                                              control={<Radio/>}
                                              label="No"
                                              onClick={event => setQ9(event.target.value)}
                            />

                        </RadioGroup>

                        <Button variant="contained" style={styles.btn} onClick={handleSubmit}>Submit Data</Button>
                    </FormControl>

                </FormControl>

            </div>

        </section>
    );
}
const styles = {
    FormContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',

        backgroundColor: '#f5f5f5',
        padding: '50px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        boxShadow: '0px 0px 10px #ccc',

    },
    label: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#000',
        padding: '10px',
        borderBottom: '1px solid #000',
        fontfamily: 'sans-serif',


    },
    radiolabel: {
        fontSize: '15px',
        fontWeight: 'bold',
        padding: '10px',
        color: '#000',


    },
    btn: {
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '20px',
        marginBottom: '20px',
        padding: '10px',
        borderRadius: '10px',

    },
    h1: {
        fontSize: '22px',
        fontWeight: '600',
        color: '#000',
        padding: '10px',
    },
    response: {
        fontSize: '20px',
        color: '#fff',
        padding: '10px',
        border: '1px solid red',
        backgroundColor: 'red',
        borderRadius: '10px',
        boxShadow: '0px 0px 5px red',

        textAlign: 'center',
    }
}

export default Form

