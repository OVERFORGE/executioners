import React from "react";
import { motion } from "framer-motion";
import gifSrc from "../assets/run.gif";
const Marquee = () => {
  return (
    <div className="w-full m-auto lg:h-35 h-20 overflow-hidden bg-exebeige">
      <div className="w-full h-1 bg-exered"></div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex h-38 gap-72 -mt-5 "
      >
        <div className="flex-shrink-0 -mt-5 w-2/3">
          <img
            src={gifSrc}
            alt="Running GIF"
            className="h-56 object-cover rounded-lg "
          />
        </div>
        <div className="flex-shrink-0 -mt-5 w-2/3">
          <img
            src={gifSrc}
            alt="Running GIF"
            className="h-56 object-cover rounded-lg "
          />
        </div>
      </motion.div>
      <div className="w-full h-1 bg-exered"></div>
    </div>
  );
};

export default Marquee;
