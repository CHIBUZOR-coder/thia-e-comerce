import { Link } from "react-router-dom";
import { PreloadImages } from "../../../Components/PreloadImages";
import useFetch from "./carocel"; // Import the custom hook
import { useContext } from "react";
import { DataContext } from "../../../Components/DataContext";

export const MatchingSet = () => {
  const { MatchingProducts } = useContext(DataContext);

  const imageUrl = MatchingProducts.map((item) => item.image);
  // console.log(imageUrl);

  PreloadImages(imageUrl);

  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd flex justify-center trans items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to="/thia-e-comerce/Matchng"
        className="italic  flex justify-center names  w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Matching
      </Link>
    </div>
  );
};

export default MatchingSet;
