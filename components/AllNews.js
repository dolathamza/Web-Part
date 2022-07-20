//
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Moment from "react-moment";
// import {fetchNews} from "../redux/actions/newsAction";
// import Loading from "/components/Loading"
// import {Card, Col} from "react-bootstrap";
// class News extends React.Component {
//     componentDidMount() {
//         this.props.dispatch(fetchNews());
//
//     }
//
//     render(){
//         let {reports,loading} = this.props;
//         let newReport = reports.items;
//         let trendingNews = []
//         for(let news in newReport){
//             trendingNews.push(newReport[news])
//         }
//
//         if(loading){
//             return( <div className="text-center">
//                     <Loading name="Trending News" />
//                 </div>
//             );
//         } else{
//             return (
//
//                 <section className="blog-one">
//                     <div className="container">
//
//                         <div className="row">
//                             {trendingNews.map((report) => (
//                                 <Col xs={12} sm={12} md={6} lg={4}>
//                                     <Card style={{ width: "100%" }}>
//                                         <Card.Img variant="top" src={report.urlToImage} />
//                                         <Card.Body>
//                                             {/* news title */}
//                                             <Card.Title>{report.title}</Card.Title>
//
//                                             {/* date published */}
//                                             <Card.Subtitle className="mb-2 text-muted">
//                                                 <Moment>{report.publishedAt}</Moment>
//                                             </Card.Subtitle>
//
//                                             {/* author */}
//                                             <Card.Subtitle className="mb-2 text-muted author">
//                                                 Author:{" "}
//                                                 <span>
//                       {report.author
//                           ? report.author
//                           : "Author's details not Found"}
//                     </span>
//                                             </Card.Subtitle>
//
//                                             {/* read more */}
//                                             <Card.Link href={report.url}>Read Full Article</Card.Link>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             ))}
//
//
//
//
//
//
//                         </div>
//                         <div className="post-pagination">
//                             <a href="#" className="post-pagination__prev"><i className="fa fa-angle-left"></i></a>
//                             <a href="#" className="active">1</a>
//                             <a href="#">2</a>
//                             <a href="#">3</a>
//                             <a href="#" className="post-pagination__next"><i className="fa fa-angle-right"></i></a>
//                         </div>
//                     </div>
//                 </section>
//             )
//         }
//
//     }
// }
// // Map Redux state to React component props
// const mapStateToProps = (state) => ({
//     loading: state.news.loading,
//     reports: state.news.news,
//     hasErrors: state.news.hasErrors,
// });
//
// // Connect Redux to React
// export default connect(mapStateToProps)(AllNews);
// external imports
import React, {Component} from "react";
import {Card, Col, Row} from "react-bootstrap/";
import {connect} from "react-redux";
import Moment from "react-moment";

// internal imports
import Loading from "./Loading";
import PageTitle from "./PageTitle";
import {fetchNews} from "../redux/actions/newsAction";

class AllNews extends Component {
    // invoke newsReducer here
    componentDidMount() {
        this.props.dispatch(fetchNews());
    }

    render() {
        let {reports, loading} = this.props;
        let newsReport = reports.items;
        let trendingNews = []

        // convert the reports from object to array
        for (let news in newsReport) {
            trendingNews.push(newsReport[news])
        }

        // show loading while data is being fetched
        if (loading) {
            return (
                <div className="text-center">
                    <Loading name="Trending News"/>
                </div>
            );
        } else {
            // data from API displayed after fetch is complete
            return (
                <Row className="all-news">
                    {/* page title */}
                    <PageTitle title="Trending News"/>

                    {/* news report */}
                    {trendingNews.map((report) => (
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <Card style={{width: "100%"}}>
                                <Card.Img variant="top" src={report.urlToImage}/>
                                <Card.Body>
                                    {/* news title */}
                                    <Card.Title>{report.title}</Card.Title>

                                    {/* date published */}
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <Moment>{report.publishedAt}</Moment>
                                    </Card.Subtitle>

                                    {/* author */}
                                    <Card.Subtitle className="mb-2 text-muted author">
                                        Author:{" "}
                                        <span>
                      {report.author
                          ? report.author
                          : "Author's details not Found"}
                    </span>
                                    </Card.Subtitle>

                                    {/* read more */}
                                    <Card.Link href={report.url}>Read Full Article</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            );
        }
    }
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
    loading: state.news.loading,
    reports: state.news.news,
    hasErrors: state.news.hasErrors,
});

// Connect Redux to React
export default connect(mapStateToProps)(AllNews);
