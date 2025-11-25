import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (

    <><section className="about-hero">
          <div className="about-hero-content">

          </div>
       </section>
      
      <section className="about-page-section">
              <div className="about-page-content">
                  <div className="about-page-images">
                      <img
                          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                          alt="Creative Design Team"
                          className="about-page-img top-left" />
                      <img
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                          alt="UX Design Wireframes"
                          className="about-page-img top-right" />
                      <img
                          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80"
                          alt="Graphic Design Workspace"
                          className="about-page-img bottom-center" />
                  </div>
                  <div className="about-page-text">
                      <h2>About Digitech</h2>
                      <h3>Empowering Brands with Innovation & Creativity</h3>
                      <p>
                          At <strong>Digitech</strong>, we blend cutting-edge technology with creative brilliance to elevate your brand’s digital presence.
                          Our team of passionate designers, strategists, and tech experts collaborate to craft immersive and personalized digital experiences.
                      </p>
                      <p>
                          With a data-driven approach, we dig deep to understand your unique goals and audience — transforming insights into visually stunning,
                          highly functional, and results-oriented solutions. Whether launching a new campaign or scaling your brand identity, we are here to guide your journey from concept to success.
                      </p>
                      <p>
                          Join countless clients who trust Digitech to deliver innovation that drives engagement, growth, and lasting impact.
                          Together, let’s create something extraordinary.
                      </p>
                      <button className="about-page-btn-learn-more">Learn More</button>
                  </div>
              </div>
          </section></>
  );
};

export default AboutPage;
