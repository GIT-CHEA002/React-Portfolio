import LeadingTitle from "../../components/LeadingTitle.jsx";
import SectionWrapper from "../../components/SectionWrapper.jsx";
import Story from "../../components/Story.jsx";
import Layout from "../../layout/Layout.jsx";
import ExperienceItem from "./ExperiencesItems.jsx";
import GreetingMessageSection from "./GreetingMessage.jsx";
import StackAndPlaceSection from "./StackAndPlaceSection.jsx";

function AboutPage({ storys, skills, jobs }) {
  {
    console.log(jobs);
  }
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

        <div className="flex ">
          {/* index  */}
          <div className="mt-10">
            {jobs &&
              jobs.map((job, index) => (
                <ExperienceItem key={index} index={index} job={job} />
              ))}
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
}

export default AboutPage;
