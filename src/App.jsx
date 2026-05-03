import { Routes } from "react-router";
import { Route } from "react-router";
import "./index.css";
import ProfilePage from "./pages/profile/ProfilePage";
import Contactpage from "./pages/contact/ContactPage";
import SocialPage from "./pages/social/SocialPage";
import ProjectPage from "./pages/project/ProjectPage";
import AboutPage from "./pages/about/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
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
