//create a page to show the covid stats
import Head from 'next/head';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Layout from "/components/Layout";
import NavOne from "/components/NavOne";

import CallToActionThree from "/components/CallToActionThree";
import Footer from "/components/Footer";
import BrandOne from "/components/BrandOne";
import FaqOne from "/components/FaqOne";
import dynamic from 'next/dynamic'
// import axios from "axios";
import React, {useEffect, useState} from "react";
import {getAllCountries, getAllNews, getAllProvinces, getCountryData, getVaccineNews, getWorldData} from "../api";
import Main from "../components/main";
import home from "../components/main/home";
import PageHeader from "../components/PageHeader";
import {Container} from "react-bootstrap";


const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});


const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

function covidStats() {
    //    states


    const [country, setCountry] = useState('');
    const [countriesArray, setcountriesArray] = useState([]);
    const [state, setState] = useState('');
    const [stateDataArray, setStateDataArray] = useState([])
    const [loading, setLoading] = useState(false);
    const [TotalCases, setTotalCases] = useState(0);
    const [TotalDeaths, setTotalDeaths] = useState(0);
    const [TotalRecovered, setTotalRecovered] = useState(0);
    const [Infection_Risk, setInfection_Risk] = useState(0);
    const [NewCases, setNewCases] = useState(0);
    const [ActiveCases, setActiveCases] = useState(0);
    const [valueLoading, setValueLoading] = useState(false);
    const [title, setTitle] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);
    const [link, setLink] = useState([]);
    const [publishedAt, setPublishedAt] = useState([]);
    const [content, setContent] = useState([]);
    const [news, setNews] = useState([]);
    const [vaccineNews, setVaccineNews] = useState([]);
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ['Total Cases', "TotalDeaths", "TotalRecovered", "Infection_Risk", "NewCases", "ActiveCases"]
            },
            dataLabels: {
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                }
            },
            markers: {
                colors: ['#F44336', '#E91E63', '#9C27B0']
            }
        },
        series: [
            {
                name: "COVID-19",
                data: [TotalCases, TotalDeaths, TotalRecovered, Infection_Risk, NewCases, ActiveCases]
            }
        ]

    })


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
            setActiveCases(data.ActiveCases);
            setChartData({
                ...chartData,
                series: [{
                    name: "COVID-19",
                    data: [data.TotalCases, data.TotalDeaths, data.TotalRecovered, data.Infection_Risk, data.NewCases, data.ActiveCases]
                }]
            })
            // console.log('iso code...',isoCode);
            let statesofCountry = await getAllProvinces(isoCode);
            if (statesofCountry) {
                // console.log('statesofCountry..',statesofCountry.data)
                setStateDataArray(statesofCountry.data.data)
            }
            setValueLoading(false);
        }
    };

    const handleChangeState = (event) => {
        setValueLoading(true);
        setState(event.target.value);
        stateDataArray.filter((data) => {
            if (data.region.province === event.target.value) {
                setTotalCases(data.confirmed);
                setTotalDeaths(data.deaths)
                setTotalRecovered(data.recovered)
                setInfection_Risk(data.fatality_rate)
                setNewCases('Not Exist')
                setActiveCases(data.confirmed)
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
        const getCountries = async () => {
            setLoading(true);
            let countryData = await getAllCountries();
            if (countryData) {
                setcountriesArray(countryData.data);
                setLoading(false)
            }
        }
        const getAllNewsData = async () => {
            setLoading(true);
            let newsData = await getAllNews();
            if (newsData) {
                setNews(newsData.data.news.map((data) => data))
                setLoading(false);


            }
            setLoading(false);
        }

        const getAllVaccineData = async ()=>{
            setLoading(true);
            let vaccineData = await getVaccineNews();
            if(vaccineData){
                setVaccineNews(vaccineData.data.news.map((data)=>data))
                setLoading(false);

            }
            setLoading(false);
        }


        getAllVaccineData();
        getAllNewsData();
        getCountries();

    }, []);
    console.log('state name....', state)
    if (loading) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80vh'}}>
                <CircularProgress size={50}/>
            </Box>
        )
    }
    return (
        <div>
            <Layout pageTitle="BotMD - Covid Stats">
                <NavOne/>
                <PageHeader title="Covid Stats"/>
                <Main home={home}>

                </Main>
                <h1 className={"h1Stats"}>Covid Stats Country And State Wise</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: '100px'
                }}>
                    <Button className="selecth11" onClick={handleWorldData} variant="contained">World</Button>
                    {/* country */}
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel className={"selecth1"} id="demo-simple-select-label">country</InputLabel>
                            <Select className={"selecth11"}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={country}
                                    label="Country"
                                    onChange={handleChangeCountry}
                            >
                                {countriesArray.map((val) => {
                                    return <MenuItem key={val.Country}
                                                     value={`${val.Country}_${val.ThreeLetterSymbol}`}>{`${val.Country}`}</MenuItem>
                                })}

                            </Select>
                        </FormControl>
                    </Box>
                    {/* state */}
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel className={"selecth1"} id="demo-simple-select-label">State</InputLabel>
                            <Select className={"selecth11"}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={state}
                                    label="country"
                                    onChange={handleChangeState}
                            >
                                {stateDataArray.map((val) => {
                                    return <MenuItem key={val.region.province}
                                                     value={`${val.region.province}`}>{`${val.region.province}`}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div  className={"divStats"}>
                    <Card lg={12} sm={6} className={"CardStats"}>
                        <CardContent>
                            <Typography className={"TypoStats"} variant="h5" component="div">
                                Total Cases
                            </Typography>
                            <Typography className="TypoStatss" variant="body2">
                                <br/>
                                {valueLoading ? <CircularProgress size={25}/> : TotalCases}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className={"CardStats"}>
                        <CardContent>
                            <Typography className={"TypoStats"} variant="h5" component="div">
                                Total Deaths
                            </Typography>
                            <Typography variant="body2" className="TypoStatss">
                                <br/>
                                {valueLoading ? <CircularProgress size={25}/> : TotalDeaths}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className={"CardStats"}>
                        <CardContent>
                            <Typography className={"TypoStats"} variant="h5" component="div">
                                Total Recovered
                            </Typography>
                            <Typography variant="body2" className="TypoStatss">
                                <br/>
                                {valueLoading ? <CircularProgress size={25}/> : TotalRecovered}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className={"CardStats"}>
                        <CardContent>
                            <Typography className={"TypoStats"} variant="h5" component="div">
                                Infection Risk
                            </Typography>
                            <Typography variant="body2" className="TypoStatss">
                                <br/>
                                {valueLoading ? <CircularProgress size={25}/> : Infection_Risk}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className={"CardStats"}>
                        <CardContent>
                            <Typography className={"TypoStats"} variant="h5" component="div">
                                New Cases
                            </Typography>
                            <Typography variant="body2" className="TypoStatss">
                                <br/>
                                {valueLoading ? <CircularProgress size={25}/> : NewCases}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card className={"CardStats"}>
                        <CardContent>
                            <Typography variant="h5" component="div" className={"TypoStats"}>
                                Active Cases
                            </Typography>
                            <Typography variant="body2" className="TypoStatss">
                                <br/>
                                {valueLoading ? <CircularProgress size={25}/> : ActiveCases}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                </div>

                {/*{!valueLoading ?*/}
                {/*    (*/}
                {/*        <div style={styles.graphh}*/}
                {/*             className="app">*/}
                {/*            <div className="row">*/}
                {/*                <div  className="mixed-chart">*/}
                {/*                    <Chart style={styles.graphhh}*/}
                {/*                        options={chartData.options}*/}
                {/*                        series={chartData.series}*/}
                {/*                        type="bar"*/}
                {/*                        width="700"*/}

                {/*                    />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*    :*/}
                {/*    (<div style={{*/}
                {/*        marginTop: 0,*/}
                {/*        marginBottom: 200,*/}
                {/*        display: 'flex',*/}
                {/*        justifyContent: 'center',*/}
                {/*        alignItems: 'center'*/}
                {/*    }}>*/}
                {/*        <CircularProgress size={25}/>*/}
                {/*    </div>)*/}
                {/*}*/}
                {/*{console.log("title data: ",news)}*/}
                <section className="blog-one">
                    {/*{console.log("diets...",diets)}*/}
                    <div className="container">
                        <h1 className={"bannerP"} style={{
                            textAlign: "center",
                            marginBottom: 20,
                            color: "white"
                        }}>Covid News</h1>
                        <div className="row">
                            {news && news.map((val, index) => {
                                return (

                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="blog-one__single">
                                            <div className="blog-one__single-inner">
                                                <div className="blog-one__image">
                                                    <a href={val.link} target={"_blank"}>
                                                        <a>+</a>
                                                    </a>
                                                    <img src={val.urlToImage} alt=""/>
                                                </div>
                                                <div className="blog-one__content">
                                                    <ul className="blog-one__meta list-unstyled">
                                                        <li><a style={{fontSize:10, textTransform:"capitalize"}} href={val.link}>{val.pubDate}</a></li>
                                                        <li><a style={{fontSize:10, textTransform:"capitalize"}} href={val.link}>{val.reference}</a></li>

                                                    </ul>
                                                    <h3><a href={val.link}>{val.title}</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>



                <section className="blog-one">
                    {/*{console.log("diets...",diets)}*/}
                    <div className="container">
                        <h1 className={"bannerP"} style={{
                            textAlign: "center",
                            marginBottom: 20,
                            color: "white"
                        }}>Vaccination News</h1>
                        <div className="row">
                            {vaccineNews && vaccineNews.map((val, index) => {
                                return (

                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="blog-one__single">
                                            <div className="blog-one__single-inner">
                                                <div className="blog-one__image">
                                                    <a href={val.link} target={"_blank"}>
                                                        <a>+</a>
                                                    </a>
                                                    <img src={val.urlToImage} alt=""/>
                                                </div>
                                                <div className="blog-one__content">
                                                    <ul className="blog-one__meta list-unstyled">
                                                        <li><a style={{fontSize:10, textTransform:"capitalize"}} href={val.link}>{val.pubDate}</a></li>
                                                        <li><a style={{fontSize:10, textTransform:"capitalize"}} href={val.link}>{val.reference}</a></li>

                                                    </ul>
                                                    <h3><a href={val.link}>{val.title}</a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>

                <CallToActionThree/>


                <BrandOne/>
                <FaqOne/>
                <Footer/>
            </Layout>
            <Head>
                <link rel="stylesheet" href="/assets/css/dark.css"/>
            </Head>
        </div>)

}

//
// const styles = {
//     graphh: {
//         marginTop: 0,
//         marginBottom: 200,
//         display: 'flex',
//         justifyContent: 'center',
//
//         alignItems: 'center'
//     },
//     graphhh: {
//         marginTop: 0,
//         marginBottom: 200,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//     }
// }

export default covidStats;

