import useFetch from "./ImageStyle";
import React, { useEffect } from "react";
import { PreloadImages } from "../../../Components/PreloadImages";
import { Link } from "react-router-dom";

export const Third = () => {
  const imageUrl = "./images/bridal77.jpg";
    PreloadImages([imageUrl]); // Preload the image after the component mounts // Ensure the effect runs when imageUrl changes

  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd  flex justify-center  items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to="/"
        className="flex italic justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Buy
      </Link>
    </div>
  );
};

export default Third;
