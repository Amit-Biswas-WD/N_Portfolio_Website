"use client";

import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia autem cum!",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia autem cum!",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia autem cum!",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia autem cum!",
  },
];

import { motion } from "framer-motion";
import Link from "next/link";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <div>{services.num}</div>
                  <Link href={services.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{item.title}</h2>
                <p></p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
