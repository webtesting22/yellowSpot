import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import Contact from "./Components/Contact/Contact";
// import Services from "./Components/Services/Services";
import Inventory from "./Components/InventryManagement/Inventory";
import AboutUS from "./Components/AboutUs/AboutUs";
import Agencies from "./Components/Agencies/Agencies";
import OurOfferings from "./Components/OurOfferings/OurOfferings";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/BackTotop";
import DynamicCreateShape from "./Components/DynamicCreateShape/DynamicCreateShape";
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/AboutUS" element={<AboutUS />} />
            <Route path="/Agencies" element={<Agencies />} />
            <Route path="/OurOfferings" element={<OurOfferings />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/DynamicCreateShape" element={<DynamicCreateShape />} />
          </Routes>
      </div>
      <BackToTop/>
    </BrowserRouter>
  );
}

export default App;
