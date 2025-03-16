import GrowthCard from "../components/GrowthCard";
import redLine from "../assets/red line svg.svg";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "../components/Magnetic";
import contentIcon from "../assets/content_icon.png";
import communityIcon from "../assets/community_icon.png";
import eventIcon from "../assets/event_icon.png";
const GrowthUnleashed = () => {
  return (
    <div className="container px-4 lg:px-25 relative font-primary ">
      <h1 className=" text-4xl lg:text-6xl font-extrabold text-exebeige ">
        Web3 Growth <span className="text-exered">Unleashed</span>
      </h1>
      <p className="text-[16px] lg:text-[22px] text-exebeige/80 mt-5">
        Helping Web3 brands grow with tailored content, strategic events, and
        expert community <br /> engagement for long-term success.
      </p>
      <div className="flex flex-col md:flex-row sm:gap-x-[19px] lg:w-full justify-between mt-0 mb-0 z-1">
        <Magnetic>
          <GrowthCard
            icon={contentIcon}
            headingText={"Content Strategy"}
            contentText={
              "Create compelling content to capture attention and drive engagement."
            }
          />
        </Magnetic>
        <Magnetic>
          <GrowthCard
            icon={communityIcon}
            headingText={"Community Growth"}
            contentText={"Foster an active, loyal, and supportive community."}
          />
        </Magnetic>
        <Magnetic>
          <GrowthCard
            icon={eventIcon}
            headingText={"Event Management"}
            contentText={
              "Host high-impact events to build brand authority and engagement."
            }
          />
        </Magnetic>
      </div>
      <img
        src={redLine}
        className="absolute top-10 scale-150 -right-44 z-0 h-full"
      />
    </div>
  );
};

export default GrowthUnleashed;
