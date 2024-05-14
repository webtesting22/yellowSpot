import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "./Home.css";
import HomePageNavigation from "./HomePageNavigation";
import CounterAnimationComponent from "../CounterAnimationComponent/CounterAnimationComponent";
import billboard from "../Home/iconsImages/billboard.png"
import logo from "../Navbar/logo1.svg"
import { TypeAnimation } from 'react-type-animation';
import { Row, Col } from "antd";
const Home = () => {

  const carousalImagers = [
    {
      image: "https://images.unsplash.com/photo-1599803654935-5b9d1c93578c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sliderHeading: "Hello Demo Heading"
    },
    {
      image: "https://images.unsplash.com/photo-1593363725982-860117ff8b78?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      image: "https://images.unsplash.com/photo-1629005514669-70e8bbfcf917?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  return (
    <>
      <div id="HomePage">
        <HomePageNavigation />
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
              <img src="https://images.unsplash.com/photo-1638368888211-cecd27facf71?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="image-overlay"></div>
            <div className="text-container-set">
              <div className="text-container second">
                <div>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'YELLOWSPOT  ',
                      6000, // wait 1s before replacing "Mice" with "Hamsters"

                    ]}
                    wrapper="h1"
                    speed={200}
                    style={{ fontWeight: "300", fontSize: "45px", margin: "20px 0px", color: "#FFED00" }}
                    // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                    repeat={Infinity}
                  />
                </div>
                <p>As the city’s largest media planner and advertising solution provider</p>
                <div className="slite-padding"></div>
                <div className="btn-container">
                  <Link to="/AboutUs"><button><span>Explore</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">

              <img src="https://images.unsplash.com/photo-1571769380537-2e0bf17dd263?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
                        <div>
                          <CounterAnimationComponent number="400" title="Premium Outdoor Sites in Ahmedabad" />
                        </div>
                      </Col>
                      <Col lg={6} md={12} >
                        <div>
                          <CounterAnimationComponent number="500" title="Daily Impressions" />
                        </div>
                      </Col>
                      <Col lg={6} md={12} >
                        <div>
                          <CounterAnimationComponent number="1000" title="Clients" />
                        </div>
                      </Col>
                      <Col lg={6} md={12} >
                        <div>
                          <CounterAnimationComponent number="25" title="Years of Industry Experience" />
                        </div>
                      </Col>
                    </Row>
                  </div>

                </div>
                {/* <div className="btn-container">
                  <button>View More<span></span></button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="our-products">
              <div className="animated-hover-boxes">
              <div className="animated-boxes-five">
                  <div className="back-overlay"></div>
                  <div className="content-box">
                    <h4>Cantilevers</h4>
                    <div className="small-slite-padding"></div>
                    <button>Yellow Spot</button>
                  </div>
                </div>
                <div className="twoslidesContainer">
                  <div className="animated-boxes-one">
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4>Unipoles</h4>
                      <div className="small-slite-padding"></div>
                      <button>Yellow Spot</button>
                    </div>
                  </div>
                  <div className="animated-boxes-two">
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4>Gantries</h4>
                      <div className="small-slite-padding"></div>
                      <button>Yellow Spot</button>
                    </div>
                  </div>
                </div>
                <div className="twoslidesContainer">
                  <div className="animated-boxes-three">
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4>Hoardings</h4>
                      <div className="small-slite-padding"></div>
                      <button>Yellow Spot</button>
                    </div>
                  </div>
                  <div className="animated-boxes-four">
                    <div className="back-overlay"></div>
                    <div className="content-box">
                      <h4>Cantilevers</h4>
                      <div className="small-slite-padding"></div>
                      <button>Yellow Spot</button>
                    </div>
                  </div>
                </div>

                
              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src="https://images.unsplash.com/photo-1490529553037-4f4ed6f3f575?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="image-overlay"></div>
            <div className="text-container-set">
              <div className="text-container second">
                <div>
                  <h1>Our Product | For Services</h1>
                </div>
                <div className="slite-padding"></div>
                <div className="btn-container">
                  <Link to="/Agencies"><button><span>For Agencies</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
                  <button><span>For Brands</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <div className="image-container">
              <img src="https://images.unsplash.com/photo-1582129165473-a878f105f3b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="image-overlay"></div>
            <div className="text-container-set">
              <div className="text-container second">
                <div>
                  <h1>Our Key Clients</h1>
                </div>
                <div className="slite-padding"></div>
                <div className="btn-container">
                  {/* <Link to="/Agencies"><button><span>For Agencies</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link> */}
                  <Link to="/OurClientele"><button><span>For Brands</span><span><img src={billboard} alt="" style={{ width: "30px" }} /></span></button></Link>
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
