import React from "react";
import SectionBadge from "./SectionBadge";

const SectionHeader = ({title, text}) => {
  return (
    <div className="flex items-start flex-col md:flex-row md:items-center justify-between w-full max-w-7xl md:gap-6">
      <div className="flex-shrink-0 pb-4 md:pb-8">
        <SectionBadge title={title} />
      </div>
      <div className="max-w-3xl md:self-end">
        <h1 className="bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-sans leading-snug font-semibold text-balance pb-4 md:pb-8">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeader;
