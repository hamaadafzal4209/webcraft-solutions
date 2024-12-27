import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="container-section pt-0">
      <SectionHeader
        title="Why choose us"
        text="Results that we sucessfully deliver"
      />
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4 md:gap-8 mt-6 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <Image
              src="/h1_img-2.jpg"
              alt="img"
              width={500}
              height={500}
              className="w-full h-full object-cover min-h-80 max-h-80 rounded-xl"
            />
          </div>
          <div className="bg-slate-700 p-6 min-h-80 max-h-80 rounded-xl flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-main-300"></div>
              <p className="">projects completed</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold font-sans">475+</h2>
              <h2 className="text-base pt-2 text-gray-100 text-balance">
                Over 400 successful projects delivered to our clients worldwide.
              </h2>
            </div>
          </div>
          <div className="bg-slate-700 p-6 min-h-72 rounded-xl flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-main-300"></div>
              <p className="">satisfied customers</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold font-sans">98%</h2>
              <h2 className="text-base pt-2 text-gray-100 text-balance">
                A 98% satisfaction rate across all our consulting services.
              </h2>
            </div>
          </div>
          <div className="bg-slate-700 p-6 min-h-72 rounded-xl flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-main-300"></div>
              <p className="">hours saved</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold font-sans">843K+</h2>
              <h2 className="text-base pt-2 text-gray-100 text-balance">
                Our efficiency strategies have saved clients over 800,000 hours
                collectively.
              </h2>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/h1_img-3.jpg"
            alt="img"
            width={500}
            height={500}
            className="w-full max-h-80 lg:h-full lg:max-h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
