"use client";

import CountUp from "react-countup";

const stats = [
  { num: 12, text: "Year of Experience" },
  { num: 26, text: "Project of Completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 500, text: "Code Commits" },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 justify-center items-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-semibold"
                />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
