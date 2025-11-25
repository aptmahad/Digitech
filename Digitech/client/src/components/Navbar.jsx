import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* LOGO */}
        <div className="logo-area">
          <h2 className="logo-title">Digitech</h2>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              <FaHome /> Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setOpen(false)}>
              <FaInfoCircle /> About
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={() => setOpen(false)}>
              <FaServicestack /> Services
            </Link>
          </li>

           <li>
            <Link to="/gallery" onClick={() => setOpen(false)}>
              <GrGallery /> Gallery
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <button className="cta-btn">
          Get Started
        </button>

        {/* MOBILE MENU BUTTON */}
        <div className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
