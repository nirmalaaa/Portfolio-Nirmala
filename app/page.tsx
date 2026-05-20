"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import imgProject1 from "@/public/project1.jpg";
import imgProject2 from "@/public/project2.jpeg";
import imgProject3 from "@/public/project3.jpg";
import imgProject4 from "@/public/project4.jpg";
import imgProject5 from "@/public/project5.png";
import imgProject6 from "@/public/project6.jpg";
import imgProject7 from "@/public/project7.jpg";
import imgProject8 from "@/public/project8.jpg";

import imgUSU from "@/public/usu.png";
import imgBEM from "@/public/bem.jpg";
import imgBankSumut from "@/public/banksumut.png";
import imgAkpar from "@/public/akpar.jpg";

import img1 from "@/public/NIRMALA SILALAHI.jpg";
import img2 from "@/public/img_2.jpg";
import img3 from "@/public/img_3.jpg";
import img4 from "@/public/img_4.jpg";
import img5 from "@/public/img_5.jpg";

import imgCanva from "@/public/canva-icon.png";

import Image from "next/image";
import {
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiPython,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export default function Home() {


  const roles = [
  "UI/UX Designer",
  "Frontend Developer",
  "Mobile Developer",
  "Software Engineer",
  "Creative Designer",
];

const [roleIndex, setRoleIndex] = useState(0);
const [displayText, setDisplayText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);

const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

const projects = [
  {
    image: imgProject1,

    title: "Vitality",

    type: "Website",

    description:
    "Healthcare platform designed to help users find nearby hospitals, explore disease symptoms, and access medicine or vitamin price information through a clean and user-friendly digital experience.",

    preview: "https://github.com/ALVIANRML/api_obat-vitamin",

    previewType: "github",

    tags: [
      "PHP",
      "Blade",
      "CSS",
      "Javascript",
    ],
  },

  {
    image: imgProject2,

    title: "Finance Tracker",

    type: "Website",

    description:
    "Gamified financial tracking website featuring daily tasks, streak systems, lives, and reward coins to encourage healthy financial habits. The platform provides income and expense analytics, monthly financial statistics, and AI-powered expense categorization based on transaction descriptions.",

    preview: "https://finance-f1af9.web.app/",

    previewType: "website",

    tags: [
      "React.js",
      "Vite",
      "Javascript",
      "CSS",
      "HTML",
    ],
  },

  {
    image: imgProject3,

    title: "THIS (Things I Couldnt Said)",

    type: "Mobile App",

    description:
    "Private mood-tracking mobile application designed to help users express emotions through digital journaling. The app provides mood detection, calming diary experiences, calendar-based journal history, and PIN protection for user privacy and emotional security.",

    preview: "https://github.com/virgiebeatrice/ThisApps",

    previewType: "github",

    tags: [
      "Mobile",
      "Kotlin",
    ],
  },

  {
    image: imgProject4,

    title: "BioPrint",

    type: "UI Design",

    description:
    "Eco-lifestyle mobile application combining sustainable e-commerce experiences with environmental awareness features. Users can shop eco-friendly products, complete daily green missions, and monitor sustainability statistics through an engaging and modern interface.",

    preview: "https://www.figma.com/proto/BrxpUu0SNkc8rUJ5SvuAJT/BioPrint?node-id=438-3551&starting-point-node-id=438%3A2651&t=JDZPmoaaLUxMRzn8-1",

    previewType: "figma",

    tags: [
      "UI/UX",
      "Creative",
      "Design System",
    ],
  },

   {
    image: imgProject5,

    title: "Momu Playlist",

    type: "Website",

    description:
    "AI-powered music recommendation website that detects user moods and generates playlists based on emotional analysis. Designed with a modern and immersive interface to create a more personal listening experience.",

    preview: "https://www.figma.com/proto/BrxpUu0SNkc8rUJ5SvuAJT/BioPrint?node-id=438-3551&starting-point-node-id=438%3A2651&t=JDZPmoaaLUxMRzn8-1",

    previewType: "figma",

    tags: [
      "UI/UX",
      "Creative",
      "Design System",
    ],
  },

     {
    image: imgProject6,

    title: "Bank Sampah",

    type: "UI/UX Design",

    description:
    "Mobile application UI design for a digital waste management platform where users can schedule waste pickups, exchange collected waste for points, and track different waste categories. The system also supports separate interfaces for admins and customers to simplify operations and monitoring.",

    preview: "https://www.figma.com/proto/0OkMujmI99SAE7wxBKVcnF/Bank-Sampah?node-id=287-14404&p=f&t=Cll3d2VDwR8PvKQc-1&scaling=scale-down&content-scaling=fixed&page-id=2%3A4&starting-point-node-id=287%3A14404&show-proto-sidebar=1",

    previewType: "figma",

    tags: [
      "UI/UX",
      "Creative",
      "Design System",
    ],
  },

     {
    image: imgProject7,

    title: "PINTAR",

    type: "Mobile App Design",

    description:
    "Inclusive learning application designed for deaf students, combining classroom management features with IoT-based vibration devices for real-time learning interaction. The platform includes teacher and student roles, attendance systems, and an interactive sign language dictionary experience.",

    preview: "https://www.figma.com/proto/4iQ3YWR3LpETDv5qox4M0R/NIRMALA-S-PROJECTS?node-id=1281-23565&t=LtimUf7trAv3ztwI-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1281%3A24036&show-proto-sidebar=1",

    previewType: "figma",

    tags: [
      "UI/UX",
      "Creative",
      "Design System",
    ],
  },

     {
    image: imgProject8,

    title: "USU Circula",

    type: "Mobile App Design",

     description:
    "Mobile application UI focused on waste collection workflows across Universitas Sumatera Utara. The system manages waste pickup reporting, collection verification, waste categorization, and weight tracking between campus cleaning staff and waste collection teams.",

    preview: "https://www.figma.com/proto/BrxpUu0SNkc8rUJ5SvuAJT/BioPrint?node-id=438-3551&starting-point-node-id=438%3A2651&t=JDZPmoaaLUxMRzn8-1",

    previewType: "figma",

    tags: [
      "UI/UX",
      "Creative",
      "Design System",
    ],
  },
];

useEffect(() => {
  const current = roles[roleIndex];

  const timeout = setTimeout(() => {

    if (!isDeleting) {

      setDisplayText(current.substring(0, displayText.length + 1));

      if (displayText === current) {

        setTimeout(() => {
          setIsDeleting(true);
        }, 1200);

      }

    } else {

      setDisplayText(current.substring(0, displayText.length - 1));

      if (displayText === "") {

        setIsDeleting(false);

        setRoleIndex((prev) => (prev + 1) % roles.length);

      }

    }

  }, isDeleting ? 45 : 90);

  return () => clearTimeout(timeout);

}, [displayText, isDeleting, roleIndex]);

const toolsTop = [
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  {
    name: "Canva",
    icon: imgCanva,
  },

  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },

  {
    name: "Tailwind",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
  },

  {
    name: "Laravel",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
  },

  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];

const toolsBottom = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },

  {
    name: "Adobe AI",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
  },

  {
    name: "MS Office",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg",
  },
];

  const photos = [
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  const [index, setIndex] = useState(0);

  const nextPhoto = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <main className="bg-[#F5F1EB] text-[#1A1A1A] overflow-hidden">

      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[999]">

  <div
    className="w-full h-full"
    style={{
      backgroundImage:
        "url('https://grainy-gradients.vercel.app/noise.svg')",
    }}
  />

</div>


{/* FLOATING GRADIENT BACKGROUND */}
<div className="fixed inset-0 -z-10 overflow-hidden">

  {/* TOP RIGHT */}
  <div className="absolute top-[-180px] right-[-120px] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#C9D8FF] via-[#E7D7FF] to-[#FFD8E6] opacity-40 blur-[140px]" />

  {/* BOTTOM LEFT */}
  <div className="absolute bottom-[-220px] left-[-120px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FFE5C7] via-[#FFD6E7] to-[#D9E8FF] opacity-40 blur-[140px]" />

  {/* CENTER LIGHT */}
  <div className="absolute top-[35%] left-[40%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#ffffff] to-[#F7F2FF] opacity-70 blur-[100px]" />

</div>

{/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full z-50">

  <div className="max-w-7xl mx-auto px-6 md:px-16 pt-6">

    <div
      className="
        flex items-center justify-between
        px-6 md:px-8 py-4
        rounded-full
        border border-white/40
        bg-white/40
        backdrop-blur-2xl
        shadow-[0_8px_40px_rgba(0,0,0,0.06)]
      "
    >

      {/* LOGO */}
      <h1 className="text-sm md:text-base tracking-[6px] font-semibold text-black/70">
        @brownies
      </h1>

      {/* MENU */}
      <div className="hidden md:flex items-center gap-8 uppercase text-[11px] tracking-[3px] text-black/45">

        <a
          href="#about"
          className="hover:text-black transition duration-300"
        >
          About
        </a>

        <a
          href="#projects"
          className="hover:text-black transition duration-300"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="hover:text-black transition duration-300"
        >
          Contact
        </a>

      </div>

    </div>

  </div>

</nav>

{/* HERO */}
<section className="min-h-[120vh] bg-[#F5F1EB] relative overflow-hidden flex items-center justify-center px-6 md:px-8">

  {/* GRAIN */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  </div>

  {/* MULTI GRADIENT BLURS */}
  <div className="absolute top-[-120px] right-[-100px] w-[450px] md:w-[650px] h-[450px] md:h-[650px] bg-[#D7DDE8] opacity-55 blur-[150px] rounded-full"></div>

  <div className="absolute bottom-[-180px] left-[-120px] w-[400px] md:w-[550px] h-[400px] md:h-[550px] bg-[#FFD8E4] opacity-45 blur-[140px] rounded-full"></div>

  <div className="absolute top-[25%] left-[20%] w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[#FFF1C7] opacity-35 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-[15%] right-[15%] w-[220px] md:w-[300px] h-[220px] md:h-[300px] bg-[#E8DAD2] opacity-35 blur-[100px] rounded-full"></div>

  {/* DECOR */}
  <div className="absolute top-[18%] left-[12%] w-5 h-5 rounded-full bg-[#D7DDE8]"></div>

  <div className="absolute bottom-[22%] right-[16%] w-10 h-10 rounded-full border border-black/10"></div>

  {/* TOP LABEL */}
  <div className="absolute top-8 md:top-10 left-6 md:left-10 text-[10px] md:text-[11px] tracking-[4px] uppercase text-black/40">
    creative portfolio
  </div>

  <div className="absolute top-8 md:top-10 right-6 md:right-10 text-[10px] md:text-[11px] tracking-[4px] uppercase text-black/30">
    based in indonesia
  </div>

  {/* FLOATING NOTES */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="absolute top-[24%] right-[8%] text-black/20 italic text-xs md:text-sm rotate-[-8deg]"
  >
    coffee & pixels
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4 }}
    className="absolute bottom-[20%] left-[8%] text-black/20 italic text-xs md:text-sm rotate-[5deg]"
  >
    designing thoughtful experiences
  </motion.p>

  {/* HUGE BG TEXT */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

    <h1 className="text-[90px] md:text-[280px] font-black tracking-[-10px] md:tracking-[-18px] text-black/[0.03] leading-none select-none">
      NIRMALA
    </h1>

  </div>

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center text-center">

    {/* TYPO */}
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1.2,
      }}

      className="relative"
    >

      {/* SMALL LABEL */}
      <p className="uppercase tracking-[6px] text-black/40 text-xs md:text-sm mb-6 md:mb-8">
        selected works · 2026
      </p>

      {/* MAIN TITLE */}
      <div className="relative inline-block">

        <h1 className="text-[72px] sm:text-[100px] md:text-[190px] font-black tracking-[-8px] md:tracking-[-14px] leading-[0.9] text-black">
          portfolio
        </h1>

        {/* FLOATING CREATIVE */}
        <span className="absolute -top-5 md:-top-8 right-0 md:right-[-20px] text-[26px] md:text-[70px] italic font-serif text-[#E39AB1]/60 rotate-[8deg]">
          creative
        </span>

      </div>

    </motion.div>

    {/* DESCRIPTION */}
    <motion.p
      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        delay: 0.5,
        duration: 1,
      }}

      className="mt-8 md:mt-12 max-w-xl md:max-w-2xl text-center text-black/50 leading-8 md:leading-9 text-base md:text-lg px-4"
    >
      Creating modern digital experiences through
      visual storytelling, thoughtful interaction,
      and minimalist aesthetics.
    </motion.p>

    {/* FLOATING GLASS CARD */}

  <motion.div
    drag
    dragConstraints={{
      left: -40,
      right: 40,
      top: -20,
      bottom: 20,
    }}

    whileTap={{
      scale: 1.08,
      cursor: "grabbing",
    }}

    whileHover={{
      scale: 1.03,
    }}

    className="
      inline-flex
      items-center
      gap-3

      px-5 py-3

      rounded-full

      bg-white/55
      backdrop-blur-2xl

      border border-white/40

      shadow-[0_10px_40px_rgba(255,255,255,0.35)]

      cursor-grab
      select-none
    "
  >

    {/* GLOW DOT */}
    <motion.div

      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
      }}

      transition={{
        repeat: Infinity,
        duration: 2,
      }}

      className="
        w-2.5 h-2.5
        rounded-full

        bg-gradient-to-r
        from-[#E8B7D4]
        to-[#B7CFFF]
      "
    />

    {/* TYPING TEXT */}
    <p
      className="
        uppercase
        tracking-[4px]
        text-black/55

        text-[10px]
        md:text-sm

        whitespace-nowrap
      "
    >
      {displayText}

      <motion.span

        animate={{
          opacity: [0, 1, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 1,
        }}

        className="ml-1"
      >
        |
      </motion.span>

    </p>

  </motion.div>


{/* SCROLL */}
<motion.div
  initial={{
    opacity: 0,
  }}
  animate={{
    opacity: 1,
  }}
  transition={{
    delay: 1.2,
  }}
  className="mt-20 md:mt-24 flex flex-col items-center"
>

  <p className="uppercase tracking-[4px] text-black/30 text-[10px] md:text-xs mb-4">
    scroll to explore
  </p>

  <motion.div
    animate={{
      y: [0, 10, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 1.8,
    }}
    className="w-[1px] h-14 md:h-16 bg-gradient-to-b from-black/10 to-black/40"
  />

</motion.div>

</div>

{/* BOTTOM FADE */}
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#F5F1EB]"></div>

</section>

{/* ABSTRACT TRANSITION */}
<section className="relative h-[350px] md:h-[520px] overflow-hidden bg-[#F5F1EB]">

  {/* GRAIN */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  </div>

  {/* HUGE TYPO */}
  <motion.h2

    initial={{
      opacity: 0,
      y: 120,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
      amount: 0.3,
    }}

    transition={{
      duration: 1.4,
    }}

    className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      text-[70px]
      md:text-[220px]
      font-black
      tracking-[-14px]
      text-black/[0.03]
      whitespace-nowrap
      pointer-events-none
      z-0
    "
  >
    visual poetry
  </motion.h2>

  {/* BUBBLE 1 */}
  <motion.div

    initial={{
      opacity: 0,
      scale: 0.4,
    }}

    whileInView={{
      opacity: 0.9,
      scale: 1,
    }}

    viewport={{
      once: true,
    }}

    transition={{
      duration: 1.2,
    }}

    animate={{
      y: [0, -25, 0],
    }}

    className="
      absolute
      top-[18%]
      left-[8%]
      w-40 h-40
      rounded-full
      bg-gradient-to-br
      from-[#FFD7E2]
      via-[#DCE7FF]
      to-[#FFF1D8]
      blur-[18px]
    "
  />

  {/* BUBBLE 2 */}
  <motion.div

    initial={{
      opacity: 0,
      scale: 0.5,
    }}

    whileInView={{
      opacity: 0.8,
      scale: 1,
    }}

    viewport={{
      once: true,
    }}

    transition={{
      duration: 1.4,
      delay: 0.2,
    }}

    animate={{
      y: [0, 20, 0],
    }}

    className="
      absolute
      bottom-[10%]
      right-[6%]
      w-56 h-56
      rounded-full
      bg-gradient-to-br
      from-[#DCE7FF]
      via-[#F8E1FF]
      to-[#FFE7D2]
      blur-[22px]
    "
  />

  {/* BUBBLE 3 */}
  <motion.div

    initial={{
      opacity: 0,
      scale: 0.4,
    }}

    whileInView={{
      opacity: 0.7,
      scale: 1,
    }}

    viewport={{
      once: true,
    }}

    transition={{
      duration: 1,
      delay: 0.4,
    }}

    animate={{
      y: [0, -18, 0],
    }}

    className="
      absolute
      bottom-[24%]
      left-[38%]
      w-24 h-24
      rounded-full
      bg-gradient-to-br
      from-[#FFF0D6]
      to-[#D7E6FF]
      blur-[12px]
    "
  />

  {/* BUBBLE 4 */}
  <motion.div

    initial={{
      opacity: 0,
      scale: 0.4,
    }}

    whileInView={{
      opacity: 0.6,
      scale: 1,
    }}

    viewport={{
      once: true,
    }}

    transition={{
      duration: 1.2,
      delay: 0.6,
    }}

    animate={{
      y: [0, 16, 0],
    }}

    className="
      absolute
      top-[40%]
      right-[28%]
      w-20 h-20
      rounded-full
      bg-gradient-to-br
      from-[#FFE4EF]
      to-[#DCE8FF]
      blur-[10px]
    "
  />

  {/* FLOATING DOTS */}
  {[...Array(14)].map((_, i) => (

    <motion.div
      key={i}

      initial={{
        opacity: 0,
        y: 20,
      }}

      whileInView={{
        opacity: 0.45,
        y: 0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        delay: i * 0.08,
        duration: 0.8,
      }}

      animate={{
        y: [0, -10, 0],
      }}

      className="absolute rounded-full bg-black/10"

      style={{
        width: `${6 + i * 2}px`,
        height: `${6 + i * 2}px`,
        left: `${5 + i * 7}%`,
        top: `${18 + (i % 4) * 16}%`,
      }}
    />

  ))}

  {/* ABSTRACT LINE */}
  <motion.div

    initial={{
      opacity: 0,
      scaleX: 0,
    }}

    whileInView={{
      opacity: 1,
      scaleX: 1,
    }}

    viewport={{
      once: true,
    }}

    transition={{
      duration: 1.5,
      delay: 0.3,
    }}

    className="
      absolute
      bottom-16
      left-1/2
      -translate-x-1/2
      w-[75%]
      h-[1px]
      bg-gradient-to-r
      from-transparent
      via-black/10
      to-transparent
    "
  />

  {/* FLOATING TEXT */}
  <motion.p

    initial={{
      opacity: 0,
      y: 20,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
    }}

    transition={{
      delay: 0.7,
      duration: 1,
    }}

    className="
      absolute
      bottom-24
      left-1/2
      -translate-x-1/2
      text-black/30
      italic
      text-sm
      tracking-[2px]
    "
  >
    thoughtful interaction & visual storytelling
  </motion.p>

</section>

{/* ABOUT */}
<section
  id="about"
  className="px-8 md:px-16 py-32"
></section>
<section className="bg-[#FCFCFB] relative"></section>
<section className="px-6 md:px-16 py-24 md:py-32 relative overflow-hidden">

  {/* GRADIENT BLURS */}
  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E7DFFF] opacity-30 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFE7D8] opacity-30 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 md:gap-24 items-center relative z-10">


    {/* LEFT IMAGE */}
    <div className="relative flex justify-center items-center min-h-[500px] md:min-h-[650px]">

      {/* ABSTRACT SHAPE */}
      <div className="absolute w-[280px] md:w-[420px] h-[380px] md:h-[520px] bg-gradient-to-br from-[#D7DDE8] via-[#FFD8E4] to-[#FFF1C7] opacity-80 rounded-[45%_55%_60%_40%/40%_40%_60%_60%] rotate-6 blur-[2px]"></div>

      {/* GLOW */}
      <div className="absolute w-[300px] md:w-[450px] h-[420px] md:h-[560px] bg-white/40 blur-[80px] rounded-full"></div>

      {/* CARD STACK */}
      <div
        className="relative w-[280px] md:w-[380px] h-[380px] md:h-[500px]"
        style={{ perspective: 1000 }}
      >

    {photos.map((photo, i) => {

      const offset = (i - index + photos.length) % photos.length;

      if (offset > 2) return null;

      return (
        <motion.img
          key={photo.src}
          src={photo.src}
          alt="profile"

          drag={offset === 0 ? "x" : false}

          dragConstraints={{
            left: 0,
            right: 0,
          }}

          onDragEnd={(event, info) => {
            if (
              offset === 0 &&
              (info.offset.x > 120 || info.offset.x < -120)
            ) {
              nextPhoto();
            }
          }}

          animate={{
            scale: 1 - offset * 0.05,
            y: offset * 18,
            rotate: offset === 0 ? 0 : offset % 2 === 0 ? -6 : 6,
            zIndex: 10 - offset,
            opacity: 1 - offset * 0.15,
          }}

          whileDrag={{
            rotate: 10,
            scale: 1.03,
            cursor: "grabbing",
          }}

          transition={{
            type: "spring",
            stiffness: 220,
            damping: 20,
          }}

          className="
            absolute
            w-full h-full
            object-cover
            rounded-[26px] md:rounded-[30px]
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            cursor-grab
          "
        />
      );
    })}

      </div>

{/* FLOATING LABELS */}
<div className="absolute inset-0 pointer-events-none">

  {/* UI/UX LABEL */}
  <motion.div

    drag
    dragConstraints={{
      left: -50,
      right: 50,
      top: -50,
      bottom: 50,
    }}

    whileDrag={{
      scale: 1.08,
      rotate: 8,
    }}

    className="absolute bottom-2 md:bottom-0 right-2 md:-right-10 px-5 py-3 rounded-[22px] bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rotate-[-8deg] cursor-grab z-50 pointer-events-auto"
  >

    <p className="text-[10px] md:text-sm uppercase tracking-[3px] text-black/60">
      nirmala aizya agatha silalahi
    </p>

  </motion.div>

  {/* OPEN TO WORK LABEL */}
  <motion.div

    drag
    dragConstraints={{
      left: -50,
      right: 50,
      top: -50,
      bottom: 50,
    }}

    whileDrag={{
      scale: 1.08,
      rotate: -6,
    }}

    className="absolute top-4 md:top-10 left-0 md:-left-8 px-5 py-3 rounded-[22px] bg-gradient-to-r from-[#FFD8E4]/80 via-[#FFF1C7]/80 to-[#D7DDE8]/80 backdrop-blur-xl border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rotate-[6deg] cursor-grab z-50 pointer-events-auto"
  >

    <p className="text-[10px] md:text-sm uppercase tracking-[3px] text-black/70">
      ✦ open to work
    </p>

  </motion.div>

</div>

    </div>

    {/* RIGHT CONTENT */}
    <div className="text-center md:text-left">

      <p className="uppercase tracking-[5px] text-black/40 text-sm mb-6 md:mb-8">
        About Me
      </p>

      <h2 className="text-4xl sm:text-5xl md:text-7xl leading-[1] font-bold tracking-[-3px]">
        hello!
        <br />
        get to
        <br />
        know me
      </h2>

      <p className="mt-8 md:mt-10 text-black/60 leading-8 md:leading-9 text-base md:text-lg max-w-xl mx-auto md:mx-0">
        A Computer Science graduate from Universitas Sumatera Utara
        with a strong focus on UI/UX design, frontend development,
        and digital product experiences. Passionate about building
        interfaces that are not only visually appealing, but also
        intuitive, accessible, and user-focused.
      </p>

      {/* STATS */}
      <div className="flex justify-center md:justify-start gap-8 md:gap-14 mt-12 md:mt-14">

        <div>

          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#7B8AB8] to-[#E39AB1] bg-clip-text text-transparent">
            10+
          </h3>

          <p className="text-black/50 mt-2 text-sm md:text-base">
            Projects
          </p>

        </div>

        <div>

          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#E39AB1] to-[#F3C86A] bg-clip-text text-transparent">
            2+
          </h3>

          <p className="text-black/50 mt-2 text-sm md:text-base">
            Years Experience
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* PROJECTS */}
<section
  id="projects"
  className="
    relative
    overflow-hidden
    px-6 md:px-16
    py-28 md:py-36
    bg-gradient-to-b
    from-[#FFF9F6]
    via-[#FFFCFA]
    to-[#FAF7FF]
  "
>

  {/* DREAMY BACKGROUNDS */}
  <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#FFDCE8] via-[#FFF1D8] to-[#DCE8FF] opacity-35 blur-[140px]" />

  <div className="absolute bottom-[-200px] right-[-120px] w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#DCE7FF] via-[#F7DFFF] to-[#FFE4EC] opacity-35 blur-[150px]" />

  <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-white opacity-60 blur-[100px]" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* TITLE */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-24">

      <div>

        <p className="uppercase tracking-[5px] text-black/35 text-sm">
          Selected Works
        </p>

        <h2 className="text-5xl md:text-7xl font-bold tracking-[-4px] mt-4 leading-[0.95]">
          all projects.
        </h2>

      </div>

      <p className="max-w-sm text-black/45 leading-7 text-sm md:text-right">
        A collection of interface explorations,
        frontend development, and visual experiences.
      </p>

    </div>

    {/* PROJECTS */}
    <div className="space-y-24">

      {projects.map((project, i) => (

        <motion.div
          key={i}

          initial={{
            opacity: 0,
            y: 80,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}

          transition={{
            duration: 0.8,
            delay: i * 0.08,
          }}

          className={`
            grid md:grid-cols-2
            gap-10 md:gap-20
            items-center
            ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}
          `}
        >

          {/* IMAGE */}
          <motion.div

            whileHover={{
              y: -10,
            }}

            className="
              group
              relative
              overflow-hidden
              rounded-[36px]
            "
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFDCE8]/20 via-transparent to-[#DCE8FF]/20 z-10 pointer-events-none" />

          <Image
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-[320px] md:h-[520px]
              object-cover
              transition duration-700
              group-hover:scale-[1.04]
            "
          />
            {/* FLOATING LABEL */}
            <div
              className="
                absolute
                top-6
                left-6
                px-5 py-3
                rounded-full
                bg-white/60
                backdrop-blur-xl
                border border-white/40
                text-[11px]
                uppercase
                tracking-[3px]
                text-black/50
              "
            >
              {project.type}
            </div>

          </motion.div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[4px] text-black/30 text-xs">
              0{i + 1}
            </p>

            <h3 className="mt-5 text-5xl md:text-7xl font-bold tracking-[-4px] leading-[0.95]">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <motion.div
              initial={false}
              animate={{
                height: expandedIndex === i
                  ? "auto"
                  : "72px",
              }}

              className="overflow-hidden"
            >

              <p className="mt-8 text-black/50 leading-8 max-w-lg">
                {project.description}
              </p>

            </motion.div>

            {/* READ BUTTON */}
            <button
              onClick={() =>
                setExpandedIndex(
                  expandedIndex === i
                    ? null
                    : i
                )
              }

              className="
                mt-3

                text-xs
                uppercase
                tracking-[3px]

                text-black/35

                hover:text-black/60
                transition
              "
            >
              {expandedIndex === i
                ? "Show Less"
                : "Read Details"}
            </button>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-8">

              {project.tags.map((tag, idx) => (

                <motion.div
                  key={idx}

                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}

                  transition={{
                    duration: 0.2,
                  }}

                  className="
                    px-5 py-2.5
                    rounded-full

                    bg-white/55
                    backdrop-blur-xl

                    border border-white/40

                    shadow-[0_8px_30px_rgba(255,255,255,0.35)]

                    text-[10px]
                    md:text-xs

                    uppercase
                    tracking-[3px]

                    text-black/55

                    hover:bg-white/80
                    hover:text-black/70

                    transition-all duration-300
                  "
                >
                  {tag}
                </motion.div>

              ))}

            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-10 flex-wrap">

              {/* PREVIEW */}
              <a
                href={project.preview}
                target="_blank"

                className="
                  px-7 py-3
                  rounded-full

                  bg-black
                  text-white

                  text-xs
                  uppercase
                  tracking-[3px]

                  flex items-center gap-3

                  hover:scale-105
                  transition
                "
              >

                <span className="text-sm">

                  {project.previewType === "figma" && "🎨"}

                  {project.previewType === "github" && "💻"}

                  {project.previewType === "website" && "🌐"}

                </span>

                Preview

              </a>

              {/* DETAILS */}
              <button
                onClick={() =>
                  setExpandedIndex(
                    expandedIndex === i
                      ? null
                      : i
                  )
                }

                className="
                  px-7 py-3
                  rounded-full

                  bg-white/60
                  backdrop-blur-xl

                  border border-white/40

                  text-xs
                  uppercase
                  tracking-[3px]

                  hover:bg-white
                  transition
                "
              >
                {expandedIndex === i
                  ? "Close"
                  : "Details"}
              </button>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* EXPERIENCE */}
<section
  className="
    relative
    overflow-hidden
    py-32 md:py-40

    bg-gradient-to-b
    from-[#FAF7FF]
    via-[#FFFCFA]
    to-[#F7F4F0]
  "
>

  {/* NOISE */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  </div>

  {/* BG BLURS */}
  <motion.div

    animate={{
      y: [0, -25, 0],
      x: [0, 20, 0],
    }}

    transition={{
      repeat: Infinity,
      duration: 12,
    }}

    className="
      absolute
      top-[-180px]
      left-[-120px]
      w-[480px]
      h-[480px]
      rounded-full

      bg-gradient-to-br
      from-[#FFDCE8]
      via-[#FFF1D8]
      to-[#DCE8FF]

      opacity-35
      blur-[150px]
    "
  />

  <motion.div

    animate={{
      y: [0, 25, 0],
      x: [0, -20, 0],
    }}

    transition={{
      repeat: Infinity,
      duration: 14,
    }}

    className="
      absolute
      bottom-[-220px]
      right-[-120px]
      w-[520px]
      h-[520px]
      rounded-full

      bg-gradient-to-br
      from-[#DCE7FF]
      via-[#F7DFFF]
      to-[#FFE4EC]

      opacity-35
      blur-[160px]
    "
  />

  <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-white opacity-60 blur-[120px]" />

  {/* HUGE BG TYPO */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

    <motion.h1

      animate={{
        y: [0, -16, 0],
      }}

      transition={{
        repeat: Infinity,
        duration: 8,
      }}

      className="
        text-[90px]
        md:text-[240px]
        font-black
        tracking-[-14px]
        text-black/[0.03]
        whitespace-nowrap
      "
    >
      experience
    </motion.h1>

  </div>

  {/* FLOATING PARTICLES */}
  {[...Array(10)].map((_, i) => (

    <motion.div
      key={i}

      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.5, 0.2],
      }}

      transition={{
        repeat: Infinity,
        duration: 6 + i,
      }}

      className="absolute rounded-full bg-white"

      style={{
        width: `${6 + i * 2}px`,
        height: `${6 + i * 2}px`,
        left: `${8 + i * 9}%`,
        top: `${12 + (i % 4) * 18}%`,
        filter: "blur(2px)",
        opacity: 0.4,
      }}
    />

  ))}

  <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10">

    {/* TOP */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-24">

      <div>

        <p className="uppercase tracking-[5px] text-black/35 text-sm">
          Experience & Education
        </p>

        <h2 className="text-5xl md:text-7xl font-bold tracking-[-4px] mt-5 leading-[0.95]">
          building ideas
          <br />
          through experience.
        </h2>

      </div>

      <p className="max-w-md text-black/45 leading-8 text-sm md:text-right">
        Education, organizations, internship,
        and freelance collaborations shaping
        my creative and technical journey.
      </p>

    </div>

    {/* EXPERIENCE LIST */}
    <div className="space-y-14">

      {[
        {
          year: "2022 — 2026",
          title: "Universitas Sumatera Utara",
          role: "Bachelor Degree Computer Science",
          desc: "Studied at the Faculty of Computer Science and Information Technology, Universitas Sumatera Utara, with a focus on UI/UX design, frontend development, and digital product experiences. Graduating in 2026 while actively exploring creative technology and modern interface design.",
          logo: imgUSU,
        },

        {
          year: "2024",
          title: "Akademi Pariwista Paramitha Jakarta",
          role: "Freelance",
          desc: "Worked as a web developer while also creating promotional campaign content and national-day social media posts for the campus. Contributed to digital branding, visual communication, and frontend implementation.",
          logo: imgAkpar,
        },

        {
          year: "2024",
          title: "BEM Fasilkom-TI USU",
          role: "General Secretary",
          desc: "Managed organizational archives, meeting minutes, official documents, and correspondence including incoming and outgoing letters. Responsible for maintaining structured administration and supporting internal organizational operations.",
          logo: imgBEM,
        },

        {
          year: "2025",
          title: "PT. Bank Sumatera Utara",
          role: "Internship",
          desc: "Developed a tuition payment monitoring website displaying payment status, nominal details, and verification information. Also handled network inventory management and administrative data processing using Excel.",
          logo: imgBankSumut,
        },

 

      ].map((item, i) => (

        <motion.div
          key={i}

          initial={{
            opacity: 0,
            y: 60,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}

          transition={{
            duration: 0.8,
            delay: i * 0.08,
          }}

          whileHover={{
            y: -6,
          }}

          className="
            relative

            rounded-[40px]

            bg-white/40
            backdrop-blur-2xl

            border border-white/50

            shadow-[0_20px_60px_rgba(255,220,232,0.12)]

            overflow-hidden
          "
        >

          {/* INNER GLOW */}
          <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#FFDCE8]/40 to-[#DCE8FF]/30 blur-[80px]" />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12">

            {/* LEFT */}
            <div className="flex items-start gap-6 md:w-[320px] shrink-0">

              {/* LOGO */}
              <motion.div

                whileHover={{
                  rotate: -6,
                  scale: 1.05,
                }}

                className="
                  w-20 h-20
                  md:w-24 md:h-24

                  rounded-[28px]

                  bg-gradient-to-br
                  from-[#FFF7F2]
                  via-[#FDF7FF]
                  to-[#F4F8FF]

                  border border-white/60

                  shadow-[0_10px_30px_rgba(255,255,255,0.5)]

                  flex items-center justify-center

                  overflow-hidden
                "
              >

              <Image
                src={item.logo}
                alt={item.title}
                className="
                  relative z-10
                  w-10 h-10
                  md:w-12 md:h-12
                  object-contain
                  opacity-90
                "
              />

              </motion.div>

              <div>

                <p
                  className="
                    uppercase
                    tracking-[4px]
                    text-xs

                    bg-gradient-to-r
                    from-[#B18CFF]
                    to-[#E5A8C6]

                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.year}
                </p>

                <p className="mt-4 text-black/45 uppercase tracking-[3px] text-xs leading-6">
                  {item.role}
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex-1">

              <h3 className="text-3xl md:text-5xl font-bold tracking-[-3px] leading-[1]">
                {item.title}
              </h3>

              <p className="mt-6 max-w-2xl text-black/50 leading-8">
                {item.desc}
              </p>



            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* TOOLS */}
<section className="relative py-32 overflow-hidden bg-[#0F0F10] text-white">

  {/* NOISE */}
  <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
    <div
      className="w-full h-full"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  </div>

  {/* GRADIENT LIGHTS */}
  <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#7B8AB8] opacity-25 blur-[160px] rounded-full"></div>

  <div className="absolute bottom-[-220px] right-[-100px] w-[500px] h-[500px] bg-[#E39AB1] opacity-20 blur-[160px] rounded-full"></div>

  <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-[#F3C86A] opacity-10 blur-[120px] rounded-full"></div>

  <div className="relative z-10">

    {/* TITLE */}
    <div className="mb-24 text-center">

      <p className="uppercase tracking-[5px] text-white/40 text-sm">
        Tools & Technologies
      </p>

      <h2 className="text-5xl md:text-7xl font-bold tracking-[-4px] mt-4">
        what i use.
      </h2>

    </div>

    {/* ROW 1 */}
    <div className="overflow-hidden mb-10">

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}

        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}

        className="flex w-max gap-8"
      >

        {[...toolsTop, ...toolsTop, ...toolsTop].map((tool, i) => (

          <motion.div
            key={i}

            whileHover={{
              y: -12,
              scale: 1.05,
            }}

            className="
              w-[150px] h-[150px]
              rounded-[36px]
              bg-white/[0.04]
              backdrop-blur-2xl
              border border-white/10
              flex flex-col items-center justify-center
              shadow-[0_10px_40px_rgba(255,255,255,0.03)]
            "
          >

          <img
            src={
              typeof tool.icon === "string"
                ? tool.icon
                : tool.icon.src
            }
            alt={tool.name}
            className="w-16 h-16 object-contain"
          />

            <p className="mt-4 uppercase tracking-[3px] text-[11px] text-white/50">
              {tool.name}
            </p>

          </motion.div>

        ))}

      </motion.div>

    </div>

    {/* ROW 2 */}
    <div className="overflow-hidden">

      <motion.div
        animate={{
          x: ["-50%", "0%"],
        }}

        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}

        className="flex w-max gap-8"
      >

        {[...toolsBottom, ...toolsBottom, ...toolsBottom].map((tool, i) => (

          <motion.div
            key={i}

            whileHover={{
              y: -12,
              scale: 1.05,
            }}

            className="
              w-[150px] h-[150px]
              rounded-[36px]
              bg-white/[0.04]
              backdrop-blur-2xl
              border border-white/10
              flex flex-col items-center justify-center
              shadow-[0_10px_40px_rgba(255,255,255,0.03)]
            "
          >

            <img
              src={tool.icon}
              alt={tool.name}
              className="w-16 h-16 object-contain"
            />

            <p className="mt-4 uppercase tracking-[3px] text-[11px] text-white/50">
              {tool.name}
            </p>

          </motion.div>

        ))}

      </motion.div>

    </div>

  </div>

</section>

{/* FOOTER */}
<footer
  id="contact"
  className="relative px-8 md:px-16 py-40 overflow-hidden bg-gradient-to-b from-[#F8F8F8] to-[#F3EEE8]"
>

  {/* HUGE TYPO */}
  <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[120px] md:text-[280px] font-black tracking-[-14px] text-black/[0.03] pointer-events-none select-none leading-none">
    NIRMALA
  </h1>

  {/* BLURS */}
  <div className="absolute top-[-120px] right-[-100px] w-[420px] h-[420px] bg-[#E8DCFF] opacity-30 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-[-180px] left-[-100px] w-[420px] h-[420px] bg-[#FFDCCE] opacity-30 blur-[140px] rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    <div className="grid md:grid-cols-2 gap-24 items-end">

      {/* LEFT */}
      <div>

        <p className="uppercase tracking-[5px] text-black/35 text-sm mb-8">
          Let’s Connect
        </p>

        <h2 className="text-[60px] md:text-[120px] leading-[0.88] font-bold tracking-[-6px] text-black/90">
          let’s build
          <br />
          something
          <br />
          beautiful.
        </h2>

      </div>

      {/* RIGHT */}
      <div className="flex flex-col md:items-end gap-10">

        <p className="text-black/45 max-w-md leading-8 text-lg md:text-right">
          Open for collaborations, creative projects,
          and meaningful digital experiences.
        </p>

        {/* SOCIALS */}
        <div className="flex flex-wrap gap-4">

          <a
            href="https://instagram.com/niirmalaaa"
            target="_blank"
            className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-xl border border-black/5 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <FaInstagram className="text-[28px] text-black/70" />
          </a>

          <a
            href="https://www.linkedin.com/in/nirmala-aizya-agatha-silalahi-330626403/"
            target="_blank"
            className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-xl border border-black/5 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <FaLinkedinIn className="text-[24px] text-black/70" />
          </a>

          <a
            href="https://github.com/nirmalaaa"
            target="_blank"
            className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-xl border border-black/5 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <FaGithub className="text-[24px] text-black/70" />
          </a>

          <a
            href="mailto:nirmalasilalahi8@gmail.com"
            className="px-8 h-16 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition duration-300 text-xs tracking-[3px] uppercase"
          >
            Email Me
          </a>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="mt-28 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between gap-4 text-sm text-black/35">

      <p>
        © 2026 Nirmala Portfolio
      </p>

      <p>
        Designed & Developed by Nirmala
      </p>

    </div>

  </div>

</footer>

    </main>
  );
}