"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  UsersIcon,
  StarIcon,
  HeartIcon,
  GlobeAltIcon,
  TrophyIcon,
  RocketLaunchIcon,
  SparklesIcon,
  LightBulbIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  SwatchIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const teamStats = [
  { number: "10+", label: "Expert Members", icon: UsersIcon },
  { number: "15+", label: "Countries", icon: GlobeAltIcon },
  { number: "60+", label: "Projects", icon: RocketLaunchIcon },
  { number: "7", label: "Years Experience", icon: TrophyIcon },
];

const expertiseAreas = [
  {
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies",
    icon: CodeBracketIcon,
    color: "from-primary-500 to-primary-600",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that drives engagement and conversion",
    icon: PaintBrushIcon,
    color: "from-accent-500 to-accent-600",
  },
  {
    title: "Graphics Design",
    description:
      "Professional visual identity and marketing materials that communicate effectively",
    icon: SwatchIcon,
    color: "from-secondary-500 to-secondary-600",
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable business insights and intelligence",
    icon: ChartBarIcon,
    color: "from-primary-800 via-accent-600 to-secondary-600",
  },
];

export default function TeamHero() {
  const [currentExpertise, setCurrentExpertise] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentExpertise((prev) => (prev + 1) % expertiseAreas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative min-h-screen !overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Images/Team.jpg"
          alt="Our Amazing Team"
          fill
          className="absolute inset-0 object-cover object-center opacity-15"
          priority
        />

        {/* Animated Grid Pattern */}
        {isVisible ? (
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px, 60px 60px",
            }}
          />
        ) : (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px, 60px 60px",
            }}
          />
        )}

        {/* Dynamic Floating Orbs */}
        {isVisible ? (
          <motion.div
            animate={{
              x: [0, 150, -75, 0],
              y: [0, -100, 150, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-br from-accent-400/25 to-secondary-400/35 blur-3xl"
          />
        ) : (
          <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-br from-accent-400/25 to-secondary-400/35 blur-3xl" />
        )}

        {isVisible ? (
          <motion.div
            animate={{
              x: [0, -120, 90, 0],
              y: [0, 120, -90, 0],
              rotate: [360, 180, 0],
              scale: [1.2, 0.7, 1.4, 1.2],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10,
            }}
            className="absolute -bottom-48 -left-48 h-80 w-80 rounded-full bg-gradient-to-tr from-primary-400/20 to-accent-400/25 blur-3xl"
          />
        ) : (
          <div className="absolute -bottom-48 -left-48 h-80 w-80 rounded-full bg-gradient-to-tr from-primary-400/20 to-accent-400/25 blur-3xl" />
        )}

        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 100, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-br from-secondary-400/15 to-primary-400/20 blur-2xl"
        />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 md:py-32 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="mb-16 text-center">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-6 py-3 text-sm font-semibold text-accent-300">
                <UsersIcon className="h-5 w-5" />
                Meet Our Collective
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-8 text-4xl font-bold leading-tight text-white md:text-8xl"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-accent-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent">
                Amazing
              </span>
              <br />
              Team
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-4xl text-sm leading-relaxed text-gray-300 md:text-2xl"
            >
              Meet the passionate innovators, creative minds, and technical experts who bring your
              digital dreams to life. We're not just a team – we're a collective of visionaries
              committed to excellence.
            </motion.p>

            {/* Rotating Expertise Showcase */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="mb-12 text-2xl font-semibold text-gray-300">Our Expertise</h3>
              <div className="relative flex h-24 items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentExpertise}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="mb-4 flex justify-center">
                      {React.createElement(expertiseAreas[currentExpertise].icon, {
                        className: "h-16 w-16 text-white",
                      })}
                    </div>
                    <h4
                      className={`mb-2 bg-gradient-to-r bg-clip-text md:text-2xl text-lg font-bold text-transparent ${expertiseAreas[currentExpertise].color}`}
                    >
                      {expertiseAreas[currentExpertise].title}
                    </h4>
                    <p className="text-gray-300 text-sm md:text-xl">{expertiseAreas[currentExpertise].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Expertise Indicators */}
              <div className="mt-14 flex justify-center gap-3">
                {expertiseAreas.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExpertise(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      index === currentExpertise
                        ? "scale-125 bg-accent-400"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Team Stats */}
          <motion.div
            variants={containerVariants}
            className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4"
          >
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={floatingVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group text-center"
                >
                  <div className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-accent-500 to-secondary-500 transition-transform group-hover:scale-110">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>

                    {/* Floating accent */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent-400 opacity-50"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center gap-3 text-lg text-gray-300">
              <HeartIcon className="h-5 w-5 text-accent-400" />
              <span>Passionate professionals dedicated to your success</span>
              <SparklesIcon className="h-5 w-5 text-secondary-400" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
