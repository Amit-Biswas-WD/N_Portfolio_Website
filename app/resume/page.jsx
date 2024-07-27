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
  return <div>Resume page</div>;
};

export default Resume;
