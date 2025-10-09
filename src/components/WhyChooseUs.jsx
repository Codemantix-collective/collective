"use client";

import { motion } from "framer-motion";
import { FiUsers, FiBarChart2, FiMonitor } from "react-icons/fi";

export default function ExcellenceSection() {
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-20 bg-gradient-to-b from-[#1E3A8A] to-[#1E40AF] text-white overflow-hidden"
      id="our-excellence"
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

      {/* Container aligned with Hero */}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Column: Text */}
          <motion.div
            className="lg:w-1/2"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold mb-4 leading-tight text-center lg:text-left">
              Elevate Your Digital Presence with Expert Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-100 text-center lg:text-left">
              We combine innovative web development, actionable data insights,
              and intuitive design to deliver solutions that empower businesses,
              delight users, and drive measurable results.
            </p>
          </motion.div>

          {/* Right Column: Glass Cards */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-6"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Card 1 */}
            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300"
              variants={cardVariant}
            >
              <FiUsers className="text-8xl md:text-5xl text-[#10B981] mr-6" />
              <div>
                <h3 className="text-2xl font-semibold mb-1">Expert Team</h3>
                <p className="text-gray-100">
                  Our skilled developers, designers, and analysts bring
                  unmatched expertise to every project.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300"
              variants={cardVariant}
            >
              <FiBarChart2 className="text-8xl md:text-5xl text-[#F97316] mr-6" />
              <div>
                <h3 className="text-2xl font-semibold mb-1">
                  Data-Driven Solutions
                </h3>
                <p className="text-gray-100">
                  We deliver actionable insights that optimize business
                  decisions and drive growth.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="flex items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300"
              variants={cardVariant}
            >
              <FiMonitor className="text-8xl md:text-5xl text-[#10B981] mr-6" />
              <div>
                <h3 className="text-2xl font-semibold mb-1">
                  User-Centric Design
                </h3>
                <p className="text-gray-100">
                  Our UI/UX designs ensure intuitive, attractive, and engaging
                  experiences for your audience.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
