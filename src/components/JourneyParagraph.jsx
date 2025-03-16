import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const JourneyParagraph = ({ heading, paragraph }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.7"],
    transition: { duration: 0.5, ease: easeIn },
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ opacity: progressHeight }}
      ref={ref}
      transition={{ duration: 0.5, ease: easeIn }}
    >
      <h1 className="text-xl lg:text-3xl font-extrabold text-exebeige mb-2 lg:mb-5">
        {heading}
      </h1>
      <p className="text-sm lg:text-lg text-gray-600">{paragraph}</p>
    </motion.div>
  );
};

export default JourneyParagraph;
