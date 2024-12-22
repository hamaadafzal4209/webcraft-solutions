import React from "react";
import { FaAppStore, FaDesktop, FaBullhorn } from "react-icons/fa"; // Importing icons
import SectionBadge from "../common/SectionBadge";

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
      <div className="flex items-start md:items-center md:justify-between flex-col md:flex-row gap-4 md:gap-8 mb-12">
        <div className="flex-shrink-0">
          <SectionBadge title="Who we are" />
        </div>
        <div className="max-w-3xl">
          <h1 className="inline-block bg-gradient-to-br from-main-400 via-main-300 to-main-200 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-balance leading-relaxed md:leading-snug lg:leading-tight xl:leading-snug font-semibold font-poppins pb-4 md:pb-6 xl:pb-10">
            Your partners for digital success
          </h1>
          <p className="text-base md:text-lg text-gray-100 font-light text-balance">
            We’re a team of expert designers, web developers, and marketers
            who’ve been delivering digital success for more than a decade. We
            excel at marketing websites, innovative web apps, and mobile
            applications.
          </p>
        </div>
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
