"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutTeamSection() {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const circleVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-20 flex flex-col items-center justify-center text-center bg-[#1E3A8A] overflow-hidden">
      {/* Glass-like overlay */}
      <div className="absolute inset-0 bg-[#1E3A8A]/30 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column: Text */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariant}
        >
          <h2 className="text-3xl md:text-[45px] font-bold text-white mb-6 leading-tight">
            Working With a Team of Experts
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            At Codemantix Collectives, our team is a fusion of creativity,
            strategy, and technical excellence. We unite designers, developers,
            and analysts under one vision, to craft innovative digital
            solutions that empower businesses and inspire users.
          </p>
          <p className="text-lg md:text-xl text-gray-200">
            Whether it’s building seamless interfaces, designing actionable data
            solutions, or creating impactful experiences, our collective ensures
            your ideas become transformative realities.
          </p>
        </motion.div>

        {/* Right Column: Circle with Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={circleVariant}
        >
          <div className="relative lg:w-[600px] lg:h-[400px] w-[300px] h-[300px] rounded-full bg-white backdrop-blur-xl shadow-xl flex items-center justify-center overflow-hidden">
            <Image
              src="/Images/Teampicture.jpg"
              alt="Team Image"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
