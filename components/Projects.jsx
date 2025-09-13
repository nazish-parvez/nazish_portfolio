import React from "react";
import Image from "next/image";
import { Project_Data } from "@/assets/assest";
import { motion } from "motion/react";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <motion.div
      id="project"
      className="py-10 px-7 sm:px-8 md:px-9 lg:px-[7%] scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-3 text-lg font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Projects
      </motion.h4>

      <motion.h2
        className="text-center leading-14 text-5xl font-ovo text-myOrange"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Latest Projects
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl lg:max-w-4xl mx-auto mt-5 mb-12 font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Here's a collection of projects where I've used the MERN stack and
        modern tools to build clean, responsive, and user-friendly web
        applications. Each project highlights my focus on writing efficient
        code, solving real-world problems, and continuously growing as a
        developer.
      </motion.p>

      {/* Project Cards without container animation */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 -z-30 mb-20">
        {Project_Data.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white border border-gray-400 p-5 rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-black duration-500 ease-in-out dark:border-white/90 dark:bg-white/3 dark:hover:shadow-white"
          >
            {/* Image */}
            <div className="w-full h-56 mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-lg opacity-95 dark:opacity-80"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm flex-grow dark:text-white/75">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex space-x-3">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium border border-gray-700 rounded-lg hover:bg-gray-800 hover:text-white transition dark:border-white/90"
                >
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium bg-myOrange text-white/90 rounded-lg hover:bg-myOrange/90 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
