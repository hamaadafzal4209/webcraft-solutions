"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gradient-to-br to-blue-800 via-purple-700 from-pink-600 shadow-lg text-white focus:outline-none transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </motion.div>
  );
};

export default BackToTop;
