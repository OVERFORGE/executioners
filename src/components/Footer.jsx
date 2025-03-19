import React from "react";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <div
      className="relative h-[700px] lg:h-[300px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+700px)] lg:h-[calc(100vh+300px)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-700px)] lg:top-[calc(100vh-300px)] h-[700px] lg:h-[300px]">
          <FooterContent />
        </div>
      </div>
    </div>
  );
};

export default Footer;
