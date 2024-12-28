import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";
import Testimonial from "@/components/Home/Testimonial";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Team />
      <Testimonial />
    </div>
  );
};

export default page;
