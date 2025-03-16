import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const JourneyLine = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start 0.5"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="m-auto h-70 w-1 bg-exered/15 -mt-15 rounded-4xl -mb-25">
      <motion.div
        ref={ref}
        style={{ height: progressHeight }}
        className="bg-exered w-full origin-top"
      ></motion.div>
    </div>
  );
};

export default JourneyLine;
