import LeadingTitle from "../../../components/LeadingTitle";
import ExperienceRow from "./ExperienceRow";

function ExperiencesItemSection({ jobs }) {
  return (
    <div className="mt-10">
      <LeadingTitle text={"My Experiences"} />
      {jobs &&
        jobs.map((job, index) => {
          return <ExperienceRow key={index} job={job} index={index} />;
        })}
    </div>
  );
}
export default ExperiencesItemSection;
