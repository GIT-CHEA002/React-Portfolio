import { NavLink } from "react-router-dom";
function WelcomeText() {
  return (
    <div className="h-full flex items-center">
      <div className="md:text-start ">
        <h1 className="text-2xl text-gray-600 font-semibold text-center md:text-start">
          Hey, I'm Sokchea 👋🏻
        </h1>
        <div className=" space-y-4 lg:space-y-6 ">
          <h1 className=" text-4xl md:text-8xl font-bold text-wrap text-center md:text-start">
            <span className="text-purple-700/90">Front</span>End Developer
          </h1>
          <p className="text-xl md:text-2xl text-center md:text-start font-semibold text-gray-600">
            I'm a frontend developer based in Italy, I'll help you build
            beautiful websites your users will love.
          </p>
        </div>
        <div className="mt-5 space-x-7 text-center lg:text-start">
          <NavLink
            to="/contact"
            className="border py-2 px-4 shadow-sm bg-purple-700 text-white text-center font-semibold rounded rounded-2 hover:bg-purple-500  transition-colors duration-300"
          >
            <span className=" tracking-wide ">Get In Touch</span>
          </NavLink>
          <NavLink
            to="/project"
            className="border border-black  py-2 px-4 shadow-sm text-black text-center font-semibold rounded rounded-2 hover:text-white  hover:bg-black transition-colors duration-300"
          >
            <span className="tracking-wide">Browse Projects</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default WelcomeText;
