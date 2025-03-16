import React from "react";
import WholeJourney from "../components/WholeJourney";

const Journey = () => {
  return (
    <div className="container px-4 lg:px-25 relative mt-20 lg:mt-40 font-primary">
      <h1 className="text-5xl lg:text-6xl font-extrabold text-exebeige ">
        Our <span className="text-exered">Journey</span>
        <WholeJourney />
      </h1>
    </div>
  );
};

export default Journey;
