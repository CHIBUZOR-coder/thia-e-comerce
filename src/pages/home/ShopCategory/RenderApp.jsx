// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "../../../App.jsx";
// import Home from "../Homee.jsx";
// import About from "../About.jsx";
// import Reviews from "../Reviews.jsx";
// import Contact from "../Contact.jsx";
// import Custom from "../Custom.jsx";
// import Akara from "./Akara.jsx";
// import Ashebi from "./Ashebi.jsx";
// import Coprate from "./Coprate.jsx";
// import Kaftn from "./Kaftn.jsx";
// import Matchng from "./Matchng.jsx";

// import AboutThia from "../AboutThia.jsx";
// import SizeGuide from "../SizeGuide.jsx";
// import Terms from "../Terms.jsx";
// import Care from "../Care.jsx";
// import Bridls from "./Bridls.jsx";
// import SearchPage from "../SearchPage.jsx";
// import Shop from "./Shop.jsx";
// import useData from "./Datafetcher.jsx";
// import Kidies from "./Kidis.jsx";

// const RenderAppWithData = () => {
//   const {
//     ashoebiItems,
//     Ankara,
//     bridalsItems,
//     coperateItems,
//     kaftanItems,
//     kidesItems,
//     matchingItems,
//     isLoading,
//     error,
//   } = useData();

//   const router = createBrowserRouter([
//     {
//       path: "/thia-e-comerce/",
//       element: <App />,
//       children: [
//         { path: "/thia-e-comerce/", element: <Home /> },
//         { path: "/thia-e-comerce/About", element: <About /> },
//         { path: "/thia-e-comerce/Contact", element: <Contact /> },
//         { path: "/thia-e-comerce/Reviews", element: <Reviews /> },
//         { path: "/thia-e-comerce/Custom", element: <Custom /> },
//         { path: "/thia-e-comerce/Akara", element: <Akara data={Ankara} /> },
//         {
//           path: "/thia-e-comerce/Ashebi",
//           element: <Ashebi data={ashoebiItems} />,
//         },
//         {
//           path: "/thia-e-comerce/Coprate",
//           element: <Coprate data={coperateItems} />,
//         },
//         {
//           path: "/thia-e-comerce/Kaftn",
//           element: <Kaftn data={kaftanItems} />,
//         },
//         {
//           path: "/thia-e-comerce/Bridls",
//           element: <Bridls data={bridalsItems} />,
//         },
//         {
//           path: "/thia-e-comerce/Matchng",
//           element: <Matchng data={matchingItems} />,
//         },
//         {
//           path: "/thia-e-comerce/Kidis",
//           element: <Kidies data={kidesItems} />,
//         },
//         { path: "/thia-e-comerce/AboutThia", element: <AboutThia /> },
//         { path: "/thia-e-comerce/SizeGuide", element: <SizeGuide /> },
//         { path: "/thia-e-comerce/Terms", element: <Terms /> },
//         { path: "/thia-e-comerce/Care", element: <Care /> },
//         { path: "/thia-e-comerce/SearchPage", element: <SearchPage /> },
//         {
//           path: "/thia-e-comerce/Ankara/:id",
//           element: <Shop dataa="http://localhost:8000/Ankara" />,
//         },
//         {
//           path: "/thia-e-comerce/Ashoebi/:id",
//           element: <Shop dataa="http://localhost:8000/Ashoebi" />,
//         },
//         {
//           path: "/thia-e-comerce/Coperate/:id",
//           element: <Shop dataa="http://localhost:8000/Coperate" />,
//         },
//         {
//           path: "/thia-e-comerce/Bridals/:id",
//           element: <Shop dataa="http://localhost:8000/Bridals" />,
//         },
//         {
//           path: "/thia-e-comerce/Kaftan/:id",
//           element: <Shop dataa="http://localhost:8000/Kaftan" />,
//         },
//         {
//           path: "/thia-e-comerce/Matching/:id",
//           element: <Shop dataa="http://localhost:8000/Matching" />,
//         },
//         {
//           path: "/thia-e-comerce/Kidies/:id",
//           element: <Shop dataa="http://localhost:8000/Kides" />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default RenderAppWithData;

