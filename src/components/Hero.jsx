import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.8, ease: "easeInOut" },
    }),
  };
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const text = "Full Stack Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, index));

      if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        setTimeout(() => setIsDeleting(false), 500);
      }

      setIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <div className="relative min-h-screen bg-[#0a0f24] flex items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden">
      <motion.div
        animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-40 sm:w-64 h-40 sm:h-64 bg-green-400/20 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-56 sm:w-96 h-56 sm:h-96 bg-green-400/10 rounded-full filter blur-3xl"
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl w-full text-center space-y-6 sm:space-y-8"
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-green-400 font-mono text-base sm:text-lg md:text-xl tracking-wider"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white flex justify-center flex-wrap gap-1 sm:gap-2"
        >
          {["O", "m", " ", "K", "a", "r", "i", "y", "a"].map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={nameVariants}
              whileHover={{
                scale: 1.3,
                color: "#22c55e",
                textShadow: "0px 0px 8px rgba(34, 197, 94, 0.8)",
                transition: { duration: 0.3 },
              }}
              className="inline-block transition-transform"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg sm:text-2xl lg:text-3xl text-gray-300 font-mono"
        >
          <span className="text-green-400">&lt;</span>
          {displayedText}
          <span className="text-green-400 cursor">|</span>
          <span className="text-green-400">/&gt;</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-gray-400 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
        >
          🚀 Passionate about building <b>scalable</b> and <b>high-performance</b> web applications using the <b>MERN stack</b>.  
          <br /> I specialize in frontend & backend development, problem-solving, and optimizing user experiences.  
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-400 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold 
              hover:bg-green-300 transform transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-green-400 text-green-400 px-6 sm:px-8 py-3 rounded-lg font-semibold
              hover:bg-green-400 hover:text-black transform transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
