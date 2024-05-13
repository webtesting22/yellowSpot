import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Card, Row, Col } from 'antd';
import demoImage from "../Home/1.jpg"
import { TypeAnimation } from 'react-type-animation';
import "./ouroffering.css"
import Inventory from "../InventryManagement/Inventory";
import Footer from "../Footer/Footer";
import HomePageNavigation from "../Home/HomePageNavigation";
const OurOfferings = () => {
  
    const servicesCards = [
        {
            cardImage: demoImage,
            cardHeading: "Creative Designs",
            cardDescription: "Whether it be 3D-backed designs, moving elements, or cutouts, we have got it all! Just come to us with your product and let us help you bring the best creative designs to your audiences."
        },
        {
            cardImage: demoImage,
            cardHeading: "Media Buying",
            cardDescription: "For a successful and holistic marketing campaign, we have selected some of the best media platforms (outdoor, digital, cinema, social, print, radio, television, etc.) for you. As an aggregator, we recommend other vendors’ sites and have tie-ups with agencies that are best-in-town to provide you with the best strategic plan based on your budgetary requirements."
        },
        {
            cardImage: demoImage,
            cardHeading: "Research-Based Campaign Planning",
            cardDescription: "Our aim is not to just sell our media but to maximise your target audience reach. With an extensive understanding of the target audience and consumer behaviour, our team guides you to create the ideal campaign for maximum impressions by conducting in-depth market & product research."
        },
        {
            cardImage: demoImage,
            cardHeading: "Monitoring & Evaluation",
            cardDescription: "We are among the most result-oriented OOH agencies that help you implement your campaigns with ease and stand by to keep a check on the impressions and evaluate your campaign performance. It is also our standard practice to provide you with real-time GPS photographs of your campaign."
        }

    ]
    return (
        <>
            <Navbar />
            <HomePageNavigation/>
            <div className="section-padding"></div>
            <br />
            <div className="animated-text-about">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'YELLOWSPOT  ',
                        6000, // wait 1s before replacing "Mice" with "Hamsters"

                    ]}
                    wrapper="h1"
                    speed={200}
                    style={{ fontWeight: "300", fontSize: "45px",color: "#FFED00", textAlign: "start", margin: "0px" }}
                    // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                    repeat={Infinity}
                />
                <p>Stand Tall, Be Seen: Amplify Your Message with Our Billboard Solutions</p>
                <div className="slite-padding"></div>
                <div>
                    <a href="#serviceCard"> <button className="animated-scroll-down-btn">Scroll Down <br /><i class='bx bxs-chevron-down' ></i></button></a>

                    <span></span>
                </div>
            </div>
            <section id="serviceCard" className="container">
                <h1>Our Services</h1>
                <div className="container p-0">
                    {/* <div className="section-padding"></div>
                    <h1 className="services-heading">Our Services</h1>
                    <div className="section-padding"></div> */}
                    <div className="container serviceCard">
                        <Row>

                            {servicesCards.map((item, index) => (
                                <Col lg={8} md={12} key={index}>
                                    <Card

                                    >
                                        <div style={{ overflow: "hidden", borderRadius: "20px" }}>
                                            <img src={item.cardImage} alt="" style={{ width: "100%" }} />
                                        </div>
                                        <div className="small-slite-padding"></div>
                                        <div>
                                            <h4>{item.cardHeading}</h4>
                                            <p>{item.cardDescription}</p>
                                        </div>
                                    </Card>
                                </Col>
                            ))}

                        </Row>
                    </div>
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
            <Inventory/>
           
            <Footer/>
        </>
    );
};

export default OurOfferings;
