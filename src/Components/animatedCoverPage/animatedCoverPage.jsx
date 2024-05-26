import React from "react";
import { TypeAnimation } from 'react-type-animation';
import "./animatedCoverPage.css"
import BackPicture from "./Picture1.png"
const AnimatedCoverPage = ({backgroundImage}) => {
    const handleScrollDown = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };
    return (
        <>
            <div className="animated-text-about">
                <div className="textbackAnimation">
                    <img src={BackPicture} alt="" style={{height:"100vh",width:"100%"}}/>
                </div>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'YELLOWSPOT  ',
                        6000, // wait 1s before replacing "Mice" with "Hamsters"

                    ]}
                    wrapper="h1"
                    speed={200}
                    style={{ fontWeight: "300", color: "#FFED00", fontSize: "45px", textAlign: "start", margin: "20px 0px" }}
                    // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                    repeat={Infinity}
                />
                <p>Make Your Brand Tower Above: Billboard Excellence, Tailored for You</p>
                <div className="slite-padding"></div>
                <div>
                    <button className="animated-scroll-down-btn" onClick={handleScrollDown}>Scroll Down <br /><i className='bx bxs-chevron-down' ></i></button>

                    <span></span>
                </div>
            </div>
        </>
    )
}
export default AnimatedCoverPage;