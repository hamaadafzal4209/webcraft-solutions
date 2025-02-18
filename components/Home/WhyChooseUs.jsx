"use client";

import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const WhyChooseUs = () => {
  return (
    <div className="container-section pt-0">
      <Fade direction="up" triggerOnce>
        <SectionHeader
          title="Why choose us"
          text="Results that we successfully deliver"
        />
      </Fade>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-4 md:gap-8 mt-6 md:mt-12 items-stretch">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full">
          <Fade direction="up" triggerOnce delay={100}>
            <div className="h-full">
              <Image
                src="/h1_img-2.jpg"
                alt="img"
                width={500}
                height={500}
                className="w-full object-cover h-full rounded-xl"
              />
            </div>
          </Fade>

          <Fade direction="up" triggerOnce delay={200}>
            <div className="bg-slate-700 p-6 rounded-xl flex flex-col justify-between h-full min-h-80">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-main-300"></div>
                <p>Projects Delivered</p>
              </div>
              <div>
                <h2 className="text-5xl font-bold font-sans">150+</h2>
                <h2 className="text-base pt-2 text-gray-100 text-balance">
                  Successfully completed over 150 projects, helping businesses
                  establish a strong digital presence.
                </h2>
              </div>
            </div>
          </Fade>

          <Fade direction="up" triggerOnce delay={300}>
            <div className="bg-slate-700 p-6 rounded-xl flex flex-col justify-between h-full min-h-80">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-main-300"></div>
                <p>Client Satisfaction Rate</p>
              </div>
              <div>
                <h2 className="text-5xl font-bold font-sans">95%</h2>
                <h2 className="text-base pt-2 text-gray-100 text-balance">
                  Maintaining a 95% client satisfaction rate by delivering
                  high-quality solutions tailored to business needs.
                </h2>
              </div>
            </div>
          </Fade>

          <Fade direction="up" triggerOnce delay={400}>
            <div className="bg-slate-700 p-6 rounded-xl flex flex-col justify-between h-full min-h-80">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-main-300"></div>
                <p>Hours Optimized</p>
              </div>
              <div>
                <h2 className="text-5xl font-bold font-sans">25k+</h2>
                <h2 className="text-base pt-2 text-gray-100 text-balance">
                  Our efficient strategies have helped clients save over 25,000
                  hours in operations and processes.
                </h2>
              </div>
            </div>
          </Fade>
        </div>

        <Fade direction="up" triggerOnce delay={500}>
          <div className="h-full relative">
            <Image
              src="/h1_img-3.jpg"
              alt="img"
              width={500}
              height={500}
              className="w-full h-full max-h-80 lg:max-h-full object-cover rounded-xl"
            />
            <Link href={"/contact"}>
              <div className="absolute top-4 right-4">
                <button className="circle">
                  <p className="circle__text">
                    <span style={{ "--index": 0 }}>I</span>
                    <span style={{ "--index": 1 }}>N</span>
                    <span style={{ "--index": 2 }}>N</span>
                    <span style={{ "--index": 3 }}>O</span>
                    <span style={{ "--index": 4 }}>V</span>
                    <span style={{ "--index": 5 }}>A</span>
                    <span style={{ "--index": 6 }}>T</span>
                    <span style={{ "--index": 7 }}>E</span>
                    <span style={{ "--index": 8 }}> </span>
                    <span style={{ "--index": 9 }}>W</span>
                    <span style={{ "--index": 10 }}>I</span>
                    <span style={{ "--index": 11 }}>T</span>
                    <span style={{ "--index": 12 }}>H</span>
                    <span style={{ "--index": 13 }}> </span>
                    <span style={{ "--index": 14 }}>C</span>
                    <span style={{ "--index": 15 }}>O</span>
                    <span style={{ "--index": 16 }}>D</span>
                    <span style={{ "--index": 17 }}>E</span>
                  </p>

                  <div className="circle__circle">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="circle__icon"
                      width="14"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                      className="circle__icon circle__icon--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default WhyChooseUs;
