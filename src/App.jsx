import "./App.css";
import Navbar from "./components/Navbar";
import StickyCursor from "./components/StickyCursor";

import IndexPage from "./pages/IndexPage";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";

function App() {
  return (
    <div className="overflow-x-clip">
      <StickyCursor />
      <Navbar />
      <IndexPage />
    </div>
  );
}

export default App;
