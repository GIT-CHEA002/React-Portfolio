import { FaX } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function MobileMenu({ mobileMenu, setMobileMenu, sidebarNavLinkClass }) {
  return (
    <div
      className={`fixed top-0  right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-500 flex flex-col justify-between  ${
        mobileMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <div className="px-5 pt-4 pb-3 justify-between flex">
          <h1 className="px-3 text-2xl underline text-purple-700  ">Sidebar</h1>
          <button
            type="button"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
            className="px-3"
          >
            <FaX className=" hover:text-purple-700" />
          </button>
        </div>
        <div className="space-y-1 px-5 pt-2 pb-3">
          <NavLink to="/" className={sidebarNavLinkClass}>
            Profiles
          </NavLink>
          <NavLink to="/contact" className={sidebarNavLinkClass}>
            Contacts
          </NavLink>
          <NavLink to="/project" className={sidebarNavLinkClass}>
            Project
          </NavLink>
          <NavLink
            to="/about"
            aria-current="page"
            className={sidebarNavLinkClass}
          >
            About
          </NavLink>
        </div>
      </div>
      {/* descript */}
      <div className="px-5 py-4 space-y-3">
        <NavLink
          to="/contact"
          className="border block  py-2 px-2 bg-purple-700 text-white text-center font-semibold rounded rounded-2 hover:bg-purple-500  transition-colors duration-300"
        >
          <span>Get In Touch</span>
        </NavLink>
        <NavLink
          to="/project"
          className="border border-black block py-2 px-2 text-black text-center font-semibold rounded rounded-2 hover:text-white  hover:bg-black transition-colors duration-300"
        >
          <span>Projects</span>
        </NavLink>
      </div>
    </div>
  );
}
export default MobileMenu;
