import React, { useEffect, useRef } from "react";
import Paragraph from "../components/Paragraph";
import { motion, useScroll } from "framer-motion";

const AboutUs = () => {
  const ref = useRef(null);
  return (
    <div className="container  px-4 lg:px-25 relative mt-20 lg:mt-40 font-primary">
      <h1 className="font-exepixel text-5xl lg:text-6xl font-extrabold text-exebeige ">
        About <span className="text-exered">Us</span>
      </h1>
      <Paragraph ref={ref} />
    </div>
  );
};

export default AboutUs;
