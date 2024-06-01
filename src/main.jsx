// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/home/Homee.jsx";
// import About from "./pages/home/About.jsx";

// import Reviews from "./pages/home/Reviews.jsx";
// import Contact from "./pages/home/Contact.jsx";
// import Custom from "./pages/home/Custom.jsx";
// import Akara from "./pages/home/ShopCategory/Akara.jsx";
// import Ashebi from "./pages/home/ShopCategory/Ashebi.jsx";
// import Coprate from "./pages/home/ShopCategory/Coprate.jsx";
// import Kaftn from "./pages/home/ShopCategory/Kaftn.jsx";
// import Matchng from "./pages/home/ShopCategory/Matchng.jsx";
// import Kidis from "./pages/home/ShopCategory/Kidis.jsx";
// import AboutThia from "./pages/home/AboutThia.jsx";
// import SizeGuide from "./pages/home/SizeGuide.jsx";
// import Terms from "./pages/home/Terms.jsx";
// import Care from "./pages/home/Care.jsx";
// import Bridls from "./pages/home/ShopCategory/Bridls.jsx";
// import SearchPage from "./pages/home/SearchPage.jsx";

// import Shop from "./pages/Shop.jsx";
// import { AnkaraItems, AshoebiItems } from "./pages/home/ShopCategory/Data.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/thia-e-comerce/",
//     element: <App />,
//     children: [
//       {
//         path: "/thia-e-comerce/",
//         element: <Home />,
//       },

//       {
//         path: "/thia-e-comerce/About",
//         element: <About />,
//       },

//       {
//         path: "/thia-e-comerce/Contact",
//         element: <Contact />,
//       },

//       {
//         path: "/thia-e-comerce/Reviews",
//         element: <Reviews />,
//       },

//       {
//         path: "/thia-e-comerce/Custom",
//         element: <Custom />,
//       },

//       {
//         path: "/thia-e-comerce/Akara",
//         element: <Akara />,
//       },

//       {
//         path: "/thia-e-comerce/Ashebi",
//         element: <Ashebi />,
//       },
//       {
//         path: "/thia-e-comerce/Coprate",
//         element: <Coprate />,
//       },
//       {
//         path: "/thia-e-comerce/Kaftn",
//         element: <Kaftn />,
//       },
//       {
//         path: "/thia-e-comerce/Bridls",
//         element: <Bridls />,
//       },
//       {
//         path: "/thia-e-comerce/Matchng",
//         element: <Matchng />,
//       },
//       {
//         path: "/thia-e-comerce/Kidis",
//         element: <Kidis />,
//       },
//       {
//         path: "/thia-e-comerce/AboutThia",
//         element: <AboutThia />,
//       },
//       {
//         path: "/thia-e-comerce/SizeGuide",
//         element: <SizeGuide />,
//       },
//       {
//         path: "/thia-e-comerce/Terms",
//         element: <Terms />,
//       },
//       {
//         path: "/thia-e-comerce/Care",
//         element: <Care />,
//       },
//       {
//         path: "/thia-e-comerce/SearchPage",
//         element: <SearchPage />,
//       },
//       {
//         path: "/thia-e-comerce/Ankara/:id",
//         element: <Shop data={AnkaraItems} />,
//       },
//       {
//         path: "/thia-e-comerce/Ashoebi/:id",
//         element: <Shop data={AshoebiItems} />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// // );

// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/home/Homee.jsx";
// import About from "./pages/home/About.jsx";
// import Reviews from "./pages/home/Reviews.jsx";
// import Contact from "./pages/home/Contact.jsx";
// import Custom from "./pages/home/Custom.jsx";
// import Akara from "./pages/home/ShopCategory/Akara.jsx";
// import Ashebi from "./pages/home/ShopCategory/Ashebi.jsx";
// import Coprate from "./pages/home/ShopCategory/Coprate.jsx";
// import Kaftn from "./pages/home/ShopCategory/Kaftn.jsx";
// import Matchng from "./pages/home/ShopCategory/Matchng.jsx";
// import Kidis from "./pages/home/ShopCategory/Kidis.jsx";
// import AboutThia from "./pages/home/AboutThia.jsx";
// import SizeGuide from "./pages/home/SizeGuide.jsx";
// import Terms from "./pages/home/Terms.jsx";
// import Care from "./pages/home/Care.jsx";
// import Bridls from "./pages/home/ShopCategory/Bridls.jsx";
// import SearchPage from "./pages/home/SearchPage.jsx";
// import Shop from "./pages/Shop.jsx";
// import useData from "./pages/home/ShopCategory/Datafetcher.jsx";

