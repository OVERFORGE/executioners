import React, { useContext, useRef } from "react";
import { SectionContext } from "../context/SectionContext";
import { useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";

const Section = ({
  section,
  isFirst = false,
  isLast = false,
  children,
  ...props
}) => {
  const { setActiveSection, setActiveSectionProgress } =
    useContext(SectionContext);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: isFirst
      ? ["start start", "end center"]
      : isLast
      ? ["start center ", "end end"]
      : ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && value < 1) {
      setActiveSection(section.positionId);
      setActiveSectionProgress(value);
    }
  });
  return (
    <section className="m-0" {...props} ref={container}>
      {children}
    </section>
  );
};

export default Section;
