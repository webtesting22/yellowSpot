import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>

      <div className="menubar-section">
        <div
          className={`fade-in-image menu ${isOpen ? "active" : ""}`}
          style={{
            backgroundColor: "white",
            zIndex: "10",
            right: "20%",
            width: "150px",
            height: "190px",
            marginTop: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ul>
            <li>
              <Link
                to="/"
                className={activeSection === "home" ? "active" : ""}
                onClick={() => handleMenuClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={activeSection === "about" ? "active" : ""}
                onClick={() => handleMenuClick("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={activeSection === "services" ? "active" : ""}
                onClick={() => handleMenuClick("services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => handleMenuClick("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
