import React,{useState,useEffect} from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Function to check if the user has scrolled down the page
    const handleScroll = () => {
        if (window.pageYOffset > 300) { // You can adjust this value according to your needs
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Add event listener when component mounts
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <>
            <button
                className={`scrollToTopButton ${isVisible ? 'show' : 'hide'}`}
                onClick={scrollToTop}
            >
                ↑
            </button>
        </>
    )
}

export default BackToTop;