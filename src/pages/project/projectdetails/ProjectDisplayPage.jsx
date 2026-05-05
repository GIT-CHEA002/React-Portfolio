import SectionWrapper from "../../../components/SectionWrapper";
import Layout from "../../../layout/Layout";
import { useParams } from "react-router";
import ProjectHeadingTitle from "./ProjectHeadingTitleSection";
import DetailSection from "./DetailSection";
import ProjectImageSection from "./ProjectImageSection";
import FeedBackSection from "./FeedBackSection";
import MoreProjectSection from "./MoreProjectSection";
function ProjectDisplay({ projects }) {
  const param = useParams();
  const projectTitle = param.title;
  const projectDisplay = projects.find(
    (project) => project.title === projectTitle,
  );
  const moreProject = projects.filter(
    (project) => project.title !== projectTitle,
  );

  return (
    <Layout>
      <title>Project Detail</title>

      <SectionWrapper>
        <ProjectHeadingTitle projectDisplay={projectDisplay} />
      </SectionWrapper>

      <SectionWrapper>
        <DetailSection projectDisplay={projectDisplay} />
      </SectionWrapper>

      <SectionWrapper>
        <ProjectImageSection projectDisplay={projectDisplay} />
      </SectionWrapper>

      <SectionWrapper>
        <FeedBackSection projectDisplay={projectDisplay} />
      </SectionWrapper>

      <SectionWrapper>
        <MoreProjectSection moreProject={moreProject} />
      </SectionWrapper>
    </Layout>
  );
}
export default ProjectDisplay;
