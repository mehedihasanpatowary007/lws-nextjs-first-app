"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/", id: 1 },
    { name: "Services", path: "/services", id: 2 },
    { name: "About", path: "/about", id: 3 },
    { name: "Contact", path: "/contact", id: 4 },
    { name: "Products", path: "/products", id:5 },
  ];
  const pathname = usePathname();
  if (!pathname.includes("dashboard")) {
    return (
      <nav className="bg-red-400 py-3">
        <ul className="flex justify-around w-1/2">
         {
          navItems.map((item) =>{
            return (
              <Link className={`${pathname === item.path ? "text-violet-500 font-bold" : ""}`} key={item?.id} href={item?.path}>{item?.name}</Link>
            )
          })
         }
        </ul>
      </nav>
    );
  } else {
    return <></>;
  }
}

export default Navbar;
