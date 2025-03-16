import React from "react";
import { twMerge } from "tailwind-merge";

const FloatingCards = ({ icon, headingText, contentText, classname }) => {
  return (
    <div
      className={twMerge(
        "absolute w-[194px] h-[130px] bg-exebeige rounded-2xl  px-3 py-3 ",
        classname,
        "shadow-exe"
      )}
    >
      <div className="bg-zinc-900 w-14 h-14.5 ml-1 rounded-lg flex justify-center items-center">
        <img className="w-[33px]" src={icon} alt="" />
      </div>
      <div className="text-[12px] font-bold text-zinc-900 mt-2 -ml-0.5 tracking-[0.002em]">
        <p>{headingText}</p>
      </div>
      <div className="text-[10px] text-zinc-900 mt-[1px] whitespace-nowrap font-semibold -tracking-[0.02em] -ml-0.5">
        <p>{contentText}</p>
      </div>
    </div>
  );
};

export default FloatingCards;
