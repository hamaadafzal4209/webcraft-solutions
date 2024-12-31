import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";

const WhoWeAre = () => {
  const highlights = [
    {
      title: "Customer-Centric Approach",
      description:
        "Our priority is understanding your needs and delivering tailor-made solutions that align with your goals.",
      image: "/target.png",
    },
    {
      title: "Innovative Solutions",
      description:
        "We thrive on innovation, creating groundbreaking ideas that drive success and growth.",
      image: "/project-management.png",
    },
    {
      title: "Global Reach",
      description:
        "With clients across the globe, we bring an international perspective to every project.",
      image: "/global.png",
    },
  ];

  return (
    <div className="container-section">
      <SectionHeader title="Who we are" text="Discover what makes us unique" />
      <div className="max-w-3xl ml-auto pb-8 md:pb-16">
        <p className="text-base md:text-lg text-gray-100 font-light text-balance">
          We’re a team of expert designers, web developers, and marketers who’ve
          been delivering digital success for more than a decade. We excel at
          marketing websites, innovative web apps, and mobile applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-gradient-to-br hover:bg-gradient-to-tl space-y-3 from-blue-800/50 via-purple-700/50 to-pink-600/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <Image
              width={500}
              height={500}
              src={highlight.image}
              alt={highlight.title}
              className="w-20 h-20 object-contain"
            />
            <h2 className="text-xl font-semibold text-main-300">
              {highlight.title}
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
