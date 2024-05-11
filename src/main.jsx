import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Homee.jsx";


const router = createBrowserRouter([
  {
    path: "/thia-e-comerce/",
    element: <App />,
    children: [
      {
        path: "/thia-e-comerce/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
