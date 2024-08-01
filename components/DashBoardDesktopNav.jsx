"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "services",
    path: "/dashboard/services",
  },
  {
    name: "resume",
    path: "/dashboard/resume",
    option: [
      { title: "Experience" },
      { title: "Education" },
      { title: "Skills" },
      { title: "About Me" },
    ],
  },
  {
    name: "work",
    path: "/dashboard/work",
  },
];

const DashBoardDesktopNav = () => {
  const pathName = usePathname();

  return (
      <div className="flex flex-col">
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <div key={index}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathName &&
                    "text-accent border-b-2 border-accent"
                  }  capitalize font-medium hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
  );
};

export default DashBoardDesktopNav;
