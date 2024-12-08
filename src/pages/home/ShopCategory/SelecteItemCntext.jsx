// src/SelectedItemContext.js
import React, { createContext, useState, useContext } from "react";

const SelectedItemContext = createContext();

export const SelectedItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};

export const UseSelectedItem = () => useContext(SelectedItemContext);
