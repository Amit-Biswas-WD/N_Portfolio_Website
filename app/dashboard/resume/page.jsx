"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const experience = [
  {
    title: "Experience",
    items: [
      {
        company: (
          <Input
            name="company"
            className="w-full my-4"
            type="text"
            placeholder="Type company"
          />
        ),
        position: (
          <Input
            name="position"
            className="w-full my-4"
            type="text"
            placeholder="Type position"
          />
        ),
        duration: (
          <Input
            name="duration"
            className="w-full my-4"
            type="text"
            placeholder="Type duration"
          />
        ),
      },
    ],
    description: (
      <Textarea
        name="experienceText"
        className="h-[200px] my-4"
        placeholder="Type your message here."
      />
    ),
  },
];

const education = [
  {
    title: "Education",
    list: [
      {
        institution: (
          <Input
            name="institution"
            className="w-full my-4"
            type="text"
            placeholder="Type institution"
          />
        ),
        degree: (
          <Input
            name="degree"
            className="w-full my-4"
            type="text"
            placeholder="Type degree"
          />
        ),
        duration: (
          <Input
            name="duration"
            className="w-full my-4"
            type="text"
            placeholder="Type duration"
          />
        ),
      },
    ],
    description: (
      <Textarea
        name="educationText"
        className="h-[200px] my-4"
        placeholder="Type your message here."
      />
    ),
  },
];

const skills = [
  {
    title: "My Skills",
    skillList: [
      {
        icon: (
          <Input
            name="icon"
            className="w-full my-4"
            type="text"
            placeholder="Type icon"
          />
        ),
        name: (
          <Input
            name="name"
            className="w-full my-4"
            type="text"
            placeholder="Type name"
          />
        ),
      },
    ],
    description: (
      <Textarea
        name="skillsText"
        className="h-[200px] my-4"
        placeholder="Type your message here."
      />
    ),
  },
];

const about = [
  {
    title: "About",
    info: [
      {
        name: (
          <Input
            name="name"
            className="w-full my-4"
            type="text"
            placeholder="Type name"
          />
        ),
        phone: (
          <Input
            name="phone"
            className="w-full my-4"
            type="text"
            placeholder="Type phone"
          />
        ),
        experience: (
          <Input
            name="experience"
            className="w-full my-4"
            type="text"
            placeholder="Type experience"
          />
        ),
        nationality: (
          <Input
            name="nationality"
            className="w-full my-4"
            type="text"
            placeholder="Type nationality"
          />
        ),
        email: (
          <Input
            name="email"
            className="w-full my-4"
            type="text"
            placeholder="Type email"
          />
        ),
        language: (
          <Input
            name="language"
            className="w-full my-4"
            type="text"
            placeholder="Type language"
          />
        ),
        webdev: (
          <Input
            name="webdev"
            className="w-full my-4"
            type="text"
            placeholder="Type Web Development"
          />
        ),
      },
    ],
    description: (
      <Textarea
        name="aboutText"
        className="h-[200px] my-4"
        placeholder="Type your message here."
      />
    ),
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
        {experience.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            {item.items.map((subItem, subIndex) => (
              <div key={subIndex}>
                {subItem.company}
                {subItem.position}
                {subItem.duration}
              </div>
            ))}
            {item.description}
          </div>
        ))}
        <Button size="md" type="submit" className="max-w-40 my-4">
          Submit
        </Button>
      </form>
      <form onSubmit={handleSubmit}>
        {education.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            {item.list.map((subItem, subIndex) => (
              <div key={subIndex}>
                {subItem.institution}
                {subItem.degree}
                {subItem.duration}
              </div>
            ))}
            {item.description}
          </div>
        ))}
        <Button size="md" type="submit" className="max-w-40 my-4">
          Submit
        </Button>
      </form>
      <form onSubmit={handleSubmit}>
        {skills.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            {item.skillList.map((subItem, subIndex) => (
              <div key={subIndex}>
                {subItem.icon}
                {subItem.name}
              </div>
            ))}
            {item.description}
          </div>
        ))}
        <Button size="md" type="submit" className="max-w-40 my-4">
          Submit
        </Button>
      </form>
      <form onSubmit={handleSubmit}>
        {about.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            {item.info.map((subItem, subIndex) => (
              <div key={subIndex}>
                {subItem.name}
                {subItem.phone}
                {subItem.experience}
                {subItem.nationality}
                {subItem.email}
                {subItem.language}
                {subItem.webdev}
              </div>
            ))}
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
