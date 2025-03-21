import React from "react";
import EventBanner from "../assets/banner LPU FINAL_.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const UpcomingEvent = () => {
  return (
    <div className="px-4 lg:px-25 relative mt-20 lg:mt-40 font-primary h-full mb-40 ">
      <h1 className="text-5xl lg:text-6xl font-extrabold text-exebeige ">
        Upcoming <span className="text-exered">Event</span>
      </h1>
      <div className="mt-10 border-2 border-exebeige h-full rounded-lg p-2">
        <div className="upcoming-event">
          <div className="flex flex-col sm:flex-row py-2 px-4 lg:py-4 lg:px-25 gap-10">
            <div className="flex-1 rounded-2xl">
              <img
                src="https://iili.io/3zC5Dxe.png"
                className="w-full rounded-md"
                alt=""
              />
            </div>
            <div className="flex-1 sm:flex-2 text-exebeige/90 font-semibold font-primary text-sm lg:text-lg">
              <p>
                Join our free 4-hour Web3 workshop with Stellar, where you'll
                learn the fundamentals of Web3, explore high-paying Web3 job
                opportunities, and get hands-on experience in building your
                first blockchain on Soroban with guidance from the Stellar
                Ambassador. The session includes a networking opportunity with
                industry experts and free merchandise for all attendees. Limited
                seats available – register now to secure your spot:
              </p>
              <div className="m-auto w-full flex items-center justify-center relative">
                <motion.button className="bg-exebeige font-primary text-exered font-bold text-2xl italic px-4 py-3 mt-8 rounded-md cursor-pointer ">
                  Register Now{" "}
                </motion.button>
                <motion.button
                  animate={{ x: 5, y: -5 }}
                  transition={{
                    duration: 1.5,

                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="text-exebeige font-primary bg-exered font-bold text-2xl italic px-4 py-3 mt-8 rounded-md absolute top-0 right-auto left-auto cursor-pointer "
                >
                  Register Now{" "}
                </motion.button>
                <motion.button
                  animate={{ x: 10, y: -10 }}
                  transition={{
                    duration: 1.5,

                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="bg-exebeige font-primary text-exered font-bold text-2xl italic px-4 py-3 mt-8 rounded-md absolute top-0 right-auto left-auto cursor-pointer "
                >
                  <NavLink to="/an-event">Register Now </NavLink>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
