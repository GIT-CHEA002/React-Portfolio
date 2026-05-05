import { motion } from "framer-motion";
import { BiStar } from "react-icons/bi";
function MyStack({ skills }) {
  const hardSkills = skills.filter((skill) => {
    return skill.type === "hard";
  });

  return (
    <div className="lg:w-[400px] flex flex-col">
      <h1 className="text-3xl font-bold py-3">My Stack. </h1>
      <div className="flex-1 space-y-11 bg-gray-400/80 rounded-2xl overflow-hidden py-8">
        {hardSkills &&
          hardSkills.map((hardSkill, index) => {
            const displayItems = [...hardSkill.items, ...hardSkill.items];
            const evenRow = index % 2 === 0;
            return (
              <div key={index} className="overflow-hidden w-full">
                <motion.div
                  className="flex whitespace-nowrap items-center w-max"
                  animate={{
                    x: evenRow ? ["0%", "-50%"] : ["-50%", "0%"],
                  }}
                  transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                  }}
                >
                  {displayItems.map((item, i) => {
                    return (
                      <div key={i} className="flex items-center space-x-4 px-4">
                        <BiStar className="text-3xl text-purple-600 shrink-0" />
                        <div className="text-gray-200 px-6 py-2 rounded-2xl bg-black/80 text-lg  whitespace-nowrap">
                          {item}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default MyStack;
