"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center pt-25 bg-[#1E3A8A] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/Team.jpg"
        alt="Team"
        fill
        className="absolute inset-0 object-cover object-center mix-blend-overlay opacity-100"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1E3A8A]/30 backdrop-blur-sm"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 px-4 md:px-8 lg:px-16 max-w-4xl"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-3xl md:text-[48px] font-bold text-white mb-6 leading-tight"
          variants={headingVariant}
        >
          Innovating Digital Experiences That Drive Results
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8"
          variants={paragraphVariant}
        >
          At Codemantix Collectives, we craft solutions in web development,
          UI/UX design, and data analysis that empower businesses, delight
          users, and accelerate growth.
        </motion.p>

        <motion.a
          href="/Projects"
          className="inline-block bg-[#F97316] hover:bg-[#F75A16] text-white px-6 py-3 rounded-md text-lg font-semibold shadow transition"
          variants={buttonVariant}
        >
          View Our Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
