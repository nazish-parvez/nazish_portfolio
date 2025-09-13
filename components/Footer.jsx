import { assets } from "@/assets/assest";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo_light}
          alt=""
          className="w-36 mx-auto mb-4"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <assets.MdMail className="text-2xl mt-0.5 text-gray-700 dark:text-white/90" />
          nazishparvez13@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[8%] mt-10 py-6 ">
        <p>© 2025 Nazish Parvez. All rights resrved.</p>
        <ul className="flex items-center gap-8 lg:gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://x.com/nazish_parvez">
              X (Twitter)
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/nazish-parvez">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/snazishparvez/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
