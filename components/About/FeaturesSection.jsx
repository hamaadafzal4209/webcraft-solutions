import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import { FaClipboardList } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { FaAward } from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <div className="container-section">
      <SectionHeader
        title={"Highlight features"}
        text={"We are leader in digital solutions"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-4 sm:mt-8">
        <Image
          src={"/img2.jpg"}
          alt="image"
          width={500}
          height={500}
          className="w-full h-full max-h-96 rounded-md object-cover"
        />
        <h2 className="text-lg font-extralight">
          We’re a team of expert designers, web developers and marketers who’ve
          been delivering digital success for more than a decade. We excel at
          marketing websites, innovative web apps and mobile applications.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-8">
        <div className="grid-cols-2 gap-8 hidden md:grid relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <button className="circle scale-125 hover:scale-125 lg:scale-150 lg:hover:scale-150">
              <p className="circle__text">
                <span style={{ "--index": 0 }}>A</span>
                <span style={{ "--index": 1 }}>W</span>
                <span style={{ "--index": 2 }}>E</span>
                <span style={{ "--index": 3 }}>S</span>
                <span style={{ "--index": 4 }}>O</span>
                <span style={{ "--index": 5 }}>M</span>
                <span style={{ "--index": 6 }}>E</span>
                <span style={{ "--index": 7 }}> </span>
                <span style={{ "--index": 8 }}>C</span>
                <span style={{ "--index": 9 }}>S</span>
                <span style={{ "--index": 10 }}>S</span>
                <span style={{ "--index": 11 }}> </span>
                <span style={{ "--index": 12 }}>B</span>
                <span style={{ "--index": 13 }}>U</span>
                <span style={{ "--index": 14 }}>T</span>
                <span style={{ "--index": 15 }}>T</span>
                <span style={{ "--index": 16 }}>O</span>
                <span style={{ "--index": 17 }}>N</span>
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
          <Image
            src={"/img2.jpg"}
            alt="image"
            width={500}
            height={500}
            className="w-full h-full rounded-md object-cover"
          />
          <Image
            src={"/img3.jpg"}
            alt="image"
            width={500}
            height={500}
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="">
          <div className="flex items-start flex-row gap-6 md:gap-8 border-b border-gray-400 pb-8">
            <div className="bg-slate-600 flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-xl">
              <FaClipboardList size={45} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent">
                Focus on driving results
              </h2>
              <p className="font-extralight leading-relaxed pt-2 text-gray-300">
                Our quick time and proactive approach assist our clients to
                rehearse the future and outperform the competition.
              </p>
            </div>
          </div>
          <div className="flex items-start flex-row gap-6 md:gap-8 border-b border-gray-400 py-8">
            <div className="bg-slate-600 flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-xl">
              <ImStatsBars size={45} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent">
                Help your business grow
              </h2>
              <p className="font-extralight leading-relaxed pt-2 text-gray-300">
                Our dynamic resourcing calibration can replicate any solution
                for a much larger playing ground..
              </p>
            </div>
          </div>
          <div className="flex items-start flex-row gap-6 md:gap-8 border-b border-gray-400 py-8">
            <div className="bg-slate-600 flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-xl">
              <FaAward size={45} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 bg-clip-text text-transparent">
                Best quality customer service{" "}
              </h2>
              <p className="font-extralight leading-relaxed pt-2 text-gray-300">
                Cognitive capabilities and data analytics bring efficiency and
                competitive edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
