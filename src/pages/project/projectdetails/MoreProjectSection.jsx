import LeadingTitle from "../../../components/LeadingTitle";
import ProjectCard from "../../../components/ProjectCard";

function MoreProjectSection({ moreProject }) {
  return (
    <>
      <LeadingTitle text={"More Projects"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {moreProject &&
          moreProject.map((project, index) => {
            return (
              <ProjectCard key={index} project={project} isDetailPage={true} />
            );
          })}
      </div>
    </>
  );
}
export default MoreProjectSection;
