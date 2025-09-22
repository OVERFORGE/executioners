import React from "react";
import { useParams } from "react-router-dom";
import PricingComparison from "../components/PricingComparison";
import Curve from "../components/Layout/Curve";
const SubscribePage = () => {
  const { packageId } = useParams();

  return (
    <Curve>
      <div className={"pb-7"}>
        <div className="mask-container">
          <PricingComparison packageId={packageId} />
        </div>
      </div>
      <div className="bg-fix h-[300vh] sm:h-[120vh] -mt-[300vh] sm:-mt-[120vh]"></div>
    </Curve>
  );
};

export default SubscribePage;
