"use client";

import { useState, useEffect, useRef } from "react";
import { Code2, Smartphone, Megaphone, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionTitle from "../common/SectionTitle";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies and best practices.",
      icon: Code2,
    },
    {
      title: "App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: Smartphone,
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital marketing solutions to grow your online presence and reach.",
      icon: Megaphone,
    },
    {
      title: "SEO Campaigns",
      description:
        "Search engine optimization to improve your visibility and organic traffic.",
      icon: Search,
    },
  ];

  return (
    <section className="w-full py-12 bg-">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <SectionTitle title="Our Services" />
            <p className="mx-auto max-w-[700px] text-gray-400 text-base md:text-lg">
              Comprehensive solutions to help your business grow in the digital
              world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2">
          {services.map((service) => (
            <HoverCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HoverCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const updateMousePosition = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    if (isHovered) {
      card.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, [isHovered]);

  return (
    <Card
      ref={cardRef}
      className="relative transition-all rounded-lg bg-gray-800 text-gray-100 overflow-hidden 
                 border-2 border-gray-700 hover:shadow-lg hover:border-transparent
                 hover:border-gradient-to-r from-blue-500 to-purple-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-500">
            <service.icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-lg font-semibold">
            {service.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-400">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
