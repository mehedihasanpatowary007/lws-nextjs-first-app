"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function CustomLink({ path, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={pathname === path ? "text-violet-500 font-bold" : ""}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
