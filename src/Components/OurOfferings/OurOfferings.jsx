import React, { useState } from "react";
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


    return (
        <>
            <Navbar />
            <HomePageNavigation />
            {/* <div className="section-padding"></div>
            <br /> */}
            <AnimatedCoverPage backgroundImage={offering}/>
            <br /><br />
            <section id="serviceCard" className="container">

                <SwiperHeadingIcon headingText="Our Services" />
                <br />
                <div className="container p-0">
                    <AnimatedCards />
                    {/* <div className="section-padding"></div>
                    <h1 className="services-heading">Our Services</h1>
                    <div className="section-padding"></div> */}

                    {/* <div className=" serviceCard">
                        <Row>

                            {servicesCards.map((item, index) => (
                                <Col lg={12} md={12} key={index}>
                                    <Card>
                                        <div className="services-card-styling">
                                            <div className="services-card-img">
                                                <img src={item.cardImage} alt="" style={{ width: "100%" }} />
                                            </div>
                                            <br />
                                            <div className="services-card-content">
                                                <h4>{item.cardHeading}</h4>
                                                <p>{item.cardDescription}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}

                        </Row>
                    </div> */}
                </div>




            </section>
            <div className="slite-padding"></div>
            <div className="slite-padding"></div>
            {/* <div className="our-products">
                <div className="animated-hover-boxes">
                    <div className="animated-boxes-one">
                        <div className="back-overlay"></div>
                        <div className="content-box">
                            <h4>Holding Type</h4>
                            <button>Yellow Spot</button>
                        </div>
                    </div>
                    <div className="animated-boxes-two">
                        <div className="back-overlay"></div>
                        <div className="content-box">
                            <h4>Holding Type</h4>
                            <button>Yellow Spot</button>
                        </div>
                    </div>
                    <div className="animated-boxes-three">
                        <div className="back-overlay"></div>
                        <div className="content-box">
                            <h4>Holding Type</h4>
                            <button>Yellow Spot</button>
                        </div>
                    </div>
                    <div className="animated-boxes-four">
                        <div className="back-overlay"></div>
                        <div className="content-box">
                            <h4>Holding Type</h4>
                            <button>Yellow Spot</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <br /><br />
            <Inventory />

            <Footer />
        </>
    );
};

export default OurOfferings;
