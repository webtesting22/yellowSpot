import React, { useEffect, useRef, useState } from 'react';
import './MagicHeading.css'; // Import your CSS file with styles

const MagicHeading = ({ text }) => {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(sectionRef.current);

        return () => {
            observer.unobserve(sectionRef.current);
        };
    }, []);
    return (
        <div ref={sectionRef}>
            <h1 className={`${isVisible ? "section-heading " : ""}`}
            ><span className={`${isVisible ? "animated-span" : ""}`}></span>{text}</h1>
        </div>
    );
};

export default MagicHeading;
