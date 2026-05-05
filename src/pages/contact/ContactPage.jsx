import HeroImage from "../../components/HeroImage";
import LeadingTitle from "../../components/LeadingTitle";
import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
import { Mail, Phone } from "lucide-react";

function Contactpage() {
  return (
    <Layout>
      <title>Contact</title>
      <SectionWrapper>
        <div className="w-full items-center h-full grid grid-cols-1  lg:grid-cols-2 ">
          <div className=" lg:order-1 order-2 ">
            <LeadingTitle text={"Get In Touch"} />
            <h1 className="text-gray-600 text-2xl text-wrap font-medium">
              Looking to partner or work together? Reach out through the form
              and I'll get back to you in the next 48 hours.
            </h1>
            <ul className=" block">
              <li className="flex space-x-6 items-center cursor-pointer py-3">
                <Mail className="text-gray-600 " />
                <span className="text-gray-600 text-xl">
                  chhunsokchea317@gmail.com
                </span>
              </li>
              <li className="flex space-x-6 items-center cursor-pointer py-3">
                <Phone className="text-gray-600 " />
                <span className="text-gray-600 text-xl">+(855) 715763396</span>
              </li>
            </ul>
          </div>
          <div className="lg:order-2 order-1 ">
            <HeroImage />
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
export default Contactpage;
