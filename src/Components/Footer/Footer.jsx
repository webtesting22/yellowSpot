import React from "react";
import "./Footer.css";
import FooterLogo from "../Navbar/CombineLogo.jpg"
import { Row, Col } from "antd";
import instgramImg from "../Home/iconsImages/Vector4.svg"
import twitterImg from "../Home/iconsImages/Vector8.svg"
import LinkedinImg from "../Home/iconsImages/Vector.svg"
import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <>
            <div className="slite-padding"></div>
            <div className="slite-padding"></div>

            <section className="footer">
                <div className=" slite-padding container">
                    <div className="topHeadingStyle">
                    <div className="ContactusHeading container">
                        <p style={{ textAlign: "start" }}>Ready to work together?</p>
                        <h1>Get In Touch <i className='bx bxs-right-top-arrow-circle'></i></h1>
                    </div>
                    <div className="Footer_Logo">
                                    <Link to="/"><img src={FooterLogo} alt="Yellow-Spot Logo" /></Link>
                                </div>
                    </div>
                    <div className="slite-padding"></div>
                    <hr style={{ opacity: "1" }} />
                    <Row className="w-100">
                        <Col lg={24}>
                            <div className="logo-set-and-social">
                               
                                <div className="social-content">
                                    <a href="https://www.instagram.com/yellowspot.in/" target="_blank"><img src={instgramImg} alt="" /></a>
                                    <img src={twitterImg} alt="" />
                                    <img src={LinkedinImg} alt="" />
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <hr style={{ opacity: "1" }} />
                    <p>@2024 <a href="https://www.outleadsolutions.com/" target="_blank" style={{ color: "#FFED00" }}>Outlead solution.</a> All rights reserved.</p>
                </div>
            </section>
        </>
    )
}

export default Footer;