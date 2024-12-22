import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="inline-block bg-gradient-to-br from-main-400 via-main-300 to-main-200 bg-clip-text text-transparent text-3xl font-bold tracking-tight md:text-4xl">
      {title}
    </h2>
  );
};

export default SectionTitle;
