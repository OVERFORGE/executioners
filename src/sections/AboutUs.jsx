import React, { useEffect, useRef } from "react";
import Paragraph from "../components/Paragraph";
import { motion, useScroll } from "framer-motion";

const AboutUs = () => {
  const ref = useRef(null);
  return (
    <div className="container px-25 relative lg:mt-40 font-primary">
      <h1 className="text-6xl font-extrabold text-exebeige ">
        About <span className="text-exered">Us</span>
      </h1>
      <Paragraph ref={ref} />
    </div>
  );
};

export default AboutUs;
