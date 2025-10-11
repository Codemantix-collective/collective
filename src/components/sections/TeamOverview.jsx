"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  UsersIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  SwatchIcon,
  GlobeAltIcon,
  TrophyIcon,
  StarIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const teamStats = [
  {
    number: "25+",
    label: "Expert Members",
    icon: UsersIcon,
    color: "from-primary-500 to-primary-600",
  },
  { number: "15+", label: "Countries", icon: GlobeAltIcon, color: "from-accent-500 to-accent-600" },
  {
    number: "200+",
    label: "Projects",
    icon: TrophyIcon,
    color: "from-secondary-500 to-secondary-600",
  },
  { number: "4.9", label: "Avg Rating", icon: StarIcon, color: "from-yellow-500 to-orange-500" },
];

const specializations = [
  {
    title: "Full-Stack Development",
    description: "Expert developers building scalable web applications",
    icon: CodeBracketIcon,
    count: "8+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "UI/UX Design",
    description: "Creative designers crafting intuitive experiences",
    icon: PaintBrushIcon,
    count: "6+",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Analytics",
    description: "Data scientists turning insights into strategy",
    icon: ChartBarIcon,
    count: "5+",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Graphics Design",
    description: "Visual artists bringing brands to life",
    icon: SwatchIcon,
    count: "6+",
    color: "from-orange-500 to-red-500",
  },
];

export default function TeamOverview() {
  const { elementRef, isVisible } = useIntersectionObserver();

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50/50 via-primary-50/30 to-accent-50/20 py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="opacity-4 absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(30, 58, 138, 0.15) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
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
            scale: [1, 1.2, 0.8, 1],
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-20 top-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary-300/20 to-accent-300/20 blur-2xl"
        />

        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1.1, 0.9, 1.2, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-gradient-to-tr from-secondary-300/20 to-primary-300/20 blur-2xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          {/* Content Side */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600">
                <UsersIcon className="h-4 w-4" />
                Meet Our Team
              </span>

              <h2 className="mb-6 text-4xl font-bold leading-tight text-primary-900 md:text-6xl">
                Working With{" "}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Experts
                </span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl leading-relaxed dark:text-gray-200">
                At Codemantix Collective, our team is a fusion of creativity, strategy, and
                technical excellence. We unite designers, developers, and analysts under one vision:
                to craft innovative digital solutions that empower businesses and inspire users.
              </p>

              <p className="text-lg leading-relaxed dark:text-gray-200">
                Whether it's building seamless interfaces, designing actionable data solutions, or
                creating impactful experiences, our collective ensures your ideas become
                transformative realities.
              </p>
            </motion.div>

            {/* Team Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {teamStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} className="group">
                    <div className="relative rounded-xl border border-white/50 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                      <div
                        className={`h-10 w-10 bg-gradient-to-r ${stat.color} mb-3 flex items-center justify-center rounded-lg transition-transform group-hover:scale-110`}
                      >
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="mb-1 text-2xl font-bold text-primary-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                href="/team"
                className="group inline-flex transform items-center gap-3 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-primary-600 hover:to-accent-600 hover:shadow-xl"
              >
                <span>Meet Our Team</span>
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="space-y-8">
            {/* Main Team Image */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/Images/Teampicture.jpg"
                  alt="Our Amazing Team"
                  width={600}
                  height={400}
                  className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"></div>

                {/* Floating Team Stats */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-6 top-6 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 text-primary-900">
                    <HeartIcon className="h-5 w-5 text-accent-500" />
                    <span className="text-sm font-semibold">25+ Experts</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-6 left-6 rounded-2xl bg-accent-500/90 p-4 shadow-lg backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 text-white">
                    <StarIcon className="h-5 w-5" />
                    <span className="text-sm font-semibold">4.9/5 Rating</span>
                  </div>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100"></div>
            </motion.div>

            {/* Team Specializations */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-center text-2xl font-bold text-white">
                Our{" "}
                <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
                  Specializations
                </span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {specializations.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover="hover"
                      className="group relative"
                    >
                      <div className="relative rounded-xl border border-white/50 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                        <div
                          className={`h-8 w-8 bg-gradient-to-r ${spec.color} mb-3 flex items-center justify-center rounded-lg transition-transform group-hover:scale-110`}
                        >
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>

                        <div className="mb-1 text-lg font-bold text-primary-900">{spec.count}</div>

                        <div className="mb-1 text-xs font-semibold text-gray-600">{spec.title}</div>

                        <div className="text-xs leading-tight text-gray-500">
                          {spec.description}
                        </div>

                        {/* Hover Line */}
                        <div
                          className={`h-1 w-0 bg-gradient-to-r ${spec.color} mt-2 rounded-full transition-all duration-300 group-hover:w-full`}
                        ></div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
