"use client";

import React from "react";
import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import { highlights } from "@/constants/highlight";
import { Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const WhoWeAre = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="container-section"
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
        <SectionHeader
          title="Who we are"
          text="Discover what makes us unique"
        />
      </motion.div>

      <Fade direction="up" triggerOnce>
        <div className="max-w-3xl ml-auto pb-8 md:pb-16">
          <p className="text-base md:text-lg text-gray-100 font-light text-balance">
            We’re a team of expert designers, web developers, and marketers
            who’ve been delivering digital success for more than a decade. We
            excel at marketing websites, innovative web apps, and mobile
            applications.
          </p>
        </div>
      </Fade>

      <Slide cascade damping={0.1} direction="up" triggerOnce>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerVariants}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br hover:bg-gradient-to-tl space-y-3 from-blue-800/50 via-purple-700/50 to-pink-600/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              variants={staggerVariants}
            >
              <Image
                width={500}
                height={500}
                src={highlight.image}
                alt={highlight.title}
                className="w-20 h-20 object-contain"
              />
              <h2 className="text-xl font-semibold text-main-300">
                {highlight.title}
              </h2>
              <p className="text-gray-200 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Slide>
    </motion.div>
  );
};

export default WhoWeAre;
