import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
export const SectionContext = createContext(null);

export const useSectionContextValues = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSectionProgress, setActiveSectionProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [events, setEvents] = useState([]);
  const getEventsData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/v1/event/list-events"
      );
      if (data.success) {
        setEvents(data.events);
      } else {
        console.log("Error fetching events data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEventsData();
  }, []);
  return {
    values: {
      activeSection,
      setActiveSection,
      activeSectionProgress,
      setActiveSectionProgress,
      isActive,
      setIsActive,
      backendUrl,
      events,
      setEvents,
    },
  };
};
