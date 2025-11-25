import React, { useState, useEffect } from "react";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Wave SVG */}
      <div className="footer-wave"></div>

      <footer className="footer">
    <div className="footer-container">

  <div className="footer-col">
    <h3 className="footer-title">Digitech</h3>
    <p className="footer-text">
      Elevating digital experiences with modern design, smart technology,
      and user-focused solutions.
    </p>

    {/* Social Icons */}
    <div className="footer-social">
      <a href="#"><FaFacebook /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaInstagram /></a>
      <a href="#"><FaLinkedin /></a>
    </div>
  </div>

  <div className="footer-col">
    <h4>Quick Links</h4>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <div className="footer-col">
    <h4>Contact</h4>
    <ul>
      <li>Email: info@digitech.com</li>
      <li>Phone: +92 310 2215135</li>
      <li>Location: Remote Worldwide</li>
    </ul>
  </div>

</div>

{/* Newsletter now bottom + centered */}
<div className="footer-newsletter-section">
  <h4>Subscribe to our Newsletter</h4>
  <p>Stay updated with our latest news and innovations</p>

  <div className="newsletter-box bottom-style">
    <input type="email" placeholder="Enter your email" />
    <button>Send</button>
  </div>
</div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Digitech. All Rights Reserved.
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {isVisible && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
