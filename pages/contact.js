import Layout from "/components/Layout";
import NavOne from "/components/NavOne";
import PageHeader from "/components/PageHeader";
import Footer from "/components/Footer";
import ContactMap from "/components/ContactMap";
import Form from "./Form"


const ContactPage = () => (

    <Layout pageTitle="BotMD | Symptom Tracker">
        <NavOne/>

        <PageHeader title="Symptom Tracker"/>
        <Form/>
        {/*<ContactInfo/>*/}
        <ContactMap/>

        <Footer/>

    </Layout>

)

export default ContactPage;