import React from "react";
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaPaperPlane, FaInstagram, FaRobot } from "react-icons/fa";

import "./ServicePage.css";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Web Design",
    description: "Creating responsive and visually appealing websites that captivate users and work seamlessly across devices.",
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: "App Development",
    description: "Building user-centric mobile applications with intuitive UX to drive engagement and performance.",
  },
  {
    id: 3,
    icon: <FaBullhorn />,
    title: "Marketing",
    description: "Developing data-driven marketing strategies and campaigns to elevate your brand’s visibility and growth.",
  },
  {
    id: 4,
    icon: <FaPaperPlane />,
    title: "PPC Sales",
    description: "Executing targeted pay-per-click ad campaigns that maximize ROI through smart bidding and optimization.",
  },
  {
    id: 5,
    icon: <FaInstagram />,
    title: "Social Media",
    description: "Crafting customized social media strategies to increase brand awareness, engagement, and conversions.",
  },
  {
    id: 6,
    icon: <FaRobot />,
    title: "AI Automation",
    description: "Implementing AI-powered automation solutions to streamline business processes and enhance efficiency.",
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

const ServicePage = () => {
  return (
  
    <>
    
    <section className="service-hero-sec">
    </section>
      
      <section className="serv-sec">
      <section
      className="service-page-section"
      initial="offscreen"
      
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="service-page-title">Services</h2>
      <div className="service-page-grid">
        {services.map(({ id, icon, title, description }) => (
          <div
            className="service-page-card"
            key={id}
            variants={cardVariants}
           
          >
            <div className="service-page-icon">{icon}</div>
            <h3 className="service-page-title-card">{title}</h3>
            <p className="service-page-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
    </section>
    </>
  );
};

export default ServicePage;
