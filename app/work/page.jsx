"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import image1 from "@/public/assets/work/image.png";
import image2 from "@/public/assets/work/image2.png";
import solarEase from "@/public/assets/work/solarease.png";
import harMoney from "@/public/assets/work/harmoney.png";
import fishingtripper from "@/public/assets/work/fishingtripper.png";
import havanacitycigar from "@/public/assets/work/havanacitycigar.png";
import protfolio from "@/public/assets/work/protfolio.png";
import WorkSliderBtn from "@/components/WorkSliderBtn";
import motionImage from "@/app/image/image.png";

{
  /* project*/
}
const projects = [
  {
    num: "01",
    category: "Brew Bite",
    title: "Brew Bite",
    description:
      "Built a full-stack coffee ordering platform with secure authentication and a personalized dashboard. Users can browse, filter, and manage orders with full CRUD functionality. Developed using React, Tailwind CSS, Node.js, Express, MongoDB, and Firebase.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Node JS" },
      { name: "Express JS" },
      { name: "Mongodb" },
    ],
    image: image1,
    live: "https://history-client-side-66e3d.web.app",
    frontend_github:
      "https://github.com/Amit-Biswas-WD/brewbite-client-side.git",
    backend_github:
      "https://github.com/Amit-Biswas-WD/brewbite-server-side.git",
  },

  {
    num: "02",
    category: "Harmony Suites",
    title: "Harmony Suites",
    description:
      "Developed a responsive hotel listing and booking interface where users can view room details and manage their own added rooms. Implemented secure authentication and user‑specific data control, enabling logged‑in users to add, update, and delete their room entries. Built with React, Tailwind CSS, Node.js, Express, and MongoDB.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Node JS" },
      { name: "Express JS" },
      { name: "Mongodb" },
    ],
    image: harMoney,
    live: "https://zippy-sawine-294126.netlify.app",
    frontend_github: "https://github.com/Amit-Biswas-WD/b9a11-client-side.git",
    backend_github: "https://github.com/Amit-Biswas-WD/b9a11-server-side.git",
  },

  {
    num: "03",
    category: "Apple Gadgets",
    title: "Apple Gadgets",
    description:
      "Developed a responsive e‑commerce product showcase website using Next.js featuring product categories, featured items, new arrivals, and brand sections. Designed with modern UI components and fully responsive layout.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Next JS" },
    ],
    image: image2,
    live: "https://clent-side-apple-gadgets.vercel.app",
    frontend_github:
      "https://github.com/Amit-Biswas-WD/Clent_Side_Apple_Gadgets.git",
    backend_github: "",
  },

  {
    num: "04",
    category: "Solar Ease",
    title: "Solar Ease",
    description:
      "Developed a modern, responsive solar energy landing page using Next.js, featuring service highlights, benefits, and informational sections. Designed with a clean UI and optimized for SEO and cross‑device responsiveness.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Next JS" },
    ],
    image: solarEase,
    live: "https://solarease-frontend-anik.vercel.app",
    frontend_github: "https://github.com/Amit-Biswas-WD/solarease",
    backend_github: "",
  },

  {
    num: "05",
    category: "Troyable",
    title: "Troyable",
    description:
      "Developed a modern landing page using Next.js and Framer Motion to deliver smooth animations and interactive UI. Featuring responsive layout, dynamic transitions, and showcase‑style design elements.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Next JS" },
      { name: "Motion" },
    ],
    image: motionImage,
    live: "https://troyable-motion.vercel.app",
    frontend_github: "https://github.com/Amit-Biswas-WD/troyable_motion.git",
    backend_github: "",
  },

  {
    num: "06",
    category: "Fishing Tripper",
    title: "Fishing Tripper",
    description:
      "Built a responsive fishing trip booking and information site using Next.js and React featuring trip listings, contact/inquiry form, and a clean user‑friendly layout.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Next JS" },
    ],
    image: fishingtripper,
    live: "https://fishingtripper.com",
    frontend_github: "https://github.com/Amit-Biswas-WD/fishing_tripper",
    backend_github: "",
  },

  {
    num: "07",
    category: "Havana City Cigar",
    title: "Havana City Cigar",
    description:
      "Developed a responsive cigar e‑commerce platform featuring categorized product listings, shopping cart integration, and membership offerings for premium experiences. Built with a focus on showcasing diverse cigar collections and value‑added services.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
      { name: "React JS" },
    ],
    image: havanacitycigar,
    live: "https://havanacitycigar.com",
    frontend_github: "https://github.com/Amit-Biswas-WD/havanacitycigar_azoz",
    backend_github: "",
  },

  {
    num: "08",
    category: "Folio Portfolio",
    title: "Folio Portfolio",
    description:
      "Developed a personal portfolio website using Next.js and React to showcase projects, skills, services, and contact information with a clean, responsive UI design.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind Css" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Next JS" },
    ],
    image: protfolio,
    live: "https://folio-protfolio.vercel.app",
    frontend_github: "https://github.com/Amit-Biswas-WD/Folio-protfolio",
    backend_github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col w-full xl:flex-row xl:gap-[30px] group">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[32px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline group">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20">
                <div className="flex item-center gap-6">
                  {/* live link */}
                  <Link target="_blank" href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Link Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/*github link  */}
                  {project?.frontend_github ? (
                    <Link target="_blank" href={project.frontend_github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent " />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Front-end Github Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  ) : null}

                  {project?.backend_github ? (
                    <Link target="_blank" href={project.backend_github}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent " />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Back-end Github Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt=""
                          className="max-w-full h-auto object-cover"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*  */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc-(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
