"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description }) {
  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotate: -5 },
    visible: { 
      opacity: 1, y: 0, scale: 1, rotate: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  return (
    <motion.div
      variants={cardVariant}
      className="flex flex-col items-start space-y-4 p-6 bg-white backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
    >
      <div className="p-4 bg-white rounded-full text-[#1E3A8A] shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </motion.div>
  );
}
