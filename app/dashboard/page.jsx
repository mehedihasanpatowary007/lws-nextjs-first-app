import React from "react";

function DashboardPage() {
  return (
    <div className="text-4xl font-bold italic text-gray-600 flex justify-center items-center w-full h-full">
      WEll COME TO DASHBOARD
    </div>
  );
}

export default DashboardPage;

export function generateMetadata() {
  return {
    title: "Dashboard",
    description: "This is Dashboard page",
  };
}
