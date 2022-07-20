import Layout from "/components/Layout";
import NavOne from "/components/NavOne";
import Footer from "/components/Footer";
import PageHeader from "/components/PageHeader";
import React, {useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {useUser} from '/components/userState';
import {useRouter} from 'next/router'
import {Rate} from 'antd';
import {getSingleLabFromFirestoreDBById} from '../../firebaseFirestore';
// formatted_address : "str1",
// name : "test",
// photo : "url",
// place_id : "ChIJreyvwSOl3zgRn5Gx_878NK0",
// rating : "3.2",
// user_ratings_total: 5,
// geometry : {
//     location : {
//         lat : 12312,
//         lng : 24234
//     },
//     viewport : {
//         notrheast : {
//             lat : 12312,
//         lng : 24234
//         },
//         soutrhwest : {
//             lat : 12312,
//         lng : 24234
//         }
//     }
// }


const LabsIdPage = () => {

    const {user, isAuthenticated, loading} = useUser({redirectTo: "/login"});
    let router = useRouter();
    const [data, setData] = React.useState(null);
    const [stateLoading, setStateLoading] = React.useState(true);
    const [error, setError] = useState(false);
    const {id} = router.query;


    React.useEffect(() => {
        async function getLab() {
            console.log("useefect...")
            if (id) {
                try {
                    setError(false);
                    let res = await getSingleLabFromFirestoreDBById(id);
                    console.log("res", res);
                    setData(res);
                    setStateLoading(false);

                } catch (error) {
                    setStateLoading(false);
                    setError(true);
                    console.log("error...", error);
                }
            }
        }


        getLab();

    }, [id])
    if (stateLoading) {
        return (
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CircularProgress size={40}/>
            </div>
        )
    }

    return (

        <Layout pageTitle="Labs">
            {(isAuthenticated && user) && (
                <>
                    <NavOne/>

                    <PageHeader title="Labs Information"/>
                    {error ? <div style={{
                            width: '100%',
                            height: 200,
                            color: 'red',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>Something went wrong, Please try again</div>

                        :
                        <div style={styles.divTitle}>
                            <h1 style={styles.heading}>Name of lab :
                                <p style={styles.p} className={"bannerP"}>{data && data.name}</p></h1>
                            <h1 style={styles.heading}>Address : <p style={styles.p}
                                                                    className={"bannerP"}> {data && data.formatted_address}</p>
                            </h1>
                            <h1 style={styles.heading}>Ratings Given By Users To This Lab :<br/><Rate
                                defaultValue={data && data.rating} disabled={true} className={"bannerP"}
                                value={data && data.rating}> </Rate></h1>
                            <h1 style={styles.heading}>Total User Ratings Of This Lab : <p style={styles.p}
                                                                                           className={"bannerP"}>{data && data.user_ratings_total}</p>
                            </h1>
                            {/*{data && data.geometry && data.geometry.location && data.geometry.location.lat && data.geometry.location.lng &&*/}
                            {/*    <h1>Latitude : {data && data.geometry.location.lat}</h1>}*/}
                            {/*{data && data.geometry && data.geometry.location && data.geometry.location.lat && data.geometry.location.lng &&*/}
                            {/*    <h1>Longitude : {data && data.geometry.location.lng}</h1>}*/}
                            <div style={styles.mapDiv}>
                                <iframe style={styles.map} className="google-map__contact" allowFullScreen
                                        src="https://maps.google.com/maps?q={data&& data.geometry.location.lat},{data&& data.geometry.location.lng}&hl=es;z=14&amp;output=embed"></iframe>
                            </div>

                        </div>
                    }


                    <Footer/>
                </>
            )}
            {(!isAuthenticated && loading && !user) && (
                <div style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <CircularProgress size={40}/>
                </div>
            )}
        </Layout>
    )

}

const styles = {
    map: {


        border: 'none',
        borderRadius: "20px 0px 20px 0px"
    },
    mapDiv: {
        padding: "30px",
        width: "100%",


    },
    divTitle: {
        padding: "30px",
        display: 'flex',
        width: '100%',
        height: '200',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        margintBottom: 20
    },
    heading: {
        fontSize: "40px",
        fontWeight: "bold",
        color: "#fff",
        marginBottom: "20px",
        textAlign: "center"
    },
    p: {
        fontSize: "20px",
        fontWeight: "normal",
        color: "#fff",
        marginTop: "20px",
        textAlign: "center"
    }
}


export default LabsIdPage;