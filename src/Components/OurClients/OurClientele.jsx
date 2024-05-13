import React from "react";
import Navbar from "../Navbar/Navbar";
import HomePageNavigation from "../Home/HomePageNavigation";
import { TypeAnimation } from "react-type-animation";
import Footer from "../Footer/Footer";
const OurClientele =()=>{
    return(
        <>
           <Navbar />
            <HomePageNavigation/>
            <div className="section-padding"></div>
            <br />
            <div className="animated-text-about">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'YELLOWSPOT  ',
                        6000, // wait 1s before replacing "Mice" with "Hamsters"

                    ]}
                    wrapper="h1"
                    speed={200}
                    style={{ fontWeight: "300", fontSize: "45px",color: "#FFED00", textAlign: "start", margin: "0px" }}
                    // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                    repeat={Infinity}
                />
                <p>Elevate Your Brand: Billboard Solutions Tailored for Success</p>
                <div className="slite-padding"></div>
                <div>
                    <a href="#InventoryFilters"> <button className="animated-scroll-down-btn">Scroll Down <br /><i className='bx bxs-chevron-down' ></i></button></a>

                    <span></span>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default OurClientele;