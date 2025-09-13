import { assets } from "@/assets/assest";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* Navbar Bg Starts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden"
      >
        <Image src={assets.header_bg_color} alt="bgheader" className="w-full" />
      </motion.div>
      {/* Navbar Bg Ends */}

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full fixed flex justify-between items-center px-7 py-5 lg:py-4 sm:px-8 md:px-9 lg:px-[8%] z-50 ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/10"
            : ""
        }`}
      >
        {/* Logo Starts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <a href="#top">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo_light}
              alt="Logo"
              className="w-28 sm:w-[7.5rem] md:w-[8.5rem] lg:w-[8.6rem] mr-16"
            />
          </a>
        </motion.div>
        {/* Logo Ends */}

        {/* Desktop Navlinks Starts */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:block font-ovo"
        >
          <ul
            className={`flex items-center gap-8.5 px-12 py-3 rounded-full ${
              isScroll ? "" : "bg-white/50 dark:bg-white/3 shadow-sm"
            }`}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </ul>
        </motion.div>
        {/* Desktop Navlinks Ends */}

        {/* Mode Btn, Contact Btn and Hamburger Menu Starts */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="flex justify-between items-center space-x-4 sm:space-x-4.5 md:space-x-5 lg:space-x-3"
        >
          {/* Mode Btn Starts */}
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? (
              <assets.HiOutlineSun className="text-3xl sm:text-[1.975rem] md:text-[2.2rem] lg:text-[2.3rem] cursor-pointer" />
            ) : (
              <assets.PiMoonThin className="text-3xl sm:text-[1.975rem] md:text-[2.2rem] lg:text-[2.3rem] cursor-pointer" />
            )}
          </button>
          {/* Mode Btn Ends */}

          {/* Contact Btn Starts */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-10 py-2.5 border border-gray-500 rounded-full ml-4 flex items-center gap-1 font-ovo"
            >
              Contact <assets.RxArrowTopRight className="text-lg mt-1" />
            </a>
          </div>
          {/* Contact Btn Ends */}

          {/* Hamburger Menu Starts */}
          <div className="block lg:hidden" onClick={openMenu}>
            <assets.CgMenuLeftAlt className="text-3xl sm:text-[1.975rem] md:text-[2.2rem]" />
          </div>
          {/* Hamburger Menu Ends */}
        </motion.div>
        {/* Mode Btn, Contact Btn and Hamburger Menu Ends */}

        {/* Mobile Navlinks Starts */}
        <ul
          ref={sideMenuRef}
          className="flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-myOrangeMenu transition duration-500 font-ovo lg:hidden dark:bg-black"
        >
          <div className="absolute right-7 top-6" onClick={closeMenu}>
            <assets.IoCloseOutline className="text-3xl sm:text-[1.975rem] md:text-[2.2rem]" />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#skill" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
        {/* Mobile Navlinks Ends */}
      </motion.nav>
    </>
  );
};

export default Navbar;
