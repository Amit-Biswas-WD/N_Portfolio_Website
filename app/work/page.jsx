"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import image1 from "@/public/assets/work/image.png";
import image2 from "@/public/assets/work/image2.jpg";
import image3 from "@/public/assets/work/images3.png";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
{
  num: '01',
  category: "font-end",
  title: "project 1",
  description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
stack: [
  {name: "HTML 5"},
  {name: "CSS 3"},
  {name: "TailwindCss"},
  {name: "JavaScript"},
],
image: image1,
live: "",
github: "",
},
{
  num: '02',
  category: "font-end",
  title: "project 2",
  description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
stack: [
  {name: "HTML 5"},
  {name: "CSS 3"},
  {name: "TailwindCss"},
  {name: "JavaScript"},
],
image: image1,
live: "",
github: "",
},
{
  num: '03',
  category: "Full Stack",
  title: "project 3",
  description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
stack: [
  {name: "HTML 5"},
  {name: "CSS 3"},
  {name: "TailwindCss"},
  {name: "JavaScript"},
  {name: "React JS"},
  {name: "Node JS"},
  {name: "Express"},
  {name: "Mongodb"},
],
image: image2,
live: "",
github: "",
},
{
  num: '04',
  category: "Full Stack",
  title: "project 4",
  description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
  stack: [
    {name: "HTML 5"},
    {name: "CSS 3"},
    {name: "TailwindCss"},
    {name: "JavaScript"},
    {name: "React JS"},
    {name: "Node JS"},
    {name: "Express"},
    {name: "Mongodb"},
  ],
image: image3,
live: "",
github: "",
},
]




const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return <motion.section initial={{opacity: 0}}  animate={{
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
  }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <div className="flex flex-col w-full xl:flex-row xl:gap-[30px] group">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
         <div className="flex flex-col gap-[32px]">
         <div className="text-8xl leading-none font-extrabold text-transparent text-outline group">{project.num}</div>
         <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
         <p className="text-white/60">{project.description}</p>
         <ul className="flex gap-4">
          {project.stack.map((item, index) => {
            return (
              <li key={index} className="text-lg text-accent">{item.name}
              {index !== project.stack.length - 1 && ','}
              </li>
            )
          })}
         </ul>
         <div className="border border-white/20">
          <div className="flex item-center gap-4">
            {/* live link */}
            <Link href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                  <BsArrowUpRight className="text-white text-3xl group-hover:text-accent "/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Link Project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>
            {/*github link  */}
            <Link href={project.github}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                  <BsGithub className="text-white text-3xl group-hover:text-accent "/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github Repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>
          </div>
         </div>
         </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full"></div>
                    <div className="relative w-full h-full"><Image src={project.image} fill alt="" className="object-cover"></Image></div>
                  </div>
                </SwiperSlide>
              )
            })}
            {/*  */}
            <WorkSliderBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc-(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-44px] flex justify-center items-center transition-all"/>
          </Swiper>
        </div>
      </div>
    </div>
</motion.section>;
};

export default Work;
