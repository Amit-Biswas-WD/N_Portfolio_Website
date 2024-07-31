"use client"

import DashboardInputField from "@/components/DashboardInputField";
import DashBoardMobileNav from "@/components/DashBoardMobileNav";
import DashboardNav from "@/components/DashboardNav";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2 hidden xl:flex items-center gap-8">
          <DashboardNav/>
        </div>
        <div className="xl:hidden">
          <DashBoardMobileNav/>
        </div>
        <div className="col-span-4">
          <DashboardInputField/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
