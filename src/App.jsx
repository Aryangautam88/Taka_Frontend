import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import ScrollToTop from "./ScrollToTop";
import Career from "./pages/Career";
// import SignupInfluencer from "./pages/SignupInfluencer";
// import SignupBusiness from "./pages/SignupBusiness";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          {/* <Route path="/signup-influencer" element={<SignupInfluencer />} /> */}
          {/* <Route path="/signup-business" element={<SignupBusiness />} /> */}
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;