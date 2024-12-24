import React from "react";
import { FaAppStore, FaDesktop, FaBullhorn } from "react-icons/fa"; // Importing icons
import SectionBadge from "../common/SectionBadge";
import SectionHeader from "../common/SectionHeader";

const WhoWeAre = () => {
  const services = [
    {
      title: "Web Design Agency",
      description:
        "As a leading web design and digital agency, our design and development specialists take all measures to ensure your website works like no other.",
      icon: <FaDesktop className="w-12 h-12 text-main-300" />,
    },
    {
      title: "App Development",
      description:
        "We specialize in creating innovative mobile apps that bring your ideas to life and drive business success.",
      icon: <FaAppStore className="w-12 h-12 text-main-300" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Our team uses cutting-edge marketing strategies to boost your brand’s visibility, engagement, and conversions.",
      icon: <FaBullhorn className="w-12 h-12 text-main-300" />,
    },
  ];

  return (
    <div className="container-section">
      <SectionHeader title="Who we are" text="Your partners for digital success" />
      <div className="max-w-3xl ml-auto pb-8 md:pb-16">
        <p className="text-base md:text-lg text-gray-100 font-light text-balance">
          We’re a team of expert designers, web developers, and marketers who’ve
          been delivering digital success for more than a decade. We excel at
          marketing websites, innovative web apps, and mobile applications.
        </p>
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-slate-700 w-20 h-20 flex items-center justify-center rounded-md">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-100">
                {service.title}
              </h2>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
