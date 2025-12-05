import React from "react";
import { motion } from "framer-motion";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiGithub, FiLinkedin, FiMail, FiArrowDown } = FiIcons;

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="w-32 h-32 mx-auto"
          >
            <img
              src="https://i.imgur.com/1eZxzn8.jpeg"
              alt="Arafat Profile"
              className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-2xl"
            />
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Hi, I'm <span className="text-blue-400">Arafat Hossain</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 space-y-2"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="w-12 h-0.5 bg-blue-400"></span>
                <span>Mern Stack Web Developer</span>
                <span className="w-12 h-0.5 bg-blue-400"></span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Passionate about creating amazing web experiences with modern
              technologies. Specialized in React, Node.js, and mern-stack
              development.
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            {[
              {
                icon: FiGithub,
                href: "https://github.com/ghostarafat",
                label: "GitHub",
              },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/arafatazan/",
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: "mailto:arafat173737@gmail.com",
                label: "Email",
              },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                aria-label={label}
              >
                <SafeIcon icon={icon} className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Hire Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Scroll Indicator - Repositioned */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center pt-8"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <SafeIcon icon={FiArrowDown} className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
