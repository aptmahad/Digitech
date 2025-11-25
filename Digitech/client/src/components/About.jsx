import React from "react";
import about from "../assets/web-design-img.webp";


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-image-wrapper">
        <img
          src={about}
          alt="Smiling man"
          className="about-image"
        />
      </div>
      <div className="about-content">
        <h4 className="about-section-heading">About</h4> {/* New About heading */}
        <h2 className="about-heading">
          We're passionate about helping brands grow.
        </h2>
        <p className="about-text">
          At Digitech, we combine creative design, advanced technology, and data-driven strategy to build digital experiences that truly connect,{" "}
          <span className="about-inline-highlight">
          Our team focuses on understanding your brand, your audience, and your goals
          </span>{" "}
          allowing us to deliver solutions that are visually compelling, performance-optimized, and purpose-built for measurable impact.
        </p>
        <button className="about-btn">Learn More</button>
      </div>
    </section>
  );
};

export default AboutSection;
