import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiServer, FiDatabase, FiGlobe } = FiIcons;

const Skills = () => {
  const skillCategories = [
    {
      icon: FiGlobe,
      title: "Frontend",
      color: "blue",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "React", level: 85 }
      ]
    },
    {
      icon: FiServer,
      title: "Backend",
      color: "green",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "REST APIs", level: 82 },
        { name: "Authentication", level: 75 }
      ]
    },
    {
      icon: FiDatabase,
      title: "Database",
      color: "purple",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Database Design", level: 75 },
        { name: "Data Modeling", level: 70 }
      ]
    },
    {
      icon: FiCode,
      title: "Tools & Others",
      color: "orange",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        { name: "Deployment", level: 75 }
      ]
    }
  ];

  const technologies = [
    { name: "HTML5", color: "#E34F26", icon: FaHtml5 },
    { name: "CSS3", color: "#1572B6", icon: FaCss3Alt },
    { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
    { name: "React", color: "#61DAFB", icon: FaReact },
    { name: "Node.js", color: "#339933", icon: FaNodeJs },
    { name: "MongoDB", color: "#47A248", icon: SiMongodb },
    { name: "Firebase", color: "#FFCA28", icon: SiFirebase },
    { name: "Tailwind", color: "#06B6D4", icon: SiTailwindcss }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-500", text: "text-blue-400", border: "border-blue-400" },
      green: { bg: "bg-green-500", text: "text-green-400", border: "border-green-400" },
      purple: { bg: "bg-purple-500", text: "text-purple-400", border: "border-purple-400" },
      orange: { bg: "bg-orange-500", text: "text-orange-400", border: "border-orange-400" }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <SafeIcon icon={category.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${colorClasses.text}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className={`${colorClasses.text} font-semibold`}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className={`h-2 ${colorClasses.bg} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Technologies I Love Working With
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 bg-gray-800 group-hover:shadow-lg transition-all duration-300 border border-gray-700"
                  style={{ boxShadow: `0 0 20px ${tech.color}20` }}
                >
                  <SafeIcon 
                    icon={tech.icon} 
                    className="w-8 h-8 transition-colors duration-300"
                    style={{ color: tech.color }}
                  />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;