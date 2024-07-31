"use client"

import DashBoardMobileNav from "@/components/DashBoardMobileNav";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import WorkInput from "./work/page";
import ServiceInput from "./services/page";
import ResumeInput from "./resume/page";



const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 ">
      <Tabs
        defaultValue="services"
        className="col-span-2 hidden xl:flex items-center gap-8"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="work">Work</TabsTrigger>
        </TabsList>
        <TabsContent value="resume" className="w-full">
        <ResumeInput/>
        </TabsContent>
        <TabsContent  value="services" className="w-full">
        <ServiceInput/>
        </TabsContent>
        <TabsContent value="work" className="w-full">
        <WorkInput/>
        </TabsContent>
      </Tabs>
        <div className="xl:hidden">
          <DashBoardMobileNav/>
        </div>
      </div>





    </div>
  );
};

export default Dashboard;
