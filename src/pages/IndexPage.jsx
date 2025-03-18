import React, { useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import FloatingCards from "../sections/FloatingCards";
import penicon from "../assets/pen icon.png";
import groupicon from "../assets/group icon.png";
import calendericon from "../assets/calender icon.png";
import charticon from "../assets/chart icon.png";
import { useRef } from "react";
import gsap from "gsap";
import Marquee from "../sections/Marquee";
import GrowthUnleashed from "../sections/GrowthUnleashed";
import AboutUs from "../sections/AboutUs";
import Journey from "../sections/Journey";
import { sections } from "../utils/SectionData";
import {
  SectionContext,
  useSectionContextValues,
} from "../context/SectionContext";
import Section from "../components/Section";
import Scrollbar from "../components/Scrollbar";
import UpcomingEvent from "../sections/UpcomingEvent";
const IndexPage = () => {
  const { values } = useSectionContextValues();

  const plane1 = useRef(null);
  const plane2 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.002;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;
    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;
    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);

      requestAnimationFrameId = null;
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
    >
      <SectionContext.Provider value={values}>
        <Scrollbar sections={sections} />
        <Section section={sections[0]} isFirst>
          <HeroSection />
        </Section>

        <div className="hidden lg:block absolute top-0 z-50" ref={plane1}>
          <FloatingCards
            icon={penicon}
            headingText={"Strategic Content Creation"}
            contentText={"Create content that drives engagement."}
            classname={`left-[60px] top-[195px]`}
          />
          <FloatingCards
            icon={calendericon}
            headingText={"Event Hosting"}
            contentText={"Host impactful events with ease."}
            classname={"left-[900px] top-[144px] 2xl:left-[1300px]"}
          />
        </div>
        <div className="hidden lg:block absolute top-0 z-50" ref={plane2}>
          <FloatingCards
            icon={groupicon}
            headingText={"Community Management"}
            contentText={"Grow and engage your community."}
            classname={"left-[250px] top-[545px]"}
          />
          <FloatingCards
            icon={charticon}
            headingText={"Web3 Growth Strategy"}
            contentText={"Scale your brand with strategy."}
            classname={"left-[1188px] top-[510px] 2xl:left-[1200px]"}
          />
        </div>
        <div className="App">
          <Marquee />
          <Section section={sections[1]}>
            <UpcomingEvent />
          </Section>
          <Section section={sections[2]}>
            <GrowthUnleashed />
          </Section>
          <Section section={sections[3]}>
            <AboutUs />
          </Section>
          <Section section={sections[4]} isLast>
            <Journey />
          </Section>

          <div className="h-[30vh]"></div>
        </div>
      </SectionContext.Provider>
    </div>
  );
};

export default IndexPage;
