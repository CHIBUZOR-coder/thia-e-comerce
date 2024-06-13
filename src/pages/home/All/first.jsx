import React, { useEffect } from "react";
import { PreloadImages } from "../../../Components/PreloadImages"; // Assuming PreloadImages is the correct function
import useFetch from "./ImageStyle";
import { Link } from "react-router-dom";

const First = () => {
  const imageUrl = "./images/aabb.jpg";


    PreloadImages([imageUrl]); // Preload the image after the component mounts


  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd  flex justify-center  items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to="/thia-e-comerce/Bridals/1"
        className="flex italic justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Buy{" "}
      </Link>
    </div>
  );
};

export default First;
