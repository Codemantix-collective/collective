"use client";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // sending/success/error
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus(""), 5000); // hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  // Hover animation variants
  const hoverVariant = {
    hover: {
      scale: 1.05,
      x: 5,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="bg-[#F9FAFB] min-h-screen flex justify-center items-center px-4 md:px-8 lg:px-16 pt-32  md:pt-20 lg:pt-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-10 ">
        {/* Left - Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl  md:text-[40px] font-bold text-[#1E3A8A] mb-2 text-center lg:text-left">
            Contact Us Today
          </h2>
          <p className="text-[#64748B] text-lg md:text-xl">
            We would love to hear from you! Whether it’s a project idea, a
            collaboration, or just to say hello, send us a message and we’ll get
            back to you promptly.
          </p>

          {/* Contact Info with Hover */}
          <div className="space-y-4 mt-4">
            <motion.div
              variants={hoverVariant}
              whileHover="hover"
              className="flex items-center space-x-3 text-[#1E3A8A] text-lg font-medium cursor-pointer hover:text-[#F97316]"
            >
              <Mail size={24} className="text-[#F97316]" />
              <span>codemantixcollective@gmail.com</span>
            </motion.div>

            <motion.div
              variants={hoverVariant}
              whileHover="hover"
              className="flex items-center space-x-3 text-[#1E3A8A] text-lg font-medium cursor-pointer hover:text-[#F97316]"
            >
              <Phone size={24} className="text-[#F97316]" />
              <span>+234 800 123 4567</span>
            </motion.div>

            <motion.div
              variants={hoverVariant}
              whileHover="hover"
              className="flex items-center space-x-3 text-[#1E3A8A] text-lg font-medium cursor-pointer hover:text-[#F97316]"
            >
              <MapPin size={24} className="text-[#F97316]" />
              <span>Enugu, Nigeria</span>
            </motion.div>
          </div>
        </div>

        {/* Right - Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          ></textarea>
          <button
            type="submit"
            className={`w-full py-3 rounded-md font-semibold text-white transition ${
              status === "sending"
                ? " bg-[#ffbf7e] cursor-not-allowed"
                : "bg-[#F97316] hover:bg-[#EA580C]"
            }`}
            disabled={
              !formData.name.trim() ||
              !formData.email.trim() ||
              !formData.message.trim() ||
              status === "sending"
            }
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="bg-green-100 text-green-700  font-medium mt-2 px-4 py-2 rounded-lg shadow">
              Your message has been sent!
            </p>
          )}
          {status === "error" && (
            <p className="bg-red-100 text-[#F77564] font-medium mt-2 px-4 py-2 rounded-lg shadow">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
