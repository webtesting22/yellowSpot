import React from "react";
import homepageImg from "./new.png"
import { Row, Col } from "antd"
import CountUp from 'react-countup';
import OutDoor from "../Home/icons/outDoor.png"
import Impressions from "../Home/icons/experience.png"
import Clients from "../Home/icons/Clients.png"
import Experience from "../Home/icons/experience.png"
import Media from "../Home/icons/media.png"
import img1 from "../Home/Banners/Final1.png"
import img2 from "../Home/Banners/Final2.png"
import offering from "../Home/Banners/28.png"
import { Link } from "react-router-dom";
import billboard from "../Home/iconsImages/billboard.png"
// import Clients from "..Home/icons/Clients.png"
import client from "../Home/Banners/KeyClients.png"
import ClientLogos from '../Home/ClientLogosData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const MobileHero = () => {
    return (
        <>
            <section>
                <div className="image-container">
                    <img src={homepageImg} alt="Yellow-Spot poster" />
                </div>
                <div>
                    <div className="content-container">
                        <Row gutter={[16, 16]} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
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
                            <Col lg={8} md={12} >
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
                                        <img src={Experience} alt="" />
                                    </div>
                                    <CountUp
                                        end={25}
                                        duration={20}
                                        suffix="+"
                                    />
                                    <h3>Years of Industry Experience </h3>
                                </div>
                            </Col>
                            <Col lg={8} md={12} >
                                <div className='contup'>
                                    <div>
                                        <img src={Media} alt="" />
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
                                            <img src={img1} alt="" style={{ border: "2px solid white", borderBottom: "none" }} />
                                            <img src={img2} alt="" style={{ border: "2px solid white", borderBottom: "none" }} />
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
                                {/* <div className='animated-boxes-six'>
                    <div className='writeUpContent'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste error doloribus quas dolore voluptate, deserunt minima quo illum velit sed!</p>
                    </div>
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4>Cantilever</h4>
                      <div className="small-slite-padding"></div>
                    </div>
                  </div> */}
                                {/* </div> */}
                                {/* <div className="twoslidesContainer"> */}
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
                                {/* </div>
                <div className="twoslidesContainer"> */}
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
                <div style={{ position: "relative", border: "4px solid white" }}>
                    <div className="image-container">
                        <img src={offering} alt="Yellow-Spot poster" />
                    </div>
                    <div className="image-overlay"></div>
                    <div className="text-container-set">
                        <div className="text-container second">
                            <div>
                                <h1><span style={{ color: "#FFED00" }}>Our</span> Offerings</h1>
                            </div>
                            <div className="slite-padding"></div>
                            <div className="btn-container">
                                <Link to="/OurOfferings"><button><span>Our Product</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                                <Link to="/OurOfferings"><button><span>Our Services</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ position: "relative", overflow: "hidden", border: "4px solid white" }}>
                    <div className="image-container" style={{ position: "absolute", zIndex: "-1" }}>
                        <img src={client} alt="Yellow-Spot poster" />
                    </div>
                    {/* <div className="image-overlay" style={{ backgroundColor: "#000000a3" }}></div> */}
                    <div className="text-container-set">
                        <div className="text-container second">
                            <div style={{ paddingTop: "30px" }}>
                                <h1><span style={{ color: "#FFED00" }}>Our Key</span> Clients</h1>
                            </div>
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
                                            slidesPerView: 2 // For mobile devices
                                        },
                                    }}
                                    style={{ height: "30vh", padding: "10px 10px" }}
                                    modules={[FreeMode, Autoplay, Pagination]}
                                    className="mySwiper"
                                >
                                    {ClientLogos.map((item, index) => (
                                        <SwiperSlide style={{ display: "flex" }}>
                                            <div key={index} className='home-page-client-logo'>
                                                <img src={item.img} alt="" style={{ width: "100%", aspectRatio: "3/2", objectFit: "contain" }} />
                                            </div>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                            <br />
                            <div className="btn-container">
                                <Link to="/OurClientele"><button><span>Show all Clients</span><span><img src={billboard} alt="Yellow-Spot poster" style={{ width: "30px" }} /></span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MobileHero;