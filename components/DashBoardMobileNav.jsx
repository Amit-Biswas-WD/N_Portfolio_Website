"use client";

import {
  SheetContent,
  SheetTrigger,
  DashboardSheet,
} from "@/components/ui/dashboardsheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";


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

const DashBoardMobileNav = () => {
  const pathName = usePathname();

  return (
    <DashboardSheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <div key={index}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathName &&
                    "text-accent border-b-2 border-accent"
                  } capitalize font-medium hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>
      </SheetContent>
    </DashboardSheet>
  );
};

export default DashBoardMobileNav;
