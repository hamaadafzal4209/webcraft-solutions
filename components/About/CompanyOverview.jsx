import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const CompanyOverview = () => {
  const listItems = [
    "Custom Website and Mobile App Development",
    "Result-driven Digital Marketing and SEO Strategies",
    "Scalable and Secure E-commerce Solutions",
  ];

  return (
    <div className="container-section">
      <SectionHeader
        text={"Innovative digital solutions for modern businesses"}
        title={"About WebCraft"}
      />
      <div className="flex flex-col md:flex-row items-stretch gap-8 mt-12">
        <div className="flex-shrink-0 w-full md:w-1/2 flex">
          <Zoom triggerOnce className="w-full flex">
            <Image
              src={"/h1_img-2.jpg"}
              alt="WebCraft Team"
              width={1000}
              height={1000}
              className="w-full h-auto md:h-full rounded-lg shadow-lg object-cover"
            />
          </Zoom>
        </div>
        <div className="w-full md:w-1/2 text-gray-300 flex flex-col justify-center">
          <Slide direction="up" triggerOnce>
            <p className="text-lg text-gray-100 pb-6 leading-relaxed">
              At WebCraft, we empower businesses with cutting-edge digital
              solutions that drive growth and enhance online presence. Our
              expertise lies in creating high-performance websites, scalable
              mobile apps, and strategic digital marketing campaigns.
            </p>
          </Slide>
          <Slide direction="up" triggerOnce>
            <p className="font-normal text-gray-300 text-sm leading-relaxed pb-6">
              From startups to established enterprises, we tailor our approach
              to meet unique business needs. Our team blends creativity with
              technology to develop seamless digital experiences that engage
              users and deliver measurable results. Whether you need a new
              website, an eCommerce platform, or a custom software solution,
              we’re here to bring your vision to life.
            </p>
          </Slide>
          <ul className="list-disc pl-4 text-gray-300">
            {listItems.map((item, index) => (
              <Fade direction="up" delay={index * 300} triggerOnce key={index}>
                <li>{item}</li>
              </Fade>
            ))}
          </ul>
          <Fade direction="up" triggerOnce>
            <p className="font-normal text-gray-300 text-sm leading-relaxed pt-6">
              {`With a results-driven mindset, we partner with businesses to
              enhance their digital strategy and maximize online success. Let's
              craft something extraordinary together.`}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
