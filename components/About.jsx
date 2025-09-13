import { assets, infoList } from "@/assets/assest";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each li animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <motion.div
      id="about"
      className="py-10 px-7 sm:px-8 md:px-9 lg:px-[7%] scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo text-myOrange"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-12 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-68 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-10 max-w-4xl font-ovo">
            I’m a Computer Science Engineering graduate and an aspiring MERN
            Stack Developer passionate about creating efficient, responsive, and
            user-friendly web applications. With a strong foundation in
            programming and problem-solving, I enjoy turning ideas into
            functional digital experiences.
            <br /> <br />
            I’m eager to kickstart my career in web development, contribute to
            impactful projects, and grow by learning new technologies along the
            way. My goal is to become a versatile developer who can build
            solutions that truly make a difference.
          </p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // animation runs every time it comes into view
          >
            {infoList.map(({ icon: Icon, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#E43D12]/10 hover:-translate-y-1 duration-500 hover:shadow-black dark:bg-white/3 dark:hover:shadow-white dark:border-white/90 dark:hover:bg-myOrange/5"
                variants={itemVariants}
              >
                <Icon className="text-4xl mt-2 text-myOrange" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white/90">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/75">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
