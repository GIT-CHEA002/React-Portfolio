import { NavLink } from "react-router-dom";
function GetInTouch() {
  return (
    <NavLink
      to="/contact"
      className="border tracking-wide py-2 px-4 shadow-sm bg-purple-700 text-white text-center font-semibold rounded rounded-2 hover:bg-purple-500  transition-colors duration-300 ease-in-out"
    >
      Get In Touch
    </NavLink>
  );
}
export default GetInTouch;
