import React, {useEffect, useState} from 'react';
import {getCountryData, getStatesOfCountry, getWorldData} from "../api";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const AboutOne = () => {
    const [country, setCountry] = useState('');
    const [countriesArray, setcountriesArray] = useState([]);
    const [state, setState] = useState('');
    const [stateDataArray, setStateDataArray] = useState([]);

    const [loading, setLoading] = useState(false);
    const [TotalCases, setTotalCases] = useState(0);
    const [TotalDeaths, setTotalDeaths] = useState(0);
    const [TotalRecovered, setTotalRecovered] = useState(0);
    const [Infection_Risk, setInfection_Risk] = useState(0);
    const [NewCases, setNewCases] = useState(0);
    const [ActiveCases, setActiveCases] = useState(0);
    const [valueLoading, setValueLoading] = useState(false);


    // functions
    const handleChangeCountry = async (event) => {
        setCountry(event.target.value);
        let value = event.target.value;
        let length = value.length;
        let offset = value.indexOf("_");
        let countryName = value.slice(0, offset);
        let isoCode = value.slice(offset + 1, length);
        setValueLoading(true);
        let countryData = await getCountryData(countryName, isoCode);
        if (countryData) {
            var data = countryData.data[0];
            setTotalCases(data.TotalCases);
            setTotalDeaths(data.TotalDeaths)
            setTotalRecovered(data.TotalRecovered)
            setInfection_Risk(data.Infection_Risk)
            setNewCases(data.NewCases)
            setActiveCases(data.ActiveCases)
            let statesofCountry = await getStatesOfCountry(isoCode);
            if (statesofCountry) {
                // console.log('state data...', statesofCountry)
                setStateDataArray(statesofCountry.data)
            }
            setValueLoading(false);
        }
    };

    const handleChangeState = (event) => {
        setValueLoading(true);
        setState(event.target.value);
        stateDataArray.filter((data) => {
            if (data.province === event.target.value) {
                setTotalCases(data.active);
                setTotalDeaths(data.deaths)
                setTotalRecovered(data.recovered)
                setInfection_Risk("Not Exist")
                setNewCases('Not Exist')
                setActiveCases(data.active)
                setValueLoading(false);
            }
        })
    };

    const handleWorldData = async () => {
        setCountry('')
        setState('');
        setValueLoading(true);
        var worldData = await getWorldData();
        if (worldData)
            var data = worldData.data[0];
        setTotalCases(data.TotalCases);
        setTotalDeaths(data.TotalDeaths)
        setTotalRecovered(data.TotalRecovered)
        setInfection_Risk(data.Infection_Risk)
        setNewCases(data.NewCases)
        setActiveCases(data.ActiveCases)
        setValueLoading(false)

    }
    useEffect(() => {
        const handleWorldData = async () => {
            setCountry('')
            setState('');
            setValueLoading(true);
            var worldData = await getWorldData();
            if (worldData)
                var data = worldData.data[0];
            setTotalCases(data.TotalCases);
            setTotalDeaths(data.TotalDeaths)
            setTotalRecovered(data.TotalRecovered)
            setInfection_Risk(data.Infection_Risk)
            setNewCases(data.NewCases)
            setActiveCases(data.ActiveCases)
            setValueLoading(false)

        }
        handleWorldData();
    }, []);
    // console.log('state name....', state)
    if (loading) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80vh'}}>
                <CircularProgress size={50}/>
            </Box>
        )
    }


    return (

        <section className="about-one">
            <img src="/assets/images/shapes/virus-shape-1-1.png" className="about-one__virus" alt=""/>
            <div className="container">
                <div className="inner-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-one__images wow fadeInLeft"
                                 data-wow-animation-duration="1500ms">
                                <img width={500} src="assets/images/3.jpg" alt=""/>
                                <img width={300} src="assets/images/4.jpg" alt=""/>
                                <a href="href=https://www.youtube.com/watch?v=Xj1nUFFVK1E"
                                   className="about-one__video-btn video-popup"><i
                                    className="fa fa-play"></i></a>
                            </div>
                            <div className="about-one__fact-wrap">
                                <div className="about-one__fact">
                                    <div className="about-one__fact-icon">
                                        <i className="vimns-icon-mask"></i>
                                    </div>
                                    <div className="about-one__fact-content">
                                        <h4>{valueLoading ? <CircularProgress size={25}/> : TotalRecovered}
                                        </h4>
                                        <p>Recovered <br/> Patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__content">
                                <div className="block-title text-left">
                                    <p style={styles.intro}>Introduction of Coronavirus </p>
                                    <h3>Coronavirus disease (COVID-19)</h3>
                                </div>
                                <div className="about-one__icon-box">
                                    <div className="about-one__icon">
                                        <i className="vimns-icon-virus"></i>
                                    </div>
                                    <div className="about-one__icon-content">
                                        <p className={'dett'} style={styles.dett}>
                                            Coronavirus disease (COVID-19) is an infectious disease caused by a new
                                            virus.
                                        </p>
                                    </div>
                                </div>
                                <p className={'det'} style={styles.det}>
                                    The disease causes respiratory illness (like the flu) with symptoms such as a
                                    cough, fever, and in more severe cases, difficulty breathing. You can protect
                                    yourself by washing your hands frequently, avoiding touching your face, and
                                    avoiding close contact (1 meter or 3 feet) with people who are unwell. The best
                                    way to prevent infection is to avoid close contact with anyone who is unwell.
                                </p>

                                <ul className="list-unstyled about-one__list">
                                    <li className={"listt"} style={styles.list}><i
                                        className="vimns-icon-tick"></i> Wash your hands regularly for 20
                                        seconds.
                                    </li>
                                    <li style={styles.list} className={"listt"}><i
                                        className="vimns-icon-tick"></i> Cover your nose and mouth with a
                                        disposable tissue.
                                    </li>
                                    <li style={styles.list} className={"listt"}><i
                                        className="vimns-icon-tick"></i> Avoid close contact (1 meter or 3
                                        feet) with people.
                                    </li>
                                    <li style={styles.list} className={"listt"}><i
                                        className="vimns-icon-tick"></i> Stay home and self-isolate from
                                        others in the household.
                                    </li>
                                    <li style={styles.list} className={"listt"}><i
                                        className="vimns-icon-tick"></i> Protect yourself and help prevent
                                        spreading the virus.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)


}
export default AboutOne;

const styles = {
    intro: {
        fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem'
    },
    det: {
        fontSize: '1rem', color: '#fff', marginBottom: '1rem', fontWeight: 'lighter'
    },
    dett: {
        fontSize: '1.2rem', color: '#fff', marginBottom: '1rem', fontWeight: 'bold'
    },
    list: {
        color: '#fff',
        fontWeight: 'normal',


    }
}