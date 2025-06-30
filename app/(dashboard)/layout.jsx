import DashboardNav from "@/components/DashboardNav";
import React from "react";

function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-3 h-full">
        <DashboardNav />
      </div>
      <div className="col-span-9 bg-gray-500 p-4">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
