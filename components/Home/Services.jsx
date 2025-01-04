"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { accordionData } from "@/constants/constants";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleAccordionClick = (index) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 pb-20" ref={sectionRef}>
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 opacity-30 rounded-xl"></div>

        <div className="px-4 md:px-8 py-12 rounded-lg shadow-lg relative">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="Our services"
              text="Digital services to grow your business"
            />
          </motion.div>

          <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-12 lg:gap-20 mt-8 md:mt-12">
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
                  width={1000}
                  height={1000}
                  className="object-cover rounded-md w-full h-full"
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

                  <motion.div
                    className="overflow-hidden"
                    initial={{
                      height: activeIndex === index ? 0 : "auto",
                      opacity: activeIndex === index ? 0 : 1,
                    }}
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <p className="text-base text-gray-100 font-normal">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-12">
                      {item.tags.map((tag, i) => (
                        <p
                          key={i}
                          className="px-4 py-1.5 rounded-lg text-sm hover:text-main-300 border border-gray-100 hover:border-main-300 transition-all duration-300"
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </motion.div>
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
