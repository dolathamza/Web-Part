import Layout from "/components/Layout";
import NavOne from "/components/NavOne";
import Footer from "/components/Footer";
import PageHeader from "/components/PageHeader";
import React, {useState} from 'react';
import img from '../../../public/assets/images/user/img.jpeg';
import CircularProgress from '@mui/material/CircularProgress';
import {useUser} from '/components/userState';
import {useRouter} from 'next/router'
import Image from 'next/image'
import {getSingleDietPlanOfADiet} from '../../../firebaseFirestore';
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
                    let res = await getSingleDietPlanOfADiet(id);
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
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            height: '200',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                            margintBottom: 20
                        }}>
                            <h1>Name of lab : {data && data.name}</h1>
                            <h1>Rating : {data && data.rating} </h1>
                            <h1>Address : {data && data.formatted_address}</h1>
                            <h1>user_ratings_total : {data && data.user_ratings_total}</h1>


                            <Image src={img} width="110" height="110"/>

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
export default LabsIdPage;