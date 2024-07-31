"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";


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
  return (
    <div className="grid grid-cols-6 gap-4">
    <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          DFGDGAFTGAERT
        </TabsContent>
        <TabsContent value="education" className="w-full">
          Education content here
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          Skills content here
        </TabsContent>
        <TabsContent value="about" className="w-full text-center xl:text-start">
          About me content here
        </TabsContent>
      </Tabs>
      </div >

  );
};

export default DashboardNav