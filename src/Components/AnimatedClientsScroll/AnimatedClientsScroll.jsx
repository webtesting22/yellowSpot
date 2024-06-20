import React, { useEffect, useRef } from "react";
import "./clientCarousalContainer.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import ClientLogos from "../Home/ClientLogosData";
import billboard from "../Home/iconsImages/billboard.png"
import { Link } from "react-router-dom";
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
        }, 1500);

        // Clean up the interval on component unmount
        return () => clearInterval(scrollInterval);
    }, []);

    const headings = [
        "Unacademy", "palladium", "Google", "Jeep", "colors tv", "Coke",
        "Bank Of Baroda", "Amul", "Axis Bank", "Gujarat Titans", "LIC",
        "Adani Group", "Reliance Digital", "Aditya Birla", "Oppo",
        "Vivo", "Tanishq", "kalyan jewellers"
    ];

    const sortedHeadings = headings.sort((a, b) => a.localeCompare(b));
    return (
        <>
            <section className="clientCarousalContainer">
                <div className="bothSection">
                    <div className="left-sideContainer" style={{paddingLeft:"40px"}}>
                        <div className="left-side-Content">
                            <h1 style={{ fontSize: "50px",color:"white",textTransform:"uppercase" }}><span style={{ color: "rgb(255, 237, 0)" }}>Our Key</span> Clientele</h1>
                            <p style={{ fontSize: "30px", lineHeight: "35px",color:"white" }}>
                                Whether it be real estate, service industry or FMCG products, OOH is for everyone.
                            </p>
                            <div className="btn-container">
                                <Link to="/OurClientele"><button style={{backgroundColor:"rgb(255, 237, 0) ",width:"180px"}}><span>Explore All Clients</span><span><img src={billboard} alt="Yellow-Spot poster" style={{ width: "30px" }} /></span></button></Link>
                            </div>
                           
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