"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { SiLeetcode } from "react-icons/si";


const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched({ ...touched, [name]: true })
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isFormValid = () => {
    return (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      validateEmail(form.email) &&
      form.subject.trim() !== "" &&
      form.message.trim() !== ""
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isFormValid()) {
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
      return;
    }
  
    setLoading(true);
    setSuccess(false);
    setError(false);
  
    const templateParams = {
      from_name: form.name,
      to_name: "Om Kariya",
      message: form.message,
      email: form.email, // Include this if required in your template
    };
  
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
  
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTouched({ name: false, email: false, subject: false, message: false });
  
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };
  
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(34, 197, 94, 0.6)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.95 },
  }

  return (
    <section
      id="contact"
      className="relative py-20 px-6 sm:px-10 lg:px-16 min-h-screen bg-[#0a0f24] flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-40 sm:w-64 h-40 sm:h-64 bg-green-400/20 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-56 sm:w-80 h-56 sm:h-80 bg-green-400/10 rounded-full filter blur-3xl"
      />

      <div className="max-w-7xl w-full z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-green-400">Get in </span>Touch
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-300 mb-8 text-sm sm:text-base lg:text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              Feel free to reach out using the form or through my social media.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">odk1572@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">Rajkot</p>
                </div>
              </div>

             
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 mt-8">
              {/* Social Media Icons */}
              <motion.a
                href="https://github.com/odk1572"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#22c55e" }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/om-kariya-b1815628a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#22c55e" }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </motion.a>

<motion.a
  href="https://leetcode.com/u/Debug_Demon_18/" // Replace with your actual LeetCode profile URL
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -5, color: "#FFA116" }} // LeetCode's primary color
  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-[#FFA116] transition-colors"
>
  <SiLeetcode className="w-6 h-6" />
</motion.a>

            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-green-400/20 text-green-400"
                >
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-red-400/20 text-red-400"
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${
                        touched.name && !form.name ? "border-red-500" : "border-gray-700"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all`}
                    />
                    {touched.name && !form.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                  </motion.div>
                </div>

                <div>
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${
                        touched.email && (!form.email || !validateEmail(form.email))
                          ? "border-red-500"
                          : "border-gray-700"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all`}
                    />
                    {touched.email && !form.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
                    {touched.email && form.email && !validateEmail(form.email) && (
                      <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>
                    )}
                  </motion.div>
                </div>

                <div>
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Subject"
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${
                        touched.subject && !form.subject ? "border-red-500" : "border-gray-700"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all`}
                    />
                    {touched.subject && !form.subject && (
                      <p className="text-red-500 text-xs mt-1">Subject is required</p>
                    )}
                  </motion.div>
                </div>

                <div>
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Message"
                      rows={5}
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${
                        touched.message && !form.message ? "border-red-500" : "border-gray-700"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all resize-none`}
                    />
                    {touched.message && !form.message && (
                      <p className="text-red-500 text-xs mt-1">Message is required</p>
                    )}
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full py-3 px-6 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-300 
                    transition-all duration-300 shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0 bg-green-300 transition-all duration-300 group-hover:h-full -z-0"
                    initial={{ height: 0 }}
                    whileHover={{ height: "100%" }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

