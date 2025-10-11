"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LightBulbIcon,
  UsersIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  EyeIcon,
  TagIcon,
  HeartIcon,
  SparklesIcon,
  StarIcon,
  GlobeAltIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const coreValues = [
  {
    title: "Innovation",
    text: "We push boundaries and embrace fresh ideas that drive growth and digital transformation.",
    icon: LightBulbIcon,
    color: "from-primary-500 to-primary-600",
    bgColor: "from-primary-50 to-primary-100",
  },
  {
    title: "Collaboration",
    text: "Working together is at the heart of everything we do to achieve extraordinary results.",
    icon: UsersIcon,
    color: "from-accent-500 to-accent-600",
    bgColor: "from-accent-50 to-accent-100",
  },
  {
    title: "Integrity",
    text: "We act with honesty, transparency, and uphold the highest ethical standards.",
    icon: ShieldCheckIcon,
    color: "from-secondary-500 to-secondary-600",
    bgColor: "from-secondary-50 to-secondary-100",
  },
  {
    title: "Excellence",
    text: "Delivering the best solutions with passion, precision, and unwavering commitment.",
    icon: RocketLaunchIcon,
    color: "from-primary-700 to-accent-500",
    bgColor: "from-primary-50 to-accent-50",
  },
];

const missionVision = [
  {
    title: "Our Mission",
    subtitle: "Empowering Digital Transformation",
    description:
      "To empower businesses worldwide with innovative digital solutions that drive exponential growth, enhance user experiences, and transform visionary ideas into impactful digital realities.",
    icon: TagIcon,
    gradient: "from-primary-600 via-primary-500 to-accent-600",
    bgGradient: "from-primary-900 via-primary-800 to-accent-900",
    features: ["Global Impact", "Innovation First", "User-Centric Design", "Scalable Solutions"],
  },
  {
    title: "Our Vision",
    subtitle: "Shaping Tomorrow's Digital Landscape",
    description:
      "To be the world's most trusted collective of digital innovators, creating a future where cutting-edge technology seamlessly bridges human creativity with functional excellence.",
    icon: EyeIcon,
    gradient: "from-accent-600 via-accent-500 to-secondary-600",
    bgGradient: "from-accent-900 via-accent-800 to-secondary-900",
    features: [
      "Global Leadership",
      "Creative Excellence",
      "Future-Ready",
      "Collaborative Innovation",
    ],
  },
];

const impactStats = [
  { number: "50+", label: "Countries Served", icon: GlobeAltIcon },
  { number: "200+", label: "Projects Delivered", icon: RocketLaunchIcon },
  { number: "99.9%", label: "Client Satisfaction", icon: StarIcon },
  { number: "24/7", label: "Support Available", icon: BoltIcon },
];

