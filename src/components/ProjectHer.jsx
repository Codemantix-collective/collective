"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
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
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center pt-40 bg-[#1E3A8A] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/Projects.jpg"
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
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Headline */}
        <motion.h1
          className="text-3xl md:text-[48px] font-bold text-white mb-6 leading-tight"
          variants={headingVariant}
        >
          Empowering Businesses Through Digital Experiences
        </motion.h1>

        {/* Paragraph split into two lines */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 leading-snug"
          variants={paragraphVariant}
        >
          We design websites and interfaces <br />
          and deliver data solutions that grow your business.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="/About"
          className="inline-block bg-[#F97316] hover:bg-[#F75A16] text-white px-6 py-3 rounded-md text-lg font-semibold shadow transition"
          variants={buttonVariant}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
}
