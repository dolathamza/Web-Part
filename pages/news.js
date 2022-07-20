import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";


const NewsPage = () => (

    <Layout pageTitle="BotMD | News">
        <NavOne/>

        <PageHeader title="Diets Plans"/>
        <News/>

        <Footer/>

    </Layout>

)

export default NewsPage;