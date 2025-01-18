"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Banner from "@/components/common/Banner";
import { FaCheck } from "react-icons/fa6";
import { Accordion } from "@/components/common/Accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceData } from "@/constants/ServiceData";
import { Fade, Zoom } from "react-awesome-reveal";

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
            <Fade direction="up" triggerOnce>
              <h2 className="text-base sm:text-lg lg:text-xl leading-relaxed text-balance font-normal">
                {currentService.description}
              </h2>
            </Fade>
            <Zoom triggerOnce>
              <Image
                src={currentService.subBannerImage}
                alt={currentService.title}
                width={500}
                height={500}
                className="w-full h-full rounded-xl mt-8 object-contain"
              />
            </Zoom>

            {/* Service Features */}
            <div className="py-16 border-b-[1px] border-gray-500">
              <Fade direction="up" triggerOnce>
                <h1 className="text-3xl md:text-5xl lg:text-7xl bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent font-medium">
                  Service Features
                </h1>
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="font-light text-balance text-base sm:text-lg text-gray-300 pt-4">
                  Discover the key features that make our {currentService.title}{" "}
                  stand out in the industry.
                </p>
              </Fade>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 mt-12">
                {currentService.features.map((feature, index) => (
                  <Fade
                    key={index}
                    direction="up"
                    delay={index * 300}
                    triggerOnce
                  >
                    <div className="flex items-start gap-6">
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
                  </Fade>
                ))}
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="py-12 border-b-[1px] border-gray-500">
              <Fade direction="up" triggerOnce>
                <h1 className="text-3xl md:text-5xl lg:text-7xl bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent leading-relaxed font-medium">
                  Pricing Plans
                </h1>
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="font-light text-balance text-base sm:text-lg text-gray-300 pt-4">
                  Choose a plan that fits your needs and budget.
                </p>
              </Fade>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {currentService.pricingPlans.map((plan, index) => (
                  <Fade
                    key={index}
                    direction="up"
                    delay={index * 300}
                    triggerOnce
                  >
                    <div
                      className={`rounded-xl p-6 shadow-lg bg-gradient-to-br from-indigo-600/30 via-purple-500/30 to-pink-500/30 text-white`}
                    >
                      <div className="text-center">
                        <h2 className="text-2xl font-semibold">{plan.plan}</h2>
                        <p className="text-3xl font-bold text-main-300">
                          {plan.price}
                        </p>
                        <p className="text-sm font-light mt-2">
                          {plan.description}
                        </p>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-lg font-medium">Features:</h3>
                        <ul className="mt-4 space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <FaCheck className="text-green-400" /> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          class="text-white bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 block w-full"
                        >
                          Contact Us
                        </button>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="py-12 border-b-[1px] border-gray-500">
              <Fade direction="up" triggerOnce>
                <h1 className="text-3xl md:text-5xl lg:text-7xl bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent font-medium">
                  Tools & Technologies Used
                </h1>
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="font-light text-balance text-base sm:text-lg text-gray-300 pt-4">
                  Explore the cutting-edge tools we use to deliver exceptional
                  results.
                </p>
              </Fade>
              <div className="flex flex-wrap gap-4 mt-12">
                {currentService.toolsTechnologies.map((tool, index) => (
                  <Fade
                    key={index}
                    direction="up"
                    delay={index * 100}
                    triggerOnce
                  >
                    <div className="bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 py-2 px-4 rounded-full text-gray-100 shadow-md">
                      {tool}
                    </div>
                  </Fade>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="py-12">
              <Fade direction="up" triggerOnce>
                <h1 className="text-3xl md:text-5xl lg:text-7xl bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent font-medium">
                  Popular Questions
                </h1>
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="font-light text-balance text-base sm:text-lg text-gray-300 pt-4">
                  Get answers to the most frequently asked questions about{" "}
                  {currentService.title}.
                </p>
              </Fade>
              <div className="flex flex-col md:flex-row items-stretch gap-8 mt-12">
                <div className="md:w-1/2">
                  <Image
                    src={"/img7.jpg"}
                    alt="FAQs"
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
