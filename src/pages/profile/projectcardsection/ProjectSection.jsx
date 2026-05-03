import { Fragment } from "react";

import LeadingTitle from "../../../components/LeadingTitle";
import ProjectCardGrid from "./ProjectCardGrid";

function ProjectSection({projects}) {

  return (
    <Fragment>
      <LeadingTitle text={"Projects"} />
      <ProjectCardGrid projects={projects} />
    </Fragment>
  );
}
export default ProjectSection;
