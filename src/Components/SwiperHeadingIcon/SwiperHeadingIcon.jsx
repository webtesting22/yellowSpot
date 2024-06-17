import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import MagicHeading from "../MagicHeading/MagicHeading";
import img from "../InventryManagement/animatedImg.svg"
const SwiperHeadingIcon = ({ headingText }) => {
    const imgMap = [
        {
            img: img
        },
        {
            img: img
        },
        {
            img: img
        },

    ]
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <div style={{width:"30%"}}>
                    <Swiper
                        direction={'vertical'}

                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                        loop={true}
                        style={{ height: "80px", width: "80px", margin: "0px" }}
                    >
                        {imgMap.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.img} alt="Yellow-Spot Logo" style={{ width: "100%", height: "100%", backgroundColor: "#FFED00", borderRadius: "50%" }} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
                <div style={{ marginTop: "-30px",marginLeft:"10px" }}>
                    <MagicHeading text={headingText} />
                </div>
            </div >
        </>
    )
}
export default SwiperHeadingIcon;