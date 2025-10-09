"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./Navlinks";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16 lg:py-4 py-2 ">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/Images/nav.png"
                width={200}
                height={200}
                alt="Company Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <ul className="flex flex-row items-center space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-700 hover:text-blue-600 px-3 py-2 text-[18px] font-medium transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="/Contact"
                className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-[18px] font-semibold shadow transition"
              >
                Contact us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition"
              >
                {isSidebarOpen ? <X size={27} /> : <Menu size={27} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile & md) with Animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 inset-y-0  w-64 bg-white shadow-lg z-50 flex flex-col p-6"
            >
              <div className="flex justify-end mb-6">
                <button
                  onClick={closeSidebar}
                  className="p-2 text-slate-700 hover:text-blue-600 transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={closeSidebar}
                      className="text-slate-700 hover:text-blue-600 px-3 py-2 text-[18px] font-medium transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="/Contact"
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-[16px] font-semibold shadow transition"
              >
                Contact us
              </a>
            </motion.div>

            {/* Overlay */}
            <motion.div
              onClick={closeSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
