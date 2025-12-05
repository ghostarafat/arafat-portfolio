import React from "react";
import { motion } from "framer-motion";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiExternalLink, FiGithub, FiEye } = FiIcons;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PawMart — Pet Adoption & Supply Portal",
      description:
        "A modern full-stack web application where users can adopt pets, buy pet supplies, and manage their listings — all in one place. Built with the MERN stack for smooth performance and an intuitive user experience.",
      image: "https://i.imgur.com/Cfnbv6a.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
      github: "https://github.com/ghostarafat/assignment10-client",
      live: "https://assignment10b12.netlify.app/",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "SkillSwap — Learn and Share Skills",
      description:
        "SkillSwap is a web application that allows users to learn new skills and share their own skills with others. Users can explore various skill categories, view detailed skill information, and book sessions with skill providers. Authentication ensures only registered users can access certain features like booking a session or viewing skill details.",
      image: "https://i.imgur.com/f0u7LR1.png",
      technologies: ["JavaScript", "React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/ghostarafat/skill-swap",
      live: "assignment9b12.netlify.app/",
      category: "Frontend",
    },
    {
      id: 3,
      title:
        "🚀 Hero App Store — Discover, Install and Manage Apps with Hero App Store",
      description:
        "Hero App Store is a modern React-based web application that allows users to explore popular apps, install them, and manage their installed apps with ease. The project is responsive, dynamic, and interactive, featuring essential functionalities such as Local Storage integration, sorting options, chart visualizations, and toast notifications for a smooth user experience.",
      image: "https://i.imgur.com/x8R2pQI.png",
      technologies: [
        "React.js",
        "JavaScript",
        "React Router",
        "Tailwind CSS",
        "Recharts",
      ],
      github: "https://github.com/ghostarafat/assignment8",
      live: "https://assignment8ph12.netlify.app/",
      category: "Frontend",
    },
    // {
    //   id: 4,
    //   title: "Weather App",
    //   description:
    //     "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information. Includes weather alerts and historical data.",
    //   image:
    //     "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    //   technologies: ["React", "Weather API", "CSS3", "HTML5"],
    //   github: "#",
    //   live: "#",
    //   category: "Frontend",
    // },
    // {
    //   id: 5,
    //   title: "Blog Platform",
    //   description:
    //     "A modern blogging platform with rich text editor, comment system, user profiles, and SEO optimization. Supports multiple authors and content management.",
    //   image:
    //     "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    //   technologies: [
    //     "React",
    //     "Node.js",
    //     "MongoDB",
    //     "Express.js",
    //     "Tailwind CSS",
    //   ],
    //   github: "#",
    //   live: "#",
    //   category: "Full Stack",
    // },
    // {
    //   id: 6,
    //   title: "Portfolio Website",
    //   description:
    //     "A responsive portfolio website showcasing projects and skills with smooth animations, contact forms, and modern design principles. Optimized for performance.",
    //   image:
    //     "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    //   technologies: ["React", "Tailwind CSS", "Framer Motion", "HTML5"],
    //   github: "#",
    //   live: "#",
    //   category: "Frontend",
    // },
  ];

  const [filter, setFilter] = React.useState("All");
  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    aria-label="View Live"
                  >
                    <SafeIcon icon={FiEye} className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                    aria-label="View Code"
                  >
                    <SafeIcon icon={FiGithub} className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-400 text-sm font-medium bg-blue-400/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <SafeIcon icon={FiGithub} className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
