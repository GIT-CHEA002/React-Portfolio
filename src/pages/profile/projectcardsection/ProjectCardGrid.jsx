import ProjectCard from "./ProjectCard";
import { Fragment } from "react";
function ProjectCardGrid({ projects }) {
  return (
    <Fragment>
      {projects &&
        projects.map((project, i) => {
          if (i % 2 !== 0) return null;
          const isEvenRow = Math.floor(i / 2) % 2 === 0;
          const nextProject = projects[i + 1];
          return (
            <div
              key={i}
              // className="grid grid-cols-1 h-[500px] mt-10 gap-12  justify-around odd:lg:grid-cols-[40%_60%] even:lg:grid-cols-[60%_40%]"
              className={`grid grid-cols-1 gap-12 ${
                isEvenRow ? "lg:grid-cols-[2fr_3fr]" : "lg:grid-cols-[3fr_2fr] "
              }`}
            >
              {/* card 1 */}
              <ProjectCard project={project} />
              {nextProject && <ProjectCard project={nextProject} />}
            </div>
          );
        })}
    </Fragment>
  );
}
export default ProjectCardGrid;
