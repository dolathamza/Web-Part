import Layout from "/components/Layout";
import NavOne from "/components/NavOne";
import PageHeader from "/components/PageHeader";
import Footer from "/components/Footer";
import FaqPage from "/components/FaqPage";



const FaqsPage = () => (

    <Layout pageTitle="BotMD | FAQs">
        <NavOne/>

        <PageHeader title="FAQs"/>
        <FaqPage/>



        <Footer/>

    </Layout>

)

export default FaqsPage;