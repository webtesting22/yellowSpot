import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css"
import { TypeAnimation } from 'react-type-animation';
import Footer from "../Footer/Footer";
import { Row, Col } from "antd";
import HomePageNavigation from "../Home/HomePageNavigation";
import MagicHeading from "../MagicHeading/MagicHeading";
import { ClientDataLogos, DirectClient } from "./ContactUsClientData";
const ContactUs = () => {

    return (
        <>
            <Navbar />
            <HomePageNavigation />
            <div className="section-padding"></div>
            <br />
            <section>
                <div className="animated-text-about">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'YELLOWSPOT  ',
                            6000, // wait 1s before replacing "Mice" with "Hamsters"

                        ]}
                        wrapper="h1"
                        speed={200}
                        style={{ fontWeight: "300", fontSize: "45px", color: "#FFED00", textAlign: "start", margin: "0px" }}
                        // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                        repeat={Infinity}
                    />
                    <p>Elevate Your Brand: Billboard Solutions Tailored for Success</p>
                    <div className="slite-padding"></div>
                    <div>
                        <a href="#InventoryFilters"> <button className="animated-scroll-down-btn">Scroll Down <br /><i className='bx bxs-chevron-down' ></i></button></a>

                        <span></span>
                    </div>
                </div>
                <div className="container">

                    <MagicHeading text="Our Agency Clientele" />
                </div>

                <br /><br />
                <div className="container AgencyLogo">
                    <Row>
                        {ClientDataLogos.map((item, index) => (
                            <Col lg={6} md={8} key={index}>
                                <a href={item.clientWebLink} target="_blank" className="card-link">
                                    <div className="maincard">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <div className="clientImgContainer">
                                                        <img src={item.clientImg} alt="" />
                                                    </div>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                        <i class='bx bx-link' ></i>
                                                        <div style={{ width: "100%", marginLeft: "10px", textAlign: "center" }}>
                                                            {item.ClientName}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        ))}

                    </Row>
                </div>
                <br /><br />
                <div className="container">

                    <MagicHeading text="Our Direct Clientele" />
                </div>

                <br /><br />
                <div className="container DirectLogo">
                    <div className="row">
                        {DirectClient.map((item, index) => (
                            <div className="col-lg-2 col-md-4 col-sm-8" lg={6} md={8} key={index}>
                                <a href={item.clientWebLink} target="_blank" className="card-link">
                                    <div className="maincard">
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <div className="clientImgContainer">
                                                        <img src={item.clientImg} alt="" />
                                                    </div>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                        <i class='bx bx-link' ></i>
                                                        <div style={{ width: "100%", marginLeft: "10px", textAlign: "center" }}>
                                                            {item.ClientName}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default ContactUs