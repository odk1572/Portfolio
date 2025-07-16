"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/odk1572", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/om-kariya-b1815628a/", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/BruteforceMonk/", label: "LeetCode" },
  ]

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.footer
      className="bg-gradient-to-b from-[#0a0f24] to-[#1a1f3a] text-white py-12 px-6 sm:px-10 lg:px-16"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div variants={childVariants} className="space-y-4">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Om Kariya
          </h3>
          <p className="text-gray-300">Full Stack Developer</p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <link.icon size={24} aria-label={link.label} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        

        <motion.div variants={childVariants} className="space-y-4">
          <h4 className="text-xl font-semibold">Get in Touch</h4>
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 text-gray-300">
            <MdEmail size={20} />
            <a href="mailto:your-email@example.com" className="hover:text-green-400">
              odk1572@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={childVariants} className="mt-12 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-400">© {currentYear} Om Kariya. All rights reserved.</p>
        <motion.p className="mt-2 text-gray-300" initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
          Made with <span className="text-red-500">❤️</span> by Om Kariya
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.footer>
  )
}

export default Footer

