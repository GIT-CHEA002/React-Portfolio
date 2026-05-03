import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
import Experiences from "./experiences/ExperiencesSection";
import HeroSection from "./hero/HeroSection";
import ProjectSection from "./projectcardsection/ProjectSection";
import Skills from "./SkillsSection";
import StorySection from "./StorySection";
function ProfilePage({ projects }) {
  return (
    <Layout>
      <div>
        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper>
          <ProjectSection projects={projects} />
        </SectionWrapper>

        <SectionWrapper>
          <Experiences />
        </SectionWrapper>

        <SectionWrapper>
          <Skills />
        </SectionWrapper>
        <SectionWrapper>
          <StorySection />
        </SectionWrapper>
      </div>
    </Layout>
  );
}
export default ProfilePage;
