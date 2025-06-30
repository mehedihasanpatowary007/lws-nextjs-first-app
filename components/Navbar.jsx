import React from "react";
import CustomLink from "./CustomLink";

function Navbar() {
  return (
    <nav className="bg-red-400 py-3">
      <ul className="flex justify-around w-1/2">
        <li>
          <CustomLink path={"/"}>Home</CustomLink>
        </li>
        <li>
          <CustomLink path={"/products"}>Products</CustomLink>
        </li>
        <li>
          <CustomLink path={"/"}>Home</CustomLink>
        </li>
        <li>
          <CustomLink path={"/"}>Home</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
