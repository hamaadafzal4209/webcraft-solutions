import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import { projectData } from "@/constants/projectsData";

const Projects = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 pb-6">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-blue-700 to-purple-800 opacity-50 rounded-xl"></div>

        <div className="px-4 md:px-8 py-20 pt-16 rounded-lg shadow-lg relative">
          <SectionHeader
            title="Selected works"
            text="Crafting Excellence Every Single Time"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 md:mt-8">
            {projectData.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl shadow-lg overflow-hidden ${project.bgColor}`}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full h-72 rounded-xl object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg sm:text-xl font-semibold truncate font-poppins">
                    {project.title}
                  </h2>
                  <p className="text-sm font-normal truncate">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
