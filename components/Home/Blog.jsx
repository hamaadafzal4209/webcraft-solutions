import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/constants/blogData";

const Blog = ({ showAll = false }) => {
  const blogsToShow = showAll ? blogsData : blogsData.slice(0, 3);

  return (
    <div className="container-section pt-0">
      <SectionHeader title="Our Blog" text="Latest digital marketing trends" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 sm:mt-8">
        {blogsToShow.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md hover:shadow-lg">
            <div className="relative w-full h-60 group overflow-hidden rounded-xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={500}
                className="rounded-xl object-cover h-full w-full group-hover:scale-110 transition-all duration-300"
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
            <Link href={`/blogs/${blog.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-main-300 pt-4 text-gray-200 truncate">
                {blog.title}
              </h2>
            </Link>
            <p className="mt-3 text-sm text-gray-400 line-clamp-2">
              {blog.description1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
