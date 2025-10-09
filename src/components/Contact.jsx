"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ContactCTASection() {
  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-20 bg-gradient-to-b from-[#1E3A8A] to-[#1E40AF] text-white overflow-hidden"
      id="contact-cta"
    >
      {/* Floating/Parallax Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#10B981]/30 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#F97316]/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-[#64748B]/20 blur-2xl"
        animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Container */}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left Column: Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-xl w-full">
              <Image
                src="/Images/Contact.jpg"
                alt="Contact illustration"
                width={800}
                height={800}
                className="object-contain w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right Column: Text & CTA */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-4xl lg:text-[45px] font-bold mb-4 leading-tight">
              Let’s Bring Your Vision to Life
            </h2>
            <p className="text-lg md:text-xl text-gray-100 mb-6">
              Have a project in mind or just want to chat? Our team is ready to
              help you create solutions that make an impact.
            </p>
            <Link
              href="/Contact"
              className="inline-block bg-[#F97316] hover:bg-[#F75A16] text-white px-6 py-3 rounded-md font-semibold text-lg shadow-lg transition transform hover:scale-105"
            >
              Reach Out Today
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
