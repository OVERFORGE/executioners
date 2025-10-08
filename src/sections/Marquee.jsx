import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import gifSrc from "../assets/run.gif";
import usdt from "../assets/USDT_MARKETPLACE.png";
import wizz from "../assets/Wizz.png";
import ncr from "../assets/NCR.png";
import mavia from "../assets/MAVIA.png";
import stellar from "../assets/STELLAR.png";
import agentsclan from "../assets/Agents_clan.png";
import sage from "../assets/SAGE1.png";

const logos = [sage, agentsclan, stellar, mavia, ncr, wizz, usdt];

const Marquee = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const controls = useAnimation();
  const [contentWidth, setContentWidth] = useState(0);

  // Measure content width after render
  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.scrollWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Start animation whenever width changes
  useEffect(() => {
    if (!contentWidth) return;

    const duration = contentWidth / 100; // adjust speed here
    controls.start({
      x: [-contentWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    });
  }, [contentWidth, controls]);

  return (
    <div className="w-full overflow-hidden bg-exebeige" ref={containerRef}>
      <div className="w-full h-[2px] bg-exered"></div>

      <div className="text-center font-exepixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 mb-4 px-4">
        <span className="text-black">Executed </span>
        <span className="text-exered">Collaborations</span>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <motion.div
          ref={contentRef}
          animate={controls}
          className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
        >
          {/* Logos duplicated for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-20 sm:h-28 md:h-36 lg:h-40"
            >
              <img
                src={index < logos.length ? logo : logos[index - logos.length]}
                alt={`Logo ${index}`}
                className="h-full object-contain"
              />
            </div>
          ))}

          {/* Single Running Knight GIF */}
          <div className="flex-shrink-0">
            <img
              src={gifSrc}
              alt="Running Knight"
              className="h-24 sm:h-32 md:h-40 lg:h-44 object-contain"
            />
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[2px] bg-exered"></div>
    </div>
  );
};

export default Marquee;
