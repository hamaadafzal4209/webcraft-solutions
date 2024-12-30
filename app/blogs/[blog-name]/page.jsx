"use client"; 

import { blogsData } from "@/constants/blogData";
import SectionBadge from "@/components/common/SectionBadge";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BlogNotFound } from "@/components/common/BlogNotFound";

const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; 
  const words = text.split(" ").length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const BlogDetail = () => {
  const pathname = usePathname();

  const slug = pathname.split("/").pop();

  const blog = blogsData.find((item) => item.slug === slug);

  if (!blog) return <div>
    <BlogNotFound/>
  </div>;

  const blogContent = `${blog.description1} ${blog.description2} ${blog.description3}`;
  const readingTime = calculateReadingTime(blogContent);

  return (
    <div className="container-section px-4 md:px-8 lg:px-16 xl:px-20 py-10">
      <div className="flex items-center justify-center flex-col sm:flex-row gap-4 py-6">
        <SectionBadge title={blog.category} />
        <p className="text-sm text-gray-400 font-light uppercase">
          {blog.date}
        </p>
      </div>
      <p className="text-sm text-gray-300 font-light text-center">{readingTime}</p>

      <h1 className="text-2xl md:text-4xl leading-relaxed lg:text-5xl xl:text-6xl text-center max-w-6xl w-full py-6 font-bold">
        {blog.title}
      </h1>

      <Image
        src={blog.image}
        alt={blog.title}
        width={1000}
        height={500}
        className="w-full h-auto my-6 rounded-lg object-cover"
      />

      <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 space-y-6">
        <p>{blog.description1}</p>
        <p>{blog.description2}</p>
        <p>{blog.description3}</p>
      </div>

      <div className="flex gap-4 my-10 max-w-4xl mx-auto">
        <Image
          src={blog.img1}
          alt={`${blog.title} Image 1`}
          width={500}
          height={300}
          className="w-1/2 rounded-lg object-cover"
        />
        <Image
          src={blog.img2}
          alt={`${blog.title} Image 2`}
          width={500}
          height={300}
          className="w-1/2 rounded-lg object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto text-lg text-gray-300 my-8">
        <h2 className="text-xl font-semibold mb-4">Key Takeaways</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Enhance user experiences with strategic design principles.</li>
          <li>Leverage modern trends for competitive advantage.</li>
          <li>Optimize content for better engagement and retention.</li>
        </ul>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-300 text-sm">
          Published on: {blog.date} | Category: {blog.category}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
