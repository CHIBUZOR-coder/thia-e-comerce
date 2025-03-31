import React from "react";
import Banner from "../Banner";
import Category from "./ChangeFunction/Categoryy";
import Allslides from "./All/Allslides";
import MoreProducts from "./MoreProducts";
import Footer from "./Footer";


const Home = () => {
  return (
    <div className="relative">

     
      <div>
        <Banner />
      </div>
      <div className="relative flex flex-col-reverse w-full px-4 md:flex-row md:pt-5 md:px-28 md:gap-14">
        <Allslides />
        <Category />
      </div>

      <MoreProducts />
    
      <Footer />
    </div>
  );
};

export default Home;
