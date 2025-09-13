import { Skills_Icons } from "@/assets/assest";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // smooth stagger timing
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } // smooth easing
  },
};

const Skills = () => {
  return (
    <motion.div
      id="skill"
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
        Technologies I use
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo text-myOrange"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Tech Stack
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Here are the technologies, tools, and frameworks I work with to build
        responsive, efficient, and user-friendly web applications.
      </motion.p>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-8 gap-y-6.5 sm:gap-6 lg:gap-10 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {Skills_Icons.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center w-22 sm:w-28 md:w-32 aspect-square border border-gray-400 rounded-lg lg:rounded-xl cursor-pointer hover:-translate-y-1 hover:scale-100 hover:shadow-lg hover:shadow-myOrange/30 duration-500 ease-in-out dark:border-white/90 dark:bg-white/3"
            variants={itemVariants}
          >
            <Image
              src={skill}
              alt={`skill-${index}`}
              className="w-16 sm:w-20 md:w-24 lg:w-[6.2rem] rounded-sm lg:rounded-sm aspect-square"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
