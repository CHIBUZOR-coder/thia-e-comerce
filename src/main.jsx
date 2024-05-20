import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Homee.jsx";
import About from "./pages/home/About.jsx";

import Reviews from "./pages/home/Reviews.jsx";
import Contact from "./pages/home/Contact.jsx";
import Custom from "./pages/home/Custom.jsx";

const router = createBrowserRouter([
  {
    path: "/thia-e-comerce/",
    element: <App />,
    children: [
      {
        path: "/thia-e-comerce/",
        element: <Home />,
      },

      {
        path: "/thia-e-comerce/About",
        element: <About />,
      },

      {
        path: "/thia-e-comerce/Contact",
        element: <Contact />,
      },

     

      {
        path: "/thia-e-comerce/Reviews",
        element: <Reviews />,
      },

      {
        path: "/thia-e-comerce/Custom",
        element: <Custom  />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
