const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

// MODELS
const Contact = require("./models/Contact");
const Testimonial = require("./models/Testimonial"); // <-- FIXED IMPORT

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

/* ---------------- TESTIMONIAL ROUTES ---------------- */

// GET all testimonials
app.get("/api/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new testimonial
app.post("/api/testimonials", async (req, res) => {
  try {
    const { name, image, text } = req.body;

    if (!name || !image || !text) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTestimonial = new Testimonial({ name, image, text });
    await newTestimonial.save();

    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ---------------- CONTACT ROUTE ---------------- */

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting us, ${name}!`,
      html: `
        <h3>Hi ${name},</h3>
        <p>Thank you for reaching out. We received your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Our team will contact you shortly.</p>
      `,
    };

    transporter.sendMail(mailOptions, err => {
      if (err) console.log("Email error:", err);
    });

    res.status(201).json({ message: "Message saved & email sent", data: newContact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ---------------- START SERVER ---------------- */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
