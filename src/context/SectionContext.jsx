import { createContext, useState } from "react";

export const SectionContext = createContext(null);

export const useSectionContextValues = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSectionProgress, setActiveSectionProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return {
    values: {
      activeSection,
      setActiveSection,
      activeSectionProgress,
      setActiveSectionProgress,
      isActive,
      setIsActive,
      backendUrl,
    },
  };
};
