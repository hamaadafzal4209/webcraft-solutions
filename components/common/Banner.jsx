"use client"

import React from "react";
import { motion } from "framer-motion";

const Banner = ({ title, subtitle, breadcrumb1, breadcrumb2, image }) => {
  return (
    <div
      className="min-h-[450px] h-full w-full relative"
      style={{
        background: `url(${image}) no-repeat center center/cover`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-65 z-0"></div>
      <div className="relative container-section z-10 py-44">
        <motion.div
          className="absolute top-10 left-4 md:left-12 lg:left-16 px-4 py-1.5 rounded-lg flex items-center gap-4 border border-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-gray-300">{breadcrumb1}</p>
          <div className="w-3 h-3 fade-in-out rounded-full bg-gray-300"></div>
          <p className="text-gray-300">{breadcrumb2}</p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-[84px] text-white font-sans font-semibold pb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="max-w-3xl text-balance text-lg text-gray-300 font-normal"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
