import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css"
import { TypeAnimation } from 'react-type-animation';
import Footer from "../Footer/Footer";

import HomePageNavigation from "../Home/HomePageNavigation";
import MagicHeading from "../MagicHeading/MagicHeading";
import { ClientDataLogos, DirectClient } from "../OurClients/ContactUsClientData";
const ContactUs = () => {

    return (
        <>
            <Navbar />
            <HomePageNavigation />
            <div className="section-padding"></div>
            <br />
            

            <Footer />
        </>
    )
}
export default ContactUs