import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", image: "", text: "" });
  const [loading, setLoading] = useState(true);

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Slider navigation
  const nextTestimonial = () =>
    setCurrent(prev => (testimonials.length ? (prev === testimonials.length - 1 ? 0 : prev + 1) : 0));

  const prevTestimonial = () =>
    setCurrent(prev => (testimonials.length ? (prev === 0 ? testimonials.length - 1 : prev - 1) : 0));

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", image: "", text: "" });
  };

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, image, text } = formData;

    if (!name || !image || !text) return alert("Please fill out all fields");

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setTestimonials(prev => [...prev, data]);
      setCurrent(testimonials.length); // show the new testimonial
      closeModal();
    } catch (err) {
      console.error(err);
      alert("Error submitting testimonial");
    }
  };

  return (
    <section className="testimonial-section">
      <h2 className="test-title">Testimonials</h2>

      {loading ? (
        <p>Loading testimonials...</p>
      ) : testimonials.length ? (
        <div className="testimonial-slider">
          <button onClick={prevTestimonial} className="slider-btn">&#8592;</button>

          <div className="testimonial-card">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="testimonial-image"
            />
            <h3>{testimonials[current].name}</h3>
            <p>{testimonials[current].text}</p>
          </div>

          <button onClick={nextTestimonial} className="slider-btn">&#8594;</button>
        </div>
      ) : (
        <p>No testimonials yet. Be the first to add one!</p>
      )}

      {/* Add testimonial button */}
      <button onClick={openModal} className="add-testimonial-btn">Add Testimonial</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <h2 id="modalTitle">Add Testimonial</h2>
            <form onSubmit={handleSubmit} className="testimonial-form">
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>

              <label>
                Image URL:
                <input
                  type="url"
                  name="image"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Testimonial:
                <textarea name="text" value={formData.text} onChange={handleChange} required />
              </label>

              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" onClick={closeModal} className="cancel-btn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial;
