import React, { useState } from "react";
import { motion } from "framer-motion";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      info: "arafathossain173737@gmail.com",
      link: "mailto:arafathossain173737@gmail.com",
    },
    {
      icon: FiPhone,
      title: "Phone",
      info: "+8801688453866",
      link: "https://t.me/olc101arafat",
    },
    {
      icon: FiMapPin,
      title: "Location",
      info: "Dhaka, Bangladesh",
      link: "#",
    },
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
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Don't like forms? Send me an email. 👋 Or you can find me on
                social media.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow me on:</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label={social.label}
                  >
                    <SafeIcon icon={social.icon} className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <SafeIcon icon={FiSend} className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to start a project?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm available for freelance work and exciting opportunities. Let's
            discuss your project and bring your ideas to life!
          </p>
          <motion.a
            href="mailto:arafathossain173737@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Hire Me Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
