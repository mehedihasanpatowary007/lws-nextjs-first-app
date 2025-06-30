import Link from "next/link";
import React from "react";

function DashboardNav() {
  return (
    <nav className="bg-gray-800 py-5 h-full">
      <ul className="flex flex-col gap-5">
        <li className="bg-gray-300 w-full text-center">
          <Link href={"/dashboard/analytics"}>Analytics</Link>
        </li>
        <li className="bg-gray-300 w-full text-center">
          <Link href={"/dashboard/settings"}>Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNav;
