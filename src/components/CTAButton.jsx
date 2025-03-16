import React, { useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";

const CTAButton = ({ onCTA, setOnCTA, onArrow, setOnArrow }) => {
  return (
    <div className="ctaholder">
      <motion.button
        className="lg:w-66 lg:h-[60px] bg-white mt-[42px] rounded-4xl flex justify-center items-center gap-3 m-auto   cursor-pointer"
        onMouseEnter={() => {
          setOnCTA(true);
          console.log("hovered on cta");
        }}
        onMouseLeave={() => {
          setOnCTA(false);
          console.log("left cta");
        }}
      >
        <p className="text-black font-extrabold text-[20px] hidden">
          Start Growing Now
        </p>
        <div
          className="bg-red-500 w-[48px] h-[48px] rounded-4xl flex justify-center items-center hidden "
          onMouseEnter={() => {
            setOnArrow(true);
            console.log("hovered on arrow");
          }}
          onMouseLeave={() => {
            setOnArrow(false);
            console.log("left arrow");
          }}
        >
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
    </div>
  );
};

export default CTAButton;
