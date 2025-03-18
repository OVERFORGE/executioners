import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Twitter from "../assets/twitter x.svg";
import Discord from "../assets/discord.svg";
import Instagram from "../assets/instagram.svg";
import Medium from "../assets/medium.svg";
import Magnetic from "./Magnetic";

const links = [
  {
    title: "Home",

    href: "/",
  },
  {
    title: "Events",

    href: "/events",
  },
  {
    title: "Esports",

    href: "/esports",
  },
  {
    title: "Grow With Us",
    href: "/grow-with-us",
  },

  {
    title: "Merchandise",

    href: "/merchandise",
  },

  {
    title: "Contact Us",

    href: "/contact-us",
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
const Nav = ({ isActive, setIsActive }) => {
  return (
    <div className={"nav"}>
      <div className={"navbody"}>
        {links.map((link, i) => {
          const { title, href } = link;

          return (
            <div>
              <div key={`b_${i}`} className={"linkContainer"}>
                <motion.div
                  href={href}
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  {" "}
                  <NavLink to={href} onClick={() => setIsActive(!isActive)}>
                    {title}
                  </NavLink>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,

          ease: "easeIn",
        }}
        className="w-full m-auto lg:px-25 flex gap-4 justify-center mt-9"
      >
        <Magnetic>
          <div
            className="h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] rounded-xl items-center flex justify-center -mt-1 relative"
            onClick={() =>
              window.open("https://x.com/ExecutionersES", "_blank")
            }
          >
            <img
              src={Twitter}
              className="h-[47px] lg:h-[50px] w-[47px] lg:w-[50px] z-1"
            />
            <div className="absolute top-0 h-[40px] lg:h-[40px] w-[40px] lg:w-[40px] mt-1 rounded-xl z-0 bg-white"></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div
            className="bg-black h-[40px] w-[40px] lg:h-[42px] lg:w-[42px] rounded-md lg:rounded-lg items-center flex justify-center"
            onClick={() =>
              window.open(
                "https://www.instagram.com/_the_executioners/",
                "_blank"
              )
            }
          >
            <img src={Instagram} className="h-[25px] lg:h-[30px] lg:w-[30px]" />
          </div>
        </Magnetic>
        <Magnetic>
          <div
            className="bg-black h-[40px] w-[40px] lg:h-[42px] lg:w-[42px] rounded-md lg:rounded-lg items-center flex justify-center"
            onClick={() =>
              window.open("https://medium.com/@esportsexecutioners", "_blank")
            }
          >
            <img src={Medium} className="h-[25px] lg:h-[30px] lg:w-[30px]" />
          </div>
        </Magnetic>
        <Magnetic>
          <div
            className="bg-black h-[40px] w-[40px] lg:h-[42px] lg:w-[42px] rounded-md lg:rounded-lg items-center flex justify-center"
            onClick={() =>
              window.open("https://discord.gg/rjBgaGjpCN", "_blank")
            }
          >
            <img src={Discord} className="h-[25px] lg:h-[30px] lg:w-[30px]" />
          </div>
        </Magnetic>
      </motion.div>
    </div>
  );
};

export default Nav;
