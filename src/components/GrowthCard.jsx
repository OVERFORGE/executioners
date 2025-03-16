import React from "react";

const GrowthCard = ({ icon, headingText, contentText }) => {
  return (
    <div className="lg:max-w-[435px] lg:h-[230px] mt-14 lg:mb-10 bg-exebeige rounded-2xl  px-4 py-4 font-primary z-1 flex-1">
      <div className="bg-exered w-15 h-15 ml-1 rounded-full flex justify-center items-center">
        <img src={icon} alt="" className="w-8" />
      </div>
      <div className="w-full h-8/12   mt-4 pt-4 ">
        <p className="text-2xl lg:text-3xl font-bold tracking-wide">
          {headingText}
        </p>
        <p className=" text-[14px] lg:text-[16px] font-semibold mt-2 w-11/12">
          {contentText}
        </p>
      </div>
    </div>
  );
};

export default GrowthCard;
