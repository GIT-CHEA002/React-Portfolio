import LeadingTitle from "../../../components/LeadingTitle";

function ProjectHeadingTitle({ projectDisplay }) {
  return (
    <div className="relative py-12">
      <LeadingTitle text={projectDisplay.title} />
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <h1 className="text-2xl text-gray-600">{projectDisplay.description}</h1>
      </div>
      <div className=" rounded-xl overflow-hidden my-3">
        <img
          src={projectDisplay.image}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
export default ProjectHeadingTitle;
