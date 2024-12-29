import React from "react";

const SectionBadge = ({ title }) => {
  return (
    <div>
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-md border border-main-300 flex-shrink-0">
        <div className="w-2 h-2 rounded-full fade-in-out bg-main-300"></div>
        <p className="">{title}</p>
      </div>
    </div>
  );
};

export default SectionBadge;
