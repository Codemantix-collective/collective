"use client";

import Image from "next/image";
import { projects } from "@/components/ProjectsData";

export default function ProjectsGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Top Projects That Define Our Expertise
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Explore our carefully crafted web and digital solutions that drive results and delight users.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-sm overflow-hidden group h-64 md:h-72"
            >
              {/* Image */}
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:translate-y-[-5%]"
                  placeholder="blur"
                  blurDataURL="/Images/placeholder.png" // Tiny blurred image for smooth loading
                />
              </div>

              {/* Footer (title + link) */}
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-sm px-4 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F97316] text-sm font-medium hover:underline"
                  >
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
