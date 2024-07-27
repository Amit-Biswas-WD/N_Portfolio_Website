"use client";

import {
  FaHtml5,
  FaCss,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
  info: [
    { fieldName: "Name", FieldValue: "Amit Biswas" },
    { fieldName: "Phone", FieldValue: "+88 01883478528" },
    { fieldName: "Experience", FieldValue: "1+ Years" },
    { fieldName: "Nationality", FieldValue: "Bangladeshi" },
    { fieldName: "Email", FieldValue: "amitbiswas9282@gmail.com" },
    { fieldName: "Web Development", FieldValue: "Available" },
    { fieldName: "Language", FieldValue: "English, Bangla" },
  ],
};

const experience = {
  icon: "/",
  title: "My experience",
  description:
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
  items: [
    {
      company: "",
      position: "Front-end Web Developer / MERN Stack Developer",
      duration: "2023 - present",
    },
  ],
};

const education = {
  icon: "/",
  title: "My Education",
  description:
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
  items: [
    {
      institution: "Nation University",
      dergee: "Bachelors in Arts",
      duration: "2024 - present",
    },
    {
      institution: "Programming Hero",
      dergee: "Front-end Web Developer / MERN Stack Developer",
      duration: "2023/12/26 - 2024/06/30",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <FaFigma />,
      name: "Fima",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDB",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
