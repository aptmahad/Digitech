import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceSection from "./components/Services";
import AboutSection from "./components/About";
import GallerySection from "./components/Gallery";
import Testimonial from "./components/Testimonials";
import WhyChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";

function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <AboutSection />
      <GallerySection />
      <Testimonial />
      <WhyChooseUs />
 
    </>
  );
}

function App() {

 



  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
