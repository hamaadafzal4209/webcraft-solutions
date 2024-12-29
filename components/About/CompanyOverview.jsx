import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";

const CompanyOverview = () => {
  return (
    <div className="container-section">
      <SectionHeader
        text={"Bring new digital ideas to life"}
        title={"Company Overview"}
      />
      <div className="flex flex-col md:flex-row items-stretch gap-8 mt-12">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src={"/h1_img-2.jpg"}
            alt="image"
            width={1000}
            height={1000}
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-300">
          <p className="text-lg text-gray-100 pb-6 leading-relaxed">
            At Diteck, we specialize in delivering cutting-edge digital
            solutions that empower businesses to thrive in an ever-evolving
            landscape. We partner with our clients to accelerate their growth,
            optimize processes, and unlock new opportunities for innovation.
          </p>
          <p className="font-normal text-gray-300 text-sm leading-relaxed pb-6">
            {
              "Whether you're looking to enhance your digital presence, streamline operations with automation, or build custom software solutions, we have the expertise to help you succeed. Our team combines creativity with technology to provide tailored strategies that align with your unique business goals. From ideation to execution, we ensure that every step of your digital transformation is impactful and measurable."
            }
          </p>
          <ul className="list-disc pl-4 text-gray-300">
            <li>Custom Website and Mobile App Development</li>
            <li>
              Advanced Data Analytics and Insights for informed decision-making
            </li>
            <li>
              Digital Marketing and SEO strategies to increase online visibility
            </li>
            <li>
              Business Process Automation to improve efficiency and reduce
              operational costs
            </li>
            <li>
              Branding and UI/UX Design to create an engaging user experience
            </li>
          </ul>
          <p className="font-normal text-gray-300 text-sm leading-relaxed pt-6">
            Our team works closely with you at every stage, ensuring that your
            digital transformation drives measurable growth and provides
            tangible results. Let’s unlock your business’s potential and set new
            standards of success in the digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
