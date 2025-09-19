import React from "react";
import PageNotFound from "../components/PageNotFound";
import Curve from "../components/Layout/Curve";
import { useSectionContextValues } from "../context/SectionContext";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const { values } = useSectionContextValues();
  const { events } = values;
  const navigate = useNavigate();
  return (
    <Curve>
      <div className="event-page">
        <div className="px-4 lg:px-25 relative mt-20  font-primary w-full h-full">
          <div className="w-full flex justify-between">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-exered ">
              Events List
            </h1>
          </div>
          <div className="h-[2px] w-full bg-exered mt-4"></div>
          <div className="flex flex-col items-center justify-center  w-full">
            <div className="w-full ">
              {events
                .slice(0)
                .reverse()
                .map((item, index) => (
                  <div
                    key={index}
                    className="w-full    p-4"
                    onClick={() => navigate(`/events/${item._id}`)}
                  >
                    <div className=" rounded-lg shadow-lg py-4 px-10 transition-transform transform hover:scale-101 duration-300   w-full bg-exebeige/10  ">
                      <div className="flex justify-between items-center mb-4 ">
                        <img src={item.image[0]} className="w-3/12" alt="" />
                        <div className="text-right ">
                          <h2 className="text-4xl font-black text-exebeige mb-3 ">
                            {item.name}
                          </h2>
                          <div className="flex gap-3 justify-end items-center">
                            <p className="text-exebeige">{item.date}</p>
                            <p className="text-exebeige">{item.time}</p>
                          </div>

                          <p className="text-exebeige">{item.location}</p>
                          <p className="text-exered bg-exebeige px-4 py-2 rounded-lg mt-4 text-center font-bold absolute right-0 mr-10 mb-10">
                            {item.registration
                              ? "Register Now"
                              : "Registration Closed"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="bg-fix h-[300vh] sm:h-[120vh] -mt-[300vh] sm:-mt-[120vh]"></div>
      </div>
    </Curve>
  );
};

export default EventsPage;
