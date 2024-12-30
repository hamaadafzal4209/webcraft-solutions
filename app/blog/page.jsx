import Banner from "@/components/common/Banner";
import Blog from "@/components/Home/Blog";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <Banner
        title="Blog"
        breadcrumb1="Home"
        breadcrumb2="Blog"
        image="/img1.jpg"
      />
      <div className="mt-12">
        <Blog showAll={true} />
      </div>
    </div>
  );
};

export default BlogPage;
