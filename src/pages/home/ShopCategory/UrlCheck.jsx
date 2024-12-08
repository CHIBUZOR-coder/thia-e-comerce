

import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CurrentURLContext = createContext();

export const CurrentURLProvider = ({ children }) => {
  const location = useLocation();
  const [currentURL, setCurrentURL] = useState(location.pathname);
//   console.log(currentURL);
  useEffect(() => {
    console.log("Location changed:", location.pathname); // Log the location pathname
    setCurrentURL(location.pathname);
  }, [location]);

  return (
    <CurrentURLContext.Provider value={currentURL}>
      {children}
    </CurrentURLContext.Provider>
  );
};

