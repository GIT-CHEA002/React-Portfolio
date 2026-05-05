import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
function ExperienceRow({ job, index }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div
      key={index}
      ref={containerRef}
      className="flex space-x-8 mb-20 last:mb-8"
    >
      <div className="flex flex-col items-center w-20">
        <span className="text-5xl lg:text-7xl font-bold text-gray-900 leading-none mb-6">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative w-[5px] bg-gray-100 rounded-full h-72 lg:h-40 overflow-hidden">
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 left-0 right-0 bg-purple-600 origin-top h-full"
          />
        </div>
      </div>

      <div className="flex-1 pt-2">
        <h1 className="text-purple-600 font-medium text-lg">{job.title}</h1>
        <h2 className=" text-2xl lg:text-5xl font-bold text-gray-900 mb-8">
          {job.company}
        </h2>
        <div className="space-y-6 text-gray-500 text-lg lg:text-xl leading-relaxed max-w-4xl">
          <p>{job.bullets}</p>
        </div>
      </div>
    </div>
  );
}
export default ExperienceRow;
