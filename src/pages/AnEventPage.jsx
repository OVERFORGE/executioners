import React, { useEffect, useRef } from "react";
import Curve from "../components/Layout/Curve";
import PageNotFound from "../components/PageNotFound";
import A4 from "../assets/A4.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";
import { NavLink } from "react-router-dom";
const AnEventPage = () => {
  return (
    <Curve>
      <div className="an-event relative">
        <div className="px-4 lg:px-25 relative mt-20  font-primary w-full h-full pb-10">
          <div className="flex flex-col sm:flex-row relative">
            <div
              style={{ perspective: 2000 }}
              className="flex-3/12 p-10 relative rounded-lg"
            >
              <div className="event-card-container relative rounded-lg">
                <Atropos activeOffset={40} shadowScale={1.05}>
                  <div className="event-card-holder p-4 rounded-lg">
                    <img
                      style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                      }}
                      src={A4}
                      className="w-full rounded-lg"
                      alt=""
                    />
                  </div>
                </Atropos>
              </div>
            </div>
            <div className="flex-7/12 sm:p-10 w-full">
              <div className="event-card">
                <p className="text-exebeige text-3xl sm:text-4xl font-bold p-5">
                  Stellar WEB3 Workshop
                </p>
                <p className="text-exebeige sm:text-xl font-bold p-5">
                  <span className="text-exered">
                    Learn Blockchain from Scratch{" "}
                  </span>{" "}
                  - Whether you're a beginner or curious about Web3, we'll break
                  down blockchain fundamentals and how decentralized
                  technologies are shaping the future.
                </p>
                <p className="text-exebeige sm:text-xl font-bold p-5">
                  <span className="text-exered">
                    Explore High-Paying Web3 Careers
                  </span>{" "}
                  - Discover both tech and non-tech opportunities in Web3. From
                  developers (across multiple languages) to content creators,
                  KOLs, ambassador programs, and marketing roles—there's a place
                  for everyone in the decentralized world!
                </p>
                <p className="text-exebeige sm:text-xl font-bold p-5">
                  <span className="text-exered">
                    Exclusive Session with Stellar’s Ambassador
                  </span>{" "}
                  - Gain insights into Stellar, its impact in blockchain, and
                  how you can become an ambassador. Plus, learn about Stellar’s
                  $15,000 developer grant program—even YOU can earn it with a
                  great project!
                </p>
                <p className="text-exebeige sm:text-xl font-bold p-5">
                  <span className="text-exered">Free Merchandise for All!</span>{" "}
                  - Walk away with exclusive Stellar swag. All you have to do?
                  Capture the event’s best moments, tweet using our pre-filled
                  template, and hit post!
                </p>
                <p className="text-exebeige sm:text-xl font-bold p-5">
                  <span className="text-exered">Claim Your Free NFT</span> -
                  Bring two followers and follow our pages to earn an exclusive
                  NFT, marking your participation in this Web3 journey!
                </p>
              </div>
              <div className="relative justify-center items-center m-auto flex">
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
                  onClick={() => (location.href = "https://lu.ma/e2md1o4y")}
                >
                  Register Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fix h-[130vh] sm:h-[70vh]"></div>
      </div>
    </Curve>
  );
};

export default AnEventPage;
