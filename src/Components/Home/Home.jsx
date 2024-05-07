import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import HomePageNavigation from "./HomePageNavigation";
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
      <HomePageNavigation />
      <div className="home-page-slider">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination]}
          style={{ height: "100vh", width: "100%", position: "relative" }}

        >

          <SwiperSlide style={{ height: "100vh" }}>
            <img src="https://images.unsplash.com/photo-1599803654935-5b9d1c93578c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
            <div className="text-container-set">
              <div className="text-container">
                {/* <h1>{item.sliderHeading}</h1> */}
                <div className="btn-container">
                  <button>View More<span></span></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <img src="https://images.unsplash.com/photo-1599803654935-5b9d1c93578c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
            <div className="text-container-set">
              <div className="text-container">
                {/* <h1>{item.sliderHeading}</h1> */}
                <div className="btn-container">
                  <button>View More<span></span></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <img src="https://images.unsplash.com/photo-1599803654935-5b9d1c93578c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
            <div className="text-container-set">
              <div className="text-container">
                {/* <h1>{item.sliderHeading}</h1> */}
                <div className="btn-container">
                  <button>View More<span></span></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100vh" }}>
            <img src="https://images.unsplash.com/photo-1599803654935-5b9d1c93578c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
            <div className="text-container-set">
              <div className="text-container">
                {/* <h1>{item.sliderHeading}</h1> */}
                <div className="btn-container">
                  <button>View More<span></span></button>
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
