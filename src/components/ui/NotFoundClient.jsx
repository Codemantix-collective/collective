"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  HomeIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const NotFoundClient = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const quickLinks = [
    {
      name: "Home",
      href: "/",
      icon: HomeIcon,
      description: "Back to homepage",
    },
    {
      name: "Services",
      href: "/services",
      icon: GlobeAltIcon,
      description: "Our digital solutions",
    },
    {
      name: "Projects",
      href: "/projects",
      icon: MagnifyingGlassIcon,
      description: "View our work",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: PhoneIcon,
      description: "Get in touch",
    },
  ];

  if (!mounted) {
    return (
      <div className="not-found-container flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center">
          {/* Skeleton for 404 number */}
          <div className="relative mb-6 sm:mb-8">
            <div
              className="not-found-text-massive mx-auto animate-pulse rounded-3xl bg-gray-200 dark:bg-gray-700"
              style={{
                width: "clamp(240px, 50vw, 400px)",
                height: "clamp(80px, 15vw, 160px)",
              }}
            ></div>
          </div>

          {/* Skeleton for title and description */}
          <div className="mb-6 sm:mb-8">
            <div
              className="mx-auto mb-4 h-8 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700 sm:h-10 md:h-12"
              style={{ width: "clamp(200px, 60vw, 400px)" }}
            ></div>
            <div className="mx-auto mb-2 h-4 max-w-2xl animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 sm:h-5"></div>
            <div className="mx-auto h-4 max-w-lg animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 sm:h-5"></div>
          </div>

          {/* Skeleton for action grid */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700"
                style={{ height: "140px" }}
              ></div>
            ))}
          </div>

          {/* Skeleton for buttons */}
          <div className="mb-6 flex flex-col justify-center gap-4 sm:mb-8 sm:flex-row">
            <div
              className="h-12 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 sm:h-14"
              style={{ width: "160px" }}
            ></div>
            <div
              className="h-12 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 sm:h-14"
              style={{ width: "160px" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="not-found-container relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Background Pattern */}
        <motion.div
          className="not-found-bg-pattern absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary-100 opacity-20 blur-3xl dark:bg-primary-900 dark:opacity-30 sm:h-80 sm:w-80 md:h-96 md:w-96"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
        <motion.div
          className="not-found-bg-pattern absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent-100 opacity-20 blur-3xl dark:bg-accent-900 dark:opacity-30 sm:h-72 sm:w-72 md:h-80 md:w-80"
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
        <motion.div
          className="not-found-bg-pattern absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-secondary-100 opacity-15 blur-3xl dark:bg-secondary-900 dark:opacity-25 sm:h-56 sm:w-56 md:h-64 md:w-64"
          animate={{
            x: mousePosition.x * 10,
            y: mousePosition.y * 10,
          }}
          transition={{ type: "spring", damping: 30 }}
        />

        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute left-20 top-20 h-4 w-4 rounded-full bg-primary-400 opacity-60 dark:bg-primary-500 dark:opacity-40"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute right-32 top-40 h-6 w-6 rotate-45 bg-accent-400 opacity-60 dark:bg-accent-500 dark:opacity-40"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-40 h-8 w-8 rounded-full border-2 border-secondary-400 opacity-60 dark:border-secondary-500 dark:opacity-40"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 h-5 w-5 rounded bg-primary-400 opacity-60 dark:bg-primary-500 dark:opacity-40"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
      </div>

      {/* Main Content */}
      <motion.main
        className="relative z-10 flex min-h-screen items-center py-8 justify-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="main"
        aria-labelledby="not-found-title"
        aria-describedby="not-found-description"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* 404 Number with Gradient */}
          <motion.div variants={itemVariants} className="relative mb-6 sm:mb-8">
            <motion.h1
              className="not-found-text-massive bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text font-bold leading-none text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
              id="not-found-title"
              aria-label="Error 404"
            >
              404
            </motion.h1>

            {/* Subtle Shadow Effect */}
            <div className="not-found-text-massive absolute inset-0 -z-10 translate-x-1 translate-y-1 transform font-bold text-gray-200 opacity-30 blur-sm dark:text-gray-700 dark:opacity-50 sm:translate-x-2 sm:translate-y-2">
              404
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div variants={itemVariants} className="mb-6 px-4 sm:mb-8">
            <h2 className="mb-4 text-2xl font-bold leading-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Oops! Page Not Found
            </h2>
            <p
              id="not-found-description"
              className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl"
            >
              The page you're looking for seems to have wandered off into the digital void. Don't
              worry though — let's get you back on track with some helpful options.
            </p>
          </motion.div>

          {/* Quick Actions Grid */}
          <motion.div variants={itemVariants} className="mb-8 px-4 sm:mb-12">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group"
                >
                  <Link href={link.href} className="block">
                    <div className="not-found-card flex min-h-[140px] flex-col justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-2xl group-hover:border-primary-200 dark:border-gray-700 dark:bg-gray-800 dark:group-hover:border-primary-600 sm:p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 transition-transform duration-300 group-hover:scale-110">
                          <link.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                          {link.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Primary Actions */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-col items-center justify-center gap-4 px-4 sm:mb-8 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/"
                className="group inline-flex w-full min-w-[160px] items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4"
              >
                <HomeIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Go Home
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={() => window.history.back()}
                className="group inline-flex w-full min-w-[160px] items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 shadow-lg transition-all duration-300 hover:border-primary-300 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-primary-500 sm:w-auto sm:px-8 sm:py-4"
              >
                <ArrowLeftIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Go Back
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="px-4 text-center">
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
              Still can't find what you're looking for?
            </p>
            <div className="flex flex-col items-center justify-center gap-4 text-sm sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center py-2 text-primary-600 transition-colors duration-300 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  <EnvelopeIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Contact our team</span>
                </Link>
              </motion.div>
              <span className="hidden text-gray-400 dark:text-gray-600 sm:inline">•</span>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/search"
                  className="inline-flex items-center py-2 text-primary-600 transition-colors duration-300 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  <MagnifyingGlassIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Search our site</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.main>

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-900" />
    </div>
  );
};

export default NotFoundClient;
