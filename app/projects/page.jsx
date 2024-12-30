import Banner from "@/components/common/Banner";
import SectionHeader from "@/components/common/SectionHeader";
import { projectData } from "@/constants/projectsData";
import Image from "next/image";
import React from "react";

const ProjectsPage = () => {
  return (
    <div>
      <Banner
        title="Case Studies"
        breadcrumb1="Home"
        breadcrumb2="Case Studies"
        image="/img2.jpg"
      />
      <div className="container-section">
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
  );
};

export default ProjectsPage;
