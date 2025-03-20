import React, { useEffect, useRef } from "react";
import Curve from "../components/Layout/Curve";
import PageNotFound from "../components/PageNotFound";
import A4 from "../assets/A4.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Atropos from "atropos/react";
import "atropos/css";
const AnEventPage = () => {
  return (
    <Curve>
      <div className="an-event relative">
        <div className="px-4 lg:px-25 relative mt-20  font-primary w-full h-full pb-10">
          <div className="flex relative">
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
            <div className="flex-7/12 p-10 w-full">
              <div className="event-card">
                <p className="text-exebeige text-4xl font-bold p-5">
                  Stellar WEB3 Workshop
                </p>
                <p className="text-exebeige text-xl font-bold p-5"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fix h-[30vh]"></div>
      </div>
    </Curve>
  );
};

export default AnEventPage;
