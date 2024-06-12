import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { Card, Row, Col } from 'antd';
import { TypeAnimation } from 'react-type-animation';
import "./ouroffering.css"
import SwiperHeadingIcon from "../SwiperHeadingIcon/SwiperHeadingIcon";
import Inventory from "../InventryManagement/Inventory";
import Footer from "../Footer/Footer";
import HomePageNavigation from "../Home/HomePageNavigation";
import AnimatedCards from "../AnimationScrollingCard/AnimationCards";
import AnimatedCoverPage from "../animatedCoverPage/animatedCoverPage";
import offering from "../AboutUs/AboutUsBanner.png"
const OurOfferings = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1); // Remove the '#' character
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <>
            <Navbar />
            <HomePageNavigation />
            {/* <div className="section-padding"></div>
            <br /> */}
            <AnimatedCoverPage backgroundImage={offering} />
            <br /><br />
            <section id="serviceCard" className="container" >

                <SwiperHeadingIcon headingText="Our Services" />
                <br />
                <div className="container p-0">
                    <div >
                        <AnimatedCards />
                    </div>


                </div>
            </section>

            <br /><br />
            <section id="OurProducts" className="container">
                <SwiperHeadingIcon headingText="Our Products" />
                <Inventory />
            </section>


            <Footer />
        </>
    );
};

export default OurOfferings;
