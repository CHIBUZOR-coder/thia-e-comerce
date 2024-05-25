import { PreloadImages } from "../../../Components/PreloadImages";
import useFetch from "./carocel"; // Import the custom hook
import { Link, useLocation } from "react-router-dom";


export const Ashoebi = () => {
  const imageUrl = [
    "./images/ashoebiii.jpg",
    "./images/ahee22.jpg",
    "./images/aabb.jpg",
    "./images/ashoebi2.jpg",
    "./images/ashe24.jpg",
    "./images/aaabbb.jpg",
    "./images/ahoeb22.jpg",
    "./images/ash32.jpg",
  ];
  PreloadImages(imageUrl);
  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd flex justify-center trans items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link to="/thia-e-comerce/Ashebi"
        className="italic  flex justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Ashoebi
      </Link>
    </div>
  );
};

export default Ashoebi;
