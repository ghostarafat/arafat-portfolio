import React from "react";
import { motion } from "framer-motion";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiCode, FiUsers, FiAward, FiCoffee } = FiIcons;

const About = () => {
  const stats = [
    { icon: FiCode, number: "50+", label: "Projects Completed" },
    { icon: FiUsers, number: "30+", label: "Happy Clients" },
    { icon: FiAward, number: "2+", label: "Years Experience" },
    { icon: FiCoffee, number: "500+", label: "Cups of Coffee" },
  ];

  const handleResumeDownload = () => {
    // CV URL
    const cvUrl =
      "https://drive.google.com/file/d/14J0g0M0AFa5wR2tiALp-luqLEjKamKuW/view?usp=sharing";
    window.open(cvUrl, "_blank");
  };

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              I'm a passionate{" "}
              <span className="text-blue-400">Mern Stack Developer</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm Arafat Hossain, a dedicated web developer with
              expertise in modern technologies. I love creating digital
              experiences that are not only functional but also beautiful and
              user-friendly.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in web development started with HTML and CSS, and has
              evolved to include advanced frameworks and technologies like
              React, Node.js, and various databases. I'm constantly learning and
              adapting to new technologies to deliver the best solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-semibold">Name:</span>
                <span className="text-white">Arafat Hossain</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-semibold">Email:</span>
                <span className="text-white">
                  arafathossain173737@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-semibold">From:</span>
                <span className="text-white">Bangladesh</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://i.postimg.cc/sx2S9rhC/feature3.png"
                alt="About Arafat - Developer Workspace"
                className="rounded-2xl shadow-2xl w-full border border-gray-700"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-600/20 rounded-2xl -z-10"></div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-700 rounded-xl border border-gray-600"
            >
              <SafeIcon
                icon={stat.icon}
                className="w-8 h-8 text-blue-400 mx-auto mb-4"
              />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
