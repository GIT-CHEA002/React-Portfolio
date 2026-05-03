import { BsArrowUpRightCircle } from "react-icons/bs";
function ProjectCard({ project }) {
  return (
    <div>
      <div
        id="project-card-image"
        className="h-[280px] border rounded-3xl overflow-hidden "
      >
        <img
          src={project.image}
          alt="card1"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="project-card-details" className="mt-4">
        <div className="w-fit text-2xl font-bold flex items-center space-x-3 cursor-pointer group">
          <span className="group-hover:text-gray-700 transition-colors duration-300">
            {project.title}
          </span>
          <span className="group-hover:text-purple-700  text-purple-600 transition-colors duration-300 ">
            <BsArrowUpRightCircle className="text-xl" />
          </span>
        </div>
        <div className=" mt-4 text-xl font-semibold text-gray-600">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
