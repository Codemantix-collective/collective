"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const heroDynamicSlides = [
  {
    text: "We craft digital products that empower businesses to thrive in a connected world.",
  },
  {
    text: "From sleek interfaces to data-driven insights, we turn ideas into powerful solutions.",
  },
  {
    text: "Innovation, design, and technology combined to drive your growth forward.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const fullText = heroDynamicSlides[currentSlide].text;
    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [currentSlide, isMobile]); // ✅ dependency stable

  useEffect(() => {
    if (isMobile) return;
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroDynamicSlides.length);
    }, 8000);
    return () => clearInterval(slideInterval);
  }, [isMobile]);

  return (
    <section className="bg-white w-full min-h-screen flex items-center ">
      <div className="relative container mx-auto grid lg:grid-cols-2 grid-cols-1 px-4 md:px-8 lg:px-16 gap-x-8 items-center justify-between">
        <div className="flex-1 text-center lg:text-left pt-32 lg:pt-18 lg:pb-6">
          <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#1E3A8A] leading-tight">
            Codemantix Collective, Driving Innovation Through Technology
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#64748B] ">
            {isMobile
              ? "We craft digital solutions that empower your business to grow."
              : displayedText}
          </p>

          <Link href="/About"
          className="mt-6 inline-flex items-center justify-center bg-[#F97316] hover:bg-[#F75A16] text-white px-6 py-3 rounded-md text-lg font-semibold shadow transition text-[18px]">
            Get Started
          </Link>
        </div>

        <div className="flex-1 flex">
          {/* <HeroAnimation /> */}
          <iframe
            className="md:w-[600px] h-[300px] md:h-[600px] w-full mx-auto border-none bg-white lg:pt-10 "
            src="https://lottie.host/embed/c1ff748c-c43c-4fed-b0bd-e068c5da77ca/uigWRWoUVF.lottie"
            title="Hero animation"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
