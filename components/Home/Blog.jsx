import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const blogs = [
    {
      title: "Understanding UX Design",
      description:
        "Explore how user experience (UX) design shapes the way people interact with websites and applications.",
      image: "/img1.jpg",
      category: "UX Design",
      date: "December 20, 2024",
    },
    {
      title: "Top Mobile App Trends in 2024",
      description:
        "Discover the latest trends in mobile app development and what’s driving innovation this year.",
      image: "/img2.jpg",
      category: "Mobile Apps",
      date: "December 18, 2024",
    },
    {
      title: "Boost Your Brand with SEO",
      description:
        "Learn effective SEO strategies to enhance your brand’s online presence and visibility.",
      image: "/img3.jpg",
      category: "SEO",
      date: "December 15, 2024",
    },
  ];

  return (
    <div className="container-section pt-0">
      <SectionHeader title="Our Blog" text="Latest digital marketing trends" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md hover:shadow-lg">
            <div className="relative w-full h-56 group overflow-hidden rounded-xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={500}
                className="rounded-xl h-full w-full group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 px-3 py-1.5 rounded-tr-xl flex items-center gap-4 bg-white bg-opacity-90">
                <p className="text-xs uppercase text-gray-800 font-medium">
                  {blog.category}
                </p>
                <p className="text-xs text-gray-500 font-semibold">
                  {blog.date}
                </p>
              </div>
            </div>
            <Link href="#">
              <h2 className="text-2xl font-semibold hover:text-main-300 pt-4 text-gray-200 truncate">
                {blog.title}
              </h2>
            </Link>
            <p className="mt-3 text-sm text-gray-400 line-clamp-2">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
