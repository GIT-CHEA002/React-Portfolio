import { Helmet } from "react-helmet";
import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
import ContactGridSection from "./ContactGridSection";
import LeadingTitle from "../../components/LeadingTitle";

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
        <div>
          <LeadingTitle text={"Contact Me!"} />

          <form action="sendingmail">
            <div className="py-4">
              <label
                htmlFor="clientName"
                className="text-gray-600 text-lg pe-4"
              >
                Name
              </label>
              <input
                placeholder="Your Name"
                type="text"
                id="clientName"
                name="clientName"
                className=" border-2 border-gray-500 rounded py-2 px-3 mx-3 focus:outline-none placeholder:text-gray-600 focus:border-purple-600 focus:scale-105 shadow-sm shadow-purple-600 transition-all duration-300"
              />
            </div>
            <div className="block">
              <label
                htmlFor="message"
                className="text-gray-600 text-lg pe-4 py-2"
              >
                Your Message To Us
              </label>
              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Leave Your Message Here"
                  className="border-2 border-gray-500 rounded py-2 px-3 mx-3 focus:outline-none placeholder:text-gray-600 focus:border-purple-600 focus:scale-105 shadow-sm shadow-purple-600 transition-all duration-300  resize-none w-[300px] h-[200px] p-2"
                >
                  ghjkl
                </textarea>
              </div>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
export default Contactpage;
