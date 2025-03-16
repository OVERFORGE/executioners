import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const JourneyLine = ({ isLast = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start 0.5"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      className={`ml-7 lg:m-auto h-50 lg:h-70 w-1 bg-exered/15 -mt-20 lg:-mt-15 rounded-4xl  ${
        isLast ? "lg:-mb-25 -mb-10" : "lg:-mb-10 -mb-30"
      } `}
    >
      <motion.div
        ref={ref}
        style={{ height: progressHeight }}
        className="bg-exered w-full origin-top"
      ></motion.div>
    </div>
  );
};

export default JourneyLine;
