import React from "react";

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
        <div className="absolute top-10 left-4 md:left-12 lg:left-16 px-4 py-1.5 rounded-lg flex items-center gap-4 border border-gray-300">
          <p className="text-gray-300">{breadcrumb1}</p>
          <div className="w-3 h-3 fade-in-out rounded-full bg-gray-300"></div>
          <p className="text-gray-300">{breadcrumb2}</p>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[84px] text-white font-sans font-semibold pb-4">
          {title}
        </h1>
        <p className="max-w-3xl text-balance text-lg text-gray-300 font-normal">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Banner;