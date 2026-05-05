import { useState } from "react";
import LeadingTitle from "../../../components/LeadingTitle";
import SideBarDesktop from "./SideBarDesktop";
import JobDetails from "./JobDetails";
import ToggleButtonSmallScreen from "./ToggleButtonSmallScreen";

function ExperiencesSection({jobs}) {

  const [activeJob, setActiveJob] = useState(0);
  return (
    <section>
      <LeadingTitle text={"Experiences"} />
      <div className="block lg:flex">
        <SideBarDesktop
          jobs={jobs}
          setActiveJob={setActiveJob}
          activeJob={activeJob}
        />
        <JobDetails jobs={jobs} activeJob={activeJob} />
      </div>
      <ToggleButtonSmallScreen
        jobs={jobs}
        activeJob={activeJob}
        setActiveJob={setActiveJob}
      />
    </section>
  );
}
export default ExperiencesSection;
