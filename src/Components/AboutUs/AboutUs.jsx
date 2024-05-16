import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { TypeAnimation } from 'react-type-animation';
import "./about.css"
import khushiImage from "../AboutUs/khushi.png"
import hetgraphics from "../AboutUs/het-graphics.jpg"
import { Row, Col } from "antd";
import logo from "../AboutUs/logo1.svg"
import { Link } from "react-router-dom";
import billboard from "../Home/iconsImages/billboard.png"
import Footer from "../Footer/Footer";
import HomePageNavigation from "../Home/HomePageNavigation";
import MagicHeading from "../MagicHeading/MagicHeading";
const AboutUS = () => {

    // const sectionRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setIsVisible(true);
    //             }
    //         });
    //     });

    //     observer.observe(sectionRef.current);

    //     return () => {
    //         observer.unobserve(sectionRef.current);
    //     };
    // }, []);
    const foudersDetails = [
        {
            Founderimage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            FounderName: "Asit",
            FounderSecondName: "Shah",
            FounderDescription: [
                {
                    description: "Introducing Mr. Asit Shah, a luminary in the realm of Out-of-Home (OOH) media, whose unwavering dedication and forward-thinking approach have reshaped the landscape of OOH advertising in the city of Ahmedabad. With a profound vision for the industry, Mr. Shah stands as the driving force behind 'Het Graphics,' dominating Ahmedabad's OOH sector for over 25 years. Specializing in cutting-edge media solutions, Het Graphics under his stewardship has pioneered innovative media vehicles such as bus shelters and gantries in the city of Ahmedabad, elevating advertising possibilities. He is the co-founder of 'Yellow Spot,' an enterprise under the umbrella of 'Het Graphics' and 'Khushi Advertising', a product of two leading outdoor companies which is now changing the landscape of Gujarat's OOH industry."
                },
                {
                    description: "Mr. Shah is also working at the forefront alongside the municipal corporation and fellow OOH vendors for the betterment of the OOH industry in Ahmedabad. Mr. Shah's entrepreneurial spirit extends beyond media branching into real estate, finance, and metal, solidifying his status as a multifaceted leader in both business and innovation. In addition to his remarkable achievements in business, Mr. Shah exemplifies a profound commitment to philanthropy, actively engaging with numerous NGOs, charitable trusts, and similar organizations, embodying his belief in giving back to society. His unwavering dedication to both commerce and social responsibility solidifies his legacy as a visionary leader making impactful strides in multiple walks of life."
                }
            ]



        },
        {
            Founderimage: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            FounderName: "Pranay",
            FounderSecondName: "Shah"

        },

    ]
    const teamData = [
        {
            firstTitle: "Brijesh",
            lastTitle: "Vyas",
            Designation: "Manager"
        },
        {
            firstTitle: "Parimal",
            lastTitle: "Modi",
            Designation: "Manager"
        },
        {
            firstTitle: "Rinku",
            lastTitle: "Mitra",
            Designation: "Commercial + Accounts",
            role: "Maintaining master sheet (listing each inventory and what is displayed on it for how long), follow up for all outstanding payments and receivables "
        },
        {
            firstTitle: "Vishal",
            lastTitle: "Prajapati",
            Designation: "Accounts",
            role: "Generating invoices, all taxation-related tasks, entry from our software into tally, maintaining ledgers "
        },
        {
            firstTitle: "Darshan",
            lastTitle: "Rajgor",
            Designation: "Commercial",
            role: "BDFs into the software for sales entry, report generation for management purpose"
        },
        {
            firstTitle: "Amit",
            lastTitle: "Boliwal",
            Designation: "Media Planner",
            role: "Make media plans based on requirements sent by sales, respond to all queries on mail and make media plans for them (mainly agencies, new queries and other vendors), generate BDFs for closed deals"
        },
        {
            firstTitle: "Bhumesh",
            lastTitle: "Raval",
            Designation: "Media Planner",
            role: "Make media plans based on requirements sent by sales, respond to all queries on mail and make media plans for them (mainly agencies, new queries and other vendors), generate BDFs for closed deals"
        },
        {
            firstTitle: "Sagar",
            lastTitle: "Panchal",
            Designation: "Media Planner",
            role: "Make media plans based on requirements sent by sales, respond to all queries on mail and make media plans for them (mainly agencies, new queries and other vendors), generate BDFs for closed deals"
        },
        {
            firstTitle: "Saurabh",
            lastTitle: "Sharma",
            Designation: "Sales",
            role: "Maintaining relations existing clients and bringing regular business from them, reaching out to potential clients from leads generated, make BDFs once deal is closed "
        },
        {
            firstTitle: "Pankaj",
            lastTitle: "Vyas",
            Designation: "Sales",
            role: "Maintaining relations existing clients and bringing regular business from them, reaching out to potential clients from leads generated, make BDFs once deal is closed "
        },
        {
            firstTitle: "Nirav",
            lastTitle: "Shah",
            Designation: "Sales",
            role: "Maintaining relations existing clients and bringing regular business from them, reaching out to potential clients from leads generated, make BDFs once deal is closed "
        },
        {
            firstTitle: "Kevansh",
            lastTitle: "Nayak",
            Designation: "Operations",
            role: "Click photos as soon as media is up, report and fix any issues on site such as lighting, electricity, etc, make client presentations of executed sites"
        },
        {
            firstTitle: "Vipul",
            lastTitle: "Desai",
            Designation: "Operations",
            role: "Click photos as soon as media is up, report and fix any issues on site such as lighting, electricity, etc, make client presentations of executed sites"
        },
    ]
    return (

        <>
            <Navbar />
            <HomePageNavigation />
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
                        style={{ fontWeight: "300", color: "#FFED00", fontSize: "45px", textAlign: "start", margin: "20px 0px" }}
                        // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                        repeat={Infinity}
                    />
                    <p>Make Your Brand Tower Above: Billboard Excellence, Tailored for You</p>
                    <div className="slite-padding"></div>
                    <div>
                        <a href="#parent-company"> <button className="animated-scroll-down-btn">Scroll Down <br /><i className='bx bxs-chevron-down' ></i></button></a>

                        <span></span>
                    </div>
                </div>

                <div className="parent-poster-content container" id="parent-company">
                    {/* <h1 className={`${isVisible ? "section-heading " : ""}`}
                        >We are development experts on <br /> all technologies & platforms</h1>
                    <br /> */}
                    <MagicHeading text="We are development experts on all technologies & platforms" />
                    {/* <br /> */}
                    <br /><br />
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
                <br /><br />
                <div className="parent-Company-info container" >
                    <Row>
                        <Col lg={16}>
                            <div className="parent-comapny-content second">
                                <h4><span>Yellow</span>Spot</h4>
                                {/* <br /> */}
                                <p>YellowSpot emerged as a collaborative effort between Khushi Advertising and
                                    Het Graphics. Our strategic alliance brings together two industry leaders,
                                    establishing one of the most formidable media houses in Gujarat. The
                                    motivation behind the collaboration is to provide comprehensive and holistic
                                    360-degree marketing solutions to our local, national and international clients
                                    across diverse platforms.
                                </p>
                                <div className="small-slite-padding"></div>
                                <div className="btn-container d-block">
                                    <Link to="/AboutUs"><button className="m-0"><span>Explore</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>

                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <img src={logo} alt="" className="HET_IMG_two" style={{ backgroundColor: "#FFED00", padding: "10px" }} />
                        </Col>
                        <Col lg={8}>
                            <img src={hetgraphics} alt="" className="HET_IMG" />
                        </Col>

                        <Col lg={16}>
                            <div className="parent-comapny-content first">
                                <h4><span>HET Graphics</span> Total Outdoor Solutions</h4>
                                {/* <br /> */}
                                <p>Het Graphics, known as the industry leader in Ahmedabad city for its innovative ideas and extensive coverage, has successfully provided clients with a one-stop solution for outdoor advertising. Their extensive network of hoardings, gantries and signages makes creating awareness for your brand/product/service easier. With HET by their side, many national and local brands have advertised throughout the state of Gujarat.</p>
                                <div className="small-slite-padding"></div>
                                <div className="btn-container">
                                    <Link to="/AboutUs"><button className="m-0" style={{ backgroundColor: "#FFED00" }}><span>Explore</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>

                                </div>
                            </div>
                        </Col>
                        <Col lg={16}>
                            <div className="parent-comapny-content second">
                                <h4><span>Khushi</span> Advertising</h4>
                                {/* <br /> */}
                                <p>Khushi Advertising, India’s leading ambient media agency, leverages its expertise and consummate skills to present the most effective campaigns with a distinct and long-lasting impact. With a presence in 22 cities, we are your one-stop solution for advertising in India’s 2700+ multiplex screens, 350+ malls, and 30+ airports. Our wide-spread reach across India and 300+ professionals enable us to be present at the right avenue at the right time to reach out to the right audience.</p>
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
                <br /><br />

                <div className="co-founder-section container">
                    <MagicHeading text="Meet Our Team" />
                    {/* <div className="slite-padding"></div> */}
                    <br /><br />
                    <div>
                        <Row>
                            {foudersDetails.map((founder, index) => (
                                <Col lg={12} key={index}>
                                    <div>
                                        <div className="founder-info">
                                            <div className="header-part">
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <h4 style={{ fontSize: "30px" }}><span>{founder.FounderName}</span> {founder.FounderSecondName}</h4>
                                                </div>
                                                <div className="socials">
                                                    <i className='bx bxl-linkedin-square'></i>
                                                    <i className='bx bxl-twitter' ></i>
                                                </div>
                                            </div>
                                            {founder.FounderDescription && founder.FounderDescription.map((descriptionItem, descriptionIndex) => (
                                                <p key={descriptionIndex}>
                                                    {descriptionItem.description}
                                                </p>
                                            ))}
                                        </div>

                                    </div>
                                    {/* Map over the FounderDescription array for each founder */}

                                </Col>
                            ))}

                        </Row>
                        {/* <br /><br /> */}
                        <Row>
                            {teamData.map((item, index) => (
                                <Col lg={8}>
                                    <div key={index}>
                                        <div className="founder-info">
                                            <div className="header-part">
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <h4 style={{ fontSize: "20px" }}><span>{item.firstTitle}</span> {item.lastTitle}<span style={{ color: "#ffffff9c", fontSize: "15px", marginLeft: "5px" }}>({item.Designation})</span></h4>
                                                </div>
                                                <div className="socials">
                                                    <i className='bx bxl-linkedin-square'></i>
                                                    <i className='bx bxl-twitter' ></i>
                                                </div>
                                            </div>
                                            {/* <div> */}
                                            {/* <p style={{ color: "white",fontSize:"20px" }}></p> */}
                                            <p >{item.role}</p>
                                            {/* </div> */}
                                        </div>

                                    </div>

                                </Col>
                            ))}

                        </Row>
                        {/* <Row className="w-100">
                            {foudersDetails.map((item, index) => (
                                <Col lg={12} key={index}>
                                    <div className="founder-container">
                                        <div className="founder-img-container">
                                            <img src={item.Founderimage} alt="YellowSpotFounder" />
                                        </div>

                                        <div className="founder-info">
                                            <i className='bx bxs-user-circle'></i><h4><span>{item.FounderName}</span> {item.FounderSecondName}</h4>
                                        </div>
                                        <div className="social-icons">

                                        </div>
                                    </div>
                                </Col>
                            ))}


                        </Row> */}
                    </div>
                </div>

                <br /><br />
            </section>
            <Footer />


        </>
    )
}

export default AboutUS;