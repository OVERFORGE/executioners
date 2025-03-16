import React from "react";
import { motion } from "framer-motion";
const links = [
  {
    title: "Projects",

    href: "/",
  },

  {
    title: "Agency",

    href: "/",
  },

  {
    title: "Expertise",

    href: "/",
  },
];
const perspective = {
  initial: {
    opacity: 0,

    rotateX: 90,

    translateY: 80,

    translateX: -20,
  },

  enter: (i) => ({
    opacity: 1,

    rotateX: 0,

    translateY: 0,

    translateX: 0,

    transition: {
      duration: 0.65,

      delay: 0.5 + i * 0.1,

      ease: [0.215, 0.61, 0.355, 1],

      opacity: { duration: 0.35 },
    },
  }),

  exit: {
    opacity: 0,

    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};
const Nav = () => {
  return (
    <div className={"nav"}>
      <div className={"navbody"}>
        {links.map((link, i) => {
          const { title, href } = link;

          return (
            <div key={`b_${i}`} className={"linkContainer"}>
              <motion.div
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a>{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
