import SectionWrapper from "../../components/SectionWrapper.jsx";
import Story from "../../components/Story.jsx";
import Layout from "../../layout/Layout.jsx";
import ExperiencesItemSection from "./experiencesitem/ExperiencesItemSection.jsx";
import GreetingMessageSection from "./GreetingMessage.jsx";
import StackAndPlaceSection from "./stackandplace/StackAndPlaceSection.jsx";

function AboutPage({ storys, skills, jobs }) {
  return (
    <Layout>
      <title>About</title>
      <SectionWrapper>
        <GreetingMessageSection />
      </SectionWrapper>

      <SectionWrapper>
        <StackAndPlaceSection skills={skills} />
      </SectionWrapper>

      <SectionWrapper>
        <Story storys={storys} />
      </SectionWrapper>

      <SectionWrapper>
        <ExperiencesItemSection jobs={jobs} />
      </SectionWrapper>
    </Layout>
  );
}

export default AboutPage;
