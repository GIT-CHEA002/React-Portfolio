import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ExperienceItem = ({ index, job }) => {
  const containerRef = useRef(null);

  // Track progress relative to this specific job block
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
    <div ref={containerRef} className="flex gap-8 mb-20 last:mb-0">
      {/* LEFT COLUMN: Number and Indicator */}
      <div className="flex flex-col items-center w-20">
        <span className="text-7xl font-bold text-gray-900 leading-none mb-6">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative w-[4px] bg-gray-100 rounded-full h-48 overflow-hidden">
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 left-0 right-0 bg-purple-600 origin-top h-full"
          />
        </div>
      </div>
      <div className="flex-1 pt-2">
        <h1 className="text-purple-600 font-medium text-lg">{job.title}</h1>
        <h2 className="text-5xl font-bold text-gray-900 mb-8">{job.company}</h2>
        <div className="space-y-6 text-gray-500 text-xl leading-relaxed max-w-4xl">
          <p>
            {job.bullets ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
          </p>
          {job.details && <p>{job.details}</p>}
        </div>
      </div>
    </div>
  );
};
export default ExperienceItem;
