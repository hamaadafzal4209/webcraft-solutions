"use client";

import Image from "next/image";
import React from "react";
import Timeline from "../ui/Timeline";

const PortfolioSection = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-8">
            Launched a complete rebranding project for multiple startup clients,
            delivering bespoke designs and web applications tailored to their needs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.webcraftsolutions.com/project-startup-1.webp"
              alt="Startup project example"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://assets.webcraftsolutions.com/project-startup-2.webp"
              alt="Startup project example"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-8">
            Successfully deployed a new digital strategy for our e-commerce clients, boosting their sales and brand visibility.
          </p>
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-8">
            Highlights include custom-built responsive interfaces and optimized checkout processes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.webcraftsolutions.com/ecommerce-hero.webp"
              alt="E-commerce project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://assets.webcraftsolutions.com/checkout-feature.webp"
              alt="Checkout feature"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-gray-200 text-xs md:text-sm font-normal mb-4">
            Recently added 4 new components to our design system:
          </p>
          <ul className="list-none mb-8">
            <li className="text-gray-200 text-xs md:text-sm">✅ Responsive card component</li>
            <li className="text-gray-200 text-xs md:text-sm">✅ Portfolio showcase layout</li>
            <li className="text-gray-200 text-xs md:text-sm">✅ Interactive gallery</li>
            <li className="text-gray-200 text-xs md:text-sm">✅ Customer testimonial slider</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.webcraftsolutions.com/gallery-component.webp"
              alt="Gallery component"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://assets.webcraftsolutions.com/testimonial-slider.webp"
              alt="Testimonial slider"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default PortfolioSection;
