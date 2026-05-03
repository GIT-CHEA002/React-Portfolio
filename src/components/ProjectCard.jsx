import { BsArrowUpRightCircle } from "react-icons/bs";
import { useLocation } from "react-router-dom";

function ProjectCard({ project }) {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div className={`${currentPage === "/project" ? "h-[90vh] w-full" : ""}`}>
      <div
        className={`border rounded-3xl overflow-hidden h-[290px] ${currentPage === "/project" ? " h-[300px] lg:h-[400px]" : "h-[290px]"}`}
      >
        <img
          src={project.image}
          alt="card1"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="project-card-details" className="mt-4">
        {currentPage === "/" ? (
          <div className="w-fit text-2xl font-bold flex items-center space-x-3 cursor-pointer group">
            <span className="group-hover:text-gray-700 transition-colors duration-300">
              {project.title}
            </span>
            <span className="group-hover:text-purple-700  text-purple-600 transition-colors duration-300 ">
              <BsArrowUpRightCircle className="text-xl" />
            </span>
          </div>
        ) : (
          <h1 className=" text-4xl text-center lg:text-start lg:text-5xl font-bold text-black">
            {project.title}
          </h1>
        )}

        <div className=" mt-4 text-xl font-semibold text-gray-600">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
