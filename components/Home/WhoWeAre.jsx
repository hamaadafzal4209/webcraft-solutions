import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";

const WhoWeAre = () => {
  const services = [
    {
      title: "Web Design Agency",
      description:
        "As a leading web design and digital agency, our design and development specialists take all measures to ensure your website works like no other.",
      image: "/coding.png",
    },
    {
      title: "App Development",
      description:
        "We specialize in creating innovative mobile apps that bring your ideas to life and drive business success.",
      image: "/app-development.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Our team uses cutting-edge marketing strategies to boost your brand’s visibility, engagement, and conversions.",
      image: "/social-media-marketing.png",
    },
  ];

  return (
    <div className="container-section">
      <SectionHeader
        title="Who we are"
        text="Your partners for digital success"
      />
      <div className="max-w-3xl ml-auto pb-8 md:pb-16">
        <p className="text-base md:text-lg text-gray-100 font-light text-balance">
          We’re a team of expert designers, web developers, and marketers who’ve
          been delivering digital success for more than a decade. We excel at
          marketing websites, innovative web apps, and mobile applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br hover:bg-gradient-to-tl space-y-4 from-blue-800/30 via-purple-700/30 to-pink-600/30 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <Image
              width={500}
              height={500}
              src={service.image}
              alt={service.title}
              className="w-20 h-20 object-contain"
            />
            <h2 className="text-xl font-semibold text-main-300">
              {service.title}
            </h2>
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
