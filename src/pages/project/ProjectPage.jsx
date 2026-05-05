import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
import GreetingMessage from "./GreetingMessage";
import ProjectSection from "./ProjectSection";
function ProjectPage({ projects }) {
  return (
    <Layout>
      <title>Project</title>
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
