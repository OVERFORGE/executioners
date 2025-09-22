import React from "react";
import PageNotFound from "../components/PageNotFound";
import Curve from "../components/Layout/Curve";
import PromotionalVIdeo from "../sections/PromotionalVIdeo";

const GrowWIthUs = () => {
  return (
    <Curve>
      <div>
        <div className="container  px-4 lg:px-25 relative mt-20 lg:mt-40 font-primary">
          <PromotionalVIdeo />
        </div>

        <PageNotFound />

        <div className="bg-fix h-[300vh] sm:h-[120vh] -mt-[300vh] sm:-mt-[120vh]"></div>
      </div>
    </Curve>
  );
};

export default GrowWIthUs;
