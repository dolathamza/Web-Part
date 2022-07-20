import React, {useEffect, useState} from 'react';
import {getCountryData, getStatesOfCountry, getWorldData} from "../api";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";


const FunFactOne = () => {
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

        <section className="funfact-one">
            <div className="container">
                <img src="/assets/images/shapes/funfact-virus-1-1.png" className="funfact-one__virus-1" alt=""/>
                <img src="/assets/images/shapes/funfact-virus-1-2.png" className="funfact-one__virus-2" alt=""/>
                <h3><span className="counter">{valueLoading ? <CircularProgress size={25}/> : TotalCases}</span></h3>
                <p>People are Infected by this Virus</p>
            </div>
        </section>
    )

}
export default FunFactOne;

