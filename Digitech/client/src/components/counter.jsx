import React from "react";
import { FaUsers, FaProjectDiagram, FaCheckCircle } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountersSection = () => {
  const counters = [
    { id: 1, label: "Clients", count: 250, icon: <FaUsers /> },
    { id: 2, label: "Projects", count: 120, icon: <FaProjectDiagram /> },
    { id: 3, label: "Success", count: 98, icon: <FaCheckCircle />, suffix: "%" }, // Note: Use number for count, add suffix for %
  ];

  // Hook to detect if section is in view
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the section is visible
    triggerOnce: true, // Animate only once
  });

  return (
    <section ref={ref} className="counters-section">
      <div className="counters-container">
        {counters.map(({ id, label, count, icon, suffix = "" }) => (
          <div key={id} className="counter-card">
            <div className="counter-icon">{icon}</div>
            <h2 className="counter-number">
              {inView ? (
                <CountUp
                  start={0}
                  end={count}
                  duration={2} // Animation duration in seconds
                  suffix={suffix}
                />
              ) : (
                0 // Show 0 before animation starts
              )}
            </h2>
            <p className="counter-label">{label}</p>
          </div>
        ))}
      </div>


    </section>
  );
};

export default CountersSection;
