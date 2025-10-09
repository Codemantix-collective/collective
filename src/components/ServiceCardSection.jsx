"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServicesCard";

export default function ServiceSection({ title, description, services }) {
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="relative w-full bg-white backdrop-blur-sm py-10 ">
      {/* Centered max-width container */}
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-black">{description}</p>
        </div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
