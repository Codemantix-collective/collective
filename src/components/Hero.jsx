"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Slide content
const heroDynamicSlides = [
  {
    text: "Building Seamless Digital Experiences",
    image: "/Images/Headerux.svg",
  },
  {
    text: "Turning Data Into Actionable Insights",
    image: "/Images/Data.png",
  },
  {
    text: "Designing Interfaces People Love",
    image: "/Images/Headerux.svg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Detect screen width (mobile vs desktop)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Typewriter effect (only for desktop)
  useEffect(() => {
    if (isMobile) return; // Skip on mobile
    const fullText = heroDynamicSlides[currentSlide].text;
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [currentSlide, isMobile]);

  // Rotate images (applies to both mobile & desktop)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroDynamicSlides.length);
    }, 10000);
    return () => clearInterval(slideInterval);
  }, []);

  const slide = heroDynamicSlides[currentSlide];

  return (
    <section className="bg-white w-full min-h-screen flex items-center lg:justify-between  ">
      {/* <div className="relative container mx-auto flex flex-col lg:flex-row items-center px-4 md:px-8 lg:px-16"> */}
      <div className="relative container mx-auto grid lg:grid-cols-2 grid-cols-1 px-4 md:px-8 lg:px-16 gap-x-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left pt-32  lg:pt-24 lg:pb-6">
          {isMobile ? (
            // Mobile: Static tagline
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] leading-tight">
                Codemantix Collectives, Innovating Through Tech
              </h1>
            </>
          ) : (
            // Desktop: Typewriter heading
            <h1 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] leading-tight lg:pt-14">
              Codemantix Collectives,&nbsp;
              <span className="text-[#1E3A8A]">{displayedText}</span>
            </h1>
          )}

          {/* Static paragraph */}
          <p className="mt-6 text-lg md:text-xl text-[#64748B]">
            Empowering creators and businesses by crafting innovative solutions
            in web development, UI/UX design, and data analysis, all while
            connecting top talent and forward-thinking clients.
          </p>

          {/* CTA button */}
          <button className="mt-6 bg-[#F97316] hover:bg-[#F75A16] text-white px-6 py-3 rounded-md text-lg font-semibold shadow transition text-[18px]">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex md:mb-0  ">
          {/* <AnimatePresence mode="wait">
            <motion.div
              key={slide.image}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Image
                src={slide.image}
                width={700}
                height={600}
                alt={slide.text}
                className="object-contain md:w-[800px] h-full w-full"
              />
            </motion.div>
          </AnimatePresence> */}

          <iframe
            className="md:w-[600px] h-[300px] md:h-[600px] w-full mx-auto"
            src="https://lottie.host/embed/5460a26a-9efd-4805-ae0e-f1bfec620422/1lAX4Myg3m.lottie"
            // style={{ width: "100%", height: "300px", border: "none" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
