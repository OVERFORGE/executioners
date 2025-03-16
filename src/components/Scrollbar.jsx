import React, { useContext } from "react";
import { SectionContext } from "../context/SectionContext";
import { motion } from "framer-motion";
const Scrollbar = ({ sections }) => {
  const sectionContext = useContext(SectionContext);
  if (sectionContext == null) return;

  const { activeSection, activeSectionProgress } = sectionContext;
  return (
    <motion.div className="hidden   fixed right-10 h-screen md:flex flex-col gap-2 justify-center  z-10 -mt-[15%]">
      {sections.map(({ positionId }) => (
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          key={positionId}
          style={{
            height: activeSection === positionId ? "32px" : "8px",
            backgroundColor:
              activeSection === positionId
                ? "rgba(229,222,212,0.7)"
                : "rgb(82,82,82)",
            borderRadius: 9999,
          }}
          className="w-2 overflow-hidden "
        >
          {activeSection === positionId && (
            <motion.div
              style={{ height: `${activeSectionProgress * 100}%` }}
              className="w-full bg-exered"
            ></motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Scrollbar;
