"use client";

import React, { useEffect } from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import CountUp from "react-countup";

const WhyChooseUs = () => {
  useEffect(() => {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div className="container-section pt-0">
      <SectionHeader
        title="Why choose us"
        text="Results that we sucessfully deliver"
      />
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4 md:gap-8 mt-6 md:mt-12 items-stretch">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full">
          <div className="h-full">
            <Image
              src="/h1_img-2.jpg"
              alt="img"
              width={500}
              height={500}
              className="w-full object-cover h-full rounded-xl"
            />
          </div>
          <div className="bg-slate-700 p-6 rounded-xl flex flex-col justify-between h-full min-h-80">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-main-300"></div>
              <p className="">projects completed</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold font-sans">
                <CountUp end={475} duration={2} />+
              </h2>
              <h2 className="text-base pt-2 text-gray-100 text-balance">
                Over 400 successful projects delivered to our clients worldwide.
              </h2>
            </div>
          </div>
          <div className="bg-slate-700 p-6 rounded-xl flex flex-col justify-between h-full min-h-80">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-main-300"></div>
              <p className="">satisfied customers</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold font-sans">
                <CountUp end={98} duration={2} />%
              </h2>
              <h2 className="text-base pt-2 text-gray-100 text-balance">
                A 98% satisfaction rate across all our consulting services.
              </h2>
            </div>
          </div>
          <div className="bg-slate-700 p-6 rounded-xl flex flex-col justify-between h-full min-h-80">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-main-300"></div>
              <p className="">hours saved</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold font-sans">
                <CountUp end={843000} duration={3} separator="," />
                K+
              </h2>
              <h2 className="text-base pt-2 text-gray-100 text-balance">
                Our strategies have saved clients over 800,000 hours
                collectively.
              </h2>
            </div>
          </div>
        </div>
        <div className="h-full relative">
          <Image
            src="/h1_img-3.jpg"
            alt="img"
            width={500}
            height={500}
            className="w-full h-full max-h-80 lg:max-h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 right-0 scale-75">
            <div class="circle">
              <div class="logo"></div>
              <div class="text">
                <p>Some text - Animated circle text -</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
