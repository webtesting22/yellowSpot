import React, { useState, useEffect } from "react";
import "./animation.css"
import ResearchBasePlanning from "./21.png"
import CampaignMonitoring from "./22.png"
import CreativeDesigns from "./evaluation.png"
// import MediaBuying from "./24.png"
import Campion from "./25.png"
import MediaBuying from "./26.png"
const AnimatedCards = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const servicesCards = [
        {
            cardImage: ResearchBasePlanning,
            cardHeading: "Research-Based ",
            cardNormalHeading: "Campaign Planning",
            cardDescription: "Our aim is not to just sell our media but to maximise your target audience reach. With an extensive understanding of the target audience and consumer behaviour, our team guides you to create the ideal campaign for maximum impressions by conducting in-depth market & product research."
        },
        {
            cardImage: CreativeDesigns,
            cardHeading: "Creative Designs &",
            cardNormalHeading: " Seamless Execution",
            cardDescription: "Whether it be 3D-backed designs, moving elements, or cutouts, we have got it all! Just come to us with your product and let us help you bring the best creative designs to your audiences."
        },
        {
            cardImage: Campion,
            cardHeading: "Campaign Monitoring ",
            cardNormalHeading: "& Evaluation",
            cardDescription: "We are among the most result-oriented OOH agencies that help you implement your campaigns with ease and stand by to keep a check on the impressions and evaluate your campaign performance. It is also our standard practice to provide you with real-time GPS photographs of your campaign."
        },
        {
            cardImage: MediaBuying,
            cardHeading: "Media Buying Across ",
            cardNormalHeading: "Several Platforms",
            cardDescription: "For a successful and holistic marketing campaign, we have selected some of the best media platforms (outdoor, digital, cinema, social, print, radio, television, etc.) for you. As an aggregator, we recommend other vendors’ sites and have tie-ups with agencies that are best-in-town to provide you with the best strategic plan based on your budgetary requirements."
        }



    ]
    // const cardColors = ["rgb(49, 51, 53)", "rgb(49, 51, 53)", "rgb(49, 51, 53)", "rgb(49, 51, 53)"];
    return (
        <>
            <div className="App">
                <div className="cards-container" style={{ top: `${50 - scrollPosition}px` }}>
                    {servicesCards.map((item, index) => {
                        const isLastCard = index === servicesCards.length - 1;
                        return (
                            <div
                                key={index}
                                className="card"
                                style={{
                                    backgroundColor: "rgb(36, 36, 36)",
                                    zIndex: servicesCards.length + index,
                                    top: isLastCard ? `${50 + index * 20}px` : `${50 + index * 20 - scrollPosition}px`,
                                }}
                            >
                                <div className="class-inside-content">
                                    <div className="services-image-container">
                                        <img src={item.cardImage} alt="YellowSpot-services-image" style={{ width: "100%" }} />
                                    </div>
                                    <div className="animated-card-content-info">
                                        <h4><span>{item.cardHeading}</span>{item.cardNormalHeading}</h4>
                                        <p>{item.cardDescription}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* <div className="spacer" style={{ height: `${60 * cardColors.length}vh` }}></div> */}
            </div>
        </>
    )
}
export default AnimatedCards;