import React from "react";
import Banner from "../Banner";
import Category from "./ChangeFunction/Categoryy";
import Allslides from "./ChangeFunction/Allslides";
const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className=" flex w-full  md:flex-row  flex-col-reverse  md:pt-5 xl:px-28 gap-5 px-4 relative">
        <Allslides />
        <Category />

      </div>

      <div className="h-40 w-48">

      </div>
    </div>
  );
};

export default Home;
