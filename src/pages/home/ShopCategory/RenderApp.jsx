import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../../App.jsx";
import Home from "../Homee.jsx";
import About from "../About.jsx";
import Reviews from "../Reviews.jsx";
import Contact from "../Contact.jsx";
import Custom from "../Custom.jsx";
import Akara from "./Akara.jsx";
import Ashebi from "./Ashebi.jsx";
import Coprate from "./Coprate.jsx";
import Kaftn from "./Kaftn.jsx";
import Matchng from "./Matchng.jsx";

import AboutThia from "../AboutThia.jsx";
import SizeGuide from "../SizeGuide.jsx";
import Terms from "../Terms.jsx";
import Care from "../Care.jsx";
import Bridls from "./Bridls.jsx";
import SearchPage from "../SearchPage.jsx";
import Shop from "./Shop.jsx";
import useData from "./Datafetcher.jsx";
import Kidies from "./Kidis.jsx";

const RenderAppWithData = () => {
  const {
    ashoebiItems,
    Ankara,
    bridalsItems,
    coperateItems,
    kaftanItems,
    kidesItems,
    matchingItems,
    isLoading,
    error,
  } = useData();

  const router = createBrowserRouter([
    {
      path: "/thia-e-comerce/",
      element: <App />,
      children: [
        { path: "/thia-e-comerce/", element: <Home /> },
        { path: "/thia-e-comerce/About", element: <About /> },
        { path: "/thia-e-comerce/Contact", element: <Contact /> },
        { path: "/thia-e-comerce/Reviews", element: <Reviews /> },
        { path: "/thia-e-comerce/Custom", element: <Custom /> },
        { path: "/thia-e-comerce/Akara", element: <Akara data={Ankara} /> },
        {
          path: "/thia-e-comerce/Ashebi",
          element: <Ashebi data={ashoebiItems} />,
        },
        {
          path: "/thia-e-comerce/Coprate",
          element: <Coprate data={coperateItems} />,
        },
        {
          path: "/thia-e-comerce/Kaftn",
          element: <Kaftn data={kaftanItems} />,
        },
        {
          path: "/thia-e-comerce/Bridls",
          element: <Bridls data={bridalsItems} />,
        },
        {
          path: "/thia-e-comerce/Matchng",
          element: <Matchng data={matchingItems} />,
        },
        { path: "/thia-e-comerce/Kidis", element: <Kidies data={kidesItems} /> },
        { path: "/thia-e-comerce/AboutThia", element: <AboutThia /> },
        { path: "/thia-e-comerce/SizeGuide", element: <SizeGuide /> },
        { path: "/thia-e-comerce/Terms", element: <Terms /> },
        { path: "/thia-e-comerce/Care", element: <Care /> },
        { path: "/thia-e-comerce/SearchPage", element: <SearchPage /> },
        {
          path: "/thia-e-comerce/Ankara/:id",
          element: <Shop dataa="http://localhost:8000/Ankara" />,
        },
        {
          path: "/thia-e-comerce/Ashoebi/:id",
          element: <Shop dataa="http://localhost:8000/Ashoebi" />,
        },
        {
          path: "/thia-e-comerce/Coperate/:id",
          element: <Shop dataa="http://localhost:8000/Coperate" />,
        },
        {
          path: "/thia-e-comerce/Bridals/:id",
          element: <Shop dataa="http://localhost:8000/Bridals" />,
        },
        {
          path: "/thia-e-comerce/Kaftan/:id",
          element: <Shop dataa="http://localhost:8000/Kaftan" />,
        },
        {
          path: "/thia-e-comerce/Matching/:id",
          element: <Shop dataa="http://localhost:8000/Matching" />,
        },
        {
          path: "/thia-e-comerce/Kidies/:id",
          element: <Shop dataa="http://localhost:8000/Kides" />,
        },
      ],
    },
  ]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <RouterProvider router={router} />;
};

export default RenderAppWithData;
