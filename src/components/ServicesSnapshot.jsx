"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "../components/ServicesSnapshotdata";

// Animation variants for "wavy" effect
const waveVariants = {
  hidden: { opacity: 0, y: 60, rotate: -2 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const ServicesSnapshot = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-16 md:px-8  text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl  md:text-4xl lg:text-[45px] font-bold  mb-4"
        >
          Our Core Expertise
          <div className="h-1 mx-auto mt-3 rounded-full  w-[90px] bg-amber-600"></div>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 max-w-2xl mx-auto mb-14 text-lg md:text-xl"
        >
          Discover how Codemantix Collectives transforms your digital vision
          into reality.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={waveVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="backdrop-blur-lg bg-white/20 border border-white/30 
                         shadow-xl hover:shadow-2xl 
                         rounded-2xl p-8 flex flex-col items-center 
                         text-center transition transform hover:-translate-y-3"
            >
              <div className="bg-white/40 backdrop-blur-md p-4 rounded-full shadow-md">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {service.name}
              </h3>
              <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-6 inline-block text-[#1E3A8A] font-medium hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
