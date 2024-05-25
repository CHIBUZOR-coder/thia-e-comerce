import { Link } from "react-router-dom";
import { PreloadImages } from "../../../Components/PreloadImages";
import useFetch from "./carocel"; // Import the custom hook


export const Coperate = () => {
  const imageUrl = [
    "./images/938.jpg",
    "./images/17533.jpg",
    "./images/red.jpg",
    "./images/cop1.jpg",
    "./images/cop2.jpg",
    "./images/cop22.jpg",
    "./images/cop3.jpg",
    "./images/cop4.jpg",
    "./images/cop5.jpg",
    "./images/cop6.jpg",
    "./images/cop7.jpg",
    "./images/cop8.jpg",
  ];

  PreloadImages(imageUrl);
  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd flex justify-center trans items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to="/thia-e-comerce/Coprate"
        className="italic  flex justify-center names  w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Coperate
      </Link>
    </div>
  );
};

export default Coperate;
