import React from 'react';
import { MdCalendarToday, MdSmartphone, MdTrendingUp,   } from 'react-icons/md';
import { SlCursor } from "react-icons/sl";
import { TiSocialInstagram } from "react-icons/ti";
import { RiRobot2Fill } from "react-icons/ri";

const services = [
  {
    icon: <MdCalendarToday />,
    title: "Web Design",
    description: "Creating responsive and visually appealing websites"
  },
  {
    icon: <MdSmartphone />,
    title: "App Development",
    description: "Building user-mentily mobile applications"
  },
  {
    icon: <MdTrendingUp />,
    title: "Marketing",
    description: "Developing strategies to enhance your brand"
  },
   
];

const services2 = [
  {
    icon: <SlCursor />,
    title: "PPC Sales",
    description: "Creating responsive and visually appealing websites"
  },
  {
    icon: <TiSocialInstagram />,
    title: "Social Media",
    description: "Building user-mentily mobile applications"
  },
  {
    icon: <RiRobot2Fill />,
    title: "Ai Automation",
    description: "Developing strategies to enhance your brand"
  },
   
];

const ServiceSection = () => {
  return (
    <section className="service-section">
      <h2 className="service-title">Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

       <div className="service-cards2">
        {services2.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
