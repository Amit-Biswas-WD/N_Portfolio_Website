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
import WorkSliderBtn from "@/components/WorkSliderBtn";
import motionImage from "@/app/image/image.png";

const projects = [
  // {
  //   num: '01',
  //   category: "font-end",
  //   title: "project 1",
  //   description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
  // stack: [
  //   {name: "HTML 5"},
  //   {name: "CSS 3"},
  //   {name: "TailwindCss"},
  //   {name: "JavaScript"},
  // ],
  // image: image1,
  // live: "",
  // github: "",
  // },
  // {
  //   num: '02',
  //   category: "font-end",
  //   title: "project 2",
  //   description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
  // stack: [
  //   {name: "HTML 5"},
  //   {name: "CSS 3"},
  //   {name: "TailwindCss"},
  //   {name: "JavaScript"},
  // ],
  // image: image1,
  // live: "",
  // github: "",
  // },
  {
    num: "01",
    category: "Full Stack",
    title: "project 1",
    description:
      "Built a fully responsive full-stack coffee ordering platform where users can browse coffee items by category, price (high to low / low to high), rating (high to low / low to high), and call data. Integrated secure user authentication with Firebase, allowing logged-in users to access a personalized dashboard. Authenticated users can add, update, and delete their own orders. The frontend is built with React.js and styled using Tailwind CSS, while the backend is powered by Node.js, Express.js, and MongoDB.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "TailwindCss" },
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
    category: "Full Stack",
    title: "project 2",
    description:
      "My website is hotel-related and user-friendly. Users can click on a room image on the Room Page to navigate to the Details Page. On the Details Page, users can click the Add button, which redirects them to the Login Page if they are not logged in. After logging in and adding a room, the user can update or delete their added card if they wish.The added information is linked to the user's email, ensuring only the respective user can manage their own data.",
    stack: [
       { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "TailwindCss" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Node JS" },
      { name: "Express JS" },
      { name: "Mongodb" },
    ],
    image: harMoney,
    live: "https://zippy-sawine-294126.netlify.app",
    frontend_github:
      "https://github.com/Amit-Biswas-WD/b9a11-client-side.git",
    backend_github: "https://github.com/Amit-Biswas-WD/b9a11-server-side.git",
  },
  {
    num: "03",
    category: "Apple Gadgets",
    title: "project 3",
    description:
      "Apple Gadgets This is an e-commerce website built using Next.js. I have completed the Home page, which includes the Category section, Featured Products, New Arrivals, and Top Brand Products. It also features brand logos, a description section, and a footer. The website is fully responsive across all devices.",
    stack: [
       { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "TailwindCss" },
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
    category: "Troyable",
    title: "project 4",
    description:
      "Troyable is a modern web application. This project has a responsive and SEO friendly homepage designed using React.js, Next.js, Tailwind.css and Motion",
    stack: [
       { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "TailwindCss" },
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
    num: "05",
    category: "Solar Ease",
    title: "project 5",
    description:
      "SolarEase is a modern web application based on solar energy. This project has a responsive and SEO friendly homepage designed using React.js and Next.js.",
    stack: [
       { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "TailwindCss" },
      { name: "JavaScript" },
      { name: "React JS" },
      { name: "Next JS" },
    ],
    image: solarEase,
    live: "https://solarease-frontend-anik.vercel.app",
    frontend_github: "https://github.com/Amit-Biswas-WD/solarease",
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
