import LeadingTitle from "../../components/LeadingTitle.jsx";
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
      {/* stack and skill  */}
      <SectionWrapper>
        <StackAndPlaceSection skills={skills} />
      </SectionWrapper>
      <SectionWrapper>
        <Story storys={storys} />
      </SectionWrapper>
      {/* Experience section */}
      <SectionWrapper>
        <LeadingTitle text={"My Experiences"} />
        <div className=" mt-10 ">
          <ExperiencesItemSection jobs={jobs} />
        </div>
      </SectionWrapper>
    </Layout>
  );
}

export default AboutPage;
