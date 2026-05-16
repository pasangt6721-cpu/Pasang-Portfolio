"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, ChangeEvent, FormEvent } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
  
      // Limit phone number to 10 digits only
      if (name === "phone") {
        const onlyNumbers = value.replace(/\D/g, "");
  
        if (onlyNumbers.length > 10) return;
  
        setFormData({
          ...formData,
          [name]: onlyNumbers,
        });
  
        return;
      }
  
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle form submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      setLoading(true);
  
      emailjs
        .send(
          "service_4cn3nzq",
          "template_ofvy6hf",
          {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            selected_service: formData.service,
            message: formData.message,
          },
          "HYkTfDUBxoYmw2w9w"
        )
        .then(() => {
          alert("Message sent successfully!");
  
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to send message.");
        })
        .finally(() => {
          setLoading(false);
        });
    };
  return (
    <section id="contact" className="relative w-full py-40 bg-[#0D0D0D] overflow-hidden flex flex-col items-center justify-center border-t border-white/5 z-20">
      
      {/* Subtle Background Glow/Rays matching the reference vibe but fitting the dark theme */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-[#0D0D0D]/60 to-[#0D0D0D]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
         <div id="contact" className="contact-section">

        {/* Background Text */}
        <div className="contact-background-text">
          PASA
        </div>

        {/* Left Content */}
        <div className="contact-content">
          <h2 className="contact-title">
            Want to Hire me ?
          </h2>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >
            {/* Name */}
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="form-input"
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Whatsapp Number"
                required
                maxLength={10}
                className="form-input"
              />
            </div>

            {/* Service Dropdown */}
            <div className="form-group">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input form-dropdown"
              >
                <option value="">
                  Select Service
                </option>

                <option value="Short-form Video">
                  UI/UX Design
                </option>

                <option value="Long-form Video">
                  Frontend Development
                </option>

                <option value="Graphics Design">
                  backend Development
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="form-textarea"
                rows={6}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="contact-form-submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}

              {!loading && (
                <svg
                  className="arrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              )}
            </button>
          </form>
        </div>
        </div>
      </motion.div>
      
    </section>
  );
}