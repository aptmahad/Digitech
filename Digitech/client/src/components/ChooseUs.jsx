import React from "react";
import { FiClock, FiUsers, FiShield, FiStar } from "react-icons/fi";


const features = [
  {
    icon: <FiClock />,
    title: "Fast & Reliable",
    description: "We deliver high-quality services on time, every time."
  },
  {
    icon: <FiUsers />,
    title: "Professional Team",
    description: "Our experts are skilled and experienced in their fields."
  },
  {
    icon: <FiShield />,
    title: "Secure & Trusted",
    description: "We prioritize your security and trust in every project."
  },
  {
    icon: <FiStar />,
    title: "Customer Satisfaction",
    description: "Our clients love us, and we strive to exceed expectations."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Discover the benefits of working with our expert team.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
