import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
import ExperiencesSection from "./experiences/ExperiencesSection";
import HeroSection from "./hero/HeroSection";
import ProjectSection from "./projectcardsection/ProjectSection";
import SkillSection from "./SkillsSection";
import StorySection from "./StorySection";
import { Helmet } from "react-helmet";
function ProfilePage({ projects, storys, skills, jobs }) {
  return (
    <Layout>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/profile.png" />
        <title>Home Page</title>
      </Helmet> 
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
