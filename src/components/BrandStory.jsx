"use client";

import { motion } from "framer-motion";

import { items } from "../components/BrandStorydata";

export default function BrandStory() {
  return (
    <section className="relative bg-gray-50 py-20 px-4 md:px-8 lg:px-16">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl  lg:text-[45px] font-bold text-gray-900"
        >
          Our Story
        </motion.h2>

        {/* Decorative line */}
        <div className="mt-3 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Content Blocks */}
      <div className="mt-14 grid md:grid-cols-2  lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="flex flex-col items-center space-y-4 px-6 py-10 
                       bg-white/30 backdrop-blur-lg rounded-2xl 
                       shadow-lg hover:shadow-xl 
                       hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-4 bg-white/50 rounded-full shadow-sm backdrop-blur-md">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-16 flex justify-center">
        <div className="w-32 h-0.5 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}
