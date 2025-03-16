import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";
const HeaderButton = ({ isActive, toggleMenu, ref }) => {
  return (
    <div className={"headerbutton"}>
      <motion.div
        className={"headerslider"}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={"headerel"}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>

        <div
          className={"headerel"}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};
function PerspectiveText({ label }) {
  return (
    <div className={"headerperspectiveText"}>
      <p>{label}</p>

      <p>{label}</p>
    </div>
  );
}

export default HeaderButton;
