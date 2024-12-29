import Banner from "@/components/common/Banner";
import SectionHeader from "@/components/common/SectionHeader";
import React from "react";

const ContactPage = () => {
  return (
    <div className="mb-20">
      <Banner
        title="Contact Us"
        breadcrumb1="Home"
        breadcrumb2="Contact"
        image="/img1.jpg"
      />
      <div className="container-section">
        <SectionHeader
          title={"Get in touch"}
          text={"We're ready to help you!"}
        />
        <div className="max-w-3xl ml-auto pb-8 md:pb-16"></div>
      </div>
    </div>
  );
};

export default ContactPage;
