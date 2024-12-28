"use client";

import { motion } from "framer-motion";
import GridPattern from "../ui/animated-grid-pattern";
import BlurFade from "../ui/blur-fade";
import Link from "next/link";
import PrimaryButton from "../common/PrimaryButton";

const Hero = () => {
  return (
    <section className="relative py-28 flex items-center text-left bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden">
      <motion.video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <source
          src="/banner.mp4"
          type="video/mp4"
        />
      </motion.video>

      <GridPattern
        className="absolute inset-0"
        width={50}
        height={50}
        numSquares={60}
        maxOpacity={0.15}
        duration={5}
        repeatDelay={0.3}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <motion.div
        className="relative max-w-7xl z-10 px-4 md:px-16 text-gray-100 flex flex-col items-start space-y-4 md:space-y-6"
        initial="hidden"
        animate="visible"
      >
        <BlurFade className="w-full">
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl font-extrabold tracking-tight leading-tight text-main-300">
          Finest solutions for all challenges
          </motion.h1>
        </BlurFade>

        <BlurFade className="w-full" delay={0.2}>
          <motion.p className="text-base sm:text-lg md:text-xl max-w-xl text-gray-300 ">
            At WebCraft Solutions, we specialize in creating innovative digital
            experiences that elevate brands and captivate audiences.
          </motion.p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <Link href="/contact">
            <PrimaryButton text={"Contact Us"} />
          </Link>
        </BlurFade>
      </motion.div>
    </section>
  );
};

export default Hero;
