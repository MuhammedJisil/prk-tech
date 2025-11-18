import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Navigation pages
import Home from "./components/Navigation/Home";
import AboutUs from "./components/Navigation/AboutUs";
import Careers from "./components/Navigation/Careers";
import ContactUs from "./components/Navigation/ContactUs";

//service pages
import CreativeCommunications from "./components/Services/CreativeCommunications";
import DigitalMarketing from "./components/Services/DigitalMarketing";
import SoftwareDevelopment from "./components/Services/SoftwareDevelopment";
import WebSolutions from "./components/Services/WebSolutions";


function App() {
  return (
    <Router>
      <Header />
       <ScrollToTop />
       <ScrollToTopButton />
      <main className="pt-20">
        <Routes>
          {/* Navigation Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Service Pages */}
          <Route path="/services/creative-communications" element={<CreativeCommunications/>} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/web-solutions" element={<WebSolutions />} />

          
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;