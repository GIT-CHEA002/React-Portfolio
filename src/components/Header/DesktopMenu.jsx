import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrContact } from "react-icons/gr";

function DesktopMenu({ navLinkClass, setMobileMenu, mobileMenu }) {
  return (
    <div className="mx-auto w-full h-auto px-4 sm:px-6 md:px-24 py-3 ">
      <div className="flex items-center justify-between ">
        <div className="h-[50px] w-[50px] flex items-center">
          <div className=" text-3xl font-bold text-black  ">
            <NavLink to="/">
              SokchEA
              <span className="text-purple-700">.</span>
            </NavLink>
          </div>
        </div>
        {/* link */}
        <div className=" hidden md:flex">
          <ul className="flex gap-4 ">
            <NavLink to="/" end className={navLinkClass}>
              PROFILES
            </NavLink>
            <NavLink to="/project" className={navLinkClass}>
              PROJECT
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              ABOUT
            </NavLink>
          </ul>
        </div>
        <div className=" text-2xl hidden md:block">
          <NavLink to="/contact">
            <GrContact className="hover:text-purple-700" />
          </NavLink>
        </div>
        <button
          type="button"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
          className="md:hidden block"
        >
          <FaBars className=" hover:text-purple-700" />
        </button>
      </div>
    </div>
  );
}
export default DesktopMenu;
