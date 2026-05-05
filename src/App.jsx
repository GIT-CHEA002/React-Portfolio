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
import ProjectDisplay from "./pages/project/projectdetails/ProjectDisplayPage";
function App() {
  const projects = [
    {
      projectId: 1,
      title: "TaskFlow",
      image: CardImage,
      description:
        "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
      clientInfo: {
        client: "Ah paro",
        createYear: 2023,
        role: "Frontend Developer",
      },
      detail:
        "TaskFlow was designed to bridge the gap between complex enterprise management tools and simple to-do lists. The platform provides a highly visual interface where teams can organize sprints, track individual progress, and communicate in real-time. Luca was an absolute professional like no one else, his constant communication, high standard and persistent drive to ensure his work was far above the standard impressed me.",
      challenges:
        "The primary technical hurdle was implementing real-time state management across a complex dashboard while maintaining smooth 60fps drag-and-drop performance. We had to optimize database queries to handle hundreds of concurrent card movements and ensure that the UI reflected changes instantly for all connected team members without page refreshes or lag.",
      result:
        "The project successfully launched with a fully responsive architecture that works seamlessly across desktops, tablets, and mobile devices. By implementing a custom synchronization layer, we achieved near-zero latency for real-time updates. The system now supports over 1,000 active boards with high reliability and has been praised for its intuitive user experience and clean design.",
      feedback:
        "Working with the developer was a game-changer for our workflow. His collaboration brought a great deal of value to me and I would reccomend anyone to him whether for long term or one off. The attention to detail in the micro-interactions and the robustness of the real-time features far exceeded our initial expectations.",
      clientImage: "",
      clientRole: "Marketing Director at Webflow",
    },
    {
      projectId: 2,
      title: "EcoCart",
      image: CardImage,
      description:
        "E-commerce platform promoting eco-friendly products with payment integration.",
      clientInfo: {
        client: "EcoCart Team",
        createYear: 2023,
        role: "Full Stack Developer",
      },
      detail:
        "EcoCart is a specialized e-commerce platform built to empower sustainable shopping habits. Unlike traditional marketplaces, every aspect of the site—from vendor selection to shipping options—is curated for its environmental impact. The goal was to create a high-conversion shopping experience that doesn't compromise on speed while educating the user about their carbon footprint through integrated data visualizations.",
      challenges:
        "Integrating third-party payment gateways alongside complex, live carbon footprint calculators was a significant challenge. We had to build a custom API middleware to aggregate environmental data from various sources without slowing down the checkout process. Ensuring secure, PCI-compliant transactions while managing a dynamic, image-heavy inventory required careful architectural planning.",
      result:
        "We delivered a high-performance storefront featuring optimized image loading and a streamlined, multi-step secure checkout. The platform saw a 40% increase in user retention compared to the previous MVP, largely due to the improved performance and the inclusion of personalized sustainability reports for every customer. The system is now fully scalable to handle seasonal traffic spikes.",
      feedback:
        "The EcoCart team was thoroughly impressed with the technical execution. Great work on the UI and the smooth checkout flow; it is rare to find a developer who understands both the business logic and the aesthetic requirements of a modern green marketplace so clearly.",
      clientImage: "",
      clientRole: "Product Owner",
    },
    {
      projectId: 3,
      title: "EventPlanner",
      image: CardImage,
      description:
        "Event planning web application, enabling users to organise and manage events effortlessly.",
      clientInfo: {
        client: "Global Events",
        createYear: 2024,
        role: "Lead Developer",
      },
      detail:
        "EventPlanner serves as a centralized hub designed specifically for large-scale event coordinators managing thousands of guest lists, multi-day schedules, and complex venue logistics. The application simplifies the chaotic nature of event management into a structured, digital dashboard that allows for collaborative planning between vendors, hosts, and security teams.",
      challenges:
        "The biggest challenge was designing and implementing a complex calendar and scheduling system that functions perfectly across multiple time zones and device locales. We had to create a custom conflict-resolution algorithm to prevent double-booking of venues and resources, ensuring that any change made by one coordinator was immediately validated and updated for the entire planning committee.",
      result:
        "During initial stress testing, the application successfully handled over 500 concurrent events with thousands of real-time guest updates per minute. The user interface was praised for its clarity, allowing coordinators to reduce their planning time by nearly 30%. The final product includes automated email notifications, QR code check-ins, and detailed budget tracking tools.",
      feedback:
        "This platform has completely changed how we operate. The organization of information is top-notch, making it incredibly easy for our staff to stay on the same page. The developer's ability to turn our messy spreadsheets into a clean, functional web app was truly impressive.",
      clientImage: "",
      clientRole: "Event Manager",
    },
    {
      projectId: 4,
      title: "FoodieFinder",
      image: CardImage,
      description:
        "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
      clientInfo: {
        client: "DineSoft",
        createYear: 2024,
        role: "Frontend Developer",
      },
      detail:
        "FoodieFinder was built to be the ultimate discovery tool for local culinary experiences, focusing on 'hidden gems' rather than just mainstream chains. The platform uses location-based services to provide users with instant, relevant recommendations and features a rich social layer where foodies can share photos, detailed reviews, and curated 'taste lists'.",
      challenges:
        "Optimizing search queries for tens of thousands of restaurant entries—each with dynamic ratings and distance calculations—required a robust frontend indexing strategy. We had to implement advanced debouncing and caching mechanisms to ensure that the search remained responsive as users typed, even on slower mobile network connections with high-resolution image previews loading simultaneously.",
      result:
        "We achieved sub-200ms search response times through clever local indexing and optimized API calls. The platform's 'Map View' remains fluid and responsive even when displaying hundreds of markers. Since its soft launch, FoodieFinder has seen a consistent growth in its user base, with over 15,000 unique reviews submitted in the first month alone.",
      feedback:
        "The search functionality is lightning fast and intuitive, which is exactly what our users were asking for. The developer's work on the frontend architecture allowed us to launch ahead of schedule with a product that feels premium and polished. It has been a pleasure to see this vision come to life.",
      clientImage: "",
      clientRole: "Project Lead",
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

      <Route path="/project">
        <Route index element={<ProjectPage projects={projects} />} />
        {/* dynamic for more content of project page  */}
        <Route path=":title" element={<ProjectDisplay projects={projects} />} />
      </Route>
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
