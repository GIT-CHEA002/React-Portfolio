import { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
function Header() {
  const [mobileMenu, setMobileMenu] = useState(false); // for toggle mobile menu
  const navLinkClass = ({ isActive }) =>
    `font-bold text-gray-500 text-md  hover:text-purple-700  transition-colors ease-in-out first-letter:text-lg duration-400 ${
      isActive ? "text-purple-700" : ""
    }`;
  const sidebarNavLinkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 text-base font-medium hover:bg-purple-500 hover:text-white transition-colors duration-300 ease-in-out ${isActive ? "bg-purple-500 text-white" : "text-gray-400"}`;
  return (
    <>
      <title>Home Page</title>
      <nav className="fixed top-0 left-0 w-full z-50  bg-white  ">
        <DesktopMenu
          navLinkClass={navLinkClass}
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
        <MobileMenu
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          sidebarNavLinkClass={sidebarNavLinkClass}
        />
      </nav>
    </>
  );
}
export default Header;
