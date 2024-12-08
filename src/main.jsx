// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import RenderAppWithData from "./pages/home/ShopCategory/RenderApp";
import "./index.css";
import DataProvider from "./Components/DataContext";


// Create the root once
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application using the existing root
root.render(
  <DataProvider>
    <RenderAppWithData />
  </DataProvider>
);
