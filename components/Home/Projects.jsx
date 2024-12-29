import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Streamlined shopping experience",
    bgColor: "bg-red-500",
    imageUrl:
      "https://img.freepik.com/free-vector/visual-teenager-reading-book-mobile-phone-educate-learing-online-concept-design-isometric-illustration_1150-37267.jpg?t=st=1735358594~exp=1735362194~hmac=be30c96fe1042904180cf1e08aa09f1eaffbb71a396103da6d8f3eac303231d1&w=740",
  },
  {
    id: 2,
    title: "Social Media App",
    description: "Connecting people worldwide",
    bgColor: "bg-green-500",
    imageUrl:
      "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063163.jpg?t=st=1735358621~exp=1735362221~hmac=7045408fd1a40dfda8b4f5621d8b4e827d46b303f74a522581e8419267b4febb&w=900",
  },
  {
    id: 3,
    title: "Project Management Tool",
    description: "Effortless team collaboration",
    bgColor: "bg-purple-500",
    imageUrl:
      "https://img.freepik.com/premium-vector/accounting-report-illustration_179970-718.jpg?w=996",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "Monitor and improve health",
    bgColor: "bg-pink-500",
    imageUrl:
      "https://img.freepik.com/free-vector/flat-woman-using-smartphone-with-pedometer-counting-steps_88138-943.jpg?t=st=1735358725~exp=1735362325~hmac=4f3706dccc8a03e857acb4fbfdd440945011156e3fccd55f4a9926ed5062fd8b&w=900",
  },
  {
    id: 5,
    title: "Online Education Platform",
    description: "Learn anytime, anywhere",
    bgColor: "bg-blue-500",
    imageUrl:
      "https://img.freepik.com/premium-vector/online-education-webinar-icons-composition-with-teacher-coach-trainer-women-laptop_114352-254.jpg?w=900",
  },
  {
    id: 6,
    title: "Travel Booking App",
    description: "Plan your perfect trip",
    bgColor: "bg-yellow-500",
    imageUrl:
      "https://img.freepik.com/free-vector/travel-booking-app-screens_23-2148596419.jpg?t=st=1735358791~exp=1735362391~hmac=086148af89311db28b295905b0d5955319c15c07ceb2548c520f18795a8e52db&w=900",
  },
];

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
