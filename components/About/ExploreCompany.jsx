import React from "react";
import SectionHeader from "../common/SectionHeader";
import PrimaryButton from "../common/PrimaryButton";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const ExploreCompany = () => {
  const cardData = [
    {
      id: "01",
      title: "Our Vision",
      description:
        "Process faster and better so that you can maintain your market advantage and leadership.",
      link: "/contact",
    },
    {
      id: "02",
      title: "What We Do",
      description:
        "Humanizing tech for the competitive landscape for meaning-driven technology innovations.",
      link: "/contact",
    },
    {
      id: "03",
      title: "Core Values",
      description:
        "Redefining business solutions with reliable systems and dedicated services, serving holistic solutions.",
      link: "/contact",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 bg-slate-900">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-700 to-pink-600 opacity-30 rounded-xl"></div>

        <div className="px-4 md:p-8 py-20 rounded-lg shadow-lg relative">
          <SectionHeader
            title="Explore company"
            text="Business partner you can trust"
          />

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {cardData.map((card, index) => (
              <Fade
                key={index}
                direction="up"
                delay={index * 300}
                triggerOnce
              >
                <div className="bg-gradient-to-b p-6 border border-gray-600 from-blue-800/10 via-purple-700/10 to-pink-600/40 rounded-xl">
                  <p className="text-main-300 text-lg pb-24">{card.id}.</p>
                  <h2 className="text-3xl pb-2 font-semibold">{card.title}</h2>
                  <h3 className="text-lg font-light leading-normal text-gray-300 pb-12">
                    {card.description}
                  </h3>
                  <Link href={card.link}>
                    <PrimaryButton text={"Contact Us"} />
                  </Link>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCompany;
