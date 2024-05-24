import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import HomePageNavigation from "../Home/HomePageNavigation";
import { TypeAnimation } from "react-type-animation";
import Footer from "../Footer/Footer";
import { Row, Col } from "antd";
import MagicHeading from "../MagicHeading/MagicHeading";
import { ClientDataLogos, DirectClient } from "../OurClients/ContactUsClientData";
import AnimatedCoverPage from "../animatedCoverPage/animatedCoverPage";
const OurClientele = () => {

    // const cardColors = ["#ff6347", "#6495ed", "#32cd32", "#ffa500", "#9370db"];
    return (
        <>
            <Navbar />
            <HomePageNavigation />
            <div className="section-padding"></div>
            <br />

            <section>
                <AnimatedCoverPage/>
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
export default OurClientele;