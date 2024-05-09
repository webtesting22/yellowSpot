import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Agencies.css"
import { TypeAnimation } from 'react-type-animation';
const Agencies = () => {
    return (
        <>
            <Navbar />
            <div className="slite-padding"></div>
            <div className="slite-padding"></div>
            <section className="slite-padding">
                {/* <div className="overlay-back-img">
                    <img src="https://images.unsplash.com/photo-1599803654935-5b9d1c93578c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div> */}
                <div className="animated-text-about">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'YELLOWSPOT  ',
                            6000, // wait 1s before replacing "Mice" with "Hamsters"

                        ]}
                        wrapper="h1"
                        speed={200}
                        style={{ fontWeight: "300", fontSize: "8vw", textAlign: "start", margin: "0px" }}
                        // style={{ fontSize: '2em', display: 'block', fontSize: "8vw", fontWeight: "400px", textAlign: "center" }}
                        repeat={Infinity}
                    />
                    <p>When two leaders come together, magic happens!</p>
                </div>
            </section>
        </>
    )
}
export default Agencies