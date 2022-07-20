import React from 'react';
import Link from "next/link";
import {getAllDiets} from '../firebaseFirestore';
import {useDispatch, useSelector} from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {diets_loading, get_all_diest} from '../redux/types';
import {useRouter} from 'next/router';

export default function News() {
    let {diets, fetched, dietsLoading} = useSelector(state => state.Diets);
    let dispatch = useDispatch();
    let router = useRouter()

    React.useEffect(() => {

        async function getDiets() {
            try {
                dispatch(diets_loading(true))
                let res = await getAllDiets();
                if (res) {
                    dispatch(get_all_diest(res))
                }
            } catch (error) {
                dispatch(diets_loading(false));
                console.log("error in diets component...", error)
            }
        }

        if (!fetched) {
            getDiets();
        }
    }, [fetched])


    if (dietsLoading) {
        return (
            <div style={{width: '100%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress size={40}/>
            </div>
        )
    }
    return (

        <section className="blog-one">
            {/*{console.log("diets...",diets)}*/}
            <h1 style={styles.diets}>Diets</h1>
            <div className="container">

                <div className="row">
                    {fetched && diets.map((data) => {
                        return (
                            <div key={data.id} className="col-lg-4 col-md-6">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-inner">
                                        <div className="blog-one__image">
                                            <Link href={`/diets/${data.id}`}>
                                                <a>+</a>
                                            </Link>
                                            <img src={data.image} alt=""/>
                                        </div>
                                        <div className="blog-one__content">

                                            <h3><Link href={`/diets/${data.id}`}><a>{data.title}</a></Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-2.jpg" alt="" />
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>Even dead cats bounce. Throughput. Hit the</a></Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-3.jpg" alt="" />
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>Highlights window-licker touch base. This
                                                                                    medium</a></Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-4.jpg" alt="" />
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>We don't want to boil the ocean put a record
                                            on</a></Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-5.jpg" alt="" />
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>Vec staff engagement, or high-level, or
                                            win-win</a></Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-6.jpg" alt="" />
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>Closer to the metal net net for we need to
                                            make </a></Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                </div>
                {/* <div className="post-pagination">
                        <a href="#" className="post-pagination__prev"><i className="fa fa-angle-left"></i></a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#" className="post-pagination__next"><i className="fa fa-angle-right"></i></a>
                    </div> */}
            </div>
        </section>
    )

}

const styles = {
    diets: {
        fontSize: '5rem',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: '9rem'

    }
}