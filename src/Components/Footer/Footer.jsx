import React from "react";
import "./Footer.css";
import FooterLogo from "../Navbar/logo1.svg"
import { Row, Col } from "antd";
import instgramImg from "../Home/iconsImages/Vector4.svg"
import twitterImg from "../Home/iconsImages/Vector8.svg"
import LinkedinImg from "../Home/iconsImages/Vector.svg"
const Footer = () => {

    return (
        <>
            <div className="slite-padding"></div>
            <div className="slite-padding"></div>
            
            <section className="footer">
                <div className=" slite-padding container">
                    <div className="ContactusHeading container">
                        <p style={{ textAlign: "start" }}>Ready to work together?</p>
                        <h1>Get In Touch <i class='bx bxs-right-top-arrow-circle'></i></h1>
                    </div>
                    <div className="slite-padding"></div>
                    <hr style={{ opacity: "1" }} />
                    <Row className="w-100">
                        <Col lg={24}>
                            <div className="logo-set-and-social">
                                <div className="Footer_Logo">
                                    <img src={FooterLogo} alt="" />
                                </div>
                                <div className="social-content">
                                    <img src={instgramImg} alt="" />
                                    <img src={twitterImg} alt="" />
                                    <img src={LinkedinImg} alt="" />
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <hr style={{ opacity: "1" }} />
                    <p>@2024 <a href="https://www.outleadsolutions.com/" style={{ color: "#FFED00" }}>Outlead solution.</a> All rights reserved.</p>
                </div>
            </section>
        </>
    )
}

export default Footer;