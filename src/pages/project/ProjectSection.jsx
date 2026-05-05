import ProjectCard from "../../components/ProjectCard";
function ProjectSection({ projects }) {
  return (
    <div className="relative" style={{ height: `${projects.length * 100}vh` }}>
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="sticky  top-20 h-screen bg-white flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
}
export default ProjectSection;
