import { Helmet } from "react-helmet";
import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
import ContactGridSection from "./herosectioncontactpage/ContactGridSection";
import LeaveMessage from "./LeaveMessage";

function Contactpage() {
  return (
    <Layout>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/contact.png" />
        <title>About</title>
      </Helmet>
      <SectionWrapper>
        <ContactGridSection />
      </SectionWrapper>
      <SectionWrapper>
        <LeaveMessage />
      </SectionWrapper>
    </Layout>
  );
}
export default Contactpage;
