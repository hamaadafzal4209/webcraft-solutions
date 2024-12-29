import React from "react";
import Banner from "@/components/common/Banner";
import CompanyOverview from "@/components/About/CompanyOverview";
import FeaturesSection from "@/components/About/FeaturesSection";
import Testimonial from "@/components/Home/Testimonial";
import ExploreCompany from "@/components/About/ExploreCompany";

const AboutUs = () => {
  return (
    <div>
      <Banner
        title="We are Diteck"
        subtitle="We’re a team of expert designers, web developers and marketers who’ve been delivering digital success for more than a decade."
        breadcrumb1="Home"
        breadcrumb2="About Us"
        image="/img1.jpg"
      />
      <CompanyOverview />
      <ExploreCompany />
      <FeaturesSection />
      <Testimonial />
    </div>
  );
};

export default AboutUs;
