import React, {useState} from 'react';
import {getRemedyPlansOfADiet} from '../../firebaseFirestore';
import {useSelector} from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import {useRouter} from 'next/router';

// expands
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//


export default function News() {
    let {remedies, fetched, remediesLoading} = useSelector(state => state.Diets);
    let router = useRouter();
    let {id} = router.query;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //   expands
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    const [expanded1, setExpanded1] = React.useState(false);

    const handleChange1 = (panel) => (event, isExpanded) => {
        setExpanded1(isExpanded ? panel : false);
    }
    //
    React.useEffect(() => {

        async function getRemedies() {
            try {
                if (id) {
                    console.log("useefcect called...")
                    setError(false);
                    let res = await getRemedyPlansOfADiet(id);
                    if (res) {
                        setData(res);
                        setLoading(false)
                    }
                }
            } catch (error) {
                setLoading(false);
                setError(true);
                console.log("error in remedies component...", error)
            }
        }

        getRemedies();

    }, [id])


    if (loading) {
        return (
            <div style={{width: '100%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress size={40}/>
            </div>)
    }
    return (

        <Layout pageTitle="Diets">
            {console.log("data...", data)}
            <>
                <NavOne/>

                <PageHeader title="Diets Information"/>
                {error ? <div style={{
                    width: '100%',
                    height: 200,
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>Something went wrong, Please try again</div> : (// <section className="blog-one">

                    //     <div className="container">
                    //         <div className="row">


                    <div style={styles.mainContainer}>

                        {!loading && data.map((data, index) => {
                            return (

                                // <div key={index} className="col-lg-4 col-md-6">
                                //     <div className="blog-one__single">
                                //         <div className="blog-one__single-inner">
                                //             <div className="blog-one__image">
                                //                 <Link href="/news-details">
                                //                     <a>+</a>
                                //                 </Link>
                                //                 <img src="/assets/images/blog/blog-1-1.jpg" alt="" />
                                //             </div>
                                //             <div className="blog-one__content">
                                //                 <ul className="blog-one__meta list-unstyled">
                                //                     <li><a href="#">22 Mar, 2020</a></li>
                                //                     <li><a href="#">2 Comments</a></li>
                                //                 </ul>
                                //                 <h3><Link href="/news-details"><a>{data.title}</a></Link>
                                //                 </h3>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>

                                // expands


                                <div>
                                    <Accordion style={styles.accord} key={index}
                                               expanded={expanded === `${data.title}`}
                                               onChange={handleChange(`${data.title}`)}>

                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon/>}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >

                                            <Typography sx={{width: '33%', flexShrink: 0}}>
                                                <p className={"bannerP"} style={styles.p}>Title: {data.title} </p>
                                            </Typography>
                                            <Typography sx={{color: 'text.secondary'}}><p className={"bannerP"}
                                                                                          style={styles.p}> Subtitle: {data.subtitle}</p>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {/*sub accordin start  */}
                                                {data.content && data.content.map((val, indexValue) => {
                                                    return (<Accordion style={styles.subaccord} key={indexValue}
                                                                       expanded={expanded1 === `${val.para}`}
                                                                       onChange={handleChange1(`${val.para}`)}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon/>}
                                                            aria-controls="panel1bh-content"
                                                            id="panel1bh-header"
                                                        >
                                                            <Typography sx={{width: '33%', flexShrink: 0}}>
                                                                <p className={"bannerP"}
                                                                   style={styles.p}>   {val.heading} </p>
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <p className={"bannerP"}>{val.para}</p>
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>)
                                                })}
                                                {/* sub accordin end */}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>

                            )
                        })}
                        {/* </div>
                </div>
            </section> */}
                    </div>)}
                {data && !data.length && <div style={{
                    width: '100%',
                    height: 100,
                    color: 'green',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>No record found</div>}
                {data === null && <div style={{
                    width: '100%',
                    height: 100,
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>Please again fetch records</div>}

                <Footer/>
            </>

        </Layout>


    )

}

const styles = {
    mainContainer: {
        width: '100%',
        height: 'auto',
        padding: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px'
    }, accord: {
        width: '100%',
        height: 'auto',
        padding: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        borderRadius: '10px 50px 10px 50px',
        boxShadow: '5px 4px 8px 0 #ffd240',
        backgroundImage: "linear-gradient(to right, #ffd240 0%, #fa9442 50%)",

    }, p: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'purple',
        textTransform: 'capitalize',
        marginTop: '10px',
        marginBottom: '10px'
    }, subaccord: {
        width: '100%',
        height: 'auto',
        padding: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        borderRadius: '50px 10px 50px 10px',
        boxShadow: '5px 4px 8px 0 #ffd240',

        marginLeft: '20px',
        marginRight: '20px'
    }
}
