import React from "react";
import PageNotFound from "../components/PageNotFound";
import Curve from "../components/Layout/Curve";

const EventsPage = () => {
  return (
    <Curve>
      <div className="event-page">
        <div className="px-4 lg:px-25 relative mt-20  font-primary w-full h-full"></div>
        <PageNotFound />
      </div>
    </Curve>
  );
};

export default EventsPage;
