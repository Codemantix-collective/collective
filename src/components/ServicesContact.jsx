"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative w-full bg-[#1E3A8A] py-10 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8  px-4 md:px-8 lg:px-16 ">
        {/* Left content */}
        <div className="flex-1 p-5 lg:p-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center lg:text-left">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl mb-6 text-white text-center lg:text-left">
            Let’s work together to bring your ideas to life. Reach out today and
            we’ll create something amazing.
          </p>
          <Link href="/Contact">
            <button className="block bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition mx-auto lg:mx-0 text-center">
              Reach out to us
            </button>
          </Link>
        </div>

        {/* Right image */}
        <motion.div
          className="flex-1 flex items-center justify-center w-full lg:w-[600px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0, 20, 0] }}
            transition={{
              delay: 2, // start floating after 2 seconds
              duration: 6, // full float cycle duration
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/Images/Reachme.jpg"
              alt="Contact illustration"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
