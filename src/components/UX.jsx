"use client";

import {
  FaDraftingCompass, 
  FaPaintBrush,      
  FaUsers,          
  FaMobileAlt,       
  FaChartLine,   
  FaCogs,             
} from "react-icons/fa";
import ServiceSection from "@/components/ServiceCardSection";

const greenColor = "#10B981";

const uxUiServices = [
  {
    icon: <FaDraftingCompass size={28} color={greenColor} />,
    title: "Wireframing & Prototyping",
    description:
      "Create interactive wireframes and prototypes to visualize user flows and interface structure before development.",
  },
  {
    icon: <FaPaintBrush size={28} color={greenColor} />,
    title: "UI Design",
    description:
      "Design visually appealing, user-friendly interfaces that align with your brand identity and enhance user engagement.",
  },
  {
    icon: <FaUsers size={28} color={greenColor} />,
    title: "User Research & Testing",
    description:
      "Conduct user research, surveys, and usability testing to understand your audience and improve the experience.",
  },
  {
    icon: <FaMobileAlt size={28} color={greenColor} />,
    title: "Responsive & Mobile Design",
    description:
      "Design interfaces that look and perform flawlessly across devices, from mobile phones to desktops.",
  },
  {
    icon: <FaChartLine size={28} color={greenColor} />,
    title: "UX Strategy & Analysis",
    description:
      "Analyze user behavior, create customer journeys, and develop strategies to optimize engagement and conversions.",
  },
  {
    icon: <FaCogs size={28} color={greenColor} />,
    title: "Interaction Design",
    description:
      "Design intuitive interactions and animations that make your product enjoyable and easy to use.",
  },
];

export default function UxUiSection() {
  return (
    <div className="relative px-4 md:px-8 lg:px-16 scroll-mt-24" 
      id="ui-ux">
      <ServiceSection
        title="Creating Exceptional UX & UI Experiences"
        description="From wireframes to fully polished interfaces, we craft user experiences that are intuitive, engaging, and visually stunning."
        services={uxUiServices}
      />
    </div>
  );
}
