import React from "react";
import Banner from "../Banner";
import Category from "./ChangeFunction/Categoryy";
import Allslides from "./All/Allslides";
import MoreProducts from "./MoreProducts";
import Footer from "./Footer";
import Navbar from "../../Components/Navbarr";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Banner />
      </div>
      <div className=" flex w-full  md:flex-row  flex-col-reverse  md:pt-5 xl:px-28 md:gap-14 px-4 relative">
        <Allslides />
        <Category />
      </div>

      <MoreProducts />

      <Footer />
    </div>
  );
};

export default Home;