//The commented code above is set for when there is incorporation the backend It uses the shop container, while The code below is set to make the project avalable for viewing on web and it uses the shopp container..........

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
import Shopp from "../../Shopp.jsx";
import Cart from "../Cart";
import {
  AnkaraItems,
  AshoebiItems,
  CoperateItems,
  BridalItems,
  KidItems,
  MatchingItems,
  KaftanItems,
} from "./Data.jsx";
import { useMemo } from "react";
import Kidies from "./Kidis.jsx";
import ShopAll from "../ShopAll.jsx";
import FAQs from "../FAQs.jsx";
import { useState } from "react";

const RenderAppWithData = () => {
  const ankaraItems = useMemo(() => AnkaraItems(), []);
  const ashoebiItems = useMemo(() => AshoebiItems(), []);
  const coperateItems = useMemo(() => CoperateItems(), []);
  const bridalItems = useMemo(() => BridalItems(), []);
  const kaftanItems = useMemo(() => KaftanItems(), []);
  const kidItems = useMemo(() => KidItems(), []);
  const matchingItems = useMemo(() => MatchingItems(), []);
  const [IsQuestionOpen, setIsQuestionOpen] = useState(false);

  const handleAnswerShow2 = () => {
    setIsQuestionOpen((prev) => !prev);
  };

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
        { path: "/thia-e-comerce/Cart", element: <Cart /> },
        {
          path: "/thia-e-comerce/FAQs",
          element: (
            <FAQs
              handleAnswerShow2={handleAnswerShow2}
              IsQuestionOpen={IsQuestionOpen}
            />
          ),
        },
        {
          path: "/thia-e-comerce/Akara",
          element: <Akara data={ankaraItems} />,
        },
        {
          path: "/thia-e-comerce/Ashebi",
          element: <Ashebi data={ashoebiItems} />,
        },
        {
          path: "/thia-e-comerce/Coprate",
          element: <Coprate data={coperateItems} />,
        }, // Provide respective data
        {
          path: "/thia-e-comerce/Kaftn",
          element: <Kaftn data={kaftanItems} />,
        }, // Provide respective data
        {
          path: "/thia-e-comerce/Bridls",
          element: <Bridls data={bridalItems} />,
        }, // Provide respective data
        {
          path: "/thia-e-comerce/Matchng",
          element: <Matchng data={matchingItems} />,
        }, // Provide respective data
        { path: "/thia-e-comerce/Kidis", element: <Kidies data={kidItems} /> }, // Provide respective data
        { path: "/thia-e-comerce/AboutThia", element: <AboutThia /> },
        { path: "/thia-e-comerce/SizeGuide", element: <SizeGuide /> },
        { path: "/thia-e-comerce/Terms", element: <Terms /> },
        { path: "/thia-e-comerce/Care", element: <Care /> },
        { path: "/thia-e-comerce/SearchPage", element: <SearchPage /> },
        { path: "/thia-e-comerce/ShopAll", element: <ShopAll /> },
        {
          path: "/thia-e-comerce/Ankara/:id",
          element: <Shopp dataItems={ankaraItems} />,
        },
        {
          path: "/thia-e-comerce/Ashoebi/:id",
          element: <Shopp dataItems={ashoebiItems} />,
        },
        {
          path: "/thia-e-comerce/Coperate/:id",
          element: <Shopp dataItems={coperateItems} />, // Provide respective data
        },
        {
          path: "/thia-e-comerce/Bridals/:id",
          element: <Shopp dataItems={bridalItems} />, // Provide respective data
        },
        {
          path: "/thia-e-comerce/Kaftan/:id",
          element: <Shopp dataItems={kaftanItems} />, // Provide respective data
        },
        {
          path: "/thia-e-comerce/Matching/:id",
          element: <Shopp dataItems={matchingItems} />, // Provide respective data
        },
        {
          path: "/thia-e-comerce/Kidies/:id",
          element: <Shopp dataItems={kidItems} />, // Provide respective data
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RenderAppWithData;
