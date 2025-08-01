import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import SideBarLayout from "./SideBarLayout";

const DashBoardLayout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-24 shadow-md flex-shrink-0">
          <SideBarLayout />
        </aside>
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
