"use client";

import { motion } from "framer-motion";
import GridPattern from "../ui/animated-grid-pattern";
import BlurFade from "../ui/blur-fade";

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-screen flex items-center justify-center text-left bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden">
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
          src="https://cdn.pixabay.com/video/2023/10/01/183108-870151713_large.mp4"
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
        className="relative z-10 px-4 md:px-16 text-gray-100 flex flex-col items-start space-y-4 md:space-y-6"
        initial="hidden"
        animate="visible"
      >
        <BlurFade className="w-full">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-main-300"
          >
            Unleash Your Brand’s Potential
          </motion.h1>
        </BlurFade>

        <BlurFade className="w-full" delay={0.2}>
          <motion.p
            className="text-base sm:text-lg md:text-2xl max-w-xl text-gray-300 pb-8"
          >
            At WebCraft Solutions, we specialize in creating innovative digital
            experiences that elevate brands and captivate audiences.
          </motion.p>
        </BlurFade>

        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full gap-6 sm:gap-0 sm:w-auto">
          <BlurFade className="w-full sm:w-auto" delay={0.4}>
            <motion.a
              href="#portfolio"
              className="w-full sm:w-auto px-6 py-3 bg-main-300 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform text-center text-base sm:text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Work
            </motion.a>
          </BlurFade>
          <BlurFade className="w-full sm:w-auto" delay={0.5}>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg transition-all duration-300 transform text-center text-base sm:text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s Collaborate
            </motion.a>
          </BlurFade>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
