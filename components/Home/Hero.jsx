"use client";

import { motion } from "framer-motion";
import GridPattern from "../ui/animated-grid-pattern";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-left bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden">
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
        className="relative z-10 px-6 md:px-16 text-gray-100 flex flex-col items-start space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-main-300"
          variants={titleVariants}
        >
          Unleash Your Brand’s Potential
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl max-w-3xl text-gray-300"
          variants={subtitleVariants}
        >
          At WebCraft Solutions, we specialize in creating innovative digital
          experiences that elevate brands and captivate audiences.
        </motion.p>

        <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <motion.a
            href="#portfolio"
            className="px-8 py-3 bg-main-300 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Discover Our Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg transition-all duration-300 transform"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Let’s Collaborate
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
