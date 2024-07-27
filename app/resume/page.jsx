"use client";

import {
  FaHtml5,
  FaCss,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

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

const Resume = () => {
  return <div>Resume page</div>;
};

export default Resume;
