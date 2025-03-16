import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import JourneyParagraph from "./JourneyParagraph";
import JourneyRedDot from "./JourneyRedDot";
import JourneyLine from "./JourneyLine";
import consoleImg from "../assets/console.png";

const WholeJourney = () => {
  const line1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: line1,
    offset: ["start 0.99", "start 0.35"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const screenWidth = window.innerWidth;
  return (
    <motion.div>
      {screenWidth > 1024 ? (
        <div>
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <div className="flex-6/12">
              {/* <img src={consoleImg} alt="" /> */}
            </div>
            <JourneyRedDot />
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Entering the Esports Arena"}
                paragraph={
                  "We started our journey in competitive esports, quickly rising through the ranks. Our team secured a spot among the Top 10 CODM teams in India and built a formidable T1 lineup in Valorant. These early successes established our reputation as a dominant force in the esports industry."
                }
              />
            </div>
          </div>
          <JourneyLine />
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Transitioning to Web3 Gaming"}
                paragraph={
                  "Recognizing the potential of blockchain technology, we pivoted into Web3 gaming. We became a recognized Web3 Esports Guild, partnering with leading blockchain-based games and building a strong community of competitive gamers. This shift positioned us as pioneers in the evolving Web3 gaming landscape."
                }
              />
            </div>
            <JourneyRedDot />
            <div className="flex-6/12 "></div>
          </div>
          <JourneyLine />
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <div className="flex-6/12"></div>
            <JourneyRedDot />
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Partnering with Web3 Brands"}
                paragraph={
                  "As we gained traction in Web3, we started collaborating with major Web3 brands as ambassadors. We created tailored content, hosted online events, and managed community engagement. These strategic partnerships helped our clients strengthen their brand presence and foster deeper community connections."
                }
              />
            </div>
          </div>
          <JourneyLine />
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Evolving into a Media Powerhouse"}
                paragraph={
                  "With our growing expertise, we expanded into a Web3 Media & Marketing Agency. Today, we empower Web3 brands through high-impact content, strategic event hosting, and expert community management. Our tailored solutions drive engagement, brand growth, and long-term success in the competitive Web3 space."
                }
              />
            </div>
            <JourneyRedDot />
            <div className="flex-6/12 "></div>
          </div>
          <JourneyLine />
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <div className="flex-6/12"></div>
            <JourneyRedDot />
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Being Written...."}
                paragraph={"// Content is in the making... //"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <JourneyRedDot />
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Entering the Esports Arena"}
                paragraph={
                  "We started our journey in competitive esports, quickly rising through the ranks. Our team secured a spot among the Top 10 CODM teams in India and built a formidable T1 lineup in Valorant. These early successes established our reputation as a dominant force in the esports industry."
                }
              />
            </div>
          </div>
          <JourneyLine />
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <JourneyRedDot />
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Transitioning to Web3 Gaming"}
                paragraph={
                  "Recognizing the potential of blockchain technology, we pivoted into Web3 gaming. We became a recognized Web3 Esports Guild, partnering with leading blockchain-based games and building a strong community of competitive gamers. This shift positioned us as pioneers in the evolving Web3 gaming landscape."
                }
              />
            </div>
          </div>
          <JourneyLine />
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <JourneyRedDot />
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Partnering with Web3 Brands"}
                paragraph={
                  "As we gained traction in Web3, we started collaborating with major Web3 brands as ambassadors. We created tailored content, hosted online events, and managed community engagement. These strategic partnerships helped our clients strengthen their brand presence and foster deeper community connections."
                }
              />
            </div>
          </div>
          <JourneyLine />
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <JourneyRedDot />
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Evolving into a Media Powerhouse"}
                paragraph={
                  "With our growing expertise, we expanded into a Web3 Media & Marketing Agency. Today, we empower Web3 brands through high-impact content, strategic event hosting, and expert community management. Our tailored solutions drive engagement, brand growth, and long-term success in the competitive Web3 space."
                }
              />
            </div>
          </div>
          <JourneyLine isLast />
          <div className="flex w-10/12  m-auto mt-10 gap-6 text-lg font-primary items-center text-exebeige ">
            <JourneyRedDot />
            <div className="flex-6/12">
              <JourneyParagraph
                heading={"Being Written...."}
                paragraph={"// Content is in the making... //"}
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default WholeJourney;
