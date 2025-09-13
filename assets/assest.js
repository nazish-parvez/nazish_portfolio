import logo_light from "../assets/logo_light.svg";
import { PiMoonThin } from "react-icons/pi";
import { CgMenuLeftAlt } from "react-icons/cg";
import header_bg_color from "../assets/header_bg_color.png";
import { RxArrowTopRight } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

// Hero
import profile_img from "../assets/profile_img.png";
import { GoArrowRight } from "react-icons/go";
import { RxDownload } from "react-icons/rx";

//About
import user_image from "../assets/user_image.png";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import { BsFileEarmarkCode } from "react-icons/bs";

//Skills
import html from "../assets/skills/html_icon.png";
import css from "../assets/skills/css_icon.png";
import javascript from "../assets/skills/javascript_icon.png";
import tailwindcss from "../assets/skills/tailwindcss_icon.png";
import reactjs from "../assets/skills/reactjs_icon.png";
import mongodbicon from "../assets/skills/mongodb_icon.png";
import nodejs from "../assets/skills/nodejs_icon.png";
import express from "../assets/skills/express_icon.png";
import typescript from "../assets/skills/typescript_icon.png";
import giticon from "../assets/skills/git_icon.png";
import github from "../assets/skills/github_icon.png";
import vscodeicon from "../assets/skills/vscode_icon.png";
import windows from "../assets/skills/windows_icon.png";
import linux from "../assets/skills/linux_icon.png";
import figmaicon from "../assets/skills/figma_icon.png";
import xd from "../assets/skills/xd_icon.png";

//Project
import cover from "../assets/cover.png";
import cover01 from "../assets/cover01.png";
import cover02 from "../assets/cover02.png";
import cover03 from "../assets/cover03.png";

import { MdMail } from "react-icons/md";
//Dark
import { HiOutlineSun } from "react-icons/hi2";
import logo_dark from "../assets/logo_dark.svg";

export const assets = {
  logo_light,
  PiMoonThin,
  CgMenuLeftAlt,
  header_bg_color,
  RxArrowTopRight,
  IoCloseOutline,
  profile_img,
  GoArrowRight,
  RxDownload,
  user_image,
  HiMiniCodeBracket,
  PiStudent,
  BsFileEarmarkCode,

  //Skills
  html,
  css,
  javascript,
  tailwindcss,
  reactjs,
  mongodbicon,
  nodejs,
  express,
  typescript,
  giticon,
  github,
  vscodeicon,
  windows,
  linux,
  figmaicon,
  xd,

  //Projects
  cover,
  cover01,
  cover02,
  cover03,

  MdMail,

  //Dark
  HiOutlineSun,
  logo_dark,
};

export const infoList = [
  {
    icon: assets.HiMiniCodeBracket,
    title: "Languages & Frameworks",
    description: "JavaScript, TypeScript, ReactJs, NextJs....",
  },
  {
    icon: assets.PiStudent,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.BsFileEarmarkCode,
    title: "Projects",
    description: "Built more than 5 projects....",
  },
];

export const Skills_Icons = [
  assets.html,
  assets.css,
  assets.javascript,
  assets.tailwindcss,
  assets.reactjs,
  assets.mongodbicon,
  assets.nodejs,
  assets.express,
  assets.typescript,
  assets.giticon,
  assets.github,
  assets.vscodeicon,
  assets.windows,
  assets.linux,
  assets.figmaicon,
  assets.xd,
  assets.nodejs,
  assets.reactjs,
];

export const Project_Data = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js and TailwindCSS to showcase my work, skills, and experience.",
    image: assets.cover,
    code: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "A full-stack MERN e-commerce app with authentication, shopping cart, and payment integration.",
    image: assets.cover01,
    code: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 3,
    title: "E-Commerce App",
    description:
      "A full-stack MERN e-commerce app with authentication, shopping cart, and payment integration.",
    image: assets.cover02,
    code: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 4,
    title: "E-Commerce App",
    description:
      "A full-stack MERN e-commerce app with authentication, shopping cart, and payment integration.",
    image: assets.cover03,
    code: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
];
