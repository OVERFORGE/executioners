import "./App.css";
import Navbar from "./components/Navbar";
import StickyCursor from "./components/StickyCursor";

import IndexPage from "./pages/IndexPage";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Route,
  Routes,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import EsportsPage from "./pages/EsportsPage";
import MerchandisePage from "./pages/MerchandisePage";
import ContactUsPage from "./pages/ContactUsPage";
import GrowWIthUs from "./pages/GrowWIthUs";
import TermsOfServices from "./pages/TermsOfServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
function App() {
  return (
    <div className="overflow-x-clip">
      <StickyCursor />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/esports" element={<EsportsPage />} />
        <Route path="/merchandise" element={<MerchandisePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/grow-with-us" element={<GrowWIthUs />} />
        <Route path="/terms-of-service" element={<TermsOfServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
