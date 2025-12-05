import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiMenu, FiX, FiDownload } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    // Dummy CV URL - Replace with your actual CV URL
    const cvUrl =
      "https://drive.google.com/file/d/14J0g0M0AFa5wR2tiALp-luqLEjKamKuW/view?usp=sharing";
    window.open(cvUrl, "_blank");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Arafat<span className="text-blue-400">.</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <SafeIcon icon={FiDownload} className="w-4 h-4" />
                Resume
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-800 rounded-lg mt-2 p-4"
          >
            <div className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium w-full text-left"
                  >
                    {item}
                  </button>
                )
              )}
              <button
                onClick={handleResumeDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 w-full justify-center mt-4"
              >
                <SafeIcon icon={FiDownload} className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
