import React from "react";
import SectionHeader from "../common/SectionHeader";
import PrimaryButton from "../common/PrimaryButton";
import Link from "next/link";

const ExploreCompany = () => {
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
            <div className="bg-gradient-to-b p-6 border border-gray-600 from-blue-800/10 via-purple-700/10 to-pink-600/40 rounded-xl">
              <p className="text-main-300 text-lg pb-24">01.</p>
              <h2 className="text-3xl pb-2 font-semibold">Our Vision</h2>
              <h3 className="text-lg font-light lg:pr-1.5 leading-normal text-gray-300 pb-12">
                Process faster and better so that you can maintain your market
                advantage and leadership.
              </h3>
              <Link href="/contact">
                <PrimaryButton text={"Contact Us"} />
              </Link>
            </div>
            <div className="bg-gradient-to-b p-6 border border-gray-600 from-blue-800/10 via-purple-700/10 to-pink-600/40 rounded-xl">
              <p className="text-main-300 text-lg pb-24">02.</p>
              <h2 className="text-3xl pb-2 font-semibold">What We Do</h2>
              <h3 className="text-lg font-light text-balance leading-normal text-gray-300 pb-12">
                Humanizing tech for the competitive landscape for meaning-driven
                technology innovations
              </h3>
              <Link href="/contact">
                <PrimaryButton text={"Contact Us"} />
              </Link>
            </div>
            <div className="bg-gradient-to-b p-6 border border-gray-600 from-blue-800/10 via-purple-700/10 to-pink-600/40 rounded-xl">
              <p className="text-main-300 text-lg pb-24">03.</p>
              <h2 className="text-3xl pb-2 font-semibold">Core Values</h2>
              <h3 className="text-lg font-light text-balance leading-normal text-gray-300 pb-12">
                Redefining business solutions with reliable systems and
                dedicated services, serving holistic solutions.
              </h3>
              <Link href="/contact">
                <PrimaryButton text={"Contact Us"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCompany;
