import { useContext } from "react";
import { PreloadImages } from "../../../Components/PreloadImages";
import useFetch from "./carocel"; // Import the custom hook
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../../Components/DataContext";

export const Ashoebi = () => {
  const { AhebiProducts } = useContext(DataContext);



  const imageUrl = AhebiProducts.map((item) => item.image);
  // console.log(imageUrl);

  PreloadImages(imageUrl);
  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd flex justify-center trans items-end h-big3  "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to="/thia-e-comerce/Ashebi"
        className="italic  flex justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Ashoebi
      </Link>
    </div>
  );
};

export default Ashoebi;
