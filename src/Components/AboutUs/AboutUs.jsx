import React from "react";
import Navbar from "../Navbar/Navbar";
import { TypeAnimation } from 'react-type-animation';
import "./about.css"
import khushiImage from "../AboutUs/khushi.png"
import hetgraphics from "../AboutUs/het-graphics.jpg"
import { Row, Col } from "antd";
import logo from "../AboutUs/logo1.svg"
import { Link } from "react-router-dom";
import billboard from "../Home/iconsImages/billboard.png"
const AboutUS = () => {

    return (

        <>
            <Navbar />
            <div className="slite-padding"></div>
            <br />
            {/* <div className="slite-padding"></div> */}
            <div className="slite-padding"></div>
            <section>
                {/* <div className="overlay-back-img">
                    <img src="https://images.unsplash.com/photo-1599803654935-5b9d1c93578c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div> */}
                <div className="animated-text-about">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'YELLOWSPOT  ',
                            6000, // wait 1s before replacing "Mice" with "Hamsters"

                        ]}
                        wrapper="h1"
                        speed={200}
                        style={{ fontWeight: "300", fontSize: "8vw", textAlign: "start", margin: "0px" }}
                        // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                        repeat={Infinity}
                    />
                    <p>Make Your Brand Tower Above: Billboard Excellence, Tailored for You</p>
                    <div className="slite-padding"></div>
                    <div>
                        <a href="#parent-company"> <button className="animated-scroll-down-btn">Scroll Down <br /><i class='bx bxs-chevron-down' ></i></button></a>

                        <span></span>
                    </div>
                </div>
                <div className="slite-padding"></div>
                <div className="parent-poster-content container" id="parent-company" >
                    <h1>When two leaders come together, magic happens</h1>
                    <div className="slite-padding"></div>
                    <div className="container yellow-color-back">



                        <div className="yellow-poster-insidetwo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="yellow-poster-insideone">
                            <h4>A JOIN VENTURE OF</h4>
                            <div className="small-slite-padding"></div>
                            <div className="yellow-poster-insideLogo">
                                <div>
                                    <img src={hetgraphics} alt="" />
                                </div>
                                <div>
                                    <img src={khushiImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="slite-padding"></div>
                <div className="slite-padding"></div>
                <div className="parent-Company-info container" >
                    <Row>
                        <Col lg={8}>
                            <img src={hetgraphics} alt="" className="HET_IMG" />
                        </Col>

                        <Col lg={16}>
                            <div className="parent-comapny-content first">
                                <h4><span>HET Graphics</span> Total Outdoor Solutions</h4>
                                <p>Het Graphics, well-known in the industry for the iconic pole kiosks and innovative ideas, has successfully provided clients with a one-stop solution for outdoor advertising. Our extensive network of kiosks, hoardings and signages make creating awareness for your brand/ product/ service easier. With HET by their side, many brands have advertised throughout Ahmedabad.</p>
                                <div className="small-slite-padding"></div>
                                <div className="btn-container">
                                    <Link to="/AboutUs"><button className="m-0" style={{ backgroundColor: "#FFED00" }}><span>Explore</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>

                                </div>
                            </div>
                        </Col>
                        <Col lg={16}>
                            <div className="parent-comapny-content second">
                                <h4><span>Khushi</span> Advertising</h4>
                                <p>Khushi Advertising, India’s leading ambient media agency, leverages its expertise and consummate skills to present the most effective campaigns with a distinct and long-lasting impact. With a presence in 22 cities, we are your one-stop solution for advertising in India’s 2700+ multiplex screens, 350+ malls, and 30+ airports.</p>
                                <div className="small-slite-padding"></div>
                                <div className="btn-container d-block">
                                    <Link to="/AboutUs"><button className="m-0"><span>Explore</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>

                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <img src={khushiImage} alt="" className="HET_IMG_two" />
                        </Col>
                    </Row>
                </div>
            </section>

        </>
    )
}

export default AboutUS;