export default function MissionVisionValues() {
  const [activeCard, setActiveCard] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    setIsLoaded(true);
    setMounted(true);
  }, []);

  // Only run card rotation when component is visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % missionVision.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
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
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      y: -8,
      rotateY: 5,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 py-16 sm:py-24 lg:py-32"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optimized Static Grid Pattern */}
        <div
          className="opacity-6 absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08) 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.06) 1px, transparent 1px),
              radial-gradient(circle at 40% 60%, rgba(249, 115, 22, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 80px 80px, 120px 120px",
          }}
        />

        {/* Multiple Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 120, -60, 0],
            y: [0, -80, 100, 0],
            scale: [1, 1.4, 0.7, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-10 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, 120, -70, 0],
            scale: [1.2, 0.8, 1.5, 1.2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-gradient-to-tr from-secondary-400/20 to-primary-400/25 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 80, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15,
          }}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-br from-accent-400/15 to-secondary-400/20 blur-2xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-6 py-3 text-sm font-semibold text-accent-300">
              <HeartIcon className="h-5 w-5" />
              What Drives Us Forward
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Mission &{" "}
            <span className="bg-gradient-to-r from-accent-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent">
              Vision
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl"
          >
            Our purpose and aspirations guide every decision we make, every solution we create, and
            every relationship we build in this digital transformation journey.
          </motion.p>

          {/* Impact Stats */}
          <motion.div
            variants={containerVariants}
            className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
          >
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover="hover"
                  className="group text-center"
                >
                  <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:p-6">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-accent-500 to-secondary-500 transition-transform group-hover:scale-110 sm:mb-4 sm:h-12 sm:w-12">
                      <IconComponent className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>
                    <div className="mb-1 text-xl font-bold text-white sm:mb-2 sm:text-2xl md:text-3xl">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-300 sm:text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="mx-auto max-w-7xl space-y-8 sm:space-y-12">
            {missionVision.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => setActiveCard(index)}
                  className={`group relative cursor-pointer ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex flex-col items-center gap-6 sm:gap-8 lg:flex`}
                >
                  {/* Content Side */}
                  <div className="space-y-4 sm:space-y-6 lg:w-1/2">
                    <div className="relative">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block"
                      >
                        <div
                          className={`h-20 w-20 rounded-3xl bg-gradient-to-br ${item.gradient} group-hover:shadow-3xl flex items-center justify-center shadow-2xl transition-all duration-500`}
                        >
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                      </motion.div>

                      {/* Floating particles */}
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-accent-400 opacity-50"
                      />
                    </div>

                    <div>
                      <motion.h2
                        variants={itemVariants}
                        className="mb-3 text-2xl font-bold leading-tight text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                      >
                        {item.title}
                      </motion.h2>

                      <motion.h3
                        variants={itemVariants}
                        className={`mb-4 bg-gradient-to-r bg-clip-text text-lg font-semibold text-transparent sm:mb-6 sm:text-xl md:text-2xl ${item.gradient}`}
                      >
                        {item.subtitle}
                      </motion.h3>

                      <motion.p
                        variants={itemVariants}
                        className="mb-6 text-base leading-relaxed text-gray-300 sm:mb-8 sm:text-lg md:text-xl"
                      >
                        {item.description}
                      </motion.p>

                      {/* Features */}
                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
                      >
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-gray-300">
                            <div
                              className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.gradient}`}
                            ></div>
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="relative w-full lg:w-1/2">
                    <motion.div
                      className="relative h-64 overflow-hidden rounded-3xl sm:h-80 lg:h-96"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient}`}>
                        <motion.div
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: `
                              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 2px, transparent 2px),
                              radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px, 40px 40px",
                          }}
                        />
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="relative h-48 w-48"
                        >
                          {/* Orbiting elements - Only render after mounting to prevent hydration errors */}
                          {mounted &&
                            [
                              { x: 80, y: 0 },
                              { x: 40, y: 69.28 },
                              { x: -40, y: 69.28 },
                              { x: -80, y: 0 },
                              { x: -40, y: -69.28 },
                              { x: 40, y: -69.28 },
                            ].map((position, i) => (
                              <motion.div
                                key={i}
                                className="absolute h-4 w-4 rounded-full bg-white/30"
                                style={{
                                  top: "50%",
                                  left: "50%",
                                  transformOrigin: `${position.x}px ${position.y}px`,
                                }}
                                animate={{
                                  rotate: -360,
                                }}
                                transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            ))}
                        </motion.div>

                        {/* Center Icon */}
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute flex h-24 w-24 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
                        >
                          <IconComponent className="h-12 w-12 text-white" />
                        </motion.div>
                      </div>

                      {/* Glow Effect */}
                      <div
                        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${item.gradient} -z-10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}
                      ></div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="mb-12 text-center sm:mb-16">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-600">
              <SparklesIcon className="h-4 w-4" />
              Our Foundation
            </span>

            <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl">
              Core{" "}
              <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              The principles that shape our culture and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-7xl gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-full rounded-2xl border border-white/50 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-xl sm:p-6">
                    {/* Animated Background */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.bgColor} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                    ></div>

                    <div className="relative z-10 space-y-3 text-center sm:space-y-4">
                      {/* Icon Container */}
                      <div className="relative mx-auto inline-block">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10"
                        >
                          <div
                            className={`h-12 w-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl sm:h-14 sm:w-14`}
                          >
                            <IconComponent className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                          </div>
                        </motion.div>

                        {/* Floating Ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 -m-2 rounded-xl border-2 border-dashed border-primary-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="mb-2 text-base font-bold text-primary-900 transition-colors group-hover:text-primary-700 sm:text-lg">
                          {value.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                          {value.text}
                        </p>
                      </div>

                      {/* Progress Line */}
                      <div
                        className={`h-1 w-0 rounded-full bg-gradient-to-r ${value.color} mx-auto transition-all duration-700 group-hover:w-full`}
                      ></div>
                    </div>

                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${value.color} -z-10 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-10`}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center sm:mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center gap-2 text-xs text-gray-400 sm:gap-3 sm:text-sm">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
            <span>Building the future, one solution at a time</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
