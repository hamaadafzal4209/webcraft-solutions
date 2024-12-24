"use client";

import React, { useState } from "react";
import SectionBadge from "../common/SectionBadge";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

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
    <div className="px-4 md:px-8 lg:px-12 pb-20 bg-slate-900">
      <div className="relative max-w-7xl mx-auto">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 opacity-30 rounded-xl"></div>

        <div className="p-8 py-20 rounded-lg shadow-lg relative">
          <SectionHeader
            title="Our services"
            text="Digital services to grow your business"
          />

          <div className="flex flex-col md:flex-row items-stretch gap-20 mt-8 md:mt-12">
            <div className="hidden md:block md:w-1/2 relative overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-[500px] relative rounded-md"
              >
                <Image
                  src={accordionData[activeIndex].image}
                  alt="Service Image"
                  layout="fill"
                  className="object-cover rounded-md"
                />
              </motion.div>
            </div>

            <div className="md:w-1/2">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className={`space-y-6 ${
                    activeIndex === index ? "mb-8" : "mb-0"
                  }`}
                  onClick={() => handleAccordionClick(index)}
                >
                  <div className="w-full h-[1px] mb-4 bg-white"></div>
                  <div
                    className={`flex items-center justify-between cursor-pointer ${
                      activeIndex === index ? "text-white" : "text-gray-400"
                    } transition-colors duration-300`}
                  >
                    <h2
                      className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
                        activeIndex === index ? "text-main-300" : ""
                      }`}
                    >
                      {item.title}
                    </h2>
                    {activeIndex === index ? <X /> : <Plus />}
                  </div>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      activeIndex === index
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-base text-gray-100 font-normal">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-12">
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
    </div>
  );
};

export default Services;
