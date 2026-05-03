import { NavLink } from "react-router-dom";
function BrowseProject() {
  return (
    <NavLink
      to="/project"
      className="border tracking-wide border-black  py-2 px-4 shadow-sm text-black text-center font-semibold rounded rounded-2 hover:text-white  hover:bg-black transition-colors duration-300 ease-in-out"
    >
      Browse Projects
    </NavLink>
  );
}
export default BrowseProject;
