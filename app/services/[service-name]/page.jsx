/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Banner from "@/components/common/Banner";
import { FaCheck } from "react-icons/fa6";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Accordion } from "@/components/common/Accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceData } from "@/constants/ServiceData";

const ServiceDetailPage = () => {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const isActive = (href) => pathname === href;

  const currentService =
    serviceData[pathname] || serviceData["/services/web-development"];

  return (
    <div className="mb-20">
      <Banner
        title={currentService.title}
        breadcrumb1={"Services"}
        image={currentService.bannerImage}
        breadcrumb2={currentService.title}
      />
      <div className="container-section">
        <div className="flex items-start gap-12">
          {/* Sidebar */}
          <div className="hidden lg:block p-6 sticky top-20 bg-slate-800 max-w-sm w-full flex-shrink-0 rounded-xl shadow-lg">
            {Object.keys(serviceData).map((servicePath) => (
              <Link
                key={servicePath}
                href={servicePath}
                className={`flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
                  isActive(servicePath)
                    ? "bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white"
                    : "text-gray-300 hover:bg-slate-700"
                }`}
              >
                <p className="text-lg font-medium">
                  {serviceData[servicePath].title}
                </p>
                <FaArrowRight
                  className={
                    isActive(servicePath) ? "text-white" : "text-gray-400"
                  }
                />
              </Link>
            ))}
          </div>

          {/* Main Content */}
          <div className="">
            <h2 className="text-base sm:text-lg lg:text-xl leading-relaxed text-balance font-normal">
              {currentService.description}
            </h2>
            <Image
              src={currentService.subBannerImage}
              alt={currentService.title}
              width={500}
              height={500}
              className="w-full h-full rounded-xl mt-8 object-contain"
            />

            {/* Service Features */}
            <div className="py-16 border-b-[1px] border-gray-500">
              <h1 className="text-3xl md:text-5xl lg:text-7xl bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent font-medium">
                Service Features
              </h1>
              <p className="font-light text-balance text-base sm:text-lg text-gray-300 pt-4">
                Discover the key features that make our {currentService.title}{" "}
                stand out in the industry.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 mt-12">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="bg-slate-800 flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center">
                      <FaCheck size={20} className="text-main-300" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-light pb-2 text-gray-100">
                        {feature.title}
                      </h2>
                      <p className="font-extralight text-balance text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="py-12">
              <h1 className="text-3xl md:text-5xl lg:text-7xl bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent font-medium">
                Popular Questions
              </h1>
              <p className="font-light text-balance text-base sm:text-lg text-gray-300 pt-4">
                Get answers to the most frequently asked questions about{" "}
                {currentService.title}.
              </p>
              <div className="flex flex-col md:flex-row items-stretch gap-8 mt-12">
                <div className="md:w-1/2">
                  <Image
                    src={'/img7.jpg'}
                    alt="image"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>

                <div className="space-y-4 md:w-1/2">
                  {currentService.faqs.map((faq, index) => (
                    <Accordion
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openAccordion === index}
                      onToggle={() => toggleAccordion(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
