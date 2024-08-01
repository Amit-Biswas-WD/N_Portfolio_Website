import DashBoardMobileNav from "@/components/DashBoardMobileNav";
import DashBoardDesktopNav from "@/components/DashBoardDesktopNav";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-4">
        <div className="col-span-1 xl:col-span-2">
          <div className="xl:hidden">
            <DashBoardMobileNav />
          </div>
          <div className="hidden xl:block">
            <DashBoardDesktopNav/>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
