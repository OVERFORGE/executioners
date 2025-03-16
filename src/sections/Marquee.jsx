import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div className="w-full m-auto h-70    ">
      {/* <div className="gradient-merge"></div> */}

      <div className="w-full h-1 bg-exered"></div>
      <motion.div
        initial={{ x: "-4000px" }}
        animate={{ x: 0 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex lg:font-exemarquee font-black text-9xl text-exered gap-30 cursor-default pt-5 -tracking-normal font-bold italic "
      >
        <p>#BEATTHEGOD</p>
        <p>#EVOLUTIONHASBEGUN</p>
        <p>#RISELIKETHETIDES</p>
        <p>#BEATTHEGOD</p>
        <p>#EVOLUTIONHASBEGUN</p>
        <p>#RISELIKETHETIDES</p>
        <p>#BEATTHEGOD</p>
        <p>#EVOLUTIONHASBEGUN</p>
        <p>#RISELIKETHETIDES</p>
        <p>#BEATTHEGOD</p>
        <p>#EVOLUTIONHASBEGUN</p>
        <p>#RISELIKETHETIDES</p>
        <p>#BEATTHEGOD</p>
        <p>#EVOLUTIONHASBEGUN</p>
        <p>#RISELIKETHETIDES</p>
        <p>#BEATTHEGOD</p>
        <p>#EVOLUTIONHASBEGUN</p>
        <p>#RISELIKETHETIDES</p>
        <p>#BEATTHEGOD</p>
        <p>#EVOLUTIONHASBEGUN</p>
        <p>#RISELIKETHETIDES</p>
        <p>#BEATTHEGOD</p>
        <p>#EVOLUTIONHASBEGUN</p>
        <p>#RISELIKETHETIDES</p>
        <p>#BEATTHEGOD</p>
        <p>#EVOLUTIONHASBEGUN</p>
        <p>#RISELIKETHETIDES</p>
      </motion.div>
      <div className="w-full h-1 bg-exered"></div>
    </div>
  );
};

export default Marquee;
