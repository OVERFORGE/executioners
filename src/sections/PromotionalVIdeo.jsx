import React from "react";
import vid from "../assets/USDT_MARKETPLACE.mp4";
const PromotionalVIdeo = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full flex-col gap-5 lg:gap-10">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-exebeige ">
          A <span className="text-exered">Message</span> from us
        </h1>
        <video className="w-10/12 lg:w-2/3 rounded-lg " controls>
          <source src={vid} />
        </video>
      </div>
    </div>
  );
};

export default PromotionalVIdeo;
