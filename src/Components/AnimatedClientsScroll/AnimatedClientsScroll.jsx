import React, { useEffect, useRef } from "react";
import "./clientCarousalContainer.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import ClientLogos from "../Home/ClientLogosData";
const AnimatedClientsScroll = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = containerRef.current;
        if (!scrollContainer) return;

        const scrollInterval = setInterval(() => {
            if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
                // Reset to the top if at the bottom
                scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Scroll down by 30px
                scrollContainer.scrollBy({ top: 90, behavior: 'smooth' });
            }
        }, 2000);

        // Clean up the interval on component unmount
        return () => clearInterval(scrollInterval);
    }, []);

    const headings = [
        "Unacademy", "Pallidium", "Google", "Jeep", "Colours", "Coke",
        "Bank Of Baroda", "Amul", "Axis Bank", "Gujarat Titans", "LIC",
        "Adani Group", "Reliance Digital", "Aditya Birla", "Oppo",
        "Vivo", "Tanishq", "Kalyan"
    ];

    const sortedHeadings = headings.sort((a, b) => a.localeCompare(b));
    return (
        <>
            <section className="clientCarousalContainer">
                <div className="bothSection">
                    <div className="left-sideContainer ">
                        <div className="left-side-Content">
                            <h1>Our Key Clientele</h1>
                            <p>
                                Whether it be real estate, service industry or FMCG products, OOH is for everyone.
                            </p>
                            <a href="/OurClientele"><button style={{ padding: "8px 20px", border: "none", backgroundColor: "#FFED00", borderRadius: "5px" }}>Explore All Clients</button></a>
                        </div>
                    </div>
                    <div className="right-sideContainer">
                        <div className="container custom-scrollbar-container" ref={containerRef} >
                            {sortedHeadings.map((heading, index) => (
                                <h1 className="heading" key={index}>{heading}</h1>
                            ))}

                        </div>
                        {/* <Swiper
                            direction={'vertical'}
                            slidesPerView={5}
                            spaceBetween={30}
                            freeMode={true}

                            loop={true}
                            modules={[FreeMode, Autoplay]}
                            className="mySwiper"
                            id="mySwiper"
                        >
                            {sortedClientLogos.map((item, index) => (
                                <div key={index} >
                                    <SwiperSlide >
                                        <img src={item.img} alt="" className="HomeCarousalImage" />
                                    </SwiperSlide>
                                </div>
                            ))}
                        </Swiper> */}
                        {/* <Swiper
                            direction={'vertical'}
                            slidesPerView={5}
                            spaceBetween={30}
                            freeMode={true}

                            loop={true}
                            modules={[FreeMode, Autoplay]}
                            className="mySwiper"
                            id="mySwiper"
                        >
                            {sortedClientLogos.map((item, index) => (

                                <SwiperSlide style={{height:"5vh"}}>
                                    <div key={index} className="container" style={{height:"20vh"}}>
                                        <h1 className="heading">3D Heading 2</h1>
                                    </div>
                                </SwiperSlide>

                            ))}
                        </Swiper> */}

                    </div>
                </div>
            </section>
        </>
    )
}
export default AnimatedClientsScroll;