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
  return (
    <Routes>
      <Route path="/" element={<ProfilePage projects={projects} />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/social" element={<SocialPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* incorrect route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
