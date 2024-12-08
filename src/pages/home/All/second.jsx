import React, { useContext, useEffect } from "react";
import { PreloadImages } from "../../../Components/PreloadImages";
import useFetch from "./ImageStyle";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Components/DataContext";

export const Second = () => {
  // const imageUrl = "./images/ash32.jpg";

  const { Allproducts } = useContext(DataContext);

  const product = Allproducts.find((item) => item.price === 688);
  // console.log(product);

  // const imageUrl = `./images/${endpoint}.jpg`;
  const imageUrl = product.image;

  PreloadImages([imageUrl]);
  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd  flex justify-center  items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to="/thia-e-comerce/Ashoebi/10"
        className="flex italic justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Buy{" "}
      </Link>
    </div>
  );
};

export default Second;
