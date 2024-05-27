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
import Homepagefirst from "../animatedCoverPage/Picture1.png"
import Industy from "../Home/Banners/OurEgency.png"
import offering from "../Home/Banners/OurOffering.png"
import client from "../Home/Banners/OurClients.png"
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
// import DemoImage from "../Home/Demo.png"
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
          <button className="menu-btn" onClick={showDrawer}>
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
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                  <img src={Combinelogo} style={{ width: "250px" }} alt="" />
                 
                </div>
                <p>Your Art, Our Canvas</p>
                <div className="slite-padding"></div>
                <div className="btn-container">
                  <Link to="/AboutUs"><button><span>Explore</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">

              <img src={Industy} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay"></div>
            <div className="text-container-set four">
              <div className="text-container">
                <div className="main-content-container">
                  {/* <img src={logo} alt="" style={{ width: "130px",margin:"auto" }} /> */}
                  <h1><span><span style={{ color: "#FFED00" }}>industry</span> experience</span></h1>
                  <div className="slite-padding"></div>
                  <div className="content-container">
                    <Row gutter={[16, 16]}>
                      <Col lg={6} md={12} >
                        <div className='contup'>
                          <CountUp
                            end={400}
                            duration={20}
                            suffix="+"
                          />
                          <h3>Premium Outdoor Sites in Ahmedabad</h3>
                        </div>
                      </Col>
                      <Col lg={6} md={12} >
                        <div className='contup'>
                          <CountUp
                            end={500}
                            duration={20}
                            suffix="+"
                          />
                          <h3>Daily Impressions</h3>
                        </div>
                      </Col>
                      <Col lg={6} md={12} >
                        <div className='contup'>
                          <CountUp
                            end={1000}
                            duration={20}
                            suffix="+"
                          />
                          <h3>Clients</h3>
                        </div>
                      </Col>
                      <Col lg={6} md={12} >
                        <div className='contup'>
                          <CountUp
                            end={25}
                            duration={20}
                            suffix="+"
                          />
                          <h3>Years of Industry Experience </h3>
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
                <div className='topTwoBoxes'> 
                  <div className="animated-boxes-five">
                    <div className='writeUpContent'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste error doloribus quas dolore voluptate, deserunt minima quo illum velit sed!</p>
                    </div>
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4>Gantry</h4>
                      <div className="small-slite-padding"></div>
                    </div>
                  </div>
                  <div className='animated-boxes-six'>
                    <div className='writeUpContent'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste error doloribus quas dolore voluptate, deserunt minima quo illum velit sed!</p>
                    </div>
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4>Cantilever</h4>
                      <div className="small-slite-padding"></div>
                    </div>
                  </div>
                </div>
                <div className="twoslidesContainer">
                  <div className="animated-boxes-one">
                    <div className='writeUpContent'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste error doloribus quas dolore voluptate, deserunt minima quo illum velit sed!</p>
                    </div>
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4>Unipole</h4>
                      <div className="small-slite-padding"></div>

                    </div>
                  </div>
                  <div className="animated-boxes-two">
                    <div className='writeUpContent'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste error doloribus quas dolore voluptate, deserunt minima quo illum velit sed!</p>
                    </div>
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4> Hoardings</h4>
                      <div className="small-slite-padding"></div>

                    </div>
                  </div>
                </div>
                <div className="twoslidesContainer">
                  <div className="animated-boxes-three">
                    <div className='writeUpContent'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste error doloribus quas dolore voluptate, deserunt minima quo illum velit sed!</p>
                    </div>
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4> Pole Kiosks</h4>
                      <div className="small-slite-padding"></div>

                    </div>
                  </div>
                  <div className="animated-boxes-four">
                    <div className='writeUpContent'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste error doloribus quas dolore voluptate, deserunt minima quo illum velit sed!</p>
                    </div>
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4> LEDs</h4>
                      <div className="small-slite-padding"></div>

                    </div>
                  </div>
                </div>


              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src={offering} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay"></div>
            <div className="text-container-set">
              <div className="text-container second">
                <div>
                  <h1>Our Offerings</h1>
                </div>
                <div className="slite-padding"></div>
                <div className="btn-container">
                  <Link to="/OurOfferings"><button><span>Our Product</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                  <Link to="/OurOfferings"><button><span>Our Services</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src={client} alt="Yellow-Spot poster" />
            </div>
            <div className="image-overlay"></div>
            <div className="text-container-set">
              <div className="text-container second">
                <div>
                  <h1>Our Key Clients</h1>
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
          </SwiperSlide>



        </Swiper>
      </div>
    </>

  );
};

export default Home;
