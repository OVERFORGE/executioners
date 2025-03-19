"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { text, curve, translate } from "../../utils/anim";
import { useLocation, useNavigate } from "react-router-dom";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact-us": "Contact",
  "/esports": "Esports",
  "/events": "Events",
  "/merchandise": "Merchandise",
  "/grow-with-us": "Grow With Us",
  "/terms-of-service": "Terms Of Service",
  "/privacy-policy": "Privacy Policy",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const location = useLocation();
  const currentRoute = location.pathname;
  const router = useNavigate();

  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />
      <motion.p className="route" {...anim(text)}>
        <img></img>
        {routes[window.location.pathname]}
        {console.log(routes[window.location.pathname])}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg className={"curve-svg"} {...anim(translate)}>
      <motion.path fill={"#ff000d"} {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