// const RenderAppWithData = () => {
//   const {
//     ashoebiItems,
//     ankaraItems,
//     bridalsItems,
//     coperateItems,
//     kaftanItems,
//     kidesItems,
//     matchingItems,
//     isLoading,
//     error,
//   } = useData();

//   useEffect(() => {
//     const router = createBrowserRouter([
//       {
//         path: "/thia-e-comerce/",
//         element: <App />,
//         children: [
//           {
//             path: "/thia-e-comerce/",
//             element: <Home />,
//           },
//           {
//             path: "/thia-e-comerce/About",
//             element: <About />,
//           },
//           {
//             path: "/thia-e-comerce/Contact",
//             element: <Contact />,
//           },
//           {
//             path: "/thia-e-comerce/Reviews",
//             element: <Reviews />,
//           },
//           {
//             path: "/thia-e-comerce/Custom",
//             element: <Custom />,
//           },
//           {
//             path: "/thia-e-comerce/Akara",
//             element: <Akara />,
//           },
//           {
//             path: "/thia-e-comerce/Ashebi",
//             element: <Ashebi />,
//           },
//           {
//             path: "/thia-e-comerce/Coprate",
//             element: <Coprate />,
//           },
//           {
//             path: "/thia-e-comerce/Kaftn",
//             element: <Kaftn />,
//           },
//           {
//             path: "/thia-e-comerce/Bridls",
//             element: <Bridls />,
//           },
//           {
//             path: "/thia-e-comerce/Matchng",
//             element: <Matchng />,
//           },
//           {
//             path: "/thia-e-comerce/Kidis",
//             element: <Kidis />,
//           },
//           {
//             path: "/thia-e-comerce/AboutThia",
//             element: <AboutThia />,
//           },
//           {
//             path: "/thia-e-comerce/SizeGuide",
//             element: <SizeGuide />,
//           },
//           {
//             path: "/thia-e-comerce/Terms",
//             element: <Terms />,
//           },
//           {
//             path: "/thia-e-comerce/Care",
//             element: <Care />,
//           },
//           {
//             path: "/thia-e-comerce/SearchPage",
//             element: <SearchPage />,
//           },
//           {
//             path: "/thia-e-comerce/Ankara/:id",
//             element: <Shop data={ankaraItems} />,
//           },
//           {
//             path: "/thia-e-comerce/Ashoebi/:id",
//             element: <Shop data={ashoebiItems} />,
//           },
//           {
//             path: "/thia-e-comerce/Coperate/:id",
//             element: <Shop data={coperateItems} />,
//           },
//           {
//             path: "/thia-e-comerce/Bridals/:id",
//             element: <Shop data={bridalsItems} />,
//           },
//           {
//             path: "/thia-e-comerce/Kaftan/:id",
//             element: <Shop data={kaftanItems} />,
//           },
//           {
//             path: "/thia-e-comerce/Matching/:id",
//             element: <Shop data={matchingItems} />,
//           },
//           {
//             path: "/thia-e-comerce/Kidies/:id",
//             element: <Shop data={kidesItems} />,
//           },
//         ],
//       },
//     ]);

//     ReactDOM.createRoot(document.getElementById("root")).render(
//       <RouterProvider router={router} />
//     );
//   }, [
//     ankaraItems,
//     ashoebiItems,
//     bridalsItems,
//     coperateItems,
//     kaftanItems,
//     matchingItems,
//     kidesItems,
//   ]);

//   return null; // This component doesn't render anything directly
// };

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RenderAppWithData />
// );

// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import RenderAppWithData from "./pages/home/ShopCategory/RenderApp";
import "./index.css";

// Create the root once
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application using the existing root
root.render(<RenderAppWithData />);
