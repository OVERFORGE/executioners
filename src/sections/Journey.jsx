import React from "react";
import WholeJourney from "../components/WholeJourney";

const Journey = () => {
  return (
    <div className="container px-25 relative lg:mt-40 font-primary">
      <h1 className="text-6xl font-extrabold text-exebeige ">
        Our <span className="text-exered">Journey</span>
        <WholeJourney />
      </h1>
    </div>
  );
};

export default Journey;
