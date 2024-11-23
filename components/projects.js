"use client";

import Image from "next/image";
import React, { useState } from "react";

const Projects = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const techColors = {
    "Next.js": "bg-black text-white dark:bg-white dark:text-black",
    "React.js": "bg-blue-500 text-white",
    "Node.js": "bg-green-500 text-white",
    MongoDB: "bg-emerald-500 text-white",
    Express: "bg-orange-500 text-white",
    MySQL: "bg-blue-600 text-white",
    PostgreSQL: "bg-blue-400 text-white",
    Redux: "bg-purple-500 text-white",
    Bootstrap: "bg-purple-600 text-white",
    TailwindCSS: "bg-cyan-500 text-white",
    TypeScript: "bg-blue-700 text-white",
    JWT: "bg-pink-500 text-white",
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, secure payment integration, order tracking, and admin dashboard. Features include user authentication, product filtering, and responsive design.",
      tech: ["Next.js", "MongoDB", "Node.js", "Redux", "JWT"],
    },
    {
      title: "Employee Management System",
      description:
        "Comprehensive employee management solution with features for attendance tracking, leave management, performance evaluation, and payroll processing. Includes role-based access control and detailed reporting.",
      tech: ["React.js", "Node.js", "PostgreSQL", "Redux", "Bootstrap"],
    },
    {
      title: "Tours and Travel Portal",
      description:
        "Interactive travel booking platform with tour packages, itinerary planning, hotel bookings, and travel guide features. Includes payment processing, booking management, and user reviews.",
      tech: ["Next.js", "MongoDB", "Express", "Redux", "TailwindCSS"],
    },
    {
      title: "Hotel Management System",
      description:
        "Complete hotel management solution with room booking, inventory management, staff scheduling, and billing features. Includes real-time availability updates and customer relationship management.",
      tech: ["React.js", "Node.js", "MySQL", "TypeScript", "Bootstrap"],
    },
    {
      title: "School Management System",
      description:
        "Comprehensive school administration platform with modules for student information, attendance tracking, grade management, and parent communication. Features include timetable generation and exam management.",
      tech: ["Next.js", "PostgreSQL", "Express", "Redux", "TailwindCSS"],
    },
  ];

  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
      <div className="mb-8">
        <Image
          width={500}
          height={300}
          src="/images/portcover.png"
          className="rounded-2xl object-cover ring-1 h-48 w-full lg:h-64 dark:ring-white/10 ring-primary/5 bg-tertiary"
          alt="Cover Photo"
        />
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <h1 className="text-3xl font-bold text-primary dark:text-white">
          Featured Projects
        </h1>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border dark:border-secondary rounded-xl transition-all duration-300 bg-gray-50 dark:bg-secondary"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-4 text-left rounded-xl hover:bg-gray-100 dark:hover:bg-secondary/20 transition-colors"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndexes.includes(index)}
            >
              <span className="text-lg font-semibold text-primary dark:text-white">
                {project.title}
              </span>
              <div className="flex items-center space-x-4">
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeIndexes.includes(index) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndexes.includes(index) ? "max-h-72" : "max-h-0"
              }`}
            >
              <div className="px-4 pb-4 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full font-medium ${techColors[tech]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
