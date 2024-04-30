import React from "react";
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const About = () => {
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
          <div className="content-text ">
            <h1>When two leaders come together, magic happens!</h1>
            <button className="btn">Get More Info</button>
          </div>
          <video autoPlay muted loop className="video-background">
            <source
              src="https://videos.pexels.com/video-files/6596440/6596440-sd_640_360_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content-text-two">
            <img
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "40px",
                margin: "20px",
              }}
              src="https://images.pexels.com/photos/2578326/pexels-photo-2578326.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></img>
            <p>
              "YellowSpot emerged as a collaborative effort between Khushi
              Advertising and Het Graphics. Our strategic alliance brings
              together two industry leaders, establishing one of the most
              formidable media houses in Gujarat. The motivation behind the
              collaboration is to provide comprehensive and holistic 360-degree
              marketing solutions to our local, national and international
              clients across diverse platforms."
            </p>
          </div>
          <video autoPlay muted loop className="video-background">
            <source
              src="https://videos.pexels.com/video-files/2818546/2818546-sd_640_360_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content-text-two">
            <img
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "40px",
                margin: "20px",
              }}
              src="https://images.pexels.com/photos/2578326/pexels-photo-2578326.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></img>

            <p>
              "Het Graphics, known as the industry leader in Ahmedabad city for
              its innovative ideas and extensive coverage, has successfully
              provided clients with a one-stop solution for outdoor advertising.
              Their extensive network of hoardings, gantries and signages makes
              creating awareness for your brand/product/service easier. With HET
              by their side, many national and local brands have advertised
              throughout the state of Gujarat"
            </p>
          </div>
          <video autoPlay muted loop className="video-background">
            <source
              src="https://videos.pexels.com/video-files/8491306/8491306-sd_640_338_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content-text-two">
            <img
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "40px",
                margin: "20px",
              }}
              src="https://images.pexels.com/photos/2085363/pexels-photo-2085363.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></img>

            <p>
              "Khushi Advertising, India’s leading ambient media agency,
              leverages its expertise and consummate skills to present the most
              effective campaigns with a distinct and long-lasting impact. With
              a presence in 22 cities, we are your one-stop solution for
              advertising in India’s 2700+ multiplex screens, 350+ malls, and
              30+ airports. Our wide-spread reach across India and 300+
              professionals enable us to be present at the right avenue at the
              right time to reach out to the right audience."
            </p>
          </div>
          <video autoPlay muted loop className="video-background">
            <source
              src="https://videos.pexels.com/video-files/8491306/8491306-sd_640_338_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <div className="founders">
            <h1 style={{ fontSize: "4rem" }}>Our Founders</h1>

            <div className="name1">
              <div style={{display:"flex"}}>
                <img
                  src="https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
                  style={{ borderRadius: "50%", marginRight: "40%" }}
                ></img>
                <h4>Pranay Shah</h4>
              </div>
            </div>
            <div className="name2">
              <div style={{display:"flex"}}>
                <h4>Asit Shah</h4>
                <img
                  src="https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
                  style={{ borderRadius: "50%", marginLeft: "40%" }}
                ></img>
              </div>
            </div>

            <img src="./images/bgimg.png" className="video-background"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
