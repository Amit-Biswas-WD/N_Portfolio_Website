"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const experience = [
  {
    title: "Experience",
    input: (
      <>
        <Input
          name="experience"
          className="w-full my-4"
          type="text"
          placeholder="Type experience"
        />
      </>
    ),
    description: <Textarea
    name="experienceText"
    className="h-[200px] my-4"
    placeholder="Type your message here."
  />
  },
];


const experiences = {
  title: "My experience",
  description:
    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
  items: [
    {
      company: "Learning",
      position: "Front-end Web Developer / MERN Stack Developer",
      duration: "2023 - present",
    },
    {
      company: "Programming Hero",
      position: "Front-end Web Developer / MERN Stack Developer Course",
      duration: "2023-12-20 - present",
    },
  ],
};


const education = [
  {
    title: "Education",
    input: (
      <>
        <Input
          name="education"
          className="w-full my-4"
          type="text"
          placeholder="Type education"
        />
      </>
    ),
    description: <Textarea
    name="educationText"
    className="h-[200px] my-4"
    placeholder="Type your message here."
  />
  },
];

const skills = [
  {
    title: "Skills",
    input: (
      <>
        <Input
          name="skills"
          className="w-full my-4"
          type="text"
          placeholder="Type skills"
        />
      </>
    ),
    description: <Textarea
    name="skillsText"
    className="h-[200px] my-4"
    placeholder="Type your message here."
  />
  },
];

const about = [
  {
    title: "About",
    input: (
      <>
        <Input
          name="about"
          className="w-full my-4"
          type="text"
          placeholder="Type about"
        />
      </>
    ),
    description:  <Textarea
    name="aboutText"
    className="h-[200px] my-4"
    placeholder="Type your message here."
  />
  },
];

const ResumeInput = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        {about.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <h2>{item.input}</h2>
            {item.description}
          </div>
        ))}
        {skills.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <h2>{item.input}</h2>
            {item.description}
          </div>
        ))}
        {education.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <h2>{item.input}</h2>
            {item.description}
          </div>
        ))}
        {experience.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <h2>{item.input}</h2>
            {item.description}
          </div>
        ))}
        <Button size="md" type="submit" className="max-w-40 my-4">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ResumeInput;
