import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css"
import { TypeAnimation } from 'react-type-animation';
import Footer from "../Footer/Footer";

import HomePageNavigation from "../Home/HomePageNavigation";
import MagicHeading from "../MagicHeading/MagicHeading";
import { ClientDataLogos, DirectClient } from "../OurClients/ContactUsClientData";
import DemoImage from "../Navbar/CombineLogo.jpg"
import ContactUsBack from "./ContactUsBack1.png"
const ContactUs = () => {

    return (
        <>
            <Navbar />
            <HomePageNavigation />
            {/* <div className="section_padding"></div>
            <div className="section_padding"></div>
            <br /> */}
            <section className="contactUsSection">
                <img src={ContactUsBack} alt="" style={{ width: "100%" }} />
            </section>
            {/* <section id="contactUssection">
                <div className="container twoColumsContainer">
                    <div className="leftSideColumn">
                       <div>
                       <MagicHeading text="Contact Us" />
                        <p className="tagline">We look forward to working with you</p>
                        <div className="section_padding"></div>
                        <div className="ContactContent">
                            <ul>
                                <li><span>Phone:</span> <a href="tel:+91 93242 44444">+91 93242 44444</a></li>
                                <li><span>Email:</span> <a href="mailto:sales@yellowspot.on">sales@yellowspot.on</a></li>
                                <li><span>Website:</span> https:yellow-spot.vercel.app/</li>
                                <li><span>Adress:</span> 4th floor, 12, Magnet corporate park, Thaltej, Ahmedabad, Gujrat, 380054</li>
                            </ul>
                        </div>
                       </div>
                    </div>
                    <div className="rightSideColumn">
                            <img src={DemoImage} alt="" />
                    </div>
                </div>
            </section> */}
            {/* <div className="section_padding"></div> */}
            <Footer />
        </>
    )
}
export default ContactUs