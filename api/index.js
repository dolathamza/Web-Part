import axios from 'axios';


const API = axios.create({
    baseURL: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/',
    headers: {
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': '513fa29445msh1d3a966c936eac8p1d9958jsn0b1e0f6defa7'
    }
})
// const country = document.getElementById('country');
export const getWorldData = () => API.get('npm-covid-data/world');
export const getCountryData = (country, code) => API.get(`npm-covid-data/country-report-iso-based/${country}/${code}`);
export const getAllCountries = () => API.get('npm-covid-data/countries-name-ordered');
export const getStatesOfCountry = (country) => API.get(`api-covid-data/reports/${country}`)
export const getAllNews = () => API.get('news/get-coronavirus-news/0')
export const getVaccineNews = () => API.get('news/get-vaccine-news/0');

export const getLabsData = () => axios.get('http://localhost:3000/api/LabsData');


const API2 = axios.create({
    baseURL: 'https://covid-19-statistics.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
        'X-RapidAPI-Key': 'c0aba166e9msh1709e89166694b6p1fc8bfjsn9cf51bd71ca6'
    }
})

export const getAllProvinces = (ISO) => API2.get(`reports?iso=${ISO}`)


