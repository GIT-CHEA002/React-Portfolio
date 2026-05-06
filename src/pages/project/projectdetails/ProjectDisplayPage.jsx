import SectionWrapper from "../../../components/SectionWrapper";
import Layout from "../../../layout/Layout";
import { useParams } from "react-router";
import ProjectHeadingTitle from "./ProjectHeadingTitleSection";
import DetailSection from "./DetailSection";
import ProjectImageSection from "./ProjectImageSection";
import FeedBackSection from "./FeedBackSection";
import MoreProjectSection from "./MoreProjectSection";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/projectdetail.png" />
        <title>Project Details</title>
      </Helmet>

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
