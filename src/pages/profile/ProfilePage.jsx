import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
import Experiences from "./experiences/ExperiencesSection";
import HeroSection from "./hero/HeroSection";
import ProjectSection from "./projectcardsection/ProjectSection";
import Skills from "./SkillsSection";
import StorySection from "./StorySection";
function ProfilePage() {
  return (
    <Layout>
      <div className="">
        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper>
          <ProjectSection />
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
