"use client";

import {
  FaChartBar, // Data Visualization
  FaDatabase, // Data Management
  FaProjectDiagram, // Data Modeling
  FaSearchDollar, // Data Mining
  FaRobot, // Predictive Analytics
  FaCog, // Automation & Reporting
} from "react-icons/fa";
import ServiceSection from "@/components/ServiceCardSection";

const orangeColor = "#F97316";

const dataAnalysisServices = [
  {
    icon: <FaChartBar size={28} color={orangeColor} />,
    title: "Data Visualization",
    description:
      "Transform complex datasets into intuitive charts, dashboards, and visual reports for better insights.",
  },
  {
    icon: <FaDatabase size={28} color={orangeColor} />,
    title: "Data Management",
    description:
      "Organize, clean, and manage structured and unstructured data to ensure accuracy and accessibility.",
  },
  {
    icon: <FaProjectDiagram size={28} color={orangeColor} />,
    title: "Data Modeling",
    description:
      "Design and implement data models to support analytics, reporting, and business intelligence solutions.",
  },
  {
    icon: <FaSearchDollar size={28} color={orangeColor} />,
    title: "Data Mining",
    description:
      "Extract patterns, trends, and valuable insights from large datasets to drive strategic decisions.",
  },
  {
    icon: <FaRobot size={28} color={orangeColor} />,
    title: "Predictive Analytics",
    description:
      "Leverage statistical models and machine learning to forecast outcomes and identify future trends.",
  },
  {
    icon: <FaCog size={28} color={orangeColor} />,
    title: "Automation & Reporting",
    description:
      "Automate data workflows and generate regular, accurate reports to save time and improve efficiency.",
  },
];

export default function DataAnalysisSection() {
  return (
    <div
      className="relative px-4 md:px-8 lg:px-16 scroll-mt-24"
      id="data-analysis"
    >
      <ServiceSection
        title="Empowering Decisions Through Data Analysis"
        description="From visualization to predictive analytics, we turn your data into actionable insights that drive growth and efficiency."
        services={dataAnalysisServices}
      />
    </div>
  );
}
