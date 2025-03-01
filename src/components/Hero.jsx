"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.8, ease: "easeInOut" },
    }),
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const text = "Full Stack Developer"
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150
    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, index))

      if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && index === 0) {
        setTimeout(() => setIsDeleting(false), 500)
      }

      setIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [index, isDeleting])

  return (
    <div className="relative min-h-screen bg-[#0a0f24] flex items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-40 sm:w-64 h-40 sm:h-64 bg-green-400/20 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-56 sm:w-96 h-56 sm:h-96 bg-green-400/10 rounded-full filter blur-3xl"
      />

      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-10">
        {/* Text content section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl w-full text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1"
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
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white flex justify-center lg:justify-start flex-wrap gap-1 sm:gap-2"
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
            <span className="text-green-400 animate-pulse">|</span>
            <span className="text-green-400">/&gt;</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-400 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0"
          >
            🚀 Passionate about building <b>scalable</b> and <b>high-performance</b> web applications using the{" "}
            <b>MERN stack</b>.
            <br /> I specialize in frontend & backend development, problem-solving, and optimizing user experiences.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center lg:justify-start items-center"
          >
            <motion.a
              href="https://docs.google.com/document/d/1yWU6P32uzgWmn22oYDzEAAF6PbgML-ta/edit?usp=drivesdk&ouid=108576222243698644004&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-400 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold 
                hover:bg-green-300 transform transition-all duration-300 shadow-lg text-sm sm:text-base"
            >
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Photo section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="order-1 lg:order-2 w-full max-w-xs sm:max-w-sm"
        >
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" },
                scale: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-green-400/30"
            />

            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { repeat: Number.POSITIVE_INFINITY, duration: 25, ease: "linear" },
                scale: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 1 },
              }}
              className="absolute inset-2 rounded-full border-2 border-dashed border-green-400/20"
            />

            {/* Main image container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 rounded-full overflow-hidden border-4 border-green-400/50 shadow-lg shadow-green-400/20 aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent z-10" />

              {/* Using standard img element instead of Next.js Image */}
              <img
                src="odk image (1).jpg"
                alt="Om Kariya"
                className="object-cover w-full h-full"
                loading="eager"
              />

              {/* Animated glow effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-green-400/10 z-0"
              />
            </motion.div>

            {/* Tech stack icons floating around the image */}
            {["React", "Node", "MongoDB", "Express"].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ x: 0, y: 0 }}
                animate={{
                  x: [0, 10, -10, 0],
                  y: [0, -10, 10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5 + i,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className={`absolute w-12 h-12 bg-[#0a0f24] rounded-full flex items-center justify-center
                  shadow-lg border border-green-400/30 z-20
                  ${i === 0 ? "top-0 right-5" : ""}
                  ${i === 1 ? "bottom-5 right-0" : ""}
                  ${i === 2 ? "bottom-0 left-5" : ""}
                  ${i === 3 ? "top-5 left-0" : ""}
                `}
              >
                <span className="text-green-400 text-xs font-mono">{tech[0]}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

