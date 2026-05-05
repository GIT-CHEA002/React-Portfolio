import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
import ExperiencesSection from "./experiences/ExperiencesSection";
import HeroSection from "./hero/HeroSection";
import ProjectSection from "./projectcardsection/ProjectSection";
import SkillSection from "./SkillsSection";
import StorySection from "./StorySection";
function ProfilePage({ projects, storys, skills, jobs }) {
  return (
    <Layout>
      <title>Home Page</title>
      <div>
        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper>
          <ProjectSection projects={projects} />
        </SectionWrapper>

        <SectionWrapper>
          <ExperiencesSection jobs={jobs} />
        </SectionWrapper>

        <SectionWrapper>
          <SkillSection skills={skills} />
        </SectionWrapper>
        <SectionWrapper>
          <StorySection storys={storys} />
        </SectionWrapper>
      </div>
    </Layout>
  );
}
export default ProfilePage;
