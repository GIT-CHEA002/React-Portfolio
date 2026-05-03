import SectionWrapper from "../../components/SectionWrapper";
import Layout from "../../layout/Layout";
function ProjectPage() {
  const cards = [
    { id: 1, color: "bg-red-400", title: "Card 1" },
    { id: 2, color: "bg-blue-400", title: "Card 2" },
    { id: 3, color: "bg-green-400", title: "Card 3" },
    { id: 4, color: "bg-purple-400", title: "Card 4" },
  ];
  return (
    <Layout>
      <SectionWrapper>
          <div className="h-[400vh] relative">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="sticky top-0 h-screen flex items-center justify-center"
                style={{ zIndex: index + 1 }}
              >
                {/* 👇 THIS is the actual card */}
                <div className="w-[900px] h-[500px] rounded-2xl shadow-2xl bg-white p-6">
                  <h1 className="text-2xl font-bold">{card.title}</h1>
                </div>
              </div>
            ))}
        </div>
        
   
      </SectionWrapper>
    </Layout>
  );
}

export default ProjectPage;
