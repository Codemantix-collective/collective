"use client";

import Link from "next/link";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-[#64748B] py-12">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / Logo */}
          <div className="text-justify">
            <Image
              src="/Images/nav.png"
              width={200}
              height={200}
              alt="Company Logo"
            />
            <p className="text-gray-500 mt-2">
              Crafting innovative web solutions, UI/UX designs, and data-driven
              insights that empower your business.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-[#1E3A8A] transition"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux"
                  className="hover:text-[#1E3A8A] transition"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-analysis"
                  className="hover:text-[#1E3A8A] transition"
                >
                  Data Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#1E3A8A] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1E3A8A] transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#1E3A8A] transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#1E3A8A] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="mb-2">Email: info@codemantix.com</p>
            <p className="mb-4">Phone: +234 801 234 5678</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E3A8A] transition text-2xl"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E3A8A] transition text-2xl"
              >
                <FiTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E3A8A] transition text-2xl"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E3A8A] transition text-2xl"
              >
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 my-8" />

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Codemantix Collectives. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
