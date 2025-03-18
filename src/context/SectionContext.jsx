import { createContext, useState } from "react";

export const SectionContext = createContext(null);

export const useSectionContextValues = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSectionProgress, setActiveSectionProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  return {
    values: {
      activeSection,
      setActiveSection,
      activeSectionProgress,
      setActiveSectionProgress,
      isActive,
      setIsActive,
    },
  };
};
