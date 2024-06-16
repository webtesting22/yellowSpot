import React from "react";
import homepageImg from "../AboutUs/aboutUsGraphicsfinal.png"
import { Row, Col } from "antd"
import CountUp from 'react-countup';
import OutDoor from "../Home/icons/outDoor.png"
import Impressions from "../Home/icons/DailyImpressions.png"
import Clients from "../Home/icons/Clients.png"
import Experience from "../Home/icons/experience.png"
import Media from "../Home/icons/media.png"
import img1 from "../Home/Banners/Final1.png"
import img2 from "../Home/Banners/Final2.png"
import offering from "../Home/Banners/28.png"
import { Link } from "react-router-dom";
import billboard from "../Home/iconsImages/billboard.png"
import BackLightICon from "../Home/icons/BackLight.png"
import client from "../Home/Banners/KeyClients.png"
import ClientLogos from '../Home/ClientLogosData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ourOffering from "../Home/ouroffering.png"
import OurClients from "../Home/Banners/checkClientsChockImage.png"
import CounterBack from "../Home/CountersBackFinal.png"
import "./mobilecss.css"
import AnimatedClientsScroll from "../AnimatedClientsScroll/AnimatedClientsScroll";

const MobileHero = () => {
    return (
        <>
            <section>
                <div className="image-container" style={{ borderBottom: "2px solid white" }}>
                    <img src={homepageImg} alt="Yellow-Spot poster" />
                </div>
                <div>

                    {/* <div className="image-overlay"></div> */}
                    <div className="content-container" style={{ padding: "0px", position: "relative", borderBottom: "2px solid white" }} >
                        <div className="image-container" style={{ position: "absolute", }}>
                            <img src={CounterBack} alt="Yellow-Spot poster" />
                        </div>
                        <div className="image-overlay" style={{ backgroundColor: "rgb(39 39 39 / 76%)" }}></div>
                        <Row gutter={[16, 16]} style={{ display: "flex", justifyContent: "space-around", padding: "3px 0px", width: "100%", margin: "auto" }}>

                            <Col lg={8} md={12}>
                                <div className='contup'>
                                    <div>
                                        <img src={Experience} alt="" />
                                    </div>
                                    <CountUp
                                        end={25}
                                        duration={20}
                                        suffix="+"
                                    />
                                    <h3>Years of Industry <br /> Experience </h3>
                                </div>
                            </Col>
                            <Col lg={8} md={12} >
                                <div className='contup'>

                                    <div>
                                        <img src={OutDoor} alt="" />
                                    </div>
                                    <CountUp
                                        end={400}
                                        duration={20}
                                        suffix="+"
                                    />

                                    <h3>Premium Outdoor Sites in Ahmedabad</h3>
                                </div>
                            </Col>
                            <Col lg={8} md={12} style={{ display: "flex", justifyContent: "start" }}>
                                <div className='contup'>
                                    <div>
                                        <img src={Impressions} alt="" />
                                    </div>
                                    <CountUp
                                        end={500}
                                        duration={20}
                                        suffix="+"
                                    />
                                    <h3>Daily Impressions</h3>
                                </div>
                            </Col>
                            <Col lg={8} md={12} >
                                <div className='contup'>
                                    <div>
                                        <img src={Clients} alt="" />
                                    </div>
                                    <CountUp
                                        end={1000}
                                        duration={20}
                                        suffix="+"
                                    />
                                    <h3>Clients</h3>
                                </div>
                            </Col>

                            <Col lg={8} md={12} >
                                <div className='contup'>
                                    <div>
                                        <img src={BackLightICon} alt="" />
                                    </div>
                                    <CountUp
                                        end={99}
                                        duration={20}
                                        suffix="%"
                                    />
                                    <h3> Backlit Media</h3>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <div className="our-products">
                            <div className="animated-hover-boxes">
                                {/* <div className='topTwoBoxes'>  */}
                                <div className="animated-boxes-five">
                                    <div className='doubleImageContainer'>
                                        <div style={{
                                            display: "flex",
                                            zIndex: "-1",
                                            /* position: absolute; */
                                            width: "100%",
                                            flexDirection: "column"
                                        }}>
                                            <img src={img1} alt="" style={{ border: "1px solid black", borderBottom: "none" }} />
                                            <img src={img2} alt="" style={{ border: "1px solid black", borderBottom: "none" }} />
                                        </div>
                                    </div>
                                    <div className='writeUpContent'>
                                        <p>Our gantries represent the latest and most premium innovation in Ahmedabad's outdoor advertising industry. Designed to advertise to both sides of traffic, these large-format, high-impact, overhead billboards inevitably capture the attention of commuters from a distance. Strategically placed in the centre of high-traffic roads and areas, at direct eye level, our gantries ensure maximum visibility and reach to a masses.</p>
                                    </div>
                                    <div className="back-overlay"></div>
                                    <div className="content-box">
                                        <h4>Gantry</h4>
                                        <div className="small-slite-padding"></div>
                                    </div>
                                </div>
                                <div className='animated-boxes-six'>
                                    <div className='writeUpContent'>
                                        <p>Similar to gantries, cantilevers are overhead billboards placed right in the center of high-traffic roads. Positioned at direct eye level, our cantilevers are impossible to miss for both commuters and pedestrians.</p>
                                    </div>
                                    <div className="back-overlay"></div>
                                    <div className="content-box">
                                        <h4>Cantilever</h4>
                                        <div className="small-slite-padding"></div>
                                    </div>
                                </div>
                                <div className="animated-boxes-one">
                                    <div className='writeUpContent'>
                                        <p>Standing on a single pole, unipoles offer high aesthetic value and convey an elevated brand image. Our unipoles are strategically placed at direct eye level in high-traffic areas, with the sole purpose to avoid clusters and grab eyeballs</p>
                                    </div>
                                    <div className="back-overlay"></div>
                                    <div className="content-box">
                                        <h4>Unipole</h4>
                                        <div className="small-slite-padding"></div>

                                    </div>
                                </div>
                                <div className="animated-boxes-two">
                                    <div className='writeUpContent'>
                                        <p>These traditional billboards come in medium to large sizes and are supported by multiple poles. Our hoardings are planned to position in a way that provides direct visibility to moving traffic, avoids clusters with other advertisements and ensures clear vision</p>
                                    </div>
                                    <div className="back-overlay"></div>
                                    <div className="content-box">
                                        <h4> Hoarding</h4>
                                        <div className="small-slite-padding"></div>

                                    </div>
                                </div>
                                <div className="animated-boxes-three">
                                    <div className='writeUpContent'>
                                        <p>As pioneers in introducing Pole Kiosks to Ahmedabad, we offer these small-format billboards which are perfect for branding your products and enhancing brand recognition among a broad audience.</p>
                                    </div>
                                    <div className="back-overlay"></div>
                                    <div className="content-box">
                                        <h4> Pole Kiosk</h4>
                                        <div className="small-slite-padding"></div>

                                    </div>
                                </div>
                                <div className="animated-boxes-four">
                                    <div className='writeUpContent'>
                                        <p>Digital billboards are the up and coming form of outdoor media. With our established LEDs in the top clubs and premier malls of Ahmedabad, get access to premium and large audience. </p>
                                    </div>
                                    <div className="back-overlay"></div>
                                    <div className="content-box">
                                        <h4> LED</h4>
                                        <div className="small-slite-padding"></div>

                                    </div>
                                </div>
                            </div>


                            {/* </div> */}

                        </div>
                    </div>
                </div>
                <div style={{ position: "relative", border: "2px solid white" }}>
                    <div className="image-container">
                        <img src={ourOffering} alt="Yellow-Spot poster" />
                    </div>
                    <div className="image-overlay" style={{ backgroundColor: "rgb(39 39 39 / 37%)" }}></div>
                    <div className="text-container-set" style={{ position: "absolute", bottom: "5px" }}>
                        <div className="text-container second" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0px 5px" }}>
                            <div>
                                <h1 style={{ fontSize: "25px" }}><span style={{ color: "#FFED00", fontSize: "25px" }}>Our</span> Offerings</h1>
                            </div>
                            <div className="slite-padding"></div>
                            <div className="btn-container">
                                <Link to="/OurOfferings#OurProducts"><button><span>Our Product</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                                <Link to="/OurOfferings#serviceCard"><button><span>Our Services</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ position: "relative", overflow: "hidden", border: "2px solid white" }}>
                    {/* <AnimatedClientsScroll /> */}
                    <div style={{ position: "relative" }}>
                        <div className="image-container" >
                            <img src={OurClients} alt="Yellow-Spot poster" />
                        </div>
                        <div className="image-overlay" style={{ backgroundColor: "rgb(39 39 39 / 37%)" }}></div>

                        <div>
                            <div className="text-container-set" style={{ position: "absolute", bottom: "25%" }} >
                                <div className="text-container second">

                                    <div className="slite-padding"></div>
                                    <div className="clients-logo-home-container">
                                        <Swiper
                                            slidesPerView={6}
                                            spaceBetween={30}
                                            freeMode={true}
                                            loop={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: false,
                                            }}
                                            breakpoints={{
                                                // Define breakpoints for different screen sizes
                                                1100: {
                                                    slidesPerView: 6
                                                },
                                                768: {
                                                    slidesPerView: 3// For tablets
                                                },
                                                300: {
                                                    slidesPerView: 3 // For mobile devices
                                                },
                                            }}
                                            style={{ height: "18vh", width: "100%", padding: "0px 10px" }}
                                            modules={[FreeMode, Pagination, Autoplay]}
                                            className="mySwiper"
                                        >
                                            {ClientLogos.map((item, index) => (
                                                <SwiperSlide style={{ display: "flex" }}>
                                                    <div key={index} className='home-page-client-logo'>
                                                        <img src={item.img} alt="" className="HomeCarousalImage" />
                                                    </div>
                                                </SwiperSlide>
                                            ))}

                                        </Swiper>
                                    </div>

                                </div>
                            </div>
                            <div style={{ width: "100%", zIndex: "4", position: "absolute", bottom: "0px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ paddingTop: "2px" }}>
                                    <h1 style={{ textAlign: "center", margin: "0px", fontSize: "25px", textTransform: "uppercase" }}><span style={{ color: "#FFED00" }}>Our Key</span> Clients</h1>
                                </div>
                                <div className="btn-container" style={{ margin: "0px 10px" }}>
                                    <Link to="/OurClientele"><button style={{
                                        margin: "5px 0px",
                                        backgroundColor: "#FFED00",

                                    }}><span>Show all Clients</span><span><img src={billboard} alt="Yellow-Spot poster" style={{ width: "30px" }} /></span></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section >
        </>
    )
}
export default MobileHero;