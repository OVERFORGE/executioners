import React from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";
import CTAButton from "../components/CTAButton";
const HeroSection = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [onCTA, setOnCTA] = useState(false);
  const [onArrow, setOnArrow] = useState(false);
  const size = isHovered ? 150 : onCTA ? 0 : 0;
  return (
    <div className="pb-7">
      <div className="mask-container">
        <div className="container text-exebeige text-center mt-[54px] lg:mt-16  font-primary ">
          <div className="flex justify-center items-center gap-[3px] ml-[-6px]">
            <div className="bg-exebeige w-[7px] h-[7px] rounded-4xl"></div>
            <p className="text-[12px] lg:text-base">Executioners Brings You</p>
          </div>
          <div className="flex text-2xl lg:text-6xl justify-center items-center gap-2 lg:gap-5 lg:mt-4 ">
            <p className="font-extrabold">Your</p>
            <p className="font-secondary ">Web3</p>
            <p className="font-extrabold">Marketer</p>
          </div>
          <div className="text-2xl lg:mt-[26px] lg:text-6xl font-extrabold tracking-[-0.02em]">
            <p>From Strategy to Execution.</p>
          </div>
          <div className="text-[10px] lg:text-base mt-3 lg:mt-7 tracking-[-0.01em]">
            <p>
              Empowering Web3 brands with strategic content, engaged
              <br /> communities, and impactful events for lasting growth.
            </p>
          </div>
          <motion.button
            className="lg:w-66 lg:h-[60px] bg-white mt-[42px] rounded-4xl flex justify-center items-center gap-3 m-auto   cursor-pointer"
            animate={{ opacity: onCTA ? 0 : 1 }}
            transition={{ duration: 0.1 }}
          >
            <p className="text-black font-extrabold text-[20px]">
              Start Growing Now
            </p>
            <div className="bg-red-500 w-[48px] h-[48px] rounded-4xl flex justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </motion.button>
          <motion.button className="lg:w-66 lg:h-[60px] bg-white -mt-[60px] rounded-4xl flex justify-center items-center gap-3 m-auto   cursor-pointer">
            <motion.p
              animate={{ opacity: onCTA ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="text-black font-extrabold text-[20px]"
            >
              Start Growing Now
            </motion.p>
            <motion.div
              className="bg-red-500 w-[48px] h-[48px] rounded-4xl flex justify-center items-center "
              initial={{ x: "-200px", opacity: 0 }}
              animate={{ x: onCTA ? 0 : "-200px", opacity: onCTA ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-6"
                animate={{ rotate: onCTA ? 360 : 180 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </motion.svg>
            </motion.div>
          </motion.button>
          <div className="flex justify-center flex-col items-center mt:8 md:mt-13 gap-4">
            <div className="h-10 w-5 outline outline-[6px] outline-exered/10 inline-flex rounded-full justify-center pt-2">
              <div className="h-3 w-1 bg-exered rounded-full"></div>
            </div>
            <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
              Scroll to learn more
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div className="absolute hidden lg:block lg:top-[154px] left-0 container  text-center lg:mt-16   font-primary">
          <div className="flex justify-center items-center gap-[3px] ml-[-6px]">
            <div className="bg-exebeige w-[7px] h-[7px] rounded-4xl"></div>
            <p
              onMouseEnter={() => {
                setIsHovered(true), console.log("hovered");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              Executioners Brings You
            </p>
          </div>
          <div className="flex lg:text-6xl justify-center items-center gap-5 lg:mt-4">
            <p
              onMouseEnter={() => {
                setIsHovered(true), console.log("hovered");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="font-extrabold"
            >
              Your
            </p>
            <p
              onMouseEnter={() => {
                setIsHovered(true), console.log("hovered");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="font-secondary "
            >
              Web3
            </p>
            <p
              onMouseEnter={() => {
                setIsHovered(true), console.log("hovered");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="font-extrabold"
            >
              Marketer
            </p>
          </div>
          <div className="lg:mt-[26px] lg:text-6xl font-extrabold tracking-[-0.02em]">
            <p
              onMouseEnter={() => {
                setIsHovered(true), console.log("hovered");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="inline-block"
            >
              From Strategy to Execution.
            </p>
          </div>
          <div className="lg:mt-7 tracking-[-0.01em]">
            <p
              onMouseEnter={() => {
                setIsHovered(true), console.log("hovered");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className="inline-block"
            >
              Empowering Web3 brands with strategic content, engaged
              <br /> communities, and impactful events for lasting growth.
            </p>
          </div>
          <CTAButton
            onCTA={onCTA}
            setOnCTA={setOnCTA}
            onArrow={onArrow}
            setOnArrow={setOnArrow}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
