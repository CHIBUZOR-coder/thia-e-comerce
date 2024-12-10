import React, { useContext, useEffect } from "react";
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
// import Matchng from "./Matchng.jsx";
import AboutThia from "../AboutThia.jsx";
import SizeGuide from "../SizeGuide.jsx";
import Terms from "../Terms.jsx";
import Care from "../Care.jsx";
import Bridls from "./Bridls.jsx";
import SearchPage from "../SearchPage.jsx";
import Shopp from "../../Shopp.jsx";
import Kidies from "./Kidis.jsx";
import ShopAll from "../ShopAll.jsx";
import FAQs from "../FAQs.jsx";
import Allshops from "../../Allshops.jsx";
import { useState } from "react";
import DataResolve from "../DataResolve.jsx";
import { DataContext } from "../../../Components/DataContext.jsx";
import Products from "../../../Admin/ProductsApp.jsx";
import AddProduct from "../../../Admin/AddProduct.jsx";
import AdminHome from "../../../Admin/AdminHome.jsx";
import ProductsApp from "../../../Admin/ProductsApp.jsx";
import AdminHome2 from "../../../Admin/AdminHome2.jsx";
import AdminHome3 from "../../../Admin/AdminHome3.jsx";
import AdminHome4 from "../../../Admin/AdminHome4.jsx";
import Login from "../../Login.jsx";
import Account from "../../../Components/Account.jsx";
import Signin from "../../Signup.jsx";
import Signup from "../../Signup.jsx";

import Matching from "./Matchingg.jsx";

const RenderAppWithData = () => {
  const {
    AnkaraProducts,
    AhebiProducts,
    CoperateProducts,
    KaftanProducts,
    MatchingProducts,
    BridalProducts,
    KidiesProducts,
    lightMode,
  } = useContext(DataContext);

  useEffect(() => {
    console.log(MatchingProducts);
  }, [MatchingProducts]);
  // No need to use useMemo if you're directly calling the context value

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
        { path: "/thia-e-comerce/Allshops", element: <Allshops /> },

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
          element: <Matching />,
        },
        { path: "/thia-e-comerce/Kidis", element: <Kidies /> },
        { path: "/thia-e-comerce/AboutThia", element: <AboutThia /> },
        { path: "/thia-e-comerce/SizeGuide", element: <SizeGuide /> },
        { path: "/thia-e-comerce/Terms", element: <Terms /> },
        { path: "/thia-e-comerce/Care", element: <Care /> },
        { path: "/thia-e-comerce/SearchPage", element: <SearchPage /> },
        { path: "/thia-e-comerce/ShopAll", element: <ShopAll /> },
        { path: "/thia-e-comerce/Login", element: <Login /> },
        { path: "/thia-e-comerce/Account", element: <Account /> },
        { path: "/thia-e-comerce/Signup", element: <Signup /> },
        {
          path: "/thia-e-comerce/Ankara/:id",
          element: <Shopp dataItems={AnkaraProducts} />,
        },
        {
          path: "/thia-e-comerce/Ashoebi/:id",
          element: <Shopp dataItems={AhebiProducts} />,
        },
        {
          path: "/thia-e-comerce/Coperate/:id",
          element: <Shopp dataItems={CoperateProducts} />,
        },
        {
          path: "/thia-e-comerce/Bridals/:id",
          element: <Shopp dataItems={BridalProducts} />,
        },
        {
          path: "/thia-e-comerce/Kaftan/:id",
          element: <Shopp dataItems={KaftanProducts} />,
        },
        {
          path: "/thia-e-comerce/Matching/:id",
          element: <Shopp dataItems={MatchingProducts} />,
        },
        {
          path: "/thia-e-comerce/Kidies/:id",
          element: <Shopp dataItems={KidiesProducts} />,
        },
      ],
    },

    {
      path: "/thia-e-comerce/Admin",
      element: <ProductsApp />,
      children: [
        {
          path: "/thia-e-comerce/Admin",
          element: <AdminHome />,
        },
        {
          path: "/thia-e-comerce/Admin/AddProduct",
          element: <AddProduct />,
        },
        {
          path: "/thia-e-comerce/Admin/AdminHome2",
          element: <AdminHome2 />,
        },
        {
          path: "/thia-e-comerce/Admin/AdminHome3",
          element: <AdminHome3 />,
        },
        {
          path: "/thia-e-comerce/Admin/AdminHome4",
          element: <AdminHome4 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RenderAppWithData;
