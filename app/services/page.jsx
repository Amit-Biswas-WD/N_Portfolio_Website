"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const service = [
  {
    num: "01",
    title: "Front-end Web Development",
    description:
      "One year front-end web development experience. Proficient in HTML, CSS, JavaScript. Proficient in using React framework. Experienced in developing responsive and interactive web applications.",
    href: "/Front-end-web-development",
  },
  {
    num: "02",
    title: "Back-end Web Development",
    description:
      "One year back-end web development experience. Node.js, Skills Gained. Proficient in database (MongoDB). Experienced in designing and implementing RESTful APIs.",
    href: "/back-end-web-development",
  },
  {
    num: "03",
    title: "MERN Stack Development",
    description:
      "One year of MERN stack web development experience. Proficient in React, Node.js, Express, MongoDB. Proficient in full stack web application development.",
    href: "/mern",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-[60px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {service.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-semibold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b text-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
