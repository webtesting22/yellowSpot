import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import Contact from "./Components/Contact/Contact";
// import Services from "./Components/Services/Services";
import Inventory from "./Components/InventryManagement/Inventory";
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Inventory" element={<Inventory />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
