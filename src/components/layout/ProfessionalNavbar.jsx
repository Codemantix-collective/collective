"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Moon, Sun, ArrowUpRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { navLinks } from "../ui/Navlinks";
import { motion, AnimatePresence } from "framer-motion";

const ProfessionalNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on desktop resize and route change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const toggleSidebar = useCallback(() => setIsSidebarOpen(!isSidebarOpen), [isSidebarOpen]);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Enhanced Top Contact Bar - Professional Touch with Codemantix Brand */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative hidden overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900 py-3 text-white lg:block"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container-custom relative">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              <div>
                <Link href="tel:+2348123121369" className="flex items-center gap-2">
                <Phone size={14} className="text-accent-400" />
                  <span className="font-medium">+234 812 312 1369</span>
                </Link>
              </div>
              <div>
                <Link href="mailto:info@codemantixcollective.com" className="flex items-center gap-2">
                  <Mail size={14} className="text-accent-400" />
                  <span className="font-medium">info@codemantixcollective.com</span>
                </Link>
              </div>
            </div>
            <div className="font-semibold text-gray-200">
              Professional IT Solutions & Digital Innovation
            </div>
          </div>
        </div>

        {/* Subtle glow effects */}
        <div className="absolute left-0 top-0 h-1 w-1/3 bg-gradient-to-r from-accent-400/50 to-transparent blur-sm" />
        <div className="absolute right-0 top-0 h-1 w-1/3 bg-gradient-to-l from-secondary-400/50 to-transparent blur-sm" />
      </motion.div>

      {/* Enhanced Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "border-b border-primary-200/30 bg-white/95 shadow-2xl backdrop-blur-2xl dark:border-primary-700/30 dark:bg-primary-900/95"
            : "bg-white/90 backdrop-blur-xl dark:bg-primary-900/90"
        }`}
      >
        {/* Animated gradient border */}
        <motion.div
          animate={{
            background: isScrolled
              ? "linear-gradient(90deg, rgba(30,58,138,0.3) 0%, rgba(16,185,129,0.3) 50%, rgba(249,115,22,0.3) 100%)"
              : "linear-gradient(90deg, rgba(30,58,138,0.1) 0%, rgba(16,185,129,0.1) 50%, rgba(249,115,22,0.1) 100%)",
          }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 h-0.5 w-full"
        />

        {/* Removed floating particles for better performance */}
        <div className="container-custom">
          <div className="flex h-20 items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Simplified static glow effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-400/10 via-accent-400/10 to-secondary-400/10 opacity-50 blur-lg" />

              <Link href="/" className="relative flex items-center space-x-3">
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px rgba(16,185,129,0))",
                      "drop-shadow(0 0 10px rgba(16,185,129,0.3))",
                      "drop-shadow(0 0 0px rgba(16,185,129,0))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/Images/nav.png"
                    width={180}
                    height={180}
                    alt="Codemantix Collective - Professional IT Solutions"
                    className="theme-adaptive-logo h-12 w-auto lg:h-14"
                    priority
                  />
                </motion.div>
              </Link>

              {/* Removed sparkle effect for better performance */}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 lg:flex">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`group relative px-4 py-2 text-base font-semibold transition-all duration-300 ${
                        isActiveLink(link.href)
                          ? "text-primary-800 dark:text-accent-400"
                          : "text-gray-700 hover:text-primary-800 dark:text-gray-300 dark:hover:text-accent-400"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-800 to-accent-500 transition-all duration-300 ${
                          isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-xl bg-gray-100 p-3 text-gray-600 transition-all duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
              )}

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                {/* Glowing background effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 opacity-60 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary-800 to-accent-500 px-8 py-4 font-bold text-white shadow-2xl transition-all duration-300 hover:from-primary-900 hover:to-accent-600"
                >
                  <span>Get Quote</span>
                  <motion.div
                    animate={{
                      x: [0, 3, 0],
                      y: [0, -1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </motion.div>
                </Link>

                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3,
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  style={{ transform: "skewX(-20deg)" }}
                />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Mobile Theme Toggle */}
              {mounted && (
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-all duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>
              )}

              <motion.button
                onClick={toggleSidebar}
                className="rounded-lg p-2 text-gray-700 transition-all duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isSidebarOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeSidebar}
            />

            {/* Enhanced Sidebar */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-80 max-w-[85vw] flex-col border-l border-primary-200/30 bg-gradient-to-br from-white/95 via-white/90 to-primary-50/80 shadow-2xl backdrop-blur-2xl dark:border-primary-700/30 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-primary-900/80"
            >
              {/* Animated background effects */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="absolute h-1 w-1 rounded-full bg-accent-400/60"
                    style={{
                      left: `${10 + i * 10}%`,
                      top: `${20 + (i % 3) * 30}%`,
                    }}
                  />
                ))}

                {/* Gradient orbs */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-gradient-to-br from-accent-400/20 to-secondary-400/20 blur-2xl"
                />
                <motion.div
                  animate={{
                    scale: [1.1, 0.9, 1.1],
                    opacity: [0.05, 0.2, 0.05],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-0 left-0 h-40 w-40 -translate-x-20 translate-y-20 rounded-full bg-gradient-to-br from-primary-400/15 to-accent-400/15 blur-2xl"
                />
              </div>

              {/* Enhanced Header */}
              <div className="relative flex items-center justify-between border-b border-primary-200/30 p-6 dark:border-primary-700/30">
                {/* Glowing border effect */}
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent"
                />

                {/* Brand text instead of logo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <motion.h2
                    className="bg-gradient-to-r from-primary-700 via-accent-500 to-secondary-500 bg-clip-text text-xl font-bold text-transparent dark:from-white dark:via-accent-400 dark:to-secondary-400"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(16,185,129,0)",
                        "0 0 10px rgba(16,185,129,0.3)",
                        "0 0 0px rgba(16,185,129,0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Menu
                  </motion.h2>

                  {/* Floating accent */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-6 -top-1 h-2 w-2 rounded-full bg-accent-400"
                  />
                </motion.div>

                {/* Enhanced close button */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  {/* Glowing background */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-400/20 to-secondary-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                  <motion.button
                    onClick={closeSidebar}
                    className="relative rounded-xl bg-gray-100/80 p-3 text-gray-600 backdrop-blur-sm transition-all duration-300 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:bg-gray-700/80"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 180, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <X size={20} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Enhanced Navigation */}
              <div className="relative flex-1 overflow-y-auto px-6 py-8">
                <motion.ul
                  className="space-y-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 },
                    },
                  }}
                >
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      variants={{
                        open: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            y: { stiffness: 1000, velocity: -100 },
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                        closed: {
                          y: 50,
                          opacity: 0,
                          transition: {
                            y: { stiffness: 1000 },
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative"
                      >
                        {/* Glowing background effect */}
                        <div
                          className={`absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 ${
                            isActiveLink(link.href)
                              ? "bg-gradient-to-r from-primary-400/30 to-accent-400/30"
                              : "bg-gradient-to-r from-accent-400/20 to-secondary-400/20"
                          }`}
                        />

                        <Link
                          href={link.href}
                          onClick={closeSidebar}
                          className={`relative flex items-center justify-between rounded-2xl px-6 py-5 text-lg font-semibold backdrop-blur-sm transition-all duration-300 ${
                            isActiveLink(link.href)
                              ? "bg-gradient-to-r from-primary-100/80 to-accent-50/80 text-primary-800 shadow-lg dark:from-primary-900/40 dark:to-accent-900/40 dark:text-accent-400"
                              : "text-gray-700 hover:bg-white/60 dark:text-gray-300 dark:hover:bg-slate-800/60"
                          }`}
                        >
                          <span className="relative">
                            {link.name}
                            {/* Text glow for active link */}
                            {isActiveLink(link.href) && (
                              <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 text-primary-800 blur-sm dark:text-accent-400"
                              >
                                {link.name}
                              </motion.div>
                            )}
                          </span>

                          {/* Enhanced active indicator */}
                          {isActiveLink(link.href) ? (
                            <motion.div
                              layoutId="mobileActiveIndicator"
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                              }}
                              animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                              }}
                            >
                              <motion.div
                                className="h-3 w-3 rounded-full bg-white"
                                animate={{ scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                              />
                            </motion.div>
                          ) : (
                            <motion.div
                              whileHover={{ rotate: 45, scale: 1.2 }}
                              className="h-6 w-6 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 opacity-30 dark:from-gray-600 dark:to-gray-700"
                            />
                          )}
                        </Link>

                        {/* Number indicator */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.6 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-secondary-500 text-xs font-bold text-white shadow-lg"
                        >
                          {index + 1}
                        </motion.div>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Enhanced Contact Info in Mobile Menu */}
                <motion.div
                  className="relative mt-10 space-y-6 border-t border-primary-200/30 pt-8 dark:border-primary-700/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {/* Glowing border effect */}
                  <motion.div
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent"
                  />

                  <motion.div
                    className="text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(16,185,129,0)",
                        "0 0 5px rgba(16,185,129,0.3)",
                        "0 0 0px rgba(16,185,129,0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Get in Touch
                  </motion.div>

                  <div className="space-y-4">
                    {[
                      { icon: Phone, text: "+234 812 312 1369", link: "tel:+2348123121369", delay: 0.9 },
                      { icon: Mail, text: "info@codemantixcollective.com", link: "mailto:info@codemantixcollective.com", delay: 1.0 },
                    ].map(({ icon: Icon, text, link, delay }, index) => (
                      <motion.div
                        key={index}
                        className="group flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay, duration: 0.6 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-400/20 to-secondary-400/20 backdrop-blur-sm"
                        >
                          <Icon className="h-5 w-5 text-accent-500" />
                        </motion.div>
                        <Link href={link} onClick={closeSidebar} className="flex-1">
                          <span className="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200">
                            {text}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Footer CTA */}
              <motion.div
                className="relative border-t border-primary-200/30 p-6 dark:border-primary-700/30"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                >
                <Link href="/contact" onClick={closeSidebar}>
                {/* Top glowing border */}
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent"
                />

                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                  {/* Glowing background effect */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 opacity-60 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

                  <span
                    
                    className="relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary-800 to-accent-600 px-8 py-5 font-bold text-white shadow-2xl transition-all duration-300 hover:from-primary-900 hover:to-accent-700"
                  >
                    <span className="text-lg ">Get Your Quote</span>
                    <motion.div
                      animate={{
                        x: [0, 3, 0],
                        y: [0, -1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowUpRight
                        size={20}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </motion.div>
                  </span>

                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: [-100, 100] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 3,
                    }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                  </motion.div>
                  </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfessionalNavbar;
