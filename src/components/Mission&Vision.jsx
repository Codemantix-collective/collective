"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";

const coreValues = [
  {
    title: "Innovation",
    text: "We push boundaries and embrace fresh ideas that drive growth and excellence.",
    icon: <FaLightbulb size={28} className="text-blue-600" />,
  },
  {
    title: "Collaboration",
    text: "Working together is at the heart of everything we do to achieve more.",
    icon: <FaUsers size={28} className="text-blue-600" />,
  },
  {
    title: "Integrity",
    text: "We act with honesty, transparency, and uphold the highest standards.",
    icon: <FaShieldAlt size={28} className="text-orange-500" />,
  },
  {
    title: "Excellence",
    text: "Delivering the best solutions with passion, precision, and commitment.",
    icon: <FaRocket size={28} className="text-orange-500" />,
  },
];

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CoreValues() {
  return (
    <section className="relative bg-gray-50 py-20 px-4 md:px-8 lg-px-16 overflow-hidden">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our Core Values
        </motion.h2>

        {/* Decorative line */}
        <div className="mt-3 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Cards with staggered crazy animation */}
      <motion.div
        className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 "
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className={`relative bg-white/80 backdrop-blur-xl rounded-2xl 
                        shadow-xl hover:shadow-2xl px-6 py-10 
                        flex flex-col items-center text-center
                        transition-all duration-500 group
                        ${index % 2 === 1 ? "lg:translate-y-10" : ""}`}
          >
            {/* Icon wrapper */}
            <div className="p-5 bg-white rounded-full shadow-md mb-4 relative overflow-hidden">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                {value.icon}
              </motion.div>
            </div>

            {/* Content */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {value.text}
            </p>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/10 to-orange-50/10 opacity-0 group-hover:opacity-100"
              initial={false}
              animate={{ opacity: [0, 0.08, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom padding divider */}
      <div className="mt-20 flex justify-center">
        <div className="w-32 h-0.5 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}
