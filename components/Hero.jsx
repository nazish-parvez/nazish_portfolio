import { assets } from "@/assets/assest";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-center items-center px-7 sm:px-8 md:px-9 lg:px-[7%] gap-2 lg:gap-3"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="w-32 mt-4 lg:mt-8"
        />
      </motion.div>

      <motion.h3
        className="font-ovo mt-2 text-xl lg:text-2xl"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! I'm Nazish Parvez 👋
      </motion.h3>

      <motion.h1
        className="font-ovo text-[2.120rem] leading-10 text-center sm:text-[3rem] sm:leading-14 md:text-[3.6rem] md:leading-16 lg:max-w-4xl lg:text-[80px] lg:leading-20"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="text-myOrange">mern</span> stack developer <br /> based
        in <span className="text-myOrange">India.</span>
      </motion.h1>

      <motion.p
        className="font-ovo text-center max-w-2xl mb-2 mt-0.5 lg:mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Just a guy from Hyderabad, India, obsessed with clean code and awesome
        web apps. I build responsive, full-stack projects using the MERN stack
        and other exciting tools.
      </motion.p>

      <div className="flex flex-col gap-3 md:flex-row">
        <motion.a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-1 dark:bg-white/3 dark:border-white/90"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          contact me <assets.GoArrowRight className="mt-0.5 text-[1rem]" />
        </motion.a>
        <motion.a
          href="/Nazish_Parvez_Resume_2025.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-1 dark:bg-white/90 dark:border-none dark:text-darkTheme"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          my resume <assets.RxDownload className="mt-0.5 text-[1rem]" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
