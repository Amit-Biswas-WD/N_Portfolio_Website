"use client"

import {motion} from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const project = [
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
image: "/assets/work/image.png",
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
image: "/assets/work/image.png",
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
  {name: "Next JS"},
],
image: "/assets/work/image.png",
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
    {name: "Next JS"},
  ],
image: "/assets/work/image.png",
live: "",
github: "",
},
]




const Work = () => {
  return <div>Work page</div>;
};

export default Work;
