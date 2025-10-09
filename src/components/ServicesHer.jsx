"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }, // faster stagger
  };

  const headingVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center pt-40 bg-[#1E3A8A] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/Services.jpg"
        alt="Services Hero"
        fill
        className="absolute inset-0 object-cover object-center mix-blend-overlay"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1E3A8A]/30 backdrop-blur-sm"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 px-4 md:px-8 lg:px-16 max-w-4xl"
        variants={containerVariant}
        initial="hidden"
        animate="visible" // appear immediately on load
      >
        <motion.h1
          className="text-3xl md:text-[48px] font-bold text-white mb-6 leading-tight"
          variants={headingVariant}
        >
          Crafting Innovative Solutions for Your Growth
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8"
          variants={paragraphVariant}
        >
          At Codemantix Collectives, we specialize in web development, UI/UX
          design, and data analysis, delivering scalable, impactful solutions
          that elevate your business and delight your users.
        </motion.p>
      </motion.div>
    </section>
  );
}
