"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends for 2024",
    excerpt: "Discover the cutting-edge design trends that will dominate the web in 2024. From immersive 3D experiences to sustainable design practices, we explore it all.",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=600&q=60",
  },
  {
    id: 2,
    title: "The Impact of AI on Digital Marketing",
    excerpt: "Artificial Intelligence is revolutionizing digital marketing. Learn how AI-powered tools can enhance your marketing strategies and drive better results.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGhlJTIwSW1wYWN0JTIwb2YlMjBBSSUyMG9uJTIwRGlnaXRhbCUyME1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Optimizing Website Performance for Core Web Vitals",
    excerpt: "Core Web Vitals are crucial for SEO and user experience. We share expert tips on how to optimize your website to meet these important metrics.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=600&q=60",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Our Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all hover:shadow-xl ">
              <CardHeader className="p-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl font-semibold text-gray-100 mb-2">{post.title}</CardTitle>
                <p className="text-gray-400">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="text-main-300 border-main-300 hover:bg-main-300 hover:text-white transition">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
