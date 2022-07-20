import React from 'react';

export default class ContactMap extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.205733144585!2d73.15440461553293!3d33.65183074617117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfea4aee5bdf8f%3A0xe6b55e05d462beb1!2sCOMSATS%20University%20Islamabad!5e0!3m2!1sen!2s!4v1646729491808!5m2!1sen!2s"
                className="google-map__contact" allowFullScreen></iframe>


        )
    }
}