import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "../Navbar/logo1.svg"
const Navbar = () => {
  const handleLeftHover = () => {
    document.querySelector('.left-side-ul .line > div').style.transform = 'translateX(-30px)';
    document.querySelector('.left-side-ul .line > div').style.width = '15px';
    document.querySelector('.left-side-ul .line > div').style.transition = '.7s';
    document.querySelector('.left-side-ul .line > div').style.opacity = '1';
  };

  const handleRightHover = () => {
    document.querySelector('.left-side-ul .line > div').style.transform = 'translateX(30px)';
    document.querySelector('.left-side-ul .line > div').style.width = '15px';
    document.querySelector('.left-side-ul .line > div').style.transition = '.7s';
    document.querySelector('.left-side-ul .line > div').style.opacity = '1';
  };
  const handletwoLeftHover = () => {
    document.querySelector('.right-side-ul .line > div').style.transform = 'translateX(-30px)';
    document.querySelector('.right-side-ul .line > div').style.width = '15px';
    document.querySelector('.right-side-ul .line > div').style.transition = '.7s';
    document.querySelector('.right-side-ul .line > div').style.opacity = '1';
  };

  const handletwoRightHover = () => {
    document.querySelector('.right-side-ul .line > div').style.transform = 'translateX(30px)';
    document.querySelector('.right-side-ul .line > div').style.width = '15px';
    document.querySelector('.right-side-ul .line > div').style.transition = '.7s';
    document.querySelector('.right-side-ul .line > div').style.opacity = '1';
  };

  const handleHoverOut = () => {
    document.querySelector('.left-side-ul .line > div').style.transform = '';
    document.querySelector('.left-side-ul .line > div').style.width = '';
    document.querySelector('.left-side-ul .line > div').style.opacity = '0.2';
  };
  const handletwoHoverOut = () => {
    document.querySelector('.right-side-ul .line > div').style.transform = '';
    document.querySelector('.right-side-ul .line > div').style.width = '';
    document.querySelector('.right-side-ul .line > div').style.opacity = '0.2';
  };
  return (
    <>
      <header className="header" id="header">
        <div className="main-nav-container">
          <div className="left-side-links">
            <div className="container">
              <div className="left-side-ul">
                <div className="d-flex animation-class" style={{ alignItems: "center" }}>
                  <div className="left-side" onMouseEnter={handleLeftHover} onMouseLeave={handleHoverOut}><span><Link to="/">ABOUT US</Link> </span></div>
                  <div className="line"><div></div></div>
                  <div className="right-side" onMouseEnter={handleRightHover} onMouseLeave={handleHoverOut}><span><Link to="/Inventory">INVENTORY</Link></span></div>
                </div>

              </div>
            </div>
          </div>
          <div className="website-identity">
            <div className="yellow-spot-logo">
              <Link to="/"><img src={logo} alt="" style={{ width: "90%" }} /></Link>
            </div>
          </div>
          <div className="right-side-links">
            <div className="container">
              <div className="right-side-ul">
                <div className="d-flex animation-class" style={{ alignItems: "center" }}>
                  <div className="left-side" onMouseEnter={handletwoLeftHover} onMouseLeave={handletwoHoverOut}><span><Link to="/">REVIEWS</Link></span></div>
                  <div className="line"><div></div></div>
                  <div className="right-side" onMouseEnter={handletwoRightHover} onMouseLeave={handletwoHoverOut}><span><Link to="">CONTACT US</Link></span></div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
