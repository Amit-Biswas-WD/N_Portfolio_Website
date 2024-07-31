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
    },
    {
      name: "work",
      path: "/dashboard/work",
    },
  ];

const DashboardNav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex flex-col gap-6">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default DashboardNav