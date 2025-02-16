import Blog from "@/components/Home/Blog";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";
import Testimonial from "@/components/Home/Testimonial";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import React from "react";
import PricingCards from "../components/Home/Pricing";

const page = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Services />
      <PricingCards />
      <WhyChooseUs />
      <Projects />
      <Team />
      <Blog />
      <Testimonial />
    </div>
  );
};

export default page;
