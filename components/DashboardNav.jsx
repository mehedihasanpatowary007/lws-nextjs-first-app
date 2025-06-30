import CustomLink from "./CustomLink";

function DashboardNav() {
  return (
    <nav className="bg-gray-800 py-5 h-full">
      <ul className="flex flex-col gap-5">
        <li className="bg-gray-300 w-full text-center">
          <CustomLink path={"/dashboard/analytics"}>Analytics</CustomLink>
        </li>
        <li className="bg-gray-300 w-full text-center">
          <CustomLink path={"/dashboard/settings"}>Settings</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNav;
