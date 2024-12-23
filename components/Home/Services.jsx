"use client";

import React, { useState } from "react";
import SectionBadge from "../common/SectionBadge";
import { Plus, X } from "lucide-react";
import Image from "next/image";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Advance Analytics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium aliquid est.",
      tags: ["Banner Design", "Graphic Design", "Logo Design"],
      image: "/img1.jpg",
    },
    {
      title: "Marketing Strategy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam!",
      tags: ["SEO", "Content Marketing", "Social Media"],
      image: "/img2.jpg",
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nesciunt.",
      tags: ["Frontend", "Backend", "Fullstack"],
      image: "/img3.jpg",
    },
    {
      title: "Brand Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptas.",
      tags: ["Brand Identity", "Rebranding", "Strategy"],
      image: "/img4.jpg",
    },
  ];

  const handleAccordionClick = (index) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    <div className="px-4 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto p-8 py-20 rounded-lg bg-gray-800 shadow-lg relative">
        <div className="flex items-start md:items-center md:justify-between flex-col md:flex-row gap-4 md:gap-8 mb-12 md:mb-16">
          <div className="flex-shrink-0">
            <SectionBadge title="Our services" />
          </div>
          <div className="max-w-3xl">
            <h1 className="inline-block z-10 bg-gradient-to-br from-main-400 via-main-300 to-main-200 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-balance leading-snug md:leading-snug lg:leading-tight xl:leading-snug font-semibold font-poppins pb-4 md:pb-6 xl:pb-10">
              Digital services to grow your business
            </h1>
          </div>
        </div>

        <div className="flex items-stretch gap-12">
          {/* Image Section */}
          <div className="w-1/2 relative overflow-hidden">
            <div
              className="flex w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {accordionData.map((item, index) => (
                <Image
                  key={index}
                  src={item.image}
                  alt="Service Image"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-md flex-shrink-0"
                  style={{
                    transition: "none", 
                    transform: "none",
                  }}
                />
              ))}
            </div>
          </div>
          {/* Accordion Section */}
          <div className="w-1/2">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="space-y-6 mb-8"
                onClick={() => handleAccordionClick(index)}
              >
                <div className="w-full h-[1px] mb-4 bg-white"></div>
                <div
                  className={`flex items-center justify-between cursor-pointer ${
                    activeIndex === index ? "text-white" : "text-gray-400"
                  } transition-colors duration-300`}
                >
                  <h2
                    className={`text-4xl font-bold ${
                      activeIndex === index ? "text-main-300" : ""
                    }`}
                  >
                    {item.title}
                  </h2>
                  {activeIndex === index ? <X /> : <Plus />}
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base text-gray-100 font-normal text-balance">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 pt-12">
                    {item.tags.map((tag, i) => (
                      <p
                        key={i}
                        className="px-4 py-1.5 rounded-lg hover:text-main-300 border border-gray-100 hover:border-main-300 transition-all duration-300"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
