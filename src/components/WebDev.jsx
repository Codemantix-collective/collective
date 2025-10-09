"use client";

import {
  FaLaptop,
  FaRocket,
  FaPalette,
  FaShoppingCart,
  FaBlog,
  FaServer,
} from "react-icons/fa";
import ServiceSection from "@/components/ServiceCardSection";

const webServices = [
  {
    icon: <FaLaptop size={28} />,
    title: "Business Websites",
    description:
      "Fully customized corporate websites to showcase your brand and services professionally.",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Landing Pages",
    description:
      "Single-page websites optimized for lead capture, product promotion, or campaigns.",
  },
  {
    icon: <FaPalette size={28} />,
    title: "Portfolio Websites",
    description:
      "Stylish portfolios to highlight your projects and achievements for creatives and agencies.",
  },
  {
    icon: <FaShoppingCart size={28} />,
    title: "E-Commerce Platforms",
    description:
      "Secure online stores with payment integration, inventory management, and smooth UX.",
  },
  {
    icon: <FaBlog size={28} />,
    title: "Blogs & Content Sites",
    description:
      "SEO-optimized blogs and content platforms to engage audiences and increase traffic.",
  },
  {
    icon: <FaServer size={28} />,
    title: "SaaS & Web Applications",
    description:
      "Custom SaaS solutions and web apps to streamline business operations and deliver services.",
  },
];

export default function WebDevelopmentSection() {
  return (
    <div className=" relative px-4 md:px-8 lg:px-16 scroll-mt-24"  id="web-development">
      <ServiceSection
        title="Building World-Class Web Experiences Across Africa"
        description="From corporate websites to advanced web applications, we deliver solutions tailored to your brand, optimized for performance, and crafted to impress your audience."
        services={webServices}
      /> 
    </div>
  );
}
