import React from "react";
import { motion } from "framer-motion";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/ghostarafat", label: "GitHub" },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/arafatazan/",
      label: "LinkedIn",
    },
    {
      icon: FiMail,
      href: "mailto:arafathossain173737@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Arafat<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A passionate full-stack web developer creating amazing digital
              experiences with modern technologies. Always learning, always
              growing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+8801683239856"
                className="text-gray-300 hover:text-blue-400 transition-colors block"
              >
                +880 1683 239856
              </a>
              <a
                href="mailto:arafathossain173737@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors block"
              >
                arafathossain173737@gmail.com
              </a>
              <p className="text-gray-300">Dhaka, Bangladesh</p>
              <p className="text-gray-300">Available for freelance work</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm flex-1 flex items-center justify-center gap-1 text-center">
            © {new Date().getFullYear()} Arafat Hossain. Made with
            <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-500 mx-1" />
            and lots of coffee ☕
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <SafeIcon icon={FiArrowUp} className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
