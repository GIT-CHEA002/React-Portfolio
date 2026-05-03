import { useState } from "react";
import LeadingTitle from "../../../components/LeadingTitle";
import SideBarDesktop from "./SideBarDesktop";
import JobDetails from "./JobDetails";
import ToggleButtonSmallScreen from "./ToggleButtonSmallScreen";

function Experiences() {
  const Jobs = [
    {
      company: "Google",
      title: "Frontend Developer",
      date: "January - June 2018",
      bullets: [
        "Developed responsive web interfaces using modern JavaScript frameworks and best practices",
        "Collaborated with UX designers to improve user experience and accessibility across products",
        "Optimized applications for maximum speed and scalability",
      ],
    },
    {
      company: "Microsoft",
      title: "Software Engineer",
      date: "August 2018 - February 2019",
      bullets: [
        "Built and maintained scalable web applications using React and .NET technologies",
        "Integrated RESTful APIs and ensured smooth data flow between frontend and backend",
        "Participated in code reviews and contributed to improving development standards",
      ],
    },
    {
      company: "Amazon",
      title: "Full Stack Developer",
      date: "March - September 2019",
      bullets: [
        "Designed and implemented full-stack features using Node.js and React",
        "Improved system performance by optimizing database queries and backend logic",
        "Worked closely with product managers to deliver features aligned with business goals",
      ],
    },
    {
      company: "Meta",
      title: "Frontend Engineer",
      date: "October 2019 - April 2020",
      bullets: [
        "Created reusable UI components and maintained a consistent design system",
        "Enhanced application performance using code splitting and lazy loading techniques",
        "Collaborated with cross-functional teams to deliver high-quality user experiences",
      ],
    },
  ];
  const [activeJob, setActiveJob] = useState(0);
  return (
    <section>
      <LeadingTitle text={"Experiences"} />
      <div className="block lg:flex">
        <SideBarDesktop
          Jobs={Jobs}
          setActiveJob={setActiveJob}
          activeJob={activeJob}
        />
        <JobDetails Jobs={Jobs} activeJob={activeJob} />
      </div>
      <ToggleButtonSmallScreen
        Jobs={Jobs}
        activeJob={activeJob}
        setActiveJob={setActiveJob}
      />
    </section>
  );
}
export default Experiences;
