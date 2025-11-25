import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length === 0) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Show success message
        setSubmitSuccess(true);
        setErrors({});
        // Clear form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Show error from backend
        setSubmitSuccess(false);
        setErrors({ submit: data.error || "Something went wrong!" });
      }
    } catch (err) {
      setSubmitSuccess(false);
      setErrors({ submit: err.message || "Something went wrong!" });
    }
  } else {
    setErrors(validationErrors);
    setSubmitSuccess(false);
  }
};

  return (

    <><section className="contact-hero">
      <div className="contact-hero-content">

      </div>
    </section>
    
    <section className="contact-sec">
        <div className="contact-page-section">
          <h2 className="contact-page-title">Get In Touch</h2>
          <p className="contact-page-subtitle">
            We’d love to hear from you! Reach out with any questions or projects.
          </p>
          <div className="contact-page-container">
            {/* Contact info */}
            <div className="contact-page-info">
              <h3>Contact Information</h3>

              <div className="contact-page-info-item">
                <FaPhoneAlt className="contact-page-icon" />
                <span>+92 (310) 221-5135</span>
              </div>

              <div className="contact-page-info-item">
                <FaEnvelope className="contact-page-icon" />
                <span>contact@digitech.com</span>
              </div>

              <div className="contact-page-info-item">
                <FaMapMarkerAlt className="contact-page-icon" />
                <span>Remote Location</span>
              </div>
            </div>

            {/* Contact form */}
            <form className="contact-page-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-page-form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "input-error" : ""} />
                {errors.name && (
                  <p className="contact-page-error">{errors.name}</p>
                )}
              </div>

              <div className="contact-page-form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""} />
                {errors.email && (
                  <p className="contact-page-error">{errors.email}</p>
                )}
              </div>

              <div className="contact-page-form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? "input-error" : ""} />
                {errors.subject && (
                  <p className="contact-page-error">{errors.subject}</p>
                )}
              </div>

              <div className="contact-page-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "input-error" : ""} />
                {errors.message && (
                  <p className="contact-page-error">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="contact-page-btn-submit">
                <FaPaperPlane className="submit-icon" />
                Send Message
              </button>

             {/* Backend/Submission messages */}
{submitSuccess && (
  <p className="contact-page-success">
    ✅ Thank you for contacting us! We have received your message and sent you a confirmation email.
  </p>
)}

{errors.submit && (
  <p className="contact-page-error">
    ❌ {errors.submit}
  </p>
)}

            </form>
          </div>
        </div>
      </section></>
  );
};

export default ContactPage;
