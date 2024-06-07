import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "./Home.css";
import HomePageNavigation from "./HomePageNavigation";
import billboard from "../Home/iconsImages/billboard.png"
import logo from "../Navbar/logo1.svg"
import { TypeAnimation } from 'react-type-animation';
import { Row, Col, Drawer } from "antd";
import ClientLogos from './ClientLogosData';
import Homepagefirst from "../MobileHome/new.png"
import Industy from "../Home/Banners/OurEgency.png"
import offering from "../Home/Banners/OfferingHome.png"
import client from "../Home/LogosBack.png"
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';
import Combinelogo from "../Navbar/CombineLogo.jpg"
import LinkdinImg from "../Home/iconsImages/Vector.svg"
import vector1 from "../Home/iconsImages/Vector1.svg"
import vector2 from "../Home/iconsImages/Vector2.svg"
import vector3 from "../Home/iconsImages/Vector3.svg"
import vector4 from "../Home/iconsImages/Vector4.svg"
import vector5 from "../Home/iconsImages/Vector5.svg"
import vector6 from "../Home/iconsImages/Vector6.svg"
import vector7 from "../Home/iconsImages/Vector7.svg"
import vector8 from "../Home/iconsImages/Vector8.svg"
import CombineLogo from "../Navbar/CombineLogo.jpg"
import Contact from "../Home/iconsImages/ContactUs.svg"
import img1 from "../Home/Banners/Final1.png"
import img2 from "../Home/Banners/Final2.png"
import OutDoor from "./icons/outDoor.png"
import Impressions from "./icons/experience.png"
import Clients from "./icons/Clients.png"
import Experience from "./icons/experience.png"
import Media from "./icons/media.png"
import BackLightMedia from "./icons/BackLight.png"
import MobileHero from '../MobileHome/MobileHero';
import countersBack from "../Home/countersBack.png"
import OurOfficetry from "./offeringFinal.jpg"
const Home = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => {
    setDrawerVisible(!drawerVisible); // Toggle the state
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  }
  return (
    <>
      <div id="HomePage">
        <section id="home-page-header">

          <Link to="/"> <img src={CombineLogo} alt="Yellow-Spot Logo" className="logo-home" style={{ opacity: "0" }} /></Link>
          <button className="menu-btn" onClick={showDrawer} style={{ backgroundColor: "black" }}>
            <span className={`icon-transition ${drawerVisible ? 'rotate-180' : ''}`}>
              {drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
            </span>

          </button>

          <Drawer
            title={null}
            placement={placement}
            width={400}
            onClose={onCloseDrawer}
            visible={drawerVisible}
            footer={null}
          >
            <div>
              <div className="container-heading">
                <h5>Menu</h5>
                <hr style={{ margin: "8px 0px", border: "1px solid #FFED00", opacity: "1" }} />
                <ul className="home-menu-ul">
                  <Link to="/AboutUs"><li className="flip-animate" ><img src={vector5} alt="" />About&nbsp;US <span></span></li></Link>
                  <Link to="/OurOfferings"><li className="flip-animate" ><img src={vector7} alt="" />Our Offerings<span></span></li></Link>
                  <Link to="/OurClientele"><li className="flip-animate" ><img src={vector1} alt="" />Our Clientele<span></span></li></Link>
                  <Link to="/ContactUs"><li className="flip-animate" ><img src={Contact} alt="" />ContactUs<span></span></li></Link>
                </ul>
              </div>
              <div className="slite-padding"></div>
              <div className="container-heading social-container">
                <h5>Social</h5>
                <hr style={{ margin: "8px 0px", border: "1px solid #FFED00", opacity: "1" }} />
                <ul className=" social">
                  <li className="flip-animate"><a href="https://www.instagram.com/yellowspot.in/" target="_blank"><img src={vector4} alt="" /></a></li>
                  <li className="flip-animate"><img src={vector8} alt="" /></li>
                  <li className="flip-animate"><img src={LinkdinImg} alt="" /></li>
                  <li className="flip-animate"><a href="https://www.facebook.com/people/Yellow-Spot/100083305608740/" target="_blank"><img src={vector2} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </Drawer>
        </section>
      </div>
      <div className="home-page-slider">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
        // style={{ height: "100vh", width: "100%", position: "relative" }}

        >
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src={Homepagefirst} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay"></div>
            <div className="text-container-set">
              <div className="text-container second">
                <p ><span style={{ color: "black", backgroundColor: "#ffed00", padding: "0px 20px" }}>Your Art, Our Canvas</span></p>
                <div className="slite-padding"></div>
                <div className="btn-container">
                  <Link to="/AboutUs"><button><span>Explore</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src={countersBack} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay" style={{ backgroundColor: "rgb(0 0 0 / 65%)" }}></div>
            <div className="text-container-set four" id='textContainerset'>
              <div className="text-container" id='textContainer'>
                <div className="main-content-container">
                  {/* <img src={logo} alt="" style={{ width: "130px",margin:"auto" }} /> */}
                  {/* <h1><span><span style={{ color: "#FFED00" }}>industry</span> experience</span></h1>
                  <div className="slite-padding"></div> */}
                  <div className="content-container">
                    <Row gutter={[16, 16]} style={{ display: "flex", justifyContent: "center" }}>

                      <Col lg={12} md={12} >
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
                      <Col lg={12} md={12} >
                        <div className='contup'>

                          <div>
                            <img src={OutDoor} alt="" />
                          </div>
                          <CountUp
                            end={400}
                            duration={20}
                            suffix="+"
                          />

                          <h3>Premium Outdoor Sites <br /> in Ahmedabad</h3>
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
                            end={500}
                            duration={20}
                            suffix="+"
                          />
                          <h3>Clients</h3>
                        </div>
                      </Col>

                      <Col lg={8} md={12} >
                        <div className='contup'>
                          <div>
                            <img src={BackLightMedia} alt="" />
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

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="our-products">
              <div className="animated-hover-boxes">
                {/* <div className='topTwoBoxes'>  */}
                <div className="animated-boxes-five">
                  <div className='doubleImageContainer'>
                    <div style={{
                      display: "flex",
                      zIndex: "-1",
                      /* position: absolute; */
                      width: "100%"
                    }}>
                      <img src={img1} alt="" style={{ border: "2px solid black", borderBottom: "none" }} />
                      <img src={img2} alt="" style={{ border: "2px solid black", borderBottom: "none" }} />
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
          </SwiperSlide>

          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src={OurOfficetry} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay" style={{ backgroundColor: "#00000075" }}></div>
            <div className="text-container-set">
              <div className="text-container second">
                <div>
                  <h1><span style={{ color: "#FFED00" }}>Our</span> Offerings</h1>
                </div>
                <div className="slite-padding"></div>
                <div className="btn-container">
                  <Link to="/OurOfferings#OurProducts"><button><span>Our Product</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                  <Link to="/OurOfferings#OurServices"><button><span>Our Services</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src={client} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay" style={{ backgroundColor: "#000000a3" }}></div>
            <div className="text-container-set">
              <div className="text-container second">
                <div>
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
                    style={{ height: "20vh", padding: "10px 10px" }}
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
          </SwiperSlide>



        </Swiper>
      </div>
      <div id='MobileOnly'>
        <MobileHero />
      </div>
    </>

  );
};

export default Home;
