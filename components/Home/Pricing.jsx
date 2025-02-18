"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { pricingPlans } from "@/constants/PricingData";
import SectionHeader from "../common/SectionHeader";
import Link from "next/link";

export default function PricingCards() {
  const [activeTab, setActiveTab] = useState("web");
  const [specsExpanded, setSpecsExpanded] = useState({});

  const filteredPlans = pricingPlans.filter((plan) => plan.type === activeTab);

  const toggleSpecs = (index) => {
    setSpecsExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container-section py-0 pb-12 md:pb-16">
      <SectionHeader
        title="Our Pricing Plan"
        text="Select the Best Hosting Plan"
      />

      <div className="flex md:justify-center mb-8 md:my-8">
        {["web", "cloud", "vps"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSpecsExpanded({});
            }}
            className={`px-6 uppercase py-2 text-lg font-semibold transition-all rounded-lg mx-2 
              ${
                activeTab === tab
                  ? "text-white bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-blue-300"
                  : "bg-gray-700 text-gray-300"
              }
            `}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan, index) => (
            <div
              key={index}
              className="p-[2px] bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 rounded-3xl h-full"
            >
              <div className="p-6 bg-gray-900 rounded-3xl shadow-xl h-full flex flex-col">
                <h3 className="text-3xl font-extrabold mb-3">{plan.name}</h3>
                <p className="text-gray-500 line-through text-lg">
                  {plan.originalPrice}
                </p>
                <p className="text-main-300 text-lg font-semibold">
                  {plan.discount}
                </p>
                <p className="text-4xl font-extrabold my-3">{plan.price}</p>
                <p className="text-gray-400 text-sm mb-4">
                  when you renew at {plan.renewalPrice}
                </p>

                <Link href="/contact">
                  <button className="w-full text-white bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center">
                    Contact Us
                  </button>
                </Link>

                <ul className="my-4 space-y-3 flex-grow">
                  {plan.specs
                    .slice(0, specsExpanded[index] ? plan.specs.length : 5)
                    .map((spec, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <CheckCircle className="text-main-300 w-5 h-5" /> {spec}
                      </li>
                    ))}
                </ul>

                {plan.specs.length > 5 && (
                  <div
                    onClick={() => toggleSpecs(index)}
                    className="text-blue-400 hover:underline text-sm cursor-pointer text-center mx-auto"
                  >
                    {specsExpanded[index] ? "Show Less" : "Show More"}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No plans available for this category.
          </p>
        )}
      </div>
    </div>
  );
}
