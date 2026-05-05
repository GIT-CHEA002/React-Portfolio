import { Routes } from "react-router";
import { Route } from "react-router";
import "./index.css";
import ProfilePage from "./pages/profile/ProfilePage";
import Contactpage from "./pages/contact/ContactPage";
import SocialPage from "./pages/social/SocialPage";
import ProjectPage from "./pages/project/ProjectPage";
import AboutPage from "./pages/about/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import CardImage from "./assets/cards/card1.png";
function App() {
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
  const storys = [
    "My journey as a front-end developer started back in 2010, working as a freelancer for clients all over the world for several years.",
    "After being on my own for a while, I decided to enter the corporate world, and I started working as a software developer at Webflow, the same platform I was using with my freelance clients.",
    "After some exciting months of work at Webflow, I decided to transition to Stripe, where I returned what I love: front-end development. ",
    "My success quickly compounded I started receiving job offers from the biggest names in the industry.",
    "All these opportunities led me to travel the world. Eventually, however, I decided to settle down for a more calm and simple routine, and I am now working at Apple. And you know what? I love what I do!",
  ];
  const skills = [
    {
      category: "Web Design",
      type: "hard",
      items: [
        "UI/UX Design",
        "Responsive Design",
        "Wireframing",
        "User Research",
      ],
    },
    {
      category: "Frontend",
      type: "hard",
      items: ["JavaScript", "ReactJS", "NextJS", "CSS3"],
    },
    {
      category: "Backend",
      type: "hard",
      items: ["NodeJS", "MongoDB", "ExpressJS", "Vercel"],
    },
    {
      category: "Soft Skills",
      type: "soft",
      items: [
        "Effective communication",
        "Collaboration",
        "Commitment",
        "Leadership",
      ],
    },
  ];
  const jobs = [
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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProfilePage
            projects={projects}
            storys={storys}
            skills={skills}
            jobs={jobs}
          />
        }
      />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/social" element={<SocialPage />} />
      <Route path="/project" element={<ProjectPage projects={projects} />} />
      <Route
        path="/about"
        element={<AboutPage storys={storys} skills={skills} jobs={jobs} />}
      />
      {/* incorrect route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
