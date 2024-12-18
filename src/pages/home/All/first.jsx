import React, { useContext, useEffect } from "react";
import { PreloadImages } from "../../../Components/PreloadImages"; // Assuming PreloadImages is the correct function
import useFetch from "./ImageStyle";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Components/DataContext";

const First = () => {
  // const imageUrl = "./images/aabb.jpg";



  const { Allproducts } = useContext(DataContext);

  const product = Allproducts.find(
    (item) => item.style === "Sleavless && Net Sleeve"
  );
  // console.log(product);

  // const imageUrl = `./images/${endpoint}.jpg`;
  const imageUrl = product.image;


  

    PreloadImages([imageUrl]); // Preload the image after the component mounts


  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd  flex justify-center  items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to={`/thia-e-comerce/Bridals/${product.id}`}
        className="flex italic justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Buy{" "}
      </Link>
    </div>
  );
};

export default First;
