"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import {
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  StarIcon,
  HeartIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

// Sample team data - replace with real team member information
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead Full-Stack Developer",
    department: "Development",
    location: "Lagos, Nigeria",
    image: "/Images/Team.jpg", // Replace with actual team member photos
    bio: "Passionate about creating scalable web applications with modern technologies. Specializes in React, Node.js, and cloud architecture.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    experience: "5+ years",
    education: "Computer Science, University of Lagos",
    projects: 45,
    rating: 4.9,
    specialties: ["Frontend", "Backend", "DevOps"],
    icon: CodeBracketIcon,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Senior UI/UX Designer",
    department: "Design",
    location: "Abuja, Nigeria",
    image: "/Images/Team.jpg",
    bio: "Creative designer with a passion for user-centered design. Transforms complex problems into intuitive and beautiful digital experiences.",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    experience: "4+ years",
    education: "Design Arts, University of Abuja",
    projects: 38,
    rating: 4.8,
    specialties: ["UI Design", "UX Research", "Prototyping"],
    icon: PaintBrushIcon,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Data Analytics Specialist",
    department: "Analytics",
    location: "Enugu, Nigeria",
    image: "/Images/Team.jpg",
    bio: "Data scientist who turns complex datasets into actionable business insights. Expert in machine learning and statistical analysis.",
    skills: ["Python", "R", "Tableau", "SQL", "Machine Learning"],
    experience: "6+ years",
    education: "Statistics, University of Nigeria",
    projects: 32,
    rating: 4.9,
    specialties: ["Data Science", "ML", "Visualization"],
    icon: ChartBarIcon,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Creative Director",
    department: "Graphics",
    location: "Port Harcourt, Nigeria",
    image: "/Images/Team.jpg",
    bio: "Visionary creative director with expertise in brand identity and visual storytelling. Brings brands to life through compelling design.",
    skills: ["Adobe Creative Suite", "Branding", "Illustration", "3D Design"],
    experience: "7+ years",
    education: "Visual Arts, University of Port Harcourt",
    projects: 52,
    rating: 4.9,
    specialties: ["Branding", "Illustration", "Creative Strategy"],
    icon: SwatchIcon,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "David Thompson",
    role: "Senior Backend Developer",
    department: "Development",
    location: "Kano, Nigeria",
    image: "/Images/Team.jpg",
    bio: "Backend architect focused on building robust, scalable server-side solutions. Expert in microservices and database optimization.",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Kubernetes"],
    experience: "5+ years",
    education: "Software Engineering, Bayero University",
    projects: 41,
    rating: 4.8,
    specialties: ["API Design", "Database", "Microservices"],
    icon: CodeBracketIcon,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    name: "Lisa Martinez",
    role: "Frontend Specialist",
    department: "Development",
    location: "Ibadan, Nigeria",
    image: "/Images/Team.jpg",
    bio: "Frontend expert passionate about creating smooth, interactive user experiences. Specializes in modern JavaScript frameworks and animations.",
    skills: ["Vue.js", "React", "GSAP", "CSS3", "WebGL"],
    experience: "4+ years",
    education: "Computer Science, University of Ibadan",
    projects: 36,
    rating: 4.7,
    specialties: ["Frontend", "Animations", "Performance"],
    icon: CodeBracketIcon,
    gradient: "from-teal-500 to-blue-500",
  },
];

const departments = ["All", "Development", "Design", "Analytics", "Graphics"];

export default function TeamGrid() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0 });

  const filteredMembers =
    selectedDepartment === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.department === selectedDepartment);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      ref={elementRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 py-32 dark:from-gray-900 dark:via-primary-900/50 dark:to-gray-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(30, 58, 138, 0.15) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px, 70px 70px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600">
            👥 Our Team Members
          </span>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-primary-900 md:text-6xl">
            Meet The{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed  md:text-xl">
            Get to know the talented individuals who make our collective a powerhouse of innovation
            and creativity.
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                selectedDepartment === dept
                  ? "scale-105 bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900/30 dark:hover:text-primary-400"
              }`}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredMembers.map((member) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedMember(member)}
                className="group relative cursor-pointer"
              >
                <div className="relative h-full rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl dark:border-gray-700/50 dark:bg-gray-800/80">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.gradient} opacity-0 transition-all duration-500 group-hover:opacity-5`}
                  ></div>

                  <div className="relative z-10">
                    {/* Member Photo */}
                    <div className="relative mx-auto mb-6 h-24 w-24">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-2xl object-cover"
                      />

                      {/* Status Indicator */}
                      <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-accent-500 to-accent-600">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center">
                      <h3 className="mb-2 text-xl font-bold text-primary-900 dark:text-white">
                        {member.name}
                      </h3>

                      <p
                        className={`mb-3 bg-gradient-to-r bg-clip-text text-sm font-semibold text-transparent ${member.gradient}`}
                      >
                        {member.role}
                      </p>

                      <div className="mb-4 flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{member.location}</span>
                      </div>

                      {/* Stats */}
                      <div className="mb-6 grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-900 dark:text-white">
                            {member.projects}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <span className="text-2xl font-bold text-primary-900 dark:text-white">
                              {member.rating}
                            </span>
                            <StarIcon className="h-4 w-4 fill-current text-yellow-500" />
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                        </div>
                      </div>

                      {/* Bio Preview */}
                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        {member.bio}
                      </p>

                      {/* Skills Preview */}
                      <div className="mb-4 flex flex-wrap justify-center gap-2">
                        {member.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Profile Button */}
                      <div className="text-center">
                        <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 group-hover:underline dark:text-primary-400 dark:hover:text-primary-300">
                          View Profile
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div
                    className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${member.gradient} -z-10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-10`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Member Detail Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 pt-12 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="scrollbar-hide max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 dark:bg-gray-800"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  ✕
                </button>

                {/* Member Details */}
                <div className="mb-8 text-center">
                  <div className="relative mx-auto mb-6 h-32 w-32">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </div>

                  <h2 className="mb-2 text-3xl font-bold text-primary-900 dark:text-white">
                    {selectedMember.name}
                  </h2>

                  <p
                    className={`mb-4 bg-gradient-to-r bg-clip-text text-lg font-semibold text-transparent ${selectedMember.gradient}`}
                  >
                    {selectedMember.role}
                  </p>

                  <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="text-center">
                      <MapPinIcon className="mx-auto mb-2 h-6 w-6 text-gray-400 dark:text-gray-500" />
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {selectedMember.location}
                      </div>
                    </div>
                    <div className="text-center">
                      <BriefcaseIcon className="mx-auto mb-2 h-6 w-6 text-gray-400 dark:text-gray-500" />
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {selectedMember.experience}
                      </div>
                    </div>
                    <div className="text-center">
                      <AcademicCapIcon className="mx-auto mb-2 h-6 w-6 text-gray-400 dark:text-gray-500" />
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {selectedMember.education}
                      </div>
                    </div>
                    <div className="text-center">
                      <StarIcon className="mx-auto mb-2 h-6 w-6 fill-current text-yellow-500" />
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {selectedMember.rating}/5.0
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-primary-900 dark:text-white">About</h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-primary-900 dark:text-white">
                    Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedMember.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-primary-50 px-4 py-2 font-medium text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary-900 dark:text-white">
                    Specialties
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedMember.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className={`rounded-full bg-gradient-to-r px-4 py-2 font-medium text-white ${selectedMember.gradient}`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
