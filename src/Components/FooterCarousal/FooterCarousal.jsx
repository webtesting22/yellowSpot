import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules';
import GantryImage from "../Home/Banners/Final1.png"
import GantryImage2 from "../Home/Banners/Final2.png"
import CantileverImage from "../Home/Banners/cantilever.png"
import UnipoleImage from "../Home/Banners/unipole.jpeg"
import HordingImage from "../Home/Banners/hoardings.jpeg"
import PoleKioskImage from "../Home/Banners/polekiosk.jpeg"
import LEDImage from "../Home/Banners/LEDFinal.png"
import "./FooterCarousal.css"
const FooterAnimatedCarousal = () => {

    const CarousalImages = [
        {
            img: GantryImage,
            imageType: "Gantry"
        },
        {
            img: CantileverImage,
            imageType: "Cantilever"
        },
        {
            img: HordingImage,
            imageType: "Hoarding"
        },
        {
            img: LEDImage,
            imageType: "LED"
        },
        {
            img: GantryImage2,
            imageType: "Gantry"
        },
        {
            img: UnipoleImage,
            imageType: "Unipole"
        },
        {
            img: PoleKioskImage,
            imageType: "Pole Kiosk"
        },

    ]
    return (
        <>
            <div className="animatedFooterCarousal">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 2000,
                    //     disableOnInteraction: false,
                    // }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    breakpoints={{
                        1100: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2// For tablets
                        },
                        250: {
                            slidesPerView: 2 // For mobile devices
                        },
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    {CarousalImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="imgContainer">
                                <h6>{item.imageType}</h6>
                                <img src={item.img} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>
        </>
    )
}

export default FooterAnimatedCarousal;