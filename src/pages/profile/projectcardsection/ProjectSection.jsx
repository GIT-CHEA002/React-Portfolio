import { Fragment } from "react";
import CardImage from "../../../assets/cards/card1.png";
import LeadingTitle from "../../../components/LeadingTitle";
import ProjectCardGrid from "./ProjectCardGrid";

function ProjectSection() {
  const projects = [
    {
      title: "TaskFlow",
      description:
        "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
      image: CardImage,
    },

    {
      title: "EcoCart",
      description:
        "E-commerce platform promoting eco-friendly products with payment integration.",
      image: CardImage,
    },
    {
      title: "EventPlanner",
      description:
        "Event planning web application, enabling users to organise and manage events effortlessly.",
      image: CardImage,
    },

    {
      title: "FoodieFinder",
      description:
        "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
      image: CardImage,
    },
  ];
  return (
    <Fragment>
      <LeadingTitle text={"Projects"} />
      <ProjectCardGrid projects={projects} />
    </Fragment>
  );
}
export default ProjectSection;
