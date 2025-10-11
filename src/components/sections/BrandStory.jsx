"use client";

import { motion } from "framer-motion";
import { items } from "../data/BrandStorydata";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function BrandStory() {
  const { elementRef, isVisible } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50/50 via-primary-50/30 to-accent-50/20 px-4 py-24 md:px-8 lg:px-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="opacity-3 absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(30, 58, 138, 0.15) 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 80px 80px",
          }}
        />

        {/* Optimized Floating Orbs - Only animate when visible */}
        <motion.div
          animate={
            isVisible
              ? {
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.2, 0.1],
                }
              : {}
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-20 top-20 h-32 w-32 rounded-full bg-gradient-to-br from-primary-300/10 to-accent-300/10 blur-2xl"
        />

        <motion.div
          animate={
            isVisible
              ? {
                  scale: [1.2, 0.9, 1.2],
                  opacity: [0.08, 0.15, 0.08],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-secondary-300/20 to-primary-300/20 blur-2xl"
        />
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600">
              📖 Our Journey
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl font-bold leading-tight text-primary-900 md:text-6xl"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Story
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300"
          >
            From a bold vision to a thriving collective, discover how we're transforming the digital
            landscape one innovative solution at a time.
          </motion.p>

          {/* Decorative Elements */}
          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600"></div>
              <div className="h-2 w-2 rounded-full bg-accent-500"></div>
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent-500 to-secondary-500"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="relative h-full rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                {/* Card Background Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 to-primary-50/30 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                      <div className="transform transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                    </div>

                    {/* Floating ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-2 rounded-2xl border-2 border-dashed border-primary-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-primary-900 transition-colors group-hover:text-primary-700">
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">{item.text}</p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-primary-300/20 via-accent-300/20 to-secondary-300/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 text-sm text-gray-300">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-300"></div>
            <span>Continuing to innovate and inspire</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
