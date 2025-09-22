import React from "react";
import { motion } from "framer-motion";
import gifSrc from "../assets/run.gif";
const Marquee = () => {
  return (
    <div className="w-full m-auto lg:h-35 h-21 overflow-hidden bg-exebeige">
      <div className="w-full h-1 bg-exered"></div>

      <motion.div
        initial={{ x: "-160%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex h-24 lg:h-38 gap-72 -mt-5 "
      >
        <div className="flex-shrink-0 lg:-mt-5 -mt-2 w-2/3">
          <img
            src={gifSrc}
            alt="Running GIF"
            className="lg:h-56 h-34  object-cover rounded-lg "
          />
        </div>
        <div className="flex-shrink-0 lg:-mt-5 -mt-2 w-2/3">
          <img
            src={gifSrc}
            alt="Running GIF"
            className="lg:h-56 h-34 object-cover rounded-lg "
          />
        </div>
      </motion.div>
      <div className="w-full h-1 bg-exered"></div>
    </div>
  );
};

export default Marquee;
