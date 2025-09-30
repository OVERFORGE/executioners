import React from "react";
import { motion } from "framer-motion";
import gifSrc from "../assets/run.gif";
import usdt from "../assets/USDT_MARKETPLACE.png";
import wizz from "../assets/Wizz.png";
import ncr from "../assets/NCR.png";
import mavia from "../assets/MAVIA.png";
import stellar from "../assets/STELLAR.png";
import agentsclan from "../assets/Agents_clan.png";
import sage from "../assets/SAGE1.png";
const Marquee = () => {
  return (
    <div className="w-full m-auto lg:h-65 h-21 overflow-hidden bg-exebeige">
      <div className="w-full h-1 bg-exered"></div>
      <div className="w-full text-center font-exepixel text-6xl mt-5 mb-5">
        <span className="text-black">Executed </span>{" "}
        <span className="text-exered ">Collaborations</span>
      </div>

      <motion.div
        initial={{ x: "-180%" }}
        animate={{ x: "130%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex h-24 lg:h-43  -mt-5 "
      >
        <div className="flex-shrink-0 h-full mt-5 ">
          <img
            src={sage}
            alt="Running GIF"
            className="lg:h-34 h-34  object-cover rounded-lg "
          />
        </div>
        <div className="flex-shrink-0 h-full mt-5 ">
          <img
            src={agentsclan}
            alt="Running GIF"
            className="lg:h-34 h-34  object-cover rounded-lg "
          />
        </div>
        <div className="flex-shrink-0 h-full mt-5 ">
          <img
            src={stellar}
            alt="Running GIF"
            className="lg:h-34 h-34  object-cover rounded-lg "
          />
        </div>
        <div className="flex-shrink-0 h-full mt-5 ">
          <img
            src={mavia}
            alt="Running GIF"
            className="lg:h-34 h-34  object-cover rounded-lg "
          />
        </div>
        <div className="flex-shrink-0 h-full mt-5">
          <img
            src={ncr}
            alt="Running GIF"
            className="lg:h-34 h-34  object-cover rounded-lg "
          />
        </div>
        <div className="flex-shrink-0 lg:-mt-5 -mt-2 ">
          <img
            src={wizz}
            alt="Running GIF"
            className="lg:h-56 h-34  object-cover rounded-lg "
          />
        </div>
        <div className="flex-shrink-0 lg:-mt-5 -mt-2 ">
          <img
            src={usdt}
            alt="Running GIF"
            className="lg:h-56 h-34  object-cover rounded-lg "
          />
        </div>
        <div className="flex-shrink-0 lg:-mt-5 -mt-2 w-2/12">
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
