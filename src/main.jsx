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
import Akara from "./pages/home/ShopCategory/Akara.jsx";
import Ashebi from "./pages/home/ShopCategory/Ashebi.jsx";
import Coprate from "./pages/home/ShopCategory/Coprate.jsx";
import Kaftn from "./pages/home/ShopCategory/Kaftn.jsx";
import Matchng from "./pages/home/ShopCategory/Matchng.jsx";
import Kidis from "./pages/home/ShopCategory/Kidis.jsx";
import AboutThia from "./pages/home/AboutThia.jsx";
import SizeGuide from "./pages/home/SizeGuide.jsx";
import Terms from "./pages/home/Terms.jsx";
import Care from "./pages/home/Care.jsx";
import Bridls from "./pages/home/ShopCategory/Bridls.jsx";
import SearchPage from "./pages/home/SearchPage.jsx";

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
        element: <Custom />,
      },

      {
        path: "/thia-e-comerce/Akara",
        element: <Akara />,
      },

      {
        path: "/thia-e-comerce/Ashebi",
        element: <Ashebi />,
      },
      {
        path: "/thia-e-comerce/Coprate",
        element: <Coprate />,
      },
      {
        path: "/thia-e-comerce/Kaftn",
        element: <Kaftn />,
      },
      {
        path: "/thia-e-comerce/Bridls",
        element: <Bridls />,
      },
      {
        path: "/thia-e-comerce/Matchng",
        element: <Matchng />,
      },
      {
        path: "/thia-e-comerce/Kidis",
        element: <Kidis />,
      },
      {
        path: "/thia-e-comerce/AboutThia",
        element: <AboutThia />,
      },
      {
        path: "/thia-e-comerce/SizeGuide",
        element: <SizeGuide />,
      },
      {
        path: "/thia-e-comerce/Terms",
        element: <Terms />,
      },
      {
        path: "/thia-e-comerce/Care",
        element: <Care />,
      },
      {
        path: "/thia-e-comerce/SearchPage",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
