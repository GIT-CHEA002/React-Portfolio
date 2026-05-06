import { Helmet } from "react-helmet";
import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
import GreetingMessage from "./GreetingMessage";
import ProjectSection from "./ProjectSection";
function ProjectPage({ projects }) {
  return (
    <Layout>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/project.png" />
        <title>Project</title>
      </Helmet>
      <SectionWrapper>
        <GreetingMessage />
      </SectionWrapper>
      <SectionWrapper>
        <ProjectSection projects={projects} />
      </SectionWrapper>
    </Layout>
  );
}
export default ProjectPage;
