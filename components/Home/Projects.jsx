import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import { projectData } from "@/constants/projectsData";
import { Fade } from "react-awesome-reveal";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 pb-6">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-blue-700 to-purple-800 opacity-50 rounded-xl"></div>

        <div className="px-4 md:px-8 py-20 pt-16 rounded-lg shadow-lg relative">
          <SectionHeader
            title="Selected Works"
            text="Crafting Excellence Every Single Time"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 md:mt-8">
            {projectData.map((project, index) => (
              <Fade
                key={project.id}
                direction="up"
                triggerOnce
                delay={index * 100}
              >
                <div className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-700 bg-gradient-to-br from-slate-800 to-slate-900 ">
                  <div className="relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="w-full h-60 object-cover rounded-t-xl"
                    />
                    <div className="absolute right-4 top-4 cursor-pointer bg-black h-8 w-8 flex items-center justify-center rounded-full transition-transform duration-300 hover:bg-main-300">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>

                  <div className="p-4 text-white">
                    <h2 className="text-lg sm:text-xl font-semibold truncate">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-300 truncate">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
