import React from "react";
import CountUp from "react-countup";
import "./number.css"
const CounterAnimationComponent = ({ number, title }) => {
    return (
        <>
            <div className="number">
                <div>
                    <CountUp duration={10} className="counter" end={number} />
                </div>
                <div className="title">
                    <span>{title}</span>
                </div>
            </div>
        </>
    )
}

export default CounterAnimationComponent;