import React, { useContext, useState } from "react";
import logo from "../assets/EXE MAIN.png";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import HeaderButton from "./HeaderButton";
import Nav from "./Nav";
import { forwardRef } from "react";
import { SectionContext } from "../context/SectionContext";
import { NavLink } from "react-router-dom";

const menu = {
  open: {
    width: "350px",

    height: "500px",

    top: "-25px",

    right: "-25px",

    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "100px",

    height: "40px",

    top: "0px",

    right: "0px",

    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const Navbar = forwardRef(function index(props, ref) {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 150 : 40;
  const [isActive, setIsActive] = useState(false);
  // const { isActive, setIsActive } = useContext(SectionContext);

  return (
    <div className=" flex justify-between font-black mt-5 px-[15px] items-center sm:px-[75px] sm:mt-8 lg:px-[100px]  xl:px-[150px] lg:mt-16 overflow-x-clip">
      <NavLink to={"/"}>
        <div className=" flex items-center justify-center text-center gap-2">
          <img className="w-10 sm:w-15 lg:w-25" src={logo} alt="" />
          <span className="font-exe text-[16px] md:text-[20px] text-white lg:text-[30px]">
            The Executioners{" "}
          </span>
        </div>
      </NavLink>

      <div className="relative -mt-8 md:-mt-10 lg:-mt-8 ">
        <div className="header">
          <motion.div
            className={"menu"}
            variants={menu}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            {isActive && <Nav isActive={isActive} setIsActive={setIsActive} />}
          </motion.div>

          <div className="nav-button">
            <HeaderButton
              ref={ref}
              isActive={isActive}
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          </div>
        </div>
        <motion.div
          className="mask-nav"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <div
            onMouseEnter={() => {
              setIsHovered(true), console.log("hovered");
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="w-9 h-1.5 bg-exered rounded-4xl mb-1.5 lg:w-11 lg:h-2"
          ></div>
          <div
            onMouseEnter={() => {
              setIsHovered(true), console.log("hovered");
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="w-9 h-1.5 bg-exered rounded-4xl lg:w-11 lg:h-2"
          ></div>
        </motion.div>
      </div>
    </div>
  );
});

export default Navbar;
