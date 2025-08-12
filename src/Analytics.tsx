// src/Analytics.tsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-0YP46V975D"; // <-- Replace with your ID

const Analytics = () => {
  const location = useLocation();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (typeof window.gtag === "function") {
      // On first load, send initial page_view
      if (firstLoad.current) {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: location.pathname + location.search,
        });
        firstLoad.current = false;
      } else {
        // On route change, send page_view
        window.gtag("event", "page_view", {
          page_path: location.pathname + location.search,
        });
      }
    }
  }, [location]);

  return null;
};

export default Analytics;
