// import { useRef } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
import ExperienceRow from "./ExperienceRow";

function ExperiencesItemSection({ jobs }) {
  return (
    <div className="mt-10">
      {jobs &&
        jobs.map((job, index) => {
          return <ExperienceRow job={job} index={index} />;
        })}
    </div>
  );
}
export default ExperiencesItemSection;
