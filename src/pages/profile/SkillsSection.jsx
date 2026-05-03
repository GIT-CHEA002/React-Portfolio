import { Fragment } from "react";
import LeadingTitle from "../../components/LeadingTitle";
const skills = [
  {
    category: "Web Design",
    items: [
      "UI/UX Design",
      "Responsive Design",
      "Wireframing",
      "User Research",
    ],
  },
  {
    category: "Frontend",
    items: ["JavaScript", "ReactJS", "NextJS", "CSS3"],
  },
  {
    category: "Backend",
    items: ["NodeJS", "MongoDB", "ExpressJS", "Vercel"],
  },
  {
    category: "Soft Skills",
    items: [
      "Effective communication",
      "Collaboration",
      "Commitment",
      "Leadership",
    ],
  },
];

function Skills() {
  return (
    <Fragment>
      <LeadingTitle text={"Skills"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {skills &&
          skills.map((skill, index) => {
            return (
              <div key={index}>
                <h1 className=" text-2xl font-bold tracking-wide py-3">
                  {skill.category}
                </h1>
                <ul className=" font-semibold text-gray-600 tracking-wide text-xl cursor-pointer">
                  {skill.items.map((item) => {
                    return (
                      <li className=" hover:scale-105 transition-transform  duration-300 hover:text-purple-600">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
}
export default Skills;
