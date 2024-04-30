import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

const Home = () => {
  return (
    <div className="full-screen">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content-text">
            <div className="sub-content">
              <h1>LOGO</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                dolor.
              </h4>
              <h1>Lorem ipsum dolor sit amet</h1>
              <button className="btn">About</button>
            </div>
          </div>
          <video autoPlay muted loop className="video-background">
            <source
              src="https://lilamanigroup.com/video/lilamani.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <div className="content-text-two">
          <SwiperSlide className="swiper-two">
            <div className="heading-two">
              <h1>Heading Of Name</h1>
              <h2>With</h2>
            </div>
            <div className="box-content">
              <h1>400 Million Urban Audience </h1>
              <div className="line"></div>
              <h1>700+ Daily Impressions </h1>
              <div className="line"></div>
              <h1>500+ Brand clients</h1>
            </div>
            <video autoPlay muted loop className="video-background">
              <source
                src="https://videos.pexels.com/video-files/2818546/2818546-sd_640_360_24fps.mp4"
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        </div>

        <SwiperSlide className="content-text-three">
         
            <div className="content-three">
              <h1>Information</h1>
              <h3>Lorem ipsum dolor sit</h3>
              <button className="btn">See More</button>
         
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
