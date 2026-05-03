import ProjectCard from "../../components/ProjectCard";
import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
function ProjectPage({ projects }) {
  return (
    <Layout>
      <SectionWrapper>
        <div>
          <h1 className="text-6xl lg:text-8xl font-bold pt-28">
            My
            <span className="px-4 text-purple-600 ">Best</span>Creations
          </h1>
          <h5 className=" mt-5 lg:w-[60%] text-wrap  tracking-wide  text-gray-600 font-semibold text-2xl">
            Designing and Develoh5ing Robust and Stylish Web Applications for a
            Decade and Counting
          </h5>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div
          className="relative"
          style={{ height: `${projects.length * 100}vh` }}
        >
          {projects.map((project, index) => {
            return (
              <div
                className="sticky top-20 h-screen bg-white flex items-center justify-center"
                style={{ zIndex: index + 1 }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
export default ProjectPage;
