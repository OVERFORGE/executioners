import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
const JourneyRedDot = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start 0.9"],
    transition: { duration: 0.5, ease: easeIn },
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      style={{ opacity: progressHeight }}
      ref={ref}
      transition={{ duration: 0.5, ease: easeIn }}
    >
      <div className="w-2 h-2 bg-exered rounded-full"></div>
    </motion.div>
  );
};

export default JourneyRedDot;
