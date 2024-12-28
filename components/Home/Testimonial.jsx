"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { testimonials } from "@/constants/testimonialData";
import SectionBadge from "../common/SectionBadge";

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-4 md:px-8 lg:px-12 pb-20">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-blue-700 to-purple-800 opacity-50 rounded-xl"></div>

        <div className="p-8 py-12 md:py-16 rounded-lg shadow-lg relative">
          <div className="flex items-center justify-center">
            <SectionBadge title={"Hear from customer"} />
          </div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setActiveIndex(realIndex);
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="md:p-6 mx-4 mb-6 text-center">
                  <p className="text-gray-300 font-sans font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl my-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center flex-col md:flex-row md:gap-4 justify-center">
                    <h3 className="font-semibold text-lg text-gray-100">
                      {testimonial.author}
                    </h3>
                    <div className="hidden md:block w-4 h-1 rounded-full bg-main-300"></div>
                    <p className="text-gray-400 text-xs md:text-lg font-normal">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`rounded-full cursor-pointer transition-all duration-300 h-3 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 w-6"
                    : "bg-gray-500 w-3 hover:bg-gray-400"
                }`}
                onClick={() => {
                  swiperRef.current?.slideToLoop(index);
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
