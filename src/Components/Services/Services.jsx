import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Services.css";

const Services = () => {
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
          <div>
            <img
              className="image-service"
              src="https://images.pexels.com/photos/804462/pexels-photo-804462.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></img>
            <div className="card-container">
              <div>
                <h1>Our Services</h1>
              </div>
              <div className="all-container">
                <div className="card-subcontainer">
                  <div className="image">
                    <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                  </div>
                  <div className="words">
                    <h1>Lorem ipsum </h1>
                    <h3>Lorem ipsum do.</h3>
                  </div>
                </div>
                <div className="card-subcontainer">
                  <div className="image">
                    <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                  </div>
                  <div className="words">
                    <h1>Lorem ipsum</h1>
                    <h3>Lorem ipsum dolo</h3>
                  </div>
                </div>
                <div className="card-subcontainer">
                  <div className="image">
                    <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                  </div>
                  <div className="words">
                    <h1>Lorem ipsum</h1>
                    <h3>Lorem ipsum dolor</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="image-service"
              src="https://images.pexels.com/photos/804462/pexels-photo-804462.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></img>
            <div className="card-container">
              <div className="card-subcontainer">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                </div>
                <div className="words">
                  <h1>Lorem ipsum </h1>
                  <h3>Lorem ipsum do.</h3>
                </div>
              </div>
              <div className="card-subcontainer">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                </div>
                <div className="words">
                  <h1>Lorem ipsum</h1>
                  <h3>Lorem ipsum dolo</h3>
                </div>
              </div>
              <div className="card-subcontainer">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                </div>
                <div className="words">
                  <h1>Lorem ipsum .</h1>
                  <h3>Lorem ipsum dolor</h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="image-service"
              src="https://images.pexels.com/photos/804462/pexels-photo-804462.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></img>
            <div className="card-container">
              <div className="card-subcontainer">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                </div>
                <div className="words">
                  <h1>Lorem ipsum </h1>
                  <h3>Lorem ipsum do.</h3>
                </div>
              </div>
              <div className="card-subcontainer">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                </div>
                <div className="words">
                  <h1>Lorem ipsum</h1>
                  <h3>Lorem ipsum dolo</h3>
                </div>
              </div>
              <div className="card-subcontainer">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                </div>
                <div className="words">
                  <h1>Lorem ipsum .</h1>
                  <h3>Lorem ipsum dolor</h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="image-service"
              src="https://images.pexels.com/photos/804462/pexels-photo-804462.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></img>
            <div className="card-container">
              <div className="card-subcontainer">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                </div>
                <div className="words">
                  <h1>Lorem ipsum </h1>
                  <h3>Lorem ipsum do.</h3>
                </div>
              </div>
              <div className="card-subcontainer">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                </div>
                <div className="words">
                  <h1>Lorem ipsum</h1>
                  <h3>Lorem ipsum dolo</h3>
                </div>
              </div>
              <div className="card-subcontainer">
                <div className="image">
                  <img src="https://images.unsplash.com/photo-1651059452723-8b51fb72333e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"></img>
                </div>
                <div className="words">
                  <h1>Lorem ipsum .</h1>
                  <h3>Lorem ipsum dolor</h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;